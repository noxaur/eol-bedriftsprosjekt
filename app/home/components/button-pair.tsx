export default function ButtonPair() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
      <button type="button" className="retro-btn-primary">
        Contact Sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </button>
      <button type="button" className="retro-btn-secondary">
        Read More
      </button>
    </div>
  );
}
