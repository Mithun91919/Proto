import Link from "next/link";
import type { CSSProperties } from "react";
import type { CaseStudy } from "@/content/case-studies";
import type { Project } from "@/content/projects";
import { MediaFrame } from "@/components/MediaFrame";
import { ProjectHero } from "@/components/ProjectHero";
import { Reveal } from "@/components/Reveal";

function ChapterNav({ chapters }: { chapters: CaseStudy["chapters"] }) {
  return (
    <nav
      aria-label="Chapters"
      className="glass-panel sticky top-[4.5rem] z-20 -mx-5 mb-10 overflow-x-auto px-5 py-3 md:mx-0 md:rounded-full"
    >
      <ul className="flex min-w-max gap-2">
        {chapters.map((chapter) => (
          <li key={chapter.number}>
            <a
              href={`#chapter-${chapter.number}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition duration-200 hover:bg-white hover:text-[var(--ink)] active:scale-[0.98]"
            >
              <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em]">
                {chapter.number}
              </span>
              <span className="max-w-[10rem] truncate">{chapter.title}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            href="#reflection"
            className="inline-flex rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition duration-200 hover:bg-white hover:text-[var(--ink)]"
          >
            Reflection
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function CaseStudyView({
  study,
  project,
  next,
}: {
  study: CaseStudy;
  project: Project;
  next?: Project;
}) {
  const headline = (
    <>
      <p className="eyebrow">{study.label}</p>
      <h1 className="display-title display-hero mt-4 max-w-[26ch] text-[var(--ink)]">
        {study.title}
      </h1>
      <p className="lede mt-6 max-w-[52ch]">{study.subtitle}</p>
      <p className="mt-5 text-sm text-[var(--muted)]">
        {study.org} · {study.timeframe} · {study.discipline}
      </p>
      {study.internalName ? (
        <p className="mt-3 text-xs tracking-wide text-[var(--muted)]">
          Internally known as {study.internalName}
        </p>
      ) : null}
    </>
  );

  return (
    <article
      style={
        {
          "--accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      {study.hero ? (
        <section className="case-hero">
          {/* Decorative here: the title over it already names the work. */}
          <div className="case-hero-backdrop" aria-hidden="true">
            <ProjectHero
              mp4={study.hero.mp4}
              webm={study.hero.webm}
              poster={study.hero.poster}
            />
          </div>
          <div className="case-hero-back mx-auto w-full max-w-[70rem] px-5 md:px-8">
            <Link
              href="/work"
              className="inline-flex text-base font-semibold transition hover:translate-x-[-2px]"
            >
              ← All Work
            </Link>
          </div>
          <header className="case-hero-copy hero-in mx-auto w-full max-w-[70rem] px-5 md:px-8">
            {headline}
          </header>
        </section>
      ) : (
        <>
          <div className="mx-auto w-full max-w-[70rem] px-5 pt-8 md:px-8">
            <Link
              href="/work"
              className="inline-flex text-sm font-medium text-[var(--muted)] transition hover:translate-x-[-2px] hover:text-[var(--ink)]"
            >
              ← All Work
            </Link>
          </div>
          <header className="hero-in mx-auto w-full max-w-[70rem] px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
            {headline}
          </header>
        </>
      )}

      <section className="border-y border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-16">
          <Reveal>
            <p className="eyebrow">The story</p>
            <p className="body-text mt-4">{study.story}</p>

            <p className="mt-10 text-sm font-medium text-[var(--muted)]">
              My contributions
            </p>
            <ul className="mt-4 space-y-3">
              {study.contributions.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-[var(--accent)] pl-4 text-[1.02rem] leading-7 text-[var(--ink-soft)] transition duration-300 hover:border-[var(--accent-deep)] hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale" delay={120}>
            <aside className="glass-panel h-fit p-6">
              <dl className="space-y-5">
                {[
                  ["Role", study.role],
                  ["Client", study.org],
                  ["Year", study.timeframe],
                  ["Discipline", study.discipline],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm text-[var(--muted)]">{label}</dt>
                    <dd className="mt-1 font-medium text-[var(--ink)]">{value}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-sm text-[var(--muted)]">Scope</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {study.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-[0.7rem] border border-[var(--line)] bg-white px-3 py-1 text-sm text-[var(--ink-soft)]"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>

        <div className="mx-auto grid w-full max-w-[70rem] gap-4 px-5 pb-14 sm:grid-cols-3 md:px-8">
          {study.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 90} variant="scale">
              <div className="glass-panel glass-card px-5 py-6 hover:-translate-y-1">
                <p className="metric-value text-[1.75rem] md:text-[2rem]">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-[46rem] px-5 py-14 md:px-8 md:py-20">
        <ChapterNav chapters={study.chapters} />

        <div className="space-y-20">
          {study.chapters.map((chapter) => (
            <Reveal key={chapter.number}>
              <section
                id={`chapter-${chapter.number}`}
                className="scroll-mt-36"
              >
                <p className="text-sm font-medium text-[var(--muted)]">
                  Chapter {chapter.number}
                </p>
                <h2 className="display-title display-statement mt-3 text-[var(--ink)]">
                  {chapter.title}
                </h2>

                {chapter.intro ? (
                  <p className="body-text mt-5 text-[var(--ink)]">{chapter.intro}</p>
                ) : null}

                {chapter.body?.map((paragraph) => (
                  <p key={paragraph} className="body-text mt-5">
                    {paragraph}
                  </p>
                ))}

                {chapter.callout ? (
                  <blockquote className="mt-8 rounded-[1rem] border border-[var(--line)] border-l-4 border-l-[var(--accent-deep)] bg-[color-mix(in_oklab,var(--accent)_22%,white)] px-5 py-4 text-xl leading-relaxed text-[var(--ink)]">
                    {chapter.callout}
                  </blockquote>
                ) : null}

                {chapter.highlights ? (
                  <div className="mt-8 grid gap-4">
                    {chapter.highlights.map((item, index) => (
                      <Reveal key={item.title} delay={index * 70}>
                        <div className="glass-panel glass-card p-5 hover:-translate-y-0.5">
                          <h3 className="text-lg font-semibold text-[var(--ink)]">
                            {item.title}
                          </h3>
                          <p className="mt-2 leading-7 text-[var(--ink-soft)]">
                            {item.body}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                ) : null}

                {chapter.insights ? (
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {chapter.insights.map((item, index) => (
                      <Reveal key={item.title} delay={index * 70} variant="scale">
                        <div className="glass-panel glass-card p-5 hover:-translate-y-0.5">
                          <p className="eyebrow">{item.label}</p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">
                            {item.title}
                          </h3>
                          <p className="mt-2 leading-7 text-[var(--ink-soft)]">
                            {item.body}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                ) : null}

                {chapter.visuals?.map((visual) => (
                  <MediaFrame key={visual}>
                    <p>{visual}</p>
                  </MediaFrame>
                ))}
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section id="reflection" className="scroll-mt-36">
              <p className="text-sm font-medium text-[var(--muted)]">Reflection</p>
              <h2 className="display-title display-statement mt-3 text-[var(--ink)]">
                What I learned
              </h2>
              <div className="mt-8 grid gap-4">
                {study.lessons.map((lesson, index) => (
                  <Reveal key={lesson.title} delay={index * 80}>
                    <div className="glass-panel glass-card p-6 hover:-translate-y-0.5">
                      <h3 className="text-xl font-semibold text-[var(--ink)]">
                        {lesson.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--ink-soft)]">
                        {lesson.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <aside className="glass-panel p-5 text-sm leading-7 text-[var(--ink-soft)]">
            Visuals, names, and selected figures are reconstructed or generalised
            where needed to protect confidential information while preserving the
            original design problem, decisions, and interaction model.
          </aside>

          {next ? (
            <Reveal variant="scale">
              <section className="border-t border-[var(--line)] pt-10">
                <p className="text-sm font-medium text-[var(--muted)]">
                  Next case study
                </p>
                <Link
                  href={`/work/${next.slug}`}
                  className="glass-panel glass-card group mt-4 block p-6 hover:-translate-y-1 md:p-8"
                >
                  <p className="eyebrow">{next.label}</p>
                  <h3 className="display-title display-sub mt-2 text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                    {next.title}
                  </h3>
                  <p className="body-sm mt-3">{next.outcome}</p>
                  <p className="mt-6 text-sm font-semibold text-[var(--accent-deep)] transition-transform duration-300 group-hover:translate-x-1">
                    Read case study →
                  </p>
                </Link>
              </section>
            </Reveal>
          ) : null}
        </div>
      </div>
    </article>
  );
}
