import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SceneBanner } from "./SceneBanner";
import { NextProjectNav } from "./NextProjectNav";
import { ChapterProgress, type ChapterRef } from "./ChapterProgress";

/**
 * The locked case-study template.
 *
 * Deliberately a set of composable pieces rather than a section schema. The
 * earlier attempt drove pages from a typed list of 17 section kinds, which
 * forced every project through the same shapes and fought the real media.
 * Here the shell owns only what is genuinely identical across projects — the
 * hero, the reading column, the closing navigation — and each project
 * composes its own middle from the v6 library.
 *
 * Layout contract:
 * - Full-bleed things (`SceneBanner fullBleed`, `PullStatement`) are direct
 *   children of the shell, so `width: 100%` is already the viewport.
 * - Everything else goes inside a `<CaseStudyColumn>`.
 */

type HeroProps = {
  /** Omit while the banner asset is still missing — the band self-flags. */
  src?: string;
  alt?: string;
  eyebrow: string;
  headline: string;
  meta: { label: string; value: string }[];
};

type NextProps = { href: string; number: string; label: string; title: string };

export function CaseStudyShell({
  hero,
  next,
  chapters = [],
  children,
}: {
  hero: HeroProps;
  next: NextProps;
  /** Ids must match the `id` on each `CaseStudySection`. */
  chapters?: ChapterRef[];
  children: ReactNode;
}) {
  return (
    <article className="ds-scope">
      {chapters.length > 0 ? <ChapterProgress chapters={chapters} /> : null}
      {/* The image is the top-level item on the page — edge to edge, square
          corners, with the back link over it rather than pushing it down. */}
      <SceneBanner fullBleed {...hero}>
        <Link
          href="/work"
          className="ds-scene-banner-back inline-flex text-sm font-medium transition hover:translate-x-[-2px]"
        >
          ← All Work
        </Link>
      </SceneBanner>

      {children}

      <CaseStudyColumn>
        <section className="mt-20 pt-4 md:mt-24 md:pb-24">
          <Reveal>
            <NextProjectNav {...next} />
            <p className="mt-8">
              <Link
                href="/work"
                className="text-sm font-medium text-[var(--muted)] transition hover:translate-x-1 hover:text-[var(--ink)]"
              >
                See all work →
              </Link>
            </p>
          </Reveal>
        </section>
      </CaseStudyColumn>
    </article>
  );
}

/** The page's reading column. Media inside it breaks out on its own. */
export function CaseStudyColumn({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">{children}</div>;
}

/**
 * How a chapter lays out. Three shapes, so consecutive text-led chapters
 * don't stack into one repeated silhouette down the page — the same reason
 * B4 varies divider weight rather than repeating one rule.
 *
 * - `split`   — S4 two-column, title sticky in the left column. The default,
 *                and the right choice when media follows the prose.
 * - `stacked` — heading runs the full width, body flows beneath in two text
 *                columns. For a text-only chapter that would otherwise leave
 *                the left column empty for its whole height.
 * - `flow`    — heading and body in one narrow column. For a short coda.
 */
export type ChapterLayout = "split" | "stacked" | "flow";

export function CaseStudyChapter({
  eyebrow,
  heading,
  body,
  layout = "split",
}: {
  eyebrow?: string;
  heading: string;
  body: string[];
  layout?: ChapterLayout;
}) {
  const head = (
    <>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title display-section mt-3 text-[var(--ink)]">{heading}</h2>
    </>
  );

  if (layout === "flow") {
    return (
      <Reveal>
        <div className="max-w-[46rem]">
          <div className="[&>h2]:max-w-[22ch]">{head}</div>
          <div className="mt-6 space-y-5">
            {body.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    );
  }

  if (layout === "stacked") {
    return (
      <Reveal>
        <div className="[&>h2]:max-w-[26ch]">{head}</div>
        {/* Real text columns rather than a two-cell grid, so the shape holds
            whatever number of paragraphs a chapter carries. */}
        <div className="mt-9 md:columns-2 md:gap-16">
          {body.map((paragraph) => (
            <p key={paragraph} className="body-text mb-5 break-inside-avoid last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-28 [&>h2]:max-w-[20ch]">{head}</div>
        <div className="space-y-5">
          {body.map((paragraph) => (
            <p key={paragraph} className="body-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/**
 * A figure inside a chapter: a diagram, metric band, or piece of media, with
 * an optional label above it.
 *
 * Pages were repeating this wrapper by hand — a `Reveal`, a top margin, a
 * hairline rule, and an `eyebrow` paragraph floating above the figure. Two
 * problems with that: the spacing drifted between usages, and the label was
 * a loose `<p>` with nothing tying it to what it labelled. Here it is a real
 * `<figure>` / `<figcaption>`, so the association is in the markup.
 *
 * `rule` draws the B4 minor divider. Use it when the figure is a separate
 * beat from the prose above; omit it when the figure is that paragraph's
 * own evidence and a rule would cut the two apart.
 */
export function CaseStudyFigure({
  label,
  children,
  rule = false,
  delay = 80,
}: {
  /** Short label above the figure. Sentence case, like an eyebrow. */
  label?: string;
  children: ReactNode;
  rule?: boolean;
  delay?: number;
}) {
  const className = `ds-cs-figure${rule ? " has-rule" : ""}`;

  // Only a labelled block is a figure. Media primitives render their own
  // `<figure>`, so wrapping an unlabelled one would nest figure in figure.
  return (
    <Reveal delay={delay}>
      {label ? (
        <figure className={className}>
          <figcaption className="eyebrow ds-cs-figure-label">{label}</figcaption>
          {children}
        </figure>
      ) : (
        <div className={className}>{children}</div>
      )}
    </Reveal>
  );
}

/**
 * Standard spacing between chapters. `boundary` draws the B4 major divider —
 * omit it where the preceding element is already a break (a full-bleed
 * banner or a dark pull statement), so two separators don't stack.
 */
export function CaseStudySection({
  children,
  boundary = true,
  id,
  className = "",
}: {
  children: ReactNode;
  boundary?: boolean;
  /** Anchor for the chapter rail; also the in-page link target. */
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 ${
        boundary ? "ds-section-boundary mt-20 pt-16 md:mt-24" : "mt-16 md:mt-20"
      } ${className}`.trim()}
    >
      {children}
    </section>
  );
}

/**
 * The opening block: a display-scale statement with one accent emphasis
 * (D2/D3) on the left, the setup prose on the right.
 */
export function CaseStudyOverview({
  statement,
  note,
  body,
}: {
  /** Use a `<span className="text-[var(--accent-deep)]">` for the one emphasis. */
  statement: ReactNode;
  note?: string;
  body: string[];
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-28">
          <p className="eyebrow">Overview</p>
          <p
            className="display-title mt-4 max-w-[16ch] text-[var(--ink)]"
            style={{
              fontSize: "clamp(1.6rem, 2.1vw, 2.3rem)",
              lineHeight: 1.12,
            }}
          >
            {statement}
          </p>
          {note ? (
            <p className="body-sm mt-5" style={{ maxWidth: "32ch" }}>
              {note}
            </p>
          ) : null}
        </div>
        <div className="space-y-5">
          {body.map((paragraph) => (
            <p key={paragraph} className="body-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
