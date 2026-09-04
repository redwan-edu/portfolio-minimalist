"use client";

import { motion } from "motion/react";
import { EASE } from "./ui/motion";
import { person } from "@/lib/data";

export default function Masthead({
  show,
  contact,
}: {
  show: boolean;
  contact: boolean;
}) {
  return (
    <motion.header
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
      transition={{ duration: 0.9, delay: show ? 0.05 : 0, ease: EASE }}
      className="flex shrink-0 items-baseline justify-between gap-6 pt-7 lg:pt-9"
    >
      <a
        href="#about"
        className="group flex items-baseline"
        aria-label={`${person.name} — home`}
      >
        <span className="font-wildMagnolia text-5xl leading-none text-ink transition-colors group-hover:text-brass">
          {person.name}
        </span>
      </a>

      {/* The cover carries the signature alone; the invitation arrives with
          the rail, once the reader has moved into the navigated views. */}
      <motion.a
        href={`mailto:${person.email}`}
        initial={false}
        animate={contact ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-hidden={!contact}
        tabIndex={contact ? undefined : -1}
        className="group shrink-0 font-display text-lg italic text-ink"
      >
        Get In{" "}
        <span className="relative inline-block">
          Touch
          <span className="absolute -bottom-0.5 left-0 block h-px w-full origin-left bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0" />
          <span className="absolute -bottom-0.5 left-0 block h-px w-full origin-right scale-x-0 bg-brass transition-transform delay-150 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
        </span>
      </motion.a>
    </motion.header>
  );
}
