import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What does EOL software mean?",
    answer:
      "EOL stands for End of Life. When a software vendor declares a product EOL, they stop providing updates, security patches, and technical support. This leaves your systems vulnerable and non-compliant. We step in to provide the ongoing maintenance and support that vendors no longer offer.",
  },
  {
    question: "Why not just upgrade to the latest version?",
    answer:
      "Upgrades often require significant budget, retraining, and infrastructure changes. New versions may remove features your business depends on or introduce instability. We keep your current software running securely so you can plan transitions on your own timeline, not the vendor's.",
  },
  {
    question: "How do you provide support for discontinued software?",
    answer:
      "Our team of engineers maintains deep expertise in legacy systems. We develop custom patches, monitor security vulnerabilities, and provide dedicated support for the specific software versions you rely on. We stabilize what the vendor has abandoned.",
  },
  {
    question: "Is maintaining EOL software secure?",
    answer:
      "Yes, when done properly. We implement targeted security patches, monitor for known vulnerabilities, and maintain strict change control processes. Our approach ensures your EOL software remains as secure as possible while you plan your long-term strategy.",
  },
];

interface FaqAccordionProps {
  id?: string;
}

export default function Faq({ id }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="mx-auto flex w-full max-w-[382px] flex-col items-center gap-[15px] rounded-[5px] bg-green-light-active py-[30px]">
      <h2 className="w-full text-center px-[20px] font-body text-section-heading font-bold text-green-dark">
        Frequently asked questions
      </h2>
      <div className="w-full px-5">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-green-normal/20 last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 font-body text-sm font-medium text-green-darker">
                {item.question}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-green-normal transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
            >
              <p className="font-body text-sm leading-relaxed text-font-muted">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
