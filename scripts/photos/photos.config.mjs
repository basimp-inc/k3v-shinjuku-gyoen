/**
 * 配信する写真の一覧と切り出し。build.mjs がこれを読んで public/photos/ へ書き出す。
 *
 * 写真に部屋名・ブランド名を紐づけない（部屋割りが未確定のため）。出力名は被写体だけで付ける。
 */
import { homedir } from "node:os";
import { join } from "node:path";

/** 原本の探索順。K3V_PHOTO_SRC を最優先。原本は public/ に置かず、ここに退避しておくのが望ましい */
export const SOURCE_DIRS = [
  process.env.K3V_PHOTO_SRC,
  join(homedir(), "Downloads"),
  join(homedir(), "Downloads", "k3v 503"),
  "public/primelocation",
  "public/renovation",
  "public/503",
].filter(Boolean);

/**
 * 表示枠ごとの書き出し寸法。縦横比は枠に合わせて1種類に固定する。
 *  card   = `.card .ph`（PRIME LOCATION の横スライド）。CSS は aspect-ratio:3/4、幅 300px 前後（モバイル 228px）。
 *           300×400 css px の 2 倍 = 600×800。
 *  swatch = `.sample .swatch`（RENOVATED の3枚）。CSS は高さ固定・幅可変で、
 *           375px: 310×153 / 1280px: 346×243 / 1920px: 548×245。カメラ素の 3:2 で出し、
 *           幅は 1920px 時の 2 倍強（1200px）まで。object-fit:cover が枠に合わせて切る。
 *  band   = `.band .pic`（ROOMS の帯）。1280px で 747×560（4:3）、375px で 375×234（16:10）。
 *           4:3 で出し、幅は 1280px 時の 2 倍（1500px）。375px では上下が約 17% 切れるので、
 *           主役は縦の中央 2/3 に置くこと。
 */
export const FRAMES = {
  card: { ratio: [3, 4], width: 600 },
  swatch: { ratio: [3, 2], width: 1200 },
  band: { ratio: [4, 3], width: 1500 },
};

/**
 * crop は「EXIF の向きを直したあとの画像」に対する 0..1 の比率。
 * build.mjs が frame の縦横比と一致しない切り出しを弾く。
 */
export const PHOTOS = [
  /* --- PRIME LOCATION。並びは getPrimeLocationPhotos（連番プレフィクス順）と
         primeLocation.convenience.items の添字で対応する。01-04 の順を変えないこと --- */
  {
    out: "location/01-convenience",
    frame: "card",
    src: "IMG_6392.JPG",
    // 縦写真（EXIF 8）。4000×6000 から 3:4（4000×5333）を取り、店頭が下寄りなので上を 6% 落とす
    crop: { x: 0, y: 0.06, w: 1, h: 8 / 9 },
  },
  {
    out: "location/02-drugstore",
    frame: "card",
    src: "IMG_6378.JPG",
    // 縦看板「薬ヒグチ」から「処方せん受付」まで左端を残す。箱看板は欠けない
    crop: { x: 0.12, y: 0, w: 0.5, h: 1 },
  },
  {
    out: "location/03-ramen",
    frame: "card",
    src: "IMG_6379.JPG",
    // 3:4 の幅（原画の 1/2）にちょうど収まる位置。看板「横浜家系 ラーメン…」を両端まで切らずに入れる
    crop: { x: 0.445, y: 0, w: 0.5, h: 1 },
  },
  {
    out: "location/04-cafe",
    frame: "card",
    src: "IMG_6390.JPG",
    // カフェの看板と軒先、右にレンガ色の道。レンガ壁の端は少し入れて足場にする
    crop: { x: 0.3, y: 0, w: 0.5, h: 1 },
  },

  /* --- ROOMS の帯。部屋割りがユーザーに承認された室だけ写真を割り当てる
         （2026-10-11 承認：503 = ROOM 01 / UNICO、ランプとグレーのソファの部屋 = ROOM 03 / CRASH GATE）。
         ROOM 02 は元写真が無いので置かない --- */
  {
    out: "rooms/unico-bedroom",
    frame: "band",
    src: "IMG_6305.JPG",
    // 6000×4000 から 4:3（5333×4000）。左の戸枠（原画の左 11%）を外し、壁のアートは切らない
    crop: { x: 0.108, y: 0, w: 8 / 9, h: 1 },
  },

  {
    out: "rooms/crash-gate-living",
    frame: "band",
    src: "IMG_6185.JPG",
    // 6000×4000 から 4:3。左の窓・ベッド・ダイニング・チェイズ・ラグが入る。2枚目のイラスト（ランプの一角）とは別の画角
    crop: { x: 0.1, y: 0, w: 8 / 9, h: 1 },
  },

  /* --- RENOVATED。被写体の種類（全景／キッチンとダイニング／水まわり）はそのまま --- */
  {
    out: "renovated/01-overview",
    frame: "swatch",
    src: "IMG_6194.JPG",
    crop: { x: 0, y: 0, w: 1, h: 1 },
  },
  {
    out: "renovated/02-kitchen-dining",
    frame: "swatch",
    // 旧: IMG_6326。同じ画角の連続カットだが、椅子の背が画面中央を割っていた。6323 は抜けがよい
    src: "IMG_6323.JPG",
    crop: { x: 0, y: 0, w: 1, h: 1 },
  },
  {
    out: "renovated/03-bench-shower",
    frame: "swatch",
    // 4000×6000 の縦写真から 3:2 の帯（4000×2667）。ベンチ・タオル・水栓が入る高さ
    src: "IMG_6207.JPG",
    crop: { x: 0, y: 0.52, w: 1, h: 4 / 9 },
  },
];
