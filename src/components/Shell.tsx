"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Intro from "./Intro";
import Masthead from "./Masthead";
import Rail from "./Rail";
import Hero from "./Hero";
import About from "./panels/About";
import Projects from "./panels/Projects";
import Research from "./panels/Research";
import Stack from "./panels/Stack";
import Work from "./panels/Work";
import Contact from "./panels/Contact";
import Cv from "./panels/Cv";
import { person, views, type View } from "@/lib/data";

const PANELS: Record<View, () => React.ReactElement> = {
  about: About,
  projects: Projects,
  research: Research,
  stack: Stack,
  work: Work,
  contact: Contact,
  cv: Cv,
};

type Section = "hero" | View;
const SECTIONS: Section[] = ["hero", ...views.map((v) => v.id)];

/** One gesture moves one view; the lock covers the swap so a trackpad's
    stream of wheel events can't skip three views at once. */
const SWAP_LOCK = 780;
const WHEEL_FLOOR = 6;
const SWIPE_FLOOR = 48;
/** Overflow smaller than this doesn't count as "more to read" — otherwise a
    view that runs over by a line costs the reader a gesture that goes
    nowhere before the deck will move on. */
const EDGE_SLACK = 28;

function indexFromHash(): number {
  const id = window.location.hash.slice(1);
  const i = SECTIONS.indexOf(id as Section);
  return i > 0 ? i : 0;
}

/**
 * The site is a deck, not a page. One view is mounted at a time; scrolling,
 * swiping, arrowing or picking off the rail swaps it, and the incoming view
 * lands from below. A view taller than the screen scrolls inside its own
 * panel first, and only advances once that panel is at its edge.
 */
export default function Shell() {
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const lockedRef = useRef(false);
  const mainRef = useRef<HTMLElement>(null);

  const active = SECTIONS[index];

  const go = useCallback((next: number, fromHash = false) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, next));
    if (clamped === indexRef.current) return;

    indexRef.current = clamped;
    setIndex(clamped);
    lockedRef.current = true;
    window.setTimeout(() => {
      lockedRef.current = false;
    }, SWAP_LOCK);

    if (!fromHash) {
      const id = SECTIONS[clamped];
      window.history.pushState(
        null,
        "",
        id === "hero" ? window.location.pathname : `#${id}`,
      );
    }
  }, []);

  /** How far the mounted panel can still scroll in a direction, if at all. */
  const panelRoom = useCallback((down: boolean) => {
    const panel = mainRef.current?.querySelector<HTMLElement>(".panel-scroll");
    if (!panel) return false;
    if (panel.scrollHeight - panel.clientHeight <= EDGE_SLACK) return false;
    return down
      ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - EDGE_SLACK
      : panel.scrollTop > EDGE_SLACK;
  }, []);

  // A deep link lands on its view, and browser back/forward walks the deck.
  useEffect(() => {
    const read = () => {
      const i = indexFromHash();
      indexRef.current = i;
      setIndex(i);
    };
    read();
    window.addEventListener("popstate", read);
    window.addEventListener("hashchange", read);
    return () => {
      window.removeEventListener("popstate", read);
      window.removeEventListener("hashchange", read);
    };
  }, []);

  useEffect(() => {
    if (active === "hero") {
      document.title = `${person.name} — ${person.role}`;
      return;
    }
    const label = views.find((v) => v.id === active)?.label;
    if (label) document.title = `${label} — ${person.name}`;
  }, [active]);

  useEffect(() => {
    if (!ready) return;

    const onWheel = (e: WheelEvent) => {
      const dy = e.deltaY;
      if (Math.abs(dy) < WHEEL_FLOOR) return;
      // Let a long panel finish its own scroll before the deck moves on.
      if (panelRoom(dy > 0)) return;
      e.preventDefault();
      if (lockedRef.current) return;
      go(indexRef.current + (dy > 0 ? 1 : -1));
    };

    let startY = 0;
    let startRoom = { down: false, up: false };

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startRoom = { down: panelRoom(true), up: panelRoom(false) };
    };

    const onTouchMove = (e: TouchEvent) => {
      const dy = startY - e.touches[0].clientY;
      const down = dy > 0;
      if (down ? startRoom.down : startRoom.up) return;
      if (e.cancelable) e.preventDefault();
      if (lockedRef.current || Math.abs(dy) < SWIPE_FLOOR) return;
      startY = e.touches[0].clientY;
      go(indexRef.current + (down ? 1 : -1));
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t?.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(t?.tagName ?? "")
      )
        return;

      const step =
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "PageDown" ||
        e.key === " "
          ? 1
          : e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp"
            ? -1
            : 0;

      if (step) {
        if (panelRoom(step > 0)) return;
        e.preventDefault();
        if (lockedRef.current) return;
        go(indexRef.current + step);
        return;
      }

      if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(SECTIONS.length - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [ready, go, panelRoom]);

  const onIntroDone = useCallback(() => setReady(true), []);
  const onRail = useCallback((id: View) => go(SECTIONS.indexOf(id)), [go]);

  const onCover = active === "hero";
  const Panel = onCover ? null : PANELS[active as View];

  return (
    <>
      <Intro onDone={onIntroDone} />

      <div className="relative flex h-[100svh] flex-col overflow-hidden px-[clamp(1.5rem,4.5vw,4.5rem)]">
        <Masthead show={ready} contact={ready && !onCover} />

        <div className="flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-[minmax(10rem,16vw)_1fr] lg:gap-10">
          {/* The rail keeps its column on the cover too, so the type below
              never shifts sideways when it fades in. */}
          <div className="shrink-0 lg:self-center">
            <Rail
              view={onCover ? views[0].id : (active as View)}
              onSelect={onRail}
              show={ready && !onCover}
            />
          </div>

          <main
            ref={mainRef}
            className="flex min-h-0 flex-1 items-end justify-end pb-8 lg:pb-14"
          >
            <AnimatePresence mode="wait">
              {ready &&
                (onCover ? (
                  <Hero key="hero" />
                ) : (
                  Panel && <Panel key={active} />
                ))}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
