import type { ReactNode } from "react";
import { MetricGlyph } from "./MetricGlyph";
import { DotGrid } from "./primitives/DotGrid";
import { metricGlyph } from "@/components/FeaturedWorkCard";

export type EvidenceBeat = { label: string; lead: ReactNode; detail: string };

type CaseStudyEvidenceProps = {
  slug?: string;
  /** Problem / Task / What I did. Omit and the card is metrics alone. */
  beats?: EvidenceBeat[];
  metrics?: { value: string; label: string }[];
  /** Kept honest per project — several of these figures are scale, not
      proof of an outcome, and the caption has to say so. */
  caveat?: string;
};

/**
 * The card that overlaps the hero band by roughly a tenth of its height,
 * so the page opens as one composed unit rather than a dark band followed
 * by a paragraph.
 *
 * Renders whatever the project actually has. Beats exist for one project
 * so far; metrics come from `projects.ts` for six. With neither, the
 * shell skips the card entirely rather than showing an empty frame.
 */
const MARKS: Record<string, number[]> = {
  // The three beats as the state of the system at each: gaps, then
  // converging, then one unbroken run (C1 — a dot earns its place through
  // state or change, not by being a decorative bar).
  0: [1, 0.14, 1, 0.14, 1],
  1: [0.4, 0.7, 1, 0.7, 0.4],
  2: [1, 1, 1, 1, 1],
};

export function CaseStudyEvidence({ slug, beats, metrics, caveat }: CaseStudyEvidenceProps) {
  const hasBeats = Boolean(beats?.length);
  const hasMetrics = Boolean(metrics?.length);
  if (!hasBeats && !hasMetrics) return null;

  return (
    <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
      <div
        className="relative z-[1] overflow-hidden rounded-2xl"
        style={{
          border: "1px solid var(--ds-solid-border)",
          // Opaque, not the translucent surface token: it sits over the
          // dark band, which would otherwise grey the text through it.
          background: "var(--paper)",
          boxShadow: "0 28px 60px -32px rgb(6 17 21 / 0.55)",
          marginTop: "clamp(-3.5rem, -3.8vw, -2rem)",
        }}
      >
        {hasBeats ? (
          <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3 md:gap-10 md:p-12">
            {beats!.map((b, i) => (
              <div key={b.label}>
                <span aria-hidden className="block">
                  <DotGrid cols={5} dots={MARKS[i] ?? MARKS[2]} size={5} gap={4} />
                </span>
                <p
                  className="font-mono uppercase"
                  style={{
                    marginTop: "1.35rem",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    color: "var(--accent-deep)",
                  }}
                >
                  {b.label}
                </p>
                <p className="display-title mt-2.5" style={{ fontSize: "1.35rem", lineHeight: 1.24 }}>
                  {b.lead}
                </p>
                <p className="mt-3.5 text-[0.93rem] leading-6" style={{ color: "var(--ink-soft)" }}>
                  {b.detail}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {hasMetrics ? (
          <div
            className="px-8 py-7 md:px-12 md:py-8"
            style={
              // Tinted only when it is a footer under the beats. Alone it
              // is the card, and a tint would read as a stray band.
              hasBeats
                ? {
                    background: "color-mix(in oklab, var(--ds-accent) 7%, var(--paper))",
                    borderTop: "1px solid var(--ds-solid-border)",
                  }
                : undefined
            }
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
              {metrics!.map((m, i) => (
                <div key={m.label} className="flex items-center gap-4">
                  <span aria-hidden>
                    <MetricGlyph name={metricGlyph(slug ?? "", i)} size={5} gap={3} />
                  </span>
                  <span>
                    <span
                      className="display-title block"
                      style={{
                        fontSize: "1.6rem",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        color: "var(--accent-deep)",
                      }}
                    >
                      {m.value}
                    </span>
                    <span className="ds-eyebrow mt-1.5 block">{m.label}</span>
                  </span>
                </div>
              ))}
            </div>
            {caveat ? <p className="ds-note mt-5">{caveat}</p> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
