export default function TrustedBy() {
  return (
    <section className="py-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 gap-4">
        <h2 className="font-heading-condensed text-sm font-semibold tracking-widest uppercase text-charcoal-light shrink-0">
          Trusted by
        </h2>
        <div className="flex-1 relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-10 opacity-60">
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-[924px] shrink-0"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-[924px] shrink-0"
            />
            <img
              src="/images/customer-logos.svg"
              alt="Customer logos"
              className="h-6 w-[924px] shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
