export default function LogoBar() {
  return (
    <section className="border-y border-border py-12" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-text-muted">
          Trusted by industry leaders
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-16">
            <img
              src="/images/customer-logos.svg"
              alt=""
              className="h-8 w-auto shrink-0 opacity-40 grayscale transition-opacity hover:opacity-70"
              style={{ minWidth: 400 }}
            />
            <img
              src="/images/customer-logos.svg"
              alt=""
              className="h-8 w-auto shrink-0 opacity-40 grayscale transition-opacity hover:opacity-70"
              style={{ minWidth: 400 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
