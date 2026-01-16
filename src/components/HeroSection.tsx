"use client";

import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const heroLines = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10">
        <motion.div
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={heroLines}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200"
          >
            {site.name}
          </motion.p>
          <motion.h1
            variants={heroLines}
            className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            variants={heroLines}
            className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            {site.description}
          </motion.p>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            variants={heroLines}
            href="#contact"
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:bg-amber-200",
            )}
          >
            {site.contact.ctaPrimary}
          </motion.a>
          <motion.a
            variants={heroLines}
            href={`mailto:${site.contact.email}`}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-white/40",
            )}
          >
            {site.contact.ctaSecondary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
