import type { CSSProperties } from "react";
import Image from "next/image";

export type DotNode = {
  label: string;
  /** A screen shown under the dot, for a row that stands for real pages. */
  image?: { src: string; alt: string; width: number; height: number };
};

type DotNodesProps = {
  nodes: DotNode[];
  /**
   * `scattered` leaves the dots apart and unjoined; `connected` draws a dotted
   * line from each to the next. The pair carries one idea: the same pieces,
   * before and after something joins them.
   */
  state: "scattered" | "connected";
  /** Names the row for screen readers, since the dots themselves carry no text. */
  label: string;
};

/**
 * One dot per thing, drawn apart or joined. The dot is the analogy the case
 * study leans on: a goal, an initiative, a product and a person are each a
 * point, and what matters is whether anything links them.
 *
 * The dots stay one size on purpose. Varying them would imply a size, a count
 * or an importance the source does not state.
 *
 * Pure CSS, so no client boundary. In `connected` state the links draw in left
 * to right once; reduced-motion readers get the finished row.
 */
export function DotNodes({ nodes, state, label }: DotNodesProps) {
  return (
    <ol className={`ds-dn is-${state}`} aria-label={label}>
      {nodes.map((node, i) => (
        <li key={node.label} className="ds-dn-node" style={{ "--i": i } as CSSProperties}>
          <span className="ds-dn-dot" aria-hidden="true" />
          {node.image ? (
            <Image
              className="ds-dn-shot"
              src={node.image.src}
              alt={node.image.alt}
              width={node.image.width}
              height={node.image.height}
              sizes="14vw"
            />
          ) : null}
          <span className="ds-dn-label">{node.label}</span>
        </li>
      ))}
    </ol>
  );
}

type DotTrioProps = {
  left: { label: string; count: number };
  centre: string;
  right: { label: string; count: number };
};

/**
 * One dot joined to two groups of dots: a single point that connects a set on
 * each side. The group sizes are the counts in the source, drawn as that many
 * dots and no more.
 */
export function DotTrio({ left, centre, right }: DotTrioProps) {
  const group = (g: { label: string; count: number }) => (
    <div className="ds-dt-group">
      <span className="ds-dt-dots" aria-hidden="true">
        {Array.from({ length: g.count }, (_, i) => (
          <span key={i} className="ds-dn-dot" />
        ))}
      </span>
      <span className="ds-dn-label">{g.label}</span>
    </div>
  );

  return (
    <div className="ds-dt" role="group" aria-label={`${centre}, joined to ${left.count} ${left.label} and ${right.count} ${right.label}`}>
      {group(left)}
      <span className="ds-dt-link" aria-hidden="true" />
      <div className="ds-dt-centre">
        <span className="ds-dn-dot ds-dt-me" aria-hidden="true" />
        <span className="ds-dn-label">{centre}</span>
      </div>
      <span className="ds-dt-link" aria-hidden="true" />
      {group(right)}
    </div>
  );
}
