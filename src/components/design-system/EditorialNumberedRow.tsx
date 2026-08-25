import { DotGrid } from "./primitives/DotGrid";
import { digitDots } from "./dotPatterns";

type Row = { number: string; title: string; detail: string };

type EditorialNumberedRowsProps = { rows: Row[] };

/** S6 · Editorial numbered rows — the row number is drawn in the same dot unit as everything else, not a plain numeral. */
export function EditorialNumberedRows({ rows }: EditorialNumberedRowsProps) {
  return (
    <div className="flex flex-col">
      {rows.map((row, index) => (
        <div
          key={row.number}
          className={`grid grid-cols-1 items-start gap-6 py-9 sm:grid-cols-[120px_1fr_1.1fr] sm:gap-12 ${index > 0 ? "ds-rule" : ""}`}
        >
          <div className="flex gap-3 pt-1.5">
            {row.number.split("").map((digit, i) => (
              <DotGrid key={i} cols={4} size={7} gap={5} dots={digitDots(digit)} variant="muted" />
            ))}
          </div>
          <h3 className="display-title" style={{ fontSize: "1.55rem", lineHeight: 1.2 }}>
            {row.title}
          </h3>
          <p className="max-w-[50ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
            {row.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
