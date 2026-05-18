import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What software do you maintain?",
    answer: "We maintain legacy enterprise systems that other vendors have abandoned. COBOL, Delphi, VB6, you name it. If it runs, we keep it running.",
  },
  {
    question: "How long have you been doing this?",
    answer: "Since 1997. We've seen every Y2K patch, every millennium bug, every 'this system will be replaced next year' that never happened.",
  },
  {
    question: "Can you really still support our 1998 system?",
    answer: "Absolutely. We've got engineers who remember when 'the cloud' was just weather. Your old system is our bread and butter.",
  },
];

function FaqItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-retro-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-body text-base font-bold hover:bg-retro-bg"
        aria-expanded={isOpen}
      >
        <span>
          <span className="text-retro-blue">{isOpen ? "[-]" : "[+]"}</span>{" "}
          {item.question}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-retro-border bg-retro-bg px-4 py-3 font-body text-sm text-font-muted">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="retro-box">
        <div className="border-b-2 border-retro-border bg-retro-yellow px-4 py-3 text-center">
          <h2 className="font-heading text-section-heading font-bold text-font-dark">
            ★ FREQUENTLY ASKED QUESTIONS ★
          </h2>
        </div>
        <div>
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
