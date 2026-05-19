export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <button
        type="button"
        className="animate-glow flex items-center gap-2 rounded-lg border-2 border-green-normal bg-green-darker px-6 py-3 font-body text-base font-bold text-green-normal transition-all hover:bg-green-normal hover:text-green-darker"
      >
        Contact sales
        <img src="/images/arrow.svg" alt="" className="size-4 brightness-0 invert-[0.6] hue-rotate-[100deg]" />
      </button>
      <button
        type="button"
        className="rounded-lg border-2 border-green-normal bg-green-normal px-6 py-3 font-body text-base font-bold text-green-darker transition-all hover:bg-green-dark hover:border-green-dark"
      >
        Read more
      </button>
    </div>
  );
}
