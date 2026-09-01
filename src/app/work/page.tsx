import type { Metadata } from "next";
import Link from "next/link";
import { DotText } from "@/components/DotText";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { WorkFilters } from "@/components/WorkFilters";
import { getFeaturedProjects, getRangeProjects } from "@/content/projects";
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

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const more = getRangeProjects();

  return (
    <div className="work-page ds-scope mx-auto w-full max-w-[80rem] px-5 py-16 md:px-8 md:py-24">
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
          I&apos;ve worked across digital experiences, consumer products, commerce, enterprise software, and developer platforms. Over time, my work has moved from individual interfaces toward the workflows, information, and systems behind them.
        </p>
      </div>

      <section id="path" className="work-section ds-section-boundary">
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

      <section id="selected" className="work-section ds-section-boundary">
        <SectionHead
          eyebrow="Case studies"
          title="Selected work"
          lede="Filter by domain or by the type of work — every project on this page, not a curated sample."
        />

        <WorkFilters featured={featured} more={more} earlier={earlierWork} />
      </section>

      {/* Dark closing card — the same treatment used to close the
          homepage and /about, so the last thing on every main page reads
          as one consistent sign-off. */}
      <section className="work-section">
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
