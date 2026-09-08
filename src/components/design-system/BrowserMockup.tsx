import type { CSSProperties } from "react";
import Image from "next/image";
import { ImageHotspots, type Hotspot } from "./ImageHotspots";

type BrowserMockupProps = {
  /** Shown in the address pill. A plausible route, not a claim about a real domain. */
  route: string;
  src: string;
  /**
   * The file's true pixel dimensions — same discipline as `ArtboardFigure`:
   * the ratio is derived from these rather than hand-typed, so a forgotten
   * number can't silently crop the page.
   */
  width: number;
  height: number;
  alt: string;
  /** Rendered below the frame in page type, never overlaid on the screenshot. */
  caption?: string;
  /**
   * For a full-page capture taller than one viewport. Holds the frame to
   * `maxHeight` and lets the reader scroll the real page inside it — an
   * interactive stand-in for the screen-recording a scroll-through would
   * otherwise need.
   */
  scrollable?: boolean;
  maxHeight?: string;
  /** Optional callouts layered over the screenshot — same overlay `ImageHotspots` uses elsewhere. */
  hotspots?: Hotspot[];
};

/**
 * S3 · Browser mockup — the real, asset-backed sibling of `MediaFrameChrome`.
 * Same chrome (traffic-light dots, route pill) so the two read as one
 * pattern, but this one takes a genuine screenshot from the image folder
 * instead of falling back to placeholder blocks.
 *
 * `scrollable` is the point of building this rather than reusing
 * `ArtboardFigure`: a full-page capture (a marketing site, a long settings
 * screen) is real evidence but too tall to show whole without shrinking it
 * past legibility. Letting the reader scroll it in place, at their own
 * pace, replaces recording a video of the same scroll — no video asset to
 * produce, host, or keep in sync with the page it's showing.
 */
export function BrowserMockup({
  route,
  src,
  width,
  height,
  alt,
  caption,
  scrollable = false,
  maxHeight = "32rem",
  hotspots,
}: BrowserMockupProps) {
  return (
    <figure>
      <div className="ds-frame">
        <div className="ds-framebar">
          <span className="flex gap-1.5" aria-hidden>
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
          </span>
          <span
            className="flex-1 truncate rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
            style={{ borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)", color: "var(--muted)" }}
          >
            {route}
          </span>
        </div>

        <div className="ds-framebody relative">
          <div
            className={scrollable ? "ds-frame-scroll" : undefined}
            style={scrollable ? ({ "--frame-max-height": maxHeight } as CSSProperties) : undefined}
          >
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              sizes="(max-width: 900px) 100vw, 900px"
              className="block h-auto w-full"
            />
            {hotspots?.length ? <ImageHotspots hotspots={hotspots} /> : null}
          </div>

          {scrollable ? (
            <span className="ds-frame-scroll-hint" aria-hidden>
              Scroll to explore ↓
            </span>
          ) : null}
        </div>
      </div>
      {caption ? <figcaption className="ds-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}
