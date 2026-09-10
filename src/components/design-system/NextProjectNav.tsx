import Link from "next/link";
import { GlassPanel } from "./primitives/GlassPanel";

type NextProjectNavProps = {
  href: string;
  number: string;
  label: string;
  title: string;
};

/**
 * S9 · Next-project nav — one glass-lift card, sharing the `DeepDiveGate`
 * (H3) treatment: an eyebrow, a headline, and a pill call-to-action rather
 * than a bare arrow, so the two end-of-page links read as one pattern.
 */
export function NextProjectNav({ href, number, label, title }: NextProjectNavProps) {
  return (
    <Link href={href} className="block no-underline">
      <GlassPanel
        variant="lift"
        hoverLift
        className="grid grid-cols-1 items-center gap-7 rounded-2xl p-8 sm:grid-cols-[1fr_auto]"
      >
        <div>
          <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
            Next · {number} / {label}
          </p>
          <h3 className="display-title mt-3 max-w-[24ch]" style={{ fontSize: "1.55rem", lineHeight: 1.2 }}>
            {title}
          </h3>
        </div>
        <span
          className="whitespace-nowrap rounded-full px-3.5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.08em]"
          style={{
            color: "var(--ds-accent-deep)",
            border: "1px solid color-mix(in oklab, var(--ds-accent) 28%, transparent)",
          }}
        >
          View case study →
        </span>
      </GlassPanel>
    </Link>
  );
}
