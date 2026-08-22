import Hero from "./_components/Hero";
import PrimeLocation from "./_components/PrimeLocation";
import Renovated from "./_components/Renovated";
import Amenities from "./_components/Amenities";
import Rooms from "./_components/Rooms";
import BookDirect from "@/components/BookDirect";
import Access from "./_components/Access";
import GyoenTop from "./_components/gyoen/GyoenTop";
import ChambrayTop from "./_components/chambray/ChambrayTop";
import ChambrayGyoenTop from "./_components/chambray-gyoen/ChambrayGyoenTop";

export default function Home() {
  return (
    <>
      <main data-design="current">
        <Hero />
        <PrimeLocation />
        <Renovated />
        <Amenities />
        <Rooms />
        {/* <BookDirect /> */}
        <Access />
      </main>

      {/* REVIEW-ONLY: the full-page entries of the 配色プレビュー switcher swap
          the whole TOP page, not just the palette. Every design is in the DOM
          and CSS picks one — see app/gyoen-design.css, app/chambray-design.css
          and app/chambray-gyoen-design.css for removal steps. */}
      <GyoenTop />
      <ChambrayTop />
      <ChambrayGyoenTop />
    </>
  );
}
