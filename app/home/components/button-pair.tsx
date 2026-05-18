export default function ButtonPair() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
      <button
        type="button"
        className="rounded-sm bg-terracotta px-6 py-3 font-body text-base font-medium text-cream hover:bg-terracotta-dark transition-colors duration-200"
      >
        Contact sales
      </button>
      <button
        type="button"
        className="group flex items-center gap-2 rounded-sm border border-charcoal/20 px-6 py-3 font-body text-base font-medium text-charcoal hover:border-terracotta hover:text-terracotta-dark transition-colors duration-200"
      >
        Read more
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l5 5-5 5" />
        </svg>
      </button>
    </div>
  );
}
