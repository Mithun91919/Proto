import type { Metadata } from "next";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies across enterprise platforms, developer tools, and operational products.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-[70rem] px-5 py-16 md:px-8 md:py-24">
      <div className="hero-in">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display-title display-hero mt-4 text-[var(--ink)]">
          Selected work
        </h1>
        <p className="lede mt-6">
          Projects I led or co-led — organised around the problems they solved, with
          ownership shown clearly on each case study.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 70} variant="scale">
            <FeaturedWorkCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
