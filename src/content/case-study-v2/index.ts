import { bbDaily } from "./bb-daily";
import { compactPlaceholder } from "./examples/compact-placeholder";
import { flagshipPlaceholder } from "./examples/flagship-placeholder";
import { mediumPlaceholder } from "./examples/medium-placeholder";
import { visualShowcasePlaceholder } from "./examples/visual-showcase-placeholder";
import type { CaseStudyV2 } from "./types";

export const caseStudiesV2: CaseStudyV2[] = [
  bbDaily,
  flagshipPlaceholder,
  mediumPlaceholder,
  compactPlaceholder,
  visualShowcasePlaceholder,
];

export function getCaseStudyV2(slug: string) {
  return caseStudiesV2.find((study) => study.slug === slug);
}

export type { CaseStudyV2 } from "./types";
