import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { getCaseStudy } from "@/content/case-studies";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = getProject(slug);
  if (!study || !project) return {};
  return {
    title: `${project.label} — ${study.title}`,
    description: study.subtitle,
    openGraph: {
      title: `${project.label} — ${study.title}`,
      description: study.subtitle,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = getProject(slug);
  if (!study || !project) notFound();

  const { next } = getAdjacentProjects(slug);

  return <CaseStudyView study={study} project={project} next={next} />;
}
