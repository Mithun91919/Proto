import { GlassPanel } from "./primitives/GlassPanel";
import { DotFlow } from "./DotFlow";
import { MetricGlyph } from "./MetricGlyph";
import type { MetricMarkName } from "./dotPatterns";

type StateCard = {
  heading: string;
  body: string;
  /** Relative widths (%) for the abstract "line" bars — fewer, shorter lines reads as simpler. */
  lineWidths?: number[];
  /**
   * Named stages instead of bars, drawn as a `DotFlow`. Use it where the two
   * states differ in what the steps *are* rather than in how many there are:
   * bars can show one path is shorter, but they cannot show that the second
   * step changed from raising a ticket to trying the fix.
   */
  stages?: string[];
  /** A single semantic dot glyph above the card, same family as `ProofStrip`'s. */
  glyph?: MetricMarkName;
  /**
   * A number the card leans on, set large with its unit beside it — "3" and
   * "months of low adoption". Kept out of the body so the figure is read
   * first rather than found inside a sentence.
   */
  figure?: { value: string; label: string };
};

type BeforeAfterModelProps = {
  before: StateCard;
  after: StateCard;
};

/** E2 · Before / after model — compares mental models or system structure, not just screenshots. */
export function BeforeAfterModel({ before, after }: BeforeAfterModelProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
      <GlassPanel variant="soft" className="rounded-2xl p-7">
        {before.glyph ? (
          <div className="mb-5">
            <MetricGlyph name={before.glyph} size={5} gap={3} />
          </div>
        ) : null}
        {before.figure ? (
          <p className="ds-stat-row" style={{ marginBottom: "0.9rem" }}>
            <span className="ds-stat-figure" style={{ color: "var(--ink-soft)" }}>{before.figure.value}</span>
            <span className="ds-stat-label" style={{ color: "var(--muted)" }}>{before.figure.label}</span>
          </p>
        ) : null}
        <p className="ds-eyebrow" style={{ color: "var(--muted)" }}>
          Before
        </p>
        <h3 className="display-title mt-3" style={{ fontSize: "1.4rem", color: "var(--ink-soft)" }}>
          {before.heading}
        </h3>
        <p className="ds-note">{before.body}</p>
        {before.stages ? (
          <div className="mt-6">
            <DotFlow stages={before.stages} />
          </div>
        ) : before.lineWidths ? (
          <div className="mt-5 flex flex-col gap-2">
            {before.lineWidths.map((w, i) => (
              <span key={i} className="block h-2 rounded-full" style={{ width: `${w}%`, background: "#cfe1e5" }} />
            ))}
          </div>
        ) : null}
      </GlassPanel>

      <span className="ds-arrow self-center hidden md:block">→</span>

      <GlassPanel className="rounded-2xl p-7">
        {after.glyph ? (
          <div className="mb-5">
            <MetricGlyph name={after.glyph} size={5} gap={3} />
          </div>
        ) : null}
        {after.figure ? (
          <p className="ds-stat-row" style={{ marginBottom: "0.9rem" }}>
            <span className="ds-stat-figure">{after.figure.value}</span>
            <span className="ds-stat-label">{after.figure.label}</span>
          </p>
        ) : null}
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent-deep)" }}>
          After
        </p>
        <h3 className="display-title mt-3" style={{ fontSize: "1.4rem" }}>
          <span className="ds-accent-deep-text">{after.heading}</span>
        </h3>
        <p className="ds-note">{after.body}</p>
        {after.stages ? (
          <div className="mt-6">
            <DotFlow stages={after.stages} />
          </div>
        ) : after.lineWidths ? (
          <div className="mt-5 flex flex-col gap-2">
            {after.lineWidths.map((w, i) => (
              <span key={i} className="block h-2 rounded-full" style={{ width: `${w}%`, background: "#b8e4e9" }} />
            ))}
          </div>
        ) : null}
      </GlassPanel>
    </div>
  );
}
