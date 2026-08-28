# 2026-08-24 モバイル版 4案 確認会 資料

TOPページ4案（current / gyoen-green / washed-chambray / chambray-gyoen）の
モバイル表示を1画面ずつキャプチャし、印刷用A4 8ページにまとめたもの。

| ファイル | git | 用途 |
|---|---|---|
| `mobile-review-2026-08-24.pdf` | ✅ | **印刷用。これを配る。** A4縦・8ページ |
| `tools/` | ✅ | 撮影・組版スクリプト（下記「作り直したいとき」参照） |
| `mobile-review-2026-08-24.html` | ❌ | 画面で見る用。画像は data URI で埋め込み済み（単体で開ける）。ブラウザから印刷しても同じ体裁になる |
| `screens/` | ❌ | 個別スクリーン48枚（JPEG・幅780px）。会議中に1枚だけ大きく見たいとき用。`A-current-01.jpg` = 案A の1画面目 |

> **git に入っていない2つについて（2026-08-25）**
> `screens/`（8.0MB）と `.html`（5.1MB）は `.gitignore` 済みで、リポジトリには
> PDF と tools/ と この README だけが入っている。合わせて13MB あり、
> **PDF が印刷品質の記録を持っている**ため履歴に載せないことにした。
> 実体はこのフォルダのローカルにはある。クローンし直した環境には無い。
>
> なお `screens/` と HTML 内の画像は**別物**なので、片方から他方は復元できない：
> HTML 側は印刷用に縮小・再エンコードされたもの（470×1017 / 700×1515 / 760×1645）、
> `screens/` はフル解像度の原本（780×1688）。48枚ともバイト一致しない。

## ページ構成

| p. | 内容 |
|---|---|
| 1 | 表紙・この会で決めたいこと・判断のものさし・4案一覧 |
| 2 | ファーストビュー比較（1画面目＋2画面目） |
| 3–6 | 各案のモバイル全画面（A→B→C→D） |
| 7 | 比較表・直したい点・クライアント確認事項・前回からの変更点 |
| 8 | 決定シート（記入用） |

## キャプチャ条件

- ビューポート 390 × 844 px / DPR 2（iPhone 相当）
- ロケール `ja`、ローカル開発サーバー（`npm run dev`）の 2026-08-24 時点の内容
- スクロール1画面（844px）ごとに1枚。総画面数は A:10 / B:12 / C:13 / D:13
- レビュー用の配色スウォッチ（`[data-theme-mock]`）は非表示にしてキャプチャ
- `prefers-reduced-motion: reduce` を有効化し、スクロール連動アニメーション（`.rv` / `.reveal`）は
  すべて表示済みの状態に固定してある（＝実際にスクロールして最後まで見た状態と同じ）

## 作り直したいとき

`tools/` に使ったスクリプトが入っている。デザインを直したあと同じ資料を撮り直す場合はこの順で。

```bash
npm run dev                                  # 開発サーバー（:3000）
node docs/review-2026-08-24/tools/capture.mjs /tmp/k3v-shots
python3 docs/review-2026-08-24/tools/build_doc.py   # SRC を /tmp/k3v-shots に合わせて編集
```

最後にPDF化（Chrome for Testing のパスは環境に合わせる）:

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=out.pdf mobile-review-2026-08-24.html
```

`capture.mjs` がやっていること:

1. ヘッドレスChromeを CDP で駆動し、`http://localhost:3000/ja?theme=<id>` を 390×844 / DPR2 で開く
2. `prefers-reduced-motion: reduce` をエミュレート → ページを一度最後までスクロール →
   `.rv` に `in`、`.reveal` に `is-visible` を付与 → 先頭に戻す
3. `[data-theme-mock]`（配色スウォッチ）を `display:none` にする
4. 844px ずつ送って `Page.captureScreenshot`。セクションの位置も `manifest.json` に書き出す

> ⚠️ 手順3を省くと、画面外のセクションが `opacity: 0` のまま撮れて真っ白なコマになる。
> 実際に gyoen-green の ROOM 02 が丸ごと消えた。
