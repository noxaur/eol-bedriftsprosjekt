interface InfoCardProps {
  title: string;
  body: string;
}

export default function InfoCard({ title, body }: InfoCardProps) {
  return (
    <div className="relative bg-cream-dark rounded-sm p-8 border border-border">
      <h3 className="font-heading text-xl text-charcoal mb-4">
        {title}
      </h3>
      <div className="h-px w-full bg-border mb-4" />
      <p className="font-body text-base leading-relaxed text-charcoal-light">
        {body}
      </p>
    </div>
  );
}
