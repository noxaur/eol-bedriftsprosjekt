export default function TrustedBy() {
  return (
    <section className="w-full max-w-2xl px-4">
      <div className="mb-4">
        <span className="text-term-dark-gray text-xs">
          <span className="text-term-green">$</span> cat ./clients.conf | head -8
        </span>
      </div>
      <h2 className="sr-only">Trusted by</h2>
      <div className="overflow-hidden rounded border border-border-subtle bg-bg-secondary">
        <div className="border-b border-border-subtle px-4 py-1.5 font-mono text-term-dark-gray text-xs">
          <span className="text-term-green">Client</span>              <span className="text-term-dark-gray">Since</span>
        </div>
        <div className="py-5">
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
      </div>
    </section>
  );
}
