/**
 * Content model for the modular case-study system.
 *
 * A project is an ordered list of typed `Section`s — the sequence is authored
 * per project (see `sections` on `CaseStudyV2`), never hardcoded in a
 * component. Different projects can compose entirely different section
 * sequences while sharing the same visual language.
 */

// ---- Shared primitives -----------------------------------------------

export type MediaRef = {
  mp4?: string;
  webm?: string;
  /** Unconverted source (e.g. a raw screen recording) — browser-sniffed, no format guarantee across browsers. */
  mov?: string;
  poster?: string;
  /** Still image, passed straight to MediaFrame. */
  src?: string;
  alt?: string;
  caption?: string;
  aspect?: number;
  /** Forces MediaFrame's "reconstructed" placeholder styling — never pretend a screenshot is real. */
  reconstructed?: boolean;
};

export type GridDensity = "visible" | "subtle" | "hidden";

/** Shared by every section so the shell can apply spacing/grid/anchor rules generically. */
export type SectionBase = {
  /** Anchor target for in-page navigation. */
  id?: string;
  eyebrow?: string;
  /** Per-section dot-grid override; defaults to "subtle". */
  grid?: GridDensity;
  /** Last-resort escape hatch — use sparingly. */
  className?: string;
};

// ---- The 17 section kinds ---------------------------------------------

export type CaseStudyHeroSection = SectionBase & {
  type: "hero";
  variant: "split" | "cinematic" | "comparison" | "device";
  headline: string;
  summary?: string;
  /** `comparison` variant needs two media refs; every other variant uses one. */
  media: MediaRef | { left: MediaRef; right: MediaRef };
};

export type EditorialSection = SectionBase & {
  type: "editorial";
  heading?: string;
  /** Paragraphs, rendered at the site's standing ~68ch reading width. */
  body: string[];
  /** Optional large breakout line, wider than the body column. */
  statement?: string;
  annotation?: string;
};

export type SplitTextMediaSection = SectionBase & {
  type: "splitTextMedia";
  ratio: "4/8" | "5/7" | "6/6" | "7/5";
  mediaSide: "left" | "right";
  heading?: string;
  body: string[];
  media: MediaRef;
};

export type FullWidthMediaSection = SectionBase & {
  type: "fullWidthMedia";
  media: MediaRef;
  caption?: string;
};

export type MediaPairSection = SectionBase & {
  type: "mediaPair";
  weighting: "35/65" | "40/60" | "50/50";
  a: MediaRef & { label?: string };
  b: MediaRef & { label?: string };
};

export type MediaSequenceStep = { media: MediaRef; label?: string };

export type MediaSequenceSection = SectionBase & {
  type: "mediaSequence";
  /** 2–4 steps, rendered as a full-bleed horizontal filmstrip. */
  steps: MediaSequenceStep[];
};

export type ProductMotionSection = SectionBase & {
  type: "productMotion";
  /** mp4/webm + poster expected. */
  media: MediaRef;
  caption?: string;
};

export type DiagramNode = { id: string; label: string; detail?: string };
export type DiagramEdge = { from: string; to: string; label?: string };

export type SystemDiagramSection = SectionBase & {
  type: "systemDiagram";
  style: "flow" | "nodes" | "before-after";
  heading?: string;
  nodes: DiagramNode[];
  edges?: DiagramEdge[];
};

export type BeforeAfterSection = SectionBase & {
  type: "beforeAfter";
  before: MediaRef & { label?: string };
  /** The "after" state always receives more visual weight. */
  after: MediaRef & { label?: string };
  body?: string;
};

export type DecisionComparisonSection = SectionBase & {
  type: "decisionComparison";
  optionA: { name: string; rationale: string };
  optionB: { name: string; rationale: string };
  decision?: "a" | "b" | "hybrid";
};

export type ProductMomentSection = SectionBase & {
  type: "productMoment";
  heading: string;
  /** 1–2 paragraphs. */
  body: string[];
  media: MediaRef;
};

export type MetricMomentSection = SectionBase & {
  type: "metricMoment";
  /** Can occupy the whole section alone. */
  dominant?: { value: string; label: string };
  /** 0–3 supporting metrics — not forced to always show three. */
  supporting?: { value: string; label: string }[];
  context?: string;
};

export type ScaleStripSection = SectionBase & {
  type: "scaleStrip";
  /** Scale figures (users, markets, modules) — kept visually separate from attributed outcomes. */
  scale: { value: string; label: string }[];
  outcomes: { value: string; label: string }[];
};

export type EditorialStatementSection = SectionBase & {
  type: "editorialStatement";
  statement: string;
  attribution?: string;
};

export type ReflectionSection = SectionBase & {
  type: "reflection";
  /** Defaults to "Reflection". */
  label?: string;
  heading: string;
  /** 1–3 paragraphs. */
  body: string[];
  conclusion: string;
};

export type DeepDiveCTASection = SectionBase & {
  type: "deepDiveCTA";
  heading: string;
  body?: string;
  href: string;
  cta: string;
};

export type ProjectNavigationSection = SectionBase & {
  type: "projectNavigation";
  /**
   * Usually omitted — the shell renders prev/next from the top-level
   * `CaseStudyV2` fields automatically. Only set these if a project wants
   * navigation placed mid-page instead of at the shell's usual spot.
   */
  previousProject?: { slug: string; label: string };
  nextProject?: { slug: string; label: string };
};

export type Section =
  | CaseStudyHeroSection
  | EditorialSection
  | SplitTextMediaSection
  | FullWidthMediaSection
  | MediaPairSection
  | MediaSequenceSection
  | ProductMotionSection
  | SystemDiagramSection
  | BeforeAfterSection
  | DecisionComparisonSection
  | ProductMomentSection
  | MetricMomentSection
  | ScaleStripSection
  | EditorialStatementSection
  | ReflectionSection
  | DeepDiveCTASection
  | ProjectNavigationSection;

// ---- Top-level project content -----------------------------------------

export type CaseDepth = "flagship" | "medium" | "compact" | "visualShowcase";

export type CaseStudyV2 = {
  slug: string;
  depth: CaseDepth;
  projectLabel: string;
  headline: string;
  summary: string;
  company: string;
  year: string;
  role: string;
  disciplines: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  heroMedia: MediaRef;
  /** Order is authored per project — never hardcoded by the renderer. */
  sections: Section[];
  deepDive?: { href: string; label: string };
  previousProject?: { slug: string; label: string };
  nextProject?: { slug: string; label: string };
  /** Project-level default for MediaFrame confidentiality mode. */
  reconstructed?: boolean;
  accent?: string;
  accentSoft?: string;
};
