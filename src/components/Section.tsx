"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export function Section({ className, children, ...props }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 };

  return (
    <motion.section
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className={cn("scroll-mt-28 py-16 sm:py-20", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
