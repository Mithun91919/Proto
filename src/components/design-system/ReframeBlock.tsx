type ReframeBlockProps = {
  heading: string;
  /** Supporting context. Optional in `bleed` mode, where a terse statement
      often stands on its own like `PullStatement`. */
  body?: string;
  /**
   * Overrides the "The reframe" label. The flat→grouped mark also reads as
   * "a loose collection became a structure", so a structure / IA beat can
   * borrow this block with its own eyebrow — the mark still means something.
   */
  eyebrow?: string;
  /**
   * Edge-to-edge on the dark ground instead of a contained card — the same
   * `.ds-pull` band `PullStatement` uses, so a reframe placed as a scroll
   * breaker reads as the same kind of moment as the closing statement.
   * Must be a direct child of the shell (outside `CaseStudyColumn`) for the
   * band to reach the viewport edges.
   */
  bleed?: boolean;
};

/**
 * The mark for a reframe: the surface reading of the problem (a flat,
 * undifferentiated row) giving way to the structure underneath it (the same
 * dots, now grouped).
 *
 * This is the "change" meaning from the dot grammar (C1) — the one thing a
 * reframe actually asserts — rather than an ornament placed to fill the right
 * side of the block.
 */
function ReframeMark() {
  const surface = Array.from({ length: 12 });
  const groups = [
    [1, 1, 1],
    [1, 1],
    [1, 1, 1, 1],
  ];

  return (
    <div className="ds-reframe-mark" aria-hidden>
      <div className="ds-reframe-flat">
        {surface.map((_, i) => (
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
export function ReframeBlock({ heading, body, eyebrow = "The reframe", bleed = false }: ReframeBlockProps) {
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
              <ReframeMark />
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
      <ReframeMark />
    </div>
  );
}
