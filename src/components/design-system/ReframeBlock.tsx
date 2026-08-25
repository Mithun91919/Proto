type ReframeBlockProps = {
  heading: string;
  body: string;
};

/** E1 · Tension / reframe — use once, when the project argument itself changes. */
export function ReframeBlock({ heading, body }: ReframeBlockProps) {
  return (
    <div className="ds-env-dark rounded-2xl p-12">
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
  );
}
