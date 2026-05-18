import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="flex flex-col items-center gap-[18px]">
        <Carousel />
        <TrustedBy />
        <ButtonPair />
        <Faq />
      </main>
    </div>
  );
}

export default LandingPage;
