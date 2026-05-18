export default function Faq() {
  return (
    <section>
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-subtle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
            <path d="M6 6a2 2 0 1 1 4 0c0 1-1.5 1.5-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-accent" />
            <circle cx="8" cy="11" r="0.75" fill="currentColor" className="text-accent" />
          </svg>
        </div>
        <h2 className="font-display text-xl font-bold text-text">
          Questions? We have answers
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-surface-raised p-6 transition-all hover:shadow-md">
          <h3 className="font-display text-sm font-semibold text-text">
            What does maintained software mean?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            We build systems designed to last. No planned obsolescence, no forced migrations. Your software stays functional and secure for years, and we stick around to make sure of it.
          </p>
        </div>
        <div className="rounded-2xl bg-surface-raised p-6 transition-all hover:shadow-md">
          <h3 className="font-display text-sm font-semibold text-text">
            How is this different from agencies?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Agencies ship and leave. We stay. Long-term maintenance is the product, not an afterthought. Think of us as your team that never quits.
          </p>
        </div>
        <div className="rounded-2xl bg-surface-raised p-6 transition-all hover:shadow-md">
          <h3 className="font-display text-sm font-semibold text-text">
            What technologies do you use?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Boring technology. The kind that has been stable for a decade and will be stable for another. We choose tools that outlast trends, so you can focus on your business.
          </p>
        </div>
        <div className="rounded-2xl bg-surface-raised p-6 transition-all hover:shadow-md">
          <h3 className="font-display text-sm font-semibold text-text">
            How do I get started?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Just reach out. We will have an honest conversation about your systems, no pitch decks or pressure. If we can help, great. If not, we will tell you that too.
          </p>
        </div>
      </div>
    </section>
  );
}
