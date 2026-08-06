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

- [x] 現行デザイン（アーストーン+角丸+Zen Maru Gothic）を「高級感」に寄りすぎていないか確認。ヒーロー画像・モバイルFABの影を少し軽量化する程度の微調整に留め、大幅な作り直しは不要と判断
- [ ] ファーストビュー: 要件定義書 7章の動画演出（新宿御苑→朝の街→カフェ→地下鉄→マンション外観→部屋→家具→コーヒー→夜景）を将来的に動画化する前提。現状は静止画イラスト（`HeroIllustration.tsx`）のまま — 動画化はクライアントから素材が揃うタイミングで着手
- [x] ヘッダーに言語切替（ja/en/zh）を常時表示 — `Nav.tsx` が `hidden lg:block` でモバイル非表示になっており、`LocaleSwitcher` がモバイルで一切見えないバグを発見・修正。常時表示のコンパクトヘッダー（ロゴ＋言語切替）＋lg以上でフルナビに拡張する構成に変更
- [x] フローティング予約ボタン（モバイルでスクロール時に画面下部固定の「空室検索/Book Now」）— `MobileBottomNav.tsx` で実装済み・常時1クリックで到達可能なことを確認。ただし実際の外部予約エンジン連携はPhase 3待ちのため、現状はお問い合わせ導線止まり（3クリック予約の完全達成はPhase 3で再確認）
- [x] スクロール構成を要件定義書 7章の9セクション順に合わせて拡張（`app/[locale]/page.tsx`）:
  1. Why K3V? — 実装済み(`Concept.tsx`)
  2. Prime Location — **新規実装** (`PrimeLocation.tsx`)。徒歩分数（御苑6分/丸ノ内線3分/新宿駅18分）・周辺コンビニ等を掲載
  3. Newly Renovated — **新規実装** (`Renovated.tsx`)
  4. Everything You Need — **新規実装** (`Amenities.tsx`)。アイコン8種＋「ほか完備」注記で簡潔に構成
  5. ROOMS — 実装済み(`Rooms.tsx`)
  6. Discover Tokyo — `LivingMoments.tsx` を要件定義書の実際のモデルコース（新宿御苑→神楽坂→渋谷Blue Bottle→渋谷スカイ→夜）に差し替え
  7. Guest Reviews（3・8を統合）— **新規実装** (`Reviews.tsx`)。⚠️ 開業したばかりでレビュー実績が無いため、捏造レビューは掲載せず「準備中」プレースホルダーとして実装。**クライアントから実際のレビューが届き次第、差し替え必須**
  8. Why Book Direct? — **新規実装** (`BookDirect.tsx`)。Best Rate/柔軟キャンセル/ローカルガイドPDF/アーリーレイト/優先サポート → Book Now

  実装順は Hero → Concept → PrimeLocation → Renovated → Amenities → Rooms → Moments(DiscoverTokyo) → Reviews → BookDirect → Access(実務情報+マップ) → Footer。既存の `Access.tsx`（住所・最寄駅・チェックイン時間・マップ）は要件定義書の9セクションには無いが、実務情報としてFooter直前に維持。

---

## Phase 2 — 追加ページ（サイトマップ準拠）

要件定義書 10章のサイトマップに基づく。App Router で `app/[locale]/xxx/page.tsx` として追加し、Nav/Footer からリンクする。

- [x] `/rooms` — 3部屋一覧
  - [x] `/rooms/unico`（ROOM 01）
  - [x] `/rooms/journal-standard-furniture`（ROOM 02）
  - [x] `/rooms/crash-gate`（ROOM 03・詳細未定のため「準備中」表示で実装。家具搬入・撮影後に本文差し替え必須）
  - [x] `/rooms/meet-the-designer`（Meet the Designer — 家具選びのストーリー。要件定義書9章のトーン例を参照して実装）
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

- 正式な住所（丁目・番地）※最寄り駅の徒歩分数は要件定義書に記載あり、`PrimeLocation.tsx` に反映済み
- ROOM 03 CRASH GATE の詳細（要件定義書上も「未定・準備中」）
- 予約エンジン（Beds24 / CHILLNW）の最終選定
- Google宿泊広告を実施するか
- Guest Reviews の実データ（`Reviews.tsx` は開業直後のため「準備中」プレースホルダーで実装。実際の宿泊者レビューが集まり次第、差し替えが必要）
- 各部屋の詳細スペック（面積・定員・ベッドタイプ）※要件定義書に記載がないため、`roomDetails`（messages/*.json）ではチェックイン/アウト時間と設備概要のみ掲載し、面積・定員は未掲載。実測値が出たらspecsに追加
