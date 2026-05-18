import { useState } from "react";

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
          <span className="text-term-green">$</span> cat ./faq.md
        </span>
      </div>
      <h2 className="mb-6 font-mono text-lg font-bold tracking-wider text-term-white">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="space-y-px rounded border border-border-default bg-border-subtle">
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
    <div className="bg-bg-secondary">
      <div className="border-b border-border-subtle px-4 py-3">
        <div className="flex items-start gap-2">
          <span className="text-term-dark-gray shrink-0 text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-term-cyan text-sm">{item.question}</span>
        </div>
        <p className="mt-2 pl-6 font-mono text-xs leading-relaxed text-term-gray">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
