export default function Faq() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        Frequently asked questions
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary">
        Have questions about enterprise software maintenance? We have answers.
      </p>
      <div className="mt-12 space-y-4 text-left">
        {[
          { q: "What does EOL cover?", a: "Security patches, dependency updates, monitoring, incident response, and infrastructure optimization for your entire stack." },
          { q: "How long does onboarding take?", a: "Most enterprise environments are audited and stabilized within two weeks. We work with your team to minimize disruption." },
          { q: "Can you work with our existing team?", a: "Yes. We integrate alongside your engineers, handling maintenance so they can focus on feature work." },
        ].map(({ q, a }) => (
          <details key={q} className="group rounded-lg border border-border">
            <summary className="cursor-pointer px-6 py-4 font-medium text-text-primary transition-colors hover:text-brand">
              {q}
            </summary>
            <p className="border-t border-border px-6 py-4 text-sm leading-relaxed text-text-secondary">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
