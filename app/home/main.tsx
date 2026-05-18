import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import Footer from "./components/footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-retro-bg">
      <Header />
      <main className="flex flex-col items-center gap-6 py-6">
        <div className="construction-stripe w-full" />

        <section className="mx-auto w-full max-w-3xl px-4 text-center">
          <h1 className="font-heading text-hero font-bold text-retro-blue leading-tight">
            WE KEEP YOUR OLD SOFTWARE ALIVE
          </h1>
          <p className="mt-3 font-body text-base text-font-muted">
            Since 1997. Maintaining what others abandoned.
          </p>
        </section>

        <div className="retro-marquee-bar mx-auto w-full max-w-3xl">
          <div className="flex animate-marquee whitespace-nowrap font-body text-xs text-retro-blue">
            <span className="mx-8">★ MAINTAINED SOFTWARE ★</span>
            <span className="mx-8">SINCE 1997</span>
            <span className="mx-8">★ COBOL • DELPHI • VB6 • C++ ★</span>
            <span className="mx-8">IF IT RUNS, WE KEEP IT RUNNING</span>
            <span className="mx-8">★ MAINTAINED SOFTWARE ★</span>
            <span className="mx-8">SINCE 1997</span>
            <span className="mx-8">★ COBOL • DELPHI • VB6 • C++ ★</span>
            <span className="mx-8">IF IT RUNS, WE KEEP IT RUNNING</span>
          </div>
        </div>

        <ButtonPair />

        <Carousel />

        <TrustedBy />

        <Faq />

        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;
