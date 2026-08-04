import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Rooms from "@/components/Rooms";
import LivingMoments from "@/components/LivingMoments";
import Access from "@/components/Access";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Rooms />
      <LivingMoments />
      <Access />
    </main>
  );
}
