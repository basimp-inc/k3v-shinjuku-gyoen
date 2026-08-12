/* Auto-extracted verbatim from docs/top-page-mock-7.html, with every SVG id
   namespaced `tb-`: the Gyoen Green and Denim Sakura designs sit in the same
   document and generic ids (#sky, #wall, #glow, #soft) would collide.

   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static
   authored markup, and hand-converting several hundred SVG attributes to JSX
   casing would only add transcription risk.
   Re-run docs/gen-timber-assets.py if the mock changes. */

export const HERO = String.raw`
<svg viewBox="0 0 900 1100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#2f5f88"/><stop offset=".45" stop-color="#3d6a92"/>
          <stop offset=".78" stop-color="#7d8fa0"/><stop offset="1" stop-color="#b0967c"/>
        </linearGradient>
        <linearGradient id="tb-woodg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#4a3222"/><stop offset=".35" stop-color="#7a563b"/>
          <stop offset=".7" stop-color="#6B4A32"/><stop offset="1" stop-color="#3d2a1c"/>
        </linearGradient>
        <linearGradient id="tb-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f0c98d"/><stop offset="1" stop-color="#c8783a"/>
        </linearGradient>
        <filter id="tb-soft"><feGaussianBlur stdDeviation="16"/></filter>
      </defs>

      <rect width="900" height="1100" fill="url(#tb-sky)"/>
      <!-- 遠景の東京 -->
      <g fill="#1f4463" opacity=".85">
        <rect x="0" y="300" width="90" height="330"/><rect x="86" y="360" width="58" height="270"/>
        <rect x="150" y="250" width="74" height="380"/><rect x="230" y="330" width="46" height="300"/>
        <rect x="282" y="200" width="96" height="430"/><rect x="386" y="300" width="60" height="330"/>
        <rect x="452" y="356" width="88" height="274"/><rect x="548" y="268" width="52" height="362"/>
        <rect x="606" y="332" width="104" height="298"/><rect x="716" y="238" width="70" height="392"/>
        <rect x="792" y="322" width="108" height="308"/>
      </g>
      <g fill="#e8c98f" opacity=".5">
        <rect x="300" y="230" width="7" height="9"/><rect x="316" y="230" width="7" height="9"/>
        <rect x="300" y="256" width="7" height="9"/><rect x="340" y="256" width="7" height="9"/>
        <rect x="734" y="268" width="7" height="9"/><rect x="750" y="292" width="7" height="9"/>
        <rect x="176" y="286" width="7" height="9"/><rect x="196" y="318" width="7" height="9"/>
        <rect x="628" y="366" width="7" height="9"/><rect x="656" y="400" width="7" height="9"/>
      </g>
      <!-- 街の靄 -->
      <ellipse cx="450" cy="640" rx="600" ry="90" fill="#c2a184" opacity=".22" filter="url(#tb-soft)"/>

      <!-- 建物本体（木の面） -->
      <rect x="0" y="560" width="900" height="540" fill="url(#tb-woodg)"/>
      <!-- 縦格子 -->
      <g>
        <rect x="0" y="560" width="900" height="16" fill="#3d2a1c" opacity=".8"/>
        <g fill="#3d2a1c" opacity=".55">
          <rect x="24" y="576" width="9" height="524"/><rect x="72" y="576" width="9" height="524"/>
          <rect x="120" y="576" width="9" height="524"/><rect x="168" y="576" width="9" height="524"/>
          <rect x="216" y="576" width="9" height="524"/><rect x="264" y="576" width="9" height="524"/>
          <rect x="648" y="576" width="9" height="524"/><rect x="696" y="576" width="9" height="524"/>
          <rect x="744" y="576" width="9" height="524"/><rect x="792" y="576" width="9" height="524"/>
          <rect x="840" y="576" width="9" height="524"/><rect x="888" y="576" width="9" height="524"/>
        </g>
        <g fill="#a67c52" opacity=".3">
          <rect x="34" y="576" width="3" height="524"/><rect x="82" y="576" width="3" height="524"/>
          <rect x="130" y="576" width="3" height="524"/><rect x="178" y="576" width="3" height="524"/>
          <rect x="226" y="576" width="3" height="524"/><rect x="274" y="576" width="3" height="524"/>
          <rect x="658" y="576" width="3" height="524"/><rect x="706" y="576" width="3" height="524"/>
          <rect x="754" y="576" width="3" height="524"/><rect x="802" y="576" width="3" height="524"/>
          <rect x="850" y="576" width="3" height="524"/><rect x="898" y="576" width="3" height="524"/>
        </g>
      </g>

      <!-- 光る窓（障子グリッド） -->
      <g>
        <rect x="300" y="612" width="330" height="300" fill="#2B2620"/>
        <rect x="312" y="624" width="306" height="276" fill="url(#tb-glow)" opacity=".92"/>
        <g stroke="#4a3222" stroke-width="7" opacity=".85">
          <line x1="414" y1="624" x2="414" y2="900"/><line x1="516" y1="624" x2="516" y2="900"/>
          <line x1="312" y1="716" x2="618" y2="716"/><line x1="312" y1="808" x2="618" y2="808"/>
        </g>
        <!-- 室内のシルエット -->
        <g fill="#4a3222" opacity=".5">
          <rect x="330" y="836" width="66" height="64" rx="6"/>
          <rect x="540" y="800" width="14" height="100"/>
          <circle cx="470" cy="676" r="17"/>
          <rect x="466" y="624" width="8" height="38"/>
        </g>
        <rect x="300" y="612" width="330" height="300" fill="none" stroke="#2B2620" stroke-width="12"/>
      </g>
      <!-- 窓からの光 -->
      <ellipse cx="465" cy="930" rx="220" ry="60" fill="#e8c98f" opacity=".18" filter="url(#tb-soft)"/>

      <!-- のれん -->
      <g>
        <rect x="330" y="930" width="270" height="14" fill="#3d2a1c"/>
        <path d="M334 944h80v130h-80z" fill="#1B3A57"/>
        <path d="M424 944h80v146h-80z" fill="#16334d"/>
        <path d="M514 944h80v134h-80z" fill="#1B3A57"/>
        <g fill="#E4DACA" opacity=".9">
          <rect x="352" y="984" width="44" height="7"/><rect x="352" y="1002" width="44" height="7"/>
          <rect x="446" y="984" width="36" height="7"/><rect x="446" y="1002" width="18" height="7"/>
          <rect x="532" y="984" width="44" height="7"/>
        </g>
      </g>

      <!-- 植栽 -->
      <g fill="#1F3A2E">
        <ellipse cx="118" cy="1010" rx="104" ry="72"/>
        <ellipse cx="196" cy="1050" rx="86" ry="56"/>
        <ellipse cx="46" cy="1058" rx="80" ry="52"/>
      </g>
      <g fill="#33553F" opacity=".85">
        <ellipse cx="96" cy="986" rx="46" ry="30"/><ellipse cx="180" cy="1026" rx="38" ry="24"/>
      </g>
      <g fill="#1F3A2E">
        <ellipse cx="818" cy="1030" rx="96" ry="62"/><ellipse cx="736" cy="1064" rx="70" ry="44"/>
      </g>
      <g fill="#33553F" opacity=".7"><ellipse cx="836" cy="1010" rx="40" ry="26"/></g>

      <!-- 提灯 -->
      <g>
        <line x1="700" y1="576" x2="700" y2="640" stroke="#3d2a1c" stroke-width="4"/>
        <ellipse cx="700" cy="672" rx="26" ry="34" fill="#e8c98f" opacity=".95"/>
        <g stroke="#c8783a" stroke-width="2" opacity=".5">
          <line x1="676" y1="660" x2="724" y2="660"/><line x1="674" y1="672" x2="726" y2="672"/>
          <line x1="676" y1="684" x2="724" y2="684"/>
        </g>
        <circle cx="700" cy="700" r="30" fill="#e8c98f" opacity=".14" filter="url(#tb-soft)"/>
      </g>

      <!-- 影 -->
      <rect x="0" y="560" width="900" height="540" fill="url(#tb-shd)"/>
      <defs>
        <linearGradient id="tb-shd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#2B2620" stop-opacity=".38"/>
          <stop offset=".4" stop-color="#2B2620" stop-opacity="0"/>
          <stop offset="1" stop-color="#2B2620" stop-opacity=".55"/>
        </linearGradient>
      </defs>
    </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="tb-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#efe8da"/><stop offset="1" stop-color="#d3c6b0"/>
              </linearGradient>
              <linearGradient id="tb-flr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#8f6743"/><stop offset="1" stop-color="#5b3f2a"/>
              </linearGradient>
              <linearGradient id="tb-dnm" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#3d6a92"/><stop offset="1" stop-color="#1B3A57"/>
              </linearGradient>
              <filter id="tb-sf2"><feGaussianBlur stdDeviation="22"/></filter>
            </defs>
            <rect width="800" height="1000" fill="url(#tb-wall)"/>
            <!-- 窓と光 -->
            <rect x="60" y="90" width="330" height="430" fill="#eef4f7"/>
            <g stroke="#6B4A32" stroke-width="9"><line x1="225" y1="90" x2="225" y2="520"/><line x1="60" y1="300" x2="390" y2="300"/></g>
            <rect x="60" y="90" width="330" height="430" fill="none" stroke="#6B4A32" stroke-width="16"/>
            <g fill="#33553F" opacity=".55">
              <ellipse cx="130" cy="210" rx="70" ry="52"/><ellipse cx="300" cy="180" rx="58" ry="44"/>
              <ellipse cx="330" cy="420" rx="66" ry="48"/>
            </g>
            <!-- 差し込む光 -->
            <path d="M60 520 L390 520 L640 780 L200 780 Z" fill="#fff3dd" opacity=".4" filter="url(#tb-sf2)"/>
            <!-- 床 -->
            <rect x="0" y="700" width="800" height="300" fill="url(#tb-flr)"/>
            <g stroke="#3d2a1c" stroke-width="2" opacity=".45">
              <line x1="0" y1="742" x2="800" y2="742"/><line x1="0" y1="792" x2="800" y2="792"/>
              <line x1="0" y1="852" x2="800" y2="852"/><line x1="0" y1="922" x2="800" y2="922"/>
              <line x1="180" y1="700" x2="150" y2="1000"/><line x1="480" y1="700" x2="520" y2="1000"/>
            </g>
            <!-- デニムソファ -->
            <g>
              <rect x="120" y="560" width="470" height="150" rx="14" fill="url(#tb-dnm)"/>
              <rect x="120" y="640" width="470" height="112" rx="16" fill="#24496b"/>
              <rect x="150" y="596" width="190" height="56" rx="10" fill="#2c5478"/>
              <rect x="360" y="590" width="190" height="62" rx="10" fill="#31608a"/>
              <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".8">
                <line x1="128" y1="652" x2="582" y2="652"/><line x1="128" y1="742" x2="582" y2="742"/>
              </g>
              <rect x="140" y="752" width="16" height="42" fill="#4a3222"/>
              <rect x="556" y="752" width="16" height="42" fill="#4a3222"/>
            </g>
            <!-- ローテーブルと植物 -->
            <g>
              <rect x="250" y="828" width="270" height="16" rx="4" fill="#6B4A32"/>
              <rect x="268" y="844" width="12" height="60" fill="#4a3222"/>
              <rect x="490" y="844" width="12" height="60" fill="#4a3222"/>
              <rect x="330" y="806" width="60" height="22" rx="3" fill="#E4DACA"/>
              <circle cx="440" cy="816" r="14" fill="#2B2620"/>
            </g>
            <g>
              <rect x="640" y="770" width="76" height="86" rx="6" fill="#8f6743"/>
              <g fill="#1F3A2E"><ellipse cx="678" cy="712" rx="66" ry="52"/><ellipse cx="636" cy="748" rx="40" ry="30"/><ellipse cx="722" cy="742" rx="36" ry="26"/></g>
              <g fill="#33553F" opacity=".8"><ellipse cx="664" cy="690" rx="30" ry="22"/></g>
            </g>
            <!-- 影 -->
            <ellipse cx="360" cy="800" rx="300" ry="34" fill="#2B2620" opacity=".22" filter="url(#tb-sf2)"/>
          </svg>
`;

export const GYOEN_SQ = String.raw`
<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="400" fill="#1F3A2E"/>
            <g fill="#33553F"><ellipse cx="120" cy="130" rx="130" ry="100"/><ellipse cx="290" cy="90" rx="110" ry="86"/><ellipse cx="230" cy="210" rx="140" ry="96"/></g>
            <g fill="#4a3222"><rect x="176" y="230" width="26" height="170"/><rect x="300" y="250" width="18" height="150"/></g>
            <g fill="#7fa07f" opacity=".55"><ellipse cx="96" cy="96" rx="52" ry="38"/><ellipse cx="300" cy="60" rx="44" ry="30"/></g>
            <rect y="330" width="400" height="70" fill="#152a20"/>
            <g stroke="#7fa07f" stroke-width="2" opacity=".25"><line x1="0" y1="352" x2="400" y2="340"/><line x1="0" y1="378" x2="400" y2="366"/></g>
          </svg>
`;

export const ROOM1 = String.raw`
<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="tb-r1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1ebde"/><stop offset="1" stop-color="#ded2bd"/></linearGradient>
              <linearGradient id="tb-r1f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9c7250"/><stop offset="1" stop-color="#6B4A32"/></linearGradient>
              <filter id="tb-b1"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>
            <rect width="1000" height="620" fill="url(#tb-r1w)"/>
            <rect x="600" y="60" width="330" height="330" fill="#eaf1f4"/>
            <rect x="600" y="60" width="330" height="330" fill="none" stroke="#6B4A32" stroke-width="14"/>
            <line x1="765" y1="60" x2="765" y2="390" stroke="#6B4A32" stroke-width="8"/>
            <g fill="#33553F" opacity=".5"><ellipse cx="680" cy="150" rx="66" ry="48"/><ellipse cx="860" cy="300" rx="70" ry="52"/></g>
            <path d="M600 390 L930 390 L1000 560 L560 560 Z" fill="#fff5e2" opacity=".45" filter="url(#tb-b1)"/>
            <rect y="440" width="1000" height="180" fill="url(#tb-r1f)"/>
            <g stroke="#4a3222" stroke-width="2" opacity=".4"><line x1="0" y1="482" x2="1000" y2="482"/><line x1="0" y1="530" x2="1000" y2="530"/><line x1="300" y1="440" x2="270" y2="620"/><line x1="700" y1="440" x2="740" y2="620"/></g>
            <!-- ベッド -->
            <g>
              <rect x="80" y="330" width="420" height="26" rx="6" fill="#8f6743"/>
              <rect x="80" y="356" width="420" height="96" rx="8" fill="#E4DACA"/>
              <rect x="80" y="430" width="420" height="40" rx="6" fill="#1B3A57"/>
              <rect x="110" y="322" width="120" height="46" rx="10" fill="#F3EEE3"/>
              <rect x="244" y="322" width="120" height="46" rx="10" fill="#F3EEE3"/>
              <rect x="96" y="470" width="14" height="34" fill="#4a3222"/><rect x="470" y="470" width="14" height="34" fill="#4a3222"/>
              <rect x="80" y="240" width="420" height="96" rx="8" fill="#a37b58"/>
              <g stroke="#7a563b" stroke-width="3" opacity=".6"><line x1="160" y1="240" x2="160" y2="336"/><line x1="250" y1="240" x2="250" y2="336"/><line x1="340" y1="240" x2="340" y2="336"/><line x1="424" y1="240" x2="424" y2="336"/></g>
            </g>
            <!-- ペンダントライト -->
            <g><line x1="560" y1="0" x2="560" y2="150" stroke="#2B2620" stroke-width="3"/>
              <path d="M520 150 h80 l-16 46 h-48 z" fill="#6B4A32"/>
              <circle cx="560" cy="206" r="10" fill="#f0c98d"/>
              <circle cx="560" cy="206" r="40" fill="#f0c98d" opacity=".2" filter="url(#tb-b1)"/></g>
            <!-- 植物 -->
            <g><rect x="900" y="420" width="60" height="70" rx="5" fill="#8f6743"/>
              <g fill="#1F3A2E"><ellipse cx="930" cy="378" rx="54" ry="40"/><ellipse cx="898" cy="404" rx="32" ry="24"/></g></g>
            <ellipse cx="300" cy="510" rx="260" ry="26" fill="#2B2620" opacity=".2" filter="url(#tb-b1)"/>
          </svg>
`;

export const ROOM2 = String.raw`
<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="tb-r2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3f34"/><stop offset="1" stop-color="#2B2620"/></linearGradient>
              <linearGradient id="tb-r2d" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2c5478"/><stop offset="1" stop-color="#152f47"/></linearGradient>
              <filter id="tb-b2"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>
            <rect width="1000" height="620" fill="url(#tb-r2w)"/>
            <!-- 壁のレンガ目地 -->
            <g stroke="#5e5044" stroke-width="2" opacity=".5">
              <line x1="0" y1="80" x2="1000" y2="80"/><line x1="0" y1="150" x2="1000" y2="150"/>
              <line x1="0" y1="220" x2="1000" y2="220"/><line x1="0" y1="290" x2="1000" y2="290"/>
              <line x1="0" y1="360" x2="1000" y2="360"/>
            </g>
            <!-- 窓 -->
            <rect x="70" y="70" width="250" height="300" fill="#20364a"/>
            <rect x="70" y="70" width="250" height="300" fill="none" stroke="#1a1510" stroke-width="12"/>
            <g stroke="#1a1510" stroke-width="7"><line x1="195" y1="70" x2="195" y2="370"/><line x1="70" y1="220" x2="320" y2="220"/></g>
            <g fill="#e8c98f" opacity=".5"><rect x="96" y="110" width="10" height="14"/><rect x="130" y="140" width="10" height="14"/><rect x="240" y="120" width="10" height="14"/><rect x="270" y="266" width="10" height="14"/></g>
            <!-- 床 -->
            <rect y="440" width="1000" height="180" fill="#5b3f2a"/>
            <g stroke="#3d2a1c" stroke-width="2" opacity=".5"><line x1="0" y1="490" x2="1000" y2="490"/><line x1="0" y1="546" x2="1000" y2="546"/><line x1="420" y1="440" x2="390" y2="620"/><line x1="760" y1="440" x2="800" y2="620"/></g>
            <!-- ラグ -->
            <g><rect x="330" y="470" width="520" height="120" rx="4" fill="#1F3A2E" opacity=".85"/>
              <g stroke="#7fa07f" stroke-width="2" opacity=".3"><line x1="330" y1="500" x2="850" y2="500"/><line x1="330" y1="560" x2="850" y2="560"/></g></g>
            <!-- デニムソファ -->
            <g>
              <rect x="400" y="300" width="430" height="126" rx="12" fill="url(#tb-r2d)"/>
              <rect x="400" y="372" width="430" height="102" rx="14" fill="#1B3A57"/>
              <rect x="426" y="332" width="176" height="50" rx="9" fill="#31608a"/>
              <rect x="620" y="326" width="176" height="56" rx="9" fill="#3d6a92"/>
              <g stroke="#C8783A" stroke-width="2.5" stroke-dasharray="8 7" opacity=".85"><line x1="408" y1="382" x2="822" y2="382"/><line x1="408" y1="464" x2="822" y2="464"/></g>
              <rect x="418" y="474" width="14" height="36" fill="#2B2620"/><rect x="798" y="474" width="14" height="36" fill="#2B2620"/>
            </g>
            <!-- 鉄脚テーブル -->
            <g><rect x="470" y="524" width="230" height="12" rx="3" fill="#6B4A32"/>
              <g stroke="#2B2620" stroke-width="7"><line x1="492" y1="536" x2="482" y2="590"/><line x1="678" y1="536" x2="688" y2="590"/></g>
              <rect x="530" y="504" width="46" height="20" rx="2" fill="#E4DACA"/></g>
            <!-- ペンダント -->
            <g><line x1="880" y1="0" x2="880" y2="120" stroke="#1a1510" stroke-width="3"/>
              <path d="M834 120 h92 l-22 54 h-48 z" fill="#2B2620"/>
              <circle cx="880" cy="186" r="12" fill="#f0c98d"/>
              <circle cx="880" cy="190" r="60" fill="#f0c98d" opacity=".16" filter="url(#tb-b2)"/></g>
            <!-- ポスター -->
            <g><rect x="620" y="90" width="120" height="160" fill="#E4DACA"/><rect x="636" y="112" width="88" height="94" fill="#1B3A57"/><rect x="636" y="216" width="56" height="8" fill="#2B2620"/></g>
            <ellipse cx="600" cy="520" rx="300" ry="32" fill="#000" opacity=".3" filter="url(#tb-b2)"/>
          </svg>
`;

export const ROOM3 = String.raw`
<svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><filter id="tb-b3"><feGaussianBlur stdDeviation="20"/></filter>
              <linearGradient id="tb-r3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3128"/><stop offset="1" stop-color="#221e19"/></linearGradient></defs>
            <rect width="1000" height="620" fill="url(#tb-r3w)"/>
            <!-- 鉄骨フレーム -->
            <g stroke="#1a1510" stroke-width="10" opacity=".9">
              <line x1="180" y1="0" x2="180" y2="620"/><line x1="820" y1="0" x2="820" y2="620"/>
              <line x1="0" y1="120" x2="1000" y2="120"/>
            </g>
            <g stroke="#4a4038" stroke-width="4" opacity=".8">
              <line x1="180" y1="120" x2="820" y2="430"/><line x1="820" y1="120" x2="180" y2="430"/>
            </g>
            <!-- 大窓 -->
            <rect x="220" y="150" width="560" height="250" fill="#16283a"/>
            <g stroke="#0f1a26" stroke-width="8"><line x1="400" y1="150" x2="400" y2="400"/><line x1="600" y1="150" x2="600" y2="400"/><line x1="220" y1="278" x2="780" y2="278"/></g>
            <g fill="#c8783a" opacity=".45"><rect x="250" y="190" width="12" height="16"/><rect x="300" y="230" width="12" height="16"/><rect x="640" y="200" width="12" height="16"/><rect x="700" y="320" width="12" height="16"/></g>
            <!-- 床 -->
            <rect y="440" width="1000" height="180" fill="#4a3222"/>
            <g stroke="#2B2620" stroke-width="2" opacity=".55"><line x1="0" y1="496" x2="1000" y2="496"/><line x1="0" y1="556" x2="1000" y2="556"/></g>
            <!-- 家具シルエット -->
            <g fill="#2B2620" opacity=".85">
              <rect x="250" y="380" width="200" height="90" rx="5"/>
              <rect x="560" y="360" width="230" height="110" rx="5"/>
            </g>
            <g stroke="#6B4A32" stroke-width="6" opacity=".7">
              <line x1="270" y1="470" x2="270" y2="510"/><line x1="430" y1="470" x2="430" y2="510"/>
              <line x1="580" y1="470" x2="580" y2="516"/><line x1="770" y1="470" x2="770" y2="516"/>
            </g>
            <!-- 工事シート感のストライプ -->
            <g opacity=".14">
              <rect width="1000" height="620" fill="url(#tb-stp)"/>
              <defs><pattern id="tb-stp" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="23" height="46" fill="#E4DACA"/></pattern></defs>
            </g>
            <ellipse cx="500" cy="300" rx="400" ry="200" fill="#000" opacity=".35" filter="url(#tb-b3)"/>
          </svg>
`;

export const EXP_GYOEN = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="tb-e1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fb0c9"/><stop offset="1" stop-color="#d8dcc9"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#tb-e1)"/>
            <g fill="#1f4463" opacity=".35"><rect x="20" y="80" width="60" height="200"/><rect x="470" y="40" width="80" height="240"/><rect x="380" y="120" width="46" height="160"/></g>
            <g fill="#1F3A2E"><ellipse cx="140" cy="270" rx="150" ry="120"/><ellipse cx="430" cy="230" rx="170" ry="130"/><ellipse cx="290" cy="330" rx="180" ry="120"/></g>
            <g fill="#33553F" opacity=".85"><ellipse cx="110" cy="220" rx="70" ry="52"/><ellipse cx="450" cy="180" rx="80" ry="56"/></g>
            <g fill="#4a3222"><rect x="126" y="360" width="30" height="180"/><rect x="418" y="330" width="24" height="210"/></g>
            <rect y="470" width="600" height="330" fill="#3f6b46"/>
            <path d="M0 640 Q300 560 600 636 L600 800 L0 800 Z" fill="#4f7d52"/>
            <g stroke="#2c5033" stroke-width="3" opacity=".4"><path d="M0 700 Q300 640 600 706"/><path d="M0 748 Q300 690 600 754"/></g>
            <!-- 人影 -->
            <g fill="#1F3A2E" opacity=".8"><ellipse cx="200" cy="690" rx="34" ry="12"/><rect x="186" y="630" width="14" height="60" rx="6"/><circle cx="193" cy="620" r="11"/>
              <ellipse cx="248" cy="700" rx="30" ry="11"/><rect x="238" y="646" width="12" height="54" rx="6"/><circle cx="244" cy="638" r="10"/></g>
          </svg>
`;

export const EXP_YOKOCHO = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="800" fill="#152230"/>
            <g fill="#1f3448"><rect x="0" y="0" width="200" height="800"/><rect x="400" y="0" width="200" height="800"/></g>
            <g fill="#0e1a26"><rect x="200" y="0" width="200" height="560"/></g>
            <!-- 縦看板 -->
            <g>
              <rect x="40" y="120" width="52" height="230" fill="#C8783A"/>
              <g fill="#2B2620"><rect x="56" y="146" width="20" height="20"/><rect x="56" y="184" width="20" height="20"/><rect x="56" y="222" width="20" height="20"/><rect x="56" y="260" width="20" height="20"/></g>
              <rect x="500" y="70" width="46" height="290" fill="#1F3A2E"/>
              <g fill="#e8c98f"><rect x="514" y="100" width="18" height="18"/><rect x="514" y="136" width="18" height="18"/><rect x="514" y="172" width="18" height="18"/></g>
              <rect x="440" y="400" width="120" height="40" fill="#E4DACA"/>
            </g>
            <!-- 提灯 -->
            <g fill="#e8c98f"><ellipse cx="150" cy="430" rx="22" ry="28"/><ellipse cx="210" cy="450" rx="20" ry="26"/><ellipse cx="270" cy="428" rx="22" ry="28"/></g>
            <g stroke="#c8783a" stroke-width="2" opacity=".5"><line x1="128" y1="430" x2="292" y2="418"/></g>
            <!-- 濡れた路面 -->
            <rect y="560" width="600" height="240" fill="#0a1420"/>
            <g opacity=".45" fill="#e8c98f"><rect x="140" y="580" width="18" height="180"/><rect x="204" y="580" width="14" height="150"/><rect x="264" y="580" width="18" height="190"/></g>
            <g opacity=".3" fill="#C8783A"><rect x="52" y="580" width="30" height="210"/></g>
            <!-- 人 -->
            <g fill="#050c14"><rect x="330" y="470" width="26" height="120" rx="12"/><circle cx="343" cy="456" r="18"/></g>
          </svg>
`;

export const EXP_KISSA = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="800" fill="#E4DACA"/>
            <rect y="0" width="600" height="360" fill="#6B4A32"/>
            <g stroke="#4a3222" stroke-width="3" opacity=".5"><line x1="0" y1="96" x2="600" y2="96"/><line x1="0" y1="196" x2="600" y2="196"/><line x1="0" y1="288" x2="600" y2="288"/></g>
            <!-- 棚のカップ -->
            <g fill="#E4DACA"><rect x="60" y="46" width="40" height="46" rx="5"/><rect x="130" y="52" width="34" height="40" rx="5"/><rect x="200" y="42" width="44" height="50" rx="5"/></g>
            <g fill="#1B3A57"><rect x="300" y="140" width="52" height="54" rx="4"/><rect x="380" y="146" width="44" height="48" rx="4"/></g>
            <g fill="#1F3A2E"><rect x="470" y="132" width="60" height="62" rx="6"/></g>
            <!-- カウンター -->
            <rect y="360" width="600" height="60" fill="#8f6743"/>
            <rect y="420" width="600" height="380" fill="#d3c6b0"/>
            <!-- カップとケトル -->
            <g>
              <ellipse cx="200" cy="520" rx="96" ry="26" fill="#c2b49c"/>
              <path d="M140 470 h120 l-14 60 h-92 z" fill="#F3EEE3"/>
              <ellipse cx="200" cy="470" rx="60" ry="16" fill="#4a3222"/>
              <path d="M262 486 q34 14 0 32" stroke="#F3EEE3" stroke-width="10" fill="none"/>
            </g>
            <g>
              <rect x="380" y="430" width="120" height="110" rx="10" fill="#2B2620"/>
              <path d="M500 460 q40 30 0 60" stroke="#2B2620" stroke-width="10" fill="none"/>
              <rect x="416" y="404" width="48" height="26" rx="6" fill="#2B2620"/>
            </g>
            <!-- 湯気 -->
            <g stroke="#F3EEE3" stroke-width="5" fill="none" opacity=".55" stroke-linecap="round">
              <path d="M186 440 q-14 -26 6 -44 q18 -18 4 -40"/>
              <path d="M216 446 q-14 -22 6 -40"/>
            </g>
            <rect y="700" width="600" height="100" fill="#6B4A32"/>
          </svg>
`;

export const EXP_SKYLINE = String.raw`
<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs><linearGradient id="tb-e4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d6a92"/><stop offset="1" stop-color="#c2a184"/></linearGradient></defs>
            <rect width="600" height="800" fill="url(#tb-e4)"/>
            <g fill="#152f47"><rect x="0" y="240" width="150" height="560"/><rect x="160" y="150" width="120" height="650"/><rect x="300" y="320" width="90" height="480"/><rect x="410" y="200" width="190" height="600"/></g>
            <g fill="#1B3A57" opacity=".9"><rect x="120" y="380" width="60" height="420"/><rect x="380" y="440" width="60" height="360"/></g>
            <g fill="#e8c98f" opacity=".55">
              <rect x="182" y="200" width="14" height="20"/><rect x="214" y="200" width="14" height="20"/><rect x="246" y="236" width="14" height="20"/>
              <rect x="182" y="272" width="14" height="20"/><rect x="214" y="308" width="14" height="20"/>
              <rect x="440" y="250" width="14" height="20"/><rect x="482" y="250" width="14" height="20"/><rect x="524" y="286" width="14" height="20"/>
              <rect x="440" y="322" width="14" height="20"/><rect x="566" y="358" width="14" height="20"/>
              <rect x="30" y="300" width="14" height="20"/><rect x="72" y="340" width="14" height="20"/>
            </g>
            <!-- 電線 -->
            <g stroke="#0e1a26" stroke-width="3" fill="none" opacity=".8">
              <path d="M0 140 Q300 200 600 130"/><path d="M0 176 Q300 240 600 168"/>
            </g>
            <g fill="#2B2620"><rect x="286" y="90" width="12" height="150"/><rect x="256" y="106" width="72" height="8"/><rect x="262" y="134" width="60" height="8"/></g>
            <!-- 木 -->
            <g fill="#1F3A2E"><ellipse cx="70" cy="700" rx="90" ry="66"/><ellipse cx="540" cy="740" rx="80" ry="56"/></g>
          </svg>
`;

export const SHADOW = String.raw`
<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;z-index:1" aria-hidden="true">
          <rect width="400" height="500" fill="#2B2620"/>
          <g opacity=".5"><rect x="40" y="0" width="26" height="500" fill="#3f372e"/><rect x="140" y="0" width="26" height="500" fill="#3f372e"/><rect x="240" y="0" width="26" height="500" fill="#3f372e"/><rect x="340" y="0" width="26" height="500" fill="#3f372e"/></g>
          <g opacity=".85"><path d="M0 0 L400 0 L400 500 L0 500 Z" fill="url(#tb-shdw)"/>
            <defs><linearGradient id="tb-shdw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8c98f" stop-opacity=".22"/><stop offset=".45" stop-color="#2B2620" stop-opacity=".2"/><stop offset="1" stop-color="#0d0b09" stop-opacity=".8"/></linearGradient></defs></g>
          <g opacity=".5" fill="#0d0b09"><path d="M60 120 L220 60 L300 200 L120 280 Z"/><path d="M180 340 L360 300 L400 440 L200 480 Z"/></g>
        </svg>
`;

export const MAP = String.raw`
<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="900" height="700" fill="#E4DACA"/>
          <!-- 御苑 -->
          <path d="M470 250 q120 -60 250 10 q80 60 60 190 q-30 150 -220 160 q-180 10 -210 -140 q-24 -140 120 -220 Z" fill="#1F3A2E" opacity=".9"/>
          <g fill="#33553F" opacity=".7"><ellipse cx="620" cy="360" rx="80" ry="56"/><ellipse cx="720" cy="480" rx="60" ry="44"/><ellipse cx="540" cy="470" rx="66" ry="46"/></g>
          <!-- 街区 -->
          <g fill="#d3c6b0">
            <rect x="30" y="60" width="150" height="120"/><rect x="200" y="60" width="120" height="120"/>
            <rect x="340" y="60" width="180" height="90"/><rect x="30" y="200" width="150" height="140"/>
            <rect x="200" y="200" width="120" height="140"/><rect x="340" y="170" width="100" height="170"/>
            <rect x="30" y="360" width="110" height="130"/><rect x="160" y="360" width="160" height="130"/>
            <rect x="30" y="510" width="150" height="150"/><rect x="200" y="510" width="140" height="150"/>
            <rect x="360" y="510" width="120" height="150"/>
          </g>
          <!-- 道路 -->
          <g stroke="#F3EEE3" stroke-width="18" stroke-linecap="square">
            <line x1="0" y1="192" x2="900" y2="192"/><line x1="0" y1="350" x2="900" y2="350"/>
            <line x1="0" y1="500" x2="900" y2="500"/>
            <line x1="190" y1="0" x2="190" y2="700"/><line x1="330" y1="0" x2="330" y2="700"/>
            <line x1="490" y1="0" x2="490" y2="700"/>
          </g>
          <g stroke="#c2b49c" stroke-width="1.5" stroke-dasharray="6 8">
            <line x1="0" y1="192" x2="900" y2="192"/><line x1="330" y1="0" x2="330" y2="700"/>
          </g>
          <!-- 甲州街道っぽい太い道 -->
          <g><line x1="0" y1="640" x2="900" y2="600" stroke="#c2b49c" stroke-width="26"/>
            <line x1="0" y1="640" x2="900" y2="600" stroke="#F3EEE3" stroke-width="18"/></g>
          <!-- 鉄道 -->
          <g><line x1="0" y1="96" x2="900" y2="66" stroke="#2B2620" stroke-width="7"/>
            <line x1="0" y1="96" x2="900" y2="66" stroke="#E4DACA" stroke-width="3" stroke-dasharray="10 10"/></g>
          <!-- 駅 -->
          <g>
            <rect x="96" y="60" width="70" height="34" rx="4" fill="#1B3A57"/>
            <text x="131" y="83" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="#F3EEE3">JR</text>
            <circle cx="470" cy="330" r="11" fill="#F3EEE3" stroke="#1F3A2E" stroke-width="5"/>
            <text x="470" y="308" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#2B2620" letter-spacing="1">GYOENMAE</text>
            <circle cx="196" cy="500" r="10" fill="#F3EEE3" stroke="#6B4A32" stroke-width="5"/>
            <text x="196" y="478" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#2B2620" letter-spacing="1">SHINJUKU 3</text>
          </g>
          <text x="600" y="452" font-family="Instrument Serif, serif" font-style="italic" font-size="36" fill="#E4DACA" opacity=".9">Shinjuku Gyoen</text>
          <text x="600" y="484" font-family="IBM Plex Mono, monospace" font-size="12" fill="#7fa07f" letter-spacing="3">58.3 HA OF QUIET</text>
          <!-- 徒歩ルート -->
          <path d="M366 386 L470 386 L470 340" fill="none" stroke="#C8783A" stroke-width="3" stroke-dasharray="7 8"/>
        </svg>
`;

export const HOOD_CITY = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#1B3A57"/>
              <g fill="#152f47"><rect x="0" y="80" width="90" height="170"/><rect x="110" y="40" width="70" height="210"/><rect x="200" y="110" width="60" height="140"/><rect x="280" y="60" width="120" height="190"/></g>
              <g fill="#e8c98f" opacity=".55"><rect x="126" y="70" width="10" height="14"/><rect x="152" y="100" width="10" height="14"/><rect x="304" y="90" width="10" height="14"/><rect x="352" y="130" width="10" height="14"/></g>
              <g fill="#1F3A2E"><ellipse cx="50" cy="230" rx="70" ry="40"/></g>
            </svg>
`;

export const HOOD_PARK = String.raw`
<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="250" fill="#33553F"/>
              <g fill="#1F3A2E"><ellipse cx="90" cy="90" rx="120" ry="86"/><ellipse cx="300" cy="70" rx="130" ry="80"/></g>
              <rect y="160" width="400" height="90" fill="#4f7d52"/>
              <g fill="#4a3222"><rect x="80" y="140" width="20" height="60"/><rect x="290" y="130" width="16" height="60"/></g>
              <path d="M0 210 Q200 176 400 214 L400 250 L0 250 Z" fill="#3f6b46"/>
            </svg>
`;
