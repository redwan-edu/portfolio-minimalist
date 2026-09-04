"use client";

import { useState } from "react";
import PanelShell from "../ui/PanelShell";
import { Item } from "../ui/Frame";
import Arrow from "../ui/Arrow";
import { projects, type Project } from "@/lib/data";

function href(p: Project) {
  if (p.url) return p.url;
  return p.domain ? `https://${p.domain}` : null;
}

function Row({
  p,
  open,
  onOpen,
  delay,
  last,
}: {
  p: Project;
  open: boolean;
  onOpen: () => void;
  delay: number;
  last?: boolean;
}) {
  const link = href(p);

  const body = (
    <>
      <div></div>
      <div className="meta text-stone transition-colors duration-500 group-hover:text-brass">
        {p.domain ?? p.status}
      </div>

      <div className="mt-1 flex items-baseline gap-3 justify-end">
        <h3 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.1] font-light text-ink">
          {p.name}
        </h3>
      </div>

      {/* Only one project is ever expanded — the rest stay a clean index. */}
      <div
        className={`grid transition-[grid-template-rows] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] max-lg:grid-rows-[1fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-2xl text-[.9rem] leading-[1.5] text-graphite lg:ml-auto">
            {p.blurb}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 lg:justify-end">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[0.72rem] tracking-[0.1em] text-stone"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const shell = `group block w-full border-r rule-border pr-5 text-left transition-colors duration-500 hover:border-brass lg:pr-7 lg:text-right ${
    last ? "pt-3 pb-0" : "py-3"
  }`;

  return (
    <Item delay={delay}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onOpen}
          onFocus={onOpen}
          className={shell}
        >
          {body}
        </a>
      ) : (
        <div onMouseEnter={onOpen} className={shell}>
          {body}
        </div>
      )}
    </Item>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(projects[0].id);

  return (
    <PanelShell>
      <div className="flex flex-col">
        {projects.map((p, i) => (
          <Row
            key={p.id}
            p={p}
            open={open === p.id}
            onOpen={() => setOpen(p.id)}
            delay={0.08 + i * 0.05}
            last={i === projects.length - 1}
          />
        ))}
      </div>
    </PanelShell>
  );
}
