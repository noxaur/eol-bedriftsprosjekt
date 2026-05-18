export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-[22px] pt-[25px]">
      <h2 className="font-body text-section-heading font-bold text-green-dark">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee items-center gap-[40px]">
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
