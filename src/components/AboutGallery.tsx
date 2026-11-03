"use client";

import { useRef, useState } from "react";

type Item = {
  kind: "image" | "video";
  src: string;
  /** Poster frame for a video. */
  poster?: string;
  alt: string;
  caption: string;
};

/**
 * A short row of travel photographs and one clip, all cropped to the same
 * portrait frame. The clip never autoplays: it starts on a click, plays muted
 * and stops on a second click, so the page stays still until asked.
 */
export function AboutGallery({ items }: { items: Item[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-5">
      {items.map((item) => (
        <li key={item.src}>
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--paper)]">
              {item.kind === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ClipPlayer
                  src={item.src}
                  poster={item.poster}
                  label={item.alt}
                />
              )}
            </div>
            <figcaption className="mt-3 text-[0.9rem] leading-6 text-[var(--ink-soft)]">
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

function ClipPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause video: ${label}` : `Play video: ${label}`}
        className="absolute inset-0 flex items-end justify-start p-3 focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
      >
        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--accent-deep)] shadow-sm transition-opacity"
          style={{ opacity: playing ? 0.0 : 1 }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
            <path d="M1 1l10 6-10 6z" />
          </svg>
        </span>
      </button>
    </>
  );
}
