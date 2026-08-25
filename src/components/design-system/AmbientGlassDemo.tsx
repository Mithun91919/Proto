import { GlassPanel } from "./primitives/GlassPanel";

/** B7 · Ambient glass — glass needs something subtle to refract; never a page-wide gradient. */
export function AmbientGlassDemo() {
  return (
    <div className="ds-ambient flex justify-center py-4">
      <GlassPanel variant="lift" className="max-w-[480px] rounded-2xl p-9">
        <p className="ds-eyebrow">Featured glass</p>
        <h4 className="display-title mt-3.5" style={{ fontSize: "1.5rem" }}>
          Use ambient colour behind project cards, hero evidence, or next-project navigation.
        </h4>
        <p className="ds-note">The glow stays outside the content layer. Text and UI surfaces keep their normal contrast.</p>
      </GlassPanel>
    </div>
  );
}
