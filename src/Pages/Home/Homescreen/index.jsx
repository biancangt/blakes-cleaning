import AboutUs from "../AboutUs";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import ContactUs from "../ContactUs";
import OurServices from "../OurServices";
import Reviews from "../Reviews";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import MapSection from "../MapSection";
import Faq from "../Faq";
import CleaningServiceCTA from "../CleaningServiceCTA";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <OurServices/>
      <CleaningServiceCTA/>
      <AboutUs />
      <Reviews/>
      <Faq/>
      <ContactUs />
      <MapSection/>
       <Footer />
    </>
  );
}
