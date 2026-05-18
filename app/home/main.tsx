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
        <section className="relative overflow-hidden px-6 pt-[clamp(3rem,8vw,6rem)] md:px-12">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-subtle/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 top-40 h-48 w-48 rounded-full bg-accent-amber/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 animate-wiggle rounded-full bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    Since 2019
                  </span>
                </div>
                <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-text">
                  Software that
                  <br />
                  lasts.
                  <span className="text-accent">.</span>
                </h1>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-base leading-relaxed text-text-muted">
                  We build and maintain the systems that keep your business running. No hype, no rewrites, just reliable software that works.
                </p>
              </div>
            </div>

            {/* Playful dots */}
            <div className="mt-10 flex items-center gap-2">
              <div className="h-2 w-2 animate-float rounded-full bg-accent" />
              <div className="h-2 w-2 animate-float-delayed rounded-full bg-accent-amber" />
              <div className="h-2 w-2 animate-float rounded-full bg-accent-sage" />
            </div>
          </div>
        </section>

        {/* Soft divider */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] flex items-center justify-center md:mx-12">
          <div className="h-px flex-1 bg-rule" />
          <div className="mx-4 h-2 w-2 rounded-full bg-accent-subtle" />
          <div className="h-px flex-1 bg-rule" />
        </div>

        {/* Trusted by */}
        <TrustedBy />

        {/* Soft divider */}
        <div className="mx-6 flex items-center justify-center md:mx-12">
          <div className="h-px flex-1 bg-rule" />
          <div className="mx-4 h-2 w-2 rounded-full bg-accent-amber/40" />
          <div className="h-px flex-1 bg-rule" />
        </div>

        {/* Carousel */}
        <section className="px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-baseline justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-subtle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
                    <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
                    <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
                    <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
                  </svg>
                </div>
                <h2 className="font-display text-xl font-bold text-text">
                  Selected work
                </h2>
              </div>
              <span className="hidden rounded-full bg-surface-deep px-3 py-1 text-xs font-medium text-text-muted md:inline">
                2024—2026
              </span>
            </div>
            <Carousel />
          </div>
        </section>

        {/* Soft divider */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] flex items-center justify-center md:mx-12">
          <div className="h-px flex-1 bg-rule" />
          <div className="mx-4 h-2 w-2 rounded-full bg-accent-sage/40" />
          <div className="h-px flex-1 bg-rule" />
        </div>

        {/* CTA */}
        <section className="relative overflow-hidden px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12">
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-accent-subtle/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-amber">
                    Let's talk
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold leading-tight text-text">
                  Ready to stop
                  <br />
                  rewriting?
                  <span className="text-accent">.</span>
                </h2>
              </div>
              <div className="md:col-span-5 md:flex md:items-end md:justify-end">
                <ButtonPair />
              </div>
            </div>
          </div>
        </section>

        {/* Soft divider */}
        <div className="mx-6 mt-[clamp(3rem,6vw,5rem)] flex items-center justify-center md:mx-12">
          <div className="h-px flex-1 bg-rule" />
          <div className="mx-4 h-2 w-2 rounded-full bg-accent/40" />
          <div className="h-px flex-1 bg-rule" />
        </div>

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
