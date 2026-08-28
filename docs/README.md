# docs/

本番実装の参照先ではなく、**クライアントへ出した成果物の記録**を置く場所。

| ディレクトリ | 内容 |
|---|---|
| [`review-2026-08-24/`](review-2026-08-24/) | 2026-08-24 のモバイルレビュー会議で配布した A4 8ページの資料（PDF）と、それを組み立てたスクリプト |

## デザイン検討中の資料はここには無い

TOPページのモックHTML・生成スクリプト・イラスト書き出し・検討メモは、2026-08-28 に
隣のリポジトリ **`~/workbench/design-mock-library`** へ移した。案ごとに README 付きで
1ディレクトリにまとまっている。

| 探しているもの | 場所 |
|---|---|
| 採用案の元モック HTML / 生成スクリプト / イラスト書き出し | `design-mock-library/washed-chambray/` |
| 不採用になった Gyoen Green 一式 | `design-mock-library/gyoen-green/` |
| 不採用になった Chambray Gyoen 一式（植物レイヤーの出所） | `design-mock-library/chambray-gyoen/` |
| 2026-08-17 に落選した4案 | `design-mock-library/{denim-sakura,timber-indigo,kraft-riso,doma-ceramic}/` |
| 検討中の作業メモ（`design-mocks.md` / `visual-redesign.md`） | `design-mock-library/process-docs/` |

> ⚠️ `design-mock-library/washed-chambray/gen-assets.py` は採用案の
> `app/[locale]/_components/scenes.ts` と `app/styles/top-design.css` を丸ごと再生成する
> スクリプトだが、**本番へ向けて実行してはいけない**。本番側にはモックに無い手作業の修正
> （ROOM 01 の2枚目スライド、CSSのみのスライダー、確定版 HERO）が入っており、実行すると
> 消える。イラストを直すときは `scenes.ts` を直接編集すること。
