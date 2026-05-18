import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28" aria-labelledby="hero-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 animate-fade-in-up">
              <h1 id="hero-heading" className="text-2xl sm:text-3xl font-heading text-charcoal leading-[1.05] tracking-tight">
                Software that lasts.
              </h1>
              <p className="mt-6 text-lg font-body text-charcoal-light max-w-xl leading-relaxed">
                We maintain and evolve critical business software long after the original team has moved on. No vendor lock-in, no abandoned codebases.
              </p>
            </div>
            <div className="lg:col-span-5 animate-fade-in-up-delay-1">
              <Carousel />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="border-t border-terracotta/30 my-12 lg:my-16" />
        </div>

        <section className="bg-cream-dark animate-fade-in-up-delay-2" aria-label="Customer logos">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12">
            <TrustedBy />
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="border-t border-border my-12 lg:my-16" />
        </div>

        <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12 animate-fade-in-up-delay-3">
          <ButtonPair />
        </section>

        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12">
          <div className="border-t border-terracotta/30 my-12 lg:my-16" />
        </div>

        <section className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 py-12">
          <Faq />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
