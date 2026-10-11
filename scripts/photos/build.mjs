/**
 * 写真を共通の色調で書き出す。
 *
 *   node scripts/photos/build.mjs            # 全部
 *   node scripts/photos/build.mjs ramen      # id に "ramen" を含むものだけ
 *
 * 手順（1枚ごと）: EXIF の向きを直す → photos.config.mjs の crop で切る → 枠の 2 倍幅へ縮小
 *   → 中央値 L* を測って γ を決める（grade.mjs）→ 露出・彩度・色温度を補正 → 軽くシャープ → WebP。
 * 結果は public/photos/<out>.webp と scripts/photos/manifest.json（測定値）に出る。
 *
 * sharp は Next 同梱の推移依存（package.json には書かない）。
 */
import { existsSync, readdirSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { FRAMES, PHOTOS, SOURCE_DIRS } from "./photos.config.mjs";
import { GRADE, gammaFor, gradeBuffer, medianLightness } from "./grade.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT_DIR = join(ROOT, "public", "photos");

function findSource(name) {
  for (const dir of SOURCE_DIRS) {
    const base = resolve(ROOT, dir);
    if (!existsSync(base)) continue;
    const exact = join(base, name);
    if (existsSync(exact)) return exact;
    // public/primelocation の "01-IMG_xxxx.JPG" のような連番プレフィクス付きも拾う
    const hit = readdirSync(base).find((f) => f.endsWith("-" + name));
    if (hit) return join(base, hit);
  }
  throw new Error(`原本が見つからない: ${name}（探索: ${SOURCE_DIRS.join(", ")}）。K3V_PHOTO_SRC で場所を指定できる`);
}

const only = process.argv[2];
const manifest = {
  note: "build.mjs が書く。手で編集しない。gamma は元写真の色をイラストへ採るときにも使う",
  grade: GRADE,
  photos: {},
};

for (const p of PHOTOS) {
  if (only && !p.out.includes(only)) continue;
  const frame = FRAMES[p.frame];
  const outW = frame.width;
  const outH = Math.round((outW * frame.ratio[1]) / frame.ratio[0]);

  const file = findSource(p.src);
  const meta = await sharp(file).metadata();
  const swap = (meta.orientation ?? 1) >= 5;
  const W = swap ? meta.height : meta.width;
  const H = swap ? meta.width : meta.height;

  const rect = {
    left: Math.round(p.crop.x * W),
    top: Math.round(p.crop.y * H),
    width: Math.round(p.crop.w * W),
    height: Math.round(p.crop.h * H),
  };
  const got = rect.width / rect.height;
  const want = frame.ratio[0] / frame.ratio[1];
  if (Math.abs(got / want - 1) > 0.004) {
    throw new Error(`${p.out}: 切り出し ${rect.width}×${rect.height}（${got.toFixed(3)}）が枠 ${frame.ratio.join(":")}（${want.toFixed(3)}）と合わない`);
  }
  if (rect.left + rect.width > W || rect.top + rect.height > H) throw new Error(`${p.out}: 切り出しが画像の外`);

  // rotate() を extract() の前に呼ぶと、向きを直したあとの座標で切れる
  const { data, info } = await sharp(file, { failOn: "none" })
    .rotate()
    .extract(rect)
    .resize(outW, outH, { fit: "fill", kernel: "lanczos3" })
    .removeAlpha()
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const before = medianLightness(data, info.channels);
  const gamma = gammaFor(before);
  const graded = gradeBuffer(data, info.channels, gamma);
  const after = medianLightness(graded, info.channels);

  const outFile = join(OUT_DIR, p.out + ".webp");
  mkdirSync(dirname(outFile), { recursive: true });
  await sharp(graded, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .sharpen({ sigma: GRADE.sharpenSigma })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(outFile);

  const bytes = statSync(outFile).size;
  manifest.photos[p.out] = {
    src: file.replace(ROOT + "/", "").replace(process.env.HOME, "~"),
    frame: p.frame,
    crop: rect,
    out: [info.width, info.height],
    medianL: { before: +before.toFixed(1), after: +after.toFixed(1) },
    gamma: +gamma.toFixed(3),
    bytes,
  };
  console.log(
    `${p.out.padEnd(30)} ${info.width}×${info.height}  L*50%: ${before.toFixed(1)} → ${after.toFixed(1)}  γ ${gamma.toFixed(3)}  ${(bytes / 1024).toFixed(0)} KB`
  );
}

if (!only) {
  writeFileSync(join(ROOT, "scripts", "photos", "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
}
