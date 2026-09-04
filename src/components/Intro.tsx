"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "./ui/motion";
import { person } from "@/lib/data";

const HOLD = 1450;

/**
 * A calling card, then it lifts. Reduced motion skips it entirely — `onDone`
 * fires on the first frame so the site is simply there.
 */
export default function Intro({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      onDone();
      return;
    }

    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
      onDone();
    }, HOLD);

    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          exit={{ y: "-101%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ivory px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-center"
          >
            <div className="font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-none font-light tracking-[0.16em] text-ink">
              {person.first} {person.last}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
              className="mt-5 h-px w-full rule"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-5 meta text-stone"
            >
              {person.tagline}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
