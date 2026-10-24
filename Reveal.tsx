/** Original mark for the fictional "Argenta" brand. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="argenta-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3a3a3f" />
            <stop offset="1" stopColor="#9b9ea6" />
          </linearGradient>
        </defs>
        <path d="M12 2 22 20H2L12 2Z" fill="url(#argenta-g)" />
        <path d="M12 9.5 16.2 17H7.8L12 9.5Z" fill="#fff" opacity="0.9" />
      </svg>
      <span>Argenta</span>
    </span>
  );
}
