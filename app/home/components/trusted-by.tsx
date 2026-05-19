export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-6 border-y-2 border-green-normal/10 bg-green-darker px-4 py-8">
      <h2 className="font-heading-condensed text-display font-black uppercase tracking-[0.15em] text-green-normal/60">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee items-center gap-[40px]">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 brightness-[2] saturate-0 opacity-60"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 brightness-[2] saturate-0 opacity-60"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-[20px] w-[924px] shrink-0 brightness-[2] saturate-0 opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
