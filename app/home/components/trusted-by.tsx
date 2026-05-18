export default function TrustedBy() {
  return (
    <section className="w-full max-w-2xl px-4">
      <div className="mb-4">
        <span className="text-term-dark-gray text-xs">
          <span className="text-term-green">$</span> whoami --clients
        </span>
      </div>
      <h2 className="mb-4 font-mono text-lg font-bold tracking-wider text-term-white">
        TRUSTED BY
      </h2>
      <div className="overflow-hidden rounded border border-border-subtle bg-bg-secondary py-4">
        <div className="flex animate-marquee items-center gap-10">
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-5 w-[308px] shrink-0 opacity-50"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-5 w-[308px] shrink-0 opacity-50"
          />
          <img
            src="/images/customer-logos.svg"
            alt="Customer logos"
            className="h-5 w-[308px] shrink-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
