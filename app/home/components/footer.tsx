export default function Footer() {
  return (
    <footer className="relative border-t-2 border-green-normal/15 bg-green-deep px-4 py-10">
      <div className="pointer-events-none absolute inset-0 select-none bg-dots-dense opacity-50" />
      <div className="relative z-10 mx-auto flex max-w-[600px] flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-logo text-sm leading-none text-green-normal">ReOL</span>
          <span className="font-body text-xs text-green-normal/50">|</span>
          <span className="font-body text-xs text-green-normal/50">Maintained software</span>
        </div>
        <nav className="flex gap-8 font-body text-xs text-green-normal/40">
          <a href="#" className="transition-colors hover:text-green-normal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep rounded">Privacy</a>
          <a href="#" className="transition-colors hover:text-green-normal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep rounded">Terms</a>
          <a href="#" className="transition-colors hover:text-green-normal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep rounded">Security</a>
          <a href="#" className="transition-colors hover:text-green-normal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep rounded">Contact</a>
        </nav>
        <p className="font-body text-xs text-green-normal/30">
          &copy; {new Date().getFullYear()} EOL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
