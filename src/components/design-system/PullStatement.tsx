import type { ReactNode } from "react";

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
  mark?: PullMark;
};

function RhythmMark() {
  return (
    <div className="ds-pull-mark" aria-hidden>
      <div className="ds-pull-rhythm">
        <span className="ds-pull-rail" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={`ds-pull-beat${i === 5 ? " is-open" : ""}`} />
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
        <span className="ds-pull-cluster">
          {cluster.map((_, i) => (
            <span key={i} className="ds-pull-beat" />
          ))}
        </span>
        <span className="ds-pull-bridge" />
        <span className="ds-pull-cluster">
          {cluster.map((_, i) => (
            <span key={i} className="ds-pull-beat" />
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
        <span className="ds-pull-one" />
        <span className="ds-pull-bridge" />
        <span className="ds-pull-many">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} />
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
            <span className="ds-pull-seam-node" />
            {i < 4 ? <span className="ds-pull-seam-join" /> : null}
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
export function PullStatement({ children, eyebrow, mark = "none" }: PullStatementProps) {
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner">
        <div className="ds-pull-body">
          <div>
            <span className="ds-pull-dots" aria-hidden />
            {eyebrow ? <p className="ds-eyebrow ds-pull-eyebrow">{eyebrow}</p> : null}
            <p className="ds-pull-text">{children}</p>
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
