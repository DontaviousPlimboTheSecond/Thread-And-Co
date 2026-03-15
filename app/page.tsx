import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NewArrivals from "@/components/NewArrivals";
import Collections from "@/components/Collections";
import Lookbook from "@/components/Lookbook";
import PersonalStyling from "@/components/PersonalStyling";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Location from "@/components/Location";
import StickyShopBar from "@/components/StickyShopBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <NewArrivals />
        <Collections />
        <Lookbook />
        <PersonalStyling />
        <Reviews />
        <About />
        <Location />
      </main>
      <Footer />
      <StickyShopBar />
    </>
  );
}
