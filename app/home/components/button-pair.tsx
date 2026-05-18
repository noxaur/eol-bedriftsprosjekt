export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-20">
      <button type="button" className="flex items-center gap-[5px] rounded-lg border border-brand px-[15px] py-[5px] font-body text-base text-brand">
        Contact sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </button>
      <button type="button" className="rounded-lg bg-brand px-[15px] py-[5px] font-body text-base text-white">
        Read more
      </button>
    </div>
  );
}
