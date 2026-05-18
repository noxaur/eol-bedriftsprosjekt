export default function ButtonPair() {
  return (
    <div className="flex w-full items-center justify-center gap-20">
      <button type="button" className="flex items-center gap-[5px] rounded-[5px] border border-green-normal px-[15px] py-[5px] font-body text-base text-green-normal">
        Contact sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </button>
      <button type="button" className="rounded-[5px] bg-green-normal px-[15px] py-[5px] font-body text-base text-green-light">
        Read more
      </button>
    </div>
  );
}
