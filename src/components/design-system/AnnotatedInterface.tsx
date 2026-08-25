import type { ReactNode } from "react";

export type Callout = { number: number; note: string; top: string; left?: string; right?: string };

type AnnotatedInterfaceProps = {
  route?: string;
  callouts: Callout[];
  children?: ReactNode;
};

/** F4 · Annotated interface — the UI carries the evidence; callouts explain only what a reader can't infer. Keep to 3–4. */
export function AnnotatedInterface({ route = "product / overview", callouts, children }: AnnotatedInterfaceProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[1.45fr_0.75fr]">
      <div className="ds-frame">
        <div className="ds-framebar">
          <span className="font-mono text-[0.6rem]" style={{ color: "var(--muted)" }}>
            {route}
          </span>
        </div>
        <div className="ds-framebody relative p-6" style={{ minHeight: 320 }}>
          {children ?? (
            <div className="grid h-full grid-cols-[160px_1fr] gap-4">
              <div className="rounded-lg" style={{ background: "var(--color-surface-2)" }} />
              <div>
                <div className="h-9 rounded-md" style={{ background: "var(--ds-solid-bg)" }} />
                <div className="mt-3.5 grid grid-cols-2 gap-3">
                  <span className="block h-[100px] rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
                  <span className="block h-[100px] rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
                </div>
                <div className="mt-3 h-[110px] rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
              </div>
            </div>
          )}
          {callouts.map((c) => (
            <span
              key={c.number}
              className="ds-callout-dot"
              style={{ top: c.top, left: c.left, right: c.right }}
            >
              {c.number}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        {callouts.map((c, index) => (
          <div
            key={c.number}
            className={index > 0 ? "ds-rule py-5" : "pb-5"}
            style={index > 0 ? { paddingTop: "1.35rem" } : undefined}
          >
            <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
              {String(c.number).padStart(2, "0")}
            </p>
            <p className="mt-1.5 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
              {c.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
