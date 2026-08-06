@AGENTS.md

# K3V SHINJUKU GYOEN — 公式サイト制作

このファイルは本リポジトリで作業する際のプロジェクト固有ガイド。作業前に必ず [TASK.md](TASK.md) を確認し、進捗を更新しながら進めること。

## プロジェクト概要

新宿御苑前に建つ、家具ブランドごとにコンセプトが異なる全3室のデザイナーズ民泊「K3V SHINJUKU GYOEN」の公式サイト。

- **ゴール**: 「新宿御苑前で一番予約したくなる民泊サイト」。公式サイト経由の直接予約導線を作り、OTA依存を減らす。
- **要件定義書（Source of Truth）**: https://docs.google.com/document/d/1CMOUpOBNIdinqRwsINJwuFoK9J3Pr7wXrcku125ysZo/edit — ページ構成・コピー案・お部屋仕様・予約導線・SEO方針など、内容に迷ったら必ずこのドキュメントを一次情報として参照する。

## ⚠️ 既知の不整合（最優先で解消）

現在 TOP ページに実装済みのコンテンツは、要件定義書とは**別のコンセプト**で書かれている（おそらく初期ドラフト/プレースホルダー）。新しいページを作る前に、または着手時に必ずこのズレを認識すること。

| 項目 | 現状の実装（messages/*.json, 各component） | 要件定義書の正しい内容 |
|---|---|---|
| 施設名 | K3v Tokyo | K3V SHINJUKU GYOEN |
| 立地 | 台東区谷中3-2-1／千代田線「根津駅」徒歩6分 | 新宿御苑前／新宿駅徒歩圏 |
| 部屋数 | 8室 | 3室 |
| コンセプト | 「和」と「北欧」が溶け合う暮らし | 家具ブランドごとに異なるライフスタイル（UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE） |
| ROOM 01 | 和と北欧のスタンダードルーム | UNICO ROOM — Natural Living（北欧ナチュラル） |
| ROOM 02 | Journal Standardのアーバンヴィンテージ（※これはほぼ一致） | JOURNAL STANDARD FURNITURE ROOM — Urban Vintage |
| ROOM 03 | CRASH GATEのインダストリアルモダン（※ほぼ一致） | CRASH GATE ROOM — Industrial Modern（詳細未定・準備中） |
| コピー | 「暮らすように、東京を旅する。」 | 「新宿御苑のすぐそばで、東京を暮らすように滞在する。」/ EN: "Stay steps away from Shinjuku Gyoen. Design Apartments in the Heart of Tokyo." / タグライン: "Not Just a Stay. Live Tokyo Beautifully." |

ROOM 02・03 のブランド名/世界観は要件定義書と概ね一致しているため活かせる。**施設名・立地・部屋数・ROOM 01・全体のブランドストーリーは要件定義書に合わせて書き換えが必要**。詳細は [TASK.md](TASK.md) の Phase 0 を参照。

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

- Next.js 15 (App Router) + TypeScript、`app/[locale]/` で多言語ルーティング
- next-intl（`i18n/routing.ts`: locales = `ja`(default) / `en` / `zh`、`localePrefix: "always"`）。UI文言はハードコードせず `messages/{ja,en,zh}.json` に追加し `useTranslations`/`getTranslations` 経由で参照する。3言語すべて追従させること。
- Tailwind CSS v4（CSS-first設定）。カラー・フォントトークンは `app/globals.css` の `:root` / `@theme inline` に集約。新しい色を増やす場合もここに変数を足す（コンポーネント内へのベタ書きHEXは既存踏襲だが、トークン化できるものは変数を優先）。
- コンポーネントは `components/` 直下にフラット配置。`Reveal.tsx` がスクロールインアニメーションの共通ラッパー。

## コマンド

```bash
npm run dev       # 開発サーバー
npm run build     # 本番ビルド
npm run lint      # ESLint
```

## 作業の進め方

1. 着手前に [TASK.md](TASK.md) の該当タスクを確認し、`in_progress` に更新する。
2. 要件定義書とクライアントのデザイン方針（本ファイル上部）の両方を満たしているか確認しながら実装する。
3. コンテンツを追加/変更したら `messages/ja.json` `en.json` `zh.json` を必ず同時に更新する（キーの過不足がないか確認）。
4. モバイルファースト必須（要件定義書 3章）。実装後は必ずモバイル幅で見た目を確認する。
5. 完了したら TASK.md のチェックを更新する。
