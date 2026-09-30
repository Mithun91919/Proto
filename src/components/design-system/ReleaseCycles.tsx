import type { CSSProperties } from "react";
import { GlassPanel } from "./primitives/GlassPanel";

export type ReleaseCycleRow = {
  /** What the row shows, in mono: "Found at the last moment". */
  label: string;
  /** One plain sentence under the label. */
  note: string;
  /** Which step of each cycle the check is flagged at, from 0. */
  flagAt: number;
  /** `muted` for the state that is being left, `accent` for the one arrived at. */
  tone?: "muted" | "accent";
};

type ReleaseCyclesProps = {
  rows: ReleaseCycleRow[];
  /** How many release cycles the track repeats. Three shows a habit, not an accident. */
  cycles?: number;
  /** Steps in one cycle, the last being the release. A diagram unit, not a duration. */
  steps?: number;
  /** Names the figure for screen readers. */
  label: string;
};

/**
 * S6 · Release cycles — where in a cycle something happens, drawn as position.
 *
 * Each row is the same run of dots repeated: small dots are the cycle, the
 * ring at the end of each is the release, and one filled dot is the moment the
 * check is flagged. Only that dot moves between rows, which is the whole
 * claim: the check was always there, and the difference is how close to the
 * release it lands.
 *
 * Dots earn their place here on state and change (C1): position is the
 * information. The step count is an illustration and says so in the caption
 * a caller should give it; no row is a measurement.
 *
 * Rides `Reveal` through `.ds-dot-mark`, so the dots draw in order on entrance
 * like every other mark, and hold still under reduced motion.
 */
export function ReleaseCycles({ rows, cycles = 3, steps = 8, label }: ReleaseCyclesProps) {
  let dotIndex = 0;

  return (
    <GlassPanel className="rounded-2xl p-7" role="img" aria-label={label}>
      <div className="ds-cycles">
        {rows.map((row) => {
          const flagColour = row.tone === "accent" ? "var(--ds-accent)" : "var(--ink-soft)";
          return (
            <div key={row.label} className="ds-cycles-row">
              <div className="ds-cycles-copy">
                <p className="ds-eyebrow" style={{ color: row.tone === "accent" ? "var(--ds-accent-deep)" : "var(--muted)" }}>
                  {row.label}
                </p>
                <p className="ds-note">{row.note}</p>
              </div>
              <span className="ds-dot-mark ds-cycles-track" data-mark="count" aria-hidden>
                {Array.from({ length: cycles }).map((_, c) => (
                  <span key={c} className="ds-cycles-group">
                    {Array.from({ length: steps }).map((__, s) => {
                      const release = s === steps - 1;
                      const flag = s === row.flagAt;
                      const style: CSSProperties = {
                        "--dot-i": dotIndex++,
                        width: release || flag ? 14 : 7,
                        height: release || flag ? 14 : 7,
                        background: release
                          ? "transparent"
                          : flag
                            ? flagColour
                            : "color-mix(in oklab, var(--ds-dot-muted) 80%, transparent)",
                        boxShadow: release ? "inset 0 0 0 2px var(--ink-soft)" : undefined,
                      } as CSSProperties;
                      return <span key={s} className="ds-dot" style={style} />;
                    })}
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
      <p className="ds-cycles-legend" aria-hidden>
        <span className="ds-cycles-key ds-cycles-key-release" /> Release
        <span className="ds-cycles-key ds-cycles-key-flag-late" />
        <span className="ds-cycles-key ds-cycles-key-flag" style={{ marginLeft: "0.3rem" }} /> The check flags outdated libraries
      </p>
    </GlassPanel>
  );
}
