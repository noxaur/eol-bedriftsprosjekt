interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="border-b border-border-subtle bg-bg-primary">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-term-green text-sm font-semibold">~</span>
          <span className="text-term-cyan text-sm font-semibold">eol</span>
          <span className="text-term-dark-gray text-xs">/</span>
          <span className="text-term-white text-sm">maintained-software</span>
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-term-green" />
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden rounded border border-term-green-muted bg-bg-secondary px-2 py-1 font-mono text-xs text-term-green sm:inline-block">
            $ STATUS: ACTIVE
          </span>
          <button
            onClick={onMenuToggle}
            aria-label="Toggle menu"
            className="rounded border border-border-default bg-bg-secondary px-2 py-1 font-mono text-xs text-term-gray transition-colors hover:border-term-green hover:text-term-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-green"
          >
            [MENU]
          </button>
        </div>
      </div>
    </header>
  );
}
