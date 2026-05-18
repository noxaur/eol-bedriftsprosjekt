export default function TrustedBy() {
  return (
    <section className="flex w-full max-w-[382px] flex-col items-center gap-[22px] pt-[25px]">
      <h2 className="font-heading-condensed text-section-heading font-bold uppercase tracking-wider text-black">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden border-[3px] border-black bg-white brutalist-shadow-sm">
        <div className="flex animate-marquee items-center gap-[40px] py-4 px-6">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
