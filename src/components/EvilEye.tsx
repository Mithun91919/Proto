/**
 * An evil eye, the nazar charm: a dark ring, a white ring, a blue ring and a
 * dark pupil, drawn in the site's own blues. It stands in for the plain dot in
 * the header's brand mark. Decorative, so it is hidden from assistive tech;
 * the name beside it is the label.
 */
export function EvilEye({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`block h-full w-full ${className}`.trim()} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" fill="var(--accent-deep)" />
      <circle cx="12" cy="12" r="9.1" fill="#ffffff" />
      <circle cx="12" cy="12" r="6.4" fill="var(--accent)" />
      <circle cx="12" cy="12" r="3.1" fill="var(--ink)" />
      <circle cx="10.9" cy="10.9" r="0.9" fill="#ffffff" fillOpacity="0.85" />
    </svg>
  );
}
