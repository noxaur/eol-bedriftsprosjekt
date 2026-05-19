"use client";

import { motion } from "motion/react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const entries = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Deployments per month" },
  { value: "10+", label: "Years of operation" },
  { value: "<50ms", label: "Average response time" },
];

export default function Stats() {
  return (
    <section
      className="py-24"
      style={{
        backgroundColor: "var(--color-surface-dark)",
        color: "var(--color-text-inverse)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-text-inverse/70">
            We maintain{" "}
            {entries.map((e, i) => (
              <span key={e.label}>
                <strong className="font-semibold" style={{ color: "var(--color-brand)" }}>
                  {e.value}
                </strong>{" "}
                {e.label.toLowerCase()}
                {i < entries.length - 2 ? ", " : i === entries.length - 2 ? " and " : ""}
              </span>
            ))}
            . Reliability isn&apos;t a promise — it&apos;s what we measure every day.
          </p>
        </div>
      </div>
    </section>
  );
}
