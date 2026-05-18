import { useRef } from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import AboutSection from "./components/about-section";
import Faq from "./components/faq";
import Footer from "./components/footer";

function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleReadMore = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="flex flex-col items-center gap-[18px] px-4 py-6">
        <Carousel />
        <TrustedBy />
        <ButtonPair onReadMore={handleReadMore} />
        <div ref={aboutRef}>
          <AboutSection id="about" />
        </div>
        <Faq id="faq" />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
