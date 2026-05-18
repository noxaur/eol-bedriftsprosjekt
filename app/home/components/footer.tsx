export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border py-16"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative" style={{ width: 24, height: 24 }}>
                <img
                  src="/images/logo-icon.svg"
                  alt=""
                  className="absolute"
                  style={{ width: 22, height: 22, left: 1, top: 1 }}
                />
              </div>
              <span
                className="font-logo text-sm tracking-wider"
                style={{ color: "var(--color-text-inverse)" }}
              >
                EOL
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Enterprise software maintenance that just works.
            </p>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Security", "Changelog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-text-muted transition-colors hover:text-text-inverse"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-text-muted transition-colors hover:text-text-inverse"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {["Privacy", "Terms", "SLA", "DPA"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-text-muted transition-colors hover:text-text-inverse"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-8 text-center text-xs text-text-muted"
          style={{ borderColor: "var(--color-dark-border)" }}
        >
          &copy; {currentYear} EOL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
