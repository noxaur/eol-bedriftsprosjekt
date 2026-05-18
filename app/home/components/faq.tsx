export default function Faq() {
  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="font-heading text-section-heading text-charcoal">
          Frequently asked questions
        </h2>
      </div>
      <div className="border-t border-border">
        <div className="py-6 border-b border-border">
          <h3 className="font-heading-condensed text-base font-semibold text-charcoal mb-2">
            What does maintained software mean?
          </h3>
          <p className="font-body text-base text-charcoal-light leading-relaxed">
            We take ownership of critical business software that no longer has active vendor support. Our team keeps it running, secure, and evolving with your business needs.
          </p>
        </div>
        <div className="py-6 border-b border-border">
          <h3 className="font-heading-condensed text-base font-semibold text-charcoal mb-2">
            How quickly can you take over a codebase?
          </h3>
          <p className="font-body text-base text-charcoal-light leading-relaxed">
            Most handovers complete within 2-4 weeks. We start with a thorough audit and provide a maintenance plan before taking full ownership.
          </p>
        </div>
        <div className="py-6">
          <h3 className="font-heading-condensed text-base font-semibold text-charcoal mb-2">
            What technologies do you support?
          </h3>
          <p className="font-body text-base text-charcoal-light leading-relaxed">
            We work with a wide range of legacy and modern technologies. Contact us with your stack and we will assess feasibility within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
