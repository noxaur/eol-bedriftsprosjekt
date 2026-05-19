import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import Footer from "./components/footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        {/* Hero */}
        <section className="px-6 pt-[clamp(3rem,8vw,6rem)] md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-8">
                <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-text">
                  Software that
                  <br />
                  lasts.
                </h1>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-base leading-relaxed text-text-muted">
                  We build and maintain the systems that keep your business running. No hype, no rewrites, just reliable software.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent-deep">
                    Since 2019
                  </span>
                </div>
              </div>
            </div>

            {/* Geometric accent */}
            <div className="mt-12 flex gap-3">
              <div className="h-3 w-3 bg-accent" />
              <div className="h-3 w-3 border border-accent" />
              <div className="h-3 w-3 rounded-full border border-accent" />
            </div>
          </div>
        </section>

        {/* Rule */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] h-px bg-rule md:mx-12" />

        {/* Trusted by */}
        <TrustedBy />

        {/* Rule */}
        <div className="mx-6 h-px bg-rule md:mx-12" />

        {/* Carousel */}
        <section className="px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="font-display text-xl font-semibold text-text">
                Selected work
              </h2>
              <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-text-muted md:inline">
                2024–2026
              </span>
            </div>
            <Carousel />
          </div>
        </section>

        {/* Rule */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] h-px bg-rule md:mx-12" />

        {/* CTA */}
        <section className="px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="font-display text-2xl font-bold leading-tight text-text">
                  Ready to stop
                  <br />
                  rewriting?
                </h2>
              </div>
              <div className="md:col-span-5 md:flex md:items-end md:justify-end">
                <ButtonPair />
              </div>
            </div>
          </div>
        </section>

        {/* Rule */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] h-px bg-rule md:mx-12" />

        {/* FAQ */}
        <section className="px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12">
          <div className="mx-auto max-w-6xl">
            <Faq />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
