import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Rooms from "@/components/Rooms";
import LivingMoments from "@/components/LivingMoments";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3ece1]">
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Rooms />
        <LivingMoments />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
