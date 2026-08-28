@AGENTS.md

# K3V SHINJUKU GYOEN — 公式サイト制作

このファイルは本リポジトリで作業する際のプロジェクト固有ガイド。作業前に必ず [TASK.md](TASK.md) を確認し、進捗を更新しながら進めること。

## プロジェクト概要

新宿御苑前に建つ、家具ブランドごとにコンセプトが異なる全3室のデザイナーズ民泊「K3V SHINJUKU GYOEN」の公式サイト。

- **ゴール**: 「新宿御苑前で一番予約したくなる民泊サイト」。公式サイト経由の直接予約導線を作り、OTA依存を減らす。
- **要件定義書（Source of Truth）**: https://docs.google.com/document/d/1CMOUpOBNIdinqRwsINJwuFoK9J3Pr7wXrcku125ysZo/edit — ページ構成・コピー案・お部屋仕様・予約導線・SEO方針など、内容に迷ったら必ずこのドキュメントを一次情報として参照する。

## ⚠️ TOPページの実装を上書きしないための注意

### 1. `scenes.ts` の `HERO` と `ROOM1_MORNING`（確定済み・勝手に戻さないこと）

`app/[locale]/_components/scenes.ts` の `HERO` と `ROOM1_MORNING`、および ROOM 01 の2枚
スライダーは、2026-08-21 にクライアント指示で確定した仕様。**別セッション/別エージェントが
「壊れている」と判断して元に戻すケースが実際に起きている。理由を確認せずに変更しないこと。**

- **`HERO`**: 初期生成版（障子・のれん・鉢植え・シャンブレーのシャツを干した「朝の縁側」の
  情景、git コミット `1f3ea55` 時点の内容）が正。2026-08-17 に一度「確定した ROOM 01 実
  レイアウトに合わせる」目的で描き直されたが、クライアント判断で初期生成版へ戻すことが確定済み。
- **`ROOM1_MORNING`**: 2026-08-17〜21 の間 `HERO` として使われていた「実レイアウト版」を
  退避した新規エクスポート。**元モックには存在しない、手動追加分。**
- **ROOM 01 の写真**: `TopPage.tsx` の ROOM 01 は `ROOM1`（1枚目）と `ROOM1_MORNING`（2枚目）
  を切り替える2枚スライダー。ラジオ入力 + CSS `:has()` のみで動作し JS 不要。対応 CSS は
  `app/styles/top-design.css` の `.ph .stamp` ルール直後（`.s-radio` / `.pic .ph.s0` /
  `.pic .ph.s1` / `.s-dots`）。

### 2. 生成スクリプトを本番へ向けて実行しないこと

TOPページはもともとモックHTMLから `scenes.ts` と `top-design.css` を生成していた。その
モックと生成スクリプトは 2026-08-28 に `~/workbench/design-mock-library/washed-chambray/`
へ退避してある。**再実行すると上の `ROOM1_MORNING`・スライダーCSS・確定版 `HERO` がすべて
消える**（モック側が未更新のため）。加えて本番側は SVG id を `fig-`、ルートクラスを
`.top-page` に改名済みで、生成物はそのままでは噛み合わない。

**イラストを直すときは `scenes.ts` を直接編集する。** これが唯一の正。

### 3. TOPページ以外の3案は削除済み

2026-08-25 に Washed Chambray が採用され、不採用の3案（現行案 / Gyoen Green /
Chambray Gyoen）は 2026-08-28 のリファクタでリポジトリから削除した。CSS・コンポーネント・
messages・元モック一式は `~/workbench/design-mock-library` に案ごとの README 付きで保存
してある。`<html data-theme>` による配色プレビュー機構も同時に撤去し、採用パレットは
`app/globals.css` の `:root` に畳んである。

## クライアントのデザイン方針（最重要・全ページ共通）

クライアント所見・希望（2026-08-05 確定）:

- **NG**: シックになりすぎない／重くなりすぎない／クールすぎない／高級感を出さない
- **OK**: カジュアル・ナチュラル・「Living感」＝生活感／暮らしやすさが伝わる
- **全体トーン**: **"チープシック"**（安っぽさではなく、肩の力が抜けた・親しみやすい・気取らない上質さ）

実装時の指針:
- 現行の `globals.css` のアーストーン配色（クリーム `#f3ece1`、ブラウン `#8a6b45`、角丸フォント Zen Maru Gothic）は方向性として悪くないが、**整いすぎ／余白の取りすぎで「高級ホテル感」に寄らないよう常に注意**する。写真は「インテリア雑誌レベル」の指定はあるが、スタイリングされすぎた画より、生活感のあるカットを優先。
- 角丸・パステル寄りの配色・手書き風/イラスト要素など「気取らなさ」を出す装飾は歓迎。逆にセリフ体の多用、黒×金の高級配色、過度な余白/グリッドの厳格さは避ける。
- コピーのトーンも「〜させていただきます」のような畏まった敬語より、暮らしに寄り添うカジュアルな語り口を優先。
- 新しいセクション/ページを作るたびに、この方針に沿っているか一度立ち止まって確認する。

## 技術スタック

- **Next.js 16 (App Router) + TypeScript**。`app/[locale]/` で多言語ルーティング。
- **next-intl**（`i18n/routing.ts`: locales = `ja`(default) / `en` / `zh`、`localePrefix: "always"`）。
  UI文言はハードコードせず `messages/{ja,en,zh}.json` に追加し `useTranslations` /
  `getTranslations` 経由で参照する。**3言語すべて追従させること。**
- **Tailwind CSS v4**（CSS-first設定）。`app/globals.css` が唯一のエントリで、`:root` に
  カラー・フォントトークン、`@theme inline` に Tailwind への橋渡しがある。
  **`app/globals.css` の場所を動かさないこと** —— Tailwind v4 の自動ソース検出の基準になっている。
- **パッケージマネージャは要整理**：ロックファイルは `pnpm-lock.yaml`（`pnpm-workspace.yaml`
  もあり `node_modules` も pnpm が作った形）だが、現在の開発マシンに pnpm は入っておらず、
  実際のコマンドは npm で動いている。**触るときは npm を使うこと。**

### ディレクトリの役割

| 場所 | 何を置くか |
|---|---|
| `app/[locale]/` | ルート（URL）。ここを見ればサイトのページ構成がわかる |
| `app/[locale]/_components/` | **TOPページ専用**のコンポーネントとイラスト。他のページから import しない |
| `app/[locale]/{rooms,stay}/_components/` | そのページ専用のコンポーネント |
| `components/` | 2箇所以上で使う共通UI。下層ページのクローム（`Nav` / `Footer` / `MobileBottomNav`）と再利用パーツ |
| `app/styles/` | TOPページのデザインシート（`top-design.css` / `top-layout.css`）と共通ウッド（`wood.css`） |
| `lib/` `i18n/` | 純粋なデータ・設定。UI を持たない |

新しいコンポーネントは**まずそのページの `_components/` に置く**。2箇所目の利用が出たときに
`components/` へ上げる。先回りして共通化しない。

### CSS の読み込み順（変えると壊れる）

`app/globals.css` の `@import` の順番に意味がある。

1. `tailwindcss`
2. `styles/top-design.css` — 素材・配色・タイポグラフィ
3. `styles/top-layout.css` — レイアウト。2 の語彙を絞る側なので後
4. `styles/wood.css` — 面の最終決定権を持つので最後

## コマンド

```bash
npm run dev       # 開発サーバー
npm run build     # 本番ビルド（型チェックを含む）
npm run lint      # ESLint
npx tsc --noEmit  # 型チェックのみ
```

## 作業の進め方

1. 着手前に [TASK.md](TASK.md) の該当タスクを確認し、`in_progress` に更新する。
2. 要件定義書とクライアントのデザイン方針（本ファイル上部）の両方を満たしているか確認しながら実装する。
3. コンテンツを追加/変更したら `messages/ja.json` `en.json` `zh.json` を必ず同時に更新する（キーの過不足がないか確認）。
4. モバイルファースト必須（要件定義書 3章）。実装後は必ずモバイル幅で見た目を確認する。
5. 完了したら TASK.md のチェックを更新する。
