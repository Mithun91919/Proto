type PagingArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  /** What's being paged, for the accessible name — e.g. "screen", "slide". */
  label: string;
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
 */
export function PagingArrows({ onPrev, onNext, label }: PagingArrowsProps) {
  return (
    <span className="ds-paging-arrows">
      <button type="button" className="ds-paging-arrow" onClick={onPrev} aria-label={`Previous ${label}`}>
        <span aria-hidden>‹</span>
      </button>
      <button type="button" className="ds-paging-arrow" onClick={onNext} aria-label={`Next ${label}`}>
        <span aria-hidden>›</span>
      </button>
    </span>
  );
}
