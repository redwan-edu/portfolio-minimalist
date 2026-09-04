import type { GlyphName } from "@/lib/data";

const PATHS: Record<GlyphName, React.ReactNode> = {
  code: (
    <>
      <path d="M17 12L23 20L17 28" />
      <path d="M13 11L9 29" />
    </>
  ),
  window: (
    <>
      <rect x="8" y="10" width="24" height="20" />
      <path d="M8 16h24" />
      <circle cx="12" cy="13" r="0.9" />
      <circle cx="15.5" cy="13" r="0.9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="20" cy="13" rx="11" ry="4" />
      <path d="M9 13v14c0 2.2 4.9 4 11 4s11-1.8 11-4V13" />
      <path d="M9 20c0 2.2 4.9 4 11 4s11-1.8 11-4" />
    </>
  ),
  compass: (
    <>
      <circle cx="20" cy="20" r="11" />
      <path d="M24.5 15.5L18 18l-2.5 6.5L22 22z" />
    </>
  ),
};

/** Thin line-art marks for the stack rail. One weight, no fills. */
export default function Glyph({
  name,
  className = "",
}: {
  name: GlyphName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
