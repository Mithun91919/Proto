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
  /**
   * Lights one dot and quietens the rest, so the row doubles as a "you are
   * here" marker for the screen shown beside it. Only meaningful when
   * `connected`; the chain stays joined so the position reads as a place in a
   * sequence.
   */
  active?: number;
};

/**
 * One dot per thing, drawn apart or joined. The dot is the analogy the case
 * study leans on: a goal, an initiative, a product and a person are each a
 * point, and what matters is whether anything links them.
 *
 * The dots stay one size on purpose. Varying them would imply a size, a count
 * or an importance the source does not state. The one exception is `active`,
 * which enlarges the lit dot to mark the current place, not a quantity.
 *
 * Pure CSS, so no client boundary. The motion tells the story the dots tell
 * (see `design-system.css`, "Dot stories"), and runs only while the slide that
 * holds the row is showing, so it starts again each time the reader arrives.
 * Reduced-motion readers get the finished row.
 */
export function DotNodes({ nodes, state, label, active }: DotNodesProps) {
  return (
    <ol
      className={`ds-dn is-${state}${active === undefined ? "" : " has-active"}`}
      aria-label={label}
      style={active === undefined ? undefined : ({ "--a": active } as CSSProperties)}
    >
      {nodes.map((node, i) => (
        <li
          key={node.label}
          className={`ds-dn-node${i === active ? " is-active" : ""}${active !== undefined && i <= active ? " is-reached" : ""}`}
          aria-current={i === active ? "step" : undefined}
          style={{ "--i": i } as CSSProperties}
        >
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


/** How many dots go in each group by default: nine groups of unequal size that add up to 139. */
const GROUP_SIZES = [18, 12, 20, 10, 16, 14, 17, 13, 19];

/** Where each cluster of the `places` picture sits, in container units, spread wide on purpose. */
const PLACE_CENTRES: [number, number][] = [
  [13, 9],
  [58, 7],
  [36, 27],
  [86, 23],
  [17, 41],
];
/** How many dots each place gets: unequal, and a picture, not a measurement. */
const PLACE_SIZES = [8, 5, 9, 4, 6];

/** A small seeded generator, so the server and the browser draw the same picture. */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Dots that stand for many things, in groups. Two pictures from one component.
 *
 * **Gathered** (no `places`): a field of dots, one for each thing, that gathers
 * into new groups. Not a line and not a hierarchy, because nothing comes before
 * anything else: the things are the same and the groups are what is new. The
 * total is the true count from the source (`sizes` add up to it).
 *
 * **Apart** (`places`): one small cluster for each named place, set well apart
 * and left unjoined, each with its label. It says the work was kept in many
 * separate places. The clusters appear one after another, then their dots drift
 * a little, each in its own way, for a few passes, and rest.
 *
 * In both, the sizes of the groups are a picture, not a measurement: the source
 * says things were grouped or kept in places, not how many went where, so no
 * caption may read them as counts.
 *
 * Positions are written once, as custom properties, and the motion is finite CSS
 * keyed to the step being active (see `design-system.css`, "Dot groups"). Without
 * motion the dots simply sit in place.
 */
export function DotGroups({ label, sizes, places }: { label: string; sizes?: number[]; places?: string[] }) {
  const rand = seeded(7);
  const apart = Boolean(places);
  const counts = sizes ?? (apart ? PLACE_SIZES.slice(0, places!.length) : GROUP_SIZES);
  const cols = 3;
  const rows = apart ? 3 : Math.ceil(counts.length / cols);
  const height = apart ? 52 : rows * 16 + 4;
  const centres = counts.map((_, g): [number, number] =>
    apart ? PLACE_CENTRES[g % PLACE_CENTRES.length] : [17 + 33 * (g % cols), 10 + 16 * Math.floor(g / cols)],
  );
  const dots: { gx: number; gy: number; dx: number; dy: number; g: number; fx: number; fy: number; fd: number }[] = [];
  counts.forEach((count, g) => {
    const [cx, cy] = centres[g];
    for (let k = 0; k < count; k++) {
      const r = (apart ? 1.3 : 1.5) * Math.sqrt(k + 0.5);
      const a = k * 2.39996 + g * 1.3;
      const gx = cx + r * Math.cos(a);
      const gy = cy + r * Math.sin(a);
      const sx = 3 + rand() * 94;
      const sy = 3 + rand() * (height - 6);
      // Each dot drifts its own way for its own time, so the cluster is never in step with itself.
      dots.push({ gx, gy, dx: sx - gx, dy: sy - gy, g, fx: (rand() - 0.5) * 16, fy: (rand() - 0.5) * 16, fd: 5 + rand() * 3 });
    }
  });
  return (
    <div className={`ds-dg${apart ? " is-apart" : ""}`} role="img" aria-label={label} style={{ aspectRatio: `100 / ${height}` }}>
      {dots.map((d, i) => (
        <span
          key={i}
          className="ds-dg-dot"
          style={{ "--gx": d.gx.toFixed(2), "--gy": d.gy.toFixed(2), "--dx": d.dx.toFixed(2), "--dy": d.dy.toFixed(2), "--g": d.g, "--fx": `${d.fx.toFixed(1)}px`, "--fy": `${d.fy.toFixed(1)}px`, "--fd": `${d.fd.toFixed(1)}s` } as CSSProperties}
        />
      ))}
      {apart
        ? places!.map((name, g) => (
            <span
              key={name}
              className="ds-dg-label"
              aria-hidden="true"
              style={{ "--gx": centres[g][0], "--gy": centres[g][1] + 8, "--g": g } as CSSProperties}
            >
              {name}
            </span>
          ))
        : null}
    </div>
  );
}


/**
 * Two or three options side by side, and the one that was chosen: the chosen
 * dot lit, the others grayed. For a step where the story is a choice between
 * ideas rather than a line from one thing to the next. Both light as they appear,
 * then the ones not chosen go quiet and the chosen one keeps its light.
 *
 * It says only that there were these options and which one was taken; it makes
 * no claim about how close the choice was.
 */
export function DotChoice({ options, label }: { options: { label: string; chosen?: boolean }[]; label: string }) {
  return (
    <div className="ds-dc" role="group" aria-label={label}>
      {options.map((o) => (
        <div key={o.label} className={`ds-dc-option${o.chosen ? " is-chosen" : ""}`}>
          <span className="ds-dn-dot" aria-hidden="true" />
          <span className="ds-dn-label">{o.label}</span>
          {o.chosen ? <span className="sr-only"> (chosen)</span> : null}
        </div>
      ))}
    </div>
  );
}


/**
 * A few dots, some of them lit: a share, drawn as a share. "Two in five" is five
 * dots with two lit. The dots stay one size and only the lit ones carry the
 * claim, so keep `total` small (the ratio as the source states it, not a
 * percentage drawn out to a hundred). The dots appear, then the lit ones light.
 */
export function DotShare({ total, lit, label }: { total: number; lit: number; label: string }) {
  return (
    <div className="ds-sh" role="img" aria-label={label}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`ds-dn-dot${i < lit ? " is-lit" : ""}`} style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}
