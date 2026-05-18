export default function Footer() {
  return (
    <footer className="relative border-t border-green-normal/20">
      <div className="absolute inset-0 pattern-dots-sm opacity-[0.04]" />
      <div className="relative flex flex-col items-center gap-4 px-[10px] py-8">
        <div className="flex items-center gap-2">
          <div className="relative" style={{ width: 30, height: 40 }}>
            <img
              src="/images/logo-icon.svg"
              alt=""
              className="absolute"
              style={{ width: 28, height: 37, left: 1, top: 1.5 }}
            />
          </div>
          <span className="font-logo text-xs text-green-normal">ReOL</span>
        </div>
        <p className="font-body text-xs text-green-light/40 text-center">
          Keeping your critical software alive.
        </p>
        <div className="flex gap-6">
          <div className="h-px w-8 bg-accent-warm/40" />
          <div className="h-px w-8 bg-accent-gold/40" />
          <div className="h-px w-8 bg-green-normal/40" />
        </div>
      </div>
    </footer>
  );
}
