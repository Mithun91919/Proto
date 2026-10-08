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
  CAREER_START,
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
        <p className="eyebrow">Portfolio · {CAREER_START}–present</p>
        <h1 className="display-title display-hero mt-4 max-w-[40ch] text-[var(--ink)]">
          {new Date().getFullYear() - CAREER_START} years of product design, <span className="ds-muted-text">from consumer apps</span> to{" "}
          <span className="ds-accent-text">enterprise platforms</span>.
        </h1>
        <p className="lede mt-6" style={{ maxWidth: "84ch" }}>
          Consumer, commerce, enterprise and developer products, at CREO, Hike, bigbasket and Walmart Global Tech. The same problem runs through all of it: too many tools, too much information, and no clear way through. I redesign them into products people can finish their work in. Over time I have moved from designing single screens to designing the workflows behind them.
        </p>
      </div>

      <section id="path" className="work-section ds-section-boundary">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div className="min-w-0">
            <SectionHead
              eyebrow="Path"
              title="Four companies, and the work got bigger each time"
            />
          </div>
          <Reveal delay={120}>
            <a
              href="https://www.linkedin.com/in/mithunrajuk"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              LinkedIn ↗
            </a>
          </Reveal>
        </div>

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
                <p className="timeline-role">{stage.title}</p>
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
          lede="The four I would start with, then the earlier work — consumer, commerce, enterprise, and developer."
        />

        {/* The gap carries half the separation and the boundary's own top
            padding carries the other half, so the rule lands in the middle
            of the space rather than hugging the row above it — which is
            what made the first attempt at a divider read as a stray line.
            B4 major, not minor: the dot cluster anchors it at the left
            edge so it reads as a deliberate mark rather than a hairline
            that ran out. Not on the first row; the section head is already
            its boundary. */}
        <div className="mt-12 flex flex-col gap-20 md:mt-14 md:gap-28">
          {[...featured, ...more].map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <div className={index > 0 ? "ds-section-boundary pt-20 md:pt-28" : ""}>
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
                  Over time, my work moved from the screens to what sits underneath them: how information is organised, how steps connect, how a new product replaces the way people already work, and whether the design survives being built.
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
