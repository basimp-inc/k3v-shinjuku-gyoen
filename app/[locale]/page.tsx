import ChambrayTop from "./_components/chambray/ChambrayTop";

/**
 * TOP page.
 *
 * 2026-08-25：クライアントが Washed Chambray を採用。それまでは現行案と3つの
 * 代替案を同時に DOM へ入れ、CSS（[data-theme]）でどれを見せるか決めていたが、
 * 採用が決まったので TOP は ChambrayTop だけを描画する。
 *
 * 非表示にした3案は削除していない。ファイルはそのまま残っているので、
 * 戻す場合は各 Top コンポーネントをここへ足し、layout.tsx の固定 data-theme を
 * components/ThemeMock.tsx に差し替える。
 *   - 現行案      app/[locale]/_components/{Hero,PrimeLocation,Renovated,Amenities,Rooms,Access}.tsx
 *   - gyoen-green app/[locale]/_components/gyoen/GyoenTop.tsx + app/gyoen-design.css
 *   - chambray-gyoen app/[locale]/_components/chambray-gyoen/ + app/chambray-gyoen-design.css
 *
 * 注意：植物イラストの素材 app/[locale]/_components/chambray/flora.ts と
 * シーン app/[locale]/_components/chambray/scenes.ts は採用案が使っている。
 * 非表示にした案を将来削除する場合でも、この2つは消さないこと。
 */
export default function Home() {
  return <ChambrayTop />;
}
