import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";

function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-16 py-12">
        <TerminalHero />
        <Carousel />
        <TrustedBy />
        <ButtonPair />
        <Faq />
        <TerminalFooter />
      </main>
    </div>
  );
}

function TerminalHero() {
  return (
    <section className="w-full px-4">
      <div className="overflow-hidden rounded border border-border-default bg-bg-secondary">
        <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-term-red/70" />
          <div className="h-3 w-3 rounded-full bg-term-yellow/70" />
          <div className="h-3 w-3 rounded-full bg-term-green/70" />
          <span className="ml-2 font-mono text-xs text-term-dark-gray">
            eol-terminal -- maintained-software
          </span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
          <p className="animate-fade-in-up">
            <span className="text-term-green">$</span>{" "}
            <span className="text-term-cyan">eol</span>{" "}
            <span className="text-term-white">maintained-software</span>
          </p>
          <p className="mt-4 animate-fade-in-up-delay-1 text-term-gray">
            <span className="text-term-yellow">const</span>{" "}
            <span className="text-term-white">status</span>{" "}
            <span className="text-term-yellow">=</span>{" "}
            <span className="text-term-green">&quot;your legacy systems&quot;</span>
          </p>
          <p className="animate-fade-in-up-delay-1 text-term-gray">
            <span className="text-term-yellow">const</span>{" "}
            <span className="text-term-white">action</span>{" "}
            <span className="text-term-yellow">=</span>{" "}
            <span className="text-term-green">&quot;we keep them running&quot;</span>
          </p>
          <p className="mt-4 animate-fade-in-up-delay-2">
            <span className="text-term-dark-gray">
              # Enterprise software past EOL? Deprecated vendor?
            </span>
          </p>
          <p className="animate-fade-in-up-delay-2">
            <span className="text-term-dark-gray">
              # We maintain what others abandon.
            </span>
          </p>
          <p className="mt-4 animate-fade-in-up-delay-3">
            <span className="text-term-green">$</span>{" "}
            <span className="text-term-white">echo</span>{" "}
            <span className="text-term-green">&quot;uptime: guaranteed&quot;</span>
          </p>
          <p className="mt-1 animate-fade-in-up-delay-3 text-term-green">
            uptime: guaranteed
          </p>
          <p className="mt-2 animate-fade-in-up-delay-3">
            <span className="text-term-green">$</span>
            <span className="ml-1 inline-block h-4 w-2 animate-blink bg-term-green" />
          </p>
        </div>
      </div>
    </section>
  );
}

function TerminalFooter() {
  return (
    <footer className="w-full border-t border-border-subtle px-4 pt-8">
      <div className="mx-auto max-w-2xl">
        <div className="font-mono text-xs text-term-dark-gray">
          <p>
            <span className="text-term-green">$</span> cat ./footer.txt
          </p>
          <p className="mt-2">
            (c) 2026 EOL Maintained Software. All rights reserved.
          </p>
          <p className="mt-1">
            <span className="text-term-yellow">exit</span>(0)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default LandingPage;
