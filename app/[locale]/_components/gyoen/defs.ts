/* Auto-extracted verbatim from docs/top-page-mock-5.html.
   Kept as a raw string and injected with dangerouslySetInnerHTML: it is static
   authored markup, and hand-converting ~200 SVG attributes to JSX casing would
   only add transcription risk. Re-extract from the mock if the design changes. */
export const GYOEN_SVG_DEFS = String.raw`
<defs>
  <!-- ---- wood grain filters ---- -->
  <filter id="fgrain-rose" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.34 0.006" numOctaves="5" seed="11" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0.16
      0 0 0 0 0.07
      0 0 0 0 0.03
      1.35 0 0 0 -0.42"/>
  </filter>
  <filter id="fgrain-fine" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="1.1 0.02" numOctaves="3" seed="4" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0.98
      0 0 0 0 0.86
      0 0 0 0 0.70
      0.7 0 0 0 -0.30"/>
  </filter>
  <filter id="fgrain-walnut" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.28 0.005" numOctaves="5" seed="23" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0.09
      0 0 0 0 0.04
      0 0 0 0 0.02
      1.5 0 0 0 -0.45"/>
  </filter>
  <filter id="fsoft" x="-10%" y="-10%" width="120%" height="120%">
    <feGaussianBlur stdDeviation="14"/>
  </filter>
  <filter id="fsoft-s" x="-10%" y="-10%" width="120%" height="120%">
    <feGaussianBlur stdDeviation="5"/>
  </filter>
  <filter id="fsoft-xl" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="46"/>
  </filter>
  <filter id="fsoft-m" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="24"/>
  </filter>

  <linearGradient id="gRose2" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0"   stop-color="#8A4A24"/>
    <stop offset=".28" stop-color="#6E3819"/>
    <stop offset=".55" stop-color="#96562A"/>
    <stop offset=".80" stop-color="#6B3517"/>
    <stop offset="1"   stop-color="#8A4A24"/>
  </linearGradient>
  <radialGradient id="vigG" cx=".5" cy=".44" r=".78">
    <stop offset=".5" stop-color="#000000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000000" stop-opacity=".32"/>
  </radialGradient>
  <linearGradient id="gWalnut" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0"   stop-color="#4A2C1E"/>
    <stop offset=".3"  stop-color="#331E14"/>
    <stop offset=".6"  stop-color="#553425"/>
    <stop offset=".85" stop-color="#301C12"/>
    <stop offset="1"   stop-color="#452919"/>
  </linearGradient>

  <!-- ---- wood fills used by .wood blocks ---- -->
  <symbol id="wood-rose" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="url(#gRose2)"/>
    <rect width="600" height="400" filter="url(#fgrain-rose)"/>
    <rect width="600" height="400" filter="url(#fgrain-fine)" opacity=".5"/>
    <ellipse cx="145" cy="180" rx="26" ry="120" fill="none" stroke="#4A230E" stroke-opacity=".5" stroke-width="3"/>
    <ellipse cx="145" cy="180" rx="14" ry="76" fill="none" stroke="#3E1D0B" stroke-opacity=".45" stroke-width="2.5"/>
    <ellipse cx="430" cy="270" rx="18" ry="96" fill="none" stroke="#4A230E" stroke-opacity=".38" stroke-width="2.5"/>
  </symbol>
  <symbol id="wood-walnut" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="url(#gWalnut)"/>
    <rect width="600" height="400" filter="url(#fgrain-walnut)"/>
    <rect width="600" height="400" filter="url(#fgrain-fine)" opacity=".28"/>
    <ellipse cx="330" cy="200" rx="22" ry="130" fill="none" stroke="#20120A" stroke-opacity=".5" stroke-width="3"/>
  </symbol>

  <!-- =============== PHOTO SCENES (placeholders w/ atmosphere) =============== -->

  <!-- HERO: gyoen canopy over pale sky -->
  <symbol id="sc-canopy" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
    <defs>
      <linearGradient id="skyG" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0" stop-color="#C9DCE8"/><stop offset=".45" stop-color="#A9C3D6"/><stop offset="1" stop-color="#DCE6DA"/>
      </linearGradient>
      <radialGradient id="sunG" cx=".72" cy=".2" r=".45">
        <stop offset="0" stop-color="#FBF3D8" stop-opacity=".95"/><stop offset="1" stop-color="#FBF3D8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#skyG)"/>
    <circle cx="1150" cy="180" r="420" fill="url(#sunG)"/>
    <!-- distant tree mass -->
    <g fill="#5C7A4E" opacity=".55" filter="url(#fsoft)">
      <ellipse cx="240" cy="700" rx="360" ry="200"/><ellipse cx="760" cy="760" rx="420" ry="190"/>
      <ellipse cx="1380" cy="710" rx="380" ry="210"/>
    </g>
    <!-- mid canopy -->
    <g fill="#3F6238" opacity=".92">
      <ellipse cx="180" cy="150" rx="330" ry="190"/><ellipse cx="470" cy="60" rx="290" ry="170"/>
      <ellipse cx="20" cy="420" rx="260" ry="240"/><ellipse cx="1560" cy="130" rx="300" ry="200"/>
      <ellipse cx="1290" cy="30" rx="260" ry="150"/>
    </g>
    <!-- foreground leaves, deep green, softly out of focus -->
    <g fill="#22331F" filter="url(#fsoft-m)">
      <ellipse cx="60" cy="70" rx="280" ry="170"/><ellipse cx="1580" cy="640" rx="230" ry="300"/>
      <ellipse cx="820" cy="-40" rx="360" ry="150"/>
    </g>
    <!-- grass foreground -->
    <path d="M0 900 L0 812 Q300 770 620 806 T1180 790 T1600 828 L1600 900 Z" fill="#4E7238"/>
    <path d="M0 900 L0 856 Q380 826 780 858 T1600 862 L1600 900 Z" fill="#33502F"/>
    <!-- light shafts -->
    <g opacity=".28">
      <path d="M980 0 L1200 0 L760 900 L620 900 Z" fill="#FBF9F3" filter="url(#fsoft)"/>
      <path d="M1290 0 L1380 0 L1090 900 L1010 900 Z" fill="#FBF9F3" filter="url(#fsoft)"/>
    </g>
    <!-- haze over the lawn -->
    <ellipse cx="900" cy="810" rx="620" ry="90" fill="#FBF9F3" opacity=".18" filter="url(#fsoft-m)"/>
  </symbol>

  <!-- ROOM interior, warm wood + window light -->
  <symbol id="sc-room-a" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="wallA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F0EBDD"/><stop offset="1" stop-color="#DCD4C2"/>
      </linearGradient>
      <linearGradient id="lightA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#FFF7E2" stop-opacity=".9"/><stop offset="1" stop-color="#FFF7E2" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#wallA)"/>
    <!-- window light, thrown across the wall -->
    <g filter="url(#fsoft-xl)">
      <rect x="600" y="20" width="470" height="440" fill="#FFF3D6" opacity=".8"/>
      <rect x="660" y="110" width="150" height="300" fill="#A9C08F" opacity=".9"/>
      <rect x="880" y="160" width="130" height="260" fill="#9FBCD0" opacity=".8"/>
    </g>
    <!-- oak floor, real grain -->
    <rect y="548" width="1200" height="252" fill="url(#gRose2)"/>
    <rect y="548" width="1200" height="252" filter="url(#fgrain-rose)" opacity=".85"/>
    <rect y="548" width="1200" height="252" fill="#E8C48E" opacity=".26"/>
    <!-- soft masses: sofa + low table, out of focus -->
    <g filter="url(#fsoft-m)">
      <rect x="90" y="392" width="470" height="190" rx="44" fill="#D5CBB2"/>
      <rect x="150" y="368" width="150" height="80" rx="30" fill="#B9CBD8"/>
      <ellipse cx="330" cy="620" rx="270" ry="46" fill="#4A2A12" opacity=".3"/>
      <ellipse cx="1080" cy="470" rx="110" ry="170" fill="#4E7238" opacity=".75"/>
    </g>
    <!-- in-focus anchors: window frame + floor line -->
    <g stroke="#8E9C82" stroke-opacity=".6" fill="none">
      <rect x="622" y="58" width="436" height="410" stroke-width="7"/>
      <line x1="840" y1="58" x2="840" y2="468" stroke-width="5"/>
    </g>
    <rect y="545" width="1200" height="4" fill="#5C3417" opacity=".45"/>
    <!-- light wash + bloom + vignette -->
    <rect width="1200" height="800" fill="url(#lightA)" opacity=".34"/>
    <ellipse cx="820" cy="430" rx="420" ry="360" fill="#FFF3D4" opacity=".16" filter="url(#fsoft-xl)"/>
    <rect width="1200" height="800" fill="url(#vigG)"/>
  </symbol>

  <!-- ROOM interior, urban vintage: leather + steel, denim tones -->
  <symbol id="sc-room-b" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="wallB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#CBBFAC"/><stop offset="1" stop-color="#A9998A"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#wallB)"/>
    <rect width="1200" height="800" filter="url(#fgrain-fine)" opacity=".22"/>
    <!-- late light entering from the right -->
    <g filter="url(#fsoft-xl)">
      <rect x="820" y="0" width="380" height="520" fill="#FFE0AE" opacity=".85"/>
      <rect x="1010" y="120" width="150" height="300" fill="#A9C3D6" opacity=".55"/>
    </g>
    <!-- walnut floor, real grain -->
    <rect y="556" width="1200" height="244" fill="url(#gWalnut)"/>
    <rect y="556" width="1200" height="244" filter="url(#fgrain-walnut)" opacity=".9"/>
    <!-- leather mass + steel frame suggestion, out of focus -->
    <g filter="url(#fsoft-m)">
      <rect x="70" y="382" width="500" height="200" rx="52" fill="#8A5230"/>
      <rect x="120" y="358" width="140" height="76" rx="30" fill="#4E6444"/>
      <ellipse cx="330" cy="612" rx="290" ry="44" fill="#150C07" opacity=".45"/>
      <rect x="700" y="180" width="330" height="380" rx="8" fill="#2E2924" opacity=".5"/>
    </g>
    <!-- in-focus anchors: steel frame + floor line -->
    <g stroke="#2A241E" stroke-opacity=".75" fill="none" stroke-width="6">
      <rect x="702" y="182" width="326" height="376"/>
      <line x1="702" y1="318" x2="1028" y2="318"/><line x1="865" y1="182" x2="865" y2="558"/>
    </g>
    <rect y="553" width="1200" height="4" fill="#120A05" opacity=".5"/>
    <!-- lamp glow + vignette -->
    <ellipse cx="690" cy="430" rx="200" ry="200" fill="#FFE9BE" opacity=".3" filter="url(#fsoft-xl)"/>
    <rect width="1200" height="800" fill="#3A2416" opacity=".16"/>
    <rect width="1200" height="800" fill="url(#vigG)"/>
  </symbol>

  <!-- ROOM 03 industrial (coming soon, moodier) -->
  <symbol id="sc-room-c" preserveAspectRatio="xMidYMid slice" viewBox="0 0 900 900">
    <rect width="900" height="900" fill="#2B2A26"/>
    <rect width="900" height="900" filter="url(#fgrain-fine)" opacity=".16"/>
    <rect x="0" y="600" width="900" height="300" fill="url(#gWalnut)"/>
    <rect x="0" y="600" width="900" height="300" filter="url(#fgrain-walnut)" opacity=".9"/>
    <!-- pendant bulb, the only light in the room -->
    <line x1="620" y1="0" x2="620" y2="150" stroke="#4A4740" stroke-width="4"/>
    <circle cx="620" cy="176" r="30" fill="#F4DEA6" opacity=".95"/>
    <ellipse cx="620" cy="300" rx="330" ry="330" fill="#FFD98F" opacity=".22" filter="url(#fsoft-xl)"/>
    <!-- dark masses -->
    <g filter="url(#fsoft-m)">
      <rect x="90" y="140" width="330" height="400" rx="6" fill="#1D1B18" opacity=".8"/>
      <rect x="150" y="600" width="300" height="140" rx="10" fill="#241F1A" opacity=".85"/>
      <ellipse cx="300" cy="742" rx="220" ry="34" fill="#0D0906" opacity=".6"/>
    </g>
    <rect width="900" height="900" fill="#0F0D0B" opacity=".26"/>
  </symbol>

  <!-- CONCEPT vertical: doorway / entry with greenery -->
  <symbol id="sc-entry" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 800">
    <rect width="600" height="800" fill="#E4DED0"/>
    <!-- green door plane -->
    <rect x="86" y="70" width="300" height="640" fill="#33502F"/>
    <rect x="86" y="70" width="300" height="640" filter="url(#fgrain-fine)" opacity=".18"/>
    <rect x="368" y="380" width="10" height="46" rx="5" fill="#93B23E"/>
    <!-- wood jamb -->
    <rect x="386" y="70" width="46" height="640" fill="url(#gRose2)"/>
    <rect x="386" y="70" width="46" height="640" filter="url(#fgrain-rose)" opacity=".8"/>
    <!-- threshold -->
    <rect y="710" width="600" height="90" fill="url(#gRose2)"/>
    <rect y="710" width="600" height="90" filter="url(#fgrain-rose)" opacity=".8"/>
    <!-- planted corner + daylight, soft -->
    <g filter="url(#fsoft-m)">
      <ellipse cx="530" cy="560" rx="110" ry="170" fill="#4E7238"/>
      <ellipse cx="300" cy="60" rx="420" ry="130" fill="#FBF9F3" opacity=".5"/>
      <ellipse cx="240" cy="720" rx="200" ry="30" fill="#22331F" opacity=".35"/>
    </g>
  </symbol>

  <!-- MOOD 1: morning coffee on wood -->
  <symbol id="sc-coffee" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 800">
    <rect width="600" height="800" fill="#E4DED0"/>
    <!-- window band, blown out -->
    <g filter="url(#fsoft-xl)">
      <rect x="20" y="20" width="560" height="270" fill="#FFF8E4"/>
      <ellipse cx="180" cy="150" rx="140" ry="110" fill="#5C7A4E" opacity=".7"/>
      <ellipse cx="440" cy="190" rx="160" ry="120" fill="#4E7238" opacity=".6"/>
    </g>
    <!-- the table: wood, close up, real grain -->
    <rect y="300" width="600" height="500" fill="url(#gRose2)"/>
    <rect y="300" width="600" height="500" filter="url(#fgrain-rose)" opacity=".9"/>
    <rect y="300" width="600" height="500" fill="#C98A4A" opacity=".14"/>
    <!-- cup as a soft light mass + its shadow -->
    <g filter="url(#fsoft-s)">
      <ellipse cx="316" cy="536" rx="120" ry="34" fill="#2A1608" opacity=".38"/>
      <rect x="238" y="416" width="128" height="126" rx="24" fill="#FBF9F3"/>
      <ellipse cx="302" cy="420" rx="64" ry="19" fill="#7A5232"/>
    </g>
    <!-- in-focus anchor: the table edge -->
    <rect y="296" width="600" height="5" fill="#E8C793" opacity=".55"/>
    <ellipse cx="300" cy="330" rx="330" ry="150" fill="#FFF3D8" opacity=".38" filter="url(#fsoft-xl)"/>
    <rect width="600" height="800" fill="url(#vigG)"/>
  </symbol>

  <!-- MOOD 2: gyoen walk / lawn -->
  <symbol id="sc-lawn" preserveAspectRatio="xMidYMid slice" viewBox="0 0 700 700">
    <defs>
      <linearGradient id="skyG2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#BAD2E1"/><stop offset="1" stop-color="#DFE7DC"/>
      </linearGradient>
    </defs>
    <rect width="700" height="700" fill="url(#skyG2)"/>
    <g fill="#5C7A4E" opacity=".7" filter="url(#fsoft-s)">
      <ellipse cx="120" cy="300" rx="150" ry="110"/><ellipse cx="580" cy="280" rx="170" ry="120"/><ellipse cx="350" cy="250" rx="130" ry="90"/>
    </g>
    <g fill="#3F6238" filter="url(#fsoft-s)">
      <ellipse cx="250" cy="196" rx="128" ry="92"/><ellipse cx="480" cy="164" rx="148" ry="100"/>
    </g>
    <rect x="240" y="270" width="14" height="118" fill="#5A4327" opacity=".8"/>
    <rect x="470" y="248" width="16" height="140" fill="#5A4327" opacity=".8"/>
    <path d="M0 700 L0 380 Q180 350 350 382 T700 372 L700 700 Z" fill="#6E8F41"/>
    <path d="M0 700 L0 470 Q220 442 420 476 T700 466 L700 700 Z" fill="#4E7238"/>
    <ellipse cx="360" cy="596" rx="170" ry="48" fill="#93B23E" opacity=".4" filter="url(#fsoft-s)"/>
    <!-- morning haze + low sun -->
    <ellipse cx="520" cy="330" rx="300" ry="150" fill="#FBF3D8" opacity=".4" filter="url(#fsoft-xl)"/>
    <ellipse cx="120" cy="520" rx="240" ry="80" fill="#FBF9F3" opacity=".2" filter="url(#fsoft-m)"/>
    <rect width="700" height="700" fill="url(#vigG)"/>
  </symbol>

  <!-- MOOD 3: tokyo street at dusk -->
  <symbol id="sc-street" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 750">
    <defs>
      <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7E9BB4"/><stop offset=".55" stop-color="#C7B79E"/><stop offset="1" stop-color="#8A6F55"/>
      </linearGradient>
    </defs>
    <rect width="600" height="750" fill="url(#dusk)"/>
    <g fill="#3B4740">
      <rect x="0" y="180" width="140" height="570"/><rect x="150" y="260" width="110" height="490"/>
      <rect x="430" y="140" width="170" height="610"/><rect x="330" y="320" width="90" height="430"/>
    </g>
    <!-- windows as warm bokeh -->
    <g fill="#F7E3AE" filter="url(#fsoft-s)">
      <rect x="24" y="230" width="26" height="20"/><rect x="70" y="300" width="26" height="20"/><rect x="24" y="380" width="26" height="20"/>
      <rect x="470" y="200" width="30" height="22"/><rect x="530" y="280" width="30" height="22"/><rect x="470" y="360" width="30" height="22"/>
      <rect x="352" y="380" width="22" height="18"/><rect x="180" y="330" width="24" height="18"/>
    </g>
    <!-- lit shopfront at street level -->
    <rect x="252" y="470" width="96" height="280" fill="#33502F"/>
    <rect x="264" y="500" width="72" height="96" fill="#F4DEA6" opacity=".9" filter="url(#fsoft-s)"/>
    <path d="M0 750 L0 690 L600 660 L600 750 Z" fill="#241F1A"/>
    <g filter="url(#fsoft-m)">
      <ellipse cx="120" cy="650" rx="90" ry="60" fill="#1B1512" opacity=".7"/>
      <ellipse cx="560" cy="628" rx="100" ry="64" fill="#1B1512" opacity=".7"/>
      <ellipse cx="300" cy="640" rx="150" ry="70" fill="#F4DEA6" opacity=".18"/>
    </g>
    <circle cx="300" cy="118" r="170" fill="#FBF3D8" opacity=".28" filter="url(#fsoft-xl)"/>
    <rect width="600" height="750" fill="url(#vigG)"/>
  </symbol>

  <!-- LOCATION map schematic -->
  <symbol id="sc-map" viewBox="0 0 900 620">
    <rect width="900" height="620" fill="#22331F"/>
    <g stroke="#A9C3D6" stroke-opacity=".16" stroke-width="1">
      <path d="M0 60H900M0 140H900M0 220H900M0 300H900M0 380H900M0 460H900M0 540H900"/>
      <path d="M60 0V620M160 0V620M260 0V620M360 0V620M460 0V620M560 0V620M660 0V620M760 0V620M860 0V620"/>
    </g>
    <!-- the garden -->
    <path d="M120 120 q170 -70 330 -20 q150 46 190 170 q34 108 -80 168 q-150 78 -300 30 q-160 -52 -170 -180 q-6 -110 30 -168 z"
          fill="#3F6238"/>
    <path d="M120 120 q170 -70 330 -20 q150 46 190 170 q34 108 -80 168 q-150 78 -300 30 q-160 -52 -170 -180 q-6 -110 30 -168 z"
          fill="none" stroke="#93B23E" stroke-width="3" stroke-dasharray="10 7"/>
    <g fill="#4E7238" opacity=".85">
      <circle cx="250" cy="220" r="46"/><circle cx="380" cy="180" r="34"/><circle cx="470" cy="300" r="52"/><circle cx="300" cy="360" r="40"/>
    </g>
    <ellipse cx="560" cy="200" rx="72" ry="40" fill="#A9C3D6" opacity=".6"/>
    <!-- roads -->
    <g stroke="#EDE7DA" stroke-opacity=".5" stroke-width="6" fill="none">
      <path d="M700 0 V620"/><path d="M0 470 H900"/>
    </g>
    <!-- hotel pin -->
    <g>
      <circle cx="752" cy="392" r="34" fill="#93B23E" opacity=".22"/>
      <circle cx="752" cy="392" r="13" fill="#93B23E"/>
      <circle cx="752" cy="392" r="5" fill="#22331F"/>
    </g>
    <!-- walk line -->
    <path d="M752 392 q-60 -30 -110 -34 q-60 -6 -110 -40" fill="none" stroke="#A9C3D6" stroke-width="3" stroke-dasharray="7 8"/>
    <g font-family="ui-monospace,Menlo,monospace" font-size="16" letter-spacing="1">
      <text x="770" y="368" fill="#93B23E">K3V</text>
      <text x="200" y="300" fill="#EDE7DA" opacity=".92" font-size="22" letter-spacing="4">SHINJUKU GYOEN</text>
      <text x="200" y="326" fill="#A9C3D6" opacity=".75" font-size="13" letter-spacing="2">新宿御苑 — 58.3 ha</text>
      <text x="716" y="596" fill="#A9C3D6" opacity=".6">新宿御苑前駅</text>
      <text x="30" y="596" fill="#A9C3D6" opacity=".6">JR 新宿駅 →</text>
    </g>
  </symbol>
</defs>
`;
