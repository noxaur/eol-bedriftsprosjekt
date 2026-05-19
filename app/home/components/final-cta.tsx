"use client";

import { motion } from "motion/react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-subtle/60 via-transparent to-brand-subtle/30" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Ready to modernize?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Book a 30-minute call with our engineering team. No pitch deck, just
            a technical conversation about your infrastructure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sales@eol.no"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20"
            >
              Book a call
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-text-secondary underline underline-offset-4 transition-colors hover:text-text-primary"
            >
              Learn more about features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
