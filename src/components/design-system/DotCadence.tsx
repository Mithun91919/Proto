import { GlassPanel } from "./primitives/GlassPanel";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

type Cadence = {
  heading: string;
  body: string;
  /** Day indexes (0 = Monday) on which a delivery or shop happens. */
  days: number[];
  note: string;
};

type DotCadenceProps = {
  before: Cadence;
  after: Cadence;
};

function Track({ days, tone }: { days: number[]; tone: "muted" | "accent" }) {
  return (
    <div className={`ds-cadence${tone === "accent" ? " ds-cadence-accent" : ""}`}>
      {tone === "accent" ? <span className="ds-cadence-line" aria-hidden /> : null}
      {DAYS.map((day, i) => (
        <span key={i} className="ds-cadence-slot">
          <span className={`ds-cadence-dot${days.includes(i) ? " is-on" : ""}`} aria-hidden />
          <span className="ds-cadence-day" aria-hidden>
            {day}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * The shift from one-off shopping to a standing routine, told in the dot
 * language rather than abstract placeholder bars.
 *
 * Both tracks span the same seven days, so the comparison is literal: the
 * before state is sparse and irregular, the after state is a connected
 * cadence. The dots carry quantity and rhythm — the two things the sentence
 * is actually claiming — instead of decorating it.
 */
export function DotCadence({ before, after }: DotCadenceProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
      <GlassPanel variant="soft" className="rounded-2xl p-7">
        <p className="ds-eyebrow" style={{ color: "var(--muted)" }}>
          Before
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.4rem", color: "var(--ink-soft)" }}>
          {before.heading}
        </h4>
        <p className="ds-note">{before.body}</p>
        <Track days={before.days} tone="muted" />
        <p className="ds-cadence-note">{before.note}</p>
      </GlassPanel>

      <span className="ds-arrow self-center hidden md:block">→</span>

      <GlassPanel className="rounded-2xl p-7">
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          After
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.4rem" }}>
          <span className="ds-accent-text">{after.heading}</span>
        </h4>
        <p className="ds-note">{after.body}</p>
        <Track days={after.days} tone="accent" />
        <p className="ds-cadence-note">{after.note}</p>
      </GlassPanel>
    </div>
  );
}
