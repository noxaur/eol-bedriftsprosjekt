export default function TrustedBy() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="retro-box">
        <div className="bg-retro-blue px-3 py-2 text-center font-heading text-section-heading font-bold text-retro-white">
          TRUSTED BY
        </div>
        <div className="border-t-2 border-retro-border p-4">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee items-center gap-[40px]">
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
      </div>
    </section>
  );
}
