type ReframeBlockProps = {
  heading: string;
  /** Supporting context. Optional in `bleed` mode, where a terse statement
      often stands on its own like `PullStatement`. */
  body?: string;
  /** Overrides the "The reframe" label. Pair it with `mark`, so the
      picture matches the beat rather than the block. */
  eyebrow?: string;
  /**
   * Edge-to-edge on the dark ground instead of a contained card — the same
   * `.ds-pull` band `PullStatement` uses, so a reframe placed as a scroll
   * breaker reads as the same kind of moment as the closing statement.
   * Must be a direct child of the shell (outside `CaseStudyColumn`) for the
   * band to reach the viewport edges.
   */
  bleed?: boolean;
  /**
   * Which change the mark draws. A reframe block is not always the same
   * reframe, and one fixed picture under three different headings is
   * ornament — the thing C1 rules out.
   *
   * - `group`      a loose collection became a structure (IA, taxonomy)
   * - `distribute` one shared point became many hands (a surface moving)
   * - `rebase`     the same product on a different foundation (migration)
   */
  mark?: "group" | "distribute" | "rebase";
};

/**
 * The change a reframe asserts, drawn in the dot grammar — C1's "change"
 * meaning rather than an ornament filling the right side of the block.
 *
 * There are three because there were three different reframes on the site
 * all drawing the same picture: a surface moving off one desk, a migration
 * onto a new foundation, and an actual regrouping. Only the last was what
 * the flat→grouped mark says.
 */
function ReframeMark({ variant }: { variant: "group" | "distribute" | "rebase" }) {
  if (variant === "distribute") {
    return (
      <div className="ds-reframe-mark" aria-hidden>
        <div className="ds-reframe-one">
          <span className="ds-reframe-dot is-on" />
        </div>
        <span className="ds-reframe-arrow">↓</span>
        <div className="ds-reframe-flat">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="ds-reframe-dot is-on" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "rebase") {
    return (
      <div className="ds-reframe-mark" aria-hidden>
        <div className="ds-reframe-stack">
          <div className="ds-reframe-flat">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="ds-reframe-dot is-on" />
            ))}
          </div>
          <div className="ds-reframe-flat">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="ds-reframe-dot is-base" />
            ))}
          </div>
        </div>
        <span className="ds-reframe-arrow">↓</span>
        <div className="ds-reframe-stack">
          <div className="ds-reframe-flat">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="ds-reframe-dot is-on" />
            ))}
          </div>
          <div className="ds-reframe-flat">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="ds-reframe-dot is-newbase" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const groups = [
    [1, 1, 1],
    [1, 1],
    [1, 1, 1, 1],
  ];
  return (
    <div className="ds-reframe-mark" aria-hidden>
      <div className="ds-reframe-flat">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="ds-reframe-dot" />
        ))}
      </div>
      <span className="ds-reframe-arrow">↓</span>
      <div className="ds-reframe-grouped">
        {groups.map((group, gi) => (
          <div key={gi} className="ds-reframe-group">
            {group.map((_, i) => (
              <span key={i} className="ds-reframe-dot is-on" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** E1 · Tension / reframe — use once, when the project argument itself changes. */
export function ReframeBlock({
  heading,
  body,
  eyebrow = "The reframe",
  bleed = false,
  mark = "group",
}: ReframeBlockProps) {
  // Bleed shares `PullStatement`'s exact chrome — the B4 dot marker, the
  // `.ds-pull-eyebrow`, `.ds-pull-text` typography, `.ds-pull-mark` slot —
  // so a reframe breaker and a closing statement read as the same kind of
  // moment. Only the mark and an optional supporting line differ.
  if (bleed) {
    return (
      <div className="ds-pull">
        <div className="ds-pull-inner">
          <div className="ds-pull-body">
            <div>
              <span className="ds-pull-dots" aria-hidden />
              <p className="ds-eyebrow ds-pull-eyebrow">{eyebrow}</p>
              <h3 className="ds-pull-text">{heading}</h3>
              {body ? (
                <p
                  className="mt-5 max-w-[46ch] text-base leading-7"
                  style={{ color: "var(--ds-dark-muted)" }}
                >
                  {body}
                </p>
              ) : null}
            </div>
            {/* Extra right room: the cluster mark wants more breathing space
                near the band edge than `.ds-pull-inner`'s 2rem gives it. */}
            <div className="ds-pull-mark" style={{ paddingRight: "clamp(0px, 4vw, 3rem)" }}>
              <ReframeMark variant={mark} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ds-env-dark ds-reframe rounded-2xl p-12">
      <div>
        <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
          {eyebrow}
        </p>
        <h3
          className="display-title mt-5 max-w-[19ch]"
          style={{ fontSize: "2.2rem", lineHeight: 1.1, color: "var(--ds-dark-ink)" }}
        >
          {heading}
        </h3>
        {body ? (
          <p className="mt-5 max-w-[55ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
            {body}
          </p>
        ) : null}
      </div>
      <ReframeMark variant={mark} />
    </div>
  );
}
