"use client";

import PanelShell from "../ui/PanelShell";
import { Item } from "../ui/Frame";
import Arrow from "../ui/Arrow";
import { person } from "@/lib/data";

/** The record itself is a file; this view is its title page and two ways in. */
export default function Cv() {
  return (
    <PanelShell>
      <Item delay={0}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-end">
          <a
            href={person.cv}
            download
            className="group inline-flex items-center gap-3 meta text-ink transition-colors duration-500 hover:text-brass"
          >
            Download PDF
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5">
              ↓
            </span>
          </a>

          <a
            href={person.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 meta text-stone transition-colors duration-500 hover:text-ink"
          >
            Open in new tab
            <Arrow className="h-2.5 w-2.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Item>

      <Item delay={0.12}>
        <h2 className="mt-6 font-display text-[clamp(2.4rem,7.4vw,5.5rem)] leading-[0.98] font-light tracking-[-0.01em] text-ink uppercase">
          Curriculum <span className="text-stone">Vitae</span>
        </h2>
      </Item>
    </PanelShell>
  );
}
