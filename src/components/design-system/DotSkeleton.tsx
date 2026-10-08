"use client";

import { useEffect, useRef } from "react";

/**
 * A field of dots that holds an image's place while it loads, then removes
 * itself. It is its own element, not a background on the frame, so it can
 * never show through a transparent image once that image has arrived. Place it
 * inside the image's wrapper, before the image.
 */
export function DotSkeleton() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    const img = node?.parentElement?.querySelector("img");
    if (!node || !img) return;
    const done = () => {
      node.hidden = true;
    };
    if (img.complete && img.naturalWidth > 0) {
      done();
      return;
    }
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
    return () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
    };
  }, []);

  return <span ref={ref} className="ds-skeleton" aria-hidden="true" />;
}
