import { metricGlyph } from "@/components/FeaturedWorkCard";
import { CompactMetricGlyph } from "./MetricGlyph";
import type { Project } from "@/content/projects";

type MetricRowProps = {
  project: Project;
  /** Caps how many metrics are drawn — three reads clearly beside a card
      or a text column; more starts to crowd either. */
  max?: number;
  className?: string;
};

/**
 * A project's proof numbers with a dot icon per meaning, rather than a bare
 * number — picked at `/work/layout-options` for the media-forward home card
 * and the alternating work-page row, so it lives once here instead of
 * twice.
 *
 * Equal-width columns (the same technique `ProofStrip` uses) so the row's
 * total width always matches the card or text column it sits in, rather
 * than clustering to the left with a bare gap after the last metric.
 */
export function MetricRow({ project, max = 3, className = "" }: MetricRowProps) {
  const metrics = project.metrics.slice(0, max);
  if (metrics.length === 0) return null;

  return (
    <dl
      className={`grid ${className}`.trim()}
      style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, columnGap: "22px", rowGap: "13px" }}
    >
      {metrics.map((m, i) => (
        <div key={m.label} className="flex items-center" style={{ gap: "11px" }}>
          <CompactMetricGlyph name={metricGlyph(project.slug, i)} />
          <div>
            <dt className="display-title" style={{ fontSize: "1.32rem", lineHeight: 1.15, color: "var(--accent-deep)" }}>
              {m.value}
            </dt>
            <dd className="text-[0.75rem]" style={{ color: "var(--ink-soft)" }}>
              {m.label}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
