"use client";

import { motion } from "motion/react";
import { EASE, EASE_OUT } from "./ui/motion";
import { person } from "@/lib/data";

const RISE = {
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/** The cover: the year, the practice, the name. It sits on the foot of the
    page, and the rail only appears once the reader moves past it. */
export default function Hero() {
  return (
    <motion.div
      exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="w-full lg:ml-auto lg:text-right"
    >
      <motion.div
        {...RISE}
        transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
        className="font-display text-[clamp(2.5rem,4.4vw,4.5rem)] leading-none font-light text-ink"
      >
        {person.since}
      </motion.div>

      <motion.div
        {...RISE}
        transition={{ duration: 0.9, delay: 0.14, ease: EASE }}
        className="mt-2 font-display text-[1.2rem] tracking-[0.2em] text-graphite uppercase"
      >
        {person.tagline}
      </motion.div>

      <motion.h1
        {...RISE}
        transition={{ duration: 1, delay: 0.24, ease: EASE }}
        className="mt-4 inline-block w-fit font-display text-[clamp(3.8rem,13.5vw,12rem)] leading-[0.86] font-light tracking-[-0.022em] text-ink text-left"
      >
        <span className="block">{person.first}</span>
        <span className="block">{person.last}</span>
      </motion.h1>
    </motion.div>
  );
}
