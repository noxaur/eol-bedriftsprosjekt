import InfoCard from "./info-card";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="flex w-full flex-col items-center gap-[26px] px-6 lg:px-0">
      <h2 className="w-full max-w-[330px] font-heading text-heading-lg text-green-dark">
        <span className="font-bold">Maintaining</span>{" "}
        <span className="font-heading-condensed italic font-bold text-[#1F211F]">
          EOL
        </span>{" "}
        <span className="font-bold">software</span>
      </h2>

      <div className="flex w-full max-w-[382px] flex-col items-center gap-4">
        <p className="font-body text-sm leading-relaxed text-green-darker">
          At our core, we empower businesses that might lack the budget, resources, or specific components needed for future-proof support. We are here to safeguard your company from lost revenue and the massive overhead of developing, maintaining, and installing new software.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          Let us face it: most new tech is not built for everyone, and software providers often overlook that reality. Technology is inherently unstable, so we stabilize it for you.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          We ensure your existing software continues to carry the weight of your infrastructure, preventing collapse caused by forced implementations, feature bloat, or the removal of legacy systems. Keep your foundation solid.
        </p>
      </div>

      <InfoCard
        title="Why it matters"
        body="Every day your EOL software runs without support, you face security risks, compliance gaps, and operational uncertainty. We eliminate that risk with dedicated, expert maintenance tailored to your exact version and environment."
      />
    </section>
  );
}
