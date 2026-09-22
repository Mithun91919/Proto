import type { Metadata } from "next";
import { NoteCard } from "@/components/design-system/NoteCard";
import Link from "next/link";
import { DotText } from "@/components/DotText";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { WorkEntry } from "@/components/WorkEntry";
import { WorkCardGrid } from "@/components/WorkCardGrid";
import { ChapterProgress } from "@/components/design-system/ChapterProgress";
import { hasCaseStudyPage } from "@/content/case-study-routes";
import { getFeaturedProjects, getRangeProjects } from "@/content/projects";
import { Chip } from "@/components/design-system/primitives/Chip";
import {
  careerStages,
  currentStage,
  earlierWork,
} from "@/content/work-page";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products, platforms, and systems shaped across consumer experiences, enterprise software, and developer products — and how the work moved from interfaces to systems.",
};

const CHAPTERS = [
  { id: "path", label: "Path" },
  { id: "selected", label: "Selected work" },
  { id: "reflection", label: "Reflection" },
];

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const more = getRangeProjects();

  return (
    <div className="work-page ds-scope mx-auto w-full max-w-[80rem] px-5 py-16 md:px-8 md:py-24">
      <ChapterProgress chapters={CHAPTERS} />

      <div className="page-hero hero-in">
        <div style={{ position: "absolute", right: "2rem", top: "35%", transform: "translateY(-50%)", zIndex: 0, transition: "none", width: "180px", height: "180px", animation: "timeline-stage-reveal 0.4s ease-out both" }}>
          <DotText
            aspect={1}
            pitch={8}
            text="Hi"
            decorative
          />
        </div>
        <p className="eyebrow">Portfolio · 2015–present</p>
        <h1 className="display-title display-hero mt-4 max-w-[40ch] text-[var(--ink)]">
          11 years of product design, <span className="ds-muted-text">from consumer apps</span> to{" "}
          <span className="ds-accent-text">enterprise platforms</span>.
        </h1>
        <p className="lede mt-6" style={{ maxWidth: "84ch" }}>
          Consumer, commerce, enterprise, and developer products — at CREO, Hike, bigbasket, and Walmart Global Tech. The through-line is the same throughout: large systems, fragmented tools, and dense information, redesigned into products people can actually use. The work has moved from individual screens to the workflows and architecture behind them.
        </p>
      </div>

      <section id="path" className="work-section ds-section-boundary">
        <SectionHead
          eyebrow="Path"
          title="From screens to systems, one company at a time"
        />

        <Reveal delay={80}>
          <ol className="timeline">
            {careerStages.map((stage) => (
              <li key={stage.org} className="timeline-stage">
                <p className="timeline-year">{stage.year}</p>
                <div className="timeline-track" aria-hidden />
                <p className="timeline-org">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="timeline-logo" src={stage.logo} alt="" />
                  <span>{stage.org}</span>
                </p>
                <p className="timeline-word">{stage.stage}</p>
                <div className="timeline-detail">
                  <p className="timeline-body">{stage.body}</p>
                  <ul className="tag-list">
                    {stage.tags.map((tag) => (
                      <Chip as="li" key={tag}>
                        {tag}
                      </Chip>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={140}>
          <NoteCard
            label={currentStage.year}
            heading={currentStage.stage}
            body={currentStage.body}
            mark="AI"
            sparkle
          />
        </Reveal>
      </section>

      <section id="selected" className="work-section ds-section-boundary">
        <SectionHead
          eyebrow="Case studies"
          title="Selected work"
          lede="Every project on this page, not a curated sample — consumer, commerce, enterprise, and developer work."
        />

        {/* B4 minor boundary between entries rather than whitespace alone.
            Six full-width rows separated only by a 96px gap read as one
            continuous scroll; the hairline chunks them. Not on the first —
            the section head above it is already the boundary. The gap moves
            into padding so the line sits in the space rather than tight to
            the row that follows it. */}
        <div className="mt-12 flex flex-col md:mt-14">
          {[...featured, ...more].map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <div className={index > 0 ? "ds-section-boundary-minor pt-16 md:pt-24" : ""}>
                <WorkEntry project={project} reverse={index % 2 === 1} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="ds-section-boundary-minor mt-12 pt-7 md:mt-16 md:pt-8">
          <p className="eyebrow">Earlier work</p>
          <p className="body-text mt-2 max-w-[52ch]">
            Consumer product and brand work from before the enterprise projects.
          </p>
          <WorkCardGrid
            items={earlierWork.map((entry, index) => ({
              id: `${entry.org}-${index}`,
              number: entry.number,
              org: entry.org,
              body: entry.body,
              tags: entry.tags,
              image: entry.image,
              slug: hasCaseStudyPage(entry.slug) ? entry.slug : undefined,
            }))}
          />
        </div>
      </section>

      {/* Dark closing card — the same treatment used to close the
          homepage and /about, so the last thing on every main page reads
          as one consistent sign-off. */}
      <section id="reflection" className="work-section">
        <div className="ds-env-dark rounded-sm p-10 md:p-16">
          <SectionHead
            eyebrow="Reflection"
            title="The interfaces changed. The way I think about the work did too."
            dark
          />

          <Reveal delay={80}>
            <div className="mt-7 md:mt-8">
              <div className="grid gap-4 md:grid-cols-2 md:gap-10">
                <p className="body-text" style={{ color: "var(--ds-dark-muted)" }}>
                  I started closer to the interface — visual design, interaction,
                  and individual product experiences.
                </p>
                <p className="body-text" style={{ color: "var(--ds-dark-muted)" }}>
                  Over time, my work moved further into the systems underneath: how
                  information is structured, how workflows connect, how products
                  replace established ways of working, and how those decisions
                  survive implementation and real-world use.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="button button-primary">
                  Read my story →
                </Link>
                <Link href="/about#contact" className="button button-secondary">
                  Say hi →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
