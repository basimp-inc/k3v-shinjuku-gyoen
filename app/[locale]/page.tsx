import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Rooms from "@/components/Rooms";
import LivingMoments from "@/components/LivingMoments";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#f3ece1] pb-20 lg:pb-0'>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Rooms />
        <LivingMoments />
        <Access />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
