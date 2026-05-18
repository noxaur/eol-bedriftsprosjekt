import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import Footer from "./components/footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-darkest text-green-light overflow-x-hidden">
      <Header />
      <main className="relative">
        {/* Hero section with overlapping elements */}
        <section className="relative">
          {/* Background pattern layer */}
          <div className="absolute inset-0 pattern-dots opacity-10" />
          <div className="absolute top-0 right-0 w-[40%] h-[60%] pattern-diagonal opacity-[0.03]" />

          {/* Decorative geometric shapes */}
          <div className="absolute top-20 left-[-40px] w-[120px] h-[120px] border-[3px] border-accent-warm/20 rotate-12 animate-float-slow" />
          <div className="absolute top-40 right-[-20px] w-[80px] h-[80px] bg-accent-gold/10 rounded-full animate-pulse-glow" />

          <div className="relative px-[10px] pt-8 pb-6">
            {/* Giant decorative typography */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
              <span
                className="block font-heading-condensed text-[clamp(80px,20vw,200px)] font-bold leading-none text-green-normal/[0.04] tracking-tighter"
                style={{ marginLeft: '-2%' }}
              >
                EOL
              </span>
            </div>

            <Carousel />
          </div>
        </section>

        {/* Trusted by with bold pattern band */}
        <section className="relative py-10">
          <div className="absolute inset-y-0 left-0 right-0 pattern-circles opacity-[0.06]" />
          <div className="relative">
            {/* Accent line */}
            <div className="mx-auto w-[60%] h-[2px] bg-gradient-to-r from-transparent via-accent-warm to-transparent mb-8" />
            <TrustedBy />
            <div className="mx-auto w-[60%] h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mt-8" />
          </div>
        </section>

        {/* Button pair with dramatic framing */}
        <section className="relative py-12">
          {/* Overlapping decorative elements */}
          <div className="absolute top-1/2 left-8 w-[60px] h-[60px] border-2 border-green-normal/30 -translate-y-1/2 rotate-45" />
          <div className="absolute top-1/2 right-8 w-[60px] h-[60px] border-2 border-accent-warm/30 -translate-y-1/2 -rotate-12" />

          <div className="relative">
            {/* Pattern backdrop */}
            <div className="absolute inset-0 pattern-crosshatch opacity-[0.04] -m-8 p-8" />
            <ButtonPair />
          </div>
        </section>

        {/* FAQ with maximalist treatment */}
        <section className="relative py-16">
          {/* Bold background block */}
          <div className="absolute inset-x-0 top-4 bottom-4 bg-green-darker/80 pattern-dots-sm" />

          {/* Overlapping accent shapes */}
          <div className="absolute top-0 left-[10%] w-[100px] h-[100px] bg-accent-warm/10 rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-[15%] w-[150px] h-[150px] border-[3px] border-accent-gold/20 rotate-12 translate-y-1/2" />

          <div className="relative">
            <Faq />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
