import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import Footer from "./components/footer";
import InfoCard from "./components/info-card";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-deep">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-dots">
          <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
            <span className="text-mega font-heading-condensed font-black leading-none -tracking-[0.06em] text-green-normal/[0.04]">
              EOL
            </span>
          </div>

          <div className="absolute left-[10%] top-20 size-24 animate-float-slow rounded-full border-4 border-green-normal/15" />
          <div className="absolute right-[15%] top-40 size-16 animate-float-medium rotate-45 bg-green-normal/10" />
          <div
            className="absolute bottom-32 left-[20%] size-20 animate-float-fast border-2 border-gold/25"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div className="absolute bottom-48 right-[8%] size-12 animate-float-slow border-2 border-green-normal/20" />

          <div className="relative z-10 flex flex-col items-center gap-8 px-4 pb-8 pt-16">
            <h1 className="font-heading-condensed text-hero font-black leading-none tracking-tight text-green-light text-center">
              Software<br />
              <span className="text-green-normal">that endures</span>
            </h1>
            <p className="font-body text-hero-sub max-w-[600px] text-center leading-relaxed text-green-light/80">
              Maintained, secure, built to last. Enterprise-grade solutions that evolve with your business.
            </p>
            <div className="rounded-xl border-2 border-green-normal/20 bg-green-darker/50 p-3 shadow-[0_0_60px_rgba(57,181,74,0.08)]">
              <Carousel />
            </div>
          </div>
        </section>

        <TrustedBy />

        <section className="relative bg-stripes bg-green-light px-4 py-16">
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2">
            <InfoCard
              title="Maintained"
              body="Continuous updates and security patches. Your software never falls behind."
            />
            <InfoCard
              title="Scalable"
              body="Architecture that grows with you. From startup to enterprise, we scale."
            />
          </div>
        </section>

        <section className="relative bg-dots-dense bg-green-deep px-4 py-12">
          <ButtonPair />
        </section>

        <section className="relative bg-checker bg-green-light px-4 py-16">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
