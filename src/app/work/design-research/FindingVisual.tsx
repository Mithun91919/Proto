/**
 * One picture for each finding, drawn in the site's dot language, that shows what
 * the finding says rather than only how many raised it. The words on them are the
 * study's own: the tools designers named, the stages, and the plain labels from the
 * readout. Nothing here is measured, so nothing is drawn to scale.
 */

const TOOLS = ["FigJam", "ChatGPT", "Figma", "Builder.io", "Wibey", "Cursor", "VS Code", "GitHub"];

const INK = "var(--ink)";
const SOFT = "var(--ink-soft)";
const ACCENT = "var(--ds-accent)";
const MUTED = "var(--ds-dot-muted)";

function Svg({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 460 250" role="img" aria-label={label} className="block h-auto w-full" style={{ maxWidth: "29rem" }}>
      {children}
    </svg>
  );
}

/** Finding 1: the designer at the centre, holding the tools together. */
function Hub() {
  const cx = 230, cy = 118, rx = 168, ry = 76;
  return (
    <Svg label="A designer in the centre, joined to the eight tools they use: FigJam, ChatGPT, Figma, Builder.io, Wibey, Cursor, VS Code and GitHub">
      {TOOLS.map((tool, i) => {
        const a = (i / TOOLS.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + rx * Math.cos(a);
        const y = cy + ry * Math.sin(a);
        const right = Math.cos(a) > 0.3;
        const left = Math.cos(a) < -0.3;
        const anchor = right ? "start" : left ? "end" : "middle";
        const dx = right ? 12 : left ? -12 : 0;
        const dy = right || left ? 4 : Math.sin(a) < 0 ? -12 : 22;
        return (
          <g key={tool}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={MUTED} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 8" />
            <circle cx={x} cy={y} r="6" fill={SOFT} />
            <text x={x + dx} y={y + dy} textAnchor={anchor} fontSize="12" fill={SOFT} style={{ fontFamily: "var(--font-mono, monospace)" }}>
              {tool}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="15" fill={ACCENT} />
      <text x={cx} y={cy + 34} textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
        Designer
      </text>
    </Svg>
  );
}

/** Finding 2: the check happens at review and handoff, not at generation. */
function LateCheck() {
  const nodes = [
    { x: 70, name: "Generation", note: "Not checked here", checked: false },
    { x: 230, name: "Review", note: "Checked by hand", checked: true },
    { x: 390, name: "Handoff", note: "Checked by hand", checked: true },
  ];
  return (
    <Svg label="Three points in a project: generation, review and handoff. The Living Design check happens by hand at review and handoff, not at generation">
      <line x1="70" y1="100" x2="390" y2="100" stroke={MUTED} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 8" />
      {nodes.map((n) => (
        <g key={n.name}>
          {n.checked ? (
            <circle cx={n.x} cy={100} r="14" fill={ACCENT} />
          ) : (
            <circle cx={n.x} cy={100} r="14" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="4 5" />
          )}
          <text x={n.x} y={72} textAnchor="middle" fontSize="12" fill={SOFT} style={{ fontFamily: "var(--font-mono, monospace)" }}>
            {n.name.toUpperCase()}
          </text>
          <text x={n.x} y={140} textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
            {n.note}
          </text>
        </g>
      ))}
    </Svg>
  );
}

/** Finding 3: confidence holds for drafts and drops as the work is refined. */
function Confidence() {
  const steps = [
    { x: 60, stage: "Ideation", word: "Helpful", o: 1 },
    { x: 170, stage: "First draft", word: "Useful", o: 0.8 },
    { x: 280, stage: "Refinement", word: "Inconsistent", o: 0.5 },
    { x: 390, stage: "Handoff", word: "Not trusted yet", o: 0.25 },
  ];
  return (
    <Svg label="Four points in a project, with confidence fading: ideation is helpful, a first draft is useful, refinement is inconsistent, and handoff is not trusted yet">
      <line x1="60" y1="100" x2="390" y2="100" stroke={MUTED} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 8" />
      {steps.map((s) => (
        <g key={s.stage}>
          <circle cx={s.x} cy={100} r="15" fill={ACCENT} fillOpacity={s.o} />
          <text x={s.x} y={68} textAnchor="middle" fontSize="12" fill={SOFT} style={{ fontFamily: "var(--font-mono, monospace)" }}>
            {s.stage.toUpperCase()}
          </text>
          <text x={s.x} y={142} textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
            {s.word}
          </text>
        </g>
      ))}
    </Svg>
  );
}

/** Finding 4: AI prototypes work as demos and references, not yet as handoffs. */
function Ladder() {
  const steps = [
    { x: 60, y: 150, name: "Demo", used: true },
    { x: 170, y: 120, name: "Reference", used: true },
    { x: 280, y: 90, name: "Review-ready", used: false },
    { x: 390, y: 60, name: "Reusable handoff", used: false, target: true },
  ];
  return (
    <Svg label="Four steps from a demo to a reusable handoff. AI prototypes work as demos and references today; review-ready and reusable handoff are not yet reached, and the last is the target">
      {steps.slice(0, -1).map((s, i) => (
        <line key={s.name} x1={s.x} y1={s.y} x2={steps[i + 1].x} y2={steps[i + 1].y} stroke={MUTED} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 8" />
      ))}
      {steps.map((s) => (
        <g key={s.name}>
          {s.used ? (
            <circle cx={s.x} cy={s.y} r="14" fill={ACCENT} />
          ) : (
            <circle cx={s.x} cy={s.y} r="14" fill="none" stroke={s.target ? ACCENT : MUTED} strokeWidth="2.5" strokeDasharray={s.target ? "4 5" : undefined} />
          )}
          <text x={s.x} y={s.y + 38} textAnchor="middle" fontSize="12" fontWeight="600" fill={INK}>
            {s.name}
          </text>
        </g>
      ))}
      <text x="60" y="226" fontSize="12" fill={SOFT}>Filled: what AI prototypes are used for today.</text>
    </Svg>
  );
}

export function FindingVisual({ id }: { id: string }) {
  if (id === "f1") return <Hub />;
  if (id === "f2") return <LateCheck />;
  if (id === "f3") return <Confidence />;
  return <Ladder />;
}
