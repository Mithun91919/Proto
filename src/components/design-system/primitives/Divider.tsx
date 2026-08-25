type DividerProps = {
  variant?: "major" | "minor";
};

/**
 * B4 · Divider hierarchy. Major: five accent dots + a fading hairline,
 * between top-level chapters. Minor: three muted dots + a short hairline,
 * between component examples or related narrative blocks. Don't reach for
 * either when spacing already makes the relationship clear.
 */
export function Divider({ variant = "minor" }: DividerProps) {
  return <div className={variant === "major" ? "ds-divider-major" : "ds-divider-minor"} />;
}
