export default function TrustedBy() {
  return (
    <section className="px-6 py-[clamp(2.5rem,5vw,4rem)] md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
            Trusted by teams who care about what they build
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-accent-sage" />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee items-center justify-center gap-12">
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-auto shrink-0 opacity-50"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-auto shrink-0 opacity-50"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-auto shrink-0 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
