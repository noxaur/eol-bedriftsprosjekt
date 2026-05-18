export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-20">
      <button
        type="button"
        className="flex items-center gap-[5px] rounded-none border-[3px] border-black bg-white px-[15px] py-[5px] font-body text-base font-bold text-black brutalist-shadow transition-shadow hover:brutalist-shadow-hover"
      >
        Contact sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </button>
      <button
        type="button"
        className="rounded-none border-[3px] border-black bg-black px-[15px] py-[5px] font-body text-base font-bold text-white brutalist-shadow transition-shadow hover:brutalist-shadow-hover"
      >
        Read more
      </button>
    </div>
  );
}
