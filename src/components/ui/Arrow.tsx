export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`h-3.5 w-3.5 shrink-0 ${className}`}
    >
      <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
