import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-surface-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-drift rounded-full"
          style={{
            width: 800,
            height: 800,
            top: '-20%',
            right: '-30%',
            background: 'radial-gradient(circle, oklch(65% 0.18 145 / 0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-drift rounded-full"
          style={{
            width: 600,
            height: 600,
            bottom: '-15%',
            left: '-20%',
            background: 'radial-gradient(circle, oklch(50% 0.14 145 / 0.04) 0%, transparent 70%)',
            animationDelay: '-12s',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex flex-col items-center py-16">
          <Carousel />
          <div className="mt-14">
            <TrustedBy />
          </div>
          <div className="mt-12">
            <ButtonPair />
          </div>
          <div className="mt-20">
            <Faq />
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
