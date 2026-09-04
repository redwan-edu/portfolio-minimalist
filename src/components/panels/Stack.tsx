"use client";

import PanelShell from "../ui/PanelShell";
import { Item } from "../ui/Frame";
import Glyph from "../ui/Glyph";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <PanelShell>
      <div className="flex flex-col gap-8">
        {stack.map((s, i) => (
          <Item key={s.group} delay={0.08 + i * 0.07}>
            <div className="flex items-start gap-5 lg:gap-8">
              <div className="min-w-0 flex-1 border-r rule-border pr-5 lg:pr-8 lg:text-right">
                <div className="meta text-brass">{s.group}</div>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 lg:justify-end">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="font-display text-[clamp(1.05rem,1.7vw,1.35rem)] leading-snug font-normal text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Glyph
                name={s.glyph}
                className="mt-1 h-8 w-8 shrink-0 text-graphite"
              />
            </div>
          </Item>
        ))}
      </div>
    </PanelShell>
  );
}
