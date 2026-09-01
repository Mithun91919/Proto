import Image from "next/image";
import type { ReactNode } from "react";

type SceneBannerProps = {
  /**
   * Omit when the banner image does not exist yet. The band then renders on
   * the dark ground with the page dot field and flags itself as pending, so
   * the page keeps its opening shape instead of starting mid-sentence.
   */
  src?: string;
  alt?: string;
  /** Overlaid copy. Omit entirely when the image should simply set a scene. */
  eyebrow?: string;
  headline?: string;
  /**
   * Scannable facts under the headline (S11). Deliberately not a home for
   * prose — body copy over a photograph loses contrast and forces an
   * oversized banner; it belongs on the page's own calm ground.
   */
  /** One supporting line under the headline — a gear-shift, not a paragraph. */
  standfirst?: string;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  /**
   * Page-opening treatment: edge to edge with square corners, so the image is
   * the top-level item on the page rather than a card inset from it. Anything
   * passed as `children` (a back link, for instance) sits over the image.
   */
  fullBleed?: boolean;
};

/**
 * An atmospheric photo composite (~1.74) — the marketing-style shots where
 * cards and devices are already arranged over a photograph and bleed off the
 * edges by design.
 *
 * This is the one media role where cropping is correct: nothing in the frame
 * is evidence, so the image can fill a fixed band. Use `ArtboardFigure`
 * instead for anything a reader is meant to actually read.
 *
 * The scrim is deliberately lighter than a hero backdrop's. Ramping to opaque
 * black turns a light composite into a black rectangle with a ghost of an
 * interface in it; this stops well short of that while still holding text.
 */
export function SceneBanner({
  src,
  alt = "",
  eyebrow,
  headline,
  standfirst,
  meta,
  children,
  fullBleed,
}: SceneBannerProps) {
  const hasOverlay = Boolean(eyebrow || headline || standfirst || meta?.length || children);

  return (
    <div
      className={`ds-scene-banner${fullBleed ? " ds-scene-banner-full" : ""}${
        src ? "" : " ds-scene-banner-empty"
      }`}
    >
      {/* A full-bleed banner opens the page, so it's the LCP element — load it
          eagerly rather than lazily. */}
      {src ? (
        <Image src={src} alt={alt} fill sizes="100vw" priority={fullBleed} className="ds-scene-banner-media" />
      ) : (
        <p className="ds-scene-banner-pending">Hero image pending</p>
      )}
      {hasOverlay ? (
        <>
          <div className="ds-scene-banner-scrim" aria-hidden />
          {/* Children ride at the top (a back link, typically) so the title
              keeps the bottom of the frame to itself. */}
          {children ? (
            <div className="ds-scene-banner-top">
              <div className="ds-scene-banner-inner">{children}</div>
            </div>
          ) : null}
          {eyebrow || headline || standfirst || meta?.length ? (
            <div className="ds-scene-banner-copy">
              <div className="ds-scene-banner-inner">
              {eyebrow ? <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>{eyebrow}</p> : null}
              {headline ? (
                <h3
                  className="display-title mt-3 max-w-[22ch]"
                  style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", lineHeight: 1.08, color: "var(--ds-dark-ink)" }}
                >
                  {headline}
                </h3>
              ) : null}
              {standfirst ? (
                <p className="ds-scene-banner-standfirst">{standfirst}</p>
              ) : null}
              {meta?.length ? (
                <dl className="ds-scene-banner-meta">
                  {meta.map((item) => (
                    <div key={item.label}>
                      <dt className="ds-eyebrow" style={{ color: "#8fb3bc" }}>
                        {item.label}
                      </dt>
                      <dd style={{ margin: 0, color: "var(--ds-dark-ink)" }}>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
