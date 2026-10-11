/**
 * サイト共通の色調補正（露出・彩度・色温度の3つだけ）。
 *
 * 写真（build.mjs）とイラストのパレット採色（CLI）の両方が同じ関数を通る。
 * 値の根拠は README.md の「実測」節。見た目の好みで数値を動かさず、動かすなら
 * measure.mjs の出力を見直してからにすること。
 *
 *   node scripts/photos/grade.mjs "#a3846a" --gamma 0.92
 *     → 補正後の色を hex で返す。--gamma は元写真の manifest.json にある値
 */
import { pathToFileURL } from "node:url";

/** 補正パラメータ。ここが唯一の定義 */
export const GRADE = {
  /** 露出：画像ごとの中央値 L* をこの値へ寄せる。内装写真8枚（6185/6194/6264/6323/6316/6326…）の
   *  中央値の中央値が 56.9、街4枚は 43〜51。明るい側（503 系）と暗い床の側（御苑ビュー系）の間。 */
  targetMedianL: 56,
  /** L* に掛ける γ の上限・下限。0.80 = 最大で中間調をおよそ 1/2 段持ち上げる。
   *  暗い写真を無理に起こして階調を壊さないための安全弁。上限は、白い寝具で中央値 L* 67 の
   *  503 の寝室（IMG_6305）を目標 56 まで下げるのに 1.44 要るため 1.45（γ 1.0 / 1.15 / 1.3 / 1.45 を
   *  並べて、白が灰色にならないことを確認済み。ほかの写真の γ は 0.85〜1.08 で影響しない） */
  gammaMin: 0.7,
  gammaMax: 1.45,
  /** 彩度（vibrance）：Lab の C* が knee を超えた分だけを tanh でなだらかに潰す。
   *  切り出し後の C* の 95 パーセンタイルは 内装 13〜32、街の看板 33〜85（ラーメン 85・薬局 60）。
   *  内装はほぼ素通りし、看板だけが効く。上限は knee + range = 40（補正後の街は p95 28〜42）。
   *  knee 20 / range 12 まで締めると黄が緑がかり、赤が茶に沈むので不採用。 */
  vibranceKnee: 24,
  vibranceRange: 16,
  /** 色温度：全写真に同じ暖色寄りのシフト。同一カメラ・同一AWBで中性色が b* −0.5〜+1.7 に
   *  そろっているため、写真ごとの白バランス補正は行わない（浴室は壁の木が反射して b* 5〜6 に
   *  出るので、写真ごとに測ると逆に冷やしてしまう）。影は染めない（L* 45 で全開）。 */
  warmDa: 0.5,
  warmDb: 3.0,
  warmFullAtL: 45,
  /** リサイズ後の軽いシャープ（σ）。6000px → 600〜1200px の縮小で失われる芯を戻す */
  sharpenSigma: 0.5,
};

/* ---- sRGB <-> CIE Lab (D65) ------------------------------------------------ */

const LIN = new Float64Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  LIN[i] = c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
const finv = (t) => (t * t * t > 0.008856 ? t * t * t : (t - 16 / 116) / 7.787);
const enc = (c) => {
  const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return v < 0 ? 0 : v > 1 ? 255 : v * 255;
};

/** r,g,b: 0..255 → [L*, a*, b*] */
export function rgbToLab(r, g, b) {
  const R = LIN[r | 0],
    G = LIN[g | 0],
    B = LIN[b | 0];
  const X = (0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047;
  const Y = 0.2126729 * R + 0.7151522 * G + 0.072175 * B;
  const Z = (0.0193339 * R + 0.119192 * G + 0.9503041 * B) / 1.08883;
  const fx = f(X),
    fy = f(Y),
    fz = f(Z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

/** [L*, a*, b*] → [r, g, b] を 0..255（クランプ済み・小数のまま） */
export function labToRgb(L, a, b) {
  const fy = (L + 16) / 116;
  const X = finv(fy + a / 500) * 0.95047;
  const Y = finv(fy);
  const Z = finv(fy - b / 200) * 1.08883;
  const R = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
  const G = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
  const B = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
  return [enc(R), enc(G), enc(B)];
}

/* ---- 補正本体 -------------------------------------------------------------- */

/** 画像の中央値 L* から、その画像に掛ける γ を決める */
export function gammaFor(medianL, g = GRADE) {
  const m = Math.min(Math.max(medianL, 1), 99) / 100;
  const raw = Math.log(g.targetMedianL / 100) / Math.log(m);
  return Math.min(g.gammaMax, Math.max(g.gammaMin, raw));
}

/** Lab のまま補正する。順序は 露出 → 彩度 → 色温度 */
export function gradeLab(L, a, b, gamma, g = GRADE) {
  L = 100 * Math.pow(Math.max(L, 0) / 100, gamma);

  const C = Math.hypot(a, b);
  if (C > g.vibranceKnee) {
    const k = (g.vibranceKnee + g.vibranceRange * Math.tanh((C - g.vibranceKnee) / g.vibranceRange)) / C;
    a *= k;
    b *= k;
  }

  const w = Math.min(1, L / g.warmFullAtL);
  return [L, a + g.warmDa * w, b + g.warmDb * w];
}

/** RGB（0..255）を補正して RGB を返す */
export function gradeRgb(r, g, b, gamma, params = GRADE) {
  const [L, a, bb] = rgbToLab(r, g, b);
  const [L2, a2, b2] = gradeLab(L, a, bb, gamma, params);
  return labToRgb(L2, a2, b2);
}

/** 画像バッファ（RGB, 8bit, インターリーブ）の中央値 L*。4画素ごとに間引いて測る */
export function medianLightness(buf, channels = 3) {
  const hist = new Uint32Array(1001);
  let n = 0;
  for (let i = 0; i < buf.length; i += channels * 4) {
    const L = rgbToLab(buf[i], buf[i + 1], buf[i + 2])[0];
    hist[Math.max(0, Math.min(1000, Math.round(L * 10)))]++;
    n++;
  }
  let acc = 0;
  for (let i = 0; i <= 1000; i++) {
    acc += hist[i];
    if (acc >= n / 2) return i / 10;
  }
  return 50;
}

/** 画像バッファ全体を補正して新しいバッファを返す */
export function gradeBuffer(buf, channels, gamma, params = GRADE) {
  const out = Buffer.alloc(buf.length);
  for (let i = 0; i < buf.length; i += channels) {
    const [r, g, b] = gradeRgb(buf[i], buf[i + 1], buf[i + 2], gamma, params);
    out[i] = Math.round(r);
    out[i + 1] = Math.round(g);
    out[i + 2] = Math.round(b);
    for (let c = 3; c < channels; c++) out[i + c] = buf[i + c];
  }
  return out;
}

/* ---- CLI: 色を1つ補正して hex で返す（イラストのパレット用） --------------- */

const hex2rgb = (h) => {
  const s = h.replace("#", "");
  const v = s.length === 3 ? s.replace(/./g, "$&$&") : s;
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16));
};
const rgb2hex = (c) => "#" + c.map((x) => Math.round(x).toString(16).padStart(2, "0")).join("").toUpperCase();

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [color, flag, val] = process.argv.slice(2);
  if (!color || color.startsWith("--")) {
    console.error('usage: node scripts/photos/grade.mjs "#rrggbb" [--gamma 0.92]');
    process.exit(1);
  }
  const gamma = flag === "--gamma" ? parseFloat(val) : 1;
  console.log(rgb2hex(gradeRgb(...hex2rgb(color), gamma)));
}
