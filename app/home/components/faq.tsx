

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What software do you maintain?",
    answer:
      "We maintain legacy enterprise systems that are critical to your operations but no longer have vendor support. This includes EOL databases, deprecated frameworks, and custom-built internal tools.",
  },
  {
    question: "How long have you been doing this?",
    answer:
      "Over a decade of experience keeping critical systems running. Our team has deep expertise in legacy codebases across multiple industries.",
  },
  {
    question: "What is your response time?",
    answer:
      "We offer SLA-backed response times starting at 4 hours for critical issues. Emergency support is available 24/7 for production incidents.",
  },
];

export default function Faq() {
  return (
    <section className="w-full max-w-2xl px-4">
      <div className="mb-4">
        <span className="text-term-dark-gray text-xs">
          <span className="text-term-green">$</span> ls -la ./faq/
        </span>
      </div>
      <div className="rounded border border-border-default bg-bg-secondary divide-y divide-border-subtle">
        <div className="px-4 py-2 font-mono text-xs text-term-dark-gray">
          <span className="text-term-green">drwxr-xr-x</span>  faq
        </div>
        <h2 className="sr-only">Frequently asked questions</h2>
        {faqItems.map((item, i) => (
          <FaqAccordion key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function FaqAccordion({
  item,
  index,
}: {
  item: FaqItem;
  index: number;
}) {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-term-dark-gray shrink-0 w-6 font-mono text-xs">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <span className="text-term-cyan text-sm font-medium">{item.question}</span>
          <p className="mt-1 pr-4 font-mono text-xs leading-relaxed text-term-gray">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
