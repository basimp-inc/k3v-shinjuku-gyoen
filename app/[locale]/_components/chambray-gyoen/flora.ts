/* 新宿御苑の林床の植物。chambray-gyoen だけが使う装飾レイヤーの素材。
 *
 * 2026-08-20 クライアント参考資料4点にもとづく描き直し。
 * 前版との決定的な違い：
 *   1. ヤツデの葉脈を「葉より明るい黄緑」にした。写真では葉脈が明るく光って
 *      いて、これがヤツデらしさの大半を作っている。前版は暗い緑の脈で、
 *      正反対だった。
 *   2. 裂片を楕円の集合から、先の尖った長い裂片に。写真の葉は掌というより
 *      星形に近い。丸い裂片だと別の植物に見える。
 *   3. 参考資料はすべて「葉」で、花は写っていない。よって株は花序ではなく
 *      葉の重なりで組む（写真1が葉の密集そのもの）。
 *   4. 斑入りアオキを追加。金色の斑はページで最も明るい植物要素になる。
 *   5. アオキの実を鈍い朱から鮮やかな赤へ、形も球から楕円へ（写真3）。
 *
 * 3種にそれぞれ別の視覚的役割を与えている。ただ並べると「ボタニカル雑貨店」に
 * なるので、各々ひとつの仕事しか持たせない：
 *   ヤツデ   = 面   大きな掌状葉。余白を占める主役。
 *   アオキ   = 点   光沢のある葉と赤い実／金の斑。要所を留める。
 *   ヨモギ   = 線   細かく裂けた葉。繋ぎのテクスチャ。
 *
 * 色は承認済みパレットの変数を参照する。<use> で参照されたシンボルの中でも
 * カスタムプロパティは解決されるので、テーマの色が変われば植物も追従する。
 * 追加色はすべて中明度以上で、「暗色を入れない」規則を守っている（最暗が
 * アオキの実 #D93B22 の L*49.5）。
 *
 * id は cg- 接頭辞。他デザインが同じ document にいるため。
 */
export const CG_FLORA_DEFS = String.raw`
<defs>
  <!-- ============ ヤツデ ＝ 面 ==============================================
       写真1。裂片は長く伸びて先が尖り、谷は深い。葉脈は葉身より明るい黄緑で、
       付け根から放射する。裂片は7枚。 -->
  <!-- 葉身の形だけを持つ素体。塗りを持たないので、同じ形を色違いで2度
       重ねられる（基本色 → 陰）。defs 直下なのでこれ自体は描画されない -->
  <!-- 葉身の形だけを持つ素体。塗りを持たないので、同じ形を色違いで2度
       重ねられる（基本色 → 陰）。defs 直下なのでこれ自体は描画されない。

       2026-08-21 Step 3：裂片を描き直した。
       前版は最大半幅/長さ = 21/130 = 0.162 で、しかも最大幅の位置が長さの
       54% と外寄りだった。この2つが重なると裂片は「細い棘」になり、7枚を
       放射させたときに中心付近に大きな空きくさびが7つできて、掌状葉では
       なくアガベ／ユッカに見えていた。Step 2 で株を 1.33 倍にしたことで
       この傾向はむしろ強まっていた。

       新版は 25.2/130 = 0.194、最大幅の位置を 42% へ内寄せ。基部を太く
       することが要点で、隣り合う裂片は半径 85（長さの 65%）まで接して
       ひと続きの葉身になり、そこから先だけが分かれて尖る。切れ込みの
       深さ 35% ＝ 実物のヤツデの見え方。裂片1枚の面積は 2900 → 4358
       単位²（+50%）で、被覆率もここで稼いでいる。 -->
  <g id="cg-fatsia-blade">
    <g>
      <!-- 1枚の裂片を7方向へ。原点(120,210)＝葉柄の付け根で回転させる。
           外側の裂片ほど短く、長さに比例して幅も縮む（相似） -->
        <path transform="translate(120 210) rotate(-78)"
          d="M0 0 C 10.8 -8.3, 19.1 -23.3, 20.8 -41.5 C 21.6 -51.5, 19.1 -59.8, 16.6 -66.5
             C 14.1 -80.6, 10 -96.4, 0 -108 C -10 -96.4, -14.1 -80.6, -16.6 -66.5 C -19.1 -59.8, -21.6 -51.5, -20.8 -41.5 C -19.1 -23.3, -10.8 -8.3, 0 0 Z"/>
        <path transform="translate(120 210) rotate(-52)"
          d="M0 0 C 11.7 -9, 20.7 -25.2, 22.5 -45 C 23.4 -55.8, 20.7 -64.8, 18 -72
             C 15.3 -87.3, 10.8 -104.4, 0 -117 C -10.8 -104.4, -15.3 -87.3, -18 -72 C -20.7 -64.8, -23.4 -55.8, -22.5 -45 C -20.7 -25.2, -11.7 -9, 0 0 Z"/>
        <path transform="translate(120 210) rotate(-26)"
          d="M0 0 C 12.4 -9.5, 21.9 -26.7, 23.8 -47.7 C 24.8 -59.1, 21.9 -68.7, 19.1 -76.3
             C 16.2 -92.5, 11.4 -110.6, 0 -124 C -11.4 -110.6, -16.2 -92.5, -19.1 -76.3 C -21.9 -68.7, -24.8 -59.1, -23.8 -47.7 C -21.9 -26.7, -12.4 -9.5, 0 0 Z"/>
        <path transform="translate(120 210)"
          d="M0 0 C 13 -10, 23 -28, 25 -50 C 26 -62, 23 -72, 20 -80
             C 17 -97, 12 -116, 0 -130 C -12 -116, -17 -97, -20 -80 C -23 -72, -26 -62, -25 -50 C -23 -28, -13 -10, 0 0 Z"/>
        <path transform="translate(120 210) rotate(26)"
          d="M0 0 C 12.4 -9.5, 21.9 -26.7, 23.8 -47.7 C 24.8 -59.1, 21.9 -68.7, 19.1 -76.3
             C 16.2 -92.5, 11.4 -110.6, 0 -124 C -11.4 -110.6, -16.2 -92.5, -19.1 -76.3 C -21.9 -68.7, -24.8 -59.1, -23.8 -47.7 C -21.9 -26.7, -12.4 -9.5, 0 0 Z"/>
        <path transform="translate(120 210) rotate(52)"
          d="M0 0 C 11.7 -9, 20.7 -25.2, 22.5 -45 C 23.4 -55.8, 20.7 -64.8, 18 -72
             C 15.3 -87.3, 10.8 -104.4, 0 -117 C -10.8 -104.4, -15.3 -87.3, -18 -72 C -20.7 -64.8, -23.4 -55.8, -22.5 -45 C -20.7 -25.2, -11.7 -9, 0 0 Z"/>
        <path transform="translate(120 210) rotate(78)"
          d="M0 0 C 10.8 -8.3, 19.1 -23.3, 20.8 -41.5 C 21.6 -51.5, 19.1 -59.8, 16.6 -66.5
             C 14.1 -80.6, 10 -96.4, 0 -108 C -10 -96.4, -14.1 -80.6, -16.6 -66.5 C -19.1 -59.8, -21.6 -51.5, -20.8 -41.5 C -19.1 -23.3, -10.8 -8.3, 0 0 Z"/>
      <!-- 裂片が合流する中心。ここが抜けると葉が7枚の別々の葉に見える -->
      <ellipse cx="120" cy="196" rx="34" ry="24"/>
    </g>
  </g>

  <!-- 葉柄の付け根に溜まる陰。裂片が合流する中心はどの葉でも必ず暗くなる。
       ここが抜けていたのが「平らな緑の紙」に見えていた最大の理由。
       グラデーションの stop は paint server 側で解決されるので、<use> の
       シャドウツリー越しに来る --leaf-shade などの上書きは届かない。よって
       stop はハードコードし、レンガ地用の明るい版を別に用意して、継承する
       カスタムプロパティ --shade-paint で切り替える（CSS 側で定義）。
       値は --leaf-shade / --leaf-core と同一 -->
  <!-- 最初は葉柄の付け根を中心とする放射グラデーションにしたが、ヤツデの
       裂片は細長く放射状に伸びているので、中心が暗く先端が明るいと1枚ごとが
       独立した棘に見え、掌状葉ではなくアガベ／ユッカの見え方になった。
       方向性のある陰（光源側＝右上が明るく、左下が陰）に替えると、同じ
       明度差でも「1枚の面に光が当たっている」と読める。光源はヒーローの
       cg-canopy の cg-sunG（cx=.72 cy=.2）と揃えてある -->
  <linearGradient id="cg-gLeafShade" x1="0" y1="1" x2=".85" y2=".15">
    <stop offset="0"   stop-color="#2F5936" stop-opacity=".46"/>
    <stop offset=".40" stop-color="#46793E" stop-opacity=".22"/>
    <stop offset=".76" stop-color="#46793E" stop-opacity=".05"/>
    <stop offset="1"   stop-color="#46793E" stop-opacity="0"/>
  </linearGradient>
  <!-- レンガ地用。ラダーごと +12L* した --leaf-shade/#4B774F, --leaf-core/#659857 -->
  <linearGradient id="cg-gLeafShade-lift" x1="0" y1="1" x2=".85" y2=".15">
    <stop offset="0"   stop-color="#4B774F" stop-opacity=".44"/>
    <stop offset=".40" stop-color="#659857" stop-opacity=".21"/>
    <stop offset=".76" stop-color="#659857" stop-opacity=".05"/>
    <stop offset="1"   stop-color="#659857" stop-opacity="0"/>
  </linearGradient>

  <symbol id="cg-fatsia-leaf" viewBox="0 0 240 240">
    <use href="#cg-fatsia-blade" fill="var(--leaf)"/>

    <!-- 葉脈。写真のとおり葉身より明るい黄緑。ヤツデらしさの大半はここ。
         陰より先に敷いて、付け根側では陰に沈ませる -->
    <g stroke="var(--vein)" stroke-width="3.4" stroke-linecap="round" fill="none">
      <path d="M120 210 L 29 191"/>
      <path d="M120 210 L 41 148"/>
      <path d="M120 210 L 73 114"/>
      <path d="M120 210 L 120 98"/>
      <path d="M120 210 L 167 114"/>
      <path d="M120 210 L 199 148"/>
      <path d="M120 210 L 211 191"/>
    </g>
    <!-- 陰。葉身と同じ形で重ねるので輪郭から絶対にはみ出さない -->
    <use href="#cg-fatsia-blade" fill="var(--shade-paint)"/>

    <!-- 葉柄。葉の下に潜るので陰の側の値で引く -->
    <path d="M120 210 L 120 238" stroke="var(--leaf-core)" stroke-width="5"
          stroke-linecap="round" fill="none"/>

    <!-- 鏡面＝「濡れ」。柔らかい光沢はプラスチックに見えるので、ぼかさず
         小さく硬い縁で置く。面積は葉身の約2.8%。光源はヒーローの
         cg-canopy と揃えて右上（cg-sunG が cx=.72 cy=.2）なので、
         右側の裂片にだけ載せる -->
    <g fill="var(--leaf-wet)" opacity=".58">
      <ellipse cx="160" cy="149" rx="2.6" ry="13" transform="rotate(26 160 149)"/>
      <ellipse cx="173" cy="180" rx="2.1" ry="9" transform="rotate(52 173 180)"/>
    </g>
  </symbol>

  <!-- 株。写真1は葉が重なり合った密集した面なので、花序ではなく
       大小の葉の重なりで組む。奥の葉ほど暗く、手前ほど明るい -->
  <symbol id="cg-fatsia-clump" viewBox="0 0 460 560">
    <!-- 写真1は葉が互いに深く重なった一枚の面。間隔を空けると「並べた葉」に
         見えるので、隣の葉の中心近くまで食い込ませる。
         上端140は花枝のための天地。ヤツデの花は葉の上へ抜けて咲く -->
    <!-- 奥から手前へ4段。前は「暗い2枚／基準2枚／明るい1枚」の3段で、
         葉脈がどの段も同じ明るさだったため、段の差が色の差にしかなって
         いなかった。葉脈まで一緒に動かすと、奥は輪郭のぼやけた塊、手前は
         脈まで見える葉、というふうに「距離」として読めるようになる -->
    <g style="--leaf:var(--leaf-core);--vein:var(--leaf-dk)">
      <use href="#cg-fatsia-leaf" x="-10" y="174" width="228" height="228"/>
      <use href="#cg-fatsia-leaf" x="238" y="158" width="216" height="216"/>
    </g>
    <use href="#cg-fatsia-leaf" x="112" y="140" width="238" height="238"/>
    <g style="--leaf:var(--leaf-hi)">
      <use href="#cg-fatsia-leaf" x="10"  y="272" width="258" height="258"/>
    </g>
    <!-- 最前列だけ新芽の黄緑（h107）。群れの中に「いま伸びている葉」が
         1枚あると、株全体が生きているものとして読める。色相幅を稼ぐのは
         ここ。葉脈は花色まで上げないと葉身に負けて消える -->
    <g style="--leaf:var(--leaf-new);--vein:var(--bloom)">
      <use href="#cg-fatsia-leaf" x="196" y="290" width="252" height="252"/>
    </g>
    <!-- 花は葉の上へ立ち上がる（写真どおり）。緑の葉を背にできる位置まで
         下げてあるので、白い小花のコントラストもここで確保される -->
    <use href="#cg-fatsia-spray" x="74" y="6" width="330" height="194"/>
  </symbol>

  <!-- ヤツデの花序。参考写真の主役。小花が球状に集まり、花柄が放射する。
       白のままだと明るい地に溶けるので、写真同様に蕾（淡い黄緑）を混ぜて
       視認性を確保している -->
  <symbol id="cg-fatsia-umbel" viewBox="0 0 100 100">
    <g stroke="var(--stalk)" stroke-width="1.5" opacity=".6" stroke-linecap="round">
      <path d="M50 50 L 81.0 50.0"/>
      <path d="M50 50 L 79.1 60.6"/>
      <path d="M50 50 L 73.7 69.9"/>
      <path d="M50 50 L 65.5 76.8"/>
      <path d="M50 50 L 55.4 80.5"/>
      <path d="M50 50 L 44.6 80.5"/>
      <path d="M50 50 L 34.5 76.8"/>
      <path d="M50 50 L 26.3 69.9"/>
      <path d="M50 50 L 20.9 60.6"/>
      <path d="M50 50 L 19.0 50.0"/>
      <path d="M50 50 L 20.9 39.4"/>
      <path d="M50 50 L 26.3 30.1"/>
      <path d="M50 50 L 34.5 23.2"/>
      <path d="M50 50 L 44.6 19.5"/>
      <path d="M50 50 L 55.4 19.5"/>
      <path d="M50 50 L 65.5 23.2"/>
      <path d="M50 50 L 73.7 30.1"/>
      <path d="M50 50 L 79.1 39.4"/>
    </g>
    <circle cx="50" cy="50" r="24" fill="var(--bloom)"/>
    <!-- 外周の小花。輪郭を淡い緑で締めないと、明るい地では球が消える -->
    <g fill="var(--bloom)" stroke="var(--stalk)" stroke-width="1.3" stroke-opacity=".5">
      <circle cx="78.6" cy="55.0" r="6.2"/>
      <circle cx="75.1" cy="64.5" r="6.2"/>
      <circle cx="68.6" cy="72.2" r="6.2"/>
      <circle cx="59.9" cy="77.3" r="6.2"/>
      <circle cx="50.0" cy="79.0" r="6.2"/>
      <circle cx="40.1" cy="77.3" r="6.2"/>
      <circle cx="31.4" cy="72.2" r="6.2"/>
      <circle cx="24.9" cy="64.5" r="6.2"/>
      <circle cx="21.4" cy="55.0" r="6.2"/>
      <circle cx="21.4" cy="45.0" r="6.2"/>
      <circle cx="24.9" cy="35.5" r="6.2"/>
      <circle cx="31.4" cy="27.8" r="6.2"/>
      <circle cx="40.1" cy="22.7" r="6.2"/>
      <circle cx="50.0" cy="21.0" r="6.2"/>
      <circle cx="59.9" cy="22.7" r="6.2"/>
      <circle cx="68.6" cy="27.8" r="6.2"/>
      <circle cx="75.1" cy="35.5" r="6.2"/>
      <circle cx="78.6" cy="45.0" r="6.2"/>
    </g>
    <!-- 中心側は密なので、ごく弱い陰影だけ。強い輪を入れるとキクに見える -->
    <g fill="var(--bloom-hi)" opacity=".45">
      <circle cx="43.0" cy="62.1" r="3.6"/>
      <circle cx="36.2" cy="52.2" r="3.6"/>
      <circle cx="61.3" cy="41.8" r="3.6"/>
    </g>
  </symbol>

  <!-- 見出しの点線ルールの終端につく標。花序は丸く完結した形なので、
       行末の飾りとして自然に納まる -->
  <symbol id="cg-fatsia-mark" viewBox="0 0 120 84">
    <!-- 茎は左端の高さ42（＝箱の中央）から入る。見出しの点線ルールと同じ
         高さで受けるので、点線がそのまま茎に続いて見える。前版は箱の
         左下から立ち上げていたため、点線と繋がらず宙に浮いていた -->
    <g stroke="var(--stalk)" stroke-width="3.2" fill="none" stroke-linecap="round">
      <path d="M0 42 L 34 42"/>
      <path d="M34 42 C 52 42 58 30 70 22"/>
      <path d="M34 42 C 50 44 56 52 66 60"/>
    </g>
    <g style="--bloom:var(--bloom-bud);--bloom-hi:var(--bloom-bud-hi);--stalk:#7E9C46">
      <use href="#cg-fatsia-umbel" x="54" y="46" width="30" height="30"/>
    </g>
    <use href="#cg-fatsia-umbel" x="58" y="0" width="44" height="44"/>
  </symbol>

  <!-- 花枝。1点から花柄が放射して先端に球がつく、写真そのものの構造 -->
  <symbol id="cg-fatsia-spray" viewBox="0 0 300 176">
    <g stroke="var(--stalk)" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M150 174 L 150 150"/>
      <path d="M150 150 Q 110 121 70 64"/>
      <path d="M150 150 Q 150 109 150 40"/>
      <path d="M150 150 Q 188 125 226 72"/>
      <path d="M150 150 Q 131 151 112 124"/>
      <path d="M150 150 Q 173 155 196 132"/>
      <path d="M150 150 Q 204 102 258 26"/>
    </g>
    <g><use href="#cg-fatsia-umbel" x="40" y="34" width="60" height="60"/></g>
    <g><use href="#cg-fatsia-umbel" x="116" y="6" width="68" height="68"/></g>
    <g style="--bloom:var(--bloom-bud);--bloom-hi:var(--bloom-bud-hi);--stalk:#7E9C46"><use href="#cg-fatsia-umbel" x="198" y="44" width="56" height="56"/></g>
    <g style="--bloom:var(--bloom-bud);--bloom-hi:var(--bloom-bud-hi);--stalk:#7E9C46"><use href="#cg-fatsia-umbel" x="86" y="98" width="52" height="52"/></g>
    <g><use href="#cg-fatsia-umbel" x="172" y="108" width="48" height="48"/></g>
    <g style="--bloom:var(--bloom-bud);--bloom-hi:var(--bloom-bud-hi);--stalk:#7E9C46"><use href="#cg-fatsia-umbel" x="236" y="4" width="44" height="44"/></g>
  </symbol>

  <!-- ============ ヨモギ ＝ 線 ==============================================
       写真2。羽状に深く裂け、頂裂片が最大。細かいレース状のテクスチャ -->
  <!-- 輪郭を1本のパスで取ると、裂けの谷が浅くなって菱形の記号に潰れる。
       中肋に細い小葉を並べる作り（ヤツデと同じ手法）にすると、小さく
       表示しても羽状に裂けた葉として読める -->
  <symbol id="cg-mugwort-leaf" viewBox="0 0 90 116">
    <path d="M45 116 V 24" stroke="var(--mug-dk)" stroke-width="2.6"
          fill="none" opacity=".8" stroke-linecap="round"/>
    <g fill="var(--mug)">
      <!-- 下段ほど寝て長く、上へいくほど立って短くなる -->
      <g transform="translate(45 102) rotate(-64)">
        <path d="M0 0 C -5 -12 -7 -25 -2.5 -33 L 0 -36 L 2.5 -33 C 7 -25 5 -12 0 0 Z"/>
      </g>
      <g transform="translate(45 102) rotate(64)">
        <path d="M0 0 C -5 -12 -7 -25 -2.5 -33 L 0 -36 L 2.5 -33 C 7 -25 5 -12 0 0 Z"/>
      </g>
      <g transform="translate(45 84) rotate(-54)">
        <path d="M0 0 C -5 -13 -7 -27 -2.5 -36 L 0 -40 L 2.5 -36 C 7 -27 5 -13 0 0 Z"/>
      </g>
      <g transform="translate(45 84) rotate(54)">
        <path d="M0 0 C -5 -13 -7 -27 -2.5 -36 L 0 -40 L 2.5 -36 C 7 -27 5 -13 0 0 Z"/>
      </g>
      <g transform="translate(45 64) rotate(-45)">
        <path d="M0 0 C -5 -13 -7 -28 -2.5 -37 L 0 -41 L 2.5 -37 C 7 -28 5 -13 0 0 Z"/>
      </g>
      <g transform="translate(45 64) rotate(45)">
        <path d="M0 0 C -5 -13 -7 -28 -2.5 -37 L 0 -41 L 2.5 -37 C 7 -28 5 -13 0 0 Z"/>
      </g>
      <g transform="translate(45 46) rotate(-34)">
        <path d="M0 0 C -4.5 -12 -6 -25 -2 -33 L 0 -36 L 2 -33 C 6 -25 4.5 -12 0 0 Z"/>
      </g>
      <g transform="translate(45 46) rotate(34)">
        <path d="M0 0 C -4.5 -12 -6 -25 -2 -33 L 0 -36 L 2 -33 C 6 -25 4.5 -12 0 0 Z"/>
      </g>
      <!-- 頂小葉 -->
      <g transform="translate(45 34)">
        <path d="M0 0 C -5 -11 -6 -23 -2.5 -30 L 0 -34 L 2.5 -30 C 6 -23 5 -11 0 0 Z"/>
      </g>
    </g>
  </symbol>

  <!-- 小さい葉を5枚散らすと、表示サイズ（100px前後）では切れ込みが潰れて
       星形の記号にしか見えない。葉を3枚に減らして1枚あたりを大きく取り、
       羽状の裂けが読める寸法を確保する -->
  <symbol id="cg-mugwort-sprig" viewBox="0 0 240 120">
    <g stroke="var(--mug-dk)" stroke-width="3.4" fill="none" opacity=".75" stroke-linecap="round">
      <path d="M4 116 C 70 110, 130 84, 196 34"/>
      <path d="M62 104 C 74 86, 82 68, 84 48"/>
      <path d="M136 74 C 152 62, 168 48, 180 32"/>
    </g>
    <!-- 奥の1枚だけ落とす。ヨモギは「線」の役なので面としては効かせないが、
         3枚が完全に同値だと重なりが読めず、1枚の記号に潰れる -->
    <g style="--mug:var(--mug-sh);--mug-dk:var(--leaf-core)">
      <use href="#cg-mugwort-leaf" x="8"   y="18" width="98" height="126"/>
    </g>
    <use href="#cg-mugwort-leaf" x="88"  y="4"  width="86" height="111"/>
    <use href="#cg-mugwort-leaf" x="158" y="0"  width="74" height="95"/>
  </symbol>

  <!-- ============ アオキ ＝ 点 ==============================================
       写真3。光沢のある長楕円の葉、上半分に粗い鋸歯。実は鮮やかな赤の楕円で、
       枝先に房になる -->
  <!-- アオキは「光沢のある深緑の葉」が本体（写真3）。硬い鏡面を載せる相手と
       して葉身そのものが明るすぎたので、陰側 --aoki（L*55）／受光側
       --aoki-hi（L*72）の2面に割った。1枚の葉の中に17単位の明度差ができる
       ので、平らな楕円ではなく「面の向きが変わっている葉」に見える -->
  <symbol id="cg-aucuba-leaf" viewBox="0 0 80 200">
    <path fill="var(--aoki)" d="M40 200
      C 22 172, 10 130, 10 92   C 10 54, 22 24, 40 0
      C 58 24, 70 54, 70 92     C 70 130, 58 172, 40 200 Z"/>
    <!-- 受光側（右）。境界は主脈より少し左へずらす。主脈でぴったり割ると
         左右対称の記号になり、葉に見えなくなる -->
    <path fill="var(--aoki-hi)" d="M40 3
      C 57 26, 69 55, 69 92     C 69 128, 57 170, 41 197
      C 36 168, 33 128, 34 92   C 35 56, 37 28, 40 3 Z"/>
    <!-- 上半分の鋸歯 -->
    <g fill="var(--aoki-dk)" opacity=".45">
      <path d="M11 78 L 20 70 L 12 66 Z"/><path d="M14 56 L 24 50 L 16 44 Z"/>
      <path d="M20 36 L 30 32 L 23 25 Z"/>
      <path d="M69 78 L 60 70 L 68 66 Z"/><path d="M66 56 L 56 50 L 64 44 Z"/>
      <path d="M60 36 L 50 32 L 57 25 Z"/>
    </g>
    <!-- 主脈 -->
    <path d="M40 194 V 12" stroke="var(--vein)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- 鏡面。前はここが stroke-width 4・opacity .5 の柔らかい線で、
         サテン／プラスチックの見え方だった。細く・不透明・紡錘形にすると
         水膜になる。面積は葉身の約2.2% -->
    <g fill="var(--leaf-wet)" opacity=".72">
      <path d="M53 58 C 57.5 78, 58 104, 54.5 129   C 51.5 105, 50.5 80, 53 58 Z"/>
      <ellipse cx="49" cy="41" rx="1.9" ry="4.2"/>
    </g>
  </symbol>

  <symbol id="cg-aucuba-sprig" viewBox="0 0 220 260">
    <g stroke="var(--aoki-dk)" stroke-width="4.5" fill="none" stroke-linecap="round">
      <path d="M110 258 V 96"/>
      <path d="M110 190 L 58 150"/><path d="M110 160 L 166 122"/>
      <path d="M110 130 L 66 96"/>
    </g>
    <use href="#cg-aucuba-leaf" x="18"  y="104" width="72" height="180" transform="rotate(-34 54 194)"/>
    <use href="#cg-aucuba-leaf" x="130" y="78"  width="68" height="170" transform="rotate(32 164 163)"/>
    <use href="#cg-aucuba-leaf" x="26"  y="48"  width="62" height="155" transform="rotate(-46 57 125)"/>
    <use href="#cg-aucuba-leaf" x="86"  y="20"  width="58" height="145"/>
    <!-- 実。写真のとおり楕円で、枝先に房。ページ唯一の鮮やかな赤。
         陰側（--berry-dk）を敷いてから明部を右上へずらして重ねる。
         球にいちばん効くのは陰と鏡面で、輪郭線ではない -->
    <g fill="var(--berry-dk)">
      <ellipse cx="110" cy="92"  rx="9"   ry="14"   transform="rotate(-12 110 92)"/>
      <ellipse cx="132" cy="104" rx="8.5" ry="13"   transform="rotate(24 132 104)"/>
      <ellipse cx="90"  cy="108" rx="8"   ry="12.5" transform="rotate(-28 90 108)"/>
      <ellipse cx="118" cy="120" rx="7.5" ry="12"   transform="rotate(8 118 120)"/>
    </g>
    <g fill="var(--berry)">
      <ellipse cx="111.6" cy="89.6"  rx="7.4" ry="11.6" transform="rotate(-12 111.6 89.6)"/>
      <ellipse cx="133.4" cy="101.8" rx="7"   ry="10.8" transform="rotate(24 133.4 101.8)"/>
      <ellipse cx="91.4"  cy="105.8" rx="6.6" ry="10.4" transform="rotate(-28 91.4 105.8)"/>
      <ellipse cx="119.4" cy="117.8" rx="6.2" ry="10"   transform="rotate(8 119.4 117.8)"/>
    </g>
    <!-- 鏡面。実の表面は葉より硬いので、葉の .9 に対してここは不透明 -->
    <g fill="var(--leaf-wet)">
      <ellipse cx="107.5" cy="84.5" rx="2.2" ry="3.2" transform="rotate(-12 107.5 84.5)"/>
      <ellipse cx="130"   cy="97.5" rx="1.9" ry="2.7" transform="rotate(24 130 97.5)"/>
      <ellipse cx="88"    cy="101"  rx="1.7" ry="2.5" transform="rotate(-28 88 101)"/>
      <ellipse cx="116.4" cy="113"  rx="1.6" ry="2.3" transform="rotate(8 116.4 113)"/>
    </g>
  </symbol>

  <!-- ============ ツタ ＝ 縁 ================================================
       2026-08-21 モバイル向けに追加。ヤツデ・アオキ・ヨモギは全部「立ち上がる」
       植物で、置くには面が要る。ところがモバイルは 1カラムで本文とカードが
       積み上がり、縦の完全な空き帯が 35〜110px しか残らない（375px 実測）。
       面は無いが**縁は大量にある**——カードの上端、写真帯の上端、節の境目。
       そこで細く長い蔓を1種だけ足し、縁に沿わせて長さで存在感を出す。

       種としては参考資料4点（ヤツデ・ヨモギ・アオキ・斑入りアオキ）に無いが、
       クライアント指示「モバイルのみアイビー（蔦）ガーランド」に基づく追加。
       素材は既存と同じ（明度ラダー・色相回転・硬い鏡面）なので、
       別のセットから持ってきたようには見えない。 -->

  <!-- 葉。5裂だが裂けは浅く、基部が広い。半径42/62（68%）まで隣の裂片と
       接していて、外側1/3だけが分かれる。ヤツデ（切れ込み35%）よりさらに
       浅く、丸い塊として読める＝アイビーの見え方 -->
  <g id="cg-ivy-blade">
    <g>
      <path transform="translate(50 74) rotate(-62)" d="M0 0 C -8 -5.6, -15.7 -11.2, -16 -15.2 C -16.3 -24.8, -9.9 -33.6, 0 -40 C 9.9 -33.6, 16.3 -24.8, 16 -15.2 C 15.7 -11.2, 8 -5.6, 0 0 Z"/>
      <path transform="translate(50 74) rotate(-32)" d="M0 0 C -10.8 -7.6, -21.2 -15.1, -21.6 -20.5 C -22 -33.5, -13.4 -45.4, 0 -54 C 13.4 -45.4, 22 -33.5, 21.6 -20.5 C 21.2 -15.1, 10.8 -7.6, 0 0 Z"/>
      <path transform="translate(50 74)" d="M0 0 C -12.4 -8.7, -24.3 -17.4, -24.8 -23.6 C -25.3 -38.4, -15.4 -52.1, 0 -62 C 15.4 -52.1, 25.3 -38.4, 24.8 -23.6 C 24.3 -17.4, 12.4 -8.7, 0 0 Z"/>
      <path transform="translate(50 74) rotate(32)" d="M0 0 C -10.8 -7.6, -21.2 -15.1, -21.6 -20.5 C -22 -33.5, -13.4 -45.4, 0 -54 C 13.4 -45.4, 22 -33.5, 21.6 -20.5 C 21.2 -15.1, 10.8 -7.6, 0 0 Z"/>
      <path transform="translate(50 74) rotate(62)" d="M0 0 C -8 -5.6, -15.7 -11.2, -16 -15.2 C -16.3 -24.8, -9.9 -33.6, 0 -40 C 9.9 -33.6, 16.3 -24.8, 16 -15.2 C 15.7 -11.2, 8 -5.6, 0 0 Z"/>
    </g>
    <!-- 基部。アイビーは付け根がハート型に窪むので、円ではなく横長で受ける -->
    <ellipse cx="50" cy="66" rx="17" ry="11"/>
  </g>

  <symbol id="cg-ivy-leaf" viewBox="0 0 100 90">
    <use href="#cg-ivy-blade" fill="var(--leaf)"/>
    <!-- 葉脈。アイビーの識別点はこの明るい脈なので、ヤツデより太めに引く -->
    <g stroke="var(--vein)" stroke-width="2.6" stroke-linecap="round" fill="none" opacity=".9">
      <path d="M50 74 L 25 60"/><path d="M50 74 L 29 41"/><path d="M50 74 L 50 29"/>
      <path d="M50 74 L 71 41"/><path d="M50 74 L 75 60"/>
    </g>
    <use href="#cg-ivy-blade" fill="var(--shade-paint)"/>
    <path d="M50 74 L 50 90" stroke="var(--leaf-core)" stroke-width="3.4"
          stroke-linecap="round" fill="none"/>
    <ellipse cx="61" cy="46" rx="2.2" ry="7" transform="rotate(28 61 46)"
             fill="var(--leaf-wet)" opacity=".5"/>
  </symbol>

  <!-- ガーランド。縁に沿わせる前提なので、蔓は水平に長く、葉は下向きに垂れる。
       葉の向きを 148〜200° にばらしてあるのは、全部同じ角度で垂れると
       「造花のガーランド」そのものになるため。
       奥の葉に --leaf-air（彩度26の淡い緑）を使うと、レンガの暖色の上では
       彩度が負けて**枯れ葉**に見えた。群落と違ってガーランドは地の色が
       変わる境界に掛けるものなので、奥は淡くせず --leaf-core（暗い緑）で
       取る。明度で退かせて彩度では退かせない -->
  <symbol id="cg-ivy-garland" viewBox="0 0 600 150">
    <g stroke="var(--leaf-core)" stroke-width="3.6" fill="none" stroke-linecap="round">
      <path d="M0 40 C 90 20, 150 70, 240 55 C 330 40, 400 85, 490 68 C 540 58, 570 72, 600 66"/>
    </g>
    <!-- 巻きひげ。2本だけ。多いと装飾過多になる -->
    <g stroke="var(--leaf-dk)" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".85">
      <path d="M152 62 C 160 78, 148 88, 142 80 C 138 74, 146 70, 150 78"/>
      <path d="M418 78 C 428 94, 416 104, 410 96 C 406 90, 414 86, 418 94"/>
    </g>
    <use href="#cg-ivy-leaf" x="7" y="2" width="46" height="41" transform="rotate(168 30 36)"/>
    <use href="#cg-ivy-leaf" x="59" y="14" width="38" height="34" transform="rotate(196 78 42)"/>
    <use href="#cg-ivy-leaf" x="102" y="16" width="52" height="47" transform="rotate(155 128 54)" style="--leaf:var(--leaf-core);--vein:var(--leaf-dk);--leaf-wet:transparent"/>
    <use href="#cg-ivy-leaf" x="156" y="28" width="40" height="36" transform="rotate(200 176 58)" style="--leaf:var(--leaf-hi)"/>
    <use href="#cg-ivy-leaf" x="206" y="18" width="48" height="43" transform="rotate(172 230 54)"/>
    <use href="#cg-ivy-leaf" x="268" y="23" width="36" height="32" transform="rotate(148 286 50)" style="--leaf:var(--leaf-core);--vein:var(--leaf-dk);--leaf-wet:transparent"/>
    <use href="#cg-ivy-leaf" x="313" y="23" width="50" height="45" transform="rotate(192 338 60)"/>
    <use href="#cg-ivy-leaf" x="371" y="41" width="42" height="38" transform="rotate(160 392 72)" style="--leaf:var(--leaf-core);--vein:var(--leaf-dk)"/>
    <use href="#cg-ivy-leaf" x="425" y="36" width="46" height="41" transform="rotate(200 448 70)"/>
    <use href="#cg-ivy-leaf" x="489" y="38" width="38" height="34" transform="rotate(168 508 66)" style="--leaf:var(--leaf-hi)"/>
    <use href="#cg-ivy-leaf" x="540" y="35" width="44" height="40" transform="rotate(180 562 68)"/>
  </symbol>

  <!-- 斑入りアオキ（写真4）。金色の斑がページで最も明るい植物要素になる。
       斑は葉の縁に不規則に入るので、緑の葉の上に黄色の縁取りを重ねる -->
  <symbol id="cg-aucuba-var-leaf" viewBox="0 0 80 200">
    <path fill="var(--variegate)" d="M40 200
      C 22 172, 10 130, 10 92   C 10 54, 22 24, 40 0
      C 58 24, 70 54, 70 92     C 70 130, 58 172, 40 200 Z"/>
    <!-- 中央に残る緑。縁が黄色く抜けるのが斑入りの見え方 -->
    <path fill="var(--aoki)" d="M40 178
      C 27 154, 20 126, 21 94   C 22 62, 29 38, 41 18
      C 52 38, 59 62, 59 94     C 59 126, 52 154, 40 178 Z"/>
    <!-- 斑は左右非対称に食い込む。均等だと造花に見える -->
    <path fill="var(--variegate-hi)" opacity=".9" d="M41 20
      C 33 40, 27 62, 26 92     C 25 118, 29 140, 36 160
      C 34 132, 33 104, 36 76   C 37 58, 39 38, 41 20 Z"/>
    <path d="M40 192 V 14" stroke="var(--variegate-hi)" stroke-width="3.2"
          fill="none" stroke-linecap="round"/>
    <!-- 斑入りにも同じ鏡面を通す。ここだけ光沢がないと、隣のアオキと材質が
         違って見えて「別のセットから持ってきた素材」になる -->
    <path fill="var(--leaf-wet)" opacity=".85" d="M52 62
      C 56 80, 56.5 104, 53.5 126   C 51 104, 50 82, 52 62 Z"/>
  </symbol>

  <symbol id="cg-aucuba-variegated" viewBox="0 0 220 240">
    <g stroke="var(--aoki-dk)" stroke-width="4.5" fill="none" stroke-linecap="round">
      <path d="M110 238 V 110"/>
      <path d="M110 200 L 56 164"/><path d="M110 172 L 168 138"/>
      <path d="M110 144 L 70 110"/>
    </g>
    <use href="#cg-aucuba-var-leaf" x="16"  y="114" width="70" height="176" transform="rotate(-36 51 202)"/>
    <use href="#cg-aucuba-var-leaf" x="132" y="92"  width="66" height="165" transform="rotate(34 165 174)"/>
    <use href="#cg-aucuba-var-leaf" x="28"  y="62"  width="60" height="150" transform="rotate(-48 58 137)"/>
    <use href="#cg-aucuba-var-leaf" x="88"  y="34"  width="56" height="140"/>
  </symbol>
</defs>
`;
