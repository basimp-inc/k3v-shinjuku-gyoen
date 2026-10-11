# scripts/photos — 配信写真の共通色調補正と書き出し

TOP に出す写真を、**同じ光・同じ色調・同じ品質**で `public/photos/` へ書き出す。
補正は 露出・彩度・色温度 の3つだけ。数値は元写真の実測から決めてある（下の「実測」）。
イラスト（`app/[locale]/_components/scenes.ts`）の色も、同じ関数を通した後の色にする（`grade.mjs` の CLI）。

```bash
node scripts/photos/build.mjs          # 全部書き出す（約3秒）
node scripts/photos/build.mjs ramen    # id に "ramen" を含むものだけ
node scripts/photos/measure.mjs --crops                # 切り出し後の原本を実測
node scripts/photos/measure.mjs IMG_6194.JPG ...       # 任意の写真を実測
node scripts/photos/grade.mjs "#8F6743" --gamma 0.95   # イラストの採色。補正後の hex を返す
```

`sharp` は Next 同梱の推移依存で、`package.json` には書いていない（パッケージ管理が未整理のため）。
`node_modules/sharp` がある環境ならそのまま動く。

## 原本の置き場

`photos.config.mjs` の `SOURCE_DIRS` を上から探す。**環境変数 `K3V_PHOTO_SRC` が最優先。**
今は `~/Downloads`（撮影原本）と `public/primelocation`・`public/renovation`・`public/503`（旧置き場）が候補に入っている。
旧置き場の原本は各 5〜11MB で `public/` に置く理由が無い。削除するときは、先に原本を `K3V_PHOTO_SRC` の
指す場所へ退避しておくこと（退避しないと再実行できなくなる）。

## 手順（1枚ごと）

1. EXIF の向きを直す（`01-convenience` は縦写真・EXIF 8）
2. `photos.config.mjs` の `crop`（向き補正後の 0..1 比率）で切る。枠の縦横比と合わない切り出しは build が弾く
3. 枠の2倍幅へ縮小（Lanczos3）。`card` = 600×800（3:4）、`swatch` = 1200×800（3:2）
4. 切り出し後の**中央値 L\*** を測り、`gamma` を決める（`gammaFor`）
5. **露出 → 彩度 → 色温度** の順に Lab で補正（`gradeLab`）
6. 軽いシャープ（σ0.5）→ WebP（q82・effort6）

| 補正 | 中身 | 値 |
|---|---|---|
| 露出 | `L' = 100·(L/100)^γ`。γ は中央値 L\* を 56 へ寄せる値。上下限 0.70〜1.45 | `targetMedianL: 56` |
| 彩度 | `C*` が 24 を超えた分だけ tanh でなだらかに潰す。上限は 24+16 = 40。色相は動かさない | `vibranceKnee: 24` `vibranceRange: 16` |
| 色温度 | 全写真に同じ暖色シフト（a\* +0.5, b\* +3.0）。影は染めない（L\* 45 で全開） | `warmDa: 0.5` `warmDb: 3.0` |

### なぜこの3つ・この値か（実測）

`measure.mjs` の出力。同一カメラ（Canon EOS M5・18mm）・同日（2026-09-14）撮影のため、
**白バランスは元からそろっている**（明るい無彩色の b\* が −1.1〜+1.8。浴室だけ壁の木の反射で +5〜6 に出るが、
これは色被りではない）。ばらつきは次の2つだった。

- **露出** — 切り出し後の中央値 L\* が 50.8〜58.2。全体の写真では街 43〜51／内装 46〜64。
  目標 56 は、内装写真（6185・6194・6264・6323・6316・6326）の中央値の中央値 56.9 に合わせた。
- **看板の高彩度** — `C*>45` の画素が、街 1.6〜12.8%（ラーメン 12.8%・薬局 9.6%）に対し内装は 0〜0.2%。
  `C*` の p95 は ラーメン 85・薬局 61 に対し内装 13〜30。→ 内装を触らずに看板だけが効く vibrance 方式にした。
  `knee 20 / range 12` まで締めると黄が緑がかり、赤が茶に沈むので `24 / 16` で止めた。
- **色温度** — 個別の白バランス補正は逆効果（浴室を冷やす）なので、一律の暖色シフトだけ。
  イラスト側の「午前の窓からの斜光・暖色寄り」と同じ向き。

書き出し後（切り出し単位・`measure.mjs --crops` ＝ Before、`public/photos/*.webp` ＝ After）:

| | 中央値 L\* | C\* p95 | C\*>45 の割合 | 中性色 b\* |
|---|---|---|---|---|
| Before（7枚） | 50.8 〜 58.2 | 13 〜 85 | 0 〜 12.8% | −0.7 〜 +1.8 |
| After（7枚） | 55.4 〜 56.2 | 15 〜 42 | 0 〜 0.8% | +2.5 〜 +4.5 |

## 出力

```
public/photos/location/01-convenience.webp   ┐ PRIME LOCATION の横スライド。3:4・600×800
                       02-drugstore.webp     │ getPrimeLocationPhotos() が連番プレフィクス順に拾う
                       03-ramen.webp         │ （primeLocation.convenience.items と添字で対応）
                       04-cafe.webp          ┘
public/photos/renovated/01-overview.webp       ┐ RENOVATED の3枚。3:2・1200×800
                        02-kitchen-dining.webp │ 全景／キッチンとダイニング／水まわり
                        03-bench-shower.webp   ┘
scripts/photos/manifest.json                  各写真の測定値（元の中央値・γ・出力寸法・バイト数）
```

- 出力名に**部屋名・ブランド名を入れない**。部屋割りが確定していないため。
- 看板・ロゴは加工で消さず、描き換えない。補正は全画面に同じ手順で掛かるだけ。
- `01-` 〜 `04-` の連番プレフィクスを変えない（`primeLocation.convenience.items` の順序に対応）。

## イラストの採色

`manifest.json` の `gamma` は、その写真に掛けた露出の値。**写真からイラストの色を採るときは、
その写真の `gamma` を指定して `grade.mjs` を通した色を使う。** 元写真が manifest に無い場合は
`photos.config.mjs` に追加して `build.mjs` を回すと `gamma` が出る（出力画像は使わなくてよい）。
