export default function TrustedBy() {
  return (
    <section className="w-full">
      <h2 className="mb-6 font-heading-condensed text-section-heading font-bold uppercase tracking-wider text-black">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden border-y-[3px] border-black bg-white py-4">
        <div className="flex animate-marquee items-center gap-[40px] px-6">
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
