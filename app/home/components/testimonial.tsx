"use client";

import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <p className="text-balance text-2xl font-medium leading-relaxed text-text-primary md:text-3xl">
            &ldquo;EOL took over our legacy infrastructure and had zero incidents
            in the first year. Our CTO sleeps better now.&rdquo;
          </p>

          <footer className="mt-10 flex items-center justify-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              AK
            </div>
            <div className="text-left">
              <div className="font-semibold text-text-primary">
                Anna Kristensen
              </div>
              <div className="text-sm text-text-muted">
                VP Engineering, NordicPay
              </div>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
