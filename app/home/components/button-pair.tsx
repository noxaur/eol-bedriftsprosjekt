export default function ButtonPair() {
  return (
    <div className="relative flex w-full items-center justify-center gap-6 py-4">
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div className="w-2 h-2 bg-accent-warm/60 rotate-45" />
        <div className="w-2 h-2 bg-accent-gold/60 rotate-45" />
        <div className="w-2 h-2 bg-green-normal/60 rotate-45" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div className="w-2 h-2 bg-green-normal/60 rotate-45" />
        <div className="w-2 h-2 bg-accent-gold/60 rotate-45" />
        <div className="w-2 h-2 bg-accent-warm/60 rotate-45" />
      </div>

      <button
        type="button"
        className="relative flex items-center gap-[5px] rounded-[5px] border-2 border-green-normal px-[20px] py-[10px] font-body text-base font-bold text-green-normal hover:bg-green-normal/10 transition-colors group"
      >
        Contact sales
        <img
          src="/images/arrow.svg"
          alt=""
          className="h-4 w-[14px] group-hover:translate-x-1 transition-transform"
        />
      </button>
      <button
        type="button"
        className="relative rounded-[5px] bg-accent-warm px-[20px] py-[10px] font-body text-base font-bold text-green-darkest hover:bg-accent-coral transition-colors"
      >
        Read more
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-[5px] bg-accent-warm/30 blur-md -z-10" />
      </button>
    </div>
  );
}
