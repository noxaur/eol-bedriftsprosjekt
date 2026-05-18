export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-[18px] py-6">
      <div className="relative">
        <h2 className="font-heading-condensed text-[clamp(28px,8vw,36px)] font-bold uppercase tracking-wider text-green-light">
          Trusted by
        </h2>
        {/* Underline accent */}
        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-warm via-accent-gold to-accent-warm opacity-60" />
      </div>
      <div className="relative w-full overflow-hidden py-4">
        {/* Pattern backdrop */}
        <div className="absolute inset-0 pattern-dots opacity-[0.05]" />
        <div className="relative flex animate-marquee items-center gap-[40px]">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-70"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-70"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
