# TASK.md — K3V SHINJUKU GYOEN 公式サイト制作タスク

進め方・デザイン方針は [CLAUDE.md](CLAUDE.md) を参照。要件定義書は Source of Truth: https://docs.google.com/document/d/1CMOUpOBNIdinqRwsINJwuFoK9J3Pr7wXrcku125ysZo/edit

凡例: `[ ]` 未着手 / `[~]` 進行中 / `[x]` 完了

---

## Phase 0 — コンテンツ整合（最優先・他タスクより先に着手）

現行TOPページは要件定義書と異なるブランド設定（施設名・立地・部屋数・世界観）で書かれている。以降のページを増やす前に、または着手時にこの土台を直す。詳細は CLAUDE.md の「既知の不整合」表を参照。

- [x] `messages/ja.json` / `en.json` / `zh.json` を要件定義書のコピー案に合わせて全面更新
  - [x] `meta`: サイト名を K3V SHINJUKU GYOEN に、タグライン "Not Just a Stay. Live Tokyo Beautifully." を反映
  - [x] `hero`: コピー「新宿御苑のすぐそばで、東京を暮らすように滞在する。」（EN: "Stay steps away from Shinjuku Gyoen. Design Apartments in the Heart of Tokyo."）
  - [x] `nav`: ロゴ表記を K3V に統一（`Nav.tsx` のハードコード "K3v" も修正済み）
  - [x] `concept`: ブランドストーリーの核（「暮らすように旅をする」体験、3部屋=3ライフスタイル）に書き換え。「和と北欧」軸は撤去し、UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE の3ピラーに変更
  - [x] `rooms`: ROOM 01 を UNICO ROOM / Natural Living（北欧ナチュラル、木の温もり）に。ROOM 02 (JOURNAL STANDARD FURNITURE / Urban Vintage)・ROOM 03 (CRASH GATE / Industrial Modern、詳細準備中を明記) は現行コピーを流用しつつ要件文面と整合
  - [x] `access`: 谷中/根津 → 新宿御苑前・新宿駅アクセスに全面差し替え。住所は「東京都新宿区（詳細はお問い合わせください）」とプレースホルダー明記（クライアント確認待ち）
  - [x] `footer`: 部屋数「8室」表記を削除、施設名・住所を修正
- [x] `components/` 側のハードコード文言（Nav.tsx / Footer.tsx の "K3v" ロゴを "K3V" に修正。Footer の問い合わせ用メールアドレスも新ブランド名に更新）
- [x] 上記変更後、TOPページをローカルで目視確認（3言語すべて、モバイル幅含む）

---

## Phase 1 — TOPページ ブラッシュアップ（"チープシック"方向への調整）

- [ ] 現行デザイン（アーストーン+角丸+Zen Maru Gothic）を「高級感」に寄りすぎていないか確認。必要なら装飾を少しラフに調整
- [ ] ファーストビュー: 要件定義書 7章の動画演出（新宿御苑の朝→部屋→コーヒー→廊下→マンション前廊下→玄関→夜景）を将来的に動画化する前提で、まずは静止画/イラストのプレースホルダーで構成を近づける
- [ ] ヘッダーに言語切替（ja/en/zh）を常時表示 — `LocaleSwitcher.tsx` は実装済みのため配置/視認性を確認
- [ ] フローティング予約ボタン（モバイルでスクロール時に画面下部固定の「空室検索/Book Now」）— `MobileBottomNav.tsx` が該当。要件（3クリック以内で予約完了）を満たす動線か確認
- [ ] スクロール構成を要件定義書 7章の9セクション順に合わせて過不足を確認・拡張:
  1. Why K3V?（ブランドストーリー・3部屋紹介・Feel at Home）— 実装済み(`Concept.tsx`)
  2. Prime Location（新宿御苑周辺3分/新宿駅徒歩圏、コンビニ・スーパー等の生活利便性）— 未実装（`Access.tsx`は谷中版のため要書き換え）
  3. Guest Reviews — 未実装
  4. Newly Renovated（全室リノベ・新品家具を写真で訴求）— 未実装
  5. Everything You Need（家電・アメニティのアイコン一覧）— 未実装
  6. ROOMS（3部屋を写真でずらり）— 実装済み(`Rooms.tsx`)、内容はPhase 0で修正
  7. Discover Tokyo（朝散歩→外食街→カフェ→夕景スパ→夜、周辺の暮らし方提案）— `LivingMoments.tsx` が近いが谷中前提のため要調整
  8. Guest Reviews（詳細版）— 4と統合含め要検討
  9. Why Book Direct?（Best Rate/柔軟なキャンセル/ローカルガイド/レイトチェックアウト/優先サポート → Book Now）— 未実装

---

## Phase 2 — 追加ページ（サイトマップ準拠）

要件定義書 10章のサイトマップに基づく。App Router で `app/[locale]/xxx/page.tsx` として追加し、Nav/Footer からリンクする。

- [ ] `/rooms` — 3部屋一覧
  - [ ] `/rooms/unico`（ROOM 01）
  - [ ] `/rooms/journal-standard-furniture`（ROOM 02）
  - [ ] `/rooms/crash-gate`（ROOM 03・詳細未定なので準備中表示でも可）
  - [ ] `/rooms/meet-the-designer`（Meet the Designer — 家具選びのストーリー。要件定義書9章のトーン例を参照）
- [ ] `/stay`（Stay Plan / Book）
  - [ ] 空室状況・外部予約エンジン（Beds24 / CHILLNW想定）への導線
  - [ ] Direct Booking Benefits / Long Stay Plan / Family Stay / Business Stay の訴求
  - [ ] Reservation（予約実行）
- [ ] `/area` — 新宿御苑・新宿駅・周辺コンビニ/スーパー/飲食店・交通・観光・モデルコース・好立地訴求・リノベーション訴求
- [ ] `/gallery` — Room Photos / Lifestyle Photos / Neighborhood Photos / Videos
- [ ] `/reviews`
- [ ] `/news`
- [ ] `/faq`
- [ ] `/neighborhood-guide` — おすすめコーヒー/ベーカリー/朝食/レストラン/銭湯/古着店 等
- [ ] `/contact`

各ページ着手時は先に `messages/*.json` にセクションキーを追加してから実装する（3言語同時追従）。

---

## Phase 3 — 予約導線・機能要件

- [ ] フローティング予約ボタンを全ページ共通化（レイアウトへの組み込み）
- [ ] 各部屋ページから空室カレンダー・予約ボタンへ「トップに戻らせない」導線を設計
- [ ] Beds24 / CHILLNW 等の外部予約エンジンとの連携方式を確定（埋め込み/リンク/API）— クライアントに確認要
- [ ] TOPから3クリック以内で予約完了できるか動線をテスト

---

## Phase 4 — 集客・SEO

- [ ] Googleビジネスプロフィール登録・公式サイトへのリンク設置（必須）
- [ ] 「新宿御苑 民泊」等のキーワードを軸にした構造化・メタデータ設計（各ページの `meta.title`/`meta.description`）
- [ ] Google宿泊広告（Google Travel）連携は要件定義書5章参照、実装可否をクライアントと確認

---

## 未確定事項（クライアントへの確認が必要）

- 正式な住所・最寄駅の徒歩分数
- ROOM 03 CRASH GATE の詳細（要件定義書上も「未定・準備中」）
- 予約エンジン（Beds24 / CHILLNW）の最終選定
- Google宿泊広告を実施するか
