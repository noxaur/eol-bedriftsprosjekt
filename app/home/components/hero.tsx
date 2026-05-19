"use client";

import { motion } from "motion/react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-subtle/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <span className="mb-6 inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Maintained software
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl"
        >
          Software that outlives
          <br />
          <span style={{ color: "var(--color-brand)" }}>its builders</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Enterprise-grade maintenance for the systems your business depends on.
          No surprises, no downtime, no technical debt spiral.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20"
          >
            Get started
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary transition-all hover:border-border-hover"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
