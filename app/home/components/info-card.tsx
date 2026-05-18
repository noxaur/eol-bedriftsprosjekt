interface InfoCardProps {
  title: string;
  body: string;
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="relative mx-auto h-[389px] w-[382px] bg-brand-subtle">
      <h3 className="absolute left-[82px] top-[31px] font-heading text-heading-lg text-text-primary">
        {title}
      </h3>

      <div className="absolute left-[26.51px] top-[81.5px] h-px w-[331.92px] bg-current" />

      <p className="absolute left-[27.5px] top-[106px] w-[329.95px] text-center font-card text-base leading-relaxed">
        {body}
      </p>

      <div className="absolute bottom-[32px] left-[94px] h-[30px] w-[193px] rounded bg-brand" />
    </div>
  );
}
