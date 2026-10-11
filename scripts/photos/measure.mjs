/**
 * 写真の実測値を出す。共通補正の数値（grade.mjs の GRADE）を決める／見直すときの根拠取り用。
 *
 *   node scripts/photos/measure.mjs IMG_6194.JPG IMG_6323.JPG ...      # 全画面
 *   node scripts/photos/measure.mjs --crops                            # photos.config.mjs の切り出し後（原本）
 *
 * 出力: L* の 5/50/95 パーセンタイル、C* の 95 パーセンタイル、C*>45 の画素の割合、
 *       明るい無彩色（L*>68 かつ C*<14）の平均 a*, b*（= 白バランスの偏り）。
 */
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { FRAMES, PHOTOS, SOURCE_DIRS } from "./photos.config.mjs";
import { rgbToLab } from "./grade.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const find = (name) => {
  if (existsSync(name)) return resolve(name);
  for (const dir of SOURCE_DIRS) {
    const base = resolve(ROOT, dir);
    if (!existsSync(base)) continue;
    if (existsSync(join(base, name))) return join(base, name);
    const hit = readdirSync(base).find((f) => f.endsWith("-" + name));
    if (hit) return join(base, hit);
  }
  throw new Error("見つからない: " + name);
};

const pct = (sorted, p) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];

async function measure(label, pipeline) {
  const { data } = await pipeline.removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const Ls = [];
  const Cs = [];
  let hiC = 0;
  let na = 0;
  let nb = 0;
  let nn = 0;
  for (let i = 0; i < data.length; i += 3) {
    const [L, a, b] = rgbToLab(data[i], data[i + 1], data[i + 2]);
    const C = Math.hypot(a, b);
    Ls.push(L);
    Cs.push(C);
    if (C > 45) hiC++;
    if (L > 68 && C < 14) {
      na += a;
      nb += b;
      nn++;
    }
  }
  Ls.sort((x, y) => x - y);
  Cs.sort((x, y) => x - y);
  console.log(
    `${label.padEnd(34)} L* p05 ${pct(Ls, 0.05).toFixed(1).padStart(5)}  p50 ${pct(Ls, 0.5).toFixed(1).padStart(5)}  p95 ${pct(Ls, 0.95).toFixed(1).padStart(5)} | C* p95 ${pct(Cs, 0.95).toFixed(0).padStart(3)}  C*>45 ${((100 * hiC) / Ls.length).toFixed(1).padStart(4)}% | 中性色 a* ${nn ? (na / nn).toFixed(1) : "-"} b* ${nn ? (nb / nn).toFixed(1) : "-"} (n=${nn})`
  );
}

const args = process.argv.slice(2);
if (args[0] === "--crops") {
  for (const p of PHOTOS) {
    const file = find(p.src);
    const meta = await sharp(file).metadata();
    const swap = (meta.orientation ?? 1) >= 5;
    const W = swap ? meta.height : meta.width;
    const H = swap ? meta.width : meta.height;
    const rect = { left: Math.round(p.crop.x * W), top: Math.round(p.crop.y * H), width: Math.round(p.crop.w * W), height: Math.round(p.crop.h * H) };
    const w = FRAMES[p.frame].width / 2;
    await measure(p.out, sharp(file, { failOn: "none" }).rotate().extract(rect).resize(w));
  }
} else {
  for (const a of args) await measure(a, sharp(find(a), { failOn: "none" }).rotate().resize(480, 480, { fit: "inside" }));
}
