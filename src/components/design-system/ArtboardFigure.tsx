import type React from "react";
import Image from "next/image";
import { ImageHotspots, type Hotspot } from "./ImageHotspots";

type ArtboardFigureProps = {
  src: string;
  /**
   * The file's true pixel dimensions. The rendered ratio is derived from
   * these rather than hand-typed per usage — the old `aspect` prop made a
   * forgotten number silently crop the image instead of failing loudly.
   */
  width: number;
  height: number;
  alt: string;
  /** Rendered below the image in page type, never overlaid on it. */
  caption?: string;
  /**
   * `wide` runs a landscape artboard out to the full break-out bound.
   * `portrait` holds a tall artboard to a centred column — at full width a
   * 0.89-ratio canvas would render over 2000px tall and force the reader to
   * scroll past a single image.
   */
  layout?: "wide" | "portrait";
  /**
   * `portrait` only. How wide the centred column is allowed to get, as a CSS
   * length. The right bound depends on how much the canvas carries: one
   * screen with annotations reads at 40rem, a six-screen grid does not —
   * its embedded phones land near 150px, which is the unreadable-thumbnail
   * failure this component exists to prevent. Height follows the file ratio,
   * so widening always costs vertical space; pick the smallest width at
   * which the screens are actually legible.
   */
  portraitMax?: string;
  /**
   * Optional callouts layered over this artboard. The figure keeps its own
   * sizing and caption — annotating a screen must not mean publishing it a
   * second time inside a separate "annotated" block.
   */
  hotspots?: Hotspot[];
};

/**
 * A wide pre-composed artboard (~1.74–2.13): one canvas that already holds
 * several screens, their arrangement, and usually a title burned into the
 * export.
 *
 * The composition is finished before it reaches this component, so all it
 * does is give the file room and get out of the way:
 *
 * - Breaks out of the page's reading column to a wide bound. Column width is
 *   the difference between readable evidence and a row of thumbnails — a
 *   4581px artboard in a 681px column renders its embedded screens at ~150px.
 * - No `aspect-ratio` and no `object-fit`, so the file's own ratio decides
 *   the box and cropping is structurally impossible.
 * - No scrim and no overlaid label: the artboard's baked-in title would
 *   collide with both.
 */
export function ArtboardFigure({
  src,
  width,
  height,
  alt,
  caption,
  layout = "wide",
  portraitMax = "40rem",
  hotspots,
}: ArtboardFigureProps) {
  const portrait = layout === "portrait";

  return (
    <figure
      className={`ds-artboard${portrait ? " ds-artboard-portrait" : ""}`}
      style={portrait ? ({ "--artboard-max": portraitMax } as React.CSSProperties) : undefined}
    >
      <div className="ds-artboard-frame">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={
            portrait ? `(max-width: ${portraitMax}) 100vw, ${portraitMax}` : "(max-width: 1800px) 100vw, 1800px"
          }
          className="ds-artboard-img"
        />
        {hotspots?.length ? <ImageHotspots hotspots={hotspots} /> : null}
      </div>
      {caption ? <figcaption className="ds-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}
