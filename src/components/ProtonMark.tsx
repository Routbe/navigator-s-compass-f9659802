/** Proton brand mark (purple gradient "P"). */
export function ProtonMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="proton-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A995FF" />
          <stop offset="1" stopColor="#6D4AFF" />
        </linearGradient>
      </defs>
      <path fill="url(#proton-g)" d="M4 21V9.5C4 5.9 6.9 3 10.5 3H14a6 6 0 0 1 0 12h-3.5v6H4Zm6.5-11.5V12H14a1.25 1.25 0 0 0 0-2.5h-3.5Z" />
    </svg>
  );
}
