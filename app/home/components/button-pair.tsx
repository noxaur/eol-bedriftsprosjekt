export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <button
        type="button"
        className="group flex items-center gap-2 rounded-lg border border-noir-accent/40 bg-transparent px-6 py-3 font-body text-base text-noir-accent transition-colors transition-shadow transition-transform duration-200 hover:border-noir-accent hover:bg-noir-accent/5 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-noir-accent focus-visible:outline-offset-2"
      >
        Contact sales
        <img
          src="/images/arrow.svg"
          alt=""
          className="h-4 w-[14px] transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
      <button
        type="button"
        className="rounded-lg bg-noir-accent px-6 py-3 font-body text-base text-noir-on-accent font-medium transition-colors transition-shadow duration-200 hover:bg-noir-accent-dim hover:shadow-[0_0_24px_rgba(74,222,128,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-noir-accent focus-visible:outline-offset-2"
      >
        Read more
      </button>
    </div>
  );
}
