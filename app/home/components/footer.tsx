export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
              <span className="font-display text-xs font-bold text-text-inverse">
                E
              </span>
            </div>
            <span className="font-display text-sm font-bold text-text">EOL</span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-text-muted">
            Software that lasts. Built for companies who value stability over hype.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-text-muted">
          <span>Oslo, Norway</span>
          <span className="h-1 w-1 rounded-full bg-rule" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
