type ReframeBlockProps = {
  heading: string;
  body: string;
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
export function ReframeBlock({ heading, body }: ReframeBlockProps) {
  return (
    <div className="ds-env-dark ds-reframe rounded-2xl p-12">
      <div>
        <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
          The reframe
        </p>
        <h3 className="display-title mt-5 max-w-[19ch]" style={{ fontSize: "2.2rem", lineHeight: 1.1 }}>
          {heading}
        </h3>
        <p className="mt-5 max-w-[55ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
          {body}
        </p>
      </div>
      <ReframeMark />
    </div>
  );
}
