"use client";

import type { CSSProperties } from "react";
import { useId, useState } from "react";

export type Hotspot = {
  /** Position over the image, in % of its width / height. */
  x: number;
  y: number;
  title: string;
  detail: string;
};

/**
 * A hotspot layer for an existing figure.
 *
 * Deliberately an overlay rather than a figure of its own: annotating a
 * screen should not mean publishing that screen a second time in a special
 * "annotated" block. Any image already on the page gains callouts by
 * receiving hotspots; nothing about its sizing, ratio, or caption changes.
 *
 * The note opens against the dot it belongs to, so the thing being explained
 * and the explanation are in one glance rather than a number to carry across
 * the page to a list.
 *
 * Placement is derived from each hotspot's own coordinates instead of
 * measured at runtime — a dot past the middle opens leftward, one low in the
 * frame opens upward. No observer, no layout thrash, and a panel cannot
 * leave the frame.
 *
 * The dots pulse until the reader engages, because a callout nobody notices
 * explains nothing. The pulse is a discoverability cue for a real control,
 * not decoration: it stops on hover and stops for good once any hotspot has
 * been opened, and reduced motion never starts it.
 *
 * Access without a pointer: dots are real buttons, so focus opens a panel
 * exactly as hover does; tapping pins one open, which is the only thing that
 * works on touch; and each button's accessible name carries its title with
 * the open panel wired through `aria-describedby`.
 */
export function ImageHotspots({ hotspots }: { hotspots: Hotspot[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const baseId = useId();
  const open = pinned ?? hovered;

  return (
    <div className={`ds-hotspots${open !== null ? " has-open" : ""}`}>
      {hotspots.map((h, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-note-${i}`;
        return (
          <span
            key={h.title}
            className={`ds-hotspot${isOpen ? " is-open" : ""}`}
            style={{ top: `${h.y}%`, left: `${h.x}%`, "--i": i } as CSSProperties}
            data-side={h.x > 55 ? "left" : "right"}
            data-vert={h.y > 62 ? "up" : "down"}
          >
            <button
              type="button"
              className="ds-callout-dot ds-hotspot-dot"
              aria-expanded={isOpen}
              aria-describedby={isOpen ? panelId : undefined}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              onClick={() => setPinned((p) => (p === i ? null : i))}
            >
              <span aria-hidden>{i + 1}</span>
              <span className="sr-only">{h.title}</span>
            </button>

            <span id={panelId} role="note" className="ds-hotspot-pop">
              <span className="ds-hotspot-title">{h.title}</span>
              <span className="ds-hotspot-detail">{h.detail}</span>
            </span>
          </span>
        );
      })}
    </div>
  );
}
