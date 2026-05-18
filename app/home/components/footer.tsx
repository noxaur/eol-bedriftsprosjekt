export default function Footer() {
  return (
    <footer className="border-t border-green-normal/20 bg-green-light py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          <img src="/images/logo-icon.svg" alt="" className="h-8 w-8" />
          <span className="font-logo text-lg text-green-darker">ReOL</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a href="/" className="font-body text-sm text-font-muted hover:text-green-normal transition-colors">
            Home
          </a>
          <a href="/contact-sales" className="font-body text-sm text-font-muted hover:text-green-normal transition-colors">
            Contact Sales
          </a>
        </nav>

        <p className="font-body text-xs text-font-muted/70">
          &copy; {new Date().getFullYear()} ReOL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
