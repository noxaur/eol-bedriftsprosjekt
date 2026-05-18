export default function ButtonPair() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        className="group inline-flex items-center gap-2 border-b border-accent pb-1 font-sans text-sm font-medium text-text transition-colors hover:text-accent"
      >
        Contact sales
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-text-inverse transition-colors hover:bg-accent-deep"
      >
        Read more
      </button>
    </div>
  );
}
