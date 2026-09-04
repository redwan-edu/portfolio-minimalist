"use client";

import { useEffect, useState } from "react";
import { person } from "@/lib/data";

/**
 * Local time in Sylhet. Rendered as a placeholder on the server so the markup
 * matches, then filled in after hydration.
 */
export default function Clock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: person.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className}>
      {now ?? "--:--"} <span className="text-stone">{person.utcLabel}</span>
    </span>
  );
}
