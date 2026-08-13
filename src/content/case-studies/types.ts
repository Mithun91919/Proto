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
  org: string;
  timeframe: string;
  discipline: string;
  title: string;
  subtitle: string;
  story: string;
  contributions: string[];
  role: string;
  scope: string[];
  metrics: CaseMetric[];
  chapters: CaseChapter[];
  lessons: CaseInsight[];
};
