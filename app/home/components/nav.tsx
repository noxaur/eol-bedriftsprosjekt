"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="relative" style={{ width: 28, height: 28 }}>
            <img
              src="/images/logo-icon.svg"
              alt=""
              className="absolute"
              style={{ width: 26, height: 26, left: 1, top: 1 }}
            />
          </div>
          <span
            className="font-logo text-sm tracking-wider"
            style={{ color: "var(--color-text-primary)" }}
          >
            EOL
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            How it works
          </a>
          <a
            href="#testimonials"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            FAQ
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Contact sales
        </a>
      </div>
    </nav>
  );
}
