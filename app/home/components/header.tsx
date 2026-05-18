interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-12">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-xl font-bold tracking-tight text-text">
          EOL
        </span>
        <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-text-muted md:inline">
          Maintained software
        </span>
      </div>
      <button
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="group flex h-10 w-10 items-center justify-center border border-rule transition-colors hover:border-accent"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-text transition-colors group-hover:text-accent"
        >
          <line x1="2" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </header>
  );
}
