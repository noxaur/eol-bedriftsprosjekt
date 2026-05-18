interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="border-b-2 border-retro-border bg-retro-white">
      <div className="construction-stripe" />
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="retro-box flex items-center gap-2 px-3 py-1">
            <img
              src="/images/logo-icon.svg"
              alt=""
              className="h-8 w-6"
            />
            <span className="font-logo text-lg text-retro-blue">
              ReOL
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="retro-badge">
            Maintained Software
          </span>
          <button
            onClick={onMenuToggle}
            aria-label="Toggle menu"
            className="retro-btn-outline px-2 py-1 text-sm"
          >
            [MENU]
          </button>
        </div>
      </div>
      <div className="construction-stripe" />
    </header>
  );
}
