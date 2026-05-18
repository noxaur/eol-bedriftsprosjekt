interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-noir-border bg-noir-bg/80 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
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
            className="absolute font-logo text-logo-sm leading-none text-noir-text"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-noir-accent/30 bg-noir-accent/10 px-3 py-1 font-body text-xs tracking-wide text-noir-accent">
          Maintained software
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="group flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-noir-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-noir-accent focus-visible:outline-offset-2"
        >
          <img src="/images/hamburger.svg" alt="" className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
        </button>
      </div>
    </header>
  );
}
