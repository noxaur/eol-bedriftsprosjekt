export default function TrustedBy() {
  return (
    <section className="px-6 py-[clamp(2.5rem,5vw,4rem)] md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 bg-accent" />
          <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
            Trusted by
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee items-center gap-12">
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-5 w-auto shrink-0 opacity-60"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-5 w-auto shrink-0 opacity-60"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-5 w-auto shrink-0 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
