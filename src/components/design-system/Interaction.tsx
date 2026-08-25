import { GlassPanel } from "./primitives/GlassPanel";

/** J1 · Hover language — the interaction should confirm clickability, not perform. */
export function HoverLanguageDemo() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <GlassPanel variant="base" hoverLift className="rounded-xl p-[1.625rem]">
        <p className="ds-eyebrow">Interactive glass</p>
        <h4 className="display-title mt-3.5" style={{ fontSize: "1.35rem" }}>
          Lift 2–4px, strengthen the edge.
        </h4>
        <p className="ds-note">No dramatic scale. The interaction should confirm clickability, not perform.</p>
      </GlassPanel>
      <GlassPanel variant="soft" className="group rounded-xl p-[1.625rem]">
        <p className="ds-eyebrow">Directional link</p>
        <h4 className="display-title mt-3.5 flex items-center gap-2" style={{ fontSize: "1.35rem" }}>
          Next project{" "}
          <span className="ds-arrow ds-accent-text inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </h4>
        <p className="ds-note">Arrow translates 3–4px. Text shifts from deep teal to accent.</p>
      </GlassPanel>
    </div>
  );
}

/** J2 · Chapter progress — dots earn a UI role: a fixed rail showing where the reader is. */
export function ChapterProgressDemo() {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-9">
      <div className="ds-glass-soft ds-scroll-rail">
        <span className="ds-scroll-node done" />
        <span className="ds-scroll-node done" />
        <span className="ds-scroll-node current" />
        <span className="ds-scroll-node" />
        <span className="ds-scroll-node" />
      </div>
      <GlassPanel variant="base" className="rounded-xl p-[1.875rem]">
        <p className="ds-eyebrow">03 / The reframe</p>
        <h4 className="display-title mt-3.5" style={{ fontSize: "1.5rem" }}>
          The current dot is larger and accent-coloured.
        </h4>
        <p className="ds-note">
          Completed chapters use deep teal; upcoming chapters remain hollow and muted. State is also conveyed by fill, not colour alone.
        </p>
      </GlassPanel>
    </div>
  );
}

const TIMING = [
  { use: "Local state", value: "150–220ms", note: "Hover, selection, focus, small expansion.", variant: "soft" as const },
  { use: "Story reveal", value: "300–450ms", note: "Use only when reveal order helps comprehension.", variant: "soft" as const },
  { use: "Dot transformation", value: "350–650ms", note: "Problem state reorganises into the resolved state.", variant: "base" as const },
];

/** J3 · Motion timing — the duration budget for local state, story reveals, and dot transformations. */
export function MotionTimingGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {TIMING.map((t) => (
        <GlassPanel key={t.use} variant={t.variant} className="rounded-xl p-6">
          <p className="ds-eyebrow">{t.use}</p>
          <p className="display-title mt-3" style={{ fontSize: "1.35rem" }}>
            {t.value}
          </p>
          <p className="ds-note">{t.note}</p>
        </GlassPanel>
      ))}
    </div>
  );
}

/** J4 · Reduced motion + focus — every hover affordance needs a keyboard/touch equivalent. */
export function ReducedMotionFocusGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <GlassPanel variant="soft" className="rounded-xl p-[1.625rem]">
        <p className="ds-eyebrow">Reduced motion</p>
        <p className="ds-note">Remove translation, autoplay, and transitional dot choreography. Preserve the final state and all information.</p>
      </GlassPanel>
      <GlassPanel variant="soft" className="rounded-xl p-[1.625rem]">
        <p className="ds-eyebrow">Keyboard / touch</p>
        <p className="ds-note">Every hover affordance needs an equivalent focus or tap state. Never hide required meaning behind hover alone.</p>
      </GlassPanel>
    </div>
  );
}
