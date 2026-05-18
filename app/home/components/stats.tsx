"use client";

import { motion } from "motion/react";

const stats = [
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
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div
                className="text-4xl font-bold tracking-tight md:text-5xl"
                style={{ color: "var(--color-brand)" }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
