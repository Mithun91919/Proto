"use client";

import { useState } from "react";
import Image from "next/image";

type SliderImage = {
  src: string;
  /** True pixel dimensions — same discipline as `ArtboardFigure`. Both
      images should share the same ratio; this is a comparison of the
      same screen, not two different-shaped ones. */
  width: number;
  height: number;
  alt: string;
};

type BeforeAfterSliderProps = {
  before: SliderImage;
  after: SliderImage;
  label: string;
};

/**
 * M7 · Before/after slider — two real screenshots of the same screen, one
 * revealed over the other by a draggable divider, instead of two images
 * side by side asking the reader to compare them mentally.
 *
 * A native `<input type="range">` drives it, layered invisibly over the
 * frame — real keyboard support (arrow keys) and a real accessible name
 * come for free, rather than reimplementing drag-to-scrub by hand.
 */
export function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="ds-baslider"
      style={{ aspectRatio: `${before.width} / ${before.height}` }}
      role="group"
      aria-label={label}
    >
      <Image
        src={before.src}
        alt={before.alt}
        fill
        sizes="(max-width: 900px) 100vw, 900px"
        className="ds-baslider-img"
      />
      <div className="ds-baslider-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="ds-baslider-img"
        />
      </div>

      <div className="ds-baslider-line" style={{ left: `${pos}%` }} aria-hidden>
        <span className="ds-baslider-handle" aria-hidden>
          <span>‹</span>
          <span>›</span>
        </span>
      </div>

      <span className="ds-baslider-tag" style={{ left: "0.9rem", opacity: pos > 14 ? 1 : 0 }}>
        Before
      </span>
      <span className="ds-baslider-tag" style={{ right: "0.9rem", opacity: pos < 86 ? 1 : 0 }}>
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="ds-baslider-input"
        aria-label={`${label} — before/after position`}
      />
    </div>
  );
}
