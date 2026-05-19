interface InfoCardProps {
  title: string;
  body: string;
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-green-normal/20 bg-white px-6 py-8 shadow-[8px_8px_0px_#39B54A]">
      <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-green-normal/5" />
      <div className="pointer-events-none absolute -bottom-4 -left-4 size-16 rotate-45 border-2 border-green-normal/10" />
      <span className="font-heading-condensed text-[clamp(48px,10vw,72px)] font-black leading-none text-green-normal/10 select-none">
        0{title === "Maintained" ? "1" : "2"}
      </span>
      <h3 className="relative -mt-2 font-heading-condensed text-display font-black text-green-darker">
        {title}
      </h3>
      <div className="my-4 h-1 w-16 rounded-full bg-green-normal" />
      <p className="font-body text-lg leading-relaxed text-font-muted">
        {body}
      </p>
    </div>
  );
}
