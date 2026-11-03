type FullWidthStatementProps = {
  children: string;
  /**
   * Drops the top rule and the vertical padding, for a statement that sits
   * inside a section which already has its own boundary. Without it the
   * statement draws a second line directly under the section's own.
   */
  bare?: boolean;
};

/** H2 · Full-width statement — a single declarative line that advances the argument, not a summary. */
export function FullWidthStatement({ children, bare = false }: FullWidthStatementProps) {
  return (
    <div className={bare ? undefined : "ds-rule py-14"}>
      <p className="display-title max-w-[28ch]" style={{ fontSize: "1.9rem", lineHeight: 1.25, fontWeight: 400, color: "var(--ds-accent-deep)" }}>
        {children}
      </p>
    </div>
  );
}
