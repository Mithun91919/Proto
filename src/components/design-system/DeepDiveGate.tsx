import Link from "next/link";
import { GlassPanel } from "./primitives/GlassPanel";

type DeepDiveGateProps = {
  heading: string;
  body: string;
  href: string;
};

/** H3 · Deep-dive gate — the public case study stops for confidentiality but a richer private version exists. */
export function DeepDiveGate({ heading, body, href }: DeepDiveGateProps) {
  return (
    <Link href={href} className="block no-underline">
      <GlassPanel variant="lift" hoverLift className="grid grid-cols-1 items-center gap-7 rounded-2xl p-8 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
            Private deep dive
          </p>
          <h3 className="display-title mt-3" style={{ fontSize: "1.55rem" }}>
            {heading}
          </h3>
          <p className="mt-3 max-w-[58ch] text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
            {body}
          </p>
        </div>
        <span
          className="whitespace-nowrap rounded-full px-3.5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.08em]"
          style={{ color: "var(--ds-accent-deep)", border: "1px solid color-mix(in oklab, var(--ds-accent) 28%, transparent)" }}
        >
          Request access →
        </span>
      </GlassPanel>
    </Link>
  );
}
