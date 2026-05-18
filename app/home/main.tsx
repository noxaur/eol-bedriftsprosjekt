import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="min-h-screen bg-noir-bg">
      <Header />
      <main>
        <section className="w-full py-20 md:py-28 animate-fade-in-up">
          <Carousel />
        </section>
        <section className="w-full">
          <TrustedBy />
        </section>
        <section className="w-full py-14">
          <ButtonPair />
        </section>
        <section className="w-full py-20">
          <Faq />
        </section>
      </main>
      <div className="h-px w-full bg-noir-border" />
      <footer className="py-8 text-center text-noir-text-muted text-sm font-body">
        <p>ReOL — Maintained software for modern enterprises</p>
      </footer>
    </div>
  );
}

export default LandingPage;
