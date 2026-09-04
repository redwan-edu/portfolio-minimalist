"use client";

import PanelShell from "../ui/PanelShell";
import { Item } from "../ui/Frame";
import { timeline } from "@/lib/data";

export default function Work() {
  return (
    <PanelShell>
      <div className="flex flex-col">
        {timeline.map((t, i) => {
          const last = i === timeline.length - 1;

          return (
            <Item key={`${t.org}-${t.period}`} delay={0.08 + i * 0.08}>
              <article className="flex items-stretch gap-5 lg:gap-7">
                <div
                  className={`min-w-0 flex-1 lg:text-right ${
                    last ? "pb-0" : "pb-10"
                  }`}
                >
                  <h3 className="font-display text-[clamp(1.15rem,2.1vw,1.7rem)] leading-tight font-normal text-ink">
                    <span className="text-graphite">{t.period}</span>
                    <span className="text-stone"> · </span>
                    {t.role}
                  </h3>
                  <div className="mt-1.5 meta text-[0.8rem] text-stone">
                    {t.org} · {t.place}
                  </div>
                  {t.note && (
                    <p className="mt-3 max-w-[32rem] text-[0.85rem] leading-[1.5] text-graphite lg:ml-auto">
                      {t.note}
                    </p>
                  )}
                </div>

                {/* The rail: a filled mark for the current post, rings behind it. */}
                <div className="flex w-4 shrink-0 flex-col items-center">
                  <span
                    className={`mt-2 block h-2.5 w-2.5 shrink-0 rounded-full border ${
                      t.current
                        ? "border-brass bg-brass"
                        : "rule-border bg-transparent"
                    }`}
                  />
                  {!last && <span className="mt-2 w-px flex-1 rule" />}
                </div>
              </article>
            </Item>
          );
        })}
      </div>
    </PanelShell>
  );
}
