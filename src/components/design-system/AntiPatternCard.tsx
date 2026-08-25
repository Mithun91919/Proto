import { GlassPanel } from "./primitives/GlassPanel";

type AntiPatternCardProps = {
  title: string;
  note: string;
};

/** L · Anti-patterns — what keeps the system from becoming a theme. */
export function AntiPatternCard({ title, note }: AntiPatternCardProps) {
  return (
    <GlassPanel variant="soft" className="rounded-2xl p-[1.625rem]">
      <div
        className="mb-[1.125rem] flex h-[22px] w-[22px] items-center justify-center rounded-full text-sm font-semibold"
        style={{ background: "#fdecec", color: "#b95555" }}
      >
        ×
      </div>
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em]" style={{ color: "#9b4a4a" }}>
        Do not
      </p>
      <h4 className="display-title mt-2.5" style={{ fontSize: "1.35rem" }}>
        {title}
      </h4>
      <p className="ds-note">{note}</p>
    </GlassPanel>
  );
}
