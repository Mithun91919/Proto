import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { MetricGlyph } from "./MetricGlyph";
import type { MetricMarkName } from "./dotPatterns";

type GlyphSectionRowProps = {
  /** A glyph from the dot library, chosen for what it means. */
  glyph: MetricMarkName;
  heading: string;
  children: ReactNode;
};

/**
 * S14 · Glyph section row — a dot glyph and a sentence heading on the left, the
 * story on the right. Sits under its own section boundary, so the row draws no
 * rule of its own. The left column holds while a long story scrolls past.
 */
export function GlyphSectionRow({
  glyph,
  heading,
  children,
}: GlyphSectionRowProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] md:gap-16">
      <Reveal>
        <div className="md:sticky md:top-24">
          <MetricGlyph name={glyph} size={5} gap={3} />
          <h2 className="display-title display-section mt-6 text-[var(--ink)]">
            {heading}
          </h2>
        </div>
      </Reveal>
      <div className="max-w-[58ch] space-y-5">{children}</div>
    </div>
  );
}
