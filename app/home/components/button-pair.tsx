import { Link } from "react-router";

interface ButtonPairProps {
  onReadMore?: () => void;
}

export default function ButtonPair({ onReadMore }: ButtonPairProps) {
  return (
    <div className="flex w-full items-center justify-center gap-20">
      <Link to="/contact-sales" className="flex items-center gap-[5px] rounded-[5px] border border-green-normal px-[15px] py-[5px] font-body text-base text-green-normal transition-colors hover:bg-green-normal/10">
        Contact sales
        <img src="/images/arrow.svg" alt="" className="h-4 w-[14px]" />
      </Link>
      <button
        type="button"
        onClick={onReadMore}
        className="rounded-[5px] bg-green-normal px-[15px] py-[5px] font-body text-base text-green-light transition-colors hover:bg-green-dark"
      >
        Read more
      </button>
    </div>
  );
}
