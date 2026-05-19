interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="relative flex items-center justify-between border-b-2 border-green-normal/15 bg-green-deep px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="relative" style={{ width: 51, height: 67.11 }}>
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="drop-shadow-[0_0_12px_rgba(57,181,74,0.3)]"
            style={{ width: 48.28, height: 63.56, left: 1.36, top: 2.65 }}
          />
          <img
            src="/images/logo-image.png"
            alt=""
            className="absolute"
            style={{ width: 20.13, height: 20.13, left: 15.43, top: 23.49 }}
          />
          <span
            className="absolute font-logo text-logo-sm leading-none text-green-light"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-md border border-green-normal/40 bg-green-darker px-3 py-1.5 font-body text-xs font-medium text-green-normal shadow-[0_0_15px_rgba(57,181,74,0.15)]">
          Maintained software
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="flex size-8 items-center justify-center rounded-md border border-green-normal/20 bg-green-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep"
        >
          <img src="/images/hamburger.svg" alt="" className="size-5 brightness-0 invert" />
        </button>
      </div>
    </header>
  );
}
