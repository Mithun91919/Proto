import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { caseStudyRobots } from "@/content/seo";

/**
 * A human version of About. The work page and the case studies explain the
 * work; this page says who the person is: how design started, how they work
 * with other people, and what they do away from it. Everything here is in the
 * person's own words. Kept out of search while it is compared.
 */
export const metadata: Metadata = {
  title: "About",
  description: "Mithun Raju, a designer in Bengaluru: how design started, how I work with people, and what I explore.",
  robots: caseStudyRobots,
};

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
            <p className="text-lg leading-8 text-[var(--ink-soft)]">I&apos;m Mithun, a designer in Bengaluru.</p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              The work I do is on the work pages. This page is about the person doing it.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[24ch] text-[var(--ink)]">How it started.</h2>
        </Reveal>
        <div className="mt-8 max-w-[62ch] space-y-5 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
          <Reveal delay={80}>
            <p>
              I was always drawn to making things on a screen. In college I made the posters for events and
              designed the monthly college magazine. I wanted to know how and why those things worked, so I started
              researching, and that took me from a computer applications degree to a diploma in design.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              People often say they are self-taught. I am not. I was taught and refined by a lot of mentors, the
              talented people I got to work with, and design became part of me through what I learned from them.
              I like to say so.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[24ch] text-[var(--ink)]">
            I think out loud, with other people.
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[62ch] space-y-5 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
          <Reveal delay={80}>
            <p>
              I am a vocal person. I like to talk an idea through and explore a new direction with other people, not
              build alone in a corner.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              I am not shy about showing my work or a half-formed idea, and I welcome feedback and criticism. That
              is how an idea gets better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section max-w-[24ch] text-[var(--ink)]">
            Away from work, I explore and document.
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[62ch] space-y-5 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
          <Reveal delay={80}>
            <p>
              I love culture, food, architecture and people, and I explore them wherever I go. I document what I
              find in short videos: partly to share it with other people, and partly so I have something to come
              back to.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>I speak English and Hindi comfortably, Kannada and Telugu a little, and Tamil a few words.</p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="mt-24">
        <Reveal>
          <div className="ds-env-dark rounded-sm p-12 md:p-16">
            <h2 className="display-title display-section max-w-[30ch]">Say hello.</h2>
            <p className="mt-6 max-w-[58ch]" style={{ color: "var(--ds-dark-muted)" }}>
              If something here made you want to talk, I would like that.
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
