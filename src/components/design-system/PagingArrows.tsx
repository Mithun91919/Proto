type PagingArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  /** What's being paged, for the accessible name — e.g. "screen", "slide". */
  label: string;
  /**
   * Which arrow, if either, is the more useful direction from where the
   * reader currently is — filled solid without needing a hover first, e.g.
   * `"next"` on the first item (there's more ahead) or `"prev"` on the last
   * (nothing further that way). Paging still wraps either direction
   * regardless; this is a hint about which way is worth taking, not a
   * disabled state on the other arrow.
   */
  emphasize?: "prev" | "next" | null;
};

/**
 * Prev/next pair for a dot rail. The dots alone jump to a specific item;
 * these step relative to whichever one is current, which is the control a
 * dot row doesn't give you on its own — reading through in order without
 * aiming at a specific dot each time.
 *
 * Shared by every `.ds-artboard-dots` row (`ArtboardCarousel`,
 * `BrowserFlow`, `StackedScreens`) so the pairing is one pattern site-wide
 * rather than three components each inventing their own arrow markup.
 *
 * The chevron is drawn, not typed. `‹`/`›` measure as centred in their own
 * box — checked directly, the offsets balance to the pixel — but the
 * glyphs themselves are guillemets doing arrow duty: thin, small against
 * the circle, and not optically even the way a drawn stroke can be made to
 * be. Two `currentColor` lines at a fixed weight inherit the button's own
 * colour (muted at rest, `--color-on-accent` filled on hover) for free,
 * so the swap needed nothing extra downstream of the color already there.
 */
function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 8 12"
      fill="none"
      aria-hidden
      style={direction === "next" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M6.5 1.5L1.5 6L6.5 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PagingArrows({ onPrev, onNext, label, emphasize }: PagingArrowsProps) {
  return (
    <span className="ds-paging-arrows">
      <button
        type="button"
        className={`ds-paging-arrow${emphasize === "prev" ? " is-emphasized" : ""}`}
        onClick={onPrev}
        aria-label={`Previous ${label}`}
      >
        <Chevron direction="prev" />
      </button>
      <button
        type="button"
        className={`ds-paging-arrow${emphasize === "next" ? " is-emphasized" : ""}`}
        onClick={onNext}
        aria-label={`Next ${label}`}
      >
        <Chevron direction="next" />
      </button>
    </span>
  );
}
