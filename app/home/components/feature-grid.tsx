"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Maintained Software",
    description:
      "Continuous updates, security patches, and dependency management. Your systems stay current without your team lifting a finger.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Zero Downtime",
    description:
      "Deployments that never interrupt your users. Blue-green infrastructure, rolling updates, and instant rollback capability.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure, end-to-end encryption, and automated vulnerability scanning across your entire stack.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Built for reliability
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Everything your infrastructure needs to run smoothly, securely, and at scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-6">
          {features.map((feature, index) => {
            const isPrimary = index === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                className={
                  isPrimary
                    ? "md:col-span-6 rounded-xl border border-border bg-surface p-8 md:p-10"
                    : "md:col-span-3 rounded-xl border border-border bg-surface p-8"
                }
              >
                <div className={`mb-5 inline-flex rounded-lg text-brand ${isPrimary ? "bg-brand-subtle p-3" : "bg-brand-subtle p-2.5"}`}>
                  {feature.icon}
                </div>
                <h3 className={`mb-3 font-semibold text-text-primary ${isPrimary ? "text-xl" : "text-lg"}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed text-text-secondary ${isPrimary ? "text-base" : "text-sm"}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
