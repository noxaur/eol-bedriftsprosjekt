export default function ButtonPair() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-4">
      <button
        type="button"
        className="group flex items-center gap-2 rounded border border-term-green bg-bg-secondary px-4 py-2 font-mono text-sm text-term-green transition-all hover:bg-term-green hover:text-bg-primary"
      >
        <span className="text-term-dark-gray group-hover:text-bg-primary">
          $
        </span>
        Contact Sales
        <img
          src="/images/arrow.svg"
          alt=""
          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
        />
      </button>
      <button
        type="button"
        className="rounded border border-border-default bg-bg-secondary px-4 py-2 font-mono text-sm text-term-gray transition-colors hover:border-term-cyan hover:text-term-cyan"
      >
        <span className="text-term-dark-gray">$ </span>
        Read More
      </button>
    </div>
  );
}
