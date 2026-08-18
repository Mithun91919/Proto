import { DotBoard, type DotBoardProps } from "@/components/DotBoard";

type DotTextProps = Omit<DotBoardProps, "src" | "zoom" | "focusY"> & {
  text: string;
};

/**
 * Words drawn on the flip-dot board. Glyphs are snapped to the dot grid, so
 * keep `pitch` low enough that each letter gets room to read — roughly ten
 * cells per character is the floor.
 */
export function DotText({ text, pitch = 4, label, ...rest }: DotTextProps) {
  return (
    <DotBoard
      text={text}
      pitch={pitch}
      label={label ?? `${text.replace(/\n/g, " ")}, drawn as a halftone of falling dots`}
      {...rest}
    />
  );
}
