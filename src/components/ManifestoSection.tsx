"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const statements = [
  {
    title: "Quiet by design.",
    body: "We build systems that feel calm, confident, and inevitable.",
  },
  {
    title: "Signal over noise.",
    body: "Every asset earns its place. Every automation has a purpose.",
  },
  {
    title: "Momentum with restraint.",
    body: "We move fast without looking loud or wasting attention.",
  },
];

export function ManifestoSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityOne = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacityTwo = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const opacityThree = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="border-t border-white/10">
      <div className="relative h-[220vh]">
        <div className="sticky top-0 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Manifesto
            </p>
            <div className="relative mt-10 h-[220px] sm:h-[260px]">
              {statements.map((statement, index) => {
                const opacity =
                  shouldReduceMotion || index === 0
                    ? 1
                    : index === 1
                      ? opacityTwo
                      : opacityThree;
                const baseOpacity = index === 0 ? opacityOne : opacity;

                return (
                  <motion.div
                    key={statement.title}
                    style={{ opacity: shouldReduceMotion ? 1 : baseOpacity }}
                    className={cn(
                      "absolute inset-0 flex flex-col gap-4",
                      index === 0 ? "text-zinc-100" : "text-zinc-200",
                    )}
                  >
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                      {statement.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                      {statement.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
