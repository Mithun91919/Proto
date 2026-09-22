import type { CSSProperties, ReactNode } from "react";

/**
 * Which dot figure sits alongside the statement.
 *
 * Each one restates the sentence it accompanies — that's the bar a dot has
 * to clear (C1). `none` is the right answer whenever a statement has no
 * structure worth drawing; an unmeaning figure here would be exactly the
 * "dots as confetti" anti-pattern.
 *
 * - `rhythm` — a standing cadence with one open beat: regular, but not
 *   locked. For statements about repetition the user still controls.
 * - `connection` — two clusters joined across a gap. For statements about
 *   one thing being the link between two others.
 * - `exchange` — one dot feeding a field of many. For statements where the
 *   two sides are not matched: one person contributes, many act on it.
 * - `seam` — open nodes with the joins between them filled. Inverts the
 *   usual emphasis: for statements where the gaps between steps, not the
 *   steps, are the subject.
 */
type PullMark = "rhythm" | "connection" | "exchange" | "seam" | "none";

type PullStatementProps = {
  children: ReactNode;
  /** Optional short label above the statement, e.g. "The constraint". */
  eyebrow?: string;
  /**
   * A quieter line under the statement. For the thing that supports the
   * claim without being it — an analogy, a limit, a source. Keep the claim
   * in `children`; this is what a reader can skip.
   */
  note?: ReactNode;
  mark?: PullMark;
};

function RhythmMark() {
  return (
    <div className="ds-pull-mark" aria-hidden>
      <div className="ds-pull-rhythm">
        <span className="ds-pull-rail" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={`ds-pull-beat${i === 5 ? " is-open" : ""}`}
            style={{ "--dot-i": i } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}

function ConnectionMark() {
  const cluster = Array.from({ length: 4 });
  return (
    <div className="ds-pull-mark" aria-hidden>
      <div className="ds-pull-connection">
        {/* One cascade left to right: the first cluster, then the bridge,
            then the second. The mark says "the link between two others", so
            it draws itself in that order rather than all at once. */}
        <span className="ds-pull-cluster">
          {cluster.map((_, i) => (
            <span key={i} className="ds-pull-beat" style={{ "--dot-i": i } as CSSProperties} />
          ))}
        </span>
        <span className="ds-pull-bridge" style={{ "--dot-i": 4 } as CSSProperties} />
        <span className="ds-pull-cluster">
          {cluster.map((_, i) => (
            <span key={i} className="ds-pull-beat" style={{ "--dot-i": i + 6 } as CSSProperties} />
          ))}
        </span>
      </div>
    </div>
  );
}

function ExchangeMark() {
  return (
    <div className="ds-pull-mark" aria-hidden>
      <div className="ds-pull-exchange">
        <span className="ds-pull-one" style={{ "--dot-i": 0 } as CSSProperties} />
        <span className="ds-pull-bridge" style={{ "--dot-i": 1 } as CSSProperties} />
        <span className="ds-pull-many">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} style={{ "--dot-i": i + 3 } as CSSProperties} />
          ))}
        </span>
      </div>
    </div>
  );
}

function SeamMark() {
  return (
    <div className="ds-pull-mark" aria-hidden>
      <div className="ds-pull-seam">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="ds-pull-seam-step">
            <span className="ds-pull-seam-node" style={{ "--dot-i": i * 2 } as CSSProperties} />
            {i < 4 ? (
              <span className="ds-pull-seam-join" style={{ "--dot-i": i * 2 + 1 } as CSSProperties} />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * A declarative line that breaks the scroll between dense sections.
 *
 * Uses the S5 dark anchor ground: B6 reserves dark for a reframe, thesis, or
 * conclusion, which is what a pull statement is. The small dots above the
 * eyebrow are the B4 boundary marker; the optional figure to the right is a
 * separate job — it draws the shape of the claim itself.
 */
export function PullStatement({ children, eyebrow, note, mark = "none" }: PullStatementProps) {
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner">
        <div className="ds-pull-body">
          <div className="ds-pull-measure">
            <span className="ds-pull-dots" aria-hidden />
            {eyebrow ? <p className="ds-eyebrow ds-pull-eyebrow">{eyebrow}</p> : null}
            <p className="ds-pull-text">{children}</p>
            {note ? <p className="ds-pull-note">{note}</p> : null}
          </div>
          {mark === "rhythm" ? <RhythmMark /> : null}
          {mark === "connection" ? <ConnectionMark /> : null}
          {mark === "exchange" ? <ExchangeMark /> : null}
          {mark === "seam" ? <SeamMark /> : null}
        </div>
      </div>
    </div>
  );
}
