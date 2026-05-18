import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-surface-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-float-slow rounded-full"
          style={{
            width: 600,
            height: 600,
            top: '-10%',
            left: '-10%',
            background: 'radial-gradient(circle, oklch(65% 0.18 145 / 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-float-medium rounded-full"
          style={{
            width: 500,
            height: 500,
            top: '40%',
            right: '-15%',
            background: 'radial-gradient(circle, oklch(50% 0.14 145 / 0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-float-fast rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: '-5%',
            left: '20%',
            background: 'radial-gradient(circle, oklch(65% 0.18 145 / 0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex flex-col items-center gap-10 py-12">
          <Carousel />
          <TrustedBy />
          <ButtonPair />
          <Faq />
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
