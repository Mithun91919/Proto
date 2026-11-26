import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";

/**
 * The survey, as four bar charts. Every figure is a count out of the 38
 * responses (percentages are the count over 38, rounded), taken from the
 * survey dashboard. The questions that changed partway through, and the ones
 * whose dashboard charts were garbled, are left out.
 */

const N = 38;

type Row = { label: string; count: number };

const CHARTS: { title: string; question: string; rows: Row[] }[] = [
  {
    title: "Tools used on one project",
    question: "How many different tools do you use in a typical design project?",
    rows: [
      { label: "3–4 tools", count: 21 },
      { label: "1–2 tools", count: 9 },
      { label: "5–6 tools", count: 5 },
      { label: "7 or more", count: 3 },
    ],
  },
  {
    title: "Trust in AI-generated prototypes",
    question: "How much do you trust them for design review or stakeholder demos?",
    rows: [
      { label: "Somewhat, needs significant review", count: 28 },
      { label: "Mostly, minor tweaks", count: 6 },
      { label: "Fully, use as-is", count: 3 },
      { label: "Don’t trust", count: 1 },
    ],
  },
  {
    title: "The one capability they would add",
    question: "If you could add one capability to your design workflow, what would it be?",
    rows: [
      { label: "Built-in Living Design components", count: 17 },
      { label: "Higher accuracy AI output", count: 8 },
      { label: "Production-ready code generation", count: 6 },
      { label: "Single integrated workspace", count: 5 },
      { label: "Real-time accessibility checking", count: 1 },
      { label: "Visual diff with Jira handoff", count: 1 },
    ],
  },
  {
    title: "Would they adopt a Walmart-specific tool?",
    question: "How likely are you to adopt one, if it met your top needs?",
    rows: [
      { label: "Definitely would adopt", count: 23 },
      { label: "Might adopt, depends on quality", count: 10 },
      { label: "Probably would adopt", count: 3 },
      { label: "Unlikely", count: 1 },
      { label: "Definitely not", count: 1 },
    ],
  },
];

function Chart({ chart }: { chart: (typeof CHARTS)[number] }) {
  const max = Math.max(...chart.rows.map((r) => r.count));
  return (
    <GlassPanel variant="soft" className="rounded-2xl p-6">
      <h3 className="display-title" style={{ fontSize: "1.1rem", lineHeight: 1.25 }}>
        {chart.title}
      </h3>
      <p className="mt-1 text-[0.82rem] leading-5" style={{ color: "var(--muted)" }}>
        {chart.question}
      </p>
      <ul className="mt-5 flex flex-col gap-3" aria-label={chart.title}>
        {chart.rows.map((row, i) => {
          const pct = Math.round((row.count / N) * 100);
          return (
            <li key={row.label}>
              <div className="flex items-baseline justify-between gap-3 text-[0.85rem] leading-5">
                <span style={{ color: "var(--ink)" }}>{row.label}</span>
                <span className="font-mono text-[0.78rem]" style={{ color: i === 0 ? "var(--ds-accent)" : "var(--ink-soft)" }}>
                  {pct}% <span style={{ color: "var(--muted)" }}>({row.count})</span>
                </span>
              </div>
              <div
                className="mt-1.5 h-2 overflow-hidden rounded-full"
                style={{ background: "color-mix(in oklab, var(--ink) 8%, transparent)" }}
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(row.count / max) * 100}%`,
                    background: i === 0 ? "var(--ds-accent)" : "color-mix(in oklab, var(--ds-accent) 40%, var(--ink-soft))",
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </GlassPanel>
  );
}

/** One of the four charts: 0 tools, 1 trust, 2 the capability they would add, 3 adoption. */
export function SurveyChart({ index }: { index: 0 | 1 | 2 | 3 }) {
  return <Chart chart={CHARTS[index]} />;
}

export function SurveyCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {CHARTS.map((chart) => (
        <Chart key={chart.title} chart={chart} />
      ))}
    </div>
  );
}
