/* Auto-extracted verbatim from docs/top-page-mock-8.html, with every SVG id
   namespaced `wc-`: the Gyoen Green and Denim Sakura designs sit in the same
   document and generic ids (#sky, #wall, #glow, #soft) would collide.

   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static
   authored markup, and hand-converting several hundred SVG attributes to JSX
   casing would only add transcription risk.
   Re-run docs/gen-chambray-assets.py if the mock changes. */

export const HERO = String.raw`
<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="wc-hwall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E6E1D5"/>
              </linearGradient>
              <!-- ベッドの背は掃き出し窓。朝いちばんの逆光なので上は白く
                   抜いて、下にいくほど暖色に寄せる（ROOM 01 と同じ作り） -->
              <linearGradient id="wc-hgl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#F4F8FA"/><stop offset=".5" stop-color="#FBF3E2"/><stop offset="1" stop-color="#FFEDC8"/>
              </linearGradient>
              <!-- 縦に連なる帯のシアー。写真と同じく、濃い色のヘッダー
                   レールから吊った縦型で、帯の合わせ目だけ濃く残す -->
              <pattern id="wc-hcur" width="34" height="24" patternUnits="userSpaceOnUse">
                <rect width="34" height="24" fill="#E4EDF3" opacity=".38"/>
                <rect x="2" width="27" height="24" fill="#C8D7E1" opacity=".42"/>
                <path d="M2 24 L9 12 L16 24 M16 24 L23 12 L30 24" fill="none" stroke="#93AABD" stroke-width="1.3" opacity=".38"/>
                <rect x="29" width="4" height="24" fill="#63788A" opacity=".46"/>
              </pattern>
              <!-- ベッドエリアの床。写真どおり木ではなく、目の詰まった
                   グレーのループカーペットを継ぎ目なしの一枚で敷く。
                   ROOM 01 のカーペットより一段明るく織ってある：この画では
                   画面を横切る帯になるので、同じ濃さだと "重い・シック
                   すぎる" 側に倒れてしまう -->
              <pattern id="wc-hcp" width="12" height="8" patternUnits="userSpaceOnUse">
                <rect width="12" height="8" fill="#514A42"/>
                <rect width="6" height="4" fill="#5E574E"/><rect x="6" y="4" width="6" height="4" fill="#5E574E"/>
                <rect y="7" width="12" height="1" fill="#3D372F"/>
              </pattern>
              <!-- 白地に細いストライプの寝具（ROOM 01 と同じ生地） -->
              <pattern id="wc-hbd" width="13" height="8" patternUnits="userSpaceOnUse">
                <rect width="13" height="8" fill="#FAF8F3"/>
                <rect width="4" height="8" fill="#EFEBE1"/>
              </pattern>
              <!-- ダイニング側だけがライトオークの無垢材。上に置く家具は
                   すべて濃い木でとる。床と天板が同系色で溶ける問題の解 -->
              <linearGradient id="wc-hfl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#C9B896"/><stop offset=".4" stop-color="#E7DDC5"/>
                <stop offset=".75" stop-color="#D9CCAD"/><stop offset="1" stop-color="#C2B08E"/>
              </linearGradient>
              <linearGradient id="wc-htbl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#D9C098"/><stop offset=".55" stop-color="#C2A377"/><stop offset="1" stop-color="#A9895E"/>
              </linearGradient>
              <filter id="wc-hbl"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>

            <!-- 天井と白い壁 -->
            <rect width="800" height="1000" fill="url(#wc-hwall)"/>
            <rect width="800" height="150" fill="#FCFAF5"/>
            <rect y="146" width="800" height="4" fill="#DED8CA"/>

            <!-- 壁掛けエアコン。写真と同じ、窓の左肩 -->
            <g>
              <rect x="30" y="178" width="86" height="24" rx="6" fill="#FBFAF6"/>
              <rect x="30" y="197" width="86" height="12" rx="5" fill="#E9E4D8"/>
              <rect x="36" y="209" width="74" height="5" rx="2" fill="#D6D0C2"/>
              <path d="M42 214 q-12 22 -6 44" fill="none" stroke="#E3DED2" stroke-width="5"/>
            </g>

            <!-- 壁いっぱいの掃き出し窓。ベッドの背は写真と同じこのシアー
                 一枚で、オリーブの壁は立てない -->
            <g>
              <rect x="124" y="150" width="648" height="290" fill="url(#wc-hgl)"/>
              <!-- 向かいの建物。シアー越しなので輪郭だけ残す -->
              <g fill="#B6C6D4" opacity=".42">
                <rect x="142" y="212" width="80" height="228"/><rect x="560" y="186" width="126" height="254"/><rect x="700" y="230" width="58" height="210"/>
              </g>
              <g fill="#FFFFFF" opacity=".4">
                <rect x="578" y="214" width="22" height="26"/><rect x="616" y="214" width="22" height="26"/>
                <rect x="578" y="264" width="22" height="26"/><rect x="640" y="264" width="22" height="26"/>
              </g>
              <!-- バルコニーの手すり -->
              <g fill="#D8D2C4" opacity=".46"><rect x="124" y="348" width="648" height="9"/><rect x="124" y="392" width="648" height="9"/></g>
              <!-- 引き戸の框。シアーの下に沈ませる -->
              <g fill="#3B4A54">
                <rect x="448" y="150" width="22" height="290"/>
                <rect x="124" y="150" width="15" height="290"/><rect x="757" y="150" width="15" height="290"/>
              </g>
              <!-- シアーカーテン -->
              <rect x="124" y="174" width="648" height="266" fill="url(#wc-hcur)"/>
              <!-- 開口ぜんぶを光源として持ち上げる -->
              <rect x="124" y="174" width="648" height="266" fill="#FFF6DF" opacity=".16"/>
              <!-- カーテンレールのヘッダー -->
              <rect x="124" y="150" width="648" height="24" fill="#2F3E48"/>
              <rect x="124" y="150" width="648" height="7" fill="#4A5D6B" opacity=".85"/>
              <rect x="124" y="150" width="648" height="290" fill="none" stroke="#59686F" stroke-width="4"/>
              <!-- 窓まわりのにじみ -->
              <rect x="112" y="138" width="672" height="314" fill="#FFF1CE" opacity=".22" filter="url(#wc-hbl)"/>
            </g>

            <!-- ベッドエリアの床。カーペットは継ぎ目なしの一枚で通し、
                 杉綾のラグは敷かない -->
            <rect y="440" width="800" height="208" fill="url(#wc-hcp)"/>
            <rect y="440" width="800" height="6" fill="#241F1A" opacity=".5"/>

            <!-- ダイニング側のライトオーク -->
            <rect y="648" width="800" height="352" fill="url(#wc-hfl)"/>
            <g stroke="#A8977A" stroke-width="2" opacity=".55">
              <line x1="0" y1="712" x2="800" y2="712"/><line x1="0" y1="792" x2="800" y2="792"/>
              <line x1="0" y1="886" x2="800" y2="886"/>
              <line x1="228" y1="648" x2="192" y2="1000"/><line x1="536" y1="648" x2="576" y2="1000"/>
            </g>
            <!-- カーペットと無垢材の見切り -->
            <rect y="644" width="800" height="7" fill="#6B4A32" opacity=".5"/>

            <!-- 朝日。カーペットは部屋でいちばん暗い面なので、光条は
                 ここでいちばん効く。床の上では白ではなく金色でとる -->
            <g>
              <path d="M160 178 L318 178 L92 1000 L-148 1000 Z" fill="#FFE7B4" opacity=".17"/>
              <path d="M336 178 L492 178 L392 1000 L146 1000 Z" fill="#FFF1CE" opacity=".17"/>
              <path d="M512 180 L650 180 L690 1000 L446 1000 Z" fill="#FFE7B4" opacity=".14"/>
              <path d="M224 184 L258 184 L26 1000 L-52 1000 Z" fill="#FFFDF4" opacity=".2"/>
              <path d="M562 186 L596 186 L570 1000 L494 1000 Z" fill="#FFFDF4" opacity=".18"/>
            </g>
            <!-- 窓ぎわの照り返し -->
            <ellipse cx="440" cy="450" rx="320" ry="26" fill="#FFE9B8" opacity=".38" filter="url(#wc-hbl)"/>

            <!-- 奥のベッド。柱の向こうに続く、シングル寄りの細いほう -->
            <g>
              <!-- 足もとの落ち影。カーペットに置いてあることを先に描く -->
              <ellipse cx="132" cy="524" rx="150" ry="20" fill="#1C1813" opacity=".3" filter="url(#wc-hbl)"/>
              <rect x="34" y="312" width="206" height="56" rx="5" fill="#C6A886"/>
              <g stroke="#B08A63" stroke-width="3" opacity=".6"><line x1="86" y1="312" x2="86" y2="368"/><line x1="138" y1="312" x2="138" y2="368"/><line x1="190" y1="312" x2="190" y2="368"/></g>
              <rect x="34" y="312" width="206" height="5" rx="3" fill="#FFE9B8" opacity=".7"/>
              <rect x="52" y="338" width="116" height="38" rx="10" fill="#FBFAF6"/>
              <path d="M32 368 L242 368 L262 520 L6 520 Z" fill="url(#wc-hbd)"/>
              <!-- 折り返したシーツ。ベッドに見えるかどうかはこの一本 -->
              <path d="M32 368 L242 368 L245 394 L29 394 Z" fill="#FFFFFF" opacity=".7"/>
              <path d="M29 394 L245 394" fill="none" stroke="#D3CCBC" stroke-width="2.5"/>
              <g fill="none" stroke="#E4DFD2" stroke-width="4" opacity=".95">
                <path d="M92 398 L82 520"/><path d="M188 398 L198 520"/>
              </g>
              <!-- マットレスの小口 -->
              <path d="M6 520 L262 520 L260 542 L8 542 Z" fill="#E4DFD2"/>
              <path d="M6 520 L262 520 L260 542 L8 542 Z" fill="none" stroke="#C9C2B2" stroke-width="2"/>
              <path d="M32 368 L242 368 L262 520 L6 520 Z" fill="none" stroke="#C9C2B2" stroke-width="2.5"/>
            </g>

            <!-- 手前のベッド。幅の広いほう。四本柱は立てない：実際の
                 部屋はヘッドボードだけの低いベッドで、天蓋があると
                 窓の光をまるごと遮ってしまう -->
            <g>
              <ellipse cx="530" cy="552" rx="250" ry="22" fill="#1C1813" opacity=".3" filter="url(#wc-hbl)"/>
              <rect x="336" y="300" width="382" height="64" rx="5" fill="#C6A886"/>
              <g stroke="#B08A63" stroke-width="3" opacity=".6"><line x1="431" y1="300" x2="431" y2="364"/><line x1="527" y1="300" x2="527" y2="364"/><line x1="623" y1="300" x2="623" y2="364"/></g>
              <rect x="336" y="300" width="382" height="6" rx="3" fill="#FFE9B8" opacity=".75"/>
              <rect x="352" y="330" width="126" height="42" rx="11" fill="#FBFAF6"/>
              <rect x="486" y="328" width="126" height="44" rx="11" fill="#F4F1E8"/>
              <rect x="620" y="332" width="80" height="40" rx="11" fill="#FBFAF6"/>
              <!-- キャンプ道具のニットクッション -->
              <g>
                <rect x="380" y="314" width="78" height="72" rx="5" fill="#B9C2CE"/>
                <g stroke="#8B97A6" stroke-width="2" opacity=".5"><line x1="380" y1="338" x2="458" y2="338"/><line x1="380" y1="363" x2="458" y2="363"/></g>
                <path d="M406 358 l10-20 10 20z" fill="#3E6B49"/>
                <path d="M391 378 q8-15 16 0 q-8 6 -16 0z" fill="#C8783A"/>
                <ellipse cx="436" cy="376" rx="13" ry="8" fill="#6E7A87"/><rect x="430" y="373" width="13" height="6" fill="#3A4450"/>
                <g stroke="#8B97A6" stroke-width="3" stroke-linecap="round" opacity=".8">
                  <line x1="380" y1="320" x2="374" y2="315"/><line x1="380" y1="344" x2="374" y2="340"/><line x1="380" y1="368" x2="374" y2="365"/>
                </g>
              </g>
              <!-- アイスクリームのニットクッション -->
              <g>
                <rect x="496" y="316" width="78" height="72" rx="5" fill="#2F6B52"/>
                <path d="M516 348 l9 26 9-26z" fill="#E0B77E"/>
                <ellipse cx="525" cy="344" rx="12" ry="10" fill="#FBFAF6"/>
                <circle cx="525" cy="332" r="4" fill="#C8783A"/>
                <path d="M544 350 l10 24 10-24z" fill="#E0B77E"/>
                <ellipse cx="554" cy="345" rx="13" ry="11" fill="#DEE8F1"/>
                <g fill="#C8783A"><circle cx="548" cy="341" r="3"/><circle cx="560" cy="345" r="3"/></g>
                <rect x="496" y="316" width="78" height="72" rx="5" fill="none" stroke="#245542" stroke-width="3"/>
              </g>
              <path d="M332 364 L722 364 L760 548 L296 548 Z" fill="url(#wc-hbd)"/>
              <path d="M332 364 L722 364 L726 394 L330 394 Z" fill="#FFFFFF" opacity=".75"/>
              <path d="M330 394 L726 394" fill="none" stroke="#D3CCBC" stroke-width="2.5"/>
              <g fill="none" stroke="#E4DFD2" stroke-width="5" opacity=".95">
                <path d="M424 398 L410 548"/><path d="M528 398 L526 548"/><path d="M632 398 L648 548"/>
              </g>
              <!-- マットレスの小口 -->
              <path d="M296 548 L760 548 L757 574 L299 574 Z" fill="#E4DFD2"/>
              <path d="M296 548 L760 548 L757 574 L299 574 Z" fill="none" stroke="#C9C2B2" stroke-width="2"/>
              <path d="M722 364 L760 548 L730 548 L698 366 Z" fill="#FFE9B8" opacity=".3"/>
              <path d="M332 364 L722 364 L760 548 L296 548 Z" fill="none" stroke="#C9C2B2" stroke-width="2.5"/>
            </g>

            <!-- 白い柱。部屋はこれでベッド側とダイニング側に分かれる。
                 奥のベッドの右端をこれで食う（写真1と同じ抜け） -->
            <g>
              <rect x="248" width="84" height="656" fill="#FBFAF6"/>
              <rect x="248" width="10" height="656" fill="#FFFFFF" opacity=".85"/>
              <rect x="320" width="12" height="656" fill="#E3DED2"/>
              <rect x="332" width="18" height="656" fill="#2B2620" opacity=".1"/>
              <rect width="24" height="656" fill="#FBFAF6"/><rect x="20" width="8" height="656" fill="#E3DED2"/>
              <rect x="772" width="28" height="656" fill="#FBFAF6"/><rect x="772" width="10" height="656" fill="#E3DED2"/>
            </g>
            <!-- 柱が抜く影。光と同じ向きに倒す -->
            <path d="M252 656 L336 656 L292 1000 L188 1000 Z" fill="#7A5A38" opacity=".18"/>

            <!-- 1. グレーファブリックに木の肘のアームチェア -->
            <g>
              <rect x="30" y="596" width="150" height="72" rx="14" fill="#D9D6CB"/>
              <rect x="30" y="596" width="150" height="15" rx="7" fill="#C5C1B4"/>
              <rect x="22" y="660" width="166" height="42" rx="12" fill="#E4E1D6"/>
              <g fill="#B08A63"><rect x="12" y="636" width="14" height="46" rx="7"/><rect x="184" y="636" width="14" height="46" rx="7"/></g>
              <g stroke="#B08A63" stroke-width="10" stroke-linecap="round"><line x1="40" y1="702" x2="26" y2="778"/><line x1="170" y1="702" x2="184" y2="778"/></g>
            </g>

            <!-- 4. ベッド寄りの、木のスピンドルチェア -->
            <g>
              <rect x="530" y="556" width="146" height="14" rx="7" fill="#C6A886"/>
              <g stroke="#C6A886" stroke-width="6" stroke-linecap="round">
                <line x1="546" y1="570" x2="550" y2="632"/><line x1="574" y1="570" x2="576" y2="632"/>
                <line x1="602" y1="570" x2="602" y2="632"/><line x1="630" y1="570" x2="628" y2="632"/>
                <line x1="658" y1="570" x2="654" y2="632"/>
              </g>
              <rect x="526" y="628" width="154" height="20" rx="8" fill="#C6A886"/>
              <g stroke="#B08A63" stroke-width="8" stroke-linecap="round"><line x1="544" y1="648" x2="526" y2="734"/><line x1="664" y1="648" x2="682" y2="734"/></g>
            </g>

            <!-- 丸い木のテーブル。木目の出たライトオークで、
                 同じ椅子は一脚もない -->
            <g>
              <ellipse cx="300" cy="808" rx="212" ry="26" fill="#2B2620" opacity=".18" filter="url(#wc-hbl)"/>
              <g stroke="#8F6743" stroke-width="14" stroke-linecap="round">
                <line x1="192" y1="768" x2="158" y2="856"/><line x1="410" y1="768" x2="444" y2="856"/><line x1="300" y1="778" x2="300" y2="866"/>
              </g>
              <ellipse cx="300" cy="754" rx="202" ry="52" fill="#A9895E"/>
              <ellipse cx="300" cy="744" rx="202" ry="52" fill="url(#wc-htbl)"/>
              <g fill="none" stroke="#B4956A" stroke-width="2.5" opacity=".55">
                <ellipse cx="296" cy="743" rx="152" ry="37"/><ellipse cx="292" cy="742" rx="100" ry="23"/><ellipse cx="288" cy="741" rx="48" ry="11"/>
              </g>
              <!-- 読みかけと、コーヒーと、摘んできた枝。手前の椅子の背が
                   横切らない、天板の奥半分にまとめてある -->
              <rect x="258" y="712" width="76" height="23" rx="3" fill="#F2EFE8"/>
              <rect x="258" y="712" width="76" height="7" rx="3" fill="#C6D6E4"/>
              <g><rect x="352" y="708" width="32" height="30" rx="4" fill="#FBFAF6"/><path d="M384 716 q15 8 0 15" fill="none" stroke="#FBFAF6" stroke-width="6"/></g>
              <g>
                <rect x="408" y="706" width="28" height="36" rx="4" fill="#DEE8F1"/>
                <g fill="none" stroke="#74994A" stroke-width="4" stroke-linecap="round"><path d="M418 706 q-7-25 3-40"/><path d="M425 706 q9-19 23-27"/></g>
                <g fill="#B0CC80" opacity=".85"><circle cx="419" cy="669" r="6"/><circle cx="447" cy="680" r="5"/></g>
              </g>
            </g>

            <!-- 2. 黒いワイヤー脚に白いクッション。背から肘までは一本の
                 曲げ木。天板を横切るので、他の木より一段濃い色でとる -->
            <g>
              <path d="M104 806 L104 764 q84-44 168 0 L272 806" fill="none" stroke="#8F6743" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="98" y="792" width="180" height="50" rx="14" fill="#F4F1E8"/>
              <rect x="98" y="822" width="180" height="22" rx="11" fill="#E1DDD1"/>
              <g stroke="#2B2620" stroke-width="7" stroke-linecap="round" fill="none">
                <path d="M118 844 L94 942"/><path d="M258 844 L282 942"/>
                <path d="M118 844 L282 942"/><path d="M258 844 L94 942"/>
                <path d="M102 892 L274 892"/>
              </g>
            </g>

            <!-- 3. クリームの張り椅子。脚は木 -->
            <g>
              <path d="M352 798 q72-32 144 0 l6 54 q-80-24 -156 0z" fill="#EFE9DA"/>
              <rect x="338" y="846" width="174" height="46" rx="13" fill="#E6DFCD"/>
              <g stroke="#B08A63" stroke-width="10" stroke-linecap="round"><line x1="358" y1="892" x2="338" y2="974"/><line x1="494" y1="892" x2="514" y2="974"/></g>
            </g>

            <!-- 右手前、ダークティールのベンチソファ -->
            <g>
              <rect x="626" y="736" width="200" height="52" rx="15" fill="#1B3A57"/>
              <rect x="618" y="780" width="216" height="66" rx="17" fill="#2C5779"/>
              <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".85"><line x1="630" y1="794" x2="822" y2="794"/></g>
              <rect x="618" y="838" width="216" height="24" rx="9" fill="#16334D"/>
              <g fill="#6B4A32"><rect x="638" y="860" width="15" height="44" rx="4"/><rect x="800" y="860" width="15" height="44" rx="4"/></g>
            </g>

            <!-- ベッドと家具の上まで届く、やわらかい光 -->
            <g>
              <path d="M160 178 L318 178 L92 1000 L-148 1000 Z" fill="#FFE0A2" opacity=".07"/>
              <path d="M512 180 L650 180 L690 1000 L446 1000 Z" fill="#FFE0A2" opacity=".06"/>
              <path d="M224 184 L258 184 L26 1000 L-52 1000 Z" fill="#FFF8E6" opacity=".1"/>
              <path d="M562 186 L596 186 L570 1000 L494 1000 Z" fill="#FFF8E6" opacity=".09"/>
            </g>
          </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 800 960" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="wc-wl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F4EE"/><stop offset="1" stop-color="#E4E0D6"/></linearGradient>
                <!-- 床は白茶けた無垢材。家具はすべて濃い木でとるので、
                     天板と床がひと続きに見えていた問題が解ける -->
                <linearGradient id="wc-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DFC8"/><stop offset="1" stop-color="#C7B693"/></linearGradient>
                <linearGradient id="wc-ch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DEE8F1"/><stop offset="1" stop-color="#A6BED4"/></linearGradient>
                <filter id="wc-bl2"><feGaussianBlur stdDeviation="24"/></filter>
              </defs>
              <rect width="800" height="960" fill="url(#wc-wl)"/>
              <!-- 窓 -->
              <rect x="70" y="70" width="380" height="440" fill="#EFF5F8"/>
              <g stroke="#6B4A32" stroke-width="8"><line x1="260" y1="70" x2="260" y2="510"/><line x1="70" y1="290" x2="450" y2="290"/></g>
              <rect x="70" y="70" width="380" height="440" fill="none" stroke="#6B4A32" stroke-width="15"/>
              <!-- 窓の外の緑。塊は中間の緑で置き、明るい黄緑は差し色に回す -->
              <g fill="#74994A" opacity=".8"><ellipse cx="150" cy="190" rx="76" ry="54"/><ellipse cx="360" cy="164" rx="62" ry="46"/><ellipse cx="380" cy="420" rx="70" ry="50"/></g>
              <g fill="#4C6E31" opacity=".5"><ellipse cx="190" cy="230" rx="52" ry="36"/></g>
              <g fill="#B0CC80" opacity=".85"><ellipse cx="128" cy="164" rx="38" ry="24"/><ellipse cx="346" cy="146" rx="30" ry="19"/><ellipse cx="364" cy="400" rx="34" ry="21"/></g>
              <!-- 壁に回り込む光 -->
              <path d="M77 510 L443 510 L591 680 L164 680 Z" fill="#FFE9B8" opacity=".38" filter="url(#wc-bl2)"/>
              <!-- 床 -->
              <rect y="680" width="800" height="280" fill="url(#wc-fl)"/>
              <g stroke="#A8977A" stroke-width="2" opacity=".6">
                <line x1="0" y1="726" x2="800" y2="726"/><line x1="0" y1="790" x2="800" y2="790"/><line x1="0" y1="872" x2="800" y2="872"/>
                <line x1="220" y1="680" x2="188" y2="960"/><line x1="540" y1="680" x2="580" y2="960"/>
              </g>
              <!-- Room 01 と同じ作り。日陰を敷いてから金色の光だまりを置き、
                   窓の桟の影を横切らせる -->
              <rect y="680" width="800" height="280" fill="#6B4A32" opacity=".2"/>
              <path d="M164 680 L591 680 L822 960 L318 960 Z" fill="#FFE0A2" opacity=".62"/>
              <path d="M215 680 L555 680 L760 960 L370 960 Z" fill="#FFF1CE" opacity=".5"/>
              <g fill="#7A5A38" opacity=".32">
                <path d="M370 680 L384 680 L579 960 L561 960 Z"/>
                <path d="M200 745 L645 745 L664 768 L212 768 Z"/>
              </g>
              <ellipse cx="378" cy="686" rx="215" ry="34" fill="#FFE9B8" opacity=".5" filter="url(#wc-bl2)"/>
              <g fill="#FFFDF4" opacity=".38"><path d="M300 690 L338 690 L505 950 L462 950 Z"/></g>
              <!-- 壁と床の見切り -->
              <rect y="680" width="800" height="9" fill="#6B4A32" opacity=".55"/>
              <!-- シャンブレーのソファ -->
              <g>
                <rect x="120" y="540" width="480" height="150" rx="14" fill="url(#wc-ch)"/>
                <rect x="120" y="622" width="480" height="112" rx="16" fill="#B8CCDE"/>
                <rect x="152" y="576" width="196" height="56" rx="10" fill="#EDF2F7"/>
                <rect x="368" y="570" width="196" height="62" rx="10" fill="#D3E0EB"/>
                <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".9">
                  <line x1="128" y1="634" x2="592" y2="634"/><line x1="128" y1="724" x2="592" y2="724"/>
                </g>
                <rect x="142" y="734" width="16" height="42" fill="#4A3222"/><rect x="566" y="734" width="16" height="42" fill="#4A3222"/>
              </g>
              <!-- 低いテーブル。濃いウォルナットで、白茶けた床から確実に浮かす -->
              <g>
                <ellipse cx="390" cy="884" rx="160" ry="18" fill="#2B2620" opacity=".22" filter="url(#wc-bl2)"/>
                <rect x="250" y="808" width="280" height="16" rx="4" fill="#5A3D28"/>
                <rect x="250" y="806" width="280" height="5" rx="2" fill="#8F6743"/>
                <rect x="256" y="824" width="268" height="9" fill="#3F2A1B"/>
                <rect x="270" y="833" width="12" height="50" fill="#3F2A1B"/><rect x="500" y="833" width="12" height="50" fill="#3F2A1B"/>
                <rect x="332" y="784" width="62" height="24" rx="3" fill="#F2EFE8"/>
                <circle cx="448" cy="796" r="14" fill="#2B2620"/>
                <!-- 天板の上の苔玉 -->
                <g>
                  <ellipse cx="286" cy="806" rx="22" ry="5" fill="#2B2620" opacity=".3"/>
                  <ellipse cx="286" cy="800" rx="21" ry="5" fill="#3A322A"/>
                  <circle cx="286" cy="784" r="17" fill="#4C6E31"/>
                  <path d="M269 784a17 17 0 0 1 18-17 16 16 0 0 0-12 17z" fill="#74994A"/>
                  <g fill="#B0CC80" opacity=".85"><circle cx="279" cy="776" r="3.4"/><circle cx="293" cy="780" r="2.6"/><circle cx="284" cy="791" r="2.2"/></g>
                  <g fill="none" stroke="#74994A" stroke-width="2.4" stroke-linecap="round">
                    <path d="M282 768 q-4-14 2-22"/><path d="M290 767 q6-12 14-16"/>
                  </g>
                </g>
              </g>
              <!-- 窓辺の松。低く広く仕立てた盆栽。
                   slice で右が切られても鉢が欠けないよう内側に寄せてある -->
              <g transform="translate(-28 0)">
                <ellipse cx="694" cy="846" rx="76" ry="13" fill="#2B2620" opacity=".2" filter="url(#wc-bl2)"/>
                <rect x="636" y="832" width="116" height="8" rx="3" fill="#4A3222"/>
                <rect x="652" y="778" width="84" height="54" rx="5" fill="#3A322A"/>
                <rect x="646" y="772" width="96" height="13" rx="4" fill="#4B4137"/>
                <path d="M694 778 q-14-30 -22-52 q-3-11 8-14" fill="none" stroke="#4A3222" stroke-width="8" stroke-linecap="round"/>
                <path d="M684 720 q16-9 36-15" fill="none" stroke="#4A3222" stroke-width="6" stroke-linecap="round"/>
                <g fill="#4C6E31">
                  <ellipse cx="660" cy="722" rx="52" ry="17"/><ellipse cx="722" cy="700" rx="42" ry="14"/><ellipse cx="678" cy="672" rx="36" ry="12"/>
                </g>
                <g fill="#74994A">
                  <ellipse cx="655" cy="717" rx="38" ry="10"/><ellipse cx="718" cy="696" rx="30" ry="8"/><ellipse cx="675" cy="668" rx="26" ry="7"/>
                </g>
                <g fill="#B0CC80" opacity=".75">
                  <ellipse cx="648" cy="713" rx="21" ry="5"/><ellipse cx="713" cy="693" rx="16" ry="4"/><ellipse cx="670" cy="665" rx="14" ry="4"/>
                </g>
              </g>
            </svg>
`;

export const GYOEN_SQ = String.raw`
<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="400" fill="#74994A"/>
              <g fill="#4C6E31"><ellipse cx="110" cy="150" rx="140" ry="106"/><ellipse cx="300" cy="110" rx="118" ry="88"/><ellipse cx="230" cy="240" rx="150" ry="98"/></g>
              <g fill="#B0CC80" opacity=".6"><ellipse cx="98" cy="106" rx="54" ry="38"/><ellipse cx="306" cy="76" rx="46" ry="30"/></g>
              <g fill="#4A3222"><rect x="176" y="252" width="26" height="148"/><rect x="300" y="268" width="18" height="132"/></g>
              <rect y="352" width="400" height="48" fill="#3A5525"/>
            </svg>
`;

export const ROOM1 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="wc-r1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E9E3D6"/></linearGradient>
            <!-- 掃き出し窓。朝いちばんの逆光なので、上は白く抜いて
                 下にいくほど暖色に寄せる。光源そのものを画にする -->
            <linearGradient id="wc-r1gl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#F4F8FA"/><stop offset=".5" stop-color="#FBF3E2"/><stop offset="1" stop-color="#FFEDC8"/>
            </linearGradient>
            <!-- 縦に連なる帯のシアー。杉綾の織り柄は細い糸目で示す -->
            <pattern id="wc-r1cur" width="38" height="26" patternUnits="userSpaceOnUse">
              <rect width="38" height="26" fill="#DCE7EE" opacity=".4"/>
              <rect x="2" width="30" height="26" fill="#C3D2DC" opacity=".46"/>
              <path d="M2 26 L10 13 L18 26 M18 26 L26 13 L34 26" fill="none" stroke="#8FA9BF" stroke-width="1.4" opacity=".4"/>
              <rect x="33" width="4" height="26" fill="#5E7382" opacity=".42"/>
            </pattern>
            <!-- 床は木ではなく、目の詰まった濃いグレーのループカーペット。
                 この部屋でいちばん暗い面なので、光はここでいちばん効く -->
            <pattern id="wc-r1cp" width="12" height="8" patternUnits="userSpaceOnUse">
              <rect width="12" height="8" fill="#3D3833"/>
              <rect width="6" height="4" fill="#4C463F"/><rect x="6" y="4" width="6" height="4" fill="#4C463F"/>
              <rect y="7" width="12" height="1" fill="#2B2620"/>
            </pattern>
            <!-- 白地に細いストライプの寝具 -->
            <pattern id="wc-r1bd" width="13" height="8" patternUnits="userSpaceOnUse">
              <rect width="13" height="8" fill="#FAF8F3"/>
              <rect width="4" height="8" fill="#F4F1E9"/>
            </pattern>
            <filter id="wc-b1"><feGaussianBlur stdDeviation="22"/></filter>
          </defs>

          <!-- 天井と壁 -->
          <rect width="1000" height="700" fill="url(#wc-r1w)"/>
          <rect width="1000" height="96" fill="#FCFAF5"/>
          <rect y="93" width="1000" height="4" fill="#E0DACC"/>
          <!-- 丸型のシーリングライト。slice で上が切られるので
               モバイル幅（y 37 から）に収まる高さに置く -->
          <ellipse cx="392" cy="68" rx="132" ry="50" fill="#FFF1CE" opacity=".4" filter="url(#wc-b1)"/>
          <ellipse cx="392" cy="64" rx="78" ry="27" fill="#FFFDF4"/>
          <ellipse cx="392" cy="60" rx="58" ry="17" fill="#FFFFFF"/>

          <!-- 壁掛けエアコン -->
          <g>
            <rect x="40" y="150" width="158" height="34" rx="7" fill="#FBFAF6"/>
            <rect x="40" y="176" width="158" height="16" rx="6" fill="#E9E4D8"/>
            <rect x="50" y="192" width="138" height="6" rx="3" fill="#D6D0C2"/>
            <path d="M58 198 q-16 28 -8 58" fill="none" stroke="#E3DED2" stroke-width="6"/>
          </g>

          <!-- 壁いっぱいの掃き出し窓 -->
          <g>
            <rect x="212" y="140" width="648" height="400" fill="url(#wc-r1gl)"/>
            <!-- 向かいの建物。シアー越しなので輪郭だけ残す -->
            <g fill="#B6C6D4" opacity=".5">
              <rect x="626" y="192" width="148" height="348"/><rect x="786" y="240" width="74" height="300"/>
              <rect x="234" y="256" width="92" height="284"/>
            </g>
            <g fill="#FFFFFF" opacity=".4">
              <rect x="644" y="226" width="26" height="34"/><rect x="690" y="226" width="26" height="34"/>
              <rect x="644" y="292" width="26" height="34"/><rect x="736" y="292" width="26" height="34"/>
            </g>
            <!-- バルコニーの手すり -->
            <g fill="#D8D2C4" opacity=".5"><rect x="212" y="446" width="648" height="11"/><rect x="212" y="498" width="648" height="11"/></g>
            <!-- 引き戸の框。シアーの下に沈ませる -->
            <g fill="#3B4A54">
              <rect x="532" y="140" width="28" height="400"/>
              <rect x="212" y="140" width="18" height="400"/><rect x="842" y="140" width="18" height="400"/>
            </g>
            <!-- シアーカーテン -->
            <rect x="212" y="162" width="648" height="378" fill="url(#wc-r1cur)"/>
            <!-- カーテンレールのヘッダー -->
            <rect x="212" y="140" width="648" height="26" fill="#2F3E48"/>
            <rect x="212" y="140" width="648" height="7" fill="#4A5D6B" opacity=".85"/>
            <rect x="212" y="140" width="648" height="400" fill="none" stroke="#59686F" stroke-width="4"/>
          </g>

          <!-- カーペット -->
          <rect y="540" width="1000" height="160" fill="url(#wc-r1cp)"/>
          <rect y="540" width="1000" height="7" fill="#241F1A" opacity=".7"/>

          <!-- 右手の作り付けクローゼット -->
          <g>
            <rect x="866" y="96" width="134" height="470" fill="#FBFAF6"/>
            <rect x="866" y="96" width="11" height="470" fill="#E3DED2"/>
            <rect x="929" y="104" width="7" height="454" fill="#EBE6DA"/>
            <rect x="866" y="96" width="134" height="470" fill="none" stroke="#DED8CA" stroke-width="3"/>
            <rect x="918" y="318" width="8" height="46" rx="4" fill="#C9C2B2"/>
          </g>

          <!-- カーテン越しの朝日。濃いカーペットの上でいちばん強く出る -->
          <g>
            <path d="M236 166 L444 166 L112 700 L-96 700 Z" fill="#FFE7B4" opacity=".26"/>
            <path d="M420 166 L640 166 L470 700 L212 700 Z" fill="#FFF1CE" opacity=".28"/>
            <path d="M652 168 L824 168 L768 700 L544 700 Z" fill="#FFE7B4" opacity=".22"/>
            <path d="M296 172 L340 172 L58 700 L-14 700 Z" fill="#FFFDF4" opacity=".34"/>
            <path d="M724 176 L764 176 L648 700 L578 700 Z" fill="#FFFDF4" opacity=".3"/>
          </g>
          <!-- 窓ぎわの照り返し -->
          <ellipse cx="536" cy="548" rx="380" ry="36" fill="#FFE9B8" opacity=".42" filter="url(#wc-b1)"/>

          <!-- 奥のベッド。シングル寄りの細いほう -->
          <g>
            <rect x="54" y="368" width="212" height="66" rx="5" fill="#C6A886"/>
            <g stroke="#B08A63" stroke-width="3" opacity=".6"><line x1="108" y1="368" x2="108" y2="434"/><line x1="162" y1="368" x2="162" y2="434"/><line x1="216" y1="368" x2="216" y2="434"/></g>
            <rect x="54" y="368" width="212" height="6" rx="3" fill="#FFE9B8" opacity=".7"/>
            <rect x="74" y="400" width="130" height="44" rx="11" fill="#FBFAF6"/>
            <!-- 黄土色×グレーのカラーブロック -->
            <g>
              <rect x="112" y="392" width="74" height="58" rx="4" fill="#EFEAE0"/>
              <rect x="112" y="392" width="25" height="58" fill="#E3C578"/>
              <rect x="137" y="422" width="49" height="28" fill="#CBB19B"/>
              <rect x="137" y="392" width="49" height="30" fill="#DAD6CC"/>
              <rect x="112" y="392" width="74" height="58" rx="4" fill="none" stroke="#D6D0C2" stroke-width="2"/>
            </g>
            <path d="M52 434 L268 434 L256 700 L14 700 Z" fill="url(#wc-r1bd)"/>
            <path d="M52 434 L268 434 L266 466 L50 466 Z" fill="#FFFFFF" opacity=".55"/>
            <!-- 掛け布団のたるみ。縦のストライプと別の線で厚みを出す -->
            <g fill="none" stroke="#EBE6DA" stroke-width="4" opacity=".9">
              <path d="M104 470 L92 700"/><path d="M214 470 L222 700"/>
            </g>
            <path d="M14 700 L18 636 L260 636 L256 700 Z" fill="#E4DFD2" opacity=".45"/>
            <path d="M52 434 L268 434 L256 700 L14 700 Z" fill="none" stroke="#D8D2C4" stroke-width="2.5"/>
          </g>

          <!-- ベッドの間に落ちる影。2台が別々のベッドに見える手当て -->
          <path d="M268 436 L302 436 L280 700 L250 700 Z" fill="#241F1A" opacity=".35" filter="url(#wc-b1)"/>

          <!-- 手前のベッド。幅の広いほう -->
          <g>
            <rect x="306" y="376" width="420" height="74" rx="5" fill="#C6A886"/>
            <g stroke="#B08A63" stroke-width="3" opacity=".6"><line x1="411" y1="376" x2="411" y2="450"/><line x1="516" y1="376" x2="516" y2="450"/><line x1="621" y1="376" x2="621" y2="450"/></g>
            <rect x="306" y="376" width="420" height="6" rx="3" fill="#FFE9B8" opacity=".75"/>
            <rect x="324" y="408" width="150" height="52" rx="12" fill="#FBFAF6"/>
            <rect x="480" y="406" width="150" height="54" rx="12" fill="#F4F1E8"/>
            <rect x="632" y="410" width="88" height="50" rx="12" fill="#FBFAF6"/>
            <!-- キャンプ道具のニットクッション -->
            <g>
              <rect x="364" y="388" width="98" height="86" rx="5" fill="#B9C2CE"/>
              <g stroke="#8B97A6" stroke-width="2" opacity=".5"><line x1="364" y1="416" x2="462" y2="416"/><line x1="364" y1="446" x2="462" y2="446"/></g>
              <path d="M395 424 l13-26 13 26z" fill="#3E6B49"/>
              <path d="M380 450 q10-18 20 0 q-10 8 -20 0z" fill="#C8783A"/>
              <ellipse cx="433" cy="450" rx="17" ry="11" fill="#6E7A87"/><rect x="425" y="446" width="16" height="7" fill="#3A4450"/>
              <g stroke="#8B97A6" stroke-width="3" stroke-linecap="round" opacity=".8">
                <line x1="364" y1="392" x2="358" y2="386"/><line x1="364" y1="418" x2="358" y2="414"/><line x1="364" y1="444" x2="358" y2="442"/>
              </g>
            </g>
            <!-- アイスクリームのニットクッション -->
            <g>
              <rect x="504" y="390" width="94" height="84" rx="5" fill="#2F6B52"/>
              <path d="M529 428 l11 30 11-30z" fill="#E0B77E"/>
              <ellipse cx="540" cy="424" rx="15" ry="12" fill="#FBFAF6"/>
              <circle cx="540" cy="410" r="5" fill="#C8783A"/>
              <path d="M562 430 l12 28 12-28z" fill="#E0B77E"/>
              <ellipse cx="574" cy="424" rx="16" ry="13" fill="#DEE8F1"/>
              <g fill="#C8783A"><circle cx="566" cy="420" r="3"/><circle cx="582" cy="424" r="3"/></g>
              <rect x="504" y="390" width="94" height="84" rx="5" fill="none" stroke="#245542" stroke-width="3"/>
            </g>
            <path d="M302 450 L734 450 L768 700 L274 700 Z" fill="url(#wc-r1bd)"/>
            <path d="M302 450 L734 450 L739 486 L298 486 Z" fill="#FFFFFF" opacity=".6"/>
            <!-- 掛け布団のたるみ -->
            <g fill="none" stroke="#EBE6DA" stroke-width="5" opacity=".9">
              <path d="M394 490 L376 700"/><path d="M528 490 L524 700"/><path d="M660 490 L678 700"/>
            </g>
            <path d="M274 700 L280 630 L757 630 L768 700 Z" fill="#E4DFD2" opacity=".4"/>
            <path d="M734 450 L768 700 L736 700 L706 452 Z" fill="#FFE9B8" opacity=".35"/>
            <path d="M302 450 L734 450 L768 700 L274 700 Z" fill="none" stroke="#D8D2C4" stroke-width="2.5"/>
          </g>

          <!-- ベッドの上まで届く、やわらかい光 -->
          <g>
            <path d="M236 166 L444 166 L112 700 L-96 700 Z" fill="#FFE0A2" opacity=".11"/>
            <path d="M652 168 L824 168 L768 700 L544 700 Z" fill="#FFE0A2" opacity=".1"/>
            <path d="M296 172 L340 172 L58 700 L-14 700 Z" fill="#FFF8E6" opacity=".16"/>
            <path d="M724 176 L764 176 L648 700 L578 700 Z" fill="#FFF8E6" opacity=".14"/>
          </g>
        </svg>
`;

export const ROOM2 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="wc-r2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9E4D9"/><stop offset="1" stop-color="#D2CABA"/></linearGradient>
            <linearGradient id="wc-r2d" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2C5779"/><stop offset="1" stop-color="#1B3A57"/></linearGradient>
            <filter id="wc-b2"><feGaussianBlur stdDeviation="20"/></filter>
          </defs>
          <rect width="1000" height="700" fill="url(#wc-r2w)"/>
          <g stroke="#BEB4A2" stroke-width="2" opacity=".7"><line x1="0" y1="90" x2="1000" y2="90"/><line x1="0" y1="170" x2="1000" y2="170"/><line x1="0" y1="250" x2="1000" y2="250"/><line x1="0" y1="330" x2="1000" y2="330"/><line x1="0" y1="410" x2="1000" y2="410"/></g>
          <!-- 窓 -->
          <rect x="70" y="70" width="260" height="330" fill="#E4EDF3"/>
          <g stroke="#2B2620" stroke-width="7"><line x1="200" y1="70" x2="200" y2="400"/><line x1="70" y1="235" x2="330" y2="235"/></g>
          <rect x="70" y="70" width="260" height="330" fill="none" stroke="#2B2620" stroke-width="13"/>
          <g fill="#A6BED4" opacity=".8"><rect x="96" y="110" width="34" height="90"/><rect x="240" y="130" width="46" height="70"/><rect x="230" y="270" width="70" height="110"/></g>
          <!-- 床とラグ -->
          <rect y="470" width="1000" height="230" fill="#7A5638"/>
          <g stroke="#4A3222" stroke-width="2" opacity=".45"><line x1="0" y1="522" x2="1000" y2="522"/><line x1="0" y1="586" x2="1000" y2="586"/><line x1="430" y1="470" x2="398" y2="700"/><line x1="770" y1="470" x2="810" y2="700"/></g>
          <g><rect x="300" y="510" width="560" height="130" rx="4" fill="#4C6E31" opacity=".9"/>
            <g stroke="#B0CC80" stroke-width="2" opacity=".3"><line x1="300" y1="544" x2="860" y2="544"/><line x1="300" y1="606" x2="860" y2="606"/></g></g>
          <!-- インディゴのソファ -->
          <g>
            <rect x="380" y="316" width="450" height="132" rx="12" fill="url(#wc-r2d)"/>
            <rect x="380" y="392" width="450" height="106" rx="14" fill="#16334D"/>
            <rect x="408" y="348" width="186" height="52" rx="9" fill="#2C5779"/>
            <rect x="610" y="342" width="186" height="58" rx="9" fill="#3A6B92"/>
            <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".9"><line x1="388" y1="402" x2="822" y2="402"/><line x1="388" y1="488" x2="822" y2="488"/></g>
            <rect x="398" y="498" width="14" height="38" fill="#2B2620"/><rect x="798" y="498" width="14" height="38" fill="#2B2620"/>
          </g>
          <!-- 鉄脚テーブル -->
          <g><rect x="452" y="556" width="240" height="12" rx="3" fill="#6B4A32"/>
            <g stroke="#2B2620" stroke-width="7"><line x1="474" y1="568" x2="464" y2="624"/><line x1="670" y1="568" x2="680" y2="624"/></g>
            <rect x="514" y="534" width="48" height="22" rx="2" fill="#F2EFE8"/></g>
          <!-- 風神雷神。デニムのインディゴだけで刷ったアートワーク。
               左が雷神（太鼓の輪）、右が風神（風袋）。 -->
          <g>
            <rect x="600" y="70" width="172" height="208" fill="#3F2A1B"/>
            <rect x="608" y="78" width="156" height="192" fill="#F2EFE8"/>
            <rect x="618" y="88" width="136" height="150" fill="#E4EAF0"/>
            <!-- 雷神 -->
            <g>
              <circle cx="654" cy="152" r="34" fill="none" stroke="#2C5779" stroke-width="2.5" opacity=".7"/>
              <g fill="#1B3A57">
                <circle cx="688" cy="152" r="5.5"/><circle cx="678" cy="128" r="5.5"/><circle cx="654" cy="118" r="5.5"/>
                <circle cx="630" cy="128" r="5.5"/><circle cx="620" cy="152" r="5.5"/><circle cx="630" cy="176" r="5.5"/>
                <circle cx="654" cy="186" r="5.5"/><circle cx="678" cy="176" r="5.5"/>
              </g>
              <path d="M638 200 q4-34 16-36 q13 2 16 36 q-16 7 -32 0z" fill="#16334D"/>
              <circle cx="654" cy="150" r="11" fill="#16334D"/>
              <path d="M634 172 q9 13 20 13 q12 0 20-13" fill="none" stroke="#16334D" stroke-width="4.5" stroke-linecap="round"/>
            </g>
            <!-- 風神 -->
            <g>
              <path d="M694 148 q28-46 56-8" fill="none" stroke="#1B3A57" stroke-width="10" stroke-linecap="round"/>
              <path d="M698 145 q25-38 48-7" fill="none" stroke="#3A6B92" stroke-width="3.5" stroke-linecap="round"/>
              <path d="M706 208 q4-34 16-36 q13 2 16 36 q-16 7 -32 0z" fill="#1B3A57"/>
              <circle cx="722" cy="160" r="11" fill="#1B3A57"/>
              <path d="M702 182 q9 13 20 13 q12 0 20-13" fill="none" stroke="#1B3A57" stroke-width="4.5" stroke-linecap="round"/>
            </g>
            <g fill="#A6BED4" opacity=".5"><ellipse cx="662" cy="222" rx="42" ry="9"/><ellipse cx="726" cy="228" rx="34" ry="8"/></g>
            <g><rect x="628" y="248" width="62" height="6" fill="#2B2620"/><rect x="698" y="248" width="26" height="6" fill="#C8783A"/></g>
          </g>
          <!-- ランプ -->
          <g><line x1="880" y1="0" x2="880" y2="120" stroke="#2B2620" stroke-width="3"/>
            <path d="M836 120h90l-22 52h-46z" fill="#2B2620"/><circle cx="880" cy="184" r="12" fill="#F0D9A8"/>
            <circle cx="880" cy="188" r="52" fill="#F0D9A8" opacity=".22" filter="url(#wc-b2)"/></g>
          <ellipse cx="600" cy="540" rx="300" ry="30" fill="#2B2620" opacity=".2" filter="url(#wc-b2)"/>
        </svg>
`;

export const ROOM3 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id="wc-b3"><feGaussianBlur stdDeviation="22"/></filter>
            <linearGradient id="wc-r3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F5F1E7"/><stop offset="1" stop-color="#E3DCCC"/></linearGradient>
            <linearGradient id="wc-r3f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DFC8"/><stop offset="1" stop-color="#C7B693"/></linearGradient>
            <linearGradient id="wc-r3p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7A5638"/><stop offset="1" stop-color="#5A3D28"/></linearGradient>
          </defs>
          <rect width="1000" height="700" fill="url(#wc-r3w)"/>

          <!-- 窓。外は御苑の新緑 -->
          <rect x="742" y="62" width="218" height="336" fill="#EFF5F8"/>
          <g fill="#74994A" opacity=".75"><ellipse cx="806" cy="152" rx="60" ry="44"/><ellipse cx="912" cy="248" rx="54" ry="40"/></g>
          <g fill="#4C6E31" opacity=".55"><ellipse cx="838" cy="196" rx="42" ry="30"/></g>
          <g fill="#B0CC80" opacity=".7"><ellipse cx="790" cy="120" rx="30" ry="20"/><ellipse cx="922" cy="214" rx="26" ry="17"/></g>
          <g stroke="#6B4A32" stroke-width="7"><line x1="851" y1="62" x2="851" y2="398"/><line x1="742" y1="230" x2="960" y2="230"/></g>
          <rect x="742" y="62" width="218" height="336" fill="none" stroke="#6B4A32" stroke-width="14"/>

          <!-- 風神雷神の二幅。デニムのインディゴだけで刷ってある -->
          <g>
            <g>
              <rect x="168" y="86" width="116" height="216" fill="#3F2A1B"/>
              <rect x="175" y="93" width="102" height="202" fill="#F2EFE8"/>
              <circle cx="226" cy="168" r="28" fill="none" stroke="#2C5779" stroke-width="2" opacity=".7"/>
              <g fill="#1B3A57">
                <circle cx="254" cy="168" r="4.5"/><circle cx="246" cy="148" r="4.5"/><circle cx="226" cy="140" r="4.5"/>
                <circle cx="206" cy="148" r="4.5"/><circle cx="198" cy="168" r="4.5"/><circle cx="206" cy="188" r="4.5"/>
                <circle cx="226" cy="196" r="4.5"/><circle cx="246" cy="188" r="4.5"/>
              </g>
              <path d="M212 242 q4-30 14-32 q11 2 14 32 q-14 6 -28 0z" fill="#16334D"/>
              <circle cx="226" cy="166" r="9.5" fill="#16334D"/>
              <path d="M210 186 q8 11 16 11 q10 0 16-11" fill="none" stroke="#16334D" stroke-width="4" stroke-linecap="round"/>
              <g fill="#A6BED4" opacity=".5"><ellipse cx="226" cy="264" rx="36" ry="8"/></g>
            </g>
            <g>
              <rect x="296" y="86" width="116" height="216" fill="#3F2A1B"/>
              <rect x="303" y="93" width="102" height="202" fill="#F2EFE8"/>
              <path d="M326 166 q26-42 52-8" fill="none" stroke="#1B3A57" stroke-width="9" stroke-linecap="round"/>
              <path d="M330 163 q23-34 44-7" fill="none" stroke="#3A6B92" stroke-width="3" stroke-linecap="round"/>
              <path d="M340 248 q4-30 14-32 q11 2 14 32 q-14 6 -28 0z" fill="#1B3A57"/>
              <circle cx="354" cy="178" r="9.5" fill="#1B3A57"/>
              <path d="M338 198 q8 11 16 11 q10 0 16-11" fill="none" stroke="#1B3A57" stroke-width="4" stroke-linecap="round"/>
              <g fill="#A6BED4" opacity=".5"><ellipse cx="354" cy="266" rx="36" ry="8"/></g>
            </g>
          </g>

          <!-- 読書灯 -->
          <g><rect x="512" y="196" width="8" height="46" rx="4" fill="#2B2620"/>
            <path d="M492 196h48l-12 26h-24z" fill="#2B2620"/><circle cx="516" cy="230" r="7" fill="#F0D9A8"/>
            <circle cx="516" cy="234" r="36" fill="#F0D9A8" opacity=".2" filter="url(#wc-b3)"/></g>

          <!-- 床（白茶けた無垢材） -->
          <rect y="520" width="1000" height="180" fill="url(#wc-r3f)"/>
          <g stroke="#A8977A" stroke-width="2" opacity=".55"><line x1="0" y1="572" x2="1000" y2="572"/><line x1="0" y1="638" x2="1000" y2="638"/><line x1="770" y1="520" x2="800" y2="700"/></g>
          <rect y="520" width="1000" height="8" fill="#6B4A32" opacity=".5"/>
          <path d="M742 520 L960 520 L1000 700 L700 700 Z" fill="#FFF8E6" opacity=".26" filter="url(#wc-b3)"/>

          <!-- 小上がり。段板の下は荷物置きに抜いてある -->
          <g>
            <ellipse cx="390" cy="626" rx="330" ry="20" fill="#2B2620" opacity=".2" filter="url(#wc-b3)"/>
            <rect x="70" y="452" width="630" height="170" fill="url(#wc-r3p)"/>
            <g stroke="#4A3222" stroke-width="2" opacity=".4"><line x1="70" y1="500" x2="700" y2="500"/><line x1="70" y1="560" x2="700" y2="560"/></g>
            <rect x="70" y="430" width="630" height="24" rx="3" fill="#8F6743"/>
            <rect x="70" y="430" width="630" height="7" rx="3" fill="#B08A63"/>
            <!-- 荷物を入れる開口 -->
            <g fill="#241F1A">
              <rect x="132" y="486" width="214" height="118" rx="4"/><rect x="386" y="486" width="214" height="118" rx="4"/>
            </g>
            <g fill="#3A322A"><rect x="132" y="486" width="214" height="9"/><rect x="386" y="486" width="214" height="9"/></g>
            <!-- スーツケース -->
            <g>
              <rect x="170" y="508" width="122" height="88" rx="9" fill="#2C5779"/>
              <g stroke="#A6BED4" stroke-width="3" opacity=".7"><line x1="200" y1="512" x2="200" y2="592"/><line x1="262" y1="512" x2="262" y2="592"/></g>
              <rect x="214" y="498" width="34" height="11" rx="5" fill="#0F1D2A"/>
              <g fill="#0F1D2A"><circle cx="188" cy="598" r="7"/><circle cx="274" cy="598" r="7"/></g>
            </g>
            <!-- ダッフルと畳んだリネン -->
            <g>
              <rect x="418" y="530" width="150" height="64" rx="26" fill="#6B4A32"/>
              <path d="M456 530 q38-26 76 0" fill="none" stroke="#4A3222" stroke-width="6"/>
              <rect x="418" y="506" width="150" height="9" rx="4" fill="#C6D6E4" opacity=".8"/>
              <rect x="430" y="516" width="126" height="9" rx="4" fill="#DEE8F1" opacity=".75"/>
            </g>
            <!-- 段板の上の苔玉 -->
            <g>
              <ellipse cx="654" cy="428" rx="30" ry="7" fill="#2B2620" opacity=".28"/>
              <ellipse cx="654" cy="422" rx="29" ry="7" fill="#3A322A"/>
              <circle cx="654" cy="400" r="24" fill="#4C6E31"/>
              <path d="M630 400a24 24 0 0 1 26-23 23 23 0 0 0-17 23z" fill="#74994A"/>
              <g fill="#B0CC80" opacity=".85"><circle cx="644" cy="389" r="4.6"/><circle cx="664" cy="394" r="3.4"/><circle cx="650" cy="409" r="3"/></g>
              <g fill="none" stroke="#74994A" stroke-width="3" stroke-linecap="round">
                <path d="M649 378 q-6-19 3-31"/><path d="M659 377 q8-16 18-22"/>
              </g>
            </g>
          </g>

          <!-- 厚手のマットレス。フレームは無く、段板に直接敷く -->
          <g>
            <rect x="110" y="336" width="500" height="96" rx="11" fill="#F7F5EF"/>
            <rect x="110" y="396" width="500" height="36" rx="9" fill="#E6E0D2"/>
            <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".85"><line x1="118" y1="400" x2="602" y2="400"/></g>
            <g stroke="#D8D2C4" stroke-width="2" opacity=".9"><line x1="110" y1="366" x2="610" y2="366"/></g>
            <!-- 枕 -->
            <rect x="142" y="284" width="152" height="56" rx="13" fill="#FBFAF6"/>
            <rect x="306" y="280" width="152" height="60" rx="13" fill="#EDF2F7"/>
            <!-- 足元のデニムスロー -->
            <g>
              <rect x="466" y="332" width="144" height="100" rx="9" fill="#1B3A57"/>
              <rect x="466" y="360" width="144" height="26" fill="#2C5779"/>
              <g stroke="#C8783A" stroke-width="2" stroke-dasharray="7 6" opacity=".8"><line x1="472" y1="392" x2="604" y2="392"/></g>
            </g>
          </g>

          <!-- 脱いだ靴。ここで靴を脱いで上がる。
               slice で上下が切られるので y は 45–655 の内側に収める -->
          <g fill="#2B2620" opacity=".85">
            <rect x="742" y="600" width="78" height="30" rx="15"/><rect x="836" y="616" width="78" height="30" rx="15"/>
          </g>
        </svg>
`;

export const EXP_GYOEN = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="wc-e1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DCE7F0"/><stop offset="1" stop-color="#EDEEE0"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#wc-e1)"/>
            <g fill="#A6BED4" opacity=".5"><rect x="16" y="90" width="62" height="200"/><rect x="470" y="50" width="82" height="240"/><rect x="380" y="130" width="46" height="160"/></g>
            <g fill="#4C6E31"><ellipse cx="140" cy="270" rx="150" ry="118"/><ellipse cx="430" cy="230" rx="168" ry="128"/><ellipse cx="290" cy="330" rx="176" ry="116"/></g>
            <g fill="#74994A" opacity=".9"><ellipse cx="110" cy="222" rx="70" ry="52"/><ellipse cx="450" cy="182" rx="80" ry="56"/></g>
            <g fill="#B0CC80" opacity=".45"><ellipse cx="96" cy="192" rx="44" ry="28"/><ellipse cx="466" cy="152" rx="46" ry="28"/></g>
            <g fill="#4A3222"><rect x="126" y="356" width="30" height="180"/><rect x="418" y="330" width="24" height="206"/></g>
            <rect y="470" width="600" height="330" fill="#7CA24C"/>
            <path d="M0 640 Q300 556 600 636 L600 800 L0 800 Z" fill="#9CBF67"/>
            <g stroke="#688C3C" stroke-width="3" opacity=".35"><path d="M0 700 Q300 638 600 706"/><path d="M0 750 Q300 690 600 756"/></g>
            <g fill="#4C6E31" opacity=".7"><ellipse cx="210" cy="694" rx="34" ry="12"/><rect x="196" y="632" width="14" height="62" rx="7"/><circle cx="203" cy="622" r="11"/>
              <ellipse cx="258" cy="706" rx="30" ry="11"/><rect x="248" y="650" width="12" height="56" rx="6"/><circle cx="254" cy="642" r="10"/></g>
            <g fill="#C6D6E4" opacity=".8"><rect x="330" y="686" width="86" height="52" rx="6"/></g>
          </svg>
`;

export const EXP_KISSA = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="800" fill="#EDE7DA"/>
            <rect y="0" width="600" height="330" fill="#6B4A32"/>
            <g stroke="#4A3222" stroke-width="3" opacity=".5"><line x1="0" y1="90" x2="600" y2="90"/><line x1="0" y1="186" x2="600" y2="186"/><line x1="0" y1="272" x2="600" y2="272"/></g>
            <g fill="#F2EFE8"><rect x="54" y="40" width="42" height="46" rx="5"/><rect x="124" y="46" width="36" height="40" rx="5"/><rect x="192" y="36" width="46" height="50" rx="5"/></g>
            <g fill="#1B3A57"><rect x="300" y="128" width="52" height="54" rx="4"/><rect x="378" y="134" width="44" height="48" rx="4"/></g>
            <g fill="#4C6E31"><rect x="466" y="120" width="60" height="62" rx="6"/></g>
            <rect y="330" width="600" height="56" fill="#8F6743"/>
            <rect y="386" width="600" height="414" fill="#DCD5C6"/>
            <g>
              <ellipse cx="200" cy="524" rx="98" ry="26" fill="#C7BFAE"/>
              <path d="M138 470h124l-14 62h-96z" fill="#FBFAF6"/>
              <ellipse cx="200" cy="470" rx="62" ry="16" fill="#4A3222"/>
              <path d="M264 486q34 14 0 32" stroke="#FBFAF6" stroke-width="10" fill="none"/>
            </g>
            <g>
              <rect x="386" y="430" width="122" height="112" rx="10" fill="#2B2620"/>
              <path d="M508 462q40 30 0 60" stroke="#2B2620" stroke-width="10" fill="none"/>
              <rect x="422" y="404" width="48" height="26" rx="6" fill="#2B2620"/>
            </g>
            <g stroke="#FBFAF6" stroke-width="5" fill="none" opacity=".7" stroke-linecap="round">
              <path d="M186 440q-14-26 6-44 18-18 4-40"/><path d="M216 446q-14-22 6-40"/>
            </g>
            <rect y="700" width="600" height="100" fill="#6B4A32"/>
          </svg>
`;

export const EXP_LAUNDRY = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="800" fill="#DEE8F1"/>
            <rect y="470" width="600" height="330" fill="#C6D6E4"/>
            <g stroke="#A6BED4" stroke-width="2"><line x1="0" y1="540" x2="600" y2="540"/><line x1="0" y1="620" x2="600" y2="620"/><line x1="0" y1="706" x2="600" y2="706"/></g>
            <g fill="#F2EFE8" stroke="#A6BED4" stroke-width="3">
              <rect x="52" y="180" width="200" height="270" rx="8"/><rect x="290" y="180" width="200" height="270" rx="8"/>
              <rect x="52" y="470" width="200" height="250" rx="8"/><rect x="290" y="470" width="200" height="250" rx="8"/>
            </g>
            <g><circle cx="152" cy="310" r="66" fill="#1B3A57"/><circle cx="152" cy="310" r="52" fill="#2C5779"/>
              <circle cx="390" cy="310" r="66" fill="#2B2620"/><circle cx="390" cy="310" r="52" fill="#3A342C"/>
              <circle cx="152" cy="596" r="66" fill="#4C6E31"/><circle cx="152" cy="596" r="52" fill="#74994A"/>
              <circle cx="390" cy="596" r="66" fill="#1B3A57"/><circle cx="390" cy="596" r="52" fill="#3A6B92"/></g>
            <g fill="#C6D6E4" opacity=".75"><circle cx="140" cy="300" r="18"/><circle cx="170" cy="326" r="13"/><circle cx="380" cy="586" r="16"/></g>
            <g fill="#C8783A"><rect x="72" y="200" width="34" height="8"/><rect x="310" y="200" width="34" height="8"/><rect x="72" y="490" width="34" height="8"/><rect x="310" y="490" width="34" height="8"/></g>
            <rect x="520" y="180" width="46" height="540" rx="6" fill="#6B4A32"/>
          </svg>
`;

export const EXP_YOKOCHO = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="800" fill="#16273A"/>
            <g fill="#1F3448"><rect x="0" width="200" height="800"/><rect x="400" width="200" height="800"/></g>
            <rect x="200" width="200" height="560" fill="#0E1A26"/>
            <g>
              <rect x="40" y="120" width="52" height="230" fill="#C8783A"/>
              <g fill="#16273A"><rect x="56" y="146" width="20" height="20"/><rect x="56" y="184" width="20" height="20"/><rect x="56" y="222" width="20" height="20"/><rect x="56" y="260" width="20" height="20"/></g>
              <rect x="500" y="70" width="46" height="290" fill="#4C6E31"/>
              <g fill="#F0D9A8"><rect x="514" y="100" width="18" height="18"/><rect x="514" y="136" width="18" height="18"/><rect x="514" y="172" width="18" height="18"/></g>
              <rect x="440" y="400" width="120" height="40" fill="#DEE8F1"/>
            </g>
            <g fill="#F0D9A8"><ellipse cx="150" cy="430" rx="22" ry="28"/><ellipse cx="210" cy="450" rx="20" ry="26"/><ellipse cx="270" cy="428" rx="22" ry="28"/></g>
            <line x1="128" y1="430" x2="292" y2="418" stroke="#C8783A" stroke-width="2" opacity=".5"/>
            <rect y="560" width="600" height="240" fill="#0A1420"/>
            <g opacity=".45" fill="#F0D9A8"><rect x="140" y="580" width="18" height="180"/><rect x="204" y="580" width="14" height="150"/><rect x="264" y="580" width="18" height="190"/></g>
            <g opacity=".3" fill="#C8783A"><rect x="52" y="580" width="30" height="210"/></g>
            <g fill="#050C14"><rect x="330" y="470" width="26" height="120" rx="12"/><circle cx="343" cy="456" r="18"/></g>
          </svg>
`;

export const EXP_SKYLINE = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="wc-e5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DEE8F1"/><stop offset="1" stop-color="#C6D6E4"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#wc-e5)"/>
            <g fill="#8FA9BF" opacity=".85"><rect x="0" y="260" width="150" height="540"/><rect x="160" y="170" width="120" height="630"/><rect x="300" y="330" width="90" height="470"/><rect x="410" y="220" width="190" height="580"/></g>
            <g fill="#6E8FAC"><rect x="120" y="390" width="60" height="410"/><rect x="380" y="450" width="60" height="350"/></g>
            <g fill="#EDF2F7" opacity=".8">
              <rect x="182" y="220" width="14" height="20"/><rect x="214" y="220" width="14" height="20"/><rect x="246" y="256" width="14" height="20"/>
              <rect x="182" y="292" width="14" height="20"/><rect x="214" y="328" width="14" height="20"/>
              <rect x="440" y="270" width="14" height="20"/><rect x="482" y="270" width="14" height="20"/><rect x="524" y="306" width="14" height="20"/>
              <rect x="440" y="342" width="14" height="20"/><rect x="566" y="378" width="14" height="20"/>
              <rect x="30" y="320" width="14" height="20"/><rect x="72" y="360" width="14" height="20"/></g>
            <g stroke="#2B2620" stroke-width="3" fill="none" opacity=".8"><path d="M0 150 Q300 210 600 140"/><path d="M0 186 Q300 250 600 178"/></g>
            <g fill="#2B2620"><rect x="286" y="100" width="12" height="150"/><rect x="256" y="116" width="72" height="8"/><rect x="262" y="144" width="60" height="8"/></g>
            <g fill="#4C6E31"><ellipse cx="70" cy="720" rx="92" ry="66"/><ellipse cx="540" cy="756" rx="82" ry="56"/></g>
          </svg>
`;

export const SHADOW = String.raw`
<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">
            <rect width="400" height="500" fill="#2B2620"/>
            <g opacity=".5"><rect x="40" width="26" height="500" fill="#3F372E"/><rect x="140" width="26" height="500" fill="#3F372E"/><rect x="240" width="26" height="500" fill="#3F372E"/><rect x="340" width="26" height="500" fill="#3F372E"/></g>
            <defs><linearGradient id="wc-sd" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#F0D9A8" stop-opacity=".26"/><stop offset=".45" stop-color="#2B2620" stop-opacity=".2"/><stop offset="1" stop-color="#0D0B09" stop-opacity=".82"/></linearGradient></defs>
            <rect width="400" height="500" fill="url(#wc-sd)"/>
            <g opacity=".5" fill="#0D0B09"><path d="M60 120 L220 60 L300 200 L120 280 Z"/><path d="M180 340 L360 300 L400 440 L200 480 Z"/></g>
          </svg>
`;

export const MAP = String.raw`
<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="wc-cloth" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#E4EDF4"/><stop offset="1" stop-color="#C6D6E4"/>
            </linearGradient>
          </defs>
          <rect width="900" height="700" fill="url(#wc-cloth)"/>
          <g opacity=".5">
            <rect width="900" height="700" fill="none"/>
            <g stroke="#FFFFFF" stroke-width="1" opacity=".6">
              <path d="M-100 0 L900 630" /><path d="M-100 60 L900 690"/><path d="M-100 120 L900 750"/>
              <path d="M-100 -60 L900 570"/><path d="M-100 -120 L900 510"/>
            </g>
          </g>
          <!-- 街区（薄い当て布） -->
          <g fill="#FFFFFF" opacity=".42">
            <rect x="30" y="60" width="150" height="120"/><rect x="200" y="60" width="120" height="120"/>
            <rect x="340" y="60" width="180" height="92"/><rect x="30" y="200" width="150" height="140"/>
            <rect x="200" y="200" width="120" height="140"/><rect x="340" y="172" width="100" height="168"/>
            <rect x="30" y="360" width="110" height="130"/><rect x="160" y="360" width="160" height="130"/>
            <rect x="30" y="512" width="150" height="150"/><rect x="200" y="512" width="140" height="150"/>
            <rect x="360" y="512" width="120" height="150"/>
          </g>
          <!-- 御苑＝フォレストのアップリケ -->
          <path d="M470 250 q120 -60 250 10 q80 60 60 190 q-30 150 -220 160 q-180 10 -210 -140 q-24 -140 120 -220 Z" fill="#4C6E31"/>
          <path d="M470 250 q120 -60 250 10 q80 60 60 190 q-30 150 -220 160 q-180 10 -210 -140 q-24 -140 120 -220 Z"
                fill="none" stroke="#B0CC80" stroke-width="2" stroke-dasharray="7 6" opacity=".8"/>
          <g fill="#74994A" opacity=".8"><ellipse cx="620" cy="360" rx="82" ry="56"/><ellipse cx="722" cy="482" rx="60" ry="44"/><ellipse cx="540" cy="474" rx="66" ry="46"/></g>
          <!-- 道＝ステッチ -->
          <g stroke="#1B3A57" stroke-width="2.4" stroke-dasharray="9 7" opacity=".55" fill="none">
            <line x1="0" y1="192" x2="900" y2="192"/><line x1="0" y1="350" x2="900" y2="350"/>
            <line x1="0" y1="500" x2="900" y2="500"/>
            <line x1="190" y1="0" x2="190" y2="700"/><line x1="330" y1="0" x2="330" y2="700"/>
            <line x1="490" y1="0" x2="490" y2="700"/>
          </g>
          <!-- 甲州街道：太いステッチ -->
          <line x1="0" y1="640" x2="900" y2="600" stroke="#1B3A57" stroke-width="5" stroke-dasharray="14 9" opacity=".5"/>
          <!-- 鉄道 -->
          <g><line x1="0" y1="96" x2="900" y2="66" stroke="#2B2620" stroke-width="6"/>
            <line x1="0" y1="96" x2="900" y2="66" stroke="#E4EDF4" stroke-width="2.5" stroke-dasharray="10 10"/></g>
          <!-- 駅 -->
          <rect x="96" y="60" width="70" height="34" rx="3" fill="#2B2620"/>
          <text x="131" y="83" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="#EDF2F7">JR</text>
          <circle cx="470" cy="330" r="11" fill="#EDF2F7" stroke="#4C6E31" stroke-width="5"/>
          <text x="470" y="306" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#EDF2F7" letter-spacing="1">GYOENMAE</text>
          <circle cx="196" cy="500" r="10" fill="#EDF2F7" stroke="#6B4A32" stroke-width="5"/>
          <text x="196" y="478" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#2B2620" letter-spacing="1">SHINJUKU 3</text>
          <!-- 御苑の名前（刺繍） -->
          <text x="596" y="452" font-family="Newsreader, serif" font-style="italic" font-size="38" fill="#DEE8F1">Shinjuku Gyoen</text>
          <text x="598" y="484" font-family="IBM Plex Mono, monospace" font-size="12" fill="#B0CC80" letter-spacing="3">58.3 HA OF QUIET</text>
          <!-- 徒歩ルート -->
          <path d="M340 392 L470 392 L470 342" fill="none" stroke="#C8783A" stroke-width="3" stroke-dasharray="7 7"/>
        </svg>
`;

export const HOOD_CITY = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#C6D6E4"/>
              <g fill="#8FA9BF"><rect x="0" y="80" width="90" height="170"/><rect x="110" y="40" width="70" height="210"/><rect x="200" y="110" width="60" height="140"/><rect x="280" y="60" width="120" height="190"/></g>
              <g fill="#EDF2F7" opacity=".85"><rect x="126" y="70" width="10" height="14"/><rect x="152" y="100" width="10" height="14"/><rect x="304" y="90" width="10" height="14"/><rect x="352" y="130" width="10" height="14"/></g>
              <g fill="#4C6E31"><ellipse cx="50" cy="234" rx="70" ry="40"/></g>
              <rect y="238" width="400" height="12" fill="#6B4A32"/>
            </svg>
`;

export const HOOD_PARK = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#9CBF67"/>
              <g fill="#4C6E31"><ellipse cx="90" cy="86" rx="124" ry="88"/><ellipse cx="308" cy="66" rx="132" ry="82"/></g>
              <g fill="#74994A" opacity=".85"><ellipse cx="120" cy="60" rx="60" ry="40"/></g>
              <rect y="160" width="400" height="90" fill="#7CA24C"/>
              <g fill="#4A3222"><rect x="80" y="138" width="20" height="62"/><rect x="292" y="128" width="16" height="62"/></g>
              <path d="M0 210 Q200 176 400 214 L400 250 L0 250 Z" fill="#9CBF67"/>
            </svg>
`;
