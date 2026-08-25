import { DotGrid } from "./primitives/DotGrid";

export type SystemShape = "converge" | "connect" | "translate" | "resolve" | "organise";

/**
 * A small, static signature mark for a project card — the resolved state of
 * the C · Dot language system shapes (Converge/Connect/Translate/Resolve/
 * Organise), sized for inline use rather than the full hover-reveal
 * fingerprint. Which shape a project gets is a direct read of its own
 * systemMap (Before → Intervention → After), not a decorative choice.
 */
export function FeaturedGlyph({ shape }: { shape: SystemShape }) {
  switch (shape) {
    case "converge":
      return <DotGrid cols={4} size={4} gap={3} dots={Array(11).fill(1)} />;
    case "connect":
      return <DotGrid cols={3} size={4} gap={3} dots={Array(9).fill(1)} />;
    case "translate":
      return <DotGrid cols={3} size={4} gap={3} dots={[1, 1, 1, 0.7, 0.7, 0, 0.4, 0, 0]} />;
    case "resolve":
      return (
        <div className="flex gap-1">
          <DotGrid cols={4} size={4} gap={3} dots={Array(4).fill(1)} />
          <DotGrid cols={2} size={4} gap={3} dots={Array(2).fill(1)} variant="quiet" />
        </div>
      );
    case "organise":
      return (
        <div className="flex gap-1">
          <DotGrid cols={2} size={4} gap={3} dots={Array(4).fill(1)} />
          <DotGrid cols={2} size={4} gap={3} dots={Array(4).fill(1)} />
        </div>
      );
  }
}
