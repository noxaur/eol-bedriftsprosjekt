export default function TrustedBy() {
  return (
    <section className="flex w-full max-w-[500px] flex-col items-center gap-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <h2 className="font-heading-condensed text-sm font-medium uppercase tracking-[0.15em] text-text-secondary">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex animate-marquee items-center gap-[40px]">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-6 w-[924px] shrink-0 opacity-60 brightness-0 invert"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-6 w-[924px] shrink-0 opacity-60 brightness-0 invert"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-6 w-[924px] shrink-0 opacity-60 brightness-0 invert"
          />
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
    </section>
  );
}
