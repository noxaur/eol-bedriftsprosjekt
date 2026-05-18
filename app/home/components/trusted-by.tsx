export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-6 py-8">
      <h2 className="font-heading text-2xl text-noir-text-muted tracking-wide">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-noir-bg to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-noir-bg to-transparent" />
        <div className="flex animate-marquee items-center gap-[40px]">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-50"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-50"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
