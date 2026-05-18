interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="relative flex items-center justify-between px-[10px] py-[6px] bg-green-darkest border-b border-green-normal/20">
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[2px] bg-gradient-to-r from-accent-warm to-transparent" />

      <div className="flex items-center gap-[6.71px]">
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
            className="absolute font-logo text-logo-sm leading-none text-green-normal"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="relative rounded-[5px] bg-green-normal px-[10px] py-[5px] font-body text-xs text-green-darkest font-bold">
          Maintained software
          {/* Subtle glow */}
          <span className="absolute inset-0 rounded-[5px] bg-green-normal/30 blur-sm -z-10" />
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="relative flex h-8 w-8 items-center justify-center rounded-full border border-green-normal/30 hover:border-accent-warm/60 transition-colors"
        >
          <img src="/images/hamburger.svg" alt="" className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
