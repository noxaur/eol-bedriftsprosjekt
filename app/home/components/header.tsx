interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-[10px] py-[2px] bg-surface">
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
            className="absolute font-logo text-logo-sm leading-none text-black"
            style={{ left: 12.92, top: 52.3 }}
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="rounded-[5px] bg-brand px-[10px] py-[5px] font-body text-xs text-white">
          Maintained software
        </span>
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="flex h-8 w-8 items-center justify-center"
        >
          <img src="/images/hamburger.svg" alt="" className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
