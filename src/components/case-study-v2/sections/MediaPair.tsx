import { MediaTwoUp } from "../primitives/MediaTwoUp";
import type { MediaPairSection } from "@/content/case-study-v2/types";

type MediaPairProps = { section: MediaPairSection };

/** Two comparable surfaces at a configurable weighting — not every comparison deserves 50/50. */
export function MediaPair({ section }: MediaPairProps) {
  return <MediaTwoUp mode="pair" weighting={section.weighting} a={section.a} b={section.b} />;
}
