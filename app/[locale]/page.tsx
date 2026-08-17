import Hero from "./_components/Hero";
import Concept from "./_components/Concept";
import PrimeLocation from "./_components/PrimeLocation";
import Renovated from "./_components/Renovated";
import Amenities from "./_components/Amenities";
import Rooms from "./_components/Rooms";
import LivingMoments from "./_components/LivingMoments";
import Reviews from "./_components/Reviews";
import BookDirect from "@/components/BookDirect";
import Access from "./_components/Access";
import GyoenTop from "./_components/gyoen/GyoenTop";
import ChambrayTop from "./_components/chambray/ChambrayTop";

export default function Home() {
  return (
    <>
      <main data-design="current">
        <Hero />
        {/* <Concept /> */}
        <PrimeLocation />
        <Renovated />
        <Amenities />
        <Rooms />
        {/* <LivingMoments /> */}
        {/* <Reviews /> */}
        {/* <BookDirect /> */}
        <Access />
      </main>

      {/* REVIEW-ONLY: the two shortlisted entries of the 配色プレビュー switcher
          swap the whole TOP page, not just the palette. Both designs are in the
          DOM and CSS picks one — see app/gyoen-design.css and
          app/chambray-design.css for removal steps. */}
      <GyoenTop />
      <ChambrayTop />
    </>
  );
}
