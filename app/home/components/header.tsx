interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="relative" style={{ width: 40, height: 52 }}>
            <img
              src="/images/logo-icon.svg"
              alt=""
              className="absolute"
              style={{ width: 38, height: 50, left: 1, top: 1 }}
            />
            <img
              src="/images/logo-image.png"
              alt=""
              className="absolute"
              style={{ width: 16, height: 16, left: 12, top: 18 }}
            />
            <span
              className="absolute font-logo text-logo-sm leading-none text-charcoal"
              style={{ left: 10, top: 41 }}
            >
              ReOL
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-sm bg-terracotta/10 px-3 py-1.5 font-body text-xs text-terracotta-dark">
            Maintained software
          </span>
          <button
            onClick={onMenuToggle}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center text-charcoal hover:text-terracotta transition-colors"
          >
            <img src="/images/hamburger.svg" alt="" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
