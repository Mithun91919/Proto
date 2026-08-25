import type { SystemDiagramSection } from "@/content/case-study-v2/types";

type SystemDiagramProps = { section: SystemDiagramSection };

/**
 * Used only when screenshots can't explain a relationship. Deliberately
 * simple — small labelled cards connected by the site's own dotted-divider
 * language, not boxes-and-arrows corporate-flowchart styling. Most real
 * systems worth diagramming here are a handful of stages, not a dense graph,
 * so this renders nodes in authored order rather than attempting general
 * graph layout.
 */
export function SystemDiagram({ section }: SystemDiagramProps) {
  const { heading, nodes, edges, style } = section;
  const isBeforeAfter = style === "before-after";

  return (
    <div>
      {heading ? (
        <h2 className="display-title display-sub mb-8 text-[var(--ink)]">{heading}</h2>
      ) : null}

      <div className="flex flex-wrap items-stretch gap-0">
        {nodes.map((node, index) => {
          const isBefore = isBeforeAfter && index === 0;
          return (
            <div key={node.id} className="flex items-center">
              <div
                className={`glass-panel min-w-[10rem] max-w-[16rem] p-5 ${
                  isBefore ? "opacity-70" : ""
                }`}
              >
                <p className={`eyebrow ${isBefore ? "shift-from" : isBeforeAfter ? "shift-to" : ""}`}>
                  {node.label}
                </p>
                {node.detail ? (
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{node.detail}</p>
                ) : null}
              </div>
              {index < nodes.length - 1 ? (
                <span aria-hidden className="shift-arrow px-3 text-xl">
                  {style === "flow" || isBeforeAfter ? "→" : "·"}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      {edges && edges.length > 0 ? (
        <ul className="dot-rule dot-rule-soft mt-8 space-y-2 pt-6">
          {edges.map((edge, index) => (
            <li key={index} className="text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--ink-soft)]">{edge.from}</span>
              {" → "}
              <span className="font-medium text-[var(--ink-soft)]">{edge.to}</span>
              {edge.label ? ` · ${edge.label}` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
