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
              <linearGradient id="wc-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#EDF2F7"/><stop offset=".55" stop-color="#DCE7F0"/><stop offset="1" stop-color="#C6D6E4"/>
              </linearGradient>
              <linearGradient id="wc-wd" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#4A3222"/><stop offset=".4" stop-color="#8F6743"/>
                <stop offset=".75" stop-color="#6B4A32"/><stop offset="1" stop-color="#422D1E"/>
              </linearGradient>
              <linearGradient id="wc-shoji" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#FBFAF6"/><stop offset="1" stop-color="#E8E9E2"/>
              </linearGradient>
              <filter id="wc-bl"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>

            <rect width="800" height="1000" fill="url(#wc-sky)"/>
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
            <rect y="530" width="800" height="470" fill="url(#wc-wd)"/>
            <g stroke="#3E2A1C" stroke-width="2" opacity=".5">
              <line x1="0" y1="596" x2="800" y2="596"/><line x1="0" y1="672" x2="800" y2="672"/>
              <line x1="0" y1="762" x2="800" y2="762"/><line x1="0" y1="868" x2="800" y2="868"/>
            </g>
            <!-- 朝日の帯 -->
            <path d="M120 530 L420 530 L620 1000 L200 1000 Z" fill="#FFF6E2" opacity=".42" filter="url(#wc-bl)"/>

            <!-- 障子 -->
            <g>
              <rect x="430" y="120" width="330" height="410" fill="url(#wc-shoji)"/>
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
            <ellipse cx="360" cy="850" rx="180" ry="26" fill="#2B2620" opacity=".16" filter="url(#wc-bl)"/>
          </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 800 960" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="wc-wl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F4EE"/><stop offset="1" stop-color="#E4E0D6"/></linearGradient>
                <linearGradient id="wc-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9C7250"/><stop offset="1" stop-color="#6B4A32"/></linearGradient>
                <linearGradient id="wc-ch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DEE8F1"/><stop offset="1" stop-color="#A6BED4"/></linearGradient>
                <filter id="wc-bl2"><feGaussianBlur stdDeviation="24"/></filter>
              </defs>
              <rect width="800" height="960" fill="url(#wc-wl)"/>
              <!-- 窓 -->
              <rect x="70" y="70" width="380" height="440" fill="#EFF5F8"/>
              <g stroke="#6B4A32" stroke-width="8"><line x1="260" y1="70" x2="260" y2="510"/><line x1="70" y1="290" x2="450" y2="290"/></g>
              <rect x="70" y="70" width="380" height="440" fill="none" stroke="#6B4A32" stroke-width="15"/>
              <g fill="#7FA07F" opacity=".65"><ellipse cx="150" cy="190" rx="76" ry="54"/><ellipse cx="360" cy="164" rx="62" ry="46"/><ellipse cx="380" cy="420" rx="70" ry="50"/></g>
              <g fill="#33553F" opacity=".45"><ellipse cx="190" cy="230" rx="52" ry="36"/></g>
              <!-- 光の帯 -->
              <path d="M70 510 L450 510 L690 800 L230 800 Z" fill="#FFF8E6" opacity=".5" filter="url(#wc-bl2)"/>
              <!-- 床 -->
              <rect y="680" width="800" height="280" fill="url(#wc-fl)"/>
              <g stroke="#4A3222" stroke-width="2" opacity=".42">
                <line x1="0" y1="726" x2="800" y2="726"/><line x1="0" y1="790" x2="800" y2="790"/><line x1="0" y1="872" x2="800" y2="872"/>
                <line x1="220" y1="680" x2="188" y2="960"/><line x1="540" y1="680" x2="580" y2="960"/>
              </g>
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
              <!-- 低いテーブルと植物 -->
              <g>
                <rect x="250" y="808" width="280" height="15" rx="4" fill="#6B4A32"/>
                <rect x="270" y="823" width="12" height="58" fill="#4A3222"/><rect x="500" y="823" width="12" height="58" fill="#4A3222"/>
                <rect x="332" y="784" width="62" height="24" rx="3" fill="#F2EFE8"/>
                <circle cx="448" cy="796" r="14" fill="#2B2620"/>
              </g>
              <g>
                <rect x="650" y="742" width="78" height="88" rx="6" fill="#8F6743"/>
                <g fill="#1F3A2E"><ellipse cx="690" cy="682" rx="68" ry="52"/><ellipse cx="646" cy="716" rx="42" ry="30"/><ellipse cx="734" cy="712" rx="38" ry="26"/></g>
                <g fill="#33553F" opacity=".8"><ellipse cx="674" cy="660" rx="30" ry="22"/></g>
              </g>
              <ellipse cx="360" cy="780" rx="300" ry="30" fill="#2B2620" opacity=".14" filter="url(#wc-bl2)"/>
            </svg>
`;

export const GYOEN_SQ = String.raw`
<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="400" fill="#33553F"/>
              <g fill="#1F3A2E"><ellipse cx="110" cy="150" rx="140" ry="106"/><ellipse cx="300" cy="110" rx="118" ry="88"/><ellipse cx="230" cy="240" rx="150" ry="98"/></g>
              <g fill="#7FA07F" opacity=".6"><ellipse cx="98" cy="106" rx="54" ry="38"/><ellipse cx="306" cy="76" rx="46" ry="30"/></g>
              <g fill="#4A3222"><rect x="176" y="252" width="26" height="148"/><rect x="300" y="268" width="18" height="132"/></g>
              <rect y="352" width="400" height="48" fill="#16291F"/>
            </svg>
`;

export const ROOM1 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="wc-r1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7F5EF"/><stop offset="1" stop-color="#E6E1D5"/></linearGradient>
            <linearGradient id="wc-r1f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A87C57"/><stop offset="1" stop-color="#6B4A32"/></linearGradient>
            <filter id="wc-b1"><feGaussianBlur stdDeviation="20"/></filter>
          </defs>
          <rect width="1000" height="700" fill="url(#wc-r1w)"/>
          <rect x="620" y="60" width="330" height="360" fill="#EFF5F8"/>
          <rect x="620" y="60" width="330" height="360" fill="none" stroke="#6B4A32" stroke-width="15"/>
          <line x1="785" y1="60" x2="785" y2="420" stroke="#6B4A32" stroke-width="8"/>
          <g fill="#7FA07F" opacity=".6"><ellipse cx="700" cy="160" rx="66" ry="48"/><ellipse cx="880" cy="320" rx="70" ry="50"/></g>
          <path d="M620 420 L950 420 L1000 620 L560 620 Z" fill="#FFF8E6" opacity=".5" filter="url(#wc-b1)"/>
          <rect y="500" width="1000" height="200" fill="url(#wc-r1f)"/>
          <g stroke="#4A3222" stroke-width="2" opacity=".38"><line x1="0" y1="548" x2="1000" y2="548"/><line x1="0" y1="606" x2="1000" y2="606"/><line x1="320" y1="500" x2="288" y2="700"/><line x1="720" y1="500" x2="760" y2="700"/></g>
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
            <g fill="#1F3A2E"><ellipse cx="932" cy="428" rx="56" ry="42"/><ellipse cx="898" cy="454" rx="32" ry="24"/></g></g>
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
          <g><rect x="300" y="510" width="560" height="130" rx="4" fill="#1F3A2E" opacity=".9"/>
            <g stroke="#7FA07F" stroke-width="2" opacity=".3"><line x1="300" y1="544" x2="860" y2="544"/><line x1="300" y1="606" x2="860" y2="606"/></g></g>
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
          <!-- ポスターとランプ -->
          <g><rect x="620" y="88" width="126" height="166" fill="#F2EFE8"/><rect x="636" y="110" width="94" height="98" fill="#1B3A57"/><rect x="636" y="218" width="58" height="8" fill="#2B2620"/></g>
          <g><line x1="880" y1="0" x2="880" y2="120" stroke="#2B2620" stroke-width="3"/>
            <path d="M836 120h90l-22 52h-46z" fill="#2B2620"/><circle cx="880" cy="184" r="12" fill="#F0D9A8"/>
            <circle cx="880" cy="188" r="52" fill="#F0D9A8" opacity=".22" filter="url(#wc-b2)"/></g>
          <ellipse cx="600" cy="540" rx="300" ry="30" fill="#2B2620" opacity=".2" filter="url(#wc-b2)"/>
        </svg>
`;

export const ROOM3 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs><filter id="wc-b3"><feGaussianBlur stdDeviation="22"/></filter>
            <pattern id="wc-tape" width="52" height="52" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="26" height="52" fill="#C6D6E4"/></pattern></defs>
          <rect width="1000" height="700" fill="#D6D0C4"/>
          <g stroke="#2B2620" stroke-width="11" opacity=".85"><line x1="190" y1="0" x2="190" y2="700"/><line x1="810" y1="0" x2="810" y2="700"/><line x1="0" y1="130" x2="1000" y2="130"/></g>
          <g stroke="#8B8375" stroke-width="4" opacity=".8"><line x1="190" y1="130" x2="810" y2="470"/><line x1="810" y1="130" x2="190" y2="470"/></g>
          <rect x="230" y="164" width="540" height="270" fill="#DCE7F0"/>
          <g stroke="#2B2620" stroke-width="8"><line x1="410" y1="164" x2="410" y2="434"/><line x1="590" y1="164" x2="590" y2="434"/><line x1="230" y1="300" x2="770" y2="300"/></g>
          <g fill="#A6BED4"><rect x="252" y="192" width="40" height="80"/><rect x="620" y="200" width="52" height="70"/></g>
          <rect y="470" width="1000" height="230" fill="#6B4A32"/>
          <g stroke="#4A3222" stroke-width="2" opacity=".5"><line x1="0" y1="528" x2="1000" y2="528"/><line x1="0" y1="600" x2="1000" y2="600"/></g>
          <g fill="#2B2620" opacity=".85"><rect x="250" y="404" width="200" height="80" rx="5"/><rect x="560" y="386" width="230" height="98" rx="5"/></g>
          <g stroke="#8F6743" stroke-width="6" opacity=".8"><line x1="270" y1="484" x2="270" y2="524"/><line x1="430" y1="484" x2="430" y2="524"/><line x1="580" y1="484" x2="580" y2="528"/><line x1="770" y1="484" x2="770" y2="528"/></g>
          <rect width="1000" height="700" fill="url(#wc-tape)" opacity=".16"/>
          <ellipse cx="500" cy="330" rx="420" ry="220" fill="#2B2620" opacity=".2" filter="url(#wc-b3)"/>
        </svg>
`;

export const EXP_GYOEN = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="wc-e1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DCE7F0"/><stop offset="1" stop-color="#EDEEE0"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#wc-e1)"/>
            <g fill="#A6BED4" opacity=".5"><rect x="16" y="90" width="62" height="200"/><rect x="470" y="50" width="82" height="240"/><rect x="380" y="130" width="46" height="160"/></g>
            <g fill="#1F3A2E"><ellipse cx="140" cy="270" rx="150" ry="118"/><ellipse cx="430" cy="230" rx="168" ry="128"/><ellipse cx="290" cy="330" rx="176" ry="116"/></g>
            <g fill="#33553F" opacity=".9"><ellipse cx="110" cy="222" rx="70" ry="52"/><ellipse cx="450" cy="182" rx="80" ry="56"/></g>
            <g fill="#7FA07F" opacity=".45"><ellipse cx="96" cy="192" rx="44" ry="28"/><ellipse cx="466" cy="152" rx="46" ry="28"/></g>
            <g fill="#4A3222"><rect x="126" y="356" width="30" height="180"/><rect x="418" y="330" width="24" height="206"/></g>
            <rect y="470" width="600" height="330" fill="#5E8B54"/>
            <path d="M0 640 Q300 556 600 636 L600 800 L0 800 Z" fill="#7BA765"/>
            <g stroke="#4A7343" stroke-width="3" opacity=".35"><path d="M0 700 Q300 638 600 706"/><path d="M0 750 Q300 690 600 756"/></g>
            <g fill="#1F3A2E" opacity=".7"><ellipse cx="210" cy="694" rx="34" ry="12"/><rect x="196" y="632" width="14" height="62" rx="7"/><circle cx="203" cy="622" r="11"/>
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
            <g fill="#1F3A2E"><rect x="466" y="120" width="60" height="62" rx="6"/></g>
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
              <circle cx="152" cy="596" r="66" fill="#1F3A2E"/><circle cx="152" cy="596" r="52" fill="#33553F"/>
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
              <rect x="500" y="70" width="46" height="290" fill="#1F3A2E"/>
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
            <g fill="#1F3A2E"><ellipse cx="70" cy="720" rx="92" ry="66"/><ellipse cx="540" cy="756" rx="82" ry="56"/></g>
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
          <path d="M470 250 q120 -60 250 10 q80 60 60 190 q-30 150 -220 160 q-180 10 -210 -140 q-24 -140 120 -220 Z" fill="#1F3A2E"/>
          <path d="M470 250 q120 -60 250 10 q80 60 60 190 q-30 150 -220 160 q-180 10 -210 -140 q-24 -140 120 -220 Z"
                fill="none" stroke="#7FA07F" stroke-width="2" stroke-dasharray="7 6" opacity=".8"/>
          <g fill="#33553F" opacity=".8"><ellipse cx="620" cy="360" rx="82" ry="56"/><ellipse cx="722" cy="482" rx="60" ry="44"/><ellipse cx="540" cy="474" rx="66" ry="46"/></g>
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
          <circle cx="470" cy="330" r="11" fill="#EDF2F7" stroke="#1F3A2E" stroke-width="5"/>
          <text x="470" y="306" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#EDF2F7" letter-spacing="1">GYOENMAE</text>
          <circle cx="196" cy="500" r="10" fill="#EDF2F7" stroke="#6B4A32" stroke-width="5"/>
          <text x="196" y="478" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#2B2620" letter-spacing="1">SHINJUKU 3</text>
          <!-- 御苑の名前（刺繍） -->
          <text x="596" y="452" font-family="Newsreader, serif" font-style="italic" font-size="38" fill="#DEE8F1">Shinjuku Gyoen</text>
          <text x="598" y="484" font-family="IBM Plex Mono, monospace" font-size="12" fill="#7FA07F" letter-spacing="3">58.3 HA OF QUIET</text>
          <!-- 徒歩ルート -->
          <path d="M340 392 L470 392 L470 342" fill="none" stroke="#C8783A" stroke-width="3" stroke-dasharray="7 7"/>
        </svg>
`;

export const HOOD_CITY = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#C6D6E4"/>
              <g fill="#8FA9BF"><rect x="0" y="80" width="90" height="170"/><rect x="110" y="40" width="70" height="210"/><rect x="200" y="110" width="60" height="140"/><rect x="280" y="60" width="120" height="190"/></g>
              <g fill="#EDF2F7" opacity=".85"><rect x="126" y="70" width="10" height="14"/><rect x="152" y="100" width="10" height="14"/><rect x="304" y="90" width="10" height="14"/><rect x="352" y="130" width="10" height="14"/></g>
              <g fill="#1F3A2E"><ellipse cx="50" cy="234" rx="70" ry="40"/></g>
              <rect y="238" width="400" height="12" fill="#6B4A32"/>
            </svg>
`;

export const HOOD_PARK = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#7BA765"/>
              <g fill="#1F3A2E"><ellipse cx="90" cy="86" rx="124" ry="88"/><ellipse cx="308" cy="66" rx="132" ry="82"/></g>
              <g fill="#33553F" opacity=".85"><ellipse cx="120" cy="60" rx="60" ry="40"/></g>
              <rect y="160" width="400" height="90" fill="#5E8B54"/>
              <g fill="#4A3222"><rect x="80" y="138" width="20" height="62"/><rect x="292" y="128" width="16" height="62"/></g>
              <path d="M0 210 Q200 176 400 214 L400 250 L0 250 Z" fill="#7BA765"/>
            </svg>
`;
