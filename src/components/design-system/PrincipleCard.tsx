import type { ReactNode } from "react";
import { GlassPanel } from "./primitives/GlassPanel";

type PrincipleCardProps = {
  icon: ReactNode;
  role: string;
  title: string;
  note: string;
};

/** A · Principles — one of the four role cards (Typography / Colour / Dots / Glass). */
export function PrincipleCard({ icon, role, title, note }: PrincipleCardProps) {
  return (
    <GlassPanel className="p-7 rounded-2xl">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--ds-accent)_12%,transparent)] bg-[color-mix(in_oklab,var(--ds-accent)_8%,transparent)]">
        {icon}
      </div>
      <p className="ds-eyebrow">{role}</p>
      <h4 className="display-title mt-2" style={{ fontSize: "1.35rem" }}>
        {title}
      </h4>
      <p className="ds-note">{note}</p>
    </GlassPanel>
  );
}
