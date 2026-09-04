"use client";

import PanelShell from "../ui/PanelShell";
import { Item, Rule } from "../ui/Frame";
import { person, timeline } from "@/lib/data";

function Ledger({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div>
      <div className="meta text-stone">{label}</div>
      <div className="mt-4 font-display text-[1.2rem] leading-snug font-normal text-ink">
        {value}
      </div>
      {sub && (
        <div className="mt-0.5 text-[0.7rem] uppercase text-graphite">
          {sub}
        </div>
      )}
    </div>
  );
}

export default function About() {
  const post = timeline[0];

  return (
    <PanelShell>
      <Item delay={0}>
        <p className="max-w-xl font-display text-[clamp(1.5rem,3.2vw,2rem)] lg:ml-auto mb-10">
          Hi, I’m <span className="text-[#a33327]">{person.first}</span>
        </p>
      </Item>

      <Item delay={0}>
        <p className="max-w-5xl font-display text-[clamp(1.8rem,3.2vw,2rem)] leading-[1.35] text-graphite italic lg:ml-auto">
          {person.statement}
        </p>
      </Item>

      <Item className="mt-10" delay={0.12}>
        <Rule delay={0.12} />
      </Item>

      <Item delay={0.2}>
        <div className="mt-7 grid gap-8 sm:grid-cols-2">
          <Ledger
            label="Currently"
            value={post.role}
            sub={`${post.org} · ${post.place}`}
          />
          <Ledger
            label="Based in"
            value={person.location}
            sub={person.status}
          />
        </div>
      </Item>
    </PanelShell>
  );
}
