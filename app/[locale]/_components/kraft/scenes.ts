/* Auto-extracted verbatim from docs/top-page-mock-9.html, with every SVG id
   namespaced `kr-`: the other alternative designs sit in the same document
   and short ids (#ht, #win, #pane) would otherwise resolve to whichever block
   the browser met first. The halftone pattern is declared once in HERO and
   referenced from MAP, so the rewrite has to be document-wide.

   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static
   authored markup, and hand-converting several hundred SVG attributes to JSX
   casing would only add transcription risk.
   Re-run docs/gen-kraft-assets.py if the mock changes. */

export const HERO = String.raw`
<svg viewBox="0 0 620 470" aria-hidden="true">
        
        <defs>
          <pattern id="kr-ht" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <circle cx="3" cy="3" r="1.5" fill="#2B2621" opacity=".34"/>
          </pattern>
          <!-- windows are UNPRINTED paper, so they are masked out of the blue
               plate rather than painted over it — you cannot overprint light -->
          <mask id="kr-win">
            <rect width="620" height="470" fill="#fff"/>
            <g fill="#000">
              <rect x="60" y="196" width="14" height="14"/><rect x="84" y="196" width="14" height="14"/>
              <rect x="60" y="228" width="14" height="14"/><rect x="84" y="228" width="14" height="14"/>
              <rect x="60" y="260" width="14" height="14"/>
              <rect x="134" y="140" width="13" height="13"/><rect x="134" y="172" width="13" height="13"/>
              <rect x="134" y="204" width="13" height="13"/>
              <rect x="518" y="176" width="16" height="16"/><rect x="546" y="176" width="16" height="16"/>
              <rect x="518" y="212" width="16" height="16"/><rect x="546" y="248" width="16" height="16"/>
              <rect x="192" y="246" width="12" height="12"/><rect x="192" y="278" width="12" height="12"/>
            </g>
          </mask>
        </defs>

        <!-- the sheet -->
        <rect width="620" height="470" fill="#EFE6D4"/>

        <!-- Each plate multiplies against the ones already down. Where two
             plates meet, a third colour appears — that is the whole idea, so
             the trees are set low enough to cross both the sun and the towers. -->
        <g style="mix-blend-mode:multiply" fill="#FF6C2F">
          <circle cx="438" cy="196" r="94"/>
          <rect x="0" y="392" width="620" height="78"/>
        </g>
        <g style="mix-blend-mode:multiply" fill="#3D5588" mask="url(#kr-win)" transform="translate(2,2)">
          <rect x="46" y="176" width="62" height="216"/>
          <rect x="122" y="118" width="48" height="274"/>
          <rect x="504" y="150" width="70" height="242"/>
          <rect x="182" y="226" width="34" height="166"/>
        </g>
        <g style="mix-blend-mode:multiply" fill="#00A95C">
          <circle cx="198" cy="352" r="76"/>
          <circle cx="302" cy="332" r="96"/>
          <circle cx="420" cy="348" r="86"/>
          <rect x="0" y="392" width="620" height="14"/>
        </g>
        <g style="mix-blend-mode:multiply" fill="#2B2621">
          <rect x="296" y="392" width="14" height="46"/>
          <rect x="193" y="392" width="10" height="46"/>
          <rect x="415" y="392" width="10" height="46"/>
        </g>
        <!-- halftone screen over everything -->
        <rect width="620" height="470" fill="url(#kr-ht)" opacity=".42" style="mix-blend-mode:multiply"/>
      </svg>
`;

export const LIVING = String.raw`
<svg viewBox="0 0 560 420" aria-hidden="true">
          
          <defs>
            <pattern id="kr-ht2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="3" cy="3" r="1.5" fill="#2B2621" opacity=".3"/>
            </pattern>
            <!-- the glass is unprinted paper, masked out of the frame plate -->
            <mask id="kr-pane">
              <rect width="560" height="420" fill="#fff"/>
              <g fill="#000">
                <rect x="344" y="60" width="72" height="168"/>
                <rect x="430" y="60" width="66" height="168"/>
              </g>
            </mask>
          </defs>
          <rect width="560" height="420" fill="#EFE6D4"/>

          <!-- morning light falling across the floor -->
          <g style="mix-blend-mode:multiply" fill="#FF6C2F">
            <path d="M300 0 L560 0 L560 300 L360 420 L228 420 Z"/>
          </g>
          <!-- window frame + sofa, blue plate, slipped 2px like everything else -->
          <g style="mix-blend-mode:multiply" fill="#3D5588" mask="url(#kr-pane)" transform="translate(2,2)">
            <rect x="330" y="46" width="180" height="196"/>
            <rect x="66" y="252" width="286" height="104" rx="10"/>
            <rect x="66" y="216" width="286" height="52" rx="14"/>
            <rect x="60" y="340" width="24" height="44"/>
            <rect x="330" y="340" width="24" height="44"/>
          </g>
          <!-- plant + cushion, green plate: overprints both the light and the sofa -->
          <g style="mix-blend-mode:multiply" fill="#00A95C">
            <circle cx="468" cy="300" r="52"/>
            <circle cx="432" cy="330" r="34"/>
            <circle cx="504" cy="332" r="30"/>
            <rect x="96" y="222" width="66" height="52" rx="8"/>
          </g>
          <g style="mix-blend-mode:multiply" fill="#2B2621">
            <rect x="452" y="346" width="34" height="44"/>
          </g>
          <rect width="560" height="420" fill="url(#kr-ht2)" opacity=".4" style="mix-blend-mode:multiply"/>
        </svg>
`;

export const EXP_GYOEN = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#EFE6D4"/><g class="plates">
            <circle cx="44" cy="42" r="30" fill="#00A95C"/><circle cx="76" cy="50" r="24" fill="#00A95C"/>
            <rect x="0" y="68" width="120" height="6" fill="#FF6C2F" transform="translate(2,2)"/>
            <rect x="42" y="68" width="6" height="16" fill="#2B2621"/>
          </g>
        </svg>
`;

export const EXP_KISSA = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#EFE6D4"/><g class="plates">
            <rect x="28" y="30" width="52" height="38" rx="4" fill="#FF6C2F"/>
            <path d="M80 40h14a10 10 0 010 20H80z" fill="none" stroke="#3D5588" stroke-width="5" transform="translate(2,2)"/>
            <rect x="22" y="68" width="66" height="6" fill="#2B2621"/>
            <path d="M42 20c0 6-6 6-6 12M56 18c0 6-6 6-6 12" stroke="#3D5588" stroke-width="4" fill="none"/>
          </g>
        </svg>
`;

export const EXP_LAUNDRY = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#EFE6D4"/><g class="plates">
            <rect x="30" y="14" width="60" height="60" rx="6" fill="#3D5588"/>
            <circle cx="60" cy="46" r="19" fill="#EFE6D4"/>
            <circle cx="60" cy="46" r="11" fill="#00A95C" transform="translate(2,2)"/>
            <rect x="38" y="22" width="10" height="6" fill="#FF6C2F"/>
          </g>
        </svg>
`;

export const EXP_YOKOCHO = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#EFE6D4"/><g class="plates">
            <rect x="14" y="24" width="30" height="50" fill="#3D5588"/>
            <rect x="52" y="12" width="26" height="62" fill="#FF6C2F" transform="translate(2,2)"/>
            <rect x="86" y="34" width="22" height="40" fill="#3D5588"/>
            <g fill="#EFE6D4" opacity=".7"><rect x="20" y="32" width="8" height="8"/><rect x="32" y="32" width="8" height="8"/><rect x="20" y="48" width="8" height="8"/></g>
            <circle cx="65" cy="28" r="7" fill="#00A95C"/>
          </g>
        </svg>
`;

export const EXP_SKYLINE = String.raw`
<svg class="spot" viewBox="0 0 120 84" aria-hidden="true">
          <rect width="120" height="84" fill="#EFE6D4"/><g class="plates">
            <circle cx="86" cy="26" r="18" fill="#FF6C2F"/>
            <rect x="10" y="40" width="22" height="34" fill="#3D5588"/>
            <rect x="40" y="28" width="18" height="46" fill="#3D5588" transform="translate(2,2)"/>
            <circle cx="76" cy="60" r="20" fill="#00A95C"/>
            <path d="M0 22h120" stroke="#2B2621" stroke-width="2.5"/>
          </g>
        </svg>
`;

export const MAP = String.raw`
<svg viewBox="0 0 560 400" aria-hidden="true">
          
          <rect width="560" height="400" fill="#EFE6D4"/>
          <!-- the garden -->
          <path d="M300 96 h230 v250 h-190 c-30 0 -40 -22 -40 -50 z" fill="#00A95C" style="mix-blend-mode:multiply"/>
          <!-- roads, blue plate, slipped 2px — crosses the garden and overprints it -->
          <g style="mix-blend-mode:multiply" stroke="#3D5588" stroke-width="13" fill="none" transform="translate(2,2)">
            <path d="M0 148 H560"/><path d="M0 300 H560"/>
            <path d="M186 0 V400"/><path d="M96 0 V400"/>
          </g>
          <!-- the block -->
          <rect x="106" y="196" width="66" height="66" fill="#FF6C2F" style="mix-blend-mode:multiply"/>
          <g style="mix-blend-mode:multiply" fill="#2B2621">
            <g font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="1.5">
              <text x="108" y="188">K3V — HERE</text>
              <text x="330" y="82">SHINJUKU GYOEN</text>
              <text x="12" y="330">SHINJUKU 3-CHOME</text>
            </g>
            <circle cx="139" cy="229" r="9"/>
          </g>
          <rect width="560" height="400" fill="url(#kr-ht2)" opacity=".36" style="mix-blend-mode:multiply"/>
        </svg>
`;
