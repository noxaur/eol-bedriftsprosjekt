interface InfoCardProps {
  title: string;
  body: string;
  number?: string;
}

export default function InfoCard({ title, body, number }: InfoCardProps) {
  return (
    <div className="group border border-rule p-6 transition-colors hover:border-accent">
      {number && (
        <span className="font-display text-xs font-medium text-accent">
          {number}
        </span>
      )}
      <h3 className="mt-2 font-display text-lg font-semibold text-text">
        {title}
      </h3>
      <div className="mt-3 h-px w-full bg-rule" />
      <p className="mt-4 text-sm leading-relaxed text-text-muted">{body}</p>
    </div>
  );
}
