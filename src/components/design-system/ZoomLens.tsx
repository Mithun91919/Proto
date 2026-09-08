"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";

type ZoomLensProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** How much the lens magnifies. */
  zoom?: number;
  /** Lens diameter in px. */
  lensSize?: number;
};

/**
 * M12 · Zoom lens — a hover magnifier for a screen where the real content
 * is fine print: a data table, a dashboard, small labels that are true to
 * the product but not legible at page width. Follows the cursor rather
 * than needing a second, separately-cropped screenshot to make the same
 * point.
 *
 * The lens reads the original file directly (not the responsive `next/
 * image` variant already on the page) so magnifying doesn't just enlarge
 * an already-downscaled image into visible softness.
 */
export function ZoomLens({ src, width, height, alt, caption, zoom = 2.2, lensSize = 180 }: ZoomLensProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const stageWidth = stageRef.current?.clientWidth ?? width;

  return (
    <figure>
      <div
        ref={stageRef}
        className="ds-zoom-stage"
        onMouseMove={handleMove}
        onMouseLeave={() => setPos(null)}
      >
        <Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 900px) 100vw, 900px" className="block h-auto w-full" />
        {pos ? (
          <div
            className="ds-zoom-lens"
            aria-hidden
            style={{
              left: pos.x - lensSize / 2,
              top: pos.y - lensSize / 2,
              width: lensSize,
              height: lensSize,
              backgroundImage: `url(${src})`,
              backgroundSize: `${stageWidth * zoom}px auto`,
              backgroundPosition: `${-(pos.x * zoom - lensSize / 2)}px ${-(pos.y * zoom - lensSize / 2)}px`,
            }}
          />
        ) : null}
      </div>
      {caption ? <figcaption className="ds-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}
