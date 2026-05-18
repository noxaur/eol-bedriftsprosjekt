export default function Faq() {
  return (
    <section>
      <div className="mb-8 flex items-center gap-3">
        <div className="h-2 w-2 bg-accent" />
        <h2 className="font-display text-xl font-semibold text-text">
          Frequently asked questions
        </h2>
      </div>
      <div className="grid gap-0 divide-y divide-rule md:grid-cols-2 md:gap-0 md:divide-x">
        <div className="py-6 md:pr-10">
          <h3 className="font-display text-sm font-semibold text-text">
            What does maintained software mean?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            We build systems designed to last. No planned obsolescence, no forced migrations. Your software stays functional and secure for years.
          </p>
        </div>
        <div className="py-6 md:pl-10">
          <h3 className="font-display text-sm font-semibold text-text">
            How is this different from agencies?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Agencies ship and leave. We stay. Long-term maintenance is the product, not an afterthought.
          </p>
        </div>
        <div className="py-6 md:pr-10">
          <h3 className="font-display text-sm font-semibold text-text">
            What technologies do you use?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Boring technology. The kind that has been stable for a decade and will be stable for another. We choose tools that outlast trends.
          </p>
        </div>
        <div className="py-6 md:pl-10">
          <h3 className="font-display text-sm font-semibold text-text">
            How do I get started?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Contact us for a conversation about your systems. No pitch decks, no pressure. Just an honest assessment of what you need.
          </p>
        </div>
      </div>
    </section>
  );
}
