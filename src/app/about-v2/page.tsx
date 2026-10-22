import type { Metadata } from "next";
import Link from "next/link";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { caseStudyRobots } from "@/content/seo";

/**
 * About, in the person's own words. The text is set exactly as written; the
 * page only decides how it is laid out. Each part is a row: the heading on
 * the left, the story on the right, so a reader scans the headings and reads
 * what interests them. Kept out of search while it is compared with /about.
 */
export const metadata: Metadata = {
  title: "About",
  description: "Mithun Raju, a senior UX designer in Bengaluru: how design started, how I work with people, and what I explore.",
  robots: caseStudyRobots,
};

type Part = {
  heading: string;
  /** Paragraphs in order. A `lead` paragraph is set larger, as the line to remember. */
  paragraphs: { text: string; lead?: boolean; accent?: boolean }[];
};

const PARTS: Part[] = [
  {
    heading: "It started with posters and a college magazine.",
    paragraphs: [
      { text: "In college, I was the person designing posters for events and putting together the monthly magazine." },
      {
        text: "I enjoyed making things look good, but I became curious about why some designs worked better than others. That curiosity took me from a degree in computer applications to a diploma in design.",
      },
      { text: "What started as an interest slowly became something I wanted to build a career around." },
    ],
  },
  {
    heading: "I didn’t learn design alone.",
    paragraphs: [
      { text: "I don’t consider myself self-taught.", lead: true },
      {
        text: "I’ve been fortunate to work with mentors and talented people who challenged my thinking, shared what they knew, and helped me see things differently.",
      },
      {
        text: "A lot of what I know today came from those conversations and experiences. And I’m still learning from the people I work with.",
      },
    ],
  },
  {
    heading: "I think out loud.",
    paragraphs: [
      {
        text: "I enjoy talking through ideas, exploring possibilities with others, and sharing work before it feels finished.",
      },
      {
        text: "I’m comfortable being challenged. Feedback and criticism often reveal something I hadn’t considered, and I’d rather discover that early than spend time perfecting the wrong idea.",
      },
      { text: "For me, good design has always been a conversation.", lead: true, accent: true },
    ],
  },
  {
    heading: "Away from work, I’m usually exploring something.",
    paragraphs: [
      { text: "I love discovering places through their food, culture, architecture, and people." },
      {
        text: "I document some of those experiences through short videos. Partly because I enjoy sharing what I discover, and partly because I like having something to look back on.",
      },
      { text: "Sometimes it’s an interesting place. Sometimes it’s a small detail or story I hadn’t noticed before." },
    ],
  },
];

export default function AboutV2Page() {
  return (
    <div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <div className="page-hero hero-in">
        <HeroPortrait
          className="page-hero-backdrop"
          aspect={1}
          pitch={9}
          zoom={1.2}
          hoverScope=".page-hero"
          maxPhotoAlpha={0.3}
          label="Portrait of Mithun Raju as a halftone of falling dots; hover to see the photograph"
        />
        <Reveal>
          <p className="eyebrow">About</p>
          <h1 className="display-title display-hero mt-4 max-w-[26ch] text-[var(--ink)]">
            I learned design from <span className="text-[var(--accent-deep)]">the people around me</span>.
          </h1>
          <div className="ds-stagger mt-10 max-w-[58ch]">
            <p className="text-lg leading-8 text-[var(--ink)]">I’m Mithun, a senior UX designer based in Bengaluru.</p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              Today, I work on complex digital products at Walmart Global Tech. But there’s more to how I got here
              than the projects on this site.
            </p>
          </div>
        </Reveal>
      </div>

      {PARTS.map((part) => (
        <section key={part.heading} className="mt-20 ds-section-boundary pt-14 md:mt-24 md:pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] md:gap-16">
            <Reveal>
              <h2 className="display-title display-section text-[var(--ink)]">{part.heading}</h2>
            </Reveal>
            <div className="max-w-[58ch] space-y-5">
              {part.paragraphs.map((p, i) => (
                <Reveal key={p.text} delay={80 + i * 60}>
                  {p.lead ? (
                    <p
                      className="display-title text-[1.55rem] leading-snug"
                      style={{ color: p.accent ? "var(--accent-deep)" : "var(--ink)" }}
                    >
                      {p.text}
                    </p>
                  ) : (
                    <p className="text-[1.08rem] leading-8 text-[var(--ink-soft)]">{p.text}</p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="contact" className="mt-24">
        <Reveal>
          <div className="ds-env-dark rounded-sm p-12 md:p-16">
            <h2 className="display-title display-section max-w-[30ch]">Say hello.</h2>
            <p className="mt-6 max-w-[58ch] text-[1.08rem] leading-8" style={{ color: "var(--ds-dark-muted)" }}>
              Whether it’s about design, something you’re building, or an interesting place you’ve discovered, I’d
              enjoy the conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/resume" className="button button-primary">
                Résumé →
              </Link>
              <a
                href="https://www.linkedin.com/in/mithunrajuk"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                LinkedIn →
              </a>
              <a href="mailto:mithraj14@gmail.com" className="button button-secondary">
                Email →
              </a>
              <span className="ml-1 text-[0.95rem]" style={{ color: "var(--ds-dark-muted)" }}>
                mithraj14@gmail.com
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
