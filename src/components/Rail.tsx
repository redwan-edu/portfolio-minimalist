"use client";

import { motion } from "motion/react";
import { EASE } from "./ui/motion";
import { views, type View } from "@/lib/data";

export default function Rail({
  view,
  onSelect,
  show,
}: {
  view: View;
  onSelect: (next: View) => void;
  show: boolean;
}) {
  // Below lg the rail is a scrolling strip; the right-edge fade says there are
  // more sections past the one at the edge.
  return (
    <motion.nav
      initial={false}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{ duration: 0.9, delay: show ? 0.15 : 0, ease: EASE }}
      aria-label="Sections"
      className="-mx-[clamp(1.5rem,4.5vw,4.5rem)] shrink-0 overflow-x-auto px-[clamp(1.5rem,4.5vw,4.5rem)] py-5 [mask-image:linear-gradient(to_right,black_calc(100%-3rem),transparent)] [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 lg:py-0 lg:[mask-image:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex min-w-max items-center gap-7 lg:min-w-0 lg:flex-col lg:items-start lg:gap-[1.15rem] lg:pl-8">
        {views.map((v) => {
          const active = v.id === view;
          return (
            <li key={v.id} className="relative">
              <button
                type="button"
                onClick={() => onSelect(v.id)}
                aria-current={active ? "page" : undefined}
                className={`meta whitespace-nowrap transition-colors duration-500 ${
                  active ? "font-medium text-ink" : "text-stone hover:text-graphite"
                }`}
              >
                {v.label}
              </button>

              {active && (
                <motion.span
                  layoutId="rail-mark"
                  transition={{ duration: 0.55, ease: EASE }}
                  className="absolute -bottom-2 left-0 block h-px w-full bg-brass lg:top-1/2 lg:-bottom-auto lg:-left-8 lg:w-5"
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
