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

## Phase 1.5 — クライアントfeedback反映（2026-08-17 スタディ結果）

デザイン7案のうち **washed chambray** と **gyoen green** の2案に絞り込み。この2案を次回レビューで決着させる。
判断基準は CLAUDE.md の「チープシック」方針（重い・高級・クールに寄せない）。

**保全**: denim / timber / kraft / doma の4案は一切変更しない（`git diff` で無変更を確認する）。`app/mock-structure.css` は該当デザインのスコープ内のみ編集する（過去に他案へ波及した事故あり）。

### A. 共通コンテンツ追加（chambray / gyoen 両方）

実装: `mockShared.tsx` の `MockConvenience` / `MockFacilities`。文言は `primeLocation.convenience` / `amenities.facilities` を**追加のみ**（既存キー無変更なので他4案の出力は不変）。

- [x] **立地の「利便性」訴求を強化** — PrimeLocation の下に追加
  - [x] 至近にこれだけ揃っている、という一覧性（コンビニ / スーパー / 飲食 / ドラッグストア等）
  - [x] 深夜でも買い物に出られる
  - [x] 新宿三丁目はすぐ、歌舞伎町へも歩ける
  - [x] コピーは畏まった敬語を避け、暮らしに寄り添うカジュアルな語り口
  - ⚠️ 新宿三丁目・歌舞伎町の**徒歩分数は要件定義書に記載がないため書いていない**（「すぐそこ」「歩ける」の定性表現に留めた）。実測値が出たら追記する
- [x] **部屋別・全室共通の設備訴求を追加** — 既存 Amenities 内に収めた（セクションは増やしていない）
  - [x] 305 / 401: ベンチ付きシャワーユニット（2名でも使える）、小上がり、床下スーツケース収納
  - [x] 503: 和バス
  - [x] 305: トイレ2箇所
  - [x] 全室: シャワートイレ / Wi-Fi / ミュージック仕様（機器未選定のため「音楽を流せるオーディオ」表記）
  - ⚠️ 部屋番号 305/401/503 とブランド3室の対応は未確定のまま。**番号のみ表示**し、紐付けは `messages/*.json` の `amenities.facilities.rooms[].room` 1箇所に集約済み（確定したらそこだけ直す）

### B. washed chambray の個別改修

- [x] **近隣SHOPは横スライドを維持**（timber-indigo の4コマグリッドへの作り替えは不採用）。**オートプレイ版**を別バリエーションとして追加
  - [x] オートプレイは低速・等速、ホバー/タッチ/フォーカス中とタブ非表示中は停止、`prefers-reduced-motion` で無効化
  - [x] カード列を必要数だけ複製して継ぎ目なくループ（複製は `aria-hidden`）
  - [x] 写真（Scene）が主役として大きく見える構成を維持
- [x] **最終セクションの濃茶ブロックを差し替え**。3案とも実装し切替比較できる
  - [x] 案1 `plaster`: 素材感のある塗り壁 `#EFEAE0`（既定）
  - [x] 案2 `wood`: ハニーオークのウッド柄 `#C89055`（クライアント提供の参考写真に準拠）
  - [x] 案3 `moquette`: リネン織りのセージ `#8FB68C`（同上）
  - [x] 白の細字を撤去。透明度で階層を作るのをやめ、地を明るく・文字を濃いインクに反転。本文コントラスト 12.5 / 5.41 / 6.59

### C. gyoen green の個別改修

- [x] 構図・立体感はそのまま、ヒーローを切り取るウッドの見切り（`.ledge`）の面のみ胡桃 `#3e251a` → ハニーオーク `#C89055`。徒歩分数キャプションは明るい地に合わせて濃いインクへ反転（クリームのままだと約1.9:1）

### D. バリエーションの比較環境

- [x] 配色プレビューのパネルに washed-chambray 選択時のみ2項目を追加。`?wcRail=` / `?wcFooter=` としてURLに載るので、その状態のリンクをそのまま共有できる
- [x] 切替方式と手順を `docs/design-mocks.md` に記載

### 完了条件

- [x] `npm run build` / `npm run lint` が通る（エラー0、warningは既存8件のまま）
- [x] chambray / gyoen とも ja / en / zh の3言語で表示崩れなし
- [x] 390px 幅で横スクロール（overflow）が発生しない（`document.scrollWidth === 390` を確認）
- [x] denim / timber / kraft / doma の4案が `git diff` 上で無変更（DOM上も新ブロック0件・footer配色不変を確認）
- [x] **オートプレイの実走行を実ブラウザで確認済み**（2026-08-17 / 実Chrome・前面タブ・60fps・dpr2）
  - 検証環境のブラウザペインは `visibilityState: "hidden"` のままで rAF が一切発火しないため確認不能だった。実Chromeのタブを前面に出して計測（macOSのウィンドウ遮蔽で hidden に戻るので、ページ側に計測を仕込んでから Chrome を前面に固定して読み出す方式）
  - 速度 22.0px/s（0.367px/frame・240フレーム実測）／折り返し 971→11.5px で継ぎ目のカード順が連続（`コンビニ→スーパー→カフェ→ドラッグストア`）
  - 停止条件すべて実測: ホバー中 0px / フォーカス中 0px / ホイール操作中は掴んだ位置(600px)を保持し約1.2秒後に自走再開 / `manual` 切替で複製4枚を撤去・`scrollLeft` 0 に復帰し停止 / `auto` 復帰で再複製・再走行
  - 375px 幅でも1周分がスクロール範囲に収まる（loop 968 ≤ maxScroll 1583）、横スクロール 0
  - `prefers-reduced-motion` の無効化は `startAuto` 冒頭の early return によるもので、コード上で確認（OS設定を変える実行時検証は未実施）
- [x] **オートプレイの速度バグを修正**（実走行確認で発覚・`ChambrayBehaviour.tsx`）
  - 毎フレーム `rail.scrollLeft` を読み戻して 0.36px 加算していたため、`scrollLeft` のデバイスピクセル量子化（dpr2 で 0.5px刻み）で端数が毎回切り上がり、実測 0.5px/frame = 30px/s（意図した22px/sより約39%速い）だった。オフセットをfloatで保持する形に変更
  - あわせてフレーム間隔でスケールするようにした（従来は60fps固定前提のため120Hzディスプレイで2倍速になる）。長時間フレームで飛ばないよう差分は50msで上限
  - float保持にした副作用として、`pointerdown` を伴わないホイール/トラックパッド操作が自走に上書きされる回帰が出たため、ホイール/タッチに時限付きの停止を追加し、外部から動かされた場合はその位置を引き継ぐようにした

---

## Phase 1.6 — 不採用モックの資産化（今後のプロジェクト用）

今回不採用となった **denim-sakura / timber-indigo / kraft-riso / doma-ceramic** の4案は、他プロジェクトで再利用できる形で本リポジトリから切り離して保存する。本プロジェクトのコードベースからは最終的に除去し、TOPページの肥大化・ビルド対象の無駄を解消する。

**保存先**: `~/workbench/design-mock-library`（独立Gitリポジトリ・2026-08-17 作成）

- [x] 保存先を決定する
- [x] 4案それぞれについて、再利用に必要な一式を抽出する
  - [x] `app/{denim,timber,kraft,doma}-design.css` → `<slug>/design.css`
  - [x] `app/[locale]/_components/{denim,timber,kraft,doma}/*` → `<slug>/components/`
  - [x] `app/mock-structure.css` の該当スコープブロック → `<slug>/structure.css`
  - [x] `messages/*.json` の該当デザイン用キー（3言語）→ `<slug>/messages/`
  - [x] `docs/gen-*-assets.py` / `docs/add-*-messages.py` → `<slug>/gen-assets.py` / `add-messages.py`
  - [x] 元モックHTML（`docs/top-page-mock-{6,7,9,10}.html`）→ `<slug>/source-mock.html`
  - [x] 6案共通の `mockShared.tsx` と共通ネームスペースのメッセージ（hero / primeLocation / renovated / amenities / rooms / access / mockNav）→ `shared/`
- [x] 各案に README（コンセプト・配色トークン・使用フォント・Google Fontsクエリ・配置先・組み込み手順）を添える
- [x] 切り出し完了後、本リポジトリから4案を除去する（2026-08-17）
  - [x] `app/[locale]/page.tsx` の `DenimTop` / `TimberTop` / `KraftTop` / `DomaTop` の読み込みを削除
  - [x] 上記CSS・コンポーネント・messagesキーを削除
    - `app/{denim,timber,kraft,doma}-design.css` と `app/globals.css` の @import・`[data-theme=...]` パレット定義
    - `app/[locale]/_components/{denim,timber,kraft,doma}/`
    - `app/mock-structure.css` の `.denim-top` / `.timber-top` / `.kraft-top` / `.doma-top` ブロック（2289行 → 1090行）
    - `messages/{ja,en,zh}.json` の `denim` / `timber` / `kraft` / `doma` 名前空間
    - `components/ThemeMock.tsx` のスイッチャー項目（全7段 → 全3段）
    - `app/[locale]/layout.tsx` のフォント読み込み（Archivo / Archivo Black / Anton / Instrument Serif / Zen Maru Gothic 900 を撤去）
    - `docs/top-page-mock-{6,7,9,10}.html` と `docs/{gen,add}-{denim,timber,kraft,doma}-*.py`（すべて design-mock-library に保存済み）
    - `docs/design-mocks.md` を2案構成に更新（撤去した4案の保存先を明記）
  - [x] 削除後に `npm run build` / `npm run lint` が通り、chambray / gyoen のプレビューが従来どおり動くことを確認
    - build 成功（24ページ生成）／ lint エラー0・warning既存8件のまま
    - chambray（ja）・gyoen（en）・current（zh）とも表示崩れなし、コンソールエラー0、390px幅で横スクロール0
    - 撤去済みテーマの旧URL（`?theme=doma-ceramic` 等）は未知IDとして扱われ、保存済みテーマ→`current` にフォールバックする（壊れない）
- [x] 除去は **Phase 1.5 のクライアントレビューで最終案が確定してから**着手する（それまでは比較用に残す）

---

## Phase 2 — 追加ページ（サイトマップ準拠）

要件定義書 10章のサイトマップに基づく。App Router で `app/[locale]/xxx/page.tsx` として追加し、Nav/Footer からリンクする。

- [x] `/rooms` — 3部屋一覧
  - [x] `/rooms/unico`（ROOM 01）
  - [x] `/rooms/journal-standard-furniture`（ROOM 02）
  - [x] `/rooms/crash-gate`（ROOM 03・詳細未定のため「準備中」表示で実装。家具搬入・撮影後に本文差し替え必須）
  - [x] `/rooms/meet-the-designer`（Meet the Designer — 家具選びのストーリー。要件定義書9章のトーン例を参照して実装）
- [x] `/stay`（Stay Plan / Book）
  - [x] 空室状況セクション — 3部屋へのリンク＋「オンライン予約システム準備中」の正直なプレースホルダー＋問い合わせCTA（外部予約エンジン未選定のため、現状はメール問い合わせ導線。Beds24/CHILLNW連携はPhase 3で確定後に差し替え）
  - [x] Direct Booking Benefits（`BookDirect.tsx` を `showCta` prop付きで再利用）/ Long Stay Plan / Family Stay / Business Stay の訴求
  - [x] Reservation（予約の流れ3ステップ＋問い合わせCTA。実際の決済・予約実行は予約エンジン連携後）
  - [x] サイト全体の「空室を探す」CTA（Nav・モバイルFAB・Hero・Access・BookDirect）を `/stay` への実リンクに統一。Footerのidは `#stay`→`#contact` に改名（問い合わせ専用であることを明確化）
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

- [x] フローティング予約ボタンを全ページ共通化（`layout.tsx` に `Nav`/`MobileBottomNav` を組み込み済み。CTA遷移先も `/stay` に統一）
- [~] 各部屋ページから空室カレンダー・予約ボタンへ「トップに戻らせない」導線を設計 — 各部屋詳細ページのCTAは同一ページ内の `#contact`（フッター問い合わせ）に直接遷移する形で実装済み。ただし実際の空室カレンダーは予約エンジン未選定のため未実装
- [ ] Beds24 / CHILLNW 等の外部予約エンジンとの連携方式を確定（埋め込み/リンク/API）— クライアントに確認要。確定後、`/stay` の「空室状況・ご予約」セクションと各部屋ページCTAを実際のカレンダー/予約導線に差し替える
- [ ] TOPから3クリック以内で予約完了できるか動線をテスト（現状は「予約」ではなく「問い合わせ」で完結するため、実予約フローが確定してから再テスト）

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
- **部屋番号 305 / 401 / 503 とブランド3室（UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE）の対応**（Phase 1.5-A の設備訴求に必要。確定するまで部屋番号キーのまま実装）
- **ミュージック仕様の機器選定**（クライアント曰く「アイテムはこれから選定」。機種名は書かない）
- **新宿三丁目・歌舞伎町までの徒歩分数**（要件定義書に記載なし。Phase 1.5 では定性表現に留めた。実測が出れば数字で訴求できる）
- 各部屋の詳細スペック（面積・定員・ベッドタイプ）※要件定義書に記載がないため、`roomDetails`（messages/*.json）ではチェックイン/アウト時間と設備概要のみ掲載し、面積・定員は未掲載。実測値が出たらspecsに追加
