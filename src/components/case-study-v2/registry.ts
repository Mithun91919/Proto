import type { ComponentType } from "react";
import type { Section } from "@/content/case-study-v2/types";
import { CaseStudyHero } from "./sections/CaseStudyHero";
import { EditorialSection } from "./sections/EditorialSection";
import { SplitTextMedia } from "./sections/SplitTextMedia";
import { FullWidthMedia } from "./sections/FullWidthMedia";
import { MediaPair } from "./sections/MediaPair";
import { MediaSequence } from "./sections/MediaSequence";
import { ProductMotion } from "./sections/ProductMotion";
import { SystemDiagram } from "./sections/SystemDiagram";
import { BeforeAfter } from "./sections/BeforeAfter";
import { DecisionComparison } from "./sections/DecisionComparison";
import { ProductMoment } from "./sections/ProductMoment";
import { MetricMoment } from "./sections/MetricMoment";
import { ScaleStrip } from "./sections/ScaleStrip";
import { EditorialStatement } from "./sections/EditorialStatement";
import { Reflection } from "./sections/Reflection";
import { DeepDiveCTA } from "./sections/DeepDiveCTA";
import { ProjectNavigation } from "./sections/ProjectNavigation";

/**
 * `type -> component` lookup. The mapped type over `Section["type"]` means
 * adding a new `Section` variant and forgetting to register it here is a
 * compile error, not a silently-ignored section.
 */
export const sectionRegistry: {
  [K in Section["type"]]: ComponentType<{ section: Extract<Section, { type: K }> }>;
} = {
  hero: CaseStudyHero,
  editorial: EditorialSection,
  splitTextMedia: SplitTextMedia,
  fullWidthMedia: FullWidthMedia,
  mediaPair: MediaPair,
  mediaSequence: MediaSequence,
  productMotion: ProductMotion,
  systemDiagram: SystemDiagram,
  beforeAfter: BeforeAfter,
  decisionComparison: DecisionComparison,
  productMoment: ProductMoment,
  metricMoment: MetricMoment,
  scaleStrip: ScaleStrip,
  editorialStatement: EditorialStatement,
  reflection: Reflection,
  deepDiveCTA: DeepDiveCTA,
  projectNavigation: ProjectNavigation,
};
