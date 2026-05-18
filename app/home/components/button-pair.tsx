export default function ButtonPair() {
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        type="button"
        className="group flex items-center gap-1.5 rounded-lg border border-accent/40 bg-transparent px-5 py-2.5 font-body text-sm font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/5"
      >
        Contact sales
        <img
          src="/images/arrow.svg"
          alt=""
          className="h-4 w-[14px] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>
      <button
        type="button"
        className="rounded-lg bg-accent px-5 py-2.5 font-body text-sm font-medium text-surface-900 transition-all duration-200 hover:bg-accent-dim"
      >
        Read more
      </button>
    </div>
  );
}
