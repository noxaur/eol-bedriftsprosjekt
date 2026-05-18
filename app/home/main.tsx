import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="min-h-screen bg-noir-bg">
      <Header />
      <main className="flex flex-col items-center">
        <section className="w-full py-16 md:py-24 animate-fade-in-up">
          <div className="mx-auto max-w-4xl px-6">
            <Carousel />
          </div>
        </section>
        <section className="w-full py-12 animate-fade-in-up-delay-1">
          <TrustedBy />
        </section>
        <section className="w-full py-12 animate-fade-in-up-delay-2">
          <ButtonPair />
        </section>
        <section className="w-full py-16 animate-fade-in-up-delay-3">
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
