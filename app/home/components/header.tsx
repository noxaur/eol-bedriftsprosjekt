interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-[10px] py-[2px] bg-green-light">
      <div className="flex items-center gap-[6.71px]">
        <img
          src="/images/logo-image.png"
          alt="ReOL"
          className="h-[67px] w-auto"
        />
        <img
          src="/images/logo-icon.svg"
          alt=""
          className="h-16 w-auto"
        />
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="rounded-[5px] bg-green-normal px-[10px] py-[5px] font-body text-xs text-green-light">
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
