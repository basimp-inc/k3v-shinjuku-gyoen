/* TOPページのイラスト。SVG id は `fig-` 接頭辞（flora.ts と共有の名前空間）。
   generic な id（#sky, #wall, #glow, #soft）はページ内の他の SVG と衝突するので、
   接頭辞は外さないこと。

   raw string のまま dangerouslySetInnerHTML で注入している：静的な手書きマークアップ
   であり、数百の SVG 属性を手で JSX のキャメルケースへ直しても転記ミスが増えるだけ。

   **このファイルが正**。もとはモックHTMLから生成していたが、モックと生成スクリプトは
   ~/workbench/design-mock-library/washed-chambray/ へ退避した。HERO・ROOM1〜3 のように
   手で足したものがあるので、あのスクリプトを本番へ向けて実行してはいけない。 */

/* HERO：ROOM 01（503 号室・UNICO）の窓辺。元写真は IMG_6293.JPG（2026-09-14 撮影）の
   正方形切り出し（x 1000〜5000）。**形（配置・遠近・重なり）は写真から測った座標**で、
   内側の <g> は切り出しを 1000×1000 にしたピクセル座標のまま描いてある。transform で
   viewBox 800×1000 の y 100〜900（`.hero-fig .frame .ph` の正方形の表示域）へ写している。
   座標を足すときも切り出しの座標で書けばそのまま重なる。

   写真にあるもの：戸口の奥の窓とツインベッド、柱・格子戸・TV、丸テーブルとパキラ・革ポーチ、
   手前の椅子、床と敷物。**写真に無い手描きの足し物は3つだけ**（クライアント指示 2026-10-11
   「生活感」）：窓辺のシャンブレーのシャツ、テーブルのモスボール、床のスリッパ。それと朝日
   （窓のにじみ・光条・床の光の帯）。色は scripts/photos/grade.mjs の γ=0.856・暖色シフトを
   通した実測値で、影だけ持ち上げてある（docs/review-2026-10-11/illustration-style-guide.md）。

   旧 HERO（ユニットA の IMG_6185 を写し取った版・未コミットだった）はこのファイルから外した。 */
export const HERO = String.raw`
<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs>
<clipPath id="fig-h5-crop"><rect width="1000" height="1000"/></clipPath>
<clipPath id="fig-h5-open"><polygon points="94,0 450,0 450,830 94,830"/></clipPath>
<filter id="fig-h5-b4" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
<filter id="fig-h5-b10" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
<filter id="fig-h5-b28" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="28"/></filter>
<linearGradient id="fig-h5-win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#FDFAF2"/><stop offset="1" stop-color="#FBEFD4"/></linearGradient>
<linearGradient id="fig-h5-ceil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E7D3C8"/><stop offset="1" stop-color="#F0E1D6"/></linearGradient>
<linearGradient id="fig-h5-oak" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E0AC6E"/><stop offset=".55" stop-color="#C58C4E"/><stop offset="1" stop-color="#A56F37"/></linearGradient>
<linearGradient id="fig-h5-chair" gradientUnits="userSpaceOnUse" x1="330" y1="590" x2="900" y2="1000"><stop offset="0" stop-color="#D3BE9C"/><stop offset=".3" stop-color="#AC8F67"/><stop offset="1" stop-color="#6A5236"/></linearGradient>
<linearGradient id="fig-h5-tv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4E5868"/><stop offset=".5" stop-color="#333A47"/><stop offset="1" stop-color="#262C37"/></linearGradient>
<radialGradient id="fig-h5-moss" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#86B058"/><stop offset=".55" stop-color="#5A8540"/><stop offset="1" stop-color="#3C6430"/></radialGradient>
<radialGradient id="fig-h5-sunglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".95"/><stop offset=".6" stop-color="#FFE3A6" stop-opacity=".35"/><stop offset="1" stop-color="#FFE3A6" stop-opacity="0"/></radialGradient>
<linearGradient id="fig-h5-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".62"/><stop offset="1" stop-color="#FFE3A6" stop-opacity=".16"/></linearGradient>
<pattern id="fig-h5-tweed" width="23" height="19" patternUnits="userSpaceOnUse"><rect width="23" height="19" fill="none"/><circle cx="3" cy="4" r="1.3" fill="#fff" opacity=".07"/><circle cx="12" cy="9" r="1.2" fill="#000" opacity=".05"/><circle cx="18" cy="2" r="1" fill="#fff" opacity=".06"/><circle cx="8" cy="15" r="1.3" fill="#000" opacity=".05"/><circle cx="20" cy="14" r="1.1" fill="#fff" opacity=".05"/></pattern>
<pattern id="fig-h5-weave" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="14" height="10" fill="none"/><rect y="0" width="14" height="2" fill="#fff" opacity=".12"/><rect x="6" width="2" height="10" fill="#000" opacity=".10"/></pattern>
<clipPath id="fig-h5-floor"><polygon points="0,826 350,812 356,830 393,1000 0,1000"/></clipPath>
<linearGradient id="fig-h5-seat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4F453B"/><stop offset="1" stop-color="#7A6D5E"/></linearGradient>
<radialGradient id="fig-h5-vig" cx=".48" cy=".42" r=".78"><stop offset=".55" stop-color="#6B4222" stop-opacity="0"/><stop offset="1" stop-color="#6B4222" stop-opacity=".26"/></radialGradient>
<linearGradient id="fig-h5-shirt-lit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF2F9" stop-opacity=".75"/><stop offset=".6" stop-color="#C9DAEA" stop-opacity=".2"/><stop offset="1" stop-color="#C9DAEA" stop-opacity="0"/></linearGradient></defs>
<rect width="800" height="1000" fill="#F2ECE1"/>
<g transform="translate(0,100) scale(.8)" clip-path="url(#fig-h5-crop)">
<!-- 壁・枠（奥） -->
<rect x="0" y="0" width="1000" height="1000" fill="#F2ECE1"/>
<polygon points="0,0 70,0 70,830 0,830" fill="#E6DDD0"/>
<polygon points="70,0 94,0 94,830 70,830" fill="#F8F4EC"/>
<polygon points="88,0 94,0 94,830 88,830" fill="#DDD3C3" opacity=".85"/>
<polygon points="70,0 74,0 74,830 70,830" fill="#DDD3C3" opacity=".5"/>
<rect x="0" y="244" width="34" height="62" fill="#F6F2EA"/>
<rect x="8" y="268" width="14" height="8" fill="#DCD3C5"/>
<!-- 戸口の内側（寝室） -->
<g clip-path="url(#fig-h5-open)">
<rect x="40" y="0" width="440" height="840" fill="url(#fig-h5-ceil)"/>
<polygon points="59,36 206,36 206,60 59,60" fill="#F4F0E9"/>
<polygon points="59,58 206,58 206,70 59,70" fill="#CFC7BC"/>
<rect x="66" y="160" width="376" height="420" fill="url(#fig-h5-win)"/>
<ellipse cx="250" cy="300" rx="230" ry="190" fill="url(#fig-h5-sunglow)" opacity=".5"/>
<rect x="74" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="82" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="112.5" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="120.5" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="151" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="159" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="189.5" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="197.5" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="266.5" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="274.5" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="305" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="313" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="343.5" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="351.5" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="382" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="390" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="420.5" y="176" width="8" height="396" fill="#6E747B" opacity=".78"/>
<rect x="428.5" y="176" width="3" height="396" fill="#fff" opacity=".7"/>
<rect x="66" y="148" width="376" height="30" fill="#5A5E65"/>
<ellipse cx="87" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="125.5" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="164" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="202.5" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="241" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="279.5" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="318" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="356.5" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="395" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<ellipse cx="433.5" cy="180" rx="17" ry="9" fill="#5A5E65"/>
<rect x="228" y="176" width="26" height="398" fill="#5A5E65"/>
<rect x="228" y="176" width="8" height="398" fill="#7D8188" opacity=".5"/>
<rect x="200" y="369" width="242" height="20" fill="#9AA0A7"/>
<rect x="414" y="176" width="28" height="210" fill="#5A5E65" opacity=".92"/>
<rect x="66" y="568" width="376" height="14" fill="#E9E4DA"/>
<g transform="translate(26,0) rotate(-2.5 165 180)">
<path d="M165 180 q0 -14 13 -17 q12 -3 14 -14" fill="none" stroke="#C79A62" stroke-width="5" stroke-linecap="round"/>
<path d="M165 188 L96 226 Q92 232 99 232 L231 232 Q238 232 234 226 Z" fill="#C79A62"/>
<path d="M112 222 L150 206 Q165 222 180 206 L218 222 L236 262 L206 276 L204 400 L126 400 L124 276 L94 262 Z" fill="#A9C2D9"/>
<path d="M112 222 L150 206 Q165 222 180 206 L218 222 L236 262 L206 276 L204 400 L126 400 L124 276 L94 262 Z" fill="url(#fig-h5-shirt-lit)"/>
<polygon points="165,224 181,207 200,222 178,232" fill="#8CA8C3"/>
<polygon points="165,224 149,207 130,222 152,232" fill="#C9DAEA"/>
<rect x="163" y="224" width="4" height="176" fill="#8CA8C3" opacity=".55"/>
<ellipse cx="165" cy="246" rx="3.6" ry="3.6" fill="#F7F2E8"/>
<ellipse cx="165" cy="280" rx="3.6" ry="3.6" fill="#F7F2E8"/>
<ellipse cx="165" cy="314" rx="3.6" ry="3.6" fill="#F7F2E8"/>
<ellipse cx="165" cy="348" rx="3.6" ry="3.6" fill="#F7F2E8"/>
<ellipse cx="165" cy="382" rx="3.6" ry="3.6" fill="#F7F2E8"/>
<path d="M126 280 L126 396" fill="none" stroke="#DE8B47" stroke-width="2" stroke-dasharray="6 5" opacity=".9"/>
<path d="M204 280 L204 396" fill="none" stroke="#DE8B47" stroke-width="2" stroke-dasharray="6 5" opacity=".9"/>
<path d="M118 227 L98 262" fill="none" stroke="#DE8B47" stroke-width="2" stroke-dasharray="6 5" opacity=".9"/>
<path d="M212 227 L232 262" fill="none" stroke="#DE8B47" stroke-width="2" stroke-dasharray="6 5" opacity=".9"/>
<polygon points="184,232 218,222 236,262 206,276 204,400 184,400" fill="#8CA8C3" opacity=".55"/>
</g>
<rect x="94" y="0" width="44" height="830" fill="#EADFD2"/>
<rect x="94" y="790" width="44" height="22" fill="#F4EFE6"/>
<rect x="136" y="385" width="66" height="90" fill="#A8693C"/>
<rect x="136" y="385" width="12" height="90" fill="#C48753" opacity=".6"/>
<rect x="190" y="385" width="12" height="90" fill="#7E4B2A" opacity=".6"/>
<polygon points="112,376 141,372 146,458 110,462" fill="#F8F4EC"/>
<polygon points="91,386 116,382 118,468 92,470" fill="#EFC66D"/>
<polygon points="91,386 116,382 116,420 91,424" fill="#E69B8B"/>
<rect x="174" y="364" width="12" height="18" fill="#C9462C"/>
<polygon points="98,458 204,462 214,580 180,646 98,646" fill="#F8F4EC"/>
<polygon points="98,520 206,524 214,580 180,646 98,646" fill="#DDD5C9" opacity=".55"/>
<polygon points="198,462 206,464 216,580 182,648 176,640 206,578" fill="#C4B8AA" opacity=".7" filter="url(#fig-h5-b4)"/>
<polygon points="116,612 170,616 172,716 118,714" fill="#A8693C"/>
<polygon points="116,612 170,616 170,632 116,628" fill="#C48753" opacity=".7"/>
<polygon points="126,714 154,716 154,780 128,778" fill="#7E4B2A"/>
<polygon points="325,375 353,372 354,450 325,450" fill="#A8693C"/>
<polygon points="338,366 394,364 402,440 338,442" fill="#F8F4EC"/>
<polygon points="338,366 360,365 366,440 338,442" fill="#DDD5C9" opacity=".6"/>
<polygon points="384,358 448,354 452,436 388,444" fill="#2F6B5E"/>
<polygon points="396,372 440,368 441,392 398,398" fill="#E08A3C" opacity=".9"/>
<polygon points="388,408 450,402 452,436 388,444" fill="#1F4D43" opacity=".7"/>
<polygon points="320,440 458,446 460,584 326,590" fill="#F8F4EC"/>
<polygon points="320,520 460,520 460,584 326,590" fill="#DDD5C9" opacity=".55"/>
<polygon points="320,440 334,440 342,586 326,590" fill="#C4B8AA" opacity=".55" filter="url(#fig-h5-b4)"/>
<polygon points="340,552 386,580 462,584 462,642 388,642 344,600" fill="#A8693C"/>
<polygon points="388,600 462,600 462,642 388,642" fill="#7E4B2A" opacity=".5"/>
<polygon points="214,580 350,580 354,770 136,796 176,648" fill="#8B939C"/>
<polygon points="250,580 310,580 300,790 190,796" fill="#AEB5BC" opacity=".35" filter="url(#fig-h5-b10)"/>
<polygon points="176,648 214,580 232,580 200,660 160,760 136,796" fill="#737A83" opacity=".5"/>
<polygon points="118,700 214,640 236,700 190,790 140,796" fill="#5B4A44" opacity=".28" filter="url(#fig-h5-b10)"/>
<polygon points="330,590 460,640 470,700 350,690" fill="#5B4A44" opacity=".22" filter="url(#fig-h5-b10)"/>
<polygon points="94,792 352,776 352,812 94,826" fill="#EFEAE0"/>
</g>
<!-- 柱・TV・格子戸 -->
<polygon points="450,0 528,0 528,720 450,720" fill="#F8F4EC"/>
<polygon points="450,0 466,0 466,720 450,720" fill="#DDD3C3" opacity=".7"/>
<polygon points="510,0 528,0 528,720 510,720" fill="#E2D8C9" opacity=".6"/>
<rect x="465" y="41" width="28" height="98" rx="5" fill="#F4F1EA"/><rect x="470" y="48" width="18" height="20" rx="2" fill="#B8C4B7"/><circle cx="479" cy="92" r="9" fill="#E5E1D7"/><rect x="468" y="108" width="22" height="6" rx="3" fill="#DCD8CC"/><rect x="468" y="120" width="22" height="6" rx="3" fill="#DCD8CC"/>
<rect x="520" y="0" width="480" height="244" fill="#F8F4EC"/>
<rect x="566" y="0" width="102" height="238" fill="#E4EAED"/>
<rect x="566" y="0" width="102" height="90" fill="#F2F5F5" opacity=".8"/>
<rect x="572" y="0" width="16" height="238" fill="#fff" opacity=".6"/>
<rect x="658" y="0" width="10" height="238" fill="#C9D2D6" opacity=".5"/>
<rect x="722" y="0" width="84" height="238" fill="#E4EAED"/>
<rect x="722" y="0" width="84" height="90" fill="#F2F5F5" opacity=".8"/>
<rect x="728" y="0" width="16" height="238" fill="#fff" opacity=".6"/>
<rect x="796" y="0" width="10" height="238" fill="#C9D2D6" opacity=".5"/>
<rect x="880" y="0" width="88" height="238" fill="#E4EAED"/>
<rect x="880" y="0" width="88" height="90" fill="#F2F5F5" opacity=".8"/>
<rect x="886" y="0" width="16" height="238" fill="#fff" opacity=".6"/>
<rect x="958" y="0" width="10" height="238" fill="#C9D2D6" opacity=".5"/>
<rect x="520" y="224" width="480" height="18" fill="#E8E1D5"/>
<rect x="551" y="238" width="449" height="4" fill="#EEE8DC"/>
<polygon points="548,242 1000,236 1000,512 556,528" fill="url(#fig-h5-tv)"/>
<polygon points="548,242 556,242 562,528 556,528" fill="#EEE8DC"/>
<polygon points="590,250 650,249 616,522 572,526" fill="#fff" opacity=".10"/>
<polygon points="676,249 690,249 660,520 648,521" fill="#fff" opacity=".05"/>
<!-- テーブルの下（影の中） -->
<polygon points="556,690 657,708 760,730 857,741 944,752 940,800 905,832 852,838 700,850 655,846 614,790 578,742" fill="#4B3A2E" opacity=".78" filter="url(#fig-h5-b4)"/>
<ellipse cx="796" cy="787" rx="108" ry="40" fill="#ECE7DC"/>
<ellipse cx="796" cy="800" rx="108" ry="28" fill="#CFC8BA" opacity=".6"/>
<rect x="836" y="735" width="14" height="60" fill="#D6D0C3"/>
<polygon points="555,706 643,702 671,796 650,842 614,788 578,742" fill="#6A5E52"/>
<polygon points="846,752 858,752 862,836 850,836" fill="#2A2622"/>
<polygon points="903,766 913,766 934,896 924,896" fill="#2A2622"/>
<polygon points="577,668 598,668 600,702 580,702" fill="#2A2622"/>
<polygon points="870,800 1000,790 1000,1000 940,1000 936,930" fill="#B67F4F"/>
<!-- テーブル -->
<path d="M509 593 Q516 568 546 548 Q585 525 650 511 Q730 502 810 500 L1000 500 L1000 733 Q930 726 857 723 Q760 712 657 690 Q570 667 530 633 Q510 616 509 593 Z" fill="url(#fig-h5-oak)"/>
<path d="M509 593 Q510 616 530 633 Q570 667 657 690 Q760 712 857 723 Q930 726 1000 733 L1000 752 Q930 746 857 741 Q760 730 657 708 Q566 684 524 650 Q506 634 509 593 Z" fill="#7A4B25"/>
<path d="M509 593 Q512 610 528 628 Q560 654 600 668 L560 640 Q528 616 509 593 Z" fill="#E0AC6E" opacity=".7"/>
<path d="M540 570 Q640 552 760 548" fill="none" stroke="#7A4B25" stroke-width="2.4" stroke-linecap="round" opacity="0.16"/>
<path d="M560 612 Q700 590 880 582" fill="none" stroke="#7A4B25" stroke-width="2.4" stroke-linecap="round" opacity="0.13"/>
<path d="M640 660 Q800 640 980 628" fill="none" stroke="#7A4B25" stroke-width="2.4" stroke-linecap="round" opacity="0.12"/>
<path d="M600 640 Q760 622 940 610" fill="none" stroke="#7A4B25" stroke-width="2.4" stroke-linecap="round" opacity="0.1"/>
<polygon points="940,752 1000,750 1000,1000 938,1000 944,900" fill="#8A5A2E"/>
<polygon points="940,752 956,752 958,1000 938,1000" fill="#C58C4E" opacity=".5"/>
<!-- テーブルの上（手描きの小物を含む） -->
<ellipse cx="760" cy="620" rx="70" ry="12" fill="#6B4222" opacity=".35" filter="url(#fig-h5-b4)"/>
<ellipse cx="752" cy="566" rx="98" ry="14" fill="#6B4222" opacity=".28" filter="url(#fig-h5-b4)"/>
<path d="M657 506 Q700 488 790 487 Q838 487 846 500 Q852 520 848 540 Q820 562 770 566 Q700 570 664 566 Q652 540 657 506 Z" fill="#BE683B"/>
<path d="M657 506 Q700 488 790 487 Q838 487 846 500 Q830 508 790 512 Q710 516 664 530 Z" fill="#DC8F5F" opacity=".75"/>
<path d="M664 540 Q700 556 770 556 Q820 552 848 536 Q840 560 770 566 Q700 570 664 566 Z" fill="#8C4526" opacity=".8"/>
<rect x="580" y="498" width="26" height="50" rx="10" fill="#C58C4E"/><rect x="582" y="500" width="8" height="44" rx="4" fill="#E0AC6E" opacity=".8"/>
<path d="M742 470 C761 473 779 462 787 447 C770 445 751 453 742 470 Z" fill="#2F5A3A"/>
<path d="M742 470 C747 492 764 508 783 513 C779 494 764 476 742 470 Z" fill="#2F5A3A"/>
<path d="M742 470 C684 460 629 488 603 533 C654 543 711 521 742 470 Z" fill="#2F5A3A"/>
<path d="M742 470 C702 413 633 388 573 399 C608 449 674 481 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C702 413 633 388 573 399 Z" fill="#7FAB58" opacity=".55"/>
<path d="M742 470 C733 412 690 367 640 353 C648 404 686 453 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C733 412 690 367 640 353 Z" fill="#7FAB58" opacity=".55"/>
<path d="M742 470 C763 452 770 423 763 400 C745 416 735 443 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C763 452 770 423 763 400 Z" fill="#7FAB58" opacity=".55"/>
<path d="M742 470 C762 432 758 386 737 355 C719 388 719 434 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C762 432 758 386 737 355 Z" fill="#7FAB58" opacity=".55"/>
<path d="M742 470 C740 434 719 401 692 385 C693 416 712 451 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C740 434 719 401 692 385 Z" fill="#7FAB58" opacity=".55"/>
<path d="M742 470 C716 485 703 514 705 540 C728 527 744 500 742 470 Z" fill="#4B7A44"/>
<path d="M742 470 C716 485 703 514 705 540 Z" fill="#7FAB58" opacity=".55"/>
<path d="M718 500 Q716 497 722 495 L784 495 Q790 497 788 502 L789 600 Q789 612 776 614 L726 614 Q714 612 715 600 Z" fill="#DCE9E6" opacity=".78"/>
<path d="M718 530 L788 530 L789 600 Q789 612 776 614 L726 614 Q714 612 715 600 Z" fill="#BCD4CF" opacity=".85"/>
<path d="M738 520 L736 596" fill="none" stroke="#7A8F55" stroke-width="5" stroke-linecap="round"/>
<path d="M752 520 L752 596" fill="none" stroke="#7A8F55" stroke-width="5" stroke-linecap="round"/>
<path d="M764 520 L766 596" fill="none" stroke="#7A8F55" stroke-width="5" stroke-linecap="round"/>
<path d="M730 596 q-12 6 -18 -2 M770 598 q14 6 20 -4 M748 600 q4 12 -6 14" fill="none" stroke="#7A8F55" stroke-width="2.5" stroke-linecap="round"/>
<polygon points="722,500 730,500 728,606 722,606" fill="#fff" opacity=".55"/>
<ellipse cx="752" cy="612" rx="47" ry="11" fill="#B88A58"/>
<ellipse cx="752" cy="606" rx="44" ry="8" fill="#D6A873" opacity=".7"/>
<ellipse cx="890" cy="634" rx="56" ry="13" fill="#6B4222" opacity=".35" filter="url(#fig-h5-b4)"/>
<ellipse cx="890" cy="624" rx="50" ry="12" fill="#CDBFA6"/>
<ellipse cx="890" cy="620" rx="50" ry="11" fill="#EFE7D6"/>
<circle cx="890" cy="592" r="33" fill="url(#fig-h5-moss)"/>
<ellipse cx="884.6" cy="600.8" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="910.4" cy="600" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="910.6" cy="597.9" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="882.5" cy="593.3" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="864.9" cy="602.9" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="894.1" cy="614.2" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="872.7" cy="580.9" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="917.5" cy="598.3" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="896.6" cy="598.4" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="895.3" cy="577.9" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="877.8" cy="575.5" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="897" cy="592.9" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="881.4" cy="571.6" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="872.1" cy="579.3" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="897.1" cy="565.1" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="869.9" cy="579.9" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="887.9" cy="573.5" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="904.8" cy="603.5" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="902.5" cy="607.7" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="876.7" cy="566.4" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="902.3" cy="577.8" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="870.4" cy="576.8" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="906.1" cy="564.6" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="886.1" cy="583.4" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="871.4" cy="565.3" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="885.8" cy="608.8" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="910.9" cy="593" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="895.6" cy="595.1" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="900.6" cy="601.2" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="896.1" cy="583.6" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="862.3" cy="581.1" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="900.7" cy="577.7" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="871.6" cy="612.6" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="897.6" cy="600.6" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="892.3" cy="611.5" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="889.8" cy="592" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="874.1" cy="607.1" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="881.9" cy="569.3" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="886.8" cy="583.6" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="895.4" cy="561.5" rx="2.6" ry="2" fill="#3C6430" opacity=".7"/>
<ellipse cx="874.7" cy="602.3" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="884.9" cy="584.2" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="893.2" cy="602.1" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="890.4" cy="590.2" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="905" cy="601.1" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<ellipse cx="907.1" cy="572.8" rx="2.6" ry="2" fill="#86B058" opacity=".7"/>
<path d="M890 556 q-4 -22 10 -34 M890 556 q8 -18 -2 -30 M890 556 q-14 -10 -24 -26" fill="none" stroke="#4B7A44" stroke-width="3.2" stroke-linecap="round"/>
<ellipse cx="901" cy="520" rx="11" ry="5.5" fill="#7FAB58" transform="rotate(-8 901 520)"/>
<ellipse cx="886" cy="524" rx="11" ry="5.5" fill="#7FAB58" transform="rotate(4 886 524)"/>
<ellipse cx="868" cy="528" rx="11" ry="5.5" fill="#7FAB58" transform="rotate(37 868 528)"/>
<ellipse cx="878" cy="570" rx="9" ry="6" fill="#fff" opacity=".22"/>
<!-- 床（左下）と敷物 -->
<polygon points="0,826 350,812 356,830 393,1000 0,1000" fill="#CE9460"/>
<rect x="0" y="860" width="392" height="2.4" fill="#B67F4F" opacity="0.5"/>
<rect x="0" y="905" width="392" height="2.4" fill="#B67F4F" opacity="0.45"/>
<rect x="0" y="950" width="392" height="2.4" fill="#B67F4F" opacity="0.5"/>
<rect x="120" y="830" width="2.4" height="40" fill="#B67F4F" opacity=".5"/>
<rect x="250" y="880" width="2.4" height="40" fill="#B67F4F" opacity=".5"/>
<rect x="180" y="925" width="2.4" height="50" fill="#B67F4F" opacity=".5"/>
<rect x="320" y="840" width="2.4" height="40" fill="#B67F4F" opacity=".5"/>
<rect x="60" y="880" width="2.4" height="40" fill="#B67F4F" opacity=".5"/>
<rect x="300" y="940" width="2.4" height="55" fill="#B67F4F" opacity=".5"/>
<polygon points="0,868 150,868 156,880 130,1000 0,1000" fill="#2E6C6A"/>
<polygon points="0,868 150,868 156,880 150,884 0,884" fill="#E8DCC2" opacity=".55"/>
<polygon points="20,920 70,906 96,940 50,962" fill="#B9472F" opacity=".9"/>
<polygon points="70,975 118,960 108,1000 60,1000" fill="#D9A34A" opacity=".9"/>
<!-- 手前の椅子 -->
<clipPath id="fig-h5-chairclip"><path d="M325 587 Q350 584 380 600 Q440 628 500 667 Q548 700 586 742 Q618 785 643 828 L654 842 Q690 852 757 846 Q830 842 871 853 Q902 870 921 903 Q934 925 936 931 L932 1000 L393 1000 Q382 920 364 846 Q350 775 339 703 Q330 640 325 587 Z"/></clipPath>
<path d="M657 792 Q720 786 800 789 Q826 800 843 835 Q770 846 686 846 Z" fill="url(#fig-h5-seat)"/>
<path d="M657 792 Q720 786 800 789 Q812 792 820 800 Q740 794 664 800 Z" fill="#D3BE9C" opacity=".28"/>
<g clip-path="url(#fig-h5-chairclip)">
<rect x="300" y="560" width="660" height="460" fill="url(#fig-h5-chair)"/>
<polygon points="470,780 610,720 760,800 960,840 960,1010 440,1010" fill="#4A3A2A" opacity=".62" filter="url(#fig-h5-b28)"/>
<polygon points="330,880 420,960 420,1010 330,1010" fill="#6A5236" opacity=".4" filter="url(#fig-h5-b28)"/>
<path d="M318 584 Q350 578 384 596 Q444 624 506 662 Q556 696 594 740 Q614 764 630 790 L606 784 Q560 726 500 690 Q440 656 380 628 Q340 612 322 604 Z" fill="#D3BE9C" opacity=".85"/>
<path d="M654 842 Q690 852 757 846 Q830 842 871 853 Q902 870 921 903 L915 905 Q896 876 866 862 Q830 852 757 856 Q690 862 654 852 Z" fill="#D3BE9C" opacity=".6"/>
<rect x="300" y="560" width="660" height="460" fill="url(#fig-h5-tweed)"/>
</g>
<polygon points="300,1000 393,1000 385,960 300,978" fill="#7A5A3E" opacity=".25" filter="url(#fig-h5-b10)"/>
</g>
<!-- 朝日（手描き）。窓のにじみ、床へ落ちる帯、縁のあたたかい陰 -->
<g transform="translate(0,100) scale(.8)" clip-path="url(#fig-h5-crop)">
<g clip-path="url(#fig-h5-open)">
<polygon points="90,200 150,200 330,640 230,660" fill="url(#fig-h5-beam)" opacity=".28" filter="url(#fig-h5-b10)"/>
<polygon points="250,200 320,200 420,560 300,600" fill="url(#fig-h5-beam)" opacity=".22" filter="url(#fig-h5-b10)"/>
<polygon points="216,586 350,586 356,800 140,800" fill="url(#fig-h5-beam)" opacity=".5"/>
</g>
<g clip-path="url(#fig-h5-floor)">
<polygon points="168,812 352,806 400,1000 150,1000 170,890" fill="#FFE3A6" opacity=".55" filter="url(#fig-h5-b10)"/>
<polygon points="206,818 318,812 376,1000 170,1000" fill="#FFF3D2" opacity=".5" filter="url(#fig-h5-b10)"/>
</g>
<g transform="rotate(-8 222 852)"><ellipse cx="225" cy="861" rx="46" ry="11" fill="#6B4222" opacity=".3" filter="url(#fig-h5-b4)"/><path d="M180 856 Q178 838 204 836 L252 836 Q272 844 268 856 Q266 864 252 864 L196 864 Q182 864 180 856 Z" fill="#2F4F73"/><path d="M192 838 Q218 822 244 838 L244 846 Q218 832 192 846 Z" fill="#8FB0D0"/></g>
<g transform="rotate(6 298 868)"><ellipse cx="301" cy="877" rx="46" ry="11" fill="#6B4222" opacity=".3" filter="url(#fig-h5-b4)"/><path d="M256 872 Q254 854 280 852 L328 852 Q348 860 344 872 Q342 880 328 880 L272 880 Q258 880 256 872 Z" fill="#2F4F73"/><path d="M268 854 Q294 838 320 854 L320 862 Q294 848 268 862 Z" fill="#8FB0D0"/></g>
<polygon points="98,458 204,462 206,478 98,474" fill="#FFF3D2" opacity=".65"/>
<polygon points="320,440 458,446 458,458 320,454" fill="#FFF3D2" opacity=".65"/>
<path d="M325 587 Q350 584 380 600 Q440 628 500 667" fill="none" stroke="#FFF3D2" stroke-width="5" stroke-linecap="round" opacity=".55"/>
<path d="M511 596 Q514 574 548 551" fill="none" stroke="#FFF3D2" stroke-width="5" stroke-linecap="round" opacity=".6"/>
<rect width="1000" height="1000" fill="url(#fig-h5-vig)"/>
</g>
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

/* ROOM 01 の2枚目（503 号室・UNICO・ソファの一角の朝）。1枚目は実写（public/photos/rooms/unico-bedroom.webp）。
   元写真 IMG_6319.JPG の切り出し（x 928〜5330, y 880〜3960 → 1000×700）。座標はその切り出しのピクセル座標。
   写真にあるもの：壁のアート、緑のソファ、ドット柄のクッション、サイドテーブルとスピーカー。
   **手描きの足し物**：窓の形で壁に落ちる朝日と木の葉影、畳んだシャンブレーのスロー。
   旧 ROOM1（ツインベッド）と旧 ROOM1_MORNING（LDK）は、この絵と実写に置き換えた。
   作り方：docs/review-2026-10-11/illustration-style-guide.md */
export const ROOM1 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs><filter id="fig-r1s-b3" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter><filter id="fig-r1s-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter><filter id="fig-r1s-b12" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="12"/></filter><filter id="fig-r1s-b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30"/></filter><radialGradient id="fig-r1s-vig" cx="0.5" cy="0.42" r="0.85"><stop offset=".55" stop-color="#6B4222" stop-opacity="0"/><stop offset="1" stop-color="#6B4222" stop-opacity="0.22"/></radialGradient><radialGradient id="fig-r1s-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".95"/><stop offset=".6" stop-color="#FFE3A6" stop-opacity=".35"/><stop offset="1" stop-color="#FFE3A6" stop-opacity="0"/></radialGradient><linearGradient id="fig-r1s-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".62"/><stop offset="1" stop-color="#FFE3A6" stop-opacity=".16"/></linearGradient><linearGradient id="fig-r1s-wall" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#F8F3E8"/><stop offset="0.55" stop-color="#F1EBE0"/><stop offset="1" stop-color="#E0D6C6"/></linearGradient><linearGradient id="fig-r1s-sofa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#48878B"/><stop offset="0.18" stop-color="#28595D"/><stop offset="1" stop-color="#1B4448"/></linearGradient><linearGradient id="fig-r1s-seat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#28595D"/><stop offset="1" stop-color="#1B4448"/></linearGradient><linearGradient id="fig-r1s-patch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFCEF" stop-opacity="0.9"/><stop offset="1" stop-color="#FFF1CC" stop-opacity="0.7"/></linearGradient><pattern id="fig-r1s-dots" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><circle cx="5" cy="5" r="4.2" fill="#F5F0DB"/><circle cx="15" cy="15" r="4.2" fill="#F5F0DB"/></pattern><clipPath id="fig-r1s-crop"><rect width="1000" height="700"/></clipPath></defs>
<g clip-path="url(#fig-r1s-crop)">
<!-- 壁と、左右の入隅の影 -->
<rect x="0" y="0" width="1000" height="700" fill="url(#fig-r1s-wall)"/>
<rect x="0" y="0" width="22" height="700" fill="#E0D6C6" opacity=".7"/>
<rect x="975" y="0" width="25" height="700" fill="#E0D6C6" opacity=".7"/>
<rect x="0" y="0" width="1000" height="34" fill="#E0D6C6" opacity=".35" filter="url(#fig-r1s-b12)"/>
<!-- 壁のアート（額・マット・プリント） -->
<ellipse cx="596" cy="226" rx="140" ry="9" fill="#5B4A3A" opacity="0.22" filter="url(#fig-r1s-b6)"/>
<rect x="459" y="63" width="269" height="155" fill="#7A4B2A"/>
<rect x="459" y="63" width="269" height="6" fill="#9C6A40" opacity=".7"/>
<rect x="472" y="74" width="243" height="133" fill="#F8F4EC"/>
<rect x="492" y="97" width="203" height="88" fill="#E7D3A6"/>
<polygon points="492,97 556,97 556,185 492,185" fill="#3C424D"/>
<polygon points="640,97 695,97 695,185 640,185" fill="#3C424D"/>
<rect x="640" y="97" width="55" height="34" fill="#CB6B3A" opacity=".85"/>
<ellipse cx="580" cy="126" rx="18" ry="14" fill="#B8452E"/>
<ellipse cx="520" cy="130" rx="15" ry="22" fill="#E7D3A6" opacity=".95"/>
<rect x="566" y="160" width="50" height="20" fill="#D9A867"/>
<rect x="572" y="168" width="22" height="5" fill="#3C424D"/>
<polygon points="520,142 545,136 536,165 516,160" fill="#3C424D" opacity=".9"/>
<!-- 朝日：窓の形で壁に落ちる光（十字の桟の影つき）と、窓の外の木の葉影。手描き -->
<polygon points="70,100 420,52 458,352 108,400" fill="url(#fig-r1s-patch)" filter="url(#fig-r1s-b3)"/>
<polygon points="237.125,77.08 252.875,74.92 290.875,374.92 275.125,377.08" fill="#F1EBE0" opacity=".55"/>
<polygon points="88.05,242.5 438.05,194.5 439.95,209.5 89.95,257.5" fill="#F1EBE0" opacity=".55"/>
<g filter="url(#fig-r1s-b3)" opacity=".2">
<path d="M404 372 C374 311 312 265 254 252 C280 306 338 356 404 372 Z" fill="#6B5238"/>
<path d="M410 372 C409 307 377 240 334 202 C334 259 362 328 410 372 Z" fill="#6B5238"/>
<path d="M404 372 C430 330 436 274 424 232 C401 269 391 324 404 372 Z" fill="#6B5238"/>
<path d="M410 372 C350 330 267 317 204 332 C257 369 338 388 410 372 Z" fill="#6B5238"/>
<path d="M404 372 C373 337 325 315 284 312 C311 343 358 368 404 372 Z" fill="#6B5238"/>
<path d="M410 372 C408 343 393 314 374 297 C375 322 389 353 410 372 Z" fill="#6B5238"/>
<path d="M404 372 q-10 -60 -40 -110" fill="none" stroke="#6B5238" stroke-width="5" stroke-linecap="round"/>
</g>
<ellipse cx="70" cy="80" rx="190" ry="140" fill="url(#fig-r1s-glow)" opacity=".55"/>
<!-- ソファ（背クッション2つ・座面） -->
<ellipse cx="590" cy="450" rx="420" ry="10" fill="#5B4A3A" opacity="0.25" filter="url(#fig-r1s-b6)"/>
<path d="M203 640 L203 464 Q203 447 220 447 L573 447 Q590 447 590 464 L590 640 Z" fill="url(#fig-r1s-sofa)"/>
<path d="M600 640 L600 468 Q600 452 616 452 L966 452 Q982 452 982 468 L982 640 Z" fill="url(#fig-r1s-sofa)"/>
<polygon points="588,452 602,452 602,640 588,640" fill="#133438"/>
<path d="M203 600 L203 640 L590 640 L590 600 Z" fill="#133438" opacity=".45"/>
<path d="M600 600 L600 640 L982 640 L982 600 Z" fill="#133438" opacity=".45"/>
<path d="M214 452 L574 452" fill="none" stroke="#48878B" stroke-width="4" stroke-linecap="round" opacity=".9"/>
<path d="M610 457 L968 457" fill="none" stroke="#48878B" stroke-width="4" stroke-linecap="round" opacity=".9"/>
<polygon points="930,460 982,468 982,640 930,640" fill="#1B4448" opacity=".5" filter="url(#fig-r1s-b6)"/>
<polygon points="180,700 203,640 982,640 1000,700" fill="url(#fig-r1s-seat)"/>
<path d="M203 642 L982 642" fill="none" stroke="#48878B" stroke-width="3" stroke-linecap="round" opacity=".5"/>
<!-- 足し物：畳んだシャンブレーのスロー -->
<ellipse cx="330" cy="700" rx="110" ry="12" fill="#0F2A2E" opacity="0.45" filter="url(#fig-r1s-b6)"/>
<path d="M232 700 L232 654 Q232 636 250 636 L408 636 Q426 636 426 654 L426 700 Z" fill="#A9C2D9"/>
<path d="M232 654 Q232 636 250 636 L408 636 Q426 636 426 654 L426 664 L232 664 Z" fill="#C9DAEA" opacity=".9"/>
<path d="M232 684 L426 684 L426 700 L232 700 Z" fill="#8CA8C3" opacity=".6"/>
<path d="M240 652 L418 652" fill="none" stroke="#DE8B47" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 6" opacity=".9"/>
<path d="M240 674 L418 674" fill="none" stroke="#DE8B47" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 6" opacity=".7"/>
<!-- ドット柄のクッション -->
<ellipse cx="640" cy="690" rx="120" ry="14" fill="#0F2A2E" opacity="0.4" filter="url(#fig-r1s-b6)"/>
<polygon points="592,478 745,571 642,692 496,631" fill="#C8D0B3"/>
<polygon points="592,478 745,571 642,692 496,631" fill="url(#fig-r1s-dots)"/>
<polygon points="592,478 745,571 726,590 592,500" fill="#fff" opacity=".22"/>
<polygon points="496,631 642,692 745,571 736,580 640,668 503,620" fill="#A9B292" opacity=".45"/>
<!-- サイドテーブル（ウォルナットの天板・黒い脚）とスピーカー -->
<ellipse cx="120" cy="700" rx="90" ry="10" fill="#5B4A3A" opacity="0.3" filter="url(#fig-r1s-b6)"/>
<rect x="73" y="640" width="8" height="60" fill="#2A2622"/>
<rect x="154" y="632" width="8" height="68" fill="#2A2622"/>
<polygon points="27,572 150,572 166,598 12,598" fill="#AB7746"/>
<rect x="12" y="598" width="154" height="10" fill="#8A5A33"/>
<rect x="14" y="608" width="142" height="32" fill="#2A2622" opacity=".92"/>
<rect x="24" y="616" width="34" height="10" rx="2" fill="#D9D4C8" opacity=".8"/>
<ellipse cx="86" cy="598" rx="70" ry="7" fill="#2A2622" opacity="0.4" filter="url(#fig-r1s-b3)"/>
<rect x="27" y="520" width="119" height="78" rx="6" fill="#363D55"/>
<rect x="27" y="506" width="119" height="22" rx="6" fill="#515B7C"/>
<circle cx="58" cy="516" r="4" fill="#CDA64B"/>
<circle cx="82" cy="516" r="4" fill="#CDA64B"/>
<circle cx="106" cy="516" r="4" fill="#CDA64B"/>
<rect x="38" y="538" width="98" height="48" rx="2" fill="#D6C48E"/>
<rect x="38" y="576" width="98" height="10" fill="#A99865" opacity=".6"/>
<path d="M56 566 q10 -14 20 -2 t20 0 t18 -4" fill="none" stroke="#2A2622" stroke-width="3" stroke-linecap="round" opacity=".55"/>
<rect x="38" y="546" width="98" height="1.4" fill="#A99865" opacity=".5"/>
<rect x="38" y="556" width="98" height="1.4" fill="#A99865" opacity=".5"/>
<rect x="38" y="566" width="98" height="1.4" fill="#A99865" opacity=".5"/>
<rect x="38" y="576" width="98" height="1.4" fill="#A99865" opacity=".5"/>
<!-- 四隅のあたたかい陰 -->
<rect width="1000" height="700" fill="url(#fig-r1s-vig)"/>
</g>
</svg>
`;

/* ROOM 02（JOURNAL STANDARD FURNITURE・Coming soon）。元写真は無い。~/Downloads/ROOM2.png と同構図の
   既存コンセプト絵の形を保ったまま、スタイルガイドに沿って描き直した（織り目・タイルの繰り返しを面に、
   朝日と縁の光、接地影、四隅の陰を追加）。新規創作はしていない。実写でないことは帯の Coming soon スタンプで示す。 */
export const ROOM2 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="fig-r2n-w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6F3EC"/><stop offset="1" stop-color="#E7E1D4"/></linearGradient>
            <!-- バルコニーの掃き出し窓。ROOM 01 のような朝の逆光ではなく、
                 日中のやわらかい外光。上は白く抜いて、下だけ床の色を拾う -->
            <linearGradient id="fig-r2n-gl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#F1F6F9"/><stop offset=".55" stop-color="#EBF0F0"/><stop offset="1" stop-color="#F6F0E1"/>
            </linearGradient>
            <!-- 打ち放しのコンクリート。梁・柱・窓わきの壁を同じ地で通す。
                 この部屋の Urban Vintage はここが持っている -->
            <linearGradient id="fig-r2n-cc" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C2BDB2"/><stop offset=".6" stop-color="#B9B4A8"/><stop offset="1" stop-color="#ADA89C"/></linearGradient>
            <!-- 床は木ではなくタイルカーペット。杢の入った、この部屋で
                 いちばん暗い面 -->
            <linearGradient id="fig-r2n-cp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#75695C"/><stop offset=".5" stop-color="#62574C"/><stop offset="1" stop-color="#4E453B"/></linearGradient>
            <!-- 白地に細いストライプの寝具（ROOM 01 と同じ生地） -->
            <linearGradient id="fig-r2n-bd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBF9F4"/><stop offset="1" stop-color="#EDE7DA"/></linearGradient>
            <!-- 緑のスローの下に重ねた、生成りのワッフルブランケット -->
            <linearGradient id="fig-r2n-wf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F1EBDC"/><stop offset="1" stop-color="#E2D9C5"/></linearGradient>
            <linearGradient id="fig-r2n-tb" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#D6BB93"/><stop offset=".55" stop-color="#C2A377"/><stop offset="1" stop-color="#AC8C61"/>
            </linearGradient>
            <filter id="fig-r2n-n-b20"><feGaussianBlur stdDeviation="20"/></filter>
          <filter id="fig-r2n-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>
            <filter id="fig-r2n-b12" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="12"/></filter>
            <radialGradient id="fig-r2n-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".9"/><stop offset=".6" stop-color="#FFE3A6" stop-opacity=".32"/><stop offset="1" stop-color="#FFE3A6" stop-opacity="0"/></radialGradient>
            <radialGradient id="fig-r2n-vig" cx=".55" cy=".45" r=".8"><stop offset=".55" stop-color="#6B4222" stop-opacity="0"/><stop offset="1" stop-color="#6B4222" stop-opacity=".24"/></radialGradient>
          </defs>

          <!-- 天井と壁（ガイド適用で全体を少しだけ暖色へ：最後のオーバーレイ） -->
          <rect width="1000" height="700" fill="url(#fig-r2n-w)"/>
          <rect width="1000" height="58" fill="#FBF8F1"/>

          <!-- 現しの梁。画面をまるごと横切る。天井から下がっているので、
               モバイルで上が切られても帯として残る高さに置く -->
          <g>
            <path d="M0 34 L1000 62 L1000 142 L0 126 Z" fill="url(#fig-r2n-cc)"/>
            <path d="M0 34 L1000 62 L1000 76 L0 50 Z" fill="#C8C3B9"/>
            <path d="M0 126 L1000 142 L1000 152 L0 137 Z" fill="#8E8980" opacity=".55"/>
          </g>
          <!-- 梁の向こう、一段下がったダイニング側の天井 -->
          <path d="M462 150 L1000 164 L1000 198 L462 186 Z" fill="#F4F0E7"/>
          <path d="M462 186 L1000 198 L1000 203 L462 191 Z" fill="#DCD5C6" opacity=".8"/>

          <!-- バルコニーの掃き出し窓。ROOM 01 と違って、この部屋は
               カーテンを引いていない。外光がそのまま入る -->
          <g>
            <rect x="786" y="196" width="214" height="256" fill="url(#fig-r2n-gl)"/>
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
            <rect x="704" y="190" width="82" height="262" fill="url(#fig-r2n-cc)"/>
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
          <rect y="452" width="1000" height="248" fill="url(#fig-r2n-cp)"/>
          <rect y="452" width="1000" height="7" fill="#2C2721" opacity=".6"/>
          <g stroke="#3B352D" stroke-width="2" opacity=".45">
            
            <line x1="640" y1="452" x2="354" y2="700"/><line x1="822" y1="452" x2="1000" y2="529"/>
          </g>
          <ellipse cx="538" cy="468" rx="62" ry="12" fill="#241F1A" opacity=".35" filter="url(#fig-r2n-n-b20)"/>

          <!-- 窓からの光。カーペットが部屋でいちばん暗い面なので、
               光条は床の上でいちばん効く -->
          <g>
            <path d="M790 206 L1000 206 L884 700 L472 700 Z" fill="#FFF4DE" opacity=".13"/>
            <path d="M802 210 L898 210 L690 700 L494 700 Z" fill="#FFFCF2" opacity=".1"/>
            <path d="M934 208 L1000 208 L1000 700 L836 700 Z" fill="#FFFCF2" opacity=".09"/>
          </g>
          <ellipse cx="884" cy="470" rx="210" ry="26" fill="#FFF1CE" opacity=".4" filter="url(#fig-r2n-n-b20)"/>

          <!-- ダイニングの上に一灯だけ下がる、白いホーローのペンダント -->
          <g>
            <line x1="748" y1="190" x2="748" y2="262" stroke="#2B2620" stroke-width="3"/>
            <path d="M748 256 L802 304 q-54 16 -108 0 Z" fill="#FBFAF6"/>
            <path d="M748 256 L778 283 q-30 8 -60 0 Z" fill="#FFFFFF" opacity=".6"/>
            <path d="M694 304 q54 16 108 0 q-54 10 -108 0 Z" fill="#DCD5C6"/>
            <circle cx="748" cy="308" r="9" fill="#F0D9A8"/>
            <circle cx="748" cy="312" r="42" fill="#F0D9A8" opacity=".22" filter="url(#fig-r2n-n-b20)"/>
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
            <ellipse cx="880" cy="576" rx="184" ry="24" fill="#241F1A" opacity=".3" filter="url(#fig-r2n-n-b20)"/>
            <g stroke="#A9895E" stroke-width="10" stroke-linecap="round"><line x1="720" y1="470" x2="714" y2="530"/></g>
            <path d="M700 450 L968 438 L1014 482 L746 496 Z" fill="url(#fig-r2n-tb)"/>
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
          <ellipse cx="230" cy="596" rx="300" ry="26" fill="#1C1813" opacity=".32" filter="url(#fig-r2n-n-b20)"/>

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
            <path d="M42 406 L410 406 L462 552 L-14 552 Z" fill="url(#fig-r2n-bd)"/>
            <path d="M42 406 L410 406 L414 438 L38 438 Z" fill="#FFFFFF" opacity=".75"/>
            <path d="M38 438 L414 438" fill="none" stroke="#D3CCBC" stroke-width="2.5"/>
            <!-- 足もとに掛けたセージのスロー -->
            <path d="M28 452 L418 452 L440 500 L4 500 Z" fill="#8FA277"/>
            <path d="M28 452 L418 452 L419 462 L26 462 Z" fill="#A2B389"/>
            <g fill="none" stroke="#7F9168" stroke-width="3" opacity=".45"><path d="M150 458 L140 500"/><path d="M272 458 L270 500"/><path d="M372 458 L386 500"/></g>
            <!-- その下に重ねた、生成りのワッフル -->
            <path d="M14 500 L432 500 L448 534 L-4 534 Z" fill="url(#fig-r2n-wf)"/>
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
          <!-- ガイド適用：椅子の接地影（ぼかした楕円） -->
          <g fill="#241F1A" filter="url(#fig-r2n-b6)">
            <ellipse cx="738" cy="634" rx="64" ry="7" opacity=".4"/><ellipse cx="936" cy="648" rx="64" ry="7" opacity=".4"/>
            <ellipse cx="764" cy="588" rx="44" ry="5" opacity=".3"/><ellipse cx="1004" cy="570" rx="30" ry="5" opacity=".3"/>
          </g>
          <!-- 朝日（手描き）：窓のにじみ、窓から床へ伸びる光条、縁（椅子の背・テーブル・台）のハイライト -->
          <g>
            <ellipse cx="892" cy="320" rx="190" ry="170" fill="url(#fig-r2n-glow)" opacity=".42" filter="url(#fig-r2n-b12)"/>
            <path d="M790 206 L1000 206 L884 700 L472 700 Z" fill="#FFF0CC" opacity=".16" filter="url(#fig-r2n-b6)"/>
            <path d="M806 210 L900 210 L690 700 L520 700 Z" fill="#FFF8E4" opacity=".14" filter="url(#fig-r2n-b6)"/>
            <path d="M700 450 L968 438" fill="none" stroke="#FFF3D2" stroke-width="4" stroke-linecap="round" opacity=".6"/>
            <path d="M694 486 L782 486 M892 498 L980 498" fill="none" stroke="#FFF3D2" stroke-width="4" stroke-linecap="round" opacity=".5"/>
            <path d="M-56 556 L472 556" fill="none" stroke="#FFF3D2" stroke-width="4" opacity=".4"/>
          </g>
          <!-- 四隅のあたたかい陰（視線をベッドとテーブルへ寄せる） -->
          <rect width="1000" height="700" fill="url(#fig-r2n-vig)"/>
        </svg>
`;

/* ROOM 03（CRASH GATE）の帯の2枚目（ランプとグレーのソファの部屋＝ユニットA の一角）。1枚目は実写
   （public/photos/rooms/crash-gate-living.webp）。元写真は IMG_6264.JPG の切り出し
   （x 2000〜6000, y 600〜3400 → 1000×700）。部屋割りはユーザー確定（2026-10-11）。
   写真にあるもの：アークのフロアランプ、シアーのカーテン、ダイニングテーブルと椅子、緑のクッション、革ポーチ。
   **手描きの足し物**：朝のマグカップと湯気、ランプと窓の光。
   旧 ROOM3（ユニットAを写し取った版・未コミット）は docs/review-2026-10-11/old-room3-unitA-0919.svg.html に退避。 */
export const ROOM3 = String.raw`
<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs><filter id="fig-r3n-b3" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter><filter id="fig-r3n-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter><filter id="fig-r3n-b12" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="12"/></filter><filter id="fig-r3n-b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30"/></filter><radialGradient id="fig-r3n-vig" cx="0.5" cy="0.42" r="0.85"><stop offset=".55" stop-color="#6B4222" stop-opacity="0"/><stop offset="1" stop-color="#6B4222" stop-opacity="0.24"/></radialGradient><radialGradient id="fig-r3n-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".95"/><stop offset=".6" stop-color="#FFE3A6" stop-opacity=".35"/><stop offset="1" stop-color="#FFE3A6" stop-opacity="0"/></radialGradient><linearGradient id="fig-r3n-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3D2" stop-opacity=".62"/><stop offset="1" stop-color="#FFE3A6" stop-opacity=".16"/></linearGradient><linearGradient id="fig-r3n-wallg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#D2B5A4"/><stop offset="0.35" stop-color="#DEC3B1"/><stop offset="1" stop-color="#EDD0B2"/></linearGradient><linearGradient id="fig-r3n-carp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B2A79F"/><stop offset="1" stop-color="#6F655F"/></linearGradient><linearGradient id="fig-r3n-curt" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#D5CFC5"/><stop offset="0.5" stop-color="#FDFDFA"/><stop offset="1" stop-color="#FDFDFA"/></linearGradient><linearGradient id="fig-r3n-tbltop" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#CC8260"/><stop offset="0.6" stop-color="#A8573B"/><stop offset="1" stop-color="#7A3A27"/></linearGradient><linearGradient id="fig-r3n-gcush" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#79986E"/><stop offset="0.4" stop-color="#4F6C49"/><stop offset="1" stop-color="#334A31"/></linearGradient><radialGradient id="fig-r3n-globe" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.6" stop-color="#FFF4D6"/><stop offset="1" stop-color="#FFE1A0"/></radialGradient><radialGradient id="fig-r3n-lampglow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#FFE9B0" stop-opacity="0.85"/><stop offset="0.45" stop-color="#FFD58A" stop-opacity="0.38"/><stop offset="1" stop-color="#FFD58A" stop-opacity="0"/></radialGradient><pattern id="fig-r3n-tuft" width="46" height="40" patternUnits="userSpaceOnUse"><circle cx="12" cy="10" r="2.4" fill="#000" opacity=".12"/><circle cx="35" cy="30" r="2.4" fill="#000" opacity=".12"/></pattern><clipPath id="fig-r3n-crop"><rect width="1000" height="700"/></clipPath></defs>
<g clip-path="url(#fig-r3n-crop)">
<!-- 天井・ダウンライト・カーテンボックス -->
<rect x="0" y="0" width="1000" height="700" fill="#DEC3B1"/>
<rect x="0" y="0" width="662" height="112" fill="#EDE6DC"/>
<rect x="0" y="92" width="662" height="22" fill="#D9CFC2" opacity=".6"/>
<ellipse cx="250" cy="57" rx="20" ry="5" fill="#fff"/>
<ellipse cx="559" cy="28" rx="20" ry="5" fill="#fff"/>
<rect x="0" y="62" width="664" height="36" fill="#8A5A33"/>
<rect x="0" y="62" width="664" height="6" fill="#AC7746" opacity=".85"/>
<!-- 窓（逆光）とシアーカーテン -->
<rect x="0" y="98" width="662" height="600" fill="url(#fig-r3n-curt)"/>
<rect x="180" y="270" width="482" height="14" fill="#E8EAE8" opacity=".8"/>
<rect x="180" y="330" width="482" height="14" fill="#E8EAE8" opacity=".8"/>
<rect x="180" y="392" width="482" height="14" fill="#E8EAE8" opacity=".8"/>
<rect x="0" y="98" width="662" height="600" fill="#fff" opacity=".0"/>
<rect x="-6" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="2" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="21" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="29" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="49" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="57" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="76" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="84" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="103" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="111" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="131" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="139" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="159" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="167" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="185" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="193" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="211" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="219" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="239" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="247" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="266" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="274" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="294" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="302" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="322" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="330" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="348" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="356" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="374" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="382" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="401" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="409" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="428" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="436" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="454" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="462" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="480" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="488" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="508" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="516" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="536" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="544" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="564" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="572" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="590" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="598" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="618" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="626" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<rect x="645" y="128" width="5.5" height="500" fill="#D5CFC5" opacity=".8"/>
<rect x="653" y="128" width="9" height="500" fill="#fff" opacity=".55"/>
<ellipse cx="10" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="36.2" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="62.4" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="88.6" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="114.8" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="141" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="167.2" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="193.4" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="219.6" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="245.8" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="272" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="298.2" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="324.4" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="350.6" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="376.8" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="403" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="429.2" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="455.4" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="481.6" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="507.8" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="534" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="560.2" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="586.4" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="612.6" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="638.8" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<ellipse cx="665" cy="132" rx="13" ry="9" fill="#E7E2D8"/>
<rect x="0" y="112" width="664" height="22" fill="#D5CFC5" opacity=".55"/>
<rect x="0" y="560" width="662" height="140" fill="#B9B2A6" opacity=".25" filter="url(#fig-r3n-b12)"/>
<!-- 右の壁と柱（ランプの光でオレンジに寄る） -->
<rect x="662" y="0" width="338" height="700" fill="url(#fig-r3n-wallg)"/>
<rect x="662" y="0" width="40" height="700" fill="#D2B5A4" opacity=".75"/>
<ellipse cx="700" cy="240" rx="260" ry="230" fill="url(#fig-r3n-lampglow)" opacity=".75"/>
<!-- アークのフロアランプ（光源） -->
<path d="M623 178 L621 130 Q620 70 689 59 Q760 60 779 137 Q795 230 806 375 L809 406" fill="none" stroke="#3B3029" stroke-width="10" stroke-linecap="round"/>
<path d="M806 375 L809 406" fill="none" stroke="#3B3029" stroke-width="10"/>
<rect x="798" y="402" width="22" height="86" rx="6" fill="#DB8E2E"/>
<rect x="802" y="404" width="7" height="82" rx="3" fill="#F2B65A" opacity=".85"/>
<rect x="808" y="488" width="10" height="150" fill="#3B3029"/>
<!-- カーペットの床 -->
<rect x="662" y="596" width="338" height="12" fill="#EAD7C5" opacity=".85"/>
<rect x="0" y="606" width="1000" height="94" fill="url(#fig-r3n-carp)"/>
<polygon points="0,606 1000,606 1000,640 0,640" fill="#6F655F" opacity=".55" filter="url(#fig-r3n-b12)"/>
<ellipse cx="26" cy="668" rx="26" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="160" cy="670" rx="46" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="270" cy="670" rx="24" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="392" cy="670" rx="24" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="450" cy="668" rx="22" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="487" cy="654" rx="18" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<ellipse cx="520" cy="670" rx="22" ry="6" fill="#2A1A12" opacity="0.38" filter="url(#fig-r3n-b3)"/>
<!-- ダイニングテーブル（赤茶の天板）とパキラでない小さな鉢植え -->
<ellipse cx="250" cy="668" rx="300" ry="14" fill="#3A2218" opacity="0.32" filter="url(#fig-r3n-b12)"/>
<polygon points="0,470 510,477 471,500 0,490" fill="url(#fig-r3n-tbltop)"/>
<polygon points="0,470 510,477 505,481 0,476" fill="#CC8260" opacity=".8"/>
<polygon points="0,490 471,500 471,514 0,506" fill="#7A3A27"/>
<polygon points="40,473 470,480 456,487 30,481" fill="#fff" opacity=".22" filter="url(#fig-r3n-b3)"/>
<polygon points="440,500 458,500 458,667 440,667" fill="#8C4530"/>
<polygon points="440,500 447,500 447,667 440,667" fill="#CC8260" opacity=".5"/>
<polygon points="476,497 497,497 497,650 476,650" fill="#65301F"/>
<ellipse cx="282" cy="480" rx="28" ry="4" fill="#3A2218" opacity="0.45" filter="url(#fig-r3n-b3)"/>
<path d="M260 468 Q282 486 304 468 Z" fill="#8A5A3A"/>
<ellipse cx="282" cy="468" rx="22" ry="4" fill="#3B2A1E"/>
<path d="M282 468 Q284 440 300 420" fill="none" stroke="#2F5A3A" stroke-width="3"/>
<path d="M284 458 Q268 446 252 440" fill="none" stroke="#2F5A3A" stroke-width="2.5"/>
<path d="M300 424 C338 422 356 395 352 362 C318 363 296 386 300 424 Z" fill="#4E7A44"/>
<path d="M300 424 C338 422 356 395 352 362 Z" fill="#7FAB58" opacity="0.5"/>
<path d="M286 456 C279 439 264 432 248 436 C254 451 268 460 286 456 Z" fill="#2F5A3A"/>
<path d="M286 456 C279 439 264 432 248 436 Z" fill="#4E7A44" opacity="0.5"/>
<path d="M293 440 C306 446 318 441 324 430 C313 424 300 428 293 440 Z" fill="#4E7A44"/>
<path d="M293 440 C306 446 318 441 324 430 Z" fill="#7FAB58" opacity="0.5"/>
<!-- 足し物：朝のマグカップと湯気 -->
<ellipse cx="398" cy="487" rx="22" ry="3.5" fill="#3A2218" opacity="0.4" filter="url(#fig-r3n-b3)"/>
<path d="M382 466 L414 466 L412 487 Q398 494 384 487 Z" fill="#F7F2E8"/>
<path d="M412 474 q9 0 8 8 q-1 6 -9 5" fill="none" stroke="#F7F2E8" stroke-width="3.2"/>
<rect x="386" y="477" width="24" height="4" fill="#D9D0C0" opacity=".7"/>
<path d="M392 462 q-9 -13 2 -24 q9 -11 0 -24" fill="none" stroke="#B9A68F" stroke-width="4" stroke-linecap="round" opacity=".55" filter="url(#fig-r3n-b3)"/>
<path d="M405 462 q-9 -13 2 -24 q9 -11 0 -22" fill="none" stroke="#B9A68F" stroke-width="3" stroke-linecap="round" opacity=".42" filter="url(#fig-r3n-b3)"/>
<!-- 椅子：左のスピンドル、中央の弓なり背、右の黒フレーム。座面のベンチ -->
<polygon points="182,535 476,535 480,568 186,570" fill="#3A3834"/>
<path d="M0 500 Q60 490 118 508 L116 520 Q60 504 0 514 Z" fill="#93492F"/>
<rect x="14" y="512" width="5" height="62" fill="#93492F"/>
<rect x="40" y="512" width="5" height="62" fill="#93492F"/>
<rect x="66" y="512" width="5" height="62" fill="#93492F"/>
<rect x="92" y="512" width="5" height="62" fill="#93492F"/>
<path d="M0 574 L214 570 L216 594 L0 598 Z" fill="#3A3834"/>
<rect x="22" y="594" width="8" height="74" fill="#6A3321"/>
<rect x="190" y="594" width="8" height="74" fill="#6A3321"/>
<path d="M250 500 Q330 480 405 500 Q404 528 400 536 Q330 524 254 536 Z" fill="#93492F"/>
<path d="M250 500 Q330 480 405 500 L404 508 Q330 490 252 510 Z" fill="#B86B4A" opacity=".8"/>
<rect x="262" y="530" width="8" height="140" fill="#6A3321"/>
<rect x="386" y="530" width="8" height="140" fill="#6A3321"/>
<path d="M132 590 Q190 582 245 590 Q232 616 190 616 Q148 616 132 590 Z" fill="#93492F"/>
<rect x="150" y="612" width="8" height="56" fill="#6A3321"/>
<rect x="228" y="612" width="8" height="56" fill="#6A3321"/>
<ellipse cx="458" cy="580" rx="64" ry="18" fill="#7C8873"/>
<ellipse cx="458" cy="574" rx="62" ry="14" fill="#97A38D" opacity=".8"/>
<path d="M424 590 L405 668 M492 590 L524 668" fill="none" stroke="#2A2622" stroke-width="6" stroke-linecap="round"/>
<path d="M522 480 L534 586" fill="none" stroke="#2A2622" stroke-width="6" stroke-linecap="round"/>
<path d="M497 476 Q530 470 558 478 L556 504 Q526 498 500 506 Z" fill="#93492F"/>
<!-- 手前：チェイズ・緑のクッション・サイドテーブルの革ポーチ・グレーのソファの腕 -->
<ellipse cx="150" cy="700" rx="170" ry="12" fill="#3A2218" opacity="0.35" filter="url(#fig-r3n-b6)"/>
<path d="M0 668 Q150 650 300 660 L304 700 L0 700 Z" fill="#E5D8C2"/>
<path d="M0 668 Q150 650 300 660 L300 668 Q150 658 0 676 Z" fill="#F3EAD8" opacity=".9"/>
<rect x="0" y="668" width="304" height="32" fill="url(#fig-r3n-tuft)"/>
<ellipse cx="388" cy="700" rx="110" ry="12" fill="#1E2E1D" opacity="0.45" filter="url(#fig-r3n-b6)"/>
<path d="M296 700 L304 628 Q312 586 344 570 Q392 556 436 574 Q474 600 480 650 L484 700 Z" fill="url(#fig-r3n-gcush)"/>
<path d="M308 640 Q318 596 346 578 Q384 566 420 576 Q366 584 338 620 Z" fill="#79986E" opacity=".75"/>
<path d="M430 580 Q470 604 480 650 L484 700 L446 700 Q450 640 430 580 Z" fill="#334A31" opacity=".55"/>
<rect x="296" y="560" width="190" height="140" fill="url(#fig-r3n-tuft)" opacity=".9"/>
<path d="M566 700 L572 640 Q580 592 618 566 Q666 544 722 556 Q778 572 800 626 L804 700 Z" fill="url(#fig-r3n-gcush)"/>
<path d="M580 646 Q592 600 626 576 Q668 556 712 562 Q656 574 622 612 Z" fill="#79986E" opacity=".75"/>
<path d="M740 566 Q790 590 802 640 L804 700 L762 700 Q770 630 740 566 Z" fill="#334A31" opacity=".55"/>
<rect x="566" y="540" width="240" height="160" fill="url(#fig-r3n-tuft)" opacity=".9"/>
<ellipse cx="660" cy="692" rx="76" ry="16" fill="#A8452B"/>
<ellipse cx="660" cy="686" rx="74" ry="11" fill="#C9684A" opacity=".75"/>
<ellipse cx="738" cy="690" rx="66" ry="8" fill="#3A2218" opacity="0.45" filter="url(#fig-r3n-b3)"/>
<path d="M676 664 Q700 622 760 628 Q792 634 796 664 Q796 684 770 690 Q724 692 680 688 Z" fill="#B8602E"/>
<path d="M676 664 Q700 622 760 628 Q792 634 796 650 Q740 640 690 660 Z" fill="#D88556" opacity=".8"/>
<path d="M690 678 Q740 690 790 676 Q790 692 740 694 Q696 692 690 678 Z" fill="#8A431F" opacity=".7"/>
<path d="M774 700 Q780 650 840 632 Q930 620 1000 640 L1000 700 Z" fill="#8E8179"/>
<path d="M780 680 Q790 650 842 636 Q920 626 980 640 Q900 640 846 656 Q800 672 786 700 Z" fill="#AA9D95" opacity=".7"/>
<!-- 朝日：ランプのにじみ、窓から落ちる光条、縁のハイライト、四隅の陰 -->
<ellipse cx="629" cy="243" rx="150" ry="140" fill="url(#fig-r3n-lampglow)" opacity=".9" filter="url(#fig-r3n-b12)"/>
<circle cx="629" cy="243" r="66" fill="url(#fig-r3n-globe)"/>
<circle cx="629" cy="243" r="66" fill="none" stroke="#FFE1A0" stroke-width="3" opacity=".7"/>
<ellipse cx="608" cy="222" rx="22" ry="14" fill="#fff" opacity=".55"/>
<g opacity=".5">
<polygon points="80,620 140,612 200,700 100,700" fill="url(#fig-r3n-beam)" filter="url(#fig-r3n-b6)"/>
<polygon points="200,620 260,612 320,700 220,700" fill="url(#fig-r3n-beam)" filter="url(#fig-r3n-b6)"/>
<polygon points="330,620 390,612 450,700 350,700" fill="url(#fig-r3n-beam)" filter="url(#fig-r3n-b6)"/>
<polygon points="450,620 510,612 570,700 470,700" fill="url(#fig-r3n-beam)" filter="url(#fig-r3n-b6)"/>
</g>
<path d="M312 592 Q340 560 392 566" fill="none" stroke="#FFF3D2" stroke-width="4" stroke-linecap="round" opacity=".5"/>
<path d="M592 574 Q640 538 706 552" fill="none" stroke="#FFF3D2" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<ellipse cx="740" cy="640" rx="60" ry="20" fill="url(#fig-r3n-lampglow)" opacity=".5"/>
<rect width="1000" height="700" fill="url(#fig-r3n-vig)"/>
</g>
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
