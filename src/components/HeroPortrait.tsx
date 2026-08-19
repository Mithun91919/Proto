import { DotBoard, type DotBoardProps } from "@/components/DotBoard";

const SRC = "/mithun-raju.jpg";
const DEFAULT_LABEL =
  "Portrait of Mithun Raju rendered as a halftone of falling dots, resolving into a photograph";

export type HeroPortraitProps = Omit<DotBoardProps, "src" | "text">;

/** The portrait as a flip-dot board; hovering cross-fades to the photograph. */
export function HeroPortrait({
  label = DEFAULT_LABEL,
  ...rest
}: HeroPortraitProps = {}) {
  return <DotBoard src={SRC} label={label} {...rest} />;
}
