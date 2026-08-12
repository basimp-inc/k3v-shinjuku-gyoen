/* Auto-extracted verbatim from docs/top-page-mock-6.html, with every SVG id
   namespaced `dn-`: the Gyoen Green defs are in the same document and share
   11 ids (sc-canopy, sc-room-a, wallA, …), and duplicate ids would make <use>
   resolve to whichever block comes first.

   Kept as a raw string and injected with dangerouslySetInnerHTML: it is static
   authored markup, and hand-converting ~250 SVG attributes to JSX casing would
   only add transcription risk. Re-run docs/gen-denim-assets.py if the mock changes. */
export const DENIM_SVG_DEFS = String.raw`
<defs>
  <!-- ---------- denim weave: pale chambray (ref image 1) ---------- -->
  <pattern id="dn-twillPale" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
    <rect width="6" height="6" fill="#A8C6D9"/>
    <rect width="6" height="2" fill="#CBDFEB"/>
    <rect y="3" width="6" height="1" fill="#7FA5BE"/>
  </pattern>
  <!-- ---------- denim weave: raw indigo (ref image 2) ---------- -->
  <pattern id="dn-twillIndigo" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
    <rect width="6" height="6" fill="#2B3E52"/>
    <rect width="6" height="2" fill="#43617E"/>
    <rect y="3" width="6" height="1" fill="#182432"/>
  </pattern>
  <!-- slub: the irregular thickness that makes denim look woven, not printed -->
  <filter id="dn-slub" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.045 0.7" numOctaves="3" seed="12" stitchTiles="stitch"/>
    <feColorMatrix values="0 0 0 0 .55  0 0 0 0 .62  0 0 0 0 .70  .5 .5 .5 0 0"/>
  </filter>

  <!-- soft focus for depth of field -->
  <filter id="dn-soft"   x="-12%" y="-12%" width="124%" height="124%"><feGaussianBlur stdDeviation="9"/></filter>
  <filter id="dn-soft-s" x="-12%" y="-12%" width="124%" height="124%"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="dn-soft-l" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="26"/></filter>

  <!-- ============ HERO: gyoen canopy against open sky ============ -->
  <symbol id="dn-sc-canopy" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
    <defs>
      <linearGradient id="dn-skyA" x1="0" y1="0" x2=".18" y2="1">
        <stop offset="0"   stop-color="#8FB4CE"/>
        <stop offset=".42" stop-color="#A8C6D9"/>
        <stop offset=".78" stop-color="#C9DEEA"/>
        <stop offset="1"   stop-color="#D9E7DC"/>
      </linearGradient>
      <radialGradient id="dn-sunA" cx=".76" cy=".22" r=".46">
        <stop offset="0" stop-color="#FCF6E2" stop-opacity=".9"/>
        <stop offset="1" stop-color="#FCF6E2" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#dn-skyA)"/>
    <circle cx="1210" cy="200" r="440" fill="url(#dn-sunA)"/>
    <!-- far treeline, hazed back -->
    <g fill="#6D8C5C" opacity=".45" filter="url(#dn-soft)">
      <ellipse cx="200" cy="690" rx="380" ry="185"/>
      <ellipse cx="720" cy="742" rx="430" ry="170"/>
      <ellipse cx="1330" cy="700" rx="400" ry="195"/>
    </g>
    <!-- tokyo skyline, only just visible through the gap: this is a city park -->
    <g fill="#7FA5BE" opacity=".5">
      <rect x="1090" y="452" width="52" height="230"/>
      <rect x="1152" y="490" width="34" height="192"/>
      <rect x="1196" y="430" width="68" height="252"/>
      <rect x="1274" y="500" width="40" height="182"/>
      <rect x="330" y="486" width="44" height="200"/>
      <rect x="384" y="516" width="28" height="170"/>
    </g>
    <!-- mid canopy — kept to the corners so the sky, not the green, is the subject -->
    <g fill="#4A6B3E" opacity=".92">
      <ellipse cx="60"   cy="40"  rx="290" ry="140"/>
      <ellipse cx="340"  cy="-40" rx="240" ry="120"/>
      <ellipse cx="-40"  cy="300" rx="170" ry="180"/>
      <ellipse cx="1600" cy="60"  rx="260" ry="150"/>
      <ellipse cx="1330" cy="-46" rx="230" ry="110"/>
    </g>
    <!-- foreground leaves, out of focus -->
    <g fill="#33502F" filter="url(#dn-soft)">
      <ellipse cx="-30"  cy="-10" rx="230" ry="130"/>
      <ellipse cx="1620" cy="660" rx="160" ry="250"/>
      <ellipse cx="820"  cy="-110" rx="330" ry="105"/>
    </g>
    <!-- lawn -->
    <path d="M0 900 L0 806 Q320 764 640 800 T1190 786 T1600 822 L1600 900 Z" fill="#6D8C5C"/>
    <path d="M0 900 L0 852 Q400 820 800 854 T1600 856 L1600 900 Z" fill="#4A6B3E"/>
    <!-- light shafts -->
    <g opacity=".26">
      <path d="M1000 0 L1215 0 L790 900 L650 900 Z" fill="#FBFAF5" filter="url(#dn-soft)"/>
      <path d="M1310 0 L1395 0 L1105 900 L1030 900 Z" fill="#FBFAF5" filter="url(#dn-soft)"/>
    </g>
    <!-- a few blown petals: the pink is barely there, on purpose -->
    <g fill="#E6B8CC" opacity=".8">
      <ellipse cx="1120" cy="300" rx="7" ry="5" transform="rotate(20 1120 300)"/>
      <ellipse cx="1042" cy="392" rx="6" ry="4" transform="rotate(-25 1042 392)"/>
      <ellipse cx="1240" cy="430" rx="5" ry="4" transform="rotate(40 1240 430)"/>
      <ellipse cx="960"  cy="500" rx="6" ry="4" transform="rotate(10 960 500)"/>
      <ellipse cx="1330" cy="330" rx="5" ry="3" transform="rotate(-15 1330 330)"/>
    </g>
    <ellipse cx="880" cy="800" rx="640" ry="86" fill="#FBFAF5" opacity=".16" filter="url(#dn-soft)"/>
  </symbol>

  <!-- ============ CONCEPT: entrance / doorway with plants ============ -->
  <symbol id="dn-sc-entry" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 820">
    <defs>
      <linearGradient id="dn-facade" x1="0" y1="0" x2="1" y2=".2">
        <stop offset="0" stop-color="#DEE9F0"/><stop offset="1" stop-color="#BCD2E0"/>
      </linearGradient>
      <linearGradient id="dn-doorG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3F6238"/><stop offset="1" stop-color="#2A4425"/>
      </linearGradient>
    </defs>
    <rect width="600" height="820" fill="url(#dn-facade)"/>
    <!-- afternoon shadow across the wall -->
    <path d="M0 0 L330 0 L120 820 L0 820 Z" fill="#7FA5BE" opacity=".26"/>
    <!-- tile joints -->
    <g stroke="#A8C6D9" stroke-width="1.4" opacity=".7">
      <path d="M0 120 H600 M0 260 H600 M0 400 H600 M0 540 H600"/>
      <path d="M150 0 V820 M300 0 V820 M450 0 V820"/>
    </g>
    <!-- doorway -->
    <rect x="196" y="230" width="230" height="470" fill="url(#dn-doorG)"/>
    <rect x="210" y="244" width="202" height="442" fill="none" stroke="#6D8C5C" stroke-width="2" opacity=".55"/>
    <rect x="236" y="292" width="150" height="230" fill="#C9DEEA" opacity=".34"/>
    <circle cx="396" cy="470" r="7" fill="#93B23E"/>
    <!-- canopy over the door -->
    <path d="M170 216 H452 L436 236 H186 Z" fill="#2B3E52"/>
    <!-- house number patch -->
    <rect x="452" y="300" width="64" height="86" fill="#2B3E52"/>
    <rect x="458" y="306" width="52" height="74" fill="none" stroke="#E8DCC2" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="484" y="352" text-anchor="middle" font-family="Archivo,Arial" font-size="26" font-weight="700" fill="#C6DBE7">K3V</text>
    <!-- planters -->
    <g>
      <rect x="86" y="628" width="92" height="82" fill="#7A5B3E"/>
      <rect x="86" y="628" width="92" height="10" fill="#8E6C4A"/>
      <g fill="#4A6B3E">
        <ellipse cx="106" cy="596" rx="34" ry="46" transform="rotate(-18 106 596)"/>
        <ellipse cx="150" cy="576" rx="30" ry="52" transform="rotate(14 150 576)"/>
        <ellipse cx="128" cy="542" rx="26" ry="44"/>
      </g>
      <g fill="#6D8C5C">
        <ellipse cx="118" cy="574" rx="18" ry="34" transform="rotate(-8 118 574)"/>
      </g>
    </g>
    <g>
      <rect x="448" y="648" width="74" height="64" fill="#5A6E5C"/>
      <g fill="#33502F">
        <ellipse cx="470" cy="618" rx="26" ry="38" transform="rotate(-22 470 618)"/>
        <ellipse cx="502" cy="606" rx="22" ry="44" transform="rotate(16 502 606)"/>
      </g>
    </g>
    <!-- ground -->
    <rect y="700" width="600" height="120" fill="#B4C8D4"/>
    <rect y="700" width="600" height="6" fill="#7FA5BE" opacity=".6"/>
    <g stroke="#9FB6C4" stroke-width="1.6" opacity=".8">
      <path d="M0 748 H600 M0 790 H600"/>
    </g>
    <!-- bicycle: lived-in, not styled -->
    <g stroke="#2B3E52" stroke-width="4" fill="none" opacity=".85">
      <circle cx="126" cy="756" r="30"/><circle cx="228" cy="756" r="30"/>
      <path d="M126 756 L170 704 L228 756 M170 704 L206 704 M154 726 L196 726"/>
      <path d="M166 700 L152 690"/>
    </g>
    <ellipse cx="300" cy="812" rx="280" ry="16" fill="#2B3E52" opacity=".1"/>
  </symbol>

  <!-- ============ ROOM 01 — UNICO / natural light, pale oak ============ -->
  <symbol id="dn-sc-room-a" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="dn-wallA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F3F0E7"/><stop offset="1" stop-color="#DFE3DA"/>
      </linearGradient>
      <linearGradient id="dn-glowA" x1=".1" y1="0" x2="1" y2=".9">
        <stop offset="0" stop-color="#FBFAF5" stop-opacity=".95"/>
        <stop offset="1" stop-color="#FBFAF5" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#dn-wallA)"/>
    <!-- window with gyoen green outside -->
    <rect x="640" y="70" width="470" height="430" fill="#C9DEEA"/>
    <g fill="#6D8C5C" opacity=".9">
      <ellipse cx="760" cy="430" rx="150" ry="120"/>
      <ellipse cx="960" cy="400" rx="180" ry="140"/>
      <ellipse cx="1090" cy="460" rx="120" ry="110"/>
    </g>
    <g fill="#4A6B3E" opacity=".7"><ellipse cx="880" cy="180" rx="200" ry="110"/></g>
    <g stroke="#F3F0E7" stroke-width="12" fill="none">
      <rect x="640" y="70" width="470" height="430"/>
      <path d="M875 70 V500 M640 285 H1110"/>
    </g>
    <!-- light pouring in -->
    <path d="M640 70 L1110 70 L820 800 L300 800 Z" fill="url(#dn-glowA)" opacity=".7"/>
    <!-- floor -->
    <rect y="560" width="1200" height="240" fill="#D8C8AC"/>
    <g stroke="#C2AE8E" stroke-width="2" opacity=".8">
      <path d="M0 606 H1200 M0 664 H1200 M0 726 H1200"/>
      <path d="M180 560 V800 M520 560 V800 M900 560 V800"/>
    </g>
    <!-- rug -->
    <path d="M120 640 L820 640 L900 790 L60 790 Z" fill="#EDE7DA"/>
    <path d="M150 660 L800 660 L862 770 L100 770 Z" fill="none" stroke="#A8C6D9" stroke-width="4"/>
    <!-- sofa, pale oak + linen -->
    <g>
      <rect x="130" y="430" width="420" height="150" rx="10" fill="#E3DCCB"/>
      <rect x="130" y="404" width="420" height="66" rx="14" fill="#EDE7DA"/>
      <rect x="146" y="576" width="24" height="46" fill="#B99A6E"/>
      <rect x="510" y="576" width="24" height="46" fill="#B99A6E"/>
      <!-- denim cushion: the material shows up indoors too -->
      <rect x="176" y="412" width="104" height="88" rx="8" fill="url(#dn-twillPale)"/>
      <rect x="300" y="418" width="96" height="82" rx="8" fill="#E6B8CC" opacity=".85"/>
    </g>
    <!-- low table + plant -->
    <g>
      <rect x="330" y="620" width="260" height="14" rx="4" fill="#C8A87A"/>
      <rect x="348" y="634" width="12" height="58" fill="#B0905F"/>
      <rect x="560" y="634" width="12" height="58" fill="#B0905F"/>
      <rect x="404" y="596" width="46" height="26" rx="3" fill="#4A6B3E"/>
      <circle cx="500" cy="608" r="14" fill="#FBFAF5"/>
    </g>
    <g>
      <rect x="960" y="600" width="86" height="96" rx="6" fill="#C9B393"/>
      <g fill="#4A6B3E">
        <ellipse cx="980" cy="546" rx="34" ry="58" transform="rotate(-20 980 546)"/>
        <ellipse cx="1028" cy="524" rx="30" ry="66" transform="rotate(16 1028 524)"/>
        <ellipse cx="1004" cy="500" rx="26" ry="52"/>
      </g>
    </g>
    <!-- wall art -->
    <rect x="180" y="150" width="180" height="220" fill="#FBFAF5"/>
    <rect x="196" y="166" width="148" height="188" fill="#A8C6D9" opacity=".55"/>
    <path d="M196 300 Q270 240 344 300 L344 354 L196 354 Z" fill="#4A6B3E" opacity=".55"/>
    <circle cx="310" cy="206" r="18" fill="#E6B8CC"/>
    <ellipse cx="600" cy="792" rx="520" ry="18" fill="#8E7C5E" opacity=".18"/>
  </symbol>

  <!-- ============ ROOM 02 — JOURNAL STANDARD FURNITURE / urban vintage ============ -->
  <symbol id="dn-sc-room-b" preserveAspectRatio="xMidYMid slice" viewBox="0 0 900 1050">
    <defs>
      <linearGradient id="dn-wallB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4E6274"/><stop offset="1" stop-color="#33455A"/>
      </linearGradient>
      <linearGradient id="dn-lampB" x1=".5" y1="0" x2=".5" y2="1">
        <stop offset="0" stop-color="#FBE9C4" stop-opacity=".85"/>
        <stop offset="1" stop-color="#FBE9C4" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="900" height="1050" fill="url(#dn-wallB)"/>
    <!-- raw denim feature wall -->
    <rect x="0" y="0" width="900" height="640" fill="url(#dn-twillIndigo)" opacity=".9"/>
    <rect x="0" y="0" width="900" height="640" filter="url(#dn-slub)" opacity=".2"/>
    <!-- window, evening city -->
    <rect x="520" y="120" width="330" height="330" fill="#20334A"/>
    <g fill="#A8C6D9" opacity=".55">
      <rect x="556" y="300" width="40" height="150"/><rect x="612" y="248" width="52" height="202"/>
      <rect x="680" y="320" width="36" height="130"/><rect x="732" y="270" width="58" height="180"/>
    </g>
    <g fill="#93B23E" opacity=".9">
      <rect x="566" y="330" width="6" height="6"/><rect x="628" y="292" width="6" height="6"/>
      <rect x="748" y="318" width="6" height="6"/>
    </g>
    <g stroke="#2B3E52" stroke-width="12" fill="none">
      <rect x="520" y="120" width="330" height="330"/><path d="M685 120 V450"/>
    </g>
    <!-- floor -->
    <rect y="640" width="900" height="410" fill="#6B4A31"/>
    <g stroke="#553826" stroke-width="3" opacity=".85">
      <path d="M0 712 H900 M0 800 H900 M0 900 H900 M0 1000 H900"/>
      <path d="M220 640 V1050 M540 640 V1050 M760 640 V1050"/>
    </g>
    <!-- leather sofa -->
    <g>
      <rect x="70" y="560" width="420" height="180" rx="14" fill="#8A5A3C"/>
      <rect x="70" y="524" width="420" height="70" rx="18" fill="#9C6845"/>
      <rect x="94" y="530" width="120" height="62" rx="10" fill="url(#dn-twillIndigo)"/>
      <rect x="232" y="534" width="110" height="58" rx="10" fill="#E6B8CC" opacity=".7"/>
      <rect x="92" y="736" width="22" height="42" fill="#3A2418"/>
      <rect x="450" y="736" width="22" height="42" fill="#3A2418"/>
    </g>
    <!-- iron shelf + objects -->
    <g>
      <rect x="560" y="560" width="290" height="10" fill="#2B3E52"/>
      <rect x="560" y="680" width="290" height="10" fill="#2B3E52"/>
      <rect x="572" y="560" width="8" height="130" fill="#22303F"/>
      <rect x="832" y="560" width="8" height="130" fill="#22303F"/>
      <rect x="600" y="506" width="24" height="54" fill="#93B23E" opacity=".9"/>
      <rect x="636" y="518" width="30" height="42" fill="#C9DEEA" opacity=".7"/>
      <rect x="690" y="500" width="18" height="60" fill="#E6B8CC" opacity=".8"/>
      <g fill="#6D8C5C"><ellipse cx="790" cy="516" rx="26" ry="44"/></g>
      <rect x="778" y="530" width="26" height="30" fill="#8A5A3C"/>
    </g>
    <!-- pendant lamp -->
    <g>
      <path d="M300 0 V180" stroke="#22303F" stroke-width="4"/>
      <path d="M250 180 H350 L326 236 H274 Z" fill="#2B3E52"/>
      <ellipse cx="300" cy="238" rx="26" ry="8" fill="#FBE9C4"/>
      <path d="M232 238 H368 L440 640 H160 Z" fill="url(#dn-lampB)" opacity=".5"/>
    </g>
    <!-- rug -->
    <path d="M120 800 L640 800 L700 980 L60 980 Z" fill="#3F5C6E" opacity=".85"/>
    <path d="M160 826 L610 826 L654 952 L110 952 Z" fill="none" stroke="#A8C6D9" stroke-width="4" opacity=".6"/>
    <ellipse cx="450" cy="1030" rx="400" ry="18" fill="#000" opacity=".16"/>
  </symbol>

  <!-- ============ ROOM 03 — CRASH GATE / industrial, in preparation ============ -->
  <symbol id="dn-sc-room-c" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 700">
    <defs>
      <linearGradient id="dn-wallC" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7C8A86"/><stop offset="1" stop-color="#5B6A66"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="700" fill="url(#dn-wallC)"/>
    <!-- concrete tie holes -->
    <g fill="#4C5A56" opacity=".7">
      <circle cx="180" cy="150" r="6"/><circle cx="480" cy="150" r="6"/><circle cx="780" cy="150" r="6"/>
      <circle cx="180" cy="400" r="6"/><circle cx="480" cy="400" r="6"/><circle cx="780" cy="400" r="6"/>
    </g>
    <g stroke="#697975" stroke-width="2" opacity=".8"><path d="M330 0 V520 M630 0 V520 M930 0 V520"/></g>
    <!-- steel sash window -->
    <rect x="820" y="90" width="330" height="380" fill="#33502F" opacity=".8"/>
    <g fill="#4A6B3E"><ellipse cx="900" cy="420" rx="120" ry="100"/><ellipse cx="1080" cy="400" rx="130" ry="120"/></g>
    <g stroke="#2B3E52" stroke-width="8" fill="none">
      <rect x="820" y="90" width="330" height="380"/>
      <path d="M930 90 V470 M1040 90 V470 M820 280 H1150"/>
    </g>
    <!-- floor -->
    <rect y="520" width="1200" height="180" fill="#8A8578"/>
    <rect y="520" width="1200" height="8" fill="#6E6A5E"/>
    <!-- iron + wood furniture, half-dressed -->
    <g>
      <rect x="120" y="392" width="330" height="16" fill="#5A3C28"/>
      <g stroke="#2B3E52" stroke-width="9" fill="none">
        <path d="M148 408 V520 M424 408 V520 M148 470 H424"/>
      </g>
      <rect x="196" y="352" width="34" height="40" fill="#93B23E" opacity=".85"/>
      <rect x="252" y="366" width="46" height="26" fill="#C9DEEA" opacity=".6"/>
    </g>
    <!-- covered chair: still in preparation -->
    <g>
      <path d="M540 520 L560 386 Q620 356 690 386 L706 520 Z" fill="#DEE9F0" opacity=".92"/>
      <path d="M556 420 Q624 400 692 420" stroke="#A8C6D9" stroke-width="4" fill="none"/>
    </g>
    <!-- ladder -->
    <g stroke="#2B3E52" stroke-width="7" fill="none" opacity=".9">
      <path d="M760 520 L790 300 M840 520 L812 300 M772 440 H830 M782 380 H822"/>
    </g>
    <ellipse cx="600" cy="690" rx="520" ry="16" fill="#000" opacity=".12"/>
  </symbol>

  <!-- ============ EXPERIENCE moments ============ -->
  <!-- morning coffee on the sill -->
  <symbol id="dn-sc-coffee" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 750">
    <defs>
      <linearGradient id="dn-mornG" x1="0" y1="0" x2=".3" y2="1">
        <stop offset="0" stop-color="#DCE9F1"/><stop offset="1" stop-color="#B6CFDE"/>
      </linearGradient>
    </defs>
    <rect width="600" height="750" fill="url(#dn-mornG)"/>
    <rect x="70" y="60" width="460" height="430" fill="#C9DEEA"/>
    <g fill="#6D8C5C" opacity=".85"><ellipse cx="200" cy="430" rx="160" ry="130"/><ellipse cx="430" cy="410" rx="180" ry="150"/></g>
    <g fill="#4A6B3E" opacity=".55"><ellipse cx="330" cy="150" rx="230" ry="110"/></g>
    <g stroke="#F3F0E7" stroke-width="14" fill="none"><rect x="70" y="60" width="460" height="430"/><path d="M300 60 V490"/></g>
    <!-- sill -->
    <rect y="490" width="600" height="34" fill="#D8C8AC"/>
    <rect y="524" width="600" height="226" fill="#E7E1D4"/>
    <!-- mug + saucer + book -->
    <g>
      <ellipse cx="230" cy="486" rx="72" ry="14" fill="#C2AE8E" opacity=".6"/>
      <path d="M186 400 H274 L266 480 H194 Z" fill="#FBFAF5"/>
      <ellipse cx="230" cy="400" rx="44" ry="12" fill="#F3EDE0"/>
      <ellipse cx="230" cy="400" rx="34" ry="8" fill="#6B4A31"/>
      <path d="M274 418 q34 4 30 26 t-34 20" stroke="#FBFAF5" stroke-width="11" fill="none"/>
      <path d="M226 372 q-10 -22 4 -40 M242 374 q-10 -22 4 -38" stroke="#FBFAF5" stroke-width="4" fill="none" opacity=".65"/>
    </g>
    <g>
      <rect x="330" y="444" width="180" height="14" fill="#2B3E52"/>
      <rect x="330" y="432" width="180" height="12" fill="#DEE9F0"/>
      <rect x="330" y="420" width="180" height="12" fill="#E6B8CC"/>
    </g>
    <!-- petals blown onto the sill -->
    <g fill="#E6B8CC">
      <ellipse cx="120" cy="506" rx="9" ry="6" transform="rotate(24 120 506)"/>
      <ellipse cx="482" cy="512" rx="8" ry="5" transform="rotate(-18 482 512)"/>
      <ellipse cx="392" cy="500" rx="7" ry="5" transform="rotate(50 392 500)"/>
    </g>
  </symbol>

  <!-- walking under the blossom -->
  <symbol id="dn-sc-sakura" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 620">
    <defs>
      <linearGradient id="dn-sakG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#BAD4E4"/><stop offset="1" stop-color="#DCE9E2"/>
      </linearGradient>
    </defs>
    <rect width="800" height="620" fill="url(#dn-sakG)"/>
    <!-- Blossom is a broken canopy along the top, not a pink field: sky must
         stay visible through it or the whole page tips "cute". -->
    <g stroke="#5A4436" stroke-width="7" fill="none" opacity=".85">
      <path d="M0 150 q170 -34 300 16 t250 -26"/>
      <path d="M556 140 q120 38 244 -14"/>
      <path d="M296 168 q40 42 18 86"/>
    </g>
    <g fill="#E6B8CC" opacity=".85">
      <ellipse cx="86"  cy="86"  rx="104" ry="62"/>
      <ellipse cx="256" cy="52"  rx="88"  ry="50"/>
      <ellipse cx="430" cy="86"  rx="76"  ry="46"/>
      <ellipse cx="612" cy="46"  rx="92"  ry="52"/>
      <ellipse cx="762" cy="100" rx="80"  ry="54"/>
      <ellipse cx="330" cy="132" rx="58"  ry="32"/>
      <ellipse cx="690" cy="140" rx="52"  ry="28"/>
    </g>
    <g fill="#F2DCE5" opacity=".75">
      <ellipse cx="150" cy="44" rx="80" ry="40"/>
      <ellipse cx="520" cy="34" rx="86" ry="36"/>
    </g>
    <!-- green depth behind the blossom keeps the palette blue-green led -->
    <g fill="#4A6B3E" opacity=".55">
      <ellipse cx="30"  cy="200" rx="120" ry="90"/>
      <ellipse cx="790" cy="226" rx="130" ry="100"/>
    </g>
    <!-- path + lawn -->
    <rect y="380" width="800" height="240" fill="#6D8C5C"/>
    <path d="M0 620 L280 380 L430 380 L260 620 Z" fill="#CFC5AC"/>
    <path d="M0 470 Q400 440 800 476 L800 380 L0 380 Z" fill="#4A6B3E" opacity=".55"/>
    <!-- two people, small, in context -->
    <g fill="#2B3E52">
      <circle cx="372" cy="404" r="13"/><path d="M360 420 h24 l8 78 h-40 z"/>
      <path d="M362 498 h10 l-2 42 h-9z M382 498 h10 l3 42 h-9z"/>
    </g>
    <g fill="#33502F">
      <circle cx="410" cy="410" r="12"/><path d="M399 426 h22 l7 72 h-36 z"/>
      <path d="M401 498 h9 l-2 38 h-8z M418 498 h9 l3 38 h-9z"/>
    </g>
    <!-- falling petals -->
    <g fill="#E6B8CC">
      <ellipse cx="120" cy="300" rx="8" ry="5" transform="rotate(30 120 300)"/>
      <ellipse cx="205" cy="360" rx="7" ry="5" transform="rotate(-20 205 360)"/>
      <ellipse cx="600" cy="290" rx="8" ry="5" transform="rotate(15 600 290)"/>
      <ellipse cx="700" cy="352" rx="6" ry="4" transform="rotate(-40 700 352)"/>
      <ellipse cx="520" cy="330" rx="7" ry="4" transform="rotate(52 520 330)"/>
    </g>
  </symbol>

  <!-- the lawn, mid-afternoon -->
  <symbol id="dn-sc-lawn" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 640">
    <defs>
      <linearGradient id="dn-lawnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8FB4CE"/><stop offset="1" stop-color="#CFE1EC"/>
      </linearGradient>
    </defs>
    <rect width="800" height="640" fill="url(#dn-lawnSky)"/>
    <circle cx="640" cy="110" r="200" fill="#FCF6E2" opacity=".45" filter="url(#dn-soft-l)"/>
    <!-- treeline -->
    <g fill="#4A6B3E">
      <ellipse cx="90"  cy="270" rx="150" ry="105"/><ellipse cx="280" cy="240" rx="130" ry="120"/>
      <ellipse cx="470" cy="262" rx="120" ry="98"/><ellipse cx="700" cy="238" rx="160" ry="118"/>
    </g>
    <g fill="#33502F" opacity=".85">
      <ellipse cx="180" cy="300" rx="120" ry="80"/><ellipse cx="600" cy="296" rx="140" ry="86"/>
    </g>
    <g stroke="#4A3A2A" stroke-width="10">
      <path d="M280 330 V386"/><path d="M700 330 V386"/>
    </g>
    <!-- lawn bands -->
    <rect y="360" width="800" height="280" fill="#7C9B60"/>
    <path d="M0 640 Q400 560 800 604 L800 640 Z" fill="#6D8C5C"/>
    <path d="M0 440 Q420 404 800 448 L800 396 Q400 356 0 396 Z" fill="#93B23E" opacity=".5"/>
    <!-- picnic blanket, denim of course -->
    <g transform="translate(300 470) rotate(-6)">
      <rect width="230" height="120" rx="6" fill="url(#dn-twillPale)"/>
      <rect width="230" height="120" rx="6" fill="none" stroke="#E8DCC2" stroke-width="2" stroke-dasharray="6 5"/>
      <circle cx="66" cy="52" r="16" fill="#FBFAF5"/>
      <rect x="132" y="34" width="52" height="38" rx="4" fill="#E6B8CC"/>
    </g>
    <g fill="#2B3E52" opacity=".85">
      <circle cx="196" cy="446" r="10"/><path d="M186 460 h20 l6 52 h-32 z"/>
    </g>
  </symbol>

  <!-- neighbourhood street, early evening -->
  <symbol id="dn-sc-street" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 760">
    <defs>
      <linearGradient id="dn-duskG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5E7E9B"/><stop offset=".6" stop-color="#9FBCCF"/>
        <stop offset="1" stop-color="#D8C9C0"/>
      </linearGradient>
    </defs>
    <rect width="600" height="760" fill="url(#dn-duskG)"/>
    <!-- buildings -->
    <g fill="#2B3E52" opacity=".9">
      <rect x="0" y="180" width="150" height="420"/>
      <rect x="164" y="120" width="120" height="480"/>
      <rect x="440" y="150" width="160" height="450"/>
    </g>
    <g fill="#33455A" opacity=".95"><rect x="296" y="240" width="130" height="360"/></g>
    <!-- lit windows -->
    <g fill="#FBE9C4" opacity=".92">
      <rect x="24" y="220" width="26" height="30"/><rect x="70" y="268" width="26" height="30"/>
      <rect x="192" y="180" width="24" height="28"/><rect x="236" y="240" width="24" height="28"/>
      <rect x="466" y="200" width="28" height="30"/><rect x="520" y="272" width="28" height="30"/>
      <rect x="322" y="300" width="24" height="26"/>
    </g>
    <g fill="#93B23E" opacity=".9"><rect x="192" y="330" width="24" height="26"/><rect x="520" y="380" width="28" height="26"/></g>
    <!-- shop awning + sign -->
    <g>
      <path d="M296 470 H436 L424 508 H308 Z" fill="#4A6B3E"/>
      <rect x="330" y="410" width="76" height="52" fill="#E6B8CC"/>
      <rect x="316" y="508" width="104" height="92" fill="#FBE9C4" opacity=".75"/>
    </g>
    <!-- street trees -->
    <g>
      <rect x="122" y="500" width="12" height="106" fill="#4A3A2A"/>
      <g fill="#4A6B3E"><ellipse cx="128" cy="470" rx="66" ry="60"/><ellipse cx="92" cy="500" rx="42" ry="38"/></g>
    </g>
    <!-- road -->
    <rect y="600" width="600" height="160" fill="#7C8A92"/>
    <rect y="600" width="600" height="10" fill="#5F6C74"/>
    <g stroke="#DEE9F0" stroke-width="5" stroke-dasharray="34 30" opacity=".7"><path d="M0 690 H600"/></g>
    <!-- cyclist -->
    <g stroke="#1B2836" stroke-width="5" fill="none">
      <circle cx="416" cy="678" r="26"/><circle cx="500" cy="678" r="26"/>
      <path d="M416 678 L456 634 L500 678 M456 634 H486"/>
    </g>
    <g fill="#1B2836"><circle cx="466" cy="606" r="12"/><path d="M456 620 h20 l-4 34 h-14z"/></g>
  </symbol>

  <!-- ============ LOCATION map ============ -->
  <symbol id="dn-sc-map" viewBox="0 0 900 640">
    <rect width="900" height="640" fill="#DEE9F0"/>
    <!-- the park itself -->
    <path d="M96 96 Q300 60 520 92 Q700 118 780 220 Q820 340 720 440 Q560 540 360 512 Q160 486 108 356 Q76 210 96 96 Z" fill="#6D8C5C"/>
    <path d="M140 150 Q320 118 500 148 Q650 174 706 254 Q736 348 654 424 Q516 500 366 476 Q206 452 164 344 Q140 226 140 150 Z" fill="#4A6B3E"/>
    <!-- pond -->
    <path d="M300 300 Q380 262 470 296 Q530 330 476 372 Q392 408 320 372 Q276 342 300 300 Z" fill="#A8C6D9"/>
    <!-- lawn patch -->
    <ellipse cx="600" cy="230" rx="82" ry="56" fill="#93B23E" opacity=".65"/>
    <!-- cherry grove -->
    <g fill="#E6B8CC" opacity=".9">
      <circle cx="228" cy="240" r="17"/><circle cx="262" cy="212" r="13"/><circle cx="200" cy="206" r="12"/>
      <circle cx="248" cy="272" r="11"/>
    </g>
    <!-- streets -->
    <g stroke="#C6DBE7" stroke-width="16" fill="none" stroke-linecap="square">
      <path d="M0 560 H900"/><path d="M812 0 V640"/><path d="M0 120 H90"/>
    </g>
    <g stroke="#FBFAF5" stroke-width="4" fill="none" opacity=".8">
      <path d="M0 560 H900"/><path d="M812 0 V640"/>
    </g>
    <!-- walking route, sakura dashes -->
    <path d="M838 500 Q800 452 762 436 Q712 414 700 372" stroke="#E6B8CC" stroke-width="5" fill="none" stroke-dasharray="12 9" stroke-linecap="round"/>
    <!-- hotel marker -->
    <g transform="translate(838 500)">
      <circle r="19" fill="#2B3E52"/>
      <circle r="7" fill="#93B23E"/>
      <circle r="30" fill="none" stroke="#2B3E52" stroke-width="2" opacity=".45"/>
    </g>
    <!-- gyoen gate marker -->
    <g transform="translate(700 372)">
      <circle r="13" fill="#FBFAF5"/><circle r="6" fill="#4A6B3E"/>
    </g>
    <!-- station marker -->
    <g transform="translate(846 214)">
      <rect x="-13" y="-13" width="26" height="26" fill="#2B3E52"/>
      <rect x="-5" y="-5" width="10" height="10" fill="#A8C6D9"/>
    </g>
    <!-- labels -->
    <g font-family="Archivo,Arial" font-weight="700" font-size="17" letter-spacing="2.4" fill="#FBFAF5">
      <text x="410" y="212">SHINJUKU GYOEN</text>
    </g>
    <g font-family="ui-monospace,Menlo,monospace" font-size="13" letter-spacing="1.2">
      <!-- K3V sits on the pale street; the other two sit on green -->
      <text x="770" y="546" text-anchor="end" fill="#2B3E52">K3V</text>
      <text x="676" y="352" text-anchor="end" fill="#EDF3F7">GYOEN-MAE GATE</text>
      <text x="800" y="196" text-anchor="end" fill="#EDF3F7">SHINJUKU-GYOENMAE STA.</text>
    </g>
    <!-- north -->
    <g transform="translate(60 580)" fill="#2B3E52">
      <path d="M0 -22 L8 8 L0 2 L-8 8 Z"/>
      <text y="26" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="11" letter-spacing="1.5">N</text>
    </g>
  </symbol>

  <!-- botanical line art for the location background -->
  <symbol id="dn-sc-botanic" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
    <g stroke="#6D8C5C" stroke-width="2" fill="none" opacity=".7">
      <path d="M90 700 q30 -220 -10 -400"/>
      <g transform="translate(80 300)">
        <path d="M0 0 q60 -30 90 -96 M0 0 q-60 -26 -92 -92 M0 70 q64 -26 96 -92 M0 70 q-62 -22 -94 -88 M0 140 q60 -24 92 -88"/>
      </g>
      <path d="M1110 700 q-40 -240 6 -420"/>
      <g transform="translate(1116 300)">
        <path d="M0 0 q-60 -30 -90 -96 M0 0 q60 -26 92 -92 M0 70 q-64 -26 -96 -92 M0 70 q62 -22 94 -88"/>
      </g>
    </g>
    <g fill="#93B23E" opacity=".35">
      <ellipse cx="300" cy="120" rx="52" ry="20" transform="rotate(-24 300 120)"/>
      <ellipse cx="930" cy="580" rx="46" ry="18" transform="rotate(30 930 580)"/>
      <ellipse cx="560" cy="640" rx="40" ry="16" transform="rotate(-12 560 640)"/>
    </g>
    <g fill="#E6B8CC" opacity=".3">
      <circle cx="740" cy="96" r="9"/><circle cx="806" cy="150" r="6"/><circle cx="216" cy="520" r="7"/>
    </g>
  </symbol>

  <!-- grass silhouette used to close the green section -->
  <symbol id="dn-sc-grassline" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0 120 L0 74 Q120 44 240 70 T480 58 T720 78 T960 56 T1200 76 L1200 120 Z" fill="#1F2E1C"/>
    <g stroke="#1F2E1C" stroke-width="3" fill="none">
      <path d="M60 78 q6 -34 -4 -52 M150 70 q-8 -30 4 -48 M330 66 q8 -36 -2 -54
               M520 62 q-6 -30 6 -46 M700 78 q8 -34 -4 -50 M880 60 q-8 -32 4 -48
               M1060 68 q6 -30 -4 -46"/>
    </g>
  </symbol>
</defs>
`;
