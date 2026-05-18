interface InfoCardProps {
  title: string;
  body: string;
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="relative mx-auto h-[389px] w-[382px] bg-green-darker overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-dots-sm opacity-[0.06]" />

      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-accent-warm/10 -translate-y-1/2 translate-x-1/2 rotate-45" />

      <h3 className="absolute left-[82px] top-[31px] font-heading text-heading-lg text-green-light">
        {title}
      </h3>

      <div className="absolute left-[26.51px] top-[81.5px] h-px w-[331.92px] bg-green-normal/40" />

      <p className="absolute left-[27.5px] top-[106px] w-[329.95px] text-center font-card text-base leading-relaxed text-green-light/70">
        {body}
      </p>

      <div className="absolute bottom-[32px] left-[94px] h-[30px] w-[193px] rounded bg-accent-warm/80" />
    </div>
  );
}
