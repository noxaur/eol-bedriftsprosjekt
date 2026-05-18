interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-3 glass-panel border-b border-border-glow/50">
      <div className="flex items-center gap-2">
        <div className="relative" style={{ width: 51, height: 67.11 }}>
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="absolute"
            style={{ width: 48.28, height: 63.56, left: 1.36, top: 2.65 }}
          />
          <img
            src="/images/logo-image.png"
            alt=""
            className="absolute"
            style={{ width: 20.13, height: 20.13, left: 15.43, top: 23.49 }}
          />
          <span
            className="absolute font-logo text-logo-sm leading-none text-text-primary"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 font-body text-xs text-accent tracking-wide uppercase">
          Maintained software
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border-glow/50 bg-surface-800/50 text-text-secondary transition-all duration-200 hover:border-accent/50 hover:text-text-primary"
        >
          <img src="/images/hamburger.svg" alt="" className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
