# K3V SHINJUKU GYOEN — 公式サイト

新宿御苑前に建つ、家具ブランドごとにコンセプトが異なる全3室のデザイナーズ民泊の公式サイト。
Next.js 16（App Router）＋ next-intl（ja / en / zh）、Tailwind CSS v4。Vercel にデプロイする。

作業のガイドは [CLAUDE.md](CLAUDE.md)、進捗と決定事項は [TASK.md](TASK.md)。

## セットアップ

```bash
npm install
npm run dev   # http://localhost:3000 → /ja にリダイレクト
```

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー |
| `npm run build` | 本番ビルド（型チェックを含む） |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | 型チェックのみ |

> ⚠️ ロックファイルは `pnpm-lock.yaml`（`pnpm-workspace.yaml` もあり、`node_modules` も
> pnpm が作った形）だが、**現在の開発マシンに pnpm は入っておらず、実際のコマンドは npm で
> 動いている**。どちらに寄せるかは未決着 —— pnpm を入れて統一するか、npm へ寄せて
> pnpm 系ファイルを畳むか、いずれ決める必要がある。

## ディレクトリ

```
app/
  globals.css              カラートークン（:root）・ベース・.reveal・フォーカス
  styles/
    top-design.css         TOPページの素材・配色・タイポグラフィ・自前のナビ/フッター
    top-layout.css         TOPページ各セクションのレイアウト（top-design の語彙を絞る）
    wood.css               全面共通のウッド（色＋柄）。上の2枚より後に読む
  [locale]/                多言語ルーティング（ja / en / zh、prefix は常に付く）
    layout.tsx             <html> ・フォント・共通クローム・NextIntlClientProvider
    page.tsx               TOP。_components/TopPage.tsx を描画するだけ
    _components/           TOPページ専用。ここ以外から import しない
      TopPage.tsx            本体（Server Component）
      TopBehaviour.tsx       クライアント挙動（ナビの solid 化・スクロールリビール・レール）
      autoRail.ts            近隣SHOP 横スライドのオートディスプレイ
      scenes.ts / flora.ts   イラスト（SVG を raw string で保持）
      topShared.tsx          セクションが共有する型と小さな部品
    rooms/                 /rooms・/rooms/[room]・/rooms/meet-the-designer
    stay/                  /stay
components/                サイト共通UI（下層ページのクローム・再利用パーツ）
i18n/                      next-intl の routing / request / navigation
lib/rooms.ts               部屋スラッグと配色テーマの対応
messages/{ja,en,zh}.json   全UI文言。3言語を必ず同時に更新する
public/                    静的アセット
docs/                      クライアント成果物の記録（実装の参照先ではない）
```

**判断に迷ったときの原則**

- ルート（URL）は `app/[locale]/` 以下だけを見ればわかる。
- TOPページの実装は `app/[locale]/_components/` に閉じている。他のページから import しない。
- 下層ページで再利用するものだけが `components/` に上がる。
- 色は必ず `app/globals.css` の `--color-*` トークン経由。ベタ書きの HEX を増やさない。
  TOPページ内部の素材色（`--cham` / `--indigo` / `--wood` / `--leaf` 系）は
  `app/styles/top-design.css` と `app/styles/wood.css` が持つ。
- UI文言はハードコードせず `messages/*.json` に追加し、**3言語すべてに追従**させる。

## デザインの経緯

TOPページは 2026-08 に7案のモックをクライアントレビューにかけ、**Washed Chambray** が採用された。
不採用案のCSS・コンポーネント・元モックHTML・生成スクリプトは
`~/workbench/design-mock-library` に案ごとの README 付きで保存してある（本リポジトリには無い）。

> ⚠️ `design-mock-library/washed-chambray/gen-assets.py` は採用案の `scenes.ts` と
> `top-design.css` を丸ごと再生成するスクリプトだが、**本番へ向けて実行してはいけない**。
> 本番側にはモックに無い手作業の修正が入っており、実行すると消える。詳細は
> [docs/README.md](docs/README.md) と [CLAUDE.md](CLAUDE.md)。
