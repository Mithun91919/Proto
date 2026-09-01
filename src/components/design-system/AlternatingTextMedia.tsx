import type { CSSProperties, ReactNode } from "react";
import { MediaFrameChrome } from "./MediaFrameChrome";
import { DotGrid } from "./primitives/DotGrid";
import { digitDots } from "./dotPatterns";

type MediaRow = {
  eyebrow?: string;
  title: string;
  body: string;
  /** Renders a browser-chrome placeholder. Ignored when `media` is supplied. */
  route?: string;
  /**
   * Real media for this row — a `ClipFigure`, `ArtboardFigure`, or anything
   * else. Falls back to the chrome placeholder so the reference page can
   * still demo the composition without a real asset.
   */
  media?: ReactNode;
};

type AlternatingTextMediaProps = {
  /**
   * Odd rows (index 0, 2, …) read text-first; every consecutive row flips.
   * The order is enforced here, not left to the caller, per the guide's
   * own rule: a run of chapters should never fall into a column.
   */
  rows: MediaRow[];
  /**
   * Draws each row's position as a dot numeral (S6). Use when the rows are a
   * sequence a reader should be able to count, not just a set.
   */
  numbered?: boolean;
  /**
   * `preview` sizes columns for a landscape browser mockup. `portrait` gives
   * the text the flexible column and lets a tall phone clip take only the
   * width it needs, so it isn't stretched to half the page.
   */
  mediaShape?: "preview" | "portrait";
  /** Vertically centres each row; `start` aligns to the top for tall media. */
  align?: "center" | "start";
};

/** S12 · Alternating text / preview — row 1 is text-left, every row after it flips. */
export function AlternatingTextMedia({
  rows,
  numbered = false,
  mediaShape = "preview",
  align = "center",
}: AlternatingTextMediaProps) {
  const portrait = mediaShape === "portrait";

  return (
    <div className={`flex flex-col ${portrait ? "gap-20 md:gap-24" : ""}`}>
      {rows.map((row, index) => {
        const mediaFirst = index % 2 === 1;

        const text = (
          <div className={portrait ? "md:pt-4" : undefined}>
            {numbered ? (
              <div className="mb-6 flex gap-3" aria-hidden>
                {String(index + 1)
                  .padStart(2, "0")
                  .split("")
                  .map((digit, i) => (
                    <DotGrid key={i} cols={4} size={7} gap={5} dots={digitDots(digit)} />
                  ))}
              </div>
            ) : null}
            {row.eyebrow ? (
              <p
                className="font-mono text-[0.66rem] uppercase tracking-[0.12em]"
                style={{ color: "var(--ds-accent)" }}
              >
                {row.eyebrow}
              </p>
            ) : null}
            <h3
              className={`display-title max-w-[20ch] ${row.eyebrow ? "mt-3.5" : ""}`}
              style={{ fontSize: "1.75rem", lineHeight: 1.18 }}
            >
              {row.title}
            </h3>
            <p className="mt-4 max-w-[48ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
              {row.body}
            </p>
          </div>
        );

        const media = row.media ?? <MediaFrameChrome route={row.route ?? "/"} />;

        // A tall portrait clip takes only the width it needs, so the text keeps
        // the flexible column instead of both being forced to half the row.
        const columns = portrait
          ? mediaFirst
            ? "auto 1fr"
            : "1fr auto"
          : mediaFirst
            ? "1.15fr 1fr"
            : "1fr 1.15fr";

        return (
          <div
            key={row.title}
            /* Column template goes through a variable, not an inline
               `grid-template-columns` — inline styles beat Tailwind at every
               breakpoint, so setting it directly would force two cramped
               columns on mobile instead of stacking. */
            className={`ds-alt-row gap-10 md:gap-16 ${
              align === "start" ? "items-start" : "items-center"
            } ${portrait ? "" : "py-9"}`}
            style={{ "--alt-cols": columns } as CSSProperties}
          >
            {mediaFirst ? (
              <>
                {media}
                {text}
              </>
            ) : (
              <>
                {text}
                {media}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
