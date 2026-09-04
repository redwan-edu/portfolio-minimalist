"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "./motion";

/** A line of a panel. Only one view is mounted at a time, so every entrance
    times itself off the panel's mount — each view lands fresh on arrival. */
export function Item({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26, filter: "blur(7px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Hairline that draws from the right, where this layout is anchored. */
export function Rule({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      className={`h-px w-full origin-right rule ${className}`}
    />
  );
}
