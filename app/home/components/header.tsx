interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
          <span className="font-display text-sm font-bold text-text-inverse">
            E
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-text">
            EOL
          </span>
          <span className="hidden text-xs font-medium text-text-muted md:inline">
            maintained software
          </span>
        </div>
      </div>
      <button
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-rule transition-all hover:border-accent hover:bg-accent-subtle"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-text transition-colors group-hover:text-accent"
        >
          <line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </header>
  );
}
