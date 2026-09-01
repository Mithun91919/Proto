import type { CSSProperties } from "react";
import { CompactNumeral } from "./CompactNumeral";

type DotFlowProps = {
  /** Three to six reads clearly; more starts to crowd. */
  stages: string[];
};

/**
 * A sequence of stages drawn in the dot language.
 *
 * Each stage carries its step number as a `CompactNumeral` (3×5) — the same
 * unit every other row-leading number in the system now uses — rather than
 * an anonymous dot or the component's own hand-rolled 4×7 digit it drew
 * before `CompactNumeral` existed. That keeps every numeral on the site on
 * one corrected font (the earlier 4×7 draw here predated the fix to the
 * "6" glyph) and gives the numeral the same entrance stagger every other
 * compact mark carries, for free.
 *
 * Two behaviours, both meaning-bearing rather than decorative:
 *
 * - Entrance — stages light in order and each connector draws toward the
 *   next. The animation performs the sequence; it is not motion applied to a
 *   static diagram. It rides the existing `Reveal` wrapper's `is-visible`
 *   class, so it needs no observer of its own and cannot fire off-screen.
 * - Sweep — once revealed, a single highlight travels the chain left to
 *   right on a loop, dot then connector then dot, rather than waiting for a
 *   hover to show the path. `--n` (the stage count) is set once on the root
 *   so the per-stage timing divides evenly regardless of how many stages a
 *   given usage has.
 *
 * Both are pure CSS, so there is no client boundary, and reduced-motion
 * users get the finished state with nothing moving.
 *
 * Deliberately no per-stage sizes or counts: varying them would imply
 * relative volumes the source does not state.
 */
export function DotFlow({ stages }: DotFlowProps) {
  return (
    <ol
      className="ds-dotflow"
      aria-label="Process stages, in order"
      style={{ "--n": stages.length } as CSSProperties}
    >
      {stages.map((stage, i) => (
        <li key={stage} className="ds-dotflow-stage" style={{ "--i": i } as CSSProperties}>
          <span className="ds-dotflow-rail">
            <span className="ds-dotflow-numeral">
              <CompactNumeral value={String(i + 1)} />
            </span>
            {i < stages.length - 1 ? <span className="ds-dotflow-link" /> : null}
          </span>
          <span className="ds-dotflow-label">{stage}</span>
        </li>
      ))}
    </ol>
  );
}
