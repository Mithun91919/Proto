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

/**
 * The top of a card: the glyph and, when there is one, the figure, on one row
 * so the mark and the number it belongs to read as a single unit rather than
 * two stacked lines. With only a glyph it sits alone, as it always did.
 */
function CardLead({ card, muted = false }: { card: StateCard; muted?: boolean }) {
  if (!card.glyph && !card.figure) return null;
  return (
    <div className="mb-5 flex items-center gap-5">
      {card.glyph ? <MetricGlyph name={card.glyph} size={5} gap={3} /> : null}
      {card.figure ? (
        <p className="ds-stat-row" style={{ margin: 0 }}>
          <span className="ds-stat-figure" style={muted ? { color: "var(--ink-soft)" } : undefined}>
            {card.figure.value}
          </span>
          <span className="ds-stat-label" style={muted ? { color: "var(--muted)" } : undefined}>
            {card.figure.label}
          </span>
        </p>
      ) : null}
    </div>
  );
}

/** E2 · Before / after model — compares mental models or system structure, not just screenshots. */
export function BeforeAfterModel({ before, after }: BeforeAfterModelProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
      <GlassPanel variant="soft" className="rounded-2xl p-7">
        <CardLead card={before} muted />
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
        <CardLead card={after} />
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
