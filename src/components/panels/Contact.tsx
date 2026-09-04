"use client";

import PanelShell from "../ui/PanelShell";
import { Item, Rule } from "../ui/Frame";
import Arrow from "../ui/Arrow";
import { links, person } from "@/lib/data";

/**
 * The invitation reads bottom-up: the ways to reach out stack above, and the
 * standing offer carries the foot of the page.
 */
export default function Contact() {
  const social = links.filter((l) => !l.href.startsWith("mailto:"));

  return (
    <PanelShell>
      <Item delay={0}>
        <div className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
          {social.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-2"
            >
              <span className="meta text-stone transition-colors duration-500 group-hover:text-ink">
                {l.label}
              </span>
              <Arrow className="h-2.5 w-2.5 text-stone transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:text-brass" />
            </a>
          ))}
        </div>
      </Item>

      <Item className="mt-4">
        <Rule delay={0.08} />
      </Item>

      <Item delay={0.14}>
        <div className="mt-2 meta text-stone">Social links</div>
      </Item>

      <Item delay={0.24}>
        <div className="mt-10 meta text-stone">Direct message (WHATSAPP)</div>
        <a
          href={person.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block font-display text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight font-light text-ink transition-colors duration-500 hover:text-brass"
        >
          {person.phone}
        </a>
      </Item>

      <Item delay={0.32}>
        <p className="mt-8 font-display text-[clamp(1.05rem,1.9vw,1.4rem)] text-graphite italic">
          <a
            href={`mailto:${person.email}`}
            className="underline decoration-from-font underline-offset-6 transition-colors duration-500 hover:text-brass"
          >
            {person.email}
          </a>
        </p>
      </Item>

      <Item delay={0.4}>
        <h2 className="mt-4 font-display text-[clamp(2.4rem,7.4vw,5.5rem)] leading-[1.02] font-light tracking-[-0.01em] text-ink uppercase">
          {person.status}
          <span className="text-brass">.</span>
        </h2>
      </Item>
    </PanelShell>
  );
}
