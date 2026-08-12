/* Auto-extracted verbatim from docs/top-page-mock-10.html, with every SVG id
   namespaced `dc-`: the other alternative designs sit in the same document
   and short ids (#doma-g, #grit, #pane) would otherwise resolve to whichever
   block the browser met first.

   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static
   authored markup, and hand-converting several hundred SVG attributes to JSX
   casing would only add transcription risk.
   Re-run docs/gen-doma-assets.py if the mock changes. */

export const HERO = String.raw`
<svg viewBox="0 0 640 500" aria-hidden="true">
        
        <defs>
          <linearGradient id="dc-doma-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#B39B80"/><stop offset="1" stop-color="#9B8368"/>
          </linearGradient>
          <filter id="dc-grit"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" seed="7"/>
            <feColorMatrix type="matrix" values="0 0 0 0 .36 0 0 0 0 .29 0 0 0 0 .2 .8 .4 .2 0 -.5"/></filter>
        </defs>

        <rect width="640" height="500" fill="#F2EDE1"/>

        <!-- 障子 — 和紙のパネルと格子。庭の樹は紙越しにぼんやり透ける -->
        <rect x="34" y="28" width="572" height="272" rx="6" fill="#FAF6EC"/>
        <g opacity=".32">
          <circle cx="176" cy="196" r="78" fill="#5C7052"/>
          <circle cx="300" cy="172" r="96" fill="#5C7052"/>
          <circle cx="430" cy="200" r="72" fill="#5C7052"/>
          <circle cx="530" cy="216" r="52" fill="#5C7052"/>
        </g>
        <g stroke="#8B7355" stroke-width="5" fill="none">
          <rect x="34" y="28" width="572" height="272" rx="6"/>
          <path d="M177 28V300M320 28V300M463 28V300M34 119H606M34 210H606"/>
        </g>

        <!-- 三和土の床 -->
        <rect x="0" y="300" width="640" height="200" fill="url(#dc-doma-g)"/>
        <rect x="0" y="300" width="640" height="200" filter="url(#dc-grit)" opacity=".38" style="mix-blend-mode:multiply"/>
        <!-- 障子から落ちる光 -->
        <path d="M34 300 L606 300 L520 500 L0 500 Z" fill="#FAF6EC" opacity=".14"/>
        <!-- 上がり框 -->
        <rect x="0" y="300" width="640" height="13" fill="#6F5C48"/>

        <!-- 三つの器。この design の主題なので、床に大きく置く -->
        <!-- 01 織部 — 平鉢 -->
        <g>
          <path d="M78 392C78 452 104 464 152 464C200 464 226 452 226 392Z" fill="#5C7052"/>
          <ellipse cx="152" cy="392" rx="74" ry="15" fill="#6B8060"/>
          <ellipse cx="152" cy="392" rx="57" ry="10" fill="#3E4F36" opacity=".55"/>
        </g>
        <!-- 02 飴釉 — 深鉢に植栽 -->
        <g>
          <g fill="#5C7052">
            <circle cx="292" cy="318" r="30"/><circle cx="336" cy="300" r="38"/><circle cx="372" cy="326" r="26"/>
          </g>
          <rect x="326" y="330" width="8" height="34" fill="#3A332C"/>
          <path d="M272 356C272 448 292 464 330 464C368 464 388 448 388 356Z" fill="#9A5622"/>
          <ellipse cx="330" cy="356" rx="58" ry="13" fill="#A8632C"/>
          <ellipse cx="330" cy="356" rx="44" ry="9" fill="#5A2F10" opacity=".5"/>
        </g>
        <!-- 03 鉄釉 — 壺 -->
        <g>
          <path d="M446 400C446 456 468 466 500 466C532 466 554 456 554 400Z" fill="#3A332C"/>
          <ellipse cx="500" cy="400" rx="54" ry="12" fill="#484037"/>
          <ellipse cx="500" cy="400" rx="40" ry="8" fill="#1F1B17" opacity=".6"/>
        </g>
      </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 560 420" aria-hidden="true">
          
          <rect width="560" height="420" fill="#FAF6EC"/>
          <!-- 窓と庭 -->
          <rect x="316" y="40" width="204" height="200" rx="6" fill="#EDE7D8"/>
          <g opacity=".8">
            <circle cx="378" cy="176" r="52" fill="#5C7052"/>
            <circle cx="452" cy="158" r="64" fill="#5C7052"/>
            <circle cx="504" cy="184" r="40" fill="#5C7052"/>
          </g>
          <g stroke="#8B7355" stroke-width="5" fill="none">
            <rect x="316" y="40" width="204" height="200" rx="6"/>
            <path d="M418 40V240M316 140H520"/>
          </g>
          <!-- 床 -->
          <rect x="0" y="300" width="560" height="120" fill="#A99177"/>
          <rect x="0" y="300" width="560" height="10" fill="#6F5C48"/>
          <!-- ソファ -->
          <g>
            <rect x="52" y="216" width="240" height="46" rx="20" fill="#6F5C48"/>
            <rect x="52" y="250" width="240" height="60" rx="14" fill="#7D6952"/>
            <rect x="72" y="222" width="62" height="42" rx="14" fill="#5C7052"/>
            <rect x="146" y="224" width="58" height="40" rx="14" fill="#9A5622"/>
            <rect x="62" y="308" width="18" height="26" rx="6" fill="#3A332C"/>
            <rect x="266" y="308" width="18" height="26" rx="6" fill="#3A332C"/>
          </g>
          <!-- 鉢と器 -->
          <g>
            <path d="M416 268c0 0 5 44 16 44h28c11 0 16-44 16-44z" fill="#9A5622"/>
            <g fill="#5C7052"><circle cx="432" cy="244" r="21"/><circle cx="464" cy="234" r="26"/><circle cx="488" cy="250" r="18"/></g>
          </g>
          <path d="M330 334c0 0 3 24 9 24h16c6 0 9-24 9-24z" fill="#3A332C"/>
          <ellipse cx="347" cy="334" rx="17" ry="4.5" fill="#484037"/>
        </svg>
`;

export const EXP_GYOEN = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#FAF6EC"/>
          <circle cx="44" cy="40" r="26" fill="#5C7052"/><circle cx="76" cy="48" r="20" fill="#5C7052"/>
          <rect x="0" y="66" width="120" height="18" fill="#A99177"/>
          <rect x="42" y="60" width="5" height="10" fill="#3A332C"/>
        </svg>
`;

export const EXP_KISSA = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#FAF6EC"/>
          <path d="M34 34c0 0 4 30 14 30h20c10 0 14-30 14-30z" fill="#9A5622"/>
          <ellipse cx="58" cy="34" rx="24" ry="6" fill="#A8632C"/>
          <path d="M82 42h10a8 8 0 010 16h-8" fill="none" stroke="#9A5622" stroke-width="5"/>
          <rect x="24" y="66" width="72" height="7" rx="3" fill="#8B7355"/>
          <path d="M48 20c0 5-5 5-5 10M62 18c0 5-5 5-5 10" stroke="#A99177" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        </svg>
`;

export const EXP_LAUNDRY = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#FAF6EC"/>
          <rect x="32" y="12" width="56" height="60" rx="10" fill="#6F5C48"/>
          <circle cx="60" cy="46" r="17" fill="#FAF6EC"/>
          <circle cx="60" cy="46" r="10" fill="#5C7052"/>
          <rect x="40" y="20" width="12" height="6" rx="3" fill="#9A5622"/>
        </svg>
`;

export const EXP_YOKOCHO = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#FAF6EC"/>
          <rect x="14" y="26" width="28" height="46" rx="4" fill="#6F5C48"/>
          <rect x="50" y="14" width="24" height="58" rx="4" fill="#9A5622"/>
          <rect x="82" y="34" width="24" height="38" rx="4" fill="#3A332C"/>
          <g fill="#FAF6EC" opacity=".72"><rect x="20" y="34" width="7" height="7" rx="2"/><rect x="30" y="34" width="7" height="7" rx="2"/><rect x="20" y="48" width="7" height="7" rx="2"/></g>
          <circle cx="62" cy="28" r="6" fill="#F2EDE1"/>
        </svg>
`;

export const EXP_SKYLINE = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#FAF6EC"/>
          <circle cx="88" cy="24" r="15" fill="#9A5622"/>
          <rect x="10" y="38" width="20" height="34" rx="4" fill="#6F5C48"/>
          <rect x="38" y="26" width="17" height="46" rx="4" fill="#6F5C48"/>
          <circle cx="76" cy="58" r="18" fill="#5C7052"/>
          <path d="M0 20h120" stroke="#A99177" stroke-width="2.5"/>
        </svg>
`;

export const BOWL_ORIBE = String.raw`
<svg viewBox="0 0 120 100" aria-hidden="true">
            <path d="M20 30c0 0 8 52 24 52h32c16 0 24-52 24-52z" fill="rgba(250,246,236,.9)"/>
            <ellipse cx="60" cy="30" rx="40" ry="10" fill="rgba(250,246,236,.62)"/>
            <ellipse cx="60" cy="30" rx="30" ry="7" fill="rgba(38,34,31,.22)"/>
          </svg>
`;

export const BOWL_AME = String.raw`
<svg viewBox="0 0 120 100" aria-hidden="true">
            <path d="M26 26c0 0 6 56 22 56h24c16 0 22-56 22-56z" fill="rgba(250,246,236,.9)"/>
            <ellipse cx="60" cy="26" rx="34" ry="9" fill="rgba(250,246,236,.62)"/>
            <ellipse cx="60" cy="26" rx="25" ry="6" fill="rgba(38,34,31,.22)"/>
          </svg>
`;

export const BOWL_TETSU = String.raw`
<svg viewBox="0 0 120 100" aria-hidden="true">
            <path d="M24 34c0 0 10 48 24 48h24c14 0 24-48 24-48z" fill="rgba(250,246,236,.88)"/>
            <ellipse cx="60" cy="34" rx="36" ry="9" fill="rgba(250,246,236,.6)"/>
            <ellipse cx="60" cy="34" rx="27" ry="6" fill="rgba(38,34,31,.24)"/>
          </svg>
`;

export const BOWL_DOMA = String.raw`
<svg viewBox="0 0 120 100" aria-hidden="true">
            <path d="M10 40h100v34a8 8 0 01-8 8H18a8 8 0 01-8-8z" fill="rgba(38,34,31,.26)"/>
            <path d="M10 40h100v6H10z" fill="rgba(250,246,236,.34)"/>
            <g>
              <circle cx="32" cy="58" r="4.4" fill="rgba(250,246,236,.5)"/>
              <circle cx="58" cy="70" r="3.6" fill="rgba(38,34,31,.36)"/>
              <circle cx="80" cy="55" r="5" fill="rgba(250,246,236,.4)"/>
              <circle cx="97" cy="70" r="3.2" fill="rgba(38,34,31,.32)"/>
              <circle cx="44" cy="74" r="2.6" fill="rgba(250,246,236,.36)"/>
              <circle cx="68" cy="52" r="2.4" fill="rgba(38,34,31,.3)"/>
            </g>
          </svg>
`;

export const MAP = String.raw`
<svg viewBox="0 0 560 420" aria-hidden="true">
          
          <rect width="560" height="420" fill="#FAF6EC"/>
          <path d="M296 92 h240 v256 h-198 c-30 0 -42 -22 -42 -52 z" fill="#5C7052" opacity=".82"/>
          <g stroke="#A99177" stroke-width="14" fill="none" stroke-linecap="round">
            <path d="M0 152 H560"/><path d="M0 306 H560"/><path d="M190 0 V420"/><path d="M96 0 V420"/>
          </g>
          <rect x="106" y="200" width="68" height="68" rx="10" fill="#9A5622"/>
          <circle cx="140" cy="234" r="10" fill="#FAF6EC"/>
          <g fill="#26221F" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="1.4">
            <text x="106" y="190">K3V — HERE</text>
            <text x="12" y="336">SHINJUKU 3-CHOME</text>
          </g>
          <text x="326" y="78" fill="#3E4F36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="1.4">SHINJUKU GYOEN</text>
        </svg>
`;
