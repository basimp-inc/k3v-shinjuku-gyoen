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
              <!-- ベッド背面の壁パネル。深い緑ではなく、日の当たった
                   オリーブ〜若草でとる。明るい床に対して沈ませない。 -->
              <linearGradient id="wc-holv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#A6B978"/><stop offset="1" stop-color="#7F9551"/>
              </linearGradient>
              <!-- 床はライトオークの無垢材。上に置く家具はすべて濃い木で
                   とる。床と天板が同系色で溶ける問題の解。 -->
              <linearGradient id="wc-hfl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#C9B896"/><stop offset=".4" stop-color="#E7DDC5"/>
                <stop offset=".75" stop-color="#D9CCAD"/><stop offset="1" stop-color="#C2B08E"/>
              </linearGradient>
              <linearGradient id="wc-htbl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#D9C098"/><stop offset=".55" stop-color="#C2A377"/><stop offset="1" stop-color="#A9895E"/>
              </linearGradient>
              <!-- 白黒の杉綾ラグ。一枚の柄で敷いて、床の木目と喧嘩させない -->
              <pattern id="wc-hhb" width="36" height="20" patternUnits="userSpaceOnUse">
                <rect width="36" height="20" fill="#F2EFE8"/>
                <path d="M-9 20 L9 0 L27 20 L45 0" fill="none" stroke="#2B2620" stroke-width="5.5" opacity=".78"/>
              </pattern>
              <filter id="wc-hbl"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>

            <!-- 天井と白い壁 -->
            <rect width="800" height="1000" fill="url(#wc-hwall)"/>
            <rect width="800" height="112" fill="#FCFAF5"/>
            <line x1="0" y1="112" x2="800" y2="112" stroke="#DED8CA" stroke-width="3"/>

            <!-- ベッドの背にまわしたオリーブの壁 -->
            <rect x="276" y="128" width="472" height="432" fill="url(#wc-holv)"/>
            <rect x="276" y="128" width="472" height="7" fill="#6F8544" opacity=".7"/>

            <!-- 柱の向こうにもう一台。シングルのデイベッド -->
            <g>
              <rect x="16" y="342" width="212" height="66" rx="6" fill="#B08A63"/>
              <g stroke="#8F6743" stroke-width="3" opacity=".7">
                <line x1="70" y1="342" x2="70" y2="408"/><line x1="124" y1="342" x2="124" y2="408"/><line x1="178" y1="342" x2="178" y2="408"/>
              </g>
              <rect x="40" y="366" width="118" height="44" rx="10" fill="#FBFAF6"/>
              <rect x="16" y="408" width="212" height="74" rx="7" fill="#F7F5EF"/>
              <rect x="16" y="452" width="212" height="30" rx="6" fill="#E9E4D6"/>
              <rect x="16" y="482" width="212" height="18" rx="4" fill="#8F6743"/>
              <rect x="30" y="500" width="14" height="60" fill="#6B4A32"/><rect x="196" y="500" width="14" height="60" fill="#6B4A32"/>
            </g>

            <!-- 白い柱。部屋はこれで奥と手前に分かれている -->
            <g>
              <rect x="212" y="112" width="86" height="448" fill="#FBFAF6"/>
              <rect x="212" y="112" width="10" height="448" fill="#FFFFFF" opacity=".85"/>
              <rect x="284" y="112" width="14" height="448" fill="#E3DED2"/>
              <rect x="298" y="128" width="20" height="432" fill="#2B2620" opacity=".13"/>
              <rect x="748" y="112" width="52" height="448" fill="#FBFAF6"/>
              <rect x="748" y="112" width="12" height="448" fill="#E3DED2"/>
            </g>

            <!-- 床（ライトオーク） -->
            <rect y="560" width="800" height="440" fill="url(#wc-hfl)"/>
            <g stroke="#A8977A" stroke-width="2" opacity=".6">
              <line x1="0" y1="626" x2="800" y2="626"/><line x1="0" y1="704" x2="800" y2="704"/>
              <line x1="0" y1="796" x2="800" y2="796"/><line x1="0" y1="902" x2="800" y2="902"/>
              <line x1="250" y1="560" x2="214" y2="1000"/><line x1="560" y1="560" x2="600" y2="1000"/>
            </g>
            <!-- 朝日。日陰を敷いてから金色の帯を置き、柱の影を落とす。
                 明るい床に白を重ねても光にならないので金色でとる -->
            <rect y="560" width="800" height="440" fill="#6B4A32" opacity=".18"/>
            <path d="M96 560 L432 560 L604 1000 L188 1000 Z" fill="#FFE0A2" opacity=".6"/>
            <path d="M142 560 L390 560 L546 1000 L242 1000 Z" fill="#FFF1CE" opacity=".5"/>
            <path d="M226 560 L302 560 L404 1000 L316 1000 Z" fill="#7A5A38" opacity=".26"/>
            <ellipse cx="252" cy="568" rx="190" ry="30" fill="#FFE9B8" opacity=".5" filter="url(#wc-hbl)"/>
            <!-- 壁と床の見切り -->
            <rect y="560" width="800" height="10" fill="#6B4A32" opacity=".6"/>

            <!-- 杉綾のラグ -->
            <g>
              <rect x="300" y="566" width="500" height="100" rx="3" fill="url(#wc-hhb)"/>
              <rect x="300" y="566" width="500" height="100" rx="3" fill="none" stroke="#2B2620" stroke-width="3" opacity=".4"/>
              <rect x="300" y="566" width="500" height="100" rx="3" fill="#FFE0A2" opacity=".13"/>
            </g>

            <!-- 四本柱のベッド。奥の柱を先に立て、寝具を挟んで
                 手前の柱を重ねると、framework の奥行きが出る -->
            <g>
              <rect x="346" y="190" width="340" height="14" fill="#8F6743"/>
              <rect x="352" y="196" width="15" height="344" fill="#8F6743"/><rect x="664" y="196" width="15" height="344" fill="#8F6743"/>
              <!-- ヘッドボードと枕 -->
              <rect x="350" y="308" width="328" height="84" rx="5" fill="#B08A63"/>
              <g stroke="#8F6743" stroke-width="3" opacity=".65">
                <line x1="432" y1="308" x2="432" y2="392"/><line x1="514" y1="308" x2="514" y2="392"/><line x1="596" y1="308" x2="596" y2="392"/>
              </g>
              <rect x="366" y="344" width="140" height="60" rx="12" fill="#FBFAF6"/>
              <rect x="518" y="340" width="140" height="64" rx="12" fill="#F2EFE8"/>
              <!-- 白い掛け布団 -->
              <rect x="336" y="398" width="356" height="116" rx="8" fill="#F7F5EF"/>
              <rect x="336" y="470" width="356" height="44" rx="6" fill="#E9E4D6"/>
              <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".85"><line x1="344" y1="480" x2="684" y2="480"/></g>
              <g stroke="#DAD4C6" stroke-width="2" opacity=".9"><line x1="336" y1="424" x2="692" y2="424"/></g>
              <rect x="336" y="512" width="356" height="22" rx="4" fill="#8F6743"/>
              <rect x="344" y="534" width="340" height="8" fill="#6B4A32"/>
              <!-- 手前の柱と天井の桁 -->
              <rect x="314" y="200" width="396" height="18" fill="#B08A63"/>
              <rect x="314" y="216" width="396" height="6" fill="#8F6743"/>
              <rect x="322" y="200" width="22" height="392" fill="#B08A63"/><rect x="326" y="200" width="6" height="392" fill="#C6A886" opacity=".6"/>
              <rect x="680" y="200" width="22" height="392" fill="#B08A63"/><rect x="684" y="200" width="6" height="392" fill="#C6A886" opacity=".6"/>
            </g>

            <!-- 1. グレーファブリックに木の肘のアームチェア -->
            <g>
              <rect x="44" y="588" width="156" height="92" rx="16" fill="#D9D6CB"/>
              <rect x="44" y="588" width="156" height="18" rx="9" fill="#C5C1B4"/>
              <rect x="36" y="668" width="172" height="48" rx="13" fill="#E4E1D6"/>
              <g fill="#8F6743"><rect x="28" y="640" width="16" height="58" rx="8"/><rect x="200" y="640" width="16" height="58" rx="8"/></g>
              <g stroke="#8F6743" stroke-width="11" stroke-linecap="round"><line x1="58" y1="716" x2="44" y2="792"/><line x1="186" y1="716" x2="200" y2="792"/></g>
            </g>

            <!-- 4. ベッド寄りの、木のスピンドルチェア -->
            <g>
              <rect x="546" y="580" width="152" height="15" rx="7" fill="#C6A886"/>
              <g stroke="#C6A886" stroke-width="6" stroke-linecap="round">
                <line x1="562" y1="595" x2="566" y2="666"/><line x1="592" y1="595" x2="594" y2="666"/>
                <line x1="622" y1="595" x2="622" y2="666"/><line x1="652" y1="595" x2="650" y2="666"/>
                <line x1="682" y1="595" x2="678" y2="666"/>
              </g>
              <rect x="542" y="660" width="160" height="22" rx="9" fill="#C6A886"/>
              <g stroke="#B08A63" stroke-width="9" stroke-linecap="round"><line x1="560" y1="682" x2="540" y2="772"/><line x1="686" y1="682" x2="706" y2="772"/></g>
            </g>

            <!-- 丸い木のテーブル。木目の出たライトオークで、
                 同じ椅子は一脚もない -->
            <g>
              <ellipse cx="326" cy="800" rx="210" ry="26" fill="#2B2620" opacity=".2" filter="url(#wc-hbl)"/>
              <g stroke="#8F6743" stroke-width="15" stroke-linecap="round">
                <line x1="212" y1="740" x2="176" y2="836"/><line x1="440" y1="740" x2="476" y2="836"/><line x1="326" y1="752" x2="326" y2="848"/>
              </g>
              <ellipse cx="326" cy="730" rx="198" ry="56" fill="#A9895E"/>
              <ellipse cx="326" cy="716" rx="198" ry="56" fill="url(#wc-htbl)"/>
              <g fill="none" stroke="#B4956A" stroke-width="2.5" opacity=".6">
                <ellipse cx="318" cy="714" rx="150" ry="40"/><ellipse cx="312" cy="712" rx="98" ry="25"/><ellipse cx="308" cy="710" rx="48" ry="11"/>
              </g>
              <!-- 読みかけと、コーヒーと、摘んできた枝。手前の椅子の
                   背が横切らない、天板の奥半分にまとめてある -->
              <rect x="284" y="684" width="78" height="24" rx="3" fill="#F2EFE8"/>
              <rect x="284" y="684" width="78" height="7" rx="3" fill="#C6D6E4"/>
              <g><rect x="380" y="680" width="34" height="32" rx="4" fill="#FBFAF6"/><path d="M414 688 q16 8 0 16" fill="none" stroke="#FBFAF6" stroke-width="6"/></g>
              <g>
                <rect x="438" y="678" width="30" height="38" rx="4" fill="#DEE8F1"/>
                <g fill="none" stroke="#74994A" stroke-width="4" stroke-linecap="round"><path d="M449 678 q-7-26 3-42"/><path d="M456 678 q10-20 24-28"/></g>
                <g fill="#B0CC80" opacity=".85"><circle cx="450" cy="640" r="6"/><circle cx="478" cy="652" r="5"/></g>
              </g>
            </g>

            <!-- 2. 黒いワイヤー脚に白いクッション。背から肘までは一本の
                 曲げ木。天板を横切るので、他の木より一段濃い色でとる -->
            <g>
              <path d="M106 768 L106 722 q90-48 180 0 L286 768" fill="none" stroke="#8F6743" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="100" y="752" width="192" height="54" rx="15" fill="#F4F1E8"/>
              <rect x="100" y="784" width="192" height="24" rx="12" fill="#E1DDD1"/>
              <g stroke="#2B2620" stroke-width="7" stroke-linecap="round" fill="none">
                <path d="M120 808 L94 906"/><path d="M272 808 L298 906"/>
                <path d="M120 808 L298 906"/><path d="M272 808 L94 906"/>
                <path d="M104 858 L288 858"/>
              </g>
            </g>

            <!-- 3. クリームの張り椅子。脚は木 -->
            <g>
              <path d="M366 754 q76-34 152 0 l6 58 q-84-26 -164 0z" fill="#EFE9DA"/>
              <rect x="352" y="804" width="182" height="50" rx="14" fill="#E6DFCD"/>
              <g stroke="#B08A63" stroke-width="11" stroke-linecap="round"><line x1="372" y1="854" x2="352" y2="944"/><line x1="514" y1="854" x2="534" y2="944"/></g>
            </g>

            <!-- 右手前、ダークティールのベンチソファ -->
            <g>
              <rect x="596" y="778" width="228" height="56" rx="16" fill="#1B3A57"/>
              <rect x="588" y="826" width="244" height="72" rx="18" fill="#2C5779"/>
              <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".85"><line x1="600" y1="840" x2="820" y2="840"/></g>
              <rect x="588" y="888" width="244" height="26" rx="10" fill="#16334D"/>
              <g fill="#6B4A32"><rect x="610" y="912" width="16" height="48" rx="4"/><rect x="792" y="912" width="16" height="48" rx="4"/></g>
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
            <linearGradient id="wc-r1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E6E1D5"/></linearGradient>
            <!-- HERO / LIVING と同じ白茶けた床。unico の部屋は3室で
                 いちばんナチュラルな面なので、ここも同じ材でそろえる -->
            <linearGradient id="wc-r1f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DFC8"/><stop offset="1" stop-color="#C7B693"/></linearGradient>
            <filter id="wc-b1"><feGaussianBlur stdDeviation="20"/></filter>
          </defs>
          <rect width="1000" height="700" fill="url(#wc-r1w)"/>
          <rect x="620" y="60" width="330" height="360" fill="#EFF5F8"/>
          <rect x="620" y="60" width="330" height="360" fill="none" stroke="#6B4A32" stroke-width="15"/>
          <line x1="785" y1="60" x2="785" y2="420" stroke="#6B4A32" stroke-width="8"/>
          <g fill="#74994A" opacity=".8"><ellipse cx="700" cy="160" rx="66" ry="48"/><ellipse cx="880" cy="320" rx="70" ry="50"/></g>
          <g fill="#B0CC80" opacity=".85"><ellipse cx="682" cy="138" rx="34" ry="21"/><ellipse cx="864" cy="300" rx="34" ry="21"/></g>
          <!-- 壁に回り込む光 -->
          <path d="M620 420 L950 420 L1000 500 L560 500 Z" fill="#FFE9B8" opacity=".4" filter="url(#wc-b1)"/>

          <!-- 床 ------------------------------------------------------------
               光は「白を足す」のでは出ない。白茶けた床に白を重ねても差が
               出ないので、(1) 日の当たらない床を一段落とす (2) 光だまりは
               白ではなく金色にする (3) 窓の桟の影を横切らせる、の3手で
               コントラストを作る。床は明るいまま、光だけが強くなる。 -->
          <rect y="500" width="1000" height="200" fill="url(#wc-r1f)"/>
          <g stroke="#A8977A" stroke-width="2" opacity=".55"><line x1="0" y1="548" x2="1000" y2="548"/><line x1="0" y1="606" x2="1000" y2="606"/><line x1="320" y1="500" x2="288" y2="700"/><line x1="720" y1="500" x2="760" y2="700"/></g>
          <!-- (1) 日陰 -->
          <rect y="500" width="1000" height="200" fill="#6B4A32" opacity=".2"/>
          <!-- (2) 窓の開口が落ちる光だまり -->
          <path d="M627 500 L942 500 L860 700 L455 700 Z" fill="#FFE0A2" opacity=".62"/>
          <path d="M664 500 L906 500 L826 700 L520 700 Z" fill="#FFF1CE" opacity=".55"/>
          <!-- (3) 縦桟の影 -->
          <path d="M781 500 L789 500 L663 700 L653 700 Z" fill="#7A5A38" opacity=".34"/>
          <!-- 床際の照り返し -->
          <ellipse cx="784" cy="504" rx="190" ry="34" fill="#FFE9B8" opacity=".55" filter="url(#wc-b1)"/>
          <!-- 板目に沿った照り -->
          <g fill="#FFFDF4" opacity=".4"><path d="M700 512 L742 512 L636 690 L600 690 Z"/></g>
          <rect y="500" width="1000" height="8" fill="#6B4A32" opacity=".5"/>
          <!-- ベッド -->
          <g>
            <rect x="70" y="250" width="440" height="104" rx="8" fill="#B08A63"/>
            <g stroke="#8F6743" stroke-width="3" opacity=".7"><line x1="158" y1="250" x2="158" y2="354"/><line x1="246" y1="250" x2="246" y2="354"/><line x1="334" y1="250" x2="334" y2="354"/><line x1="422" y1="250" x2="422" y2="354"/></g>
            <rect x="70" y="354" width="440" height="26" rx="6" fill="#8F6743"/>
            <rect x="70" y="380" width="440" height="96" rx="8" fill="#F7F5EF"/>
            <rect x="70" y="450" width="440" height="44" rx="6" fill="#C6D6E4"/>
            <g stroke="#C8783A" stroke-width="2" stroke-dasharray="7 6" opacity=".8"><line x1="76" y1="458" x2="504" y2="458"/></g>
            <rect x="102" y="342" width="122" height="46" rx="10" fill="#FBFAF6"/>
            <rect x="238" y="342" width="122" height="46" rx="10" fill="#FBFAF6"/>
            <rect x="86" y="494" width="14" height="34" fill="#4A3222"/><rect x="480" y="494" width="14" height="34" fill="#4A3222"/>
          </g>
          <!-- ペンダント -->
          <g><line x1="570" y1="0" x2="570" y2="150" stroke="#2B2620" stroke-width="3"/>
            <path d="M528 150h84l-16 46h-52z" fill="#6B4A32"/><circle cx="570" cy="206" r="10" fill="#F0D9A8"/>
            <circle cx="570" cy="206" r="40" fill="#F0D9A8" opacity=".3" filter="url(#wc-b1)"/></g>
          <!-- デスクと植物 -->
          <g><rect x="560" y="452" width="180" height="12" fill="#8F6743"/><rect x="572" y="464" width="10" height="52" fill="#4A3222"/><rect x="718" y="464" width="10" height="52" fill="#4A3222"/></g>
          <g><rect x="900" y="470" width="62" height="72" rx="5" fill="#8F6743"/>
            <g fill="#4C6E31"><ellipse cx="932" cy="428" rx="56" ry="42"/><ellipse cx="898" cy="454" rx="32" ry="24"/></g></g>
          <ellipse cx="290" cy="560" rx="270" ry="28" fill="#2B2620" opacity=".14" filter="url(#wc-b1)"/>
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
