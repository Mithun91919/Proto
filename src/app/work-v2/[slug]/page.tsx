import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-v2/CaseStudyPage";
import { caseStudiesV2, getCaseStudyV2 } from "@/content/case-study-v2";

/**
 * Preview route for the new modular case-study system — unlinked from site
 * navigation. Proves the section registry against four depth variants
 * (flagship/medium/compact/visualShowcase) using placeholder content only.
 * The 6 live case studies keep rendering through the existing
 * /work/[slug] + CaseStudyView pipeline, untouched.
 */

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudiesV2.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyV2(slug);
  if (!study) return {};
  return {
    title: `${study.projectLabel} — ${study.headline}`,
    description: study.summary,
  };
}

export default async function CaseStudyV2Page({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyV2(slug);
  if (!study) notFound();

  return <CaseStudyPage study={study} />;
}
