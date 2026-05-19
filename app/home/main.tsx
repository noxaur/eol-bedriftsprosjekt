import Nav from "./components/nav";
import Hero from "./components/hero";
import LogoBar from "./components/logo-bar";
import FeatureGrid from "./components/feature-grid";
import Stats from "./components/stats";
import HowItWorks from "./components/how-it-works";
import Testimonial from "./components/testimonial";
import Faq from "./components/faq";
import FinalCTA from "./components/final-cta";
import Footer from "./components/footer";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <FeatureGrid />
        <Stats />
        <HowItWorks />
        <Testimonial />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
