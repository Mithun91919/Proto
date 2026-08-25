import Link from "next/link";
import { GlassPanel } from "./primitives/GlassPanel";

type NextProjectNavProps = {
  href: string;
  number: string;
  label: string;
  title: string;
};

/** S9 · Next-project nav — one glass-lift card, not a preview grid. */
export function NextProjectNav({ href, number, label, title }: NextProjectNavProps) {
  return (
    <Link href={href} className="block no-underline">
      <GlassPanel variant="lift" hoverLift className="flex items-center justify-between gap-8 rounded-2xl p-8">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]" style={{ color: "var(--ink-soft)" }}>
            Next · <span style={{ color: "var(--ds-accent)" }}>{number}</span> / {label}
          </p>
          <h3 className="display-title mt-3 max-w-[24ch]" style={{ fontSize: "1.75rem", lineHeight: 1.2 }}>
            {title}
          </h3>
        </div>
        <span className="ds-arrow text-3xl">→</span>
      </GlassPanel>
    </Link>
  );
}
