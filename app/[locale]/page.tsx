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

export default function Home() {
  return (
    <main>
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
  );
}
