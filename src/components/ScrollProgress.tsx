"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollProgressProps = {
  className?: string;
};

export function ScrollProgress({ className }: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = shouldReduceMotion
    ? scrollYProgress
    : useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className={cn("fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent", className)}>
      <motion.div
        className="h-full origin-left bg-amber-300/90"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
