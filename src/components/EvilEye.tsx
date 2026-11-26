/**
 * An evil eye, the nazar charm: a dark ring, a white ring, a blue ring and a
 * dark pupil, drawn in the site's own blues. It hangs from the header's brand
 * pill like a charm. Decorative, so it is hidden from assistive tech;
 * the name beside it is the label.
 */
export function EvilEye({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`block h-full w-full ${className}`.trim()} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" fill="var(--accent-deep)" />
      <circle cx="12" cy="12" r="9.4" fill="#ffffff" />
      <circle cx="12" cy="12" r="7.2" fill="var(--accent)" />
      <circle cx="12" cy="12" r="3.6" fill="var(--ink)" />
      <circle cx="10.6" cy="10.6" r="1.1" fill="#ffffff" />
    </svg>
  );
}
