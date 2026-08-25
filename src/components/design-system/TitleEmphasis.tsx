import { GlassPanel } from "./primitives/GlassPanel";

type TitleEmphasisProps = {
  pattern: "single-word" | "short-phrase" | "before-after";
  children: React.ReactNode;
  note: string;
};

/** D2 · Approved title emphasis — use exactly one pattern per title. */
export function TitleEmphasis({ pattern, children, note }: TitleEmphasisProps) {
  const label =
    pattern === "single-word" ? "Single word" : pattern === "short-phrase" ? "Short phrase" : "Before → after";

  return (
    <GlassPanel className="rounded-2xl p-7">
      <p className="ds-eyebrow">{label}</p>
      <h4 className="display-title mt-4" style={{ fontSize: "1.5rem", lineHeight: 1.3 }}>
        {children}
      </h4>
      <p className="ds-note mt-4">{note}</p>
    </GlassPanel>
  );
}
