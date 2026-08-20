import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { DotText } from "@/components/DotText";
import { Reveal } from "@/components/Reveal";
import { WorkEntry } from "@/components/WorkEntry";
import { getFeaturedProjects, getRangeProjects } from "@/content/projects";
import {
  careerStages,
  currentStage,
  earlierWork,
} from "@/content/work-page";
import { Carousel } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products, platforms, and systems shaped across consumer experiences, enterprise software, and developer products — and how the work moved from interfaces to systems.",
};

/** One header shape for every section, so the page keeps a single rhythm. */
function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`section-head mt-3 ${lede ? "section-head-split" : ""}`}>
        <h2 className="section-head-title display-title display-section text-[var(--ink)]">
          {title}
        </h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </Reveal>
  );
}

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const more = getRangeProjects();

  return (
    <div className="work-page mx-auto w-full max-w-[70rem] px-5 py-16 md:px-8 md:py-24">
      <div className="page-hero hero-in">
        <div style={{ position: "absolute", right: "2rem", top: "35%", transform: "translateY(-50%)", zIndex: 0, transition: "none", width: "180px", height: "180px", animation: "timeline-stage-reveal 0.4s ease-out both" }}>
          <DotText
            aspect={1}
            pitch={8}
            text="Hi"
            decorative
          />
        </div>
        <p className="eyebrow">Portfolio</p>
        <h1 className="display-title display-hero mt-4 max-w-[40ch] text-[var(--ink)]">
          The problems got bigger. My role moved further upstream.
        </h1>
        <p className="lede mt-6" style={{ maxWidth: "84ch" }}>
          I've worked across digital experiences, consumer products, commerce, enterprise software, and developer platforms. Over time, my work has moved from individual interfaces toward the workflows, information, and systems behind them.
        </p>
      </div>

      <section id="path" className="work-section dot-rule">
        <SectionHead
          eyebrow="Path"
          title="How the work evolved"
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
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={140}>
          <div className="timeline-now">
            <div className="timeline-now-copy">
              <h3 className="timeline-now-title display-title">
                <span>{currentStage.year}</span>
                <span aria-hidden>—</span>
                {currentStage.stage}
              </h3>
              <p className="timeline-now-body">{currentStage.body}</p>
            </div>
            <span className="hero-chip timeline-now-mark display-title">AI</span>
          </div>
        </Reveal>
      </section>

      <section id="selected" className="work-section dot-rule">
        <SectionHead eyebrow="Case studies" title="Selected work" />

        <div className="mt-8 flex flex-col gap-12 md:mt-10 md:gap-16">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <WorkEntry project={project} layout="split" flush={index === 0} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 ? (
          <div className="dot-rule mt-12 pt-7 md:mt-16 md:pt-8">
            <p className="eyebrow">Additional work</p>
            <p className="body-text mt-2 max-w-[52ch]">
              Documented projects without the full case-study treatment.
            </p>
            <div className="mt-7 flex flex-col gap-12 md:mt-8">
              {more.map((project, index) => (
                <Reveal key={project.slug} delay={index * 70}>
                  <WorkEntry
                    project={project}
                    layout="stacked"
                    emphasis="quiet"
                    flush={index === 0}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section id="archive" className="work-section dot-rule">
        <SectionHead
          eyebrow="Archive"
          title="Earlier product work"
        />

        <Carousel
          items={earlierWork.map((entry, index) => ({
            id: `${entry.org}-${index}`,
            org: entry.org,
            body: entry.body,
            tags: entry.tags,
            image: entry.image,
            slug: entry.slug,
          }))}
        />
      </section>

      <section className="work-section dot-rule">
        <SectionHead
          eyebrow="Reflection"
          title="The interfaces changed. The way I think about the work did too."
        />

        <Reveal delay={80}>
          <div className="mt-7 md:mt-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-10">
              <p className="body-text">
                I started closer to the interface — visual design, interaction,
                and individual product experiences.
              </p>
              <p className="body-text">
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
      </section>
    </div>
  );
}
