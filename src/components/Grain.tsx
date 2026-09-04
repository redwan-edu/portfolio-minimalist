/**
 * Paper. A fractal-noise tile at very low opacity plus a soft vignette — enough
 * tooth that the ivory reads as stock rather than as #f3f0e9.
 */
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Grain() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: `url("${NOISE}")` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[79]"
        style={{
          background:
            "radial-gradient(115% 90% at 50% 42%, transparent 52%, rgba(23,20,15,0.07) 100%)",
        }}
      />
    </>
  );
}
