"use client";

import { useId, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArtboardFigure } from "./ArtboardFigure";
import { BrowserMockup } from "./BrowserMockup";
import { CompactNumeral } from "./CompactNumeral";
import type { Hotspot } from "./ImageHotspots";
import { PagingArrows } from "./PagingArrows";

export type ArtboardSlide = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * A short name for the slide — "API Docs", "Version history" — shown next
   * to the paging controls, above the artboard. Optional: a set with nothing
   * shorter to say than the caption itself can leave it out and the caption
   * carries the header alone.
   */
  title?: string;
  /** Doubles as the accessible name of this slide's dot. */
  caption: string;
  /** Callouts layered over this slide's artboard. */
  hotspots?: Hotspot[];
  /**
   * Shown in the address pill when the carousel is `scrollable`. A real
   * area of the product, not an invented domain — on a platform whose
   * argument is that it is one place, the route is what shows that the
   * screens are areas of a single product rather than separate tools.
   */
  route?: string;
};

type ArtboardCarouselProps = {
  slides: ArtboardSlide[];
  /** Names the set for screen readers, e.g. "Operations app workflows". */
  label: string;
  /**
   * Render each slide as a browser frame scrolled in place rather than a
   * flat artboard. For sets of full-page captures: laid out whole these ran
   * 1214px tall in a 927px viewport, so no slide could be seen at once and
   * the paging dots sat below the fold, which is the one control the reader
   * needs to get to the next one.
   */
  scrollable?: boolean;
  maxHeight?: string;
  /**
   * `stacked` (default): header — per-slide title, description, and the
   * dots/count/arrows that act on them — runs above the artboard, which is
   * then free to run its full width below.
   *
   * `split`: a fixed title and description for the whole set sit above
   * everything, unchanging as the reader pages through; below that, the
   * artboard sits beside a narrower column carrying the per-slide title,
   * description, and the arrows, which sit at the foot of that column
   * rather than beside the title — reusing `.ds-cs-split`, the same
   * copy-beside-media pattern a case-study chapter already uses, so a
   * carousel dropped into one continues its rhythm instead of introducing
   * a second one. EXPERIMENTAL — being trialled here on `/components`
   * before it replaces `stacked` anywhere a reader would actually see it.
   */
  layout?: "stacked" | "split";
  /**
   * `split` only: the eyebrow above the static title — `CaseStudyChapter`'s
   * own label, e.g. "Finding a service". Replacing a chapter's own heading
   * block with this carousel shouldn't cost it the eyebrow every other
   * chapter on the page still gets.
   */
  eyebrow?: string;
  /** `split` only: the set's own title, static across every slide. */
  title?: string;
  /**
   * `split` only: the set's own description, static across every slide.
   * A single string runs as one `body-text` paragraph; an array of two or
   * more runs in the same two-column flow "The lifecycle" section already
   * uses for its own three paragraphs — the description here tends to run
   * that long too, and a single narrow column under the heading was making
   * a reader scroll past it to reach the artboard for text that had the
   * same page-width available to it that the lifecycle section's does.
   */
  description?: string | string[];
  /** `split` only: which side the artboard sits on. Defaults to `right`. */
  imageSide?: "left" | "right";
};

/**
 * Several artboards in one slot, paged by dots.
 *
 * Deliberately *not* a scrolling filmstrip. The previous carousel sized every
 * item to a fixed height and scrolled horizontally, which made a wide artboard
 * overflow the viewport and — once centred — pushed the first item into
 * negative scrollLeft where no browser could reach it. Here exactly one slide
 * occupies the slot and the dots swap it, so there is no scroll origin to get
 * wrong and each artboard still renders whole at full width.
 *
 * Inactive slides are unmounted, so their images are never fetched until the
 * reader asks for them.
 *
 * The header runs above the artboard, not below it: title and description on
 * the left, the dots/count/arrows this slide's own text changes with on the
 * right, same row. Caption-then-controls stacked underneath a tall artboard
 * put a reader's eye a full scroll away from the arrow that acts on what they
 * just read — reading, then hunting below the image for how to move on. Up
 * here the label for what you're looking at and the control that changes it
 * sit together, and the image is free to run its full, legible width below
 * with nothing splitting it into a side-by-side column.
 */
export function ArtboardCarousel({
  slides,
  label,
  scrollable = false,
  maxHeight,
  layout = "stacked",
  eyebrow,
  title,
  description,
  imageSide = "right",
}: ArtboardCarouselProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  if (slides.length === 0) return null;
  const current = slides[active];

  const step = (delta: number) => {
    setActive((i) => (i + delta + slides.length) % slides.length);
  };

  const dotsKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  const dots = (
    <>
      {slides.map((slide, i) => (
        <button
          key={slide.src}
          type="button"
          role="tab"
          id={`${baseId}-tab-${i}`}
          aria-controls={`${baseId}-panel-${i}`}
          aria-selected={i === active}
          tabIndex={i === active ? 0 : -1}
          className={`ds-artboard-dot${i === active ? " is-active" : ""}`}
          onClick={() => setActive(i)}
        >
          <span className="sr-only">{`${i + 1} of ${slides.length}: ${slide.title ?? slide.caption}`}</span>
        </button>
      ))}
      <span className="ds-artboard-count" aria-hidden>
        {active + 1} / {slides.length}
      </span>
      <PagingArrows
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        label="slide"
        emphasize={active === 0 ? "next" : active === slides.length - 1 ? "prev" : null}
      />
    </>
  );

  const artboard = (
    <div
      key={active}
      role="tabpanel"
      id={`${baseId}-panel-${active}`}
      aria-labelledby={`${baseId}-tab-${active}`}
      className="ds-artboard-fade"
    >
      {scrollable ? (
        <BrowserMockup
          key={current.src}
          route={current.route ?? label}
          src={current.src}
          width={current.width}
          height={current.height}
          alt={current.alt}
          hotspots={current.hotspots}
          scrollable
          maxHeight={maxHeight}
        />
      ) : (
        <ArtboardFigure
          key={current.src}
          src={current.src}
          width={current.width}
          height={current.height}
          alt={current.alt}
          hotspots={current.hotspots}
        />
      )}
    </div>
  );

  if (layout === "split") {
    return (
      <div className="ds-artboard-carousel" role="group" aria-roledescription="carousel" aria-label={label}>
        {eyebrow || title || description ? (
          <div className="ds-artboard-static-head">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h3 className="display-title display-section mt-3">{title}</h3> : null}
            {description ? (
              Array.isArray(description) && description.length > 1 ? (
                <div className="mt-5 md:columns-2 md:gap-16">
                  {description.map((paragraph) => (
                    <p key={paragraph} className="body-text mb-5 break-inside-avoid last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="body-text mt-3">{Array.isArray(description) ? description[0] : description}</p>
              )
            ) : null}
          </div>
        ) : null}
        <div
          className={`ds-cs-split ds-artboard-split${imageSide === "left" ? " is-reversed" : ""}`}
          style={{ "--split-copy": "15rem" } as CSSProperties}
        >
          <div className="ds-artboard-split-text">
            <div key={active} className="ds-artboard-fade">
              <span className="ds-artboard-split-numeral">
                <CompactNumeral value={String(active + 1)} />
              </span>
              {current.title ? <p className="ds-artboard-title">{current.title}</p> : null}
              <p className="ds-artboard-desc">{current.caption}</p>
            </div>
            <div
              className="ds-artboard-dots"
              role="tablist"
              aria-label={label}
              style={{ marginTop: "1.5rem", justifyContent: "flex-start" }}
              onKeyDown={dotsKeyDown}
            >
              {dots}
            </div>
          </div>
          {artboard}
        </div>
      </div>
    );
  }

  return (
    <div className="ds-artboard-carousel" role="group" aria-roledescription="carousel" aria-label={label}>
      <div className="ds-artboard-head">
        <div className="ds-artboard-head-row">
          {current.title ? (
            <p key={active} className="ds-artboard-title ds-artboard-fade">
              {current.title}
            </p>
          ) : (
            <span />
          )}
          <div
            className="ds-artboard-dots"
            role="tablist"
            aria-label={label}
            style={{ marginTop: 0, justifyContent: "flex-end" }}
            onKeyDown={dotsKeyDown}
          >
            {dots}
          </div>
        </div>
        <p key={active} className="ds-artboard-desc ds-artboard-fade">
          {current.caption}
        </p>
      </div>

      {artboard}
    </div>
  );
}
