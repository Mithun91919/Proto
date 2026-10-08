import { PullMarkFigure, type PullMark } from "./PullStatement";
import { Reveal } from "@/components/Reveal";

/**
 * J3b–J3d · The motion catalogue.
 *
 * Every named movement in the system, stated once so it can be argued with.
 * The brief's rule is that nothing moves for its own sake, which is only
 * checkable if each motion has to say what it means in a sentence — so each
 * entry here carries its meaning, not just its duration.
 */

type MarkSpec = {
  mark: PullMark;
  name: string;
  /** What the shape claims. The sentence the mark exists to restate. */
  means: string;
  /** The order the highlight travels, which is the claim being re-enacted. */
  order: string;
  /** Number of positions in that order — the `--mark-n` the component sets. */
  n: number;
};

const MARKS: MarkSpec[] = [
  {
    mark: "connection",
    name: "Connection",
    means: "One thing is the link between two others.",
    order: "Cluster, bridge, cluster. Position 5 is deliberately empty, so the wave pauses mid-crossing before the far cluster answers.",
    n: 10,
  },
  {
    mark: "rhythm",
    name: "Rhythm",
    means: "A standing cadence the user still controls.",
    order: "Beats left to right along the rail. The last beat is drawn open and never fills.",
    n: 6,
  },
  {
    mark: "exchange",
    name: "Exchange",
    means: "One contributor feeding many readers. The sides are not matched.",
    order: "The one, then the bridge, then the many — so the asymmetry is felt in time as well as in count.",
    n: 12,
  },
  {
    mark: "seam",
    name: "Seam",
    means: "The gaps between steps, not the steps, are the work.",
    order: "Node, join, node. The joins are solid and the nodes are hollow, inverting the usual emphasis.",
    n: 9,
  },
];

/** J3b · The four pull-statement marks, live, with what each one claims. */
export function MarkMotionGallery() {
  return (
    <div className="ds-motion-gallery">
      {MARKS.map((m) => (
        <Reveal key={m.mark}>
          <div className="ds-motion-specimen">
            <div className="ds-motion-stage">
              <PullMarkFigure mark={m.mark} />
            </div>
            <div className="ds-motion-caption">
              <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
                {m.name} · n={m.n}
              </p>
              <p className="ds-motion-means">{m.means}</p>
              <p className="ds-motion-order">{m.order}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

type MotionSpec = {
  name: string;
  /** What starts it. */
  trigger: string;
  timing: string;
  loop: string;
  /** Why it is allowed to move at all. */
  means: string;
};

const INVENTORY: MotionSpec[] = [
  {
    name: "Reveal",
    trigger: "10% of a screen before it enters",
    timing: "560ms, 18px rise",
    loop: "Once per load",
    means: "A band has arrived. Everything else times itself off this, so nothing can fire off-screen.",
  },
  {
    name: "Mark entrance",
    trigger: "Reveal",
    timing: "460ms, after a 520ms lead",
    loop: "Once per load",
    means: "The mark draws itself in meaning order. The lead exists because the band is still travelling for its first 560ms.",
  },
  {
    name: "Mark loop",
    trigger: "900ms after entrance",
    timing: "6s period, 42% travel",
    loop: "Twice, then rest",
    means: "The mark restates its claim a second time, then stays still. Rest is most of each cycle — the wave crosses in ~2.3s and the mark is still for the rest.",
  },
  {
    name: "Numeral draw",
    trigger: "Reveal",
    timing: "380ms, 16ms per dot",
    loop: "Once per load",
    means: "A dot-grid numeral assembles into a figure. It does not loop: a numeral is a value, and a looping value reads as one that is changing.",
  },
  {
    name: "Flow sweep",
    trigger: "700ms after entrance",
    timing: "7s period",
    loop: "Twice, then rest",
    means: "One highlight walks the chain so the path is visible without a pointer finding it.",
  },
  {
    name: "Reframe settle",
    trigger: "Reveal",
    timing: "4.4s period",
    loop: "Twice, then rest",
    means: "Before and after hold their positions while the arrow between them carries the direction of change.",
  },
  {
    name: "Hotspot pulse",
    trigger: "Reveal",
    timing: "2.6s period",
    loop: "Three times, then rest",
    means: "An annotation marks a point on a screenshot that would otherwise be missed.",
  },
  {
    name: "Hero art",
    trigger: "Page load",
    timing: "650ms rise and fade, 1s settle for a backdrop",
    loop: "Once per page",
    means: "The one thing on a case study's first screen that is not needed to read. The words are already there.",
  },
  {
    name: "Screen fan",
    trigger: "Page load",
    timing: "700ms each, 90ms apart",
    loop: "Once per page",
    means: "Several screens are one product: they slide out from behind the front one, so the count is seen before it is read.",
  },
  {
    name: "Evidence card",
    trigger: "Page load",
    timing: "800ms rise from the bottom, starting at 900ms",
    loop: "Once per page",
    means: "Problem, solution and what I did arrive as one piece, rising into the overlap with the hero once the art has landed.",
  },
  {
    name: "Portrait pour",
    trigger: "In view",
    timing: "Two pours and drains",
    loop: "Twice, then rest",
    means: "Dots arriving as one image says the argument without words: separate pieces joining. Then it stops on the assembled image.",
  },
  {
    name: "Block parts",
    trigger: "Reveal",
    timing: "Label, heading, then each paragraph 90ms apart, to about 1s",
    loop: "Once per page",
    means: "A block that fades in whole reads flat. Its parts arrive in reading order, and a return visit shows them already in place.",
  },
  {
    name: "Figure rise",
    trigger: "Reveal",
    timing: "760ms, 32px, settling from 98.5%",
    loop: "Once per page",
    means: "A figure arrives differently from text: it rises further and settles, so the page has two kinds of thing on it.",
  },
  {
    name: "Group stagger",
    trigger: "Reveal",
    timing: "600ms each, 120ms apart, up to four",
    loop: "Once per page",
    means: "Cards in a set, metrics in a strip, before and after: they come one after another, in the order they are read.",
  },
  {
    name: "Section line",
    trigger: "Section first seen",
    timing: "600ms line, then five dots in order over 400ms",
    loop: "Once per page",
    means: "A new chapter has started. The line draws and the five dots light one by one. Armed only for a section below the fold, so nothing is hidden without script.",
  },
  {
    name: "Dot skeleton",
    trigger: "Image still loading",
    timing: "None, static",
    loop: "Until it loads",
    means: "The frame holds its place as a field of dots, so the page does not jump and the wait has a shape.",
  },
  {
    name: "Route line",
    trigger: "Navigation over 200ms",
    timing: "About 3s fill, 180ms to finish",
    loop: "Per navigation",
    means: "Something is loading. A fast navigation shows nothing at all.",
  },
  {
    name: "Dot grid",
    trigger: "Pointer",
    timing: "Follows the pointer",
    loop: "Per pointer move",
    means: "The page responds. Full strength on home and About, quiet on case studies, because the long read is not the place to perform.",
  },
  {
    name: "Hover lift",
    trigger: "Pointer",
    timing: "150–220ms",
    loop: "Per interaction",
    means: "Confirms a thing is clickable. It should not perform.",
  },
  {
    name: "Swap",
    trigger: "State change",
    timing: "160ms",
    loop: "Per change",
    means: "Content replaced in place, fast enough not to be a transition the reader waits through.",
  },
];

/** J3c · Every named motion in the system, with the claim that justifies it. */
export function MotionInventory() {
  return (
    <div className="ds-motion-table" role="table">
      <div className="ds-motion-row is-head" role="row">
        <span role="columnheader">Motion</span>
        <span role="columnheader">Trigger</span>
        <span role="columnheader">Timing</span>
        <span role="columnheader">Loop</span>
        <span role="columnheader">What it means</span>
      </div>
      {INVENTORY.map((m) => (
        <div className="ds-motion-row" role="row" key={m.name}>
          <span role="cell" className="ds-motion-name">
            {m.name}
          </span>
          <span role="cell" className="ds-motion-cell">
            {m.trigger}
          </span>
          <span role="cell" className="ds-motion-cell is-mono">
            {m.timing}
          </span>
          <span role="cell" className="ds-motion-cell is-mono">
            {m.loop}
          </span>
          <span role="cell" className="ds-motion-cell">
            {m.means}
          </span>
        </div>
      ))}
    </div>
  );
}
