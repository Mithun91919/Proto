import type { ReactNode } from "react";
import { DotGrid } from "./primitives/DotGrid";

type ShapeCardProps = {
  name: string;
  title: string;
  project: string;
  children: ReactNode;
};

function ShapeCard({ name, title, project, children }: ShapeCardProps) {
  return (
    <div>
      <div className="mb-9 flex flex-wrap items-baseline gap-4">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em]" style={{ color: "var(--ds-accent)" }}>
          {name}
        </span>
        <h3 className="display-title" style={{ fontSize: "1.35rem" }}>
          {title}
        </h3>
        <span className="ml-auto font-mono text-[0.65rem]" style={{ color: "var(--muted)" }}>
          {project}
        </span>
      </div>
      <div className="ds-glass rounded-2xl p-9">{children}</div>
    </div>
  );
}

/** C · Converge — five separate groups collapse into one connected platform. */
export function ConvergeShape() {
  const groups = ["People", "Products", "Initiatives", "Intake", "Goals"];
  return (
    <ShapeCard name="Converge" title="Five tools → one platform" project="Portfolio Management Platform">
      <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-8">
        <div className="flex flex-col gap-4">
          {groups.map((g) => (
            <div key={g} className="flex items-center gap-3.5">
              <DotGrid cols={2} size={7} gap={5} dots={Array(4).fill(1)} variant="muted" />
              <span className="font-mono text-[0.6rem] uppercase" style={{ color: "var(--muted)" }}>
                {g}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="ds-dot ds-dot-quiet" style={{ width: 4, height: 4 }} />
          <span className="ds-dot ds-dot-muted" style={{ width: 4, height: 4 }} />
          <span className="ds-dot" style={{ width: 4, height: 4 }} />
          <span className="ds-arrow ml-0.5">→</span>
        </div>
        <div>
          <DotGrid cols={6} size={7} gap={5} dots={Array(24).fill(1)} />
          <p className="mt-4 font-mono text-[0.6rem] uppercase" style={{ color: "var(--ds-accent-deep)" }}>
            One connected platform · 6 modules
          </p>
        </div>
      </div>
    </ShapeCard>
  );
}

/** C · Connect — sequential stages joined into one lifecycle. */
export function ConnectShape() {
  const nodes = [
    { label: "Marketplace", link: true },
    { label: "Design Studio", link: true },
    { label: "Testing", link: false },
  ];
  return (
    <ShapeCard name="Connect" title="Stages joined into one lifecycle" project="API Lifecycle Platform">
      <div className="flex items-center justify-between">
        {nodes.map((n) => (
          <div key={n.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-3.5">
              <DotGrid cols={3} size={7} gap={5} dots={Array(9).fill(1)} />
              <span className="whitespace-nowrap font-mono text-[0.6rem] uppercase" style={{ color: "var(--ink-soft)" }}>
                {n.label}
              </span>
            </div>
            {n.link ? (
              <div
                className="mx-5 mb-[1.625rem] h-[7px] flex-1"
                style={{ backgroundImage: "radial-gradient(var(--ds-dot-muted) 2px, transparent 2px)", backgroundSize: "11px 7px", backgroundRepeat: "repeat-x", backgroundPosition: "center" }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </ShapeCard>
  );
}

/** C · Translate — noisy signals reduced into ranked actions. */
export function TranslateShape() {
  const ranked = [
    { label: "Critical", count: 8 },
    { label: "Major", count: 5 },
    { label: "Minor", count: 2 },
  ];
  return (
    <ShapeCard name="Translate" title="Noisy signals → ranked actions" project="Dependency Health Platform">
      <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-8">
        <div>
          <DotGrid cols={12} size={7} gap={5} dots={[0.25, 0.5, 0.9, 0.35, 1, 0.6, 0.2, 0.75].concat(Array(52).fill(0.5)).slice(0, 60)} variant="muted" />
          <p className="mt-4 font-mono text-[0.6rem] uppercase" style={{ color: "var(--muted)" }}>
            Raw dependency signals
          </p>
        </div>
        <span className="ds-arrow text-center">→</span>
        <div className="flex flex-col gap-3.5">
          {ranked.map((r) => (
            <div key={r.label} className="flex items-center gap-3.5">
              <span className="w-[88px] font-mono text-[0.6rem] uppercase" style={{ color: "var(--ink-soft)" }}>
                {r.label}
              </span>
              <DotGrid cols={r.count} size={7} gap={5} dots={Array(r.count).fill(1)} />
            </div>
          ))}
        </div>
      </div>
    </ShapeCard>
  );
}

/** C · Resolve — one path forks into two outcomes. */
export function ResolveShape() {
  return (
    <ShapeCard name="Resolve" title="One path forks into two outcomes" project="Store Support Platform">
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[0.6rem] uppercase" style={{ color: "var(--ink-soft)" }}>
            Issue
          </span>
          <div className="flex items-center gap-1.5">
            <DotGrid cols={6} size={7} gap={5} dots={Array(6).fill(1)} variant="muted" />
            <span className="ds-dot ds-dot-state ml-0.5" style={{ width: 11, height: 11 }} />
          </div>
        </div>
        <span className="ds-arrow">→</span>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <DotGrid cols={8} size={7} gap={5} dots={Array(8).fill(1)} />
            <span className="font-mono text-[0.6rem] uppercase" style={{ color: "var(--ds-accent-deep)" }}>
              Self-resolved
            </span>
          </div>
          <div className="flex items-center gap-3.5">
            <DotGrid cols={3} size={7} gap={5} dots={Array(3).fill(1)} variant="quiet" />
            <span className="font-mono text-[0.6rem] uppercase" style={{ color: "var(--muted)" }}>
              Escalated with context
            </span>
          </div>
        </div>
      </div>
    </ShapeCard>
  );
}

/** C · Organise — a flat field becomes a hierarchy. */
export function OrganiseShape() {
  const bins = ["Plan", "Source", "Move", "Store"];
  return (
    <ShapeCard name="Organise" title="A flat field becomes a hierarchy" project="Supply Chain Operations Platform">
      <div className="grid grid-cols-[1fr_80px_1.2fr] items-center gap-8">
        <div>
          <DotGrid cols={13} size={7} gap={5} dots={Array(52).fill(1)} variant="muted" />
          <p className="mt-4 font-mono text-[0.6rem] uppercase" style={{ color: "var(--muted)" }}>
            139 modules, flat
          </p>
        </div>
        <span className="ds-arrow text-center">→</span>
        <div className="grid grid-cols-4 gap-4">
          {bins.map((bin) => (
            <div key={bin} className="rounded-md p-3.5" style={{ border: "1px solid var(--ds-solid-border)" }}>
              <DotGrid cols={4} size={7} gap={5} dots={Array(12).fill(1)} />
              <p className="mt-3 font-mono text-[0.55rem] uppercase" style={{ color: "var(--ink-soft)" }}>
                {bin}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ShapeCard>
  );
}
