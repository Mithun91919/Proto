export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseHighlight = {
  title: string;
  body: string;
};

export type CaseInsight = {
  label: string;
  title: string;
  body: string;
};

export type CaseHero = {
  mp4?: string;
  webm?: string;
  poster: string;
  aspect?: number;
  caption?: string;
};

export type CaseChapter = {
  number: string;
  title: string;
  intro?: string;
  body?: string[];
  highlights?: CaseHighlight[];
  insights?: CaseInsight[];
  visuals?: string[];
  callout?: string;
};

export type CaseStudy = {
  slug: string;
  /** Public product label — what kind of product this is. */
  label: string;
  /**
   * Internal product name. Optional supporting metadata only.
   * Omit when it adds no public value.
   */
  internalName?: string;
  org: string;
  timeframe: string;
  discipline: string;
  title: string;
  subtitle: string;
  story: string;
  hero?: CaseHero;
  contributions: string[];
  role: string;
  scope: string[];
  metrics: CaseMetric[];
  chapters: CaseChapter[];
  lessons: CaseInsight[];
};
