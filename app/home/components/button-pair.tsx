export default function ButtonPair() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <button
        type="button"
        className="group inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-text-inverse"
      >
        Say hello
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-inverse transition-all hover:bg-accent-deep hover:shadow-lg"
      >
        Learn more
      </button>
    </div>
  );
}
