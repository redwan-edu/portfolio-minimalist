"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "./motion";

/**
 * Every view renders through here. The composition sits low and right — the
 * type settles on the foot of the page rather than floating in the middle —
 * and the panel, never the page, is what scrolls when a view runs long.
 */
export default function PanelShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className={`max-h-full w-full lg:ml-auto lg:max-w-[54rem] lg:pr-1 lg:text-right panel-scroll ${className}`}
    >
      {children}
    </motion.div>
  );
}
