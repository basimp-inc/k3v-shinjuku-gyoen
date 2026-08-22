/* Hero assets for the "Chambray Gyoen" design (chambray-gyoen).
   The canopy scene and the ledge wood fill are copied structurally verbatim
   from ../gyoen/defs.ts (#sc-canopy / #wood-walnut) — same shapes, same
   filters, same layer order, same opacities — with ONLY the colours swapped
   to the approved chambray-gyoen palette (2026-08-19):

     - canopy deep greens (#22331F/#33502F/#3F6238/#4E7238/#5C7A4E)
       → 新緑 fava-green range (#5F8437/#74994A/#83A94D/#93B23E/#A8C765)
     - sky #C9DCE8/#A9C3D6 → one step lighter (#E3EEF5/#C9DCE8)
     - walnut ledge → pale oak (light enough that slate text clears 4.5:1)
     - morning glow #FBF3D8 / light shafts #FBF9F3 → kept as-is

   Every id is cg- prefixed because the gyoen originals are also in the DOM
   (hidden) whenever another theme is active. */
export const CG_SVG_DEFS = String.raw`
<defs>
  <!-- ---- oak grain filters (walnut/fine grain recipes, oak-toned) ---- -->
  <filter id="cg-fgrain-oak" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.28 0.005" numOctaves="5" seed="23" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0.55
      0 0 0 0 0.42
      0 0 0 0 0.24
      1.1 0 0 0 -0.52"/>
  </filter>
  <filter id="cg-fgrain-fine" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="1.1 0.02" numOctaves="3" seed="4" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="matrix" values="
      0 0 0 0 0.98
      0 0 0 0 0.90
      0 0 0 0 0.78
      0.7 0 0 0 -0.30"/>
  </filter>
  <filter id="cg-fsoft" x="-10%" y="-10%" width="120%" height="120%">
    <feGaussianBlur stdDeviation="14"/>
  </filter>
  <filter id="cg-fsoft-m" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="24"/>
  </filter>

  <!-- pale enough that the ledge's slate text clears 4.5:1 on the darkest stop -->
  <linearGradient id="cg-gOak" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0"   stop-color="#E7D0AC"/>
    <stop offset=".3"  stop-color="#DBBC90"/>
    <stop offset=".6"  stop-color="#F0DFC2"/>
    <stop offset=".85" stop-color="#D8B685"/>
    <stop offset="1"   stop-color="#E2C79C"/>
  </linearGradient>

  <!-- ---- oak fill used by the hero ledge ---- -->
  <symbol id="cg-oak" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="url(#cg-gOak)"/>
    <rect width="600" height="400" filter="url(#cg-fgrain-oak)"/>
    <rect width="600" height="400" filter="url(#cg-fgrain-fine)" opacity=".3"/>
    <ellipse cx="330" cy="200" rx="22" ry="130" fill="none" stroke="#A57F49" stroke-opacity=".35" stroke-width="3"/>
  </symbol>

  <!-- HERO: gyoen canopy over pale sky — 新緑 recolour of #sc-canopy -->
  <symbol id="cg-canopy" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
    <defs>
      <linearGradient id="cg-skyG" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0" stop-color="#E3EEF5"/><stop offset=".45" stop-color="#C9DCE8"/><stop offset="1" stop-color="#E7EFE2"/>
      </linearGradient>
      <radialGradient id="cg-sunG" cx=".72" cy=".2" r=".45">
        <stop offset="0" stop-color="#FBF3D8" stop-opacity=".95"/><stop offset="1" stop-color="#FBF3D8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#cg-skyG)"/>
    <circle cx="1150" cy="180" r="420" fill="url(#cg-sunG)"/>
    <!-- distant tree mass -->
    <g fill="#A8C765" opacity=".55" filter="url(#cg-fsoft)">
      <ellipse cx="240" cy="700" rx="360" ry="200"/><ellipse cx="760" cy="760" rx="420" ry="190"/>
      <ellipse cx="1380" cy="710" rx="380" ry="210"/>
    </g>
    <!-- mid canopy -->
    <g fill="#83A94D" opacity=".92">
      <ellipse cx="180" cy="150" rx="330" ry="190"/><ellipse cx="470" cy="60" rx="290" ry="170"/>
      <ellipse cx="20" cy="420" rx="260" ry="240"/><ellipse cx="1560" cy="130" rx="300" ry="200"/>
      <ellipse cx="1290" cy="30" rx="260" ry="150"/>
    </g>
    <!-- foreground leaves, the deepest green in the palette, softly out of focus -->
    <g fill="#5F8437" filter="url(#cg-fsoft-m)">
      <ellipse cx="60" cy="70" rx="280" ry="170"/><ellipse cx="1580" cy="640" rx="230" ry="300"/>
      <ellipse cx="820" cy="-40" rx="360" ry="150"/>
    </g>
    <!-- grass foreground -->
    <path d="M0 900 L0 812 Q300 770 620 806 T1180 790 T1600 828 L1600 900 Z" fill="#93B23E"/>
    <path d="M0 900 L0 856 Q380 826 780 858 T1600 862 L1600 900 Z" fill="#74994A"/>
    <!-- light shafts -->
    <g opacity=".28">
      <path d="M980 0 L1200 0 L760 900 L620 900 Z" fill="#FBF9F3" filter="url(#cg-fsoft)"/>
      <path d="M1290 0 L1380 0 L1090 900 L1010 900 Z" fill="#FBF9F3" filter="url(#cg-fsoft)"/>
    </g>
    <!-- haze over the lawn -->
    <ellipse cx="900" cy="810" rx="620" ry="90" fill="#FBF9F3" opacity=".22" filter="url(#cg-fsoft-m)"/>
  </symbol>
</defs>
`;
