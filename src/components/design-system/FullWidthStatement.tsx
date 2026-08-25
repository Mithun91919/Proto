type FullWidthStatementProps = { children: string };

/** H2 · Full-width statement — a single declarative line that advances the argument, not a summary. */
export function FullWidthStatement({ children }: FullWidthStatementProps) {
  return (
    <div className="ds-rule py-14">
      <p className="display-title max-w-[28ch]" style={{ fontSize: "1.9rem", lineHeight: 1.25, fontWeight: 400, color: "var(--ds-accent-deep)" }}>
        {children}
      </p>
    </div>
  );
}
