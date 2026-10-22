import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { caseStudyRobots } from "@/content/seo";

/**
 * A second version of About, written from the case studies rather than from
 * the older page: a claim, the evidence for it, how the work gets done, and
 * the question that is changing. No diagrams. Every fact here is on a case
 * study or on the résumé. Kept out of search while it is compared.
 */
export const metadata: Metadata = {
  title: "About",
  description: "Mithun Raju, senior UX designer in Bengaluru: platforms that replace several tools with one.",
  robots: caseStudyRobots,
};

const HABITS = [
  {
    title: "I start with the people doing the work.",
    body: "On the portfolio platform I ran three whiteboarding sessions of 12 people each before drawing a screen: who does what at each stage, where it hurts, and what to solve first.",
  },
  {
    title: "I make something to react to, early.",
    body: "A prototype teaches me more than a long discussion. I build mine in code with Cursor and Claude Code, so people react to something that behaves like the real thing.",
  },
  {
    title: "I stay a sprint ahead of the engineers.",
    body: "I worked a sprint ahead of three engineering teams, with a weekly review with each, so what I designed is what got built.",
  },
  {
    title: "I treat the words as design.",
    body: "I kept the platform’s names to common words, because one name for a thing is what lets two records be one.",
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
          <h1 className="display-title display-hero mt-4 max-w-[30ch] text-[var(--ink)]">
            I design the part where <span className="text-[var(--accent-deep)]">separate tools become one product</span>.
          </h1>
          <div className="ds-stagger mt-10 max-w-[60ch]">
            <p className="text-lg leading-8 text-[var(--ink-soft)]">
              I&apos;m Mithun, a senior UX designer in Bengaluru. For eleven years I have worked on the problem under
              most products: the work is spread across tools, screens and people, and nothing joins it up.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              At Walmart Global Tech I replaced four external tools with one platform, turned a set of API tools into
              one product, and co-led the redesign that made 139 tools easier to find.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[24ch] text-[var(--ink)]">How I work.</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {HABITS.map((h, i) => (
            <Reveal key={h.title} delay={80 + i * 60}>
              <h3 className="display-title text-[1.35rem] leading-snug text-[var(--ink)]">{h.title}</h3>
              <p className="mt-3 max-w-[46ch] text-[1.02rem] leading-8 text-[var(--ink-soft)]">{h.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[26ch] text-[var(--ink)]">
            What I am asking now that products act for people.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-[60ch] text-[1.05rem] leading-8 text-[var(--ink-soft)]">
            What is it for, who is accountable when it is wrong, and how does someone see what it did on their behalf.
            Those questions do not change when the screen does, and they are the ones I want to work on next.
          </p>
        </Reveal>
      </section>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[24ch] text-[var(--ink)]">
            Away from the laptop, I am still explaining things.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-[62ch] text-[1.05rem] leading-8 text-[var(--ink-soft)]">
            I travel, and I make short videos about the places I end up in: what is there, how it works, and what is
            worth knowing before you go. A reel is a harder brief than a case study. Thirty seconds, no scrolling back.
          </p>
        </Reveal>
      </section>

      <section id="contact" className="mt-24">
        <Reveal>
          <div className="ds-env-dark rounded-sm p-12 md:p-16">
            <h2 className="display-title display-section max-w-[30ch]">The work I want more of.</h2>
            <p className="mt-6 max-w-[58ch]" style={{ color: "var(--ds-dark-muted)" }}>
              Platforms where the hard part is how things connect, not how they look; screens full of dense information
              that has to end in a decision; and products where an AI acts for a person and has to explain what it did.
            </p>
            <div className="mt-8">
              <Link href="/resume" className="button button-primary">
                Résumé →
              </Link>
              <CopyEmail address="mithraj14@gmail.com" className="button button-secondary ml-3" />
              <a
                href="https://www.linkedin.com/in/mithunrajuk"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary ml-3"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
