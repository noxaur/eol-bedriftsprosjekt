"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "We assess your current infrastructure, identify risks, and map dependencies.",
  },
  {
    number: "02",
    title: "Stabilize",
    description: "Critical fixes first. Security patches, dependency updates, and monitoring setup.",
  },
  {
    number: "03",
    title: "Maintain",
    description: "Ongoing maintenance with transparent reporting, SLAs, and 24/7 incident response.",
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Three phases from chaos to confidence.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15, ease: easeOut }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 left-full hidden h-px w-full md:block"
                  style={{
                    background: `linear-gradient(to right, var(--color-border), transparent)`,
                  }}
                />
              )}
              <div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl text-xl font-bold"
                style={{
                  backgroundColor: "var(--color-brand-subtle)",
                  color: "var(--color-brand)",
                }}
              >
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="max-w-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
