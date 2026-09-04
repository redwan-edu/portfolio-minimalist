"use client";

import PanelShell from "../ui/PanelShell";
import { Item } from "../ui/Frame";
import Arrow from "../ui/Arrow";
import { publications } from "@/lib/data";

export default function Research() {
  return (
    <PanelShell>
      <div className="flex flex-col gap-9">
        {publications.map((p, i) => {
          const hasDoi = Boolean(p.doi && p.doi.trim());

          const body = (
            <article className="flex items-start gap-5 lg:gap-7">
              <div className="flex-1 border-r rule-border pr-5 transition-colors duration-500 group-hover:border-brass lg:pr-7 lg:text-right">
                <div className="flex items-baseline gap-2 lg:justify-end">
                  <h3 className="font-display lg:ml-auto text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.3] font-normal text-ink transition-colors duration-500 group-hover:text-brass">
                    {p.title}
                  </h3>
                </div>
                <div className="mt-3 font-display text-[0.95rem] leading-relaxed text-graphite italic">
                  {p.venue}
                </div>
                <div className="font-display text-[0.8rem] leading-relaxed text-stone italic">
                  {p.publisher}
                </div>
              </div>

              <div className="w-[5.5rem] shrink-0 text-left">
                <div className="font-display text-[1.5rem] leading-none font-light text-ink transition-colors duration-500 group-hover:text-brass">
                  {p.index}
                </div>
                <div className="mt-2 meta text-[.6rem] mb-2 text-stone">
                  {p.status}
                </div>
                <div className="mt-1 text-[1rem] tracking-[0.1em] text-brass">
                  {p.year}
                </div>
              </div>
            </article>
          );

          return (
            <Item key={p.index} delay={0.08 + i * 0.07}>
              {hasDoi ? (
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cursor-pointer"
                >
                  {body}
                </a>
              ) : (
                <div className="group block">{body}</div>
              )}
            </Item>
          );
        })}
      </div>
    </PanelShell>
  );
}
