/* TOPページのイラスト。SVG id は `fig-` 接頭辞（flora.ts と共有の名前空間）。
   generic な id（#sky, #wall, #glow, #soft）はページ内の他の SVG と衝突するので、
   接頭辞は外さないこと。

   raw string のまま dangerouslySetInnerHTML で注入している：静的な手書きマークアップ
   であり、数百の SVG 属性を手で JSX のキャメルケースへ直しても転記ミスが増えるだけ。

   **このファイルが正**。もとはモックHTMLから生成していたが、モックと生成スクリプトは
   ~/workbench/design-mock-library/washed-chambray/ へ退避した。ROOM1_MORNING のように
   手で足したものがあるので、あのスクリプトを本番へ向けて実行してはいけない。 */

export const HERO = String.raw`
<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="fig-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#EDF2F7"/><stop offset=".55" stop-color="#DCE7F0"/><stop offset="1" stop-color="#C6D6E4"/>
              </linearGradient>
              <linearGradient id="fig-wd" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#AC5F27"/><stop offset=".4" stop-color="#E0A063"/>
                <stop offset=".75" stop-color="#CC8043"/><stop offset="1" stop-color="#8C481E"/>
              </linearGradient>
              <linearGradient id="fig-shoji" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#FBFAF6"/><stop offset="1" stop-color="#E8E9E2"/>
              </linearGradient>
              <filter id="fig-bl"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>

            <rect width="800" height="1000" fill="url(#fig-sky)"/>
            <!-- 霞んだ新宿のビル -->
            <g fill="#A6BED4" opacity=".55">
              <rect x="20" y="150" width="70" height="300"/><rect x="104" y="210" width="46" height="240"/>
              <rect x="470" y="120" width="92" height="330"/><rect x="576" y="196" width="54" height="254"/>
              <rect x="646" y="150" width="120" height="300"/>
            </g>
            <g fill="#C6D6E4" opacity=".7"><rect x="160" y="250" width="56" height="200"/><rect x="410" y="270" width="42" height="180"/></g>

            <!-- 御苑の樹 -->
            <g fill="#33553F" opacity=".92">
              <ellipse cx="120" cy="420" rx="150" ry="104"/><ellipse cx="330" cy="392" rx="128" ry="92"/>
              <ellipse cx="600" cy="410" rx="146" ry="96"/>
            </g>
            <g fill="#7FA07F" opacity=".5"><ellipse cx="96" cy="372" rx="66" ry="44"/><ellipse cx="336" cy="348" rx="54" ry="36"/><ellipse cx="620" cy="366" rx="60" ry="38"/></g>
            <rect y="470" width="800" height="60" fill="#1F3A2E" opacity=".85"/>

            <!-- 縁側の床（木） -->
            <rect y="530" width="800" height="470" fill="url(#fig-wd)"/>
            <g stroke="#3E2A1C" stroke-width="2" opacity=".5">
              <line x1="0" y1="596" x2="800" y2="596"/><line x1="0" y1="672" x2="800" y2="672"/>
              <line x1="0" y1="762" x2="800" y2="762"/><line x1="0" y1="868" x2="800" y2="868"/>
            </g>
            <!-- 朝日の帯 -->
            <path d="M120 530 L420 530 L620 1000 L200 1000 Z" fill="#FFF6E2" opacity=".42" filter="url(#fig-bl)"/>

            <!-- 障子 -->
            <g>
              <rect x="430" y="120" width="330" height="410" fill="url(#fig-shoji)"/>
              <g stroke="#6B4A32" stroke-width="7" opacity=".9">
                <line x1="540" y1="120" x2="540" y2="530"/><line x1="650" y1="120" x2="650" y2="530"/>
                <line x1="430" y1="258" x2="760" y2="258"/><line x1="430" y1="396" x2="760" y2="396"/>
              </g>
              <rect x="430" y="120" width="330" height="410" fill="none" stroke="#4A3222" stroke-width="14"/>
              <g fill="#33553F" opacity=".18"><ellipse cx="500" cy="200" rx="42" ry="30"/><ellipse cx="700" cy="440" rx="48" ry="32"/></g>
            </g>

            <!-- 木の柱 -->
            <rect x="356" y="60" width="42" height="470" fill="#4A3222"/>
            <rect x="366" y="60" width="10" height="470" fill="#A0774F" opacity=".4"/>
            <rect x="0" y="60" width="800" height="34" fill="#4A3222"/>

            <!-- のれん（藍） -->
            <g>
              <rect x="60" y="94" width="270" height="12" fill="#3E2A1C"/>
              <path d="M64 106h82v168H64z" fill="#1B3A57"/>
              <path d="M150 106h82v186h-82z" fill="#16334D"/>
              <path d="M236 106h82v172h-82z" fill="#1B3A57"/>
              <g fill="#DEE8F1" opacity=".92">
                <rect x="84" y="160" width="42" height="7"/><rect x="84" y="178" width="42" height="7"/>
                <rect x="172" y="160" width="34" height="7"/><rect x="172" y="178" width="18" height="7"/>
                <rect x="256" y="160" width="42" height="7"/>
              </g>
            </g>

            <!-- 物干し：シャンブレーのシャツ -->
            <g>
              <line x1="398" y1="150" x2="800" y2="168" stroke="#2B2620" stroke-width="3"/>
              <g transform="translate(560 168) rotate(2)">
                <path d="M0 0 L64 0 L84 26 L70 40 L64 30 L64 128 L0 128 L0 30 L-6 40 L-20 26 Z" fill="#C6D6E4"/>
                <path d="M0 0 L64 0 L84 26 L70 40 L64 30 L64 128 L0 128 L0 30 L-6 40 L-20 26 Z" fill="none" stroke="#8FA9BF" stroke-width="2"/>
                <line x1="32" y1="4" x2="32" y2="128" stroke="#A6BED4" stroke-width="2"/>
                <g stroke="#C8783A" stroke-width="1.6" stroke-dasharray="5 5" opacity=".8">
                  <line x1="6" y1="12" x2="6" y2="124"/><line x1="58" y1="12" x2="58" y2="124"/>
                </g>
              </g>
              <rect x="556" y="160" width="8" height="16" rx="3" fill="#2B2620"/>
              <rect x="628" y="164" width="8" height="16" rx="3" fill="#2B2620"/>
            </g>

            <!-- 鉢と草履 -->
            <g>
              <rect x="96" y="640" width="86" height="92" rx="6" fill="#8F6743"/>
              <g fill="#1F3A2E"><ellipse cx="140" cy="580" rx="74" ry="56"/><ellipse cx="94" cy="616" rx="44" ry="32"/><ellipse cx="188" cy="610" rx="40" ry="28"/></g>
              <g fill="#33553F" opacity=".8"><ellipse cx="124" cy="556" rx="34" ry="24"/></g>
            </g>
            <g fill="#2B2620" opacity=".8">
              <rect x="300" y="800" width="72" height="34" rx="17"/><rect x="392" y="812" width="72" height="34" rx="17"/>
            </g>
            <ellipse cx="360" cy="850" rx="180" ry="26" fill="#2B2620" opacity=".16" filter="url(#fig-bl)"/>
          </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 800 960" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="fig-wl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F4EE"/><stop offset="1" stop-color="#E4E0D6"/></linearGradient>
                <!-- 床は白茶けた無垢材。家具はすべて濃い木でとるので、
                     天板と床がひと続きに見えていた問題が解ける -->
                <linearGradient id="fig-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DFC8"/><stop offset="1" stop-color="#C7B693"/></linearGradient>
                <linearGradient id="fig-ch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DEE8F1"/><stop offset="1" stop-color="#A6BED4"/></linearGradient>
                <filter id="fig-bl2"><feGaussianBlur stdDeviation="24"/></filter>
              </defs>
              <rect width="800" height="960" fill="url(#fig-wl)"/>
              <!-- 窓 -->
              <rect x="70" y="70" width="380" height="440" fill="#EFF5F8"/>
              <g stroke="#6B4A32" stroke-width="8"><line x1="260" y1="70" x2="260" y2="510"/><line x1="70" y1="290" x2="450" y2="290"/></g>
              <rect x="70" y="70" width="380" height="440" fill="none" stroke="#6B4A32" stroke-width="15"/>
              <!-- 窓の外の緑。塊は中間の緑で置き、明るい黄緑は差し色に回す -->
              <g fill="#74994A" opacity=".8"><ellipse cx="150" cy="190" rx="76" ry="54"/><ellipse cx="360" cy="164" rx="62" ry="46"/><ellipse cx="380" cy="420" rx="70" ry="50"/></g>
              <g fill="#4C6E31" opacity=".5"><ellipse cx="190" cy="230" rx="52" ry="36"/></g>
              <g fill="#B0CC80" opacity=".85"><ellipse cx="128" cy="164" rx="38" ry="24"/><ellipse cx="346" cy="146" rx="30" ry="19"/><ellipse cx="364" cy="400" rx="34" ry="21"/></g>
              <!-- 壁に回り込む光 -->
              <path d="M77 510 L443 510 L591 680 L164 680 Z" fill="#FFE9B8" opacity=".38" filter="url(#fig-bl2)"/>
              <!-- 床 -->
              <rect y="680" width="800" height="280" fill="url(#fig-fl)"/>
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
              <ellipse cx="378" cy="686" rx="215" ry="34" fill="#FFE9B8" opacity=".5" filter="url(#fig-bl2)"/>
              <g fill="#FFFDF4" opacity=".38"><path d="M300 690 L338 690 L505 950 L462 950 Z"/></g>
              <!-- 壁と床の見切り -->
              <rect y="680" width="800" height="9" fill="#6B4A32" opacity=".55"/>
              <!-- シャンブレーのソファ -->
              <g>
                <rect x="120" y="540" width="480" height="150" rx="14" fill="url(#fig-ch)"/>
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
                <ellipse cx="390" cy="884" rx="160" ry="18" fill="#2B2620" opacity=".22" filter="url(#fig-bl2)"/>
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
                <ellipse cx="694" cy="846" rx="76" ry="13" fill="#2B2620" opacity=".2" filter="url(#fig-bl2)"/>
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
            <linearGradient id="fig-r1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E9E3D6"/></linearGradient>
            <!-- 掃き出し窓。朝いちばんの逆光なので、上は白く抜いて
                 下にいくほど暖色に寄せる。光源そのものを画にする -->
            <linearGradient id="fig-r1gl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#F4F8FA"/><stop offset=".5" stop-color="#FBF3E2"/><stop offset="1" stop-color="#FFEDC8"/>
            </linearGradient>
            <!-- 縦に連なる帯のシアー。杉綾の織り柄は細い糸目で示す -->
            <pattern id="fig-r1cur" width="38" height="26" patternUnits="userSpaceOnUse">
              <rect width="38" height="26" fill="#DCE7EE" opacity=".4"/>
              <rect x="2" width="30" height="26" fill="#C3D2DC" opacity=".46"/>
              <path d="M2 26 L10 13 L18 26 M18 26 L26 13 L34 26" fill="none" stroke="#8FA9BF" stroke-width="1.4" opacity=".4"/>
              <rect x="33" width="4" height="26" fill="#5E7382" opacity=".42"/>
            </pattern>
            <!-- 床は木ではなく、目の詰まった濃いグレーのループカーペット。
                 この部屋でいちばん暗い面なので、光はここでいちばん効く -->
            <pattern id="fig-r1cp" width="12" height="8" patternUnits="userSpaceOnUse">
              <rect width="12" height="8" fill="#3D3833"/>
              <rect width="6" height="4" fill="#4C463F"/><rect x="6" y="4" width="6" height="4" fill="#4C463F"/>
              <rect y="7" width="12" height="1" fill="#2B2620"/>
            </pattern>
            <!-- 白地に細いストライプの寝具 -->
            <pattern id="fig-r1bd" width="13" height="8" patternUnits="userSpaceOnUse">
              <rect width="13" height="8" fill="#FAF8F3"/>
              <rect width="4" height="8" fill="#F4F1E9"/>
            </pattern>
            <filter id="fig-b1"><feGaussianBlur stdDeviation="22"/></filter>
          </defs>

          <!-- 天井と壁 -->
          <rect width="1000" height="700" fill="url(#fig-r1w)"/>
          <rect width="1000" height="96" fill="#FCFAF5"/>
          <rect y="93" width="1000" height="4" fill="#E0DACC"/>
          <!-- 丸型のシーリングライト。slice で上が切られるので
               モバイル幅（y 37 から）に収まる高さに置く -->
          <ellipse cx="392" cy="68" rx="132" ry="50" fill="#FFF1CE" opacity=".4" filter="url(#fig-b1)"/>
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
            <rect x="212" y="140" width="648" height="400" fill="url(#fig-r1gl)"/>
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
            <rect x="212" y="162" width="648" height="378" fill="url(#fig-r1cur)"/>
            <!-- カーテンレールのヘッダー -->
            <rect x="212" y="140" width="648" height="26" fill="#2F3E48"/>
            <rect x="212" y="140" width="648" height="7" fill="#4A5D6B" opacity=".85"/>
            <rect x="212" y="140" width="648" height="400" fill="none" stroke="#59686F" stroke-width="4"/>
          </g>

          <!-- カーペット -->
          <rect y="540" width="1000" height="160" fill="url(#fig-r1cp)"/>
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
          <ellipse cx="536" cy="548" rx="380" ry="36" fill="#FFE9B8" opacity=".42" filter="url(#fig-b1)"/>

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
            <path d="M52 434 L268 434 L256 700 L14 700 Z" fill="url(#fig-r1bd)"/>
            <path d="M52 434 L268 434 L266 466 L50 466 Z" fill="#FFFFFF" opacity=".55"/>
            <!-- 掛け布団のたるみ。縦のストライプと別の線で厚みを出す -->
            <g fill="none" stroke="#EBE6DA" stroke-width="4" opacity=".9">
              <path d="M104 470 L92 700"/><path d="M214 470 L222 700"/>
            </g>
            <path d="M14 700 L18 636 L260 636 L256 700 Z" fill="#E4DFD2" opacity=".45"/>
            <path d="M52 434 L268 434 L256 700 L14 700 Z" fill="none" stroke="#D8D2C4" stroke-width="2.5"/>
          </g>

          <!-- ベッドの間に落ちる影。2台が別々のベッドに見える手当て -->
          <path d="M268 436 L302 436 L280 700 L250 700 Z" fill="#241F1A" opacity=".35" filter="url(#fig-b1)"/>

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
            <path d="M302 450 L734 450 L768 700 L274 700 Z" fill="url(#fig-r1bd)"/>
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

export const ROOM1_MORNING = String.raw`
<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="fig-hwall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E6E1D5"/>
              </linearGradient>
              <!-- ベッドの背は掃き出し窓。朝いちばんの逆光なので上は白く
                   抜いて、下にいくほど暖色に寄せる（ROOM 01 と同じ作り） -->
              <linearGradient id="fig-hgl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#F4F8FA"/><stop offset=".5" stop-color="#FBF3E2"/><stop offset="1" stop-color="#FFEDC8"/>
              </linearGradient>
              <!-- 縦に連なる帯のシアー。写真と同じく、濃い色のヘッダー
                   レールから吊った縦型で、帯の合わせ目だけ濃く残す -->
              <pattern id="fig-hcur" width="34" height="24" patternUnits="userSpaceOnUse">
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
              <pattern id="fig-hcp" width="12" height="8" patternUnits="userSpaceOnUse">
                <rect width="12" height="8" fill="#514A42"/>
                <rect width="6" height="4" fill="#5E574E"/><rect x="6" y="4" width="6" height="4" fill="#5E574E"/>
                <rect y="7" width="12" height="1" fill="#3D372F"/>
              </pattern>
              <!-- 白地に細いストライプの寝具（ROOM 01 と同じ生地） -->
              <pattern id="fig-hbd" width="13" height="8" patternUnits="userSpaceOnUse">
                <rect width="13" height="8" fill="#FAF8F3"/>
                <rect width="4" height="8" fill="#EFEBE1"/>
              </pattern>
              <!-- ダイニング側だけがライトオークの無垢材。上に置く家具は
                   すべて濃い木でとる。床と天板が同系色で溶ける問題の解 -->
              <linearGradient id="fig-hfl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#C9B896"/><stop offset=".4" stop-color="#E7DDC5"/>
                <stop offset=".75" stop-color="#D9CCAD"/><stop offset="1" stop-color="#C2B08E"/>
              </linearGradient>
              <linearGradient id="fig-htbl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#D9C098"/><stop offset=".55" stop-color="#C2A377"/><stop offset="1" stop-color="#A9895E"/>
              </linearGradient>
              <filter id="fig-hbl"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>

            <!-- 天井と白い壁 -->
            <rect width="800" height="1000" fill="url(#fig-hwall)"/>
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
              <rect x="124" y="150" width="648" height="290" fill="url(#fig-hgl)"/>
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
              <rect x="124" y="174" width="648" height="266" fill="url(#fig-hcur)"/>
              <!-- 開口ぜんぶを光源として持ち上げる -->
              <rect x="124" y="174" width="648" height="266" fill="#FFF6DF" opacity=".16"/>
              <!-- カーテンレールのヘッダー -->
              <rect x="124" y="150" width="648" height="24" fill="#2F3E48"/>
              <rect x="124" y="150" width="648" height="7" fill="#4A5D6B" opacity=".85"/>
              <rect x="124" y="150" width="648" height="290" fill="none" stroke="#59686F" stroke-width="4"/>
              <!-- 窓まわりのにじみ -->
              <rect x="112" y="138" width="672" height="314" fill="#FFF1CE" opacity=".22" filter="url(#fig-hbl)"/>
            </g>

            <!-- ベッドエリアの床。カーペットは継ぎ目なしの一枚で通し、
                 杉綾のラグは敷かない -->
            <rect y="440" width="800" height="208" fill="url(#fig-hcp)"/>
            <rect y="440" width="800" height="6" fill="#241F1A" opacity=".5"/>

            <!-- ダイニング側のライトオーク -->
            <rect y="648" width="800" height="352" fill="url(#fig-hfl)"/>
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
            <ellipse cx="440" cy="450" rx="320" ry="26" fill="#FFE9B8" opacity=".38" filter="url(#fig-hbl)"/>

            <!-- 奥のベッド。柱の向こうに続く、シングル寄りの細いほう -->
            <g>
              <!-- 足もとの落ち影。カーペットに置いてあることを先に描く -->
              <ellipse cx="132" cy="524" rx="150" ry="20" fill="#1C1813" opacity=".3" filter="url(#fig-hbl)"/>
              <rect x="34" y="312" width="206" height="56" rx="5" fill="#C6A886"/>
              <g stroke="#B08A63" stroke-width="3" opacity=".6"><line x1="86" y1="312" x2="86" y2="368"/><line x1="138" y1="312" x2="138" y2="368"/><line x1="190" y1="312" x2="190" y2="368"/></g>
              <rect x="34" y="312" width="206" height="5" rx="3" fill="#FFE9B8" opacity=".7"/>
              <rect x="52" y="338" width="116" height="38" rx="10" fill="#FBFAF6"/>
              <path d="M32 368 L242 368 L262 520 L6 520 Z" fill="url(#fig-hbd)"/>
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
              <ellipse cx="530" cy="552" rx="250" ry="22" fill="#1C1813" opacity=".3" filter="url(#fig-hbl)"/>
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
              <path d="M332 364 L722 364 L760 548 L296 548 Z" fill="url(#fig-hbd)"/>
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
              <ellipse cx="300" cy="808" rx="212" ry="26" fill="#2B2620" opacity=".18" filter="url(#fig-hbl)"/>
              <g stroke="#8F6743" stroke-width="14" stroke-linecap="round">
                <line x1="192" y1="768" x2="158" y2="856"/><line x1="410" y1="768" x2="444" y2="856"/><line x1="300" y1="778" x2="300" y2="866"/>
              </g>
              <ellipse cx="300" cy="754" rx="202" ry="52" fill="#A9895E"/>
              <ellipse cx="300" cy="744" rx="202" ry="52" fill="url(#fig-htbl)"/>
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

export const ROOM2 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="fig-r2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F3EC"/><stop offset="1" stop-color="#E7E1D4"/></linearGradient>
            <!-- バルコニーの掃き出し窓。ROOM 01 のような朝の逆光ではなく、
                 日中のやわらかい外光。上は白く抜いて、下だけ床の色を拾う -->
            <linearGradient id="fig-r2gl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#F1F6F9"/><stop offset=".55" stop-color="#EBF0F0"/><stop offset="1" stop-color="#F6F0E1"/>
            </linearGradient>
            <!-- 打ち放しのコンクリート。梁・柱・窓わきの壁を同じ地で通す。
                 この部屋の Urban Vintage はここが持っている -->
            <pattern id="fig-r2cc" width="132" height="72" patternUnits="userSpaceOnUse">
              <rect width="132" height="72" fill="#B7B2A8"/>
              <rect width="132" height="36" fill="#BCB7AD"/>
              <rect y="34" width="132" height="2" fill="#ACA79D" opacity=".6"/>
              <rect y="70" width="132" height="2" fill="#A6A197" opacity=".7"/>
              <g fill="#9E9990" opacity=".4"><circle cx="30" cy="52" r="3"/><circle cx="100" cy="16" r="3"/></g>
            </pattern>
            <!-- 床は木ではなくタイルカーペット。杢の入った、この部屋で
                 いちばん暗い面 -->
            <pattern id="fig-r2cp" width="12" height="8" patternUnits="userSpaceOnUse">
              <rect width="12" height="8" fill="#4E463D"/>
              <rect width="6" height="4" fill="#5C544A"/><rect x="6" y="4" width="6" height="4" fill="#5C544A"/>
              <rect y="7" width="12" height="1" fill="#39332C"/>
            </pattern>
            <!-- 白地に細いストライプの寝具（ROOM 01 と同じ生地） -->
            <pattern id="fig-r2bd" width="13" height="8" patternUnits="userSpaceOnUse">
              <rect width="13" height="8" fill="#FAF8F3"/>
              <rect width="4" height="8" fill="#F0ECE2"/>
            </pattern>
            <!-- 緑のスローの下に重ねた、生成りのワッフルブランケット -->
            <pattern id="fig-r2wf" width="11" height="11" patternUnits="userSpaceOnUse">
              <rect width="11" height="11" fill="#EFE9DA"/>
              <path d="M0 10H11M10 0V11" stroke="#DCD3C0" stroke-width="1.5"/>
            </pattern>
            <linearGradient id="fig-r2tb" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#D6BB93"/><stop offset=".55" stop-color="#C2A377"/><stop offset="1" stop-color="#AC8C61"/>
            </linearGradient>
            <filter id="fig-b2"><feGaussianBlur stdDeviation="20"/></filter>
          </defs>

          <!-- 天井と壁 -->
          <rect width="1000" height="700" fill="url(#fig-r2w)"/>
          <rect width="1000" height="58" fill="#FBF8F1"/>

          <!-- 現しの梁。画面をまるごと横切る。天井から下がっているので、
               モバイルで上が切られても帯として残る高さに置く -->
          <g>
            <path d="M0 34 L1000 62 L1000 142 L0 126 Z" fill="url(#fig-r2cc)"/>
            <path d="M0 34 L1000 62 L1000 76 L0 50 Z" fill="#C8C3B9"/>
            <path d="M0 126 L1000 142 L1000 152 L0 137 Z" fill="#8E8980" opacity=".55"/>
          </g>
          <!-- 梁の向こう、一段下がったダイニング側の天井 -->
          <path d="M462 150 L1000 164 L1000 198 L462 186 Z" fill="#F4F0E7"/>
          <path d="M462 186 L1000 198 L1000 203 L462 191 Z" fill="#DCD5C6" opacity=".8"/>

          <!-- バルコニーの掃き出し窓。ROOM 01 と違って、この部屋は
               カーテンを引いていない。外光がそのまま入る -->
          <g>
            <rect x="786" y="196" width="214" height="256" fill="url(#fig-r2gl)"/>
            <!-- 向かいの建物。輪郭とベランダの開口だけ残す -->
            <g fill="#B6C6D4" opacity=".45">
              <rect x="800" y="222" width="72" height="230"/><rect x="884" y="250" width="58" height="202"/><rect x="954" y="232" width="46" height="220"/>
            </g>
            <g fill="#FFFFFF" opacity=".5">
              <rect x="812" y="244" width="20" height="26"/><rect x="844" y="244" width="20" height="26"/>
              <rect x="812" y="296" width="20" height="26"/><rect x="898" y="278" width="18" height="24"/><rect x="898" y="326" width="18" height="24"/>
            </g>
            <!-- バルコニーの手すり。右端だけ古い鋳物の飾りが入る -->
            <g fill="#8E8778" opacity=".5"><rect x="786" y="368" width="214" height="9"/><rect x="786" y="404" width="214" height="9"/></g>
            <g stroke="#8E8778" stroke-width="4" opacity=".38"><line x1="812" y1="368" x2="812" y2="452"/><line x1="848" y1="368" x2="848" y2="452"/><line x1="920" y1="368" x2="920" y2="452"/><line x1="956" y1="368" x2="956" y2="452"/></g>
            <g fill="none" stroke="#6F6A60" stroke-width="3.5" opacity=".5"><path d="M956 450 q0-40 21-40 q21 0 21 40"/><path d="M967 450 q0-25 10-25 q10 0 10 25"/></g>
            <!-- アルミの框。白い枠と、真ん中の召し合わせ -->
            <rect x="884" y="196" width="12" height="256" fill="#F2EEE4"/>
            <rect x="884" y="196" width="4" height="256" fill="#D5CFC1"/>
            <rect x="786" y="196" width="214" height="256" fill="none" stroke="#F2EEE4" stroke-width="14"/>
            <rect x="786" y="196" width="214" height="256" fill="none" stroke="#C9C3B5" stroke-width="3"/>
            <rect x="786" y="440" width="214" height="14" fill="#E6E1D5"/>
          </g>

          <!-- 窓わきの、コンクリート現しの壁 -->
          <g>
            <rect x="704" y="190" width="82" height="262" fill="url(#fig-r2cc)"/>
            <rect x="704" y="190" width="9" height="262" fill="#C6C1B7" opacity=".8"/>
            <g fill="#948F86" opacity=".55"><circle cx="730" cy="252" r="3.4"/><circle cx="762" cy="316" r="3.4"/><circle cx="730" cy="380" r="3.4"/></g>
          </g>

          <!-- 木の扉。白い枠のなかにライトオークの框戸 -->
          <g>
            <rect x="584" y="186" width="122" height="266" fill="#F1EDE3"/>
            <rect x="584" y="186" width="122" height="266" fill="none" stroke="#DDD6C6" stroke-width="3"/>
            <rect x="592" y="194" width="106" height="258" fill="#C6A886"/>
            <rect x="592" y="194" width="106" height="6" fill="#DCC4A2"/>
            <g stroke="#B08A63" stroke-width="2.5" opacity=".5"><line x1="620" y1="200" x2="620" y2="452"/><line x1="650" y1="200" x2="650" y2="452"/><line x1="676" y1="200" x2="676" y2="452"/></g>
            <g><circle cx="683" cy="322" r="6" fill="#A39D93"/><rect x="664" y="319" width="22" height="6" rx="3" fill="#8E8980"/></g>
          </g>

          <!-- 部屋の真ん中に立つ柱。打ち放しではなく白い塗り壁で、
               ここでベッド側とダイニング側が分かれる -->
          <g>
            <rect x="494" y="138" width="88" height="330" fill="#E7E2DC"/>
            <rect x="494" y="138" width="19" height="330" fill="#D3CDC4" opacity=".9"/>
            <rect x="513" y="138" width="8" height="330" fill="#DDD8D1"/>
            <rect x="568" y="138" width="14" height="330" fill="#F3F1EC"/>
            <rect x="580" y="138" width="6" height="330" fill="#C9C3BA" opacity=".55"/>
          </g>

          <!-- タイルカーペットの床 -->
          <rect y="452" width="1000" height="248" fill="url(#fig-r2cp)"/>
          <rect y="452" width="1000" height="7" fill="#2C2721" opacity=".6"/>
          <g stroke="#3B352D" stroke-width="2" opacity=".45">
            <line x1="0" y1="528" x2="1000" y2="528"/><line x1="0" y1="614" x2="1000" y2="614"/>
            <line x1="640" y1="452" x2="354" y2="700"/><line x1="822" y1="452" x2="1000" y2="529"/>
          </g>
          <ellipse cx="538" cy="468" rx="62" ry="12" fill="#241F1A" opacity=".35" filter="url(#fig-b2)"/>

          <!-- 窓からの光。カーペットが部屋でいちばん暗い面なので、
               光条は床の上でいちばん効く -->
          <g>
            <path d="M790 206 L1000 206 L884 700 L472 700 Z" fill="#FFF4DE" opacity=".13"/>
            <path d="M802 210 L898 210 L690 700 L494 700 Z" fill="#FFFCF2" opacity=".1"/>
            <path d="M934 208 L1000 208 L1000 700 L836 700 Z" fill="#FFFCF2" opacity=".09"/>
          </g>
          <ellipse cx="884" cy="470" rx="210" ry="26" fill="#FFF1CE" opacity=".4" filter="url(#fig-b2)"/>

          <!-- ダイニングの上に一灯だけ下がる、白いホーローのペンダント -->
          <g>
            <line x1="748" y1="190" x2="748" y2="262" stroke="#2B2620" stroke-width="3"/>
            <path d="M748 256 L802 304 q-54 16 -108 0 Z" fill="#FBFAF6"/>
            <path d="M748 256 L778 283 q-30 8 -60 0 Z" fill="#FFFFFF" opacity=".6"/>
            <path d="M694 304 q54 16 108 0 q-54 10 -108 0 Z" fill="#DCD5C6"/>
            <circle cx="748" cy="308" r="9" fill="#F0D9A8"/>
            <circle cx="748" cy="312" r="42" fill="#F0D9A8" opacity=".22" filter="url(#fig-b2)"/>
          </g>

          <!-- 窓を背にした、向こう側の椅子2脚 -->
          <g>
            <g>
              <rect x="716" y="396" width="76" height="76" rx="15" fill="#E7DFCC"/>
              <rect x="716" y="396" width="76" height="11" rx="5" fill="#C6A886"/>
              <rect x="716" y="404" width="11" height="68" rx="5" fill="#D8CFB9" opacity=".9"/>
            </g>
            <g>
              <rect x="812" y="386" width="76" height="76" rx="15" fill="#E1D8C3"/>
              <rect x="812" y="386" width="76" height="11" rx="5" fill="#B08A63"/>
              <rect x="812" y="394" width="11" height="68" rx="5" fill="#D2C8B1" opacity=".9"/>
            </g>
          </g>

          <!-- ライトオークの角テーブル -->
          <g>
            <ellipse cx="880" cy="576" rx="184" ry="24" fill="#241F1A" opacity=".3" filter="url(#fig-b2)"/>
            <g stroke="#A9895E" stroke-width="10" stroke-linecap="round"><line x1="720" y1="470" x2="714" y2="530"/></g>
            <path d="M700 450 L968 438 L1014 482 L746 496 Z" fill="url(#fig-r2tb)"/>
            <g fill="none" stroke="#B4956A" stroke-width="2.5" opacity=".4">
              <path d="M714 464 L980 452"/><path d="M728 478 L994 466"/>
            </g>
            <path d="M746 496 L1014 482 L1014 500 L746 514 Z" fill="#A9895E"/>
            <path d="M700 450 L746 496 L746 514 L700 468 Z" fill="#BB9A70"/>
            <g stroke="#B08A63" stroke-width="12" stroke-linecap="round">
              <line x1="772" y1="510" x2="764" y2="584"/><line x1="998" y1="496" x2="1008" y2="566"/>
            </g>
          </g>

          <!-- 白い花器に、摘んできたオリーブの枝を一本 -->
          <g>
            <ellipse cx="880" cy="474" rx="26" ry="7" fill="#241F1A" opacity=".22"/>
            <path d="M868 474 q-11-28 2-34 q11-5 22 0 q13 6 2 34 z" fill="#F2EFE8"/>
            <path d="M870 474 q-10-27 1-33 q5-2 8-2 q-9 12 -3 35 z" fill="#FFFFFF" opacity=".7"/>
            <g fill="none" stroke="#74994A" stroke-width="3" stroke-linecap="round">
              <path d="M881 441 q10-34 33-52"/><path d="M879 441 q-5-25 -15-38"/>
            </g>
            <g fill="#8FB25C"><ellipse cx="896" cy="413" rx="9" ry="4"/><ellipse cx="909" cy="399" rx="9" ry="4"/><ellipse cx="918" cy="387" rx="8" ry="4"/><ellipse cx="873" cy="413" rx="8" ry="4"/><ellipse cx="867" cy="399" rx="8" ry="4"/></g>
          </g>

          <!-- 手前側の椅子2脚。背をこちらに向けている -->
          <g>
            <g>
              <rect x="694" y="486" width="88" height="70" rx="16" fill="#EFE8D8"/>
              <rect x="694" y="486" width="88" height="12" rx="6" fill="#C6A886"/>
              <rect x="686" y="550" width="104" height="21" rx="9" fill="#E4DCC8"/>
              <g stroke="#B08A63" stroke-width="9" stroke-linecap="round"><line x1="702" y1="571" x2="690" y2="630"/><line x1="774" y1="571" x2="786" y2="630"/></g>
            </g>
            <g>
              <rect x="892" y="498" width="88" height="70" rx="16" fill="#EAE3D2"/>
              <rect x="892" y="498" width="88" height="12" rx="6" fill="#B08A63"/>
              <rect x="884" y="562" width="104" height="21" rx="9" fill="#DFD7C2"/>
              <g stroke="#B08A63" stroke-width="9" stroke-linecap="round"><line x1="900" y1="583" x2="888" y2="644"/><line x1="972" y1="583" x2="984" y2="644"/></g>
            </g>
          </g>

          <!-- ベッドがカーペットに落とす影 -->
          <ellipse cx="230" cy="596" rx="300" ry="26" fill="#1C1813" opacity=".32" filter="url(#fig-b2)"/>

          <!-- ヘッドボードの奥に回した棚。苔玉と、読みかけの本 -->
          <g>
            <rect x="30" y="292" width="392" height="18" rx="3" fill="#D9C0A0"/>
            <rect x="30" y="310" width="392" height="14" fill="#B08A63"/>
            <rect x="30" y="324" width="392" height="6" fill="#8F6743" opacity=".5"/>
          </g>
          <g>
            <ellipse cx="138" cy="296" rx="40" ry="8" fill="#B08A63"/>
            <ellipse cx="138" cy="291" rx="40" ry="8" fill="#DCC4A2"/>
            <circle cx="138" cy="271" r="21" fill="#4C6E31"/>
            <path d="M124 258 q14-8 28 0 q-14 6 -28 0z" fill="#5E8340" opacity=".8"/>
            <path d="M138 252 q-4-16 -9-25" fill="none" stroke="#6B4A32" stroke-width="3.5"/>
            <g fill="#3E6B49"><path d="M104 228 q31-16 63 0 q-31 12 -63 0z"/><path d="M113 209 q25-13 50 0 q-25 10 -50 0z"/></g>
            <g stroke="#2F5A3B" stroke-width="1.6" opacity=".55"><line x1="118" y1="222" x2="110" y2="214"/><line x1="140" y1="219" x2="140" y2="209"/><line x1="158" y1="223" x2="166" y2="215"/></g>
          </g>
          <g>
            <rect x="236" y="278" width="104" height="13" rx="2" fill="#F2EFE8"/>
            <rect x="236" y="278" width="104" height="4" rx="2" fill="#C8783A"/>
            <rect x="242" y="266" width="92" height="12" rx="2" fill="#DEE8F1"/>
            <rect x="242" y="266" width="92" height="4" rx="2" fill="#2C5779"/>
            <rect x="248" y="255" width="80" height="11" rx="2" fill="#E4DFD2"/>
            <rect x="248" y="255" width="80" height="4" rx="2" fill="#6B4A32"/>
            <g><rect x="348" y="244" width="15" height="47" fill="#1B3A57"/><rect x="365" y="236" width="12" height="55" fill="#6B4A32"/><rect x="379" y="248" width="14" height="43" fill="#2B2620"/></g>
            <path d="M396 291 L410 250 L420 254 L405 291 Z" fill="#C8783A"/>
          </g>

          <!-- ヘッドボード -->
          <g>
            <rect x="40" y="324" width="368" height="80" fill="#C6A886"/>
            <rect x="40" y="324" width="368" height="6" rx="3" fill="#E0C9A9"/>
            <g stroke="#B08A63" stroke-width="3" opacity=".5"><line x1="132" y1="330" x2="132" y2="404"/><line x1="224" y1="330" x2="224" y2="404"/><line x1="316" y1="330" x2="316" y2="404"/></g>
            <rect x="396" y="324" width="12" height="80" fill="#A98A63" opacity=".6"/>
          </g>

          <!-- ベッド。マットレスより一回り大きい木の台に載っている -->
          <g>
            <path d="M22 396 L430 396 L494 560 L-46 560 Z" fill="#C6A886"/>
            <path d="M22 396 L430 396 L432 404 L20 404 Z" fill="#DCC4A2"/>
            <path d="M42 406 L410 406 L462 552 L-14 552 Z" fill="url(#fig-r2bd)"/>
            <path d="M42 406 L410 406 L414 438 L38 438 Z" fill="#FFFFFF" opacity=".75"/>
            <path d="M38 438 L414 438" fill="none" stroke="#D3CCBC" stroke-width="2.5"/>
            <!-- 足もとに掛けたセージのスロー -->
            <path d="M28 452 L418 452 L440 500 L4 500 Z" fill="#8FA277"/>
            <path d="M28 452 L418 452 L419 462 L26 462 Z" fill="#A2B389"/>
            <g fill="none" stroke="#7F9168" stroke-width="3" opacity=".45"><path d="M150 458 L140 500"/><path d="M272 458 L270 500"/><path d="M372 458 L386 500"/></g>
            <!-- その下に重ねた、生成りのワッフル -->
            <path d="M14 500 L432 500 L448 534 L-4 534 Z" fill="url(#fig-r2wf)"/>
            <path d="M14 500 L432 500 L433 508 L13 508 Z" fill="#F7F2E6" opacity=".8"/>
            <!-- スローの房。ベッドの左の脇に垂れる -->
            <g stroke="#9BAC83" stroke-width="2.5" stroke-linecap="round" opacity=".75">
              <line x1="6" y1="499" x2="3" y2="518"/><line x1="18" y1="499" x2="16" y2="520"/><line x1="30" y1="499" x2="28" y2="521"/><line x1="42" y1="499" x2="41" y2="520"/><line x1="54" y1="499" x2="53" y2="518"/>
            </g>
            <path d="M42 406 L410 406 L462 552 L-14 552 Z" fill="none" stroke="#D8D2C4" stroke-width="2.5"/>
          </g>

          <!-- 枕とクッション。白でそろえて、生成りのブークレを2つだけ混ぜる -->
          <g>
            <rect x="60" y="360" width="152" height="58" rx="13" fill="#FBFAF6"/>
            <rect x="222" y="354" width="152" height="62" rx="13" fill="#F4F1E8"/>
            <rect x="330" y="368" width="76" height="52" rx="12" fill="#FBFAF6"/>
            <g>
              <rect x="138" y="392" width="94" height="50" rx="13" fill="#E9E0CB"/>
              <g fill="#DACFB5" opacity=".8"><circle cx="158" cy="408" r="4"/><circle cx="176" cy="418" r="4"/><circle cx="196" cy="404" r="4"/><circle cx="212" cy="420" r="4"/><circle cx="180" cy="432" r="4"/></g>
            </g>
            <rect x="248" y="398" width="80" height="44" rx="13" fill="#FBFAF6"/>
          </g>

          <!-- ベンチの下は荷物置き。スーツケースと、脱いだ靴が並ぶ -->
          <g>
            <path d="M-56 596 L480 596 L488 656 L-62 656 Z" fill="#2C2721" opacity=".45"/>
            <g>
              <rect x="132" y="594" width="116" height="58" rx="6" fill="#39414A"/>
              <rect x="132" y="594" width="116" height="7" rx="3" fill="#4D5763"/>
              <g stroke="#4D5763" stroke-width="3.5" opacity=".85"><line x1="158" y1="600" x2="158" y2="650"/><line x1="186" y1="600" x2="186" y2="650"/><line x1="214" y1="600" x2="214" y2="650"/></g>
            </g>
            <g>
              <rect x="256" y="600" width="106" height="52" rx="6" fill="#1B3A57"/>
              <rect x="256" y="600" width="106" height="7" rx="3" fill="#2C5779"/>
              <g stroke="#2C5779" stroke-width="3.5" opacity=".85"><line x1="280" y1="606" x2="280" y2="650"/><line x1="306" y1="606" x2="306" y2="650"/><line x1="332" y1="606" x2="332" y2="650"/></g>
            </g>
            <g>
              <path d="M376 622 q0-19 16-19 q9 0 12 7 l18 6 q7 2 7 6 z" fill="#C6A886"/>
              <rect x="374" y="620" width="58" height="5" rx="2.5" fill="#8F6743"/>
              <path d="M382 648 q0-22 18-22 q10 0 14 8 l21 7 q8 3 8 7 z" fill="#F2EFE8"/>
              <rect x="380" y="646" width="66" height="6" rx="3" fill="#D3CCBC"/>
              <path d="M448 646 q0-19 16-19 q9 0 12 7 l17 5 q7 2 7 7 z" fill="#6B4A32"/>
              <rect x="446" y="644" width="56" height="6" rx="3" fill="#4A3222"/>
            </g>
          </g>

          <!-- 足もとのベンチ。ベッドの台がそのまま延びている -->
          <g>
            <path d="M-56 556 L472 556 L486 588 L-62 588 Z" fill="#D9C0A0"/>
            <path d="M-56 556 L472 556 L473 564 L-57 564 Z" fill="#E8D3B4"/>
            <g fill="none" stroke="#C1A47F" stroke-width="2" opacity=".6"><path d="M-58 572 L478 570"/><path d="M-60 580 L482 578"/></g>
            <path d="M-62 588 L486 588 L488 604 L-63 604 Z" fill="#B08A63"/>
            <path d="M-63 604 L488 604 L488 610 L-63 610 Z" fill="#8F6743" opacity=".7"/>
          </g>
          <path d="M-63 610 L488 610 L492 640 L-63 640 Z" fill="#2C2721" opacity=".26"/>

          <!-- 部屋ぜんぶに回る、やわらかい残りの光 -->
          <g>
            <path d="M790 206 L1000 206 L884 700 L472 700 Z" fill="#FFF0D2" opacity=".06"/>
            <path d="M802 210 L898 210 L690 700 L494 700 Z" fill="#FFFAEC" opacity=".06"/>
          </g>
        </svg>
`;

export const ROOM3 = String.raw`
<svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <!-- ROOM 03 だけは描き起こしのイラストを画像アセットで持つ。
               外側の <svg> をそのまま残しているので、.ph / .scene の CSS も
               コンポーネントも他のシーンと同じで済み、slice の切り抜き挙動も
               そのまま効く。
               viewBox は原画と同じ 4:3。内側の <image> にも slice を掛けて、
               差し替え画像の比率が多少ずれても歪まないようにしてある。
               外枠だけ xMidYMax（下寄せ）にしてある：desktop は .pic が 1.334 で
               4:3 とほぼ一致するため切り抜きゼロだが、モバイルの 16:10 では縦が
               16.7% 落ちる。中央寄せだと靴が切れる一方、上は天井でほぼ無地なので、
               下を固定して上を捨てる方が失うものが少ない。 -->
          <image href="/rooms/room03.webp" x="0" y="0" width="1200" height="900" preserveAspectRatio="xMidYMid slice"/>
        </svg>
`;

export const EXP_GYOEN = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="fig-e1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DCE7F0"/><stop offset="1" stop-color="#EDEEE0"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#fig-e1)"/>
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
            <defs><linearGradient id="fig-e5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DEE8F1"/><stop offset="1" stop-color="#C6D6E4"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#fig-e5)"/>
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
            <defs><linearGradient id="fig-sd" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#F0D9A8" stop-opacity=".26"/><stop offset=".45" stop-color="#2B2620" stop-opacity=".2"/><stop offset="1" stop-color="#0D0B09" stop-opacity=".82"/></linearGradient></defs>
            <rect width="400" height="500" fill="url(#fig-sd)"/>
            <g opacity=".5" fill="#0D0B09"><path d="M60 120 L220 60 L300 200 L120 280 Z"/><path d="M180 340 L360 300 L400 440 L200 480 Z"/></g>
          </svg>
`;

export const MAP = String.raw`
<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="fig-cloth" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#E4EDF4"/><stop offset="1" stop-color="#C6D6E4"/>
            </linearGradient>
          </defs>
          <rect width="900" height="700" fill="url(#fig-cloth)"/>
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
