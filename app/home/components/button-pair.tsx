export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border-2 border-green-normal bg-green-darker px-6 py-3 font-body text-base font-bold text-green-normal transition-all hover:bg-green-normal hover:text-green-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep"
      >
        Contact sales
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-4">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="#39B54A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        className="rounded-lg border-2 border-green-normal bg-green-normal px-6 py-3 font-body text-base font-bold text-green-darker transition-all hover:bg-green-dark hover:border-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-deep"
      >
        Read more
      </button>
    </div>
  );
}
