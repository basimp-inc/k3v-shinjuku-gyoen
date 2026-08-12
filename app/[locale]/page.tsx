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
import DenimTop from "./_components/denim/DenimTop";
import TimberTop from "./_components/timber/TimberTop";
import ChambrayTop from "./_components/chambray/ChambrayTop";
import KraftTop from "./_components/kraft/KraftTop";
import DomaTop from "./_components/doma/DomaTop";

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

      {/* REVIEW-ONLY: entries two through seven of the 配色プレビュー switcher swap
          the whole TOP page, not just the palette. Every design is in the DOM and
          CSS picks one — see app/gyoen-design.css, app/denim-design.css,
          app/timber-design.css, app/chambray-design.css, app/kraft-design.css
          and app/doma-design.css for removal steps. */}
      <GyoenTop />
      <DenimTop />
      <TimberTop />
      <ChambrayTop />
      <KraftTop />
      <DomaTop />
    </>
  );
}
