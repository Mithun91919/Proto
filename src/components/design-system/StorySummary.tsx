import Image from "next/image";
import type { ReactNode } from "react";
import { getProject } from "@/content/projects";
import { ClipVideo } from "./ClipFigure";
import { DotNodes, type DotNode } from "./DotNodes";
import { Reveal } from "@/components/Reveal";
import { ResultsGrid, type ResultItem } from "./ResultsGrid";
import { ScrollStory, WhenInView, type StoryStep } from "./ScrollStory";
import { WhenActive } from "./SlideDeck";

/**
 * The pieces every scroll-story summary is made from, and the page that puts
 * them together. A project's own file holds only its words, its dots and its
 * screens; the opening, the pinned card and the results are laid out here, so
 * every project's summary behaves the same. See the design system, section N.
 */

/** A short list under a step's title, each point led by a dot. */
export function StoryPoints({ items }: { items: string[] }) {
  return (
    <ul className="ds-slide-points">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** The left half of a step: eyebrow, title and points. */
export function StoryWords({
  eyebrow,
  title,
  points,
}: {
  eyebrow: string;
  title: string;
  points: string[];
}) {
  return (
    <>
      <p className="eyebrow ds-slide-eyebrow">{eyebrow}</p>
      <h2 className="display-title ds-slide-lead mt-4">{title}</h2>
      <StoryPoints items={points} />
    </>
  );
}

/** A real screen, cropped to the top. `wide` keeps a 16:9 recording's own shape instead of the 4:3 crop. */
export function StoryScreen({
  src,
  alt,
  wide,
  width = 1920,
  height = 1080,
}: {
  src: string;
  alt: string;
  wide?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      className={`ds-slide-shot${wide ? " is-wide" : ""}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="55vw"
    />
  );
}

/**
 * A screen recording in place of a still. It is mounted only while its step is
 * showing, so one clip plays at a time and none plays behind a step that has
 * gone. It holds on its poster under reduced motion (ClipVideo does that).
 */
export function StoryClip({
  mp4,
  webm,
  poster,
  alt,
  width = 1920,
  height = 1104,
}: {
  mp4: string;
  webm?: string;
  poster: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <WhenActive>
      <ClipVideo className="ds-slide-shot is-wide" mp4={mp4} webm={webm} poster={poster} alt={alt} width={width} height={height} />
    </WhenActive>
  );
}

/**
 * A step whose picture is the dots alone, with at most one short note under
 * them saying what the dots stand for. The note sits under the diagram it
 * describes, not in the column of words.
 */
export function StoryDots({
  nodes,
  state,
  label,
  note,
  active,
}: {
  nodes: DotNode[];
  state: "scattered" | "connected";
  label: string;
  note?: string;
  /** Lights one dot, to mark a place in the sequence, as `DotNodes` does. */
  active?: number;
}) {
  return (
    <div className="ds-slide-visual">
      <DotNodes nodes={nodes} state={state} label={label} active={active} />
      {note ? <p className="ds-slide-dots-note">{note}</p> : null}
    </div>
  );
}

/** The right half of a step: the dots over a real screen. */
export function StoryVisual({ dots, children }: { dots: ReactNode; children: ReactNode }) {
  return (
    <div className="ds-slide-visual">
      {dots}
      {children}
    </div>
  );
}

export function StorySummary({
  slug,
  title,
  standfirst,
  introAlt,
  steps,
  storyLabel,
  results,
}: {
  slug: string;
  title: string;
  standfirst: string;
  /** Describes the card's own clip in the opening. */
  introAlt: string;
  steps: StoryStep[];
  storyLabel: string;
  results: { title: string; points: string[]; items: ResultItem[] };
}) {
  const project = getProject(slug);

  return (
    <>
      {/* One dark band, the hero's own, holds the opening and the whole pinned
          story, so the screens, which are light interfaces, stand out against
          it. The page turns light after it, for the results. */}
      <div className="ds-pull ds-stage ds-stage-story">
        <section className="ds-story-intro">
          <div className="ds-pull-inner">
            <div className="ds-story-intro-center">
              <Reveal>
                <span className="ds-pull-dots" aria-hidden />
                <p className="eyebrow ds-slide-eyebrow">Summary</p>
                <h1 className="display-title mt-4" style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.2rem)", lineHeight: 1.04 }}>
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="ds-slide-detail">{standfirst}</p>
                {project ? (
                  <dl className="ds-slide-meta">
                    <div>
                      <dt className="ds-eyebrow">Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt className="ds-eyebrow">Years</dt>
                      <dd>{project.timeframe}</dd>
                    </div>
                    <div>
                      <dt className="ds-eyebrow">Where</dt>
                      <dd>{project.org}</dd>
                    </div>
                  </dl>
                ) : null}
              </Reveal>
              {project?.media ? (
                <Reveal delay={240} variant="scale">
                  <ClipVideo
                    className="ds-slide-video"
                    mp4={project.media.mp4}
                    webm={project.media.webm}
                    poster={project.media.poster}
                    alt={introAlt}
                    width={1600}
                    height={1046}
                  />
                </Reveal>
              ) : null}
            </div>
            <a href="#story" className="ds-story-cue">
              <span>Scroll</span>
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden>
                <path d="M6 1v13M1.5 9.5 6 14l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        <section id="story" className="ds-story-section">
          <ScrollStory steps={steps} label={storyLabel} />
        </section>
      </div>

      <section className="ds-story-results">
        <div className="ds-slide-grid">
          <div>
            <Reveal>
              <p className="eyebrow ds-slide-eyebrow">What changed</p>
              <h2 className="display-title ds-slide-lead mt-4">{results.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <StoryPoints items={results.points} />
            </Reveal>
          </div>
          <WhenInView minHeight="22rem">
            <ResultsGrid items={results.items} />
          </WhenInView>
        </div>
      </section>
    </>
  );
}
