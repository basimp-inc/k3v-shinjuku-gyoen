import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import PrimeLocation from "@/components/PrimeLocation";
import Renovated from "@/components/Renovated";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import LivingMoments from "@/components/LivingMoments";
import Reviews from "@/components/Reviews";
import BookDirect from "@/components/BookDirect";
import Access from "@/components/Access";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <PrimeLocation />
      <Renovated />
      <Amenities />
      <Rooms />
      <LivingMoments />
      <Reviews />
      <BookDirect />
      <Access />
    </main>
  );
}
