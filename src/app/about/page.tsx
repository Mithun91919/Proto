import type { Metadata } from "next";
import Link from "next/link";
import { FullWidthStatement } from "@/components/design-system/FullWidthStatement";
import { GlyphSectionRow } from "@/components/design-system/GlyphSectionRow";
import {
  PhotoRow,
  type PhotoRowItem,
} from "@/components/design-system/PhotoRow";
import { SpecList } from "@/components/design-system/SpecList";
import type { MetricMarkName } from "@/components/design-system/dotPatterns";
import { Reveal } from "@/components/Reveal";

/**
 * About, in the person's own words. The text is set exactly as written; the
 * page only decides how it is laid out. Each part is a row: a dot glyph and
 * the heading on the left, the story on the right. The two lines worth
 * remembering are set as statements rather than body text, and the travel
 * section carries a row of photographs and one clip.
 */
export const metadata: Metadata = {
  title: "About",
  description:
    "Mithun Raju, a senior UX designer in Bengaluru: how design started, how I work with people, and what I explore.",
};

type Part = {
  heading: string;
  /** A glyph from the dot library, chosen for what it means (see `GLYPHS`). */
  glyph: MetricMarkName;
  /** Paragraphs in order. A `lead` paragraph is set larger, as the line to remember. */
  paragraphs: {
    text: string;
    lead?: boolean;
  }[];
  /** Replaces the paragraphs with a ruled list, for the qualifications. */
  education?: { label: string; value: string }[];
  /** A small visual under the row, from facts already in the text or résumé. */
  extra?: "places";
};

/** Travel photographs and one clip for the last part. Captions state only what is in the frame or is known. */
const TRAVEL: PhotoRowItem[] = [
  {
    kind: "image" as const,
    src: "/about/bamboo.jpg",
    alt: "Two people in kimonos, one pink and one red, standing in a bamboo grove",
    caption: "Arashiyama, Kyoto, Japan",
  },
  {
    kind: "image" as const,
    src: "/about/buddha.jpg",
    alt: "Two people standing in front of the Great Buddha, a large bronze statue, under a blue sky",
    caption: "The Great Buddha, Kamakura, Japan",
  },
  {
    kind: "clip" as const,
    mp4: "/about/light-show.mp4",
    poster: "/about/light-show.jpg",
    alt: "Two people sitting on the floor of an immersive light installation, with flowers projected around them, at teamLab in Japan",
    caption: "teamLab, Japan",
  },
  {
    kind: "image" as const,
    src: "/about/python.jpg",
    alt: "Mithun smiling in sunglasses with a large python around his shoulders, in Vietnam",
    caption: "A python around my shoulders, Vietnam",
  },
];

const PARTS: Part[] = [
  {
    heading: "It started with posters and a college magazine.",
    glyph: "ramp",
    paragraphs: [
      {
        text: "In college, I was the person designing posters for events and putting together the monthly magazine.",
      },
      {
        text: "I enjoyed making things look good, but I became curious about why some designs worked better than others. That curiosity took me from a degree in computer applications to a diploma in design.",
      },
      {
        text: "What started as an interest slowly became something I wanted to build a career around.",
      },
    ],
  },
  {
    heading: "Education.",
    glyph: "layers",
    paragraphs: [],
    education: [
      {
        label: "2014 – 2015",
        value:
          "Diploma in Graphic & Web Designing, Zee Institute of Creative Arts",
      },
      {
        label: "2011 – 2014",
        value:
          "Bachelor of Computer Applications, St. Claret College, Bengaluru",
      },
    ],
  },
  {
    heading: "I didn’t learn design alone.",
    glyph: "field",
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
    glyph: "modules",
    paragraphs: [
      {
        text: "I enjoy talking through ideas, exploring possibilities with others, and sharing work before it feels finished.",
      },
      {
        text: "I’m comfortable being challenged. Feedback and criticism often reveal something I hadn’t considered, and I’d rather discover that early than spend time perfecting the wrong idea.",
      },
      {
        text: "In my work, that means running workshops and watching people use things before they’re finished.",
      },
      {
        text: "For me, good design has always been a conversation, and it doesn’t stop at launch.",
        lead: true,
      },
    ],
  },
  {
    heading: "Away from work, I’m usually exploring something.",
    glyph: "ring",
    paragraphs: [
      {
        text: "I love discovering places through their food, culture, architecture, and people.",
      },
      {
        text: "I document some of those experiences through short videos. Partly because I enjoy sharing what I discover, and partly because I like having something to look back on.",
      },
      {
        text: "Sometimes it’s an interesting place. Sometimes it’s a small detail or story I hadn’t noticed before.",
      },
    ],
    extra: "places",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <div className="page-hero hero-in">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:gap-16">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="display-title display-hero mt-4 max-w-[18ch] text-[var(--ink)]">
              I learned design from{" "}
              <span className="text-[var(--accent-deep)]">
                the people around me
              </span>
              .
            </h1>
            <div className="ds-stagger mt-10 max-w-[48ch]">
              <p className="text-lg leading-8 text-[var(--ink)]">
                I’m Mithun, a senior UX designer based in Bengaluru.
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
                Today, I work on complex digital products, and the internal
                tools behind them, at Walmart Global Tech. But there’s more to
                how I got here than the projects on this site.
              </p>
              <p className="mt-6">
                <Link href="/work" className="button button-secondary">
                  See the work →
                </Link>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-sm border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mithun-raju.jpg"
                alt="Mithun Raju, smiling, wearing glasses and a dark blazer"
                width={1024}
                height={903}
                className="block h-auto w-[108%] max-w-none"
              />
            </figure>
          </Reveal>
        </div>
      </div>

      {PARTS.map((part) => (
        <section
          key={part.heading}
          className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14"
        >
          <GlyphSectionRow glyph={part.glyph} heading={part.heading}>
            {part.paragraphs.map((p, i) => (
              <Reveal key={p.text} delay={80 + i * 60}>
                {p.lead ? (
                  <FullWidthStatement bare>{p.text}</FullWidthStatement>
                ) : (
                  <p className="text-[1.08rem] leading-8 text-[var(--ink-soft)]">
                    {p.text}
                  </p>
                )}
              </Reveal>
            ))}
            {part.education ? (
              <Reveal delay={80}>
                <SpecList facts={part.education} />
              </Reveal>
            ) : null}
          </GlyphSectionRow>

          {part.extra === "places" ? (
            <Reveal delay={120}>
              <div className="mt-12">
                <PhotoRow items={TRAVEL} />
                <p className="mt-6 text-[0.95rem] text-[var(--ink-soft)]">
                  More on Instagram:{" "}
                  <a
                    href="https://www.instagram.com/the_humble_beee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-deep)] underline underline-offset-4"
                  >
                    @the_humble_beee ↗
                  </a>
                </p>
              </div>
            </Reveal>
          ) : null}
        </section>
      ))}

      <section id="contact" className="mt-24">
        <Reveal>
          <div className="ds-env-dark rounded-sm p-12 md:p-16">
            <h2 className="display-title display-section max-w-[30ch]">
              Say hello.
            </h2>
            <p
              className="mt-6 max-w-[58ch] text-[1.08rem] leading-8"
              style={{ color: "var(--ds-dark-muted)" }}
            >
              Whether it’s about design, something you’re building, or an
              interesting place you’ve discovered, I’d enjoy the conversation.
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
              <a
                href="mailto:mithraj14@gmail.com"
                className="button button-secondary"
              >
                Email →
              </a>
              <span
                className="ml-1 text-[0.95rem]"
                style={{ color: "var(--ds-dark-muted)" }}
              >
                mithraj14@gmail.com
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
