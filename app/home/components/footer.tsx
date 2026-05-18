export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-display text-sm font-semibold text-text">EOL</span>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-text-muted">
            Software that lasts. Built for companies who value stability over hype.
          </p>
        </div>
        <div className="flex gap-8 text-xs text-text-muted">
          <span>Oslo, Norway</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
