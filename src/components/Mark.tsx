type MarkProps = { size?: number };

/** The arc-and-dot mark. Decorative everywhere it appears. */
export function Mark({ size = 28 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="mark">
      <path d="M6 23a10 10 0 0 1 20 0" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
      <circle cx={16} cy={8} r={3} className="mark-dot" />
    </svg>
  );
}
