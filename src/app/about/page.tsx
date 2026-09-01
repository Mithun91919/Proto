import type { Metadata } from "next";
import Link from "next/link";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mithun Raju — product designer focusing on systems, complex workflows, and making ideas tangible.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      {/* Hero Section */}
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
          <h1 className="display-title display-hero mt-4 max-w-[36ch] text-[var(--ink)]">
            I design products by understanding <span className="text-[var(--accent-deep)]">the systems behind them</span>.
          </h1>
          <div className="mt-10 max-w-[60ch]">
            <p className="text-lg leading-8 text-[var(--ink-soft)]">
              I&apos;m Mithun, a product designer based in Bengaluru.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              I started my career in visual and interaction design, then moved through consumer products, commerce, and enterprise platforms as the problems I worked on became larger and more interconnected.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              Today, I work at the intersection of product design, technology, and systems thinking — turning complex workflows and fragmented tools into products that feel clear and useful.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Section: I started with the interface */}
      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            I started with the interface. The questions kept getting bigger.
          </h2>
        </Reveal>

        {/* Text + diagram in a two-column layout on desktop */}
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:gap-12">

          {/* Left: narrative paragraphs + key statement */}
          <div className="flex-1 space-y-6 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
            <Reveal delay={80}>
              <p>
                Early in my career, I was focused on the details of the interface — typography, composition, interaction, and how something felt to use.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p>
                Consumer products pushed me to think beyond individual screens and into journeys, behaviour, and product decisions.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p>
                Commerce introduced another layer: customer experiences were connected to delivery, fulfilment, and the people operating on the other side of the product.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p>
                Enterprise software expanded that thinking again. Products were now connected to workflows, data, permissions, other tools, and entire organisations.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="pt-2 text-[1.15rem] font-medium leading-8 text-[var(--ink)]">
                Over time, I became less interested in designing isolated screens and more interested in understanding the system behind them.
              </p>
            </Reveal>
          </div>

          {/* Right: diamond progression diagram */}
          <Reveal delay={280} className="shrink-0 md:pt-2">
            <svg
              viewBox="0 0 310 325"
              width="300"
              height="315"
              role="img"
              aria-label="Career progression: Interface → Product → Workflow → System"
              style={{ overflow: "visible" }}
            >
              <title>Interface → Product → Workflow → System</title>

              {/* Connecting lines (rendered behind nodes) */}
              <line x1="155" y1="50" x2="50" y2="155" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 4" />
              <line x1="155" y1="50" x2="260" y2="155" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 4" />
              <line x1="50" y1="155" x2="155" y2="260" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 4" />
              <line x1="260" y1="155" x2="155" y2="260" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 4" />

              {/* ── Interface — top (screen / UI frame) ── */}
              <g transform="translate(155, 50)">
                <polygon points="0,-28 28,0 0,28 -28,0" fill="var(--paper)" stroke="var(--accent-deep)" strokeWidth="1.5" />
                <rect x="-11" y="-9" width="22" height="13" rx="2" fill="none" stroke="var(--accent-deep)" strokeWidth="1.3" />
                <line x1="-4" y1="4" x2="4" y2="4" stroke="var(--accent-deep)" strokeWidth="1.3" />
                <line x1="0" y1="4" x2="0" y2="8" stroke="var(--accent-deep)" strokeWidth="1.3" />
              </g>
              <text x="155" y="92" textAnchor="middle" fontSize="8.5" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>INTERFACE</text>
              <text x="155" y="106" textAnchor="middle" fontSize="7" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", opacity: 0.6 }}>Screens &amp; Interactions</text>

              {/* ── Product — left (end-to-end path arrow) ── */}
              <g transform="translate(50, 155)">
                <polygon points="0,-28 28,0 0,28 -28,0" fill="var(--paper)" stroke="var(--accent)" strokeWidth="1.5" />
                {/* Path: dot → curved line → arrowhead */}
                <circle cx="-8" cy="-2" r="2.5" fill="var(--accent)" />
                <path d="M-5.5,-2 C0,-2 2,6 7,4" fill="none" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" />
                <polyline points="4,1 7,4 4.5,7" fill="none" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <text x="50" y="197" textAnchor="middle" fontSize="8.5" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>PRODUCT</text>
              <text x="50" y="211" textAnchor="middle" fontSize="7" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", opacity: 0.6 }}>End to End Experience</text>

              {/* ── Workflow — right (stacked tasks / checklist) ── */}
              <g transform="translate(260, 155)">
                <polygon points="0,-28 28,0 0,28 -28,0" fill="var(--paper)" stroke="var(--accent)" strokeWidth="1.5" />
                {/* Three rows: checkbox + line */}
                <rect x="-10" y="-9" width="5" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                <line x1="-3" y1="-6.5" x2="8" y2="-6.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="-10" y="-2" width="5" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                <line x1="-3" y1="0.5" x2="8" y2="0.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="-10" y="5" width="5" height="5" rx="1" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                <line x1="-3" y1="7.5" x2="8" y2="7.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
              </g>
              <text x="260" y="197" textAnchor="middle" fontSize="8.5" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>WORKFLOW</text>
              <text x="260" y="211" textAnchor="middle" fontSize="7" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", opacity: 0.6 }}>Tasks &amp; Information</text>

              {/* ── System — bottom (hub-and-spoke: people, tools, data) ── */}
              <g transform="translate(155, 260)">
                <polygon points="0,-28 28,0 0,28 -28,0" fill="var(--paper)" stroke="var(--accent-deep)" strokeWidth="1.5" />
                {/* Central hub */}
                <circle cx="0" cy="0" r="3" fill="var(--accent-deep)" />
                {/* 4 spokes at 45° */}
                <line x1="0" y1="0" x2="8" y2="-8" stroke="var(--accent-deep)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="0" y1="0" x2="8" y2="8" stroke="var(--accent-deep)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="0" y1="0" x2="-8" y2="8" stroke="var(--accent-deep)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="0" y1="0" x2="-8" y2="-8" stroke="var(--accent-deep)" strokeWidth="1.2" strokeLinecap="round" />
                {/* Endpoint nodes */}
                <circle cx="8" cy="-8" r="2.2" fill="none" stroke="var(--accent-deep)" strokeWidth="1.2" />
                <circle cx="8" cy="8" r="2.2" fill="none" stroke="var(--accent-deep)" strokeWidth="1.2" />
                <circle cx="-8" cy="8" r="2.2" fill="none" stroke="var(--accent-deep)" strokeWidth="1.2" />
                <circle cx="-8" cy="-8" r="2.2" fill="none" stroke="var(--accent-deep)" strokeWidth="1.2" />
              </g>
              <text x="155" y="302" textAnchor="middle" fontSize="8.5" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>SYSTEM</text>
              <text x="155" y="316" textAnchor="middle" fontSize="7" fill="var(--muted)" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", opacity: 0.6 }}>People, Tools &amp; Data</text>
            </svg>
          </Reveal>

        </div>
      </section>

      {/* Section: Making complex things understandable */}
      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            I like making complex things understandable — and tangible.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:gap-16">

          {/* Left: network diagram */}
          <Reveal delay={80} className="shrink-0">
            <svg
              viewBox="0 0 400 400"
              width="300"
              height="300"
              role="img"
              aria-label="Design process diagram: Complexity → Design → Clarity, Structure, Tangible"
              style={{ overflow: "visible" }}
            >
              <title>Complexity → Structure → Clarity → Tangible via Design</title>

              {/* ── Lines rendered first (behind nodes) ── */}

              {/* Accent lines: from Clarity (top) */}
              <line x1="200" y1="65" x2="60" y2="210" stroke="var(--accent)" strokeWidth="1.4" />
              <line x1="200" y1="65" x2="340" y2="210" stroke="var(--accent)" strokeWidth="1.4" />
              <line x1="200" y1="65" x2="200" y2="185" stroke="var(--accent)" strokeWidth="1.4" />

              {/* Accent-deep lines: Design (center) connections */}
              <line x1="200" y1="185" x2="60" y2="210" stroke="var(--accent-deep)" strokeWidth="1.4" />
              <line x1="200" y1="185" x2="340" y2="210" stroke="var(--accent-deep)" strokeWidth="1.4" />
              <line x1="60" y1="210" x2="340" y2="210" stroke="var(--accent-deep)" strokeWidth="1.4" />

              {/* Muted lines: to Tangible (bottom) */}
              <line x1="60" y1="210" x2="200" y2="355" stroke="var(--ink-soft)" strokeWidth="1.4" opacity="0.35" />
              <line x1="340" y1="210" x2="200" y2="355" stroke="var(--ink-soft)" strokeWidth="1.4" opacity="0.35" />
              <line x1="200" y1="185" x2="200" y2="355" stroke="var(--ink-soft)" strokeWidth="1.4" opacity="0.35" />

              {/* ── Node dots ── */}
              <circle cx="200" cy="65"  r="6" fill="var(--ink)" />
              <circle cx="60"  cy="210" r="6" fill="var(--ink)" />
              <circle cx="340" cy="210" r="6" fill="var(--ink)" />
              <circle cx="200" cy="355" r="6" fill="var(--ink)" />
              <circle cx="200" cy="185" r="6" fill="var(--ink)" />

              {/* ── Labels ── */}
              <text x="200" y="44"  textAnchor="middle" fontSize="13" fill="var(--ink-soft)" style={{ fontFamily: "var(--font-sans)" }}>Clarity</text>
              <text x="60"  y="238" textAnchor="middle" fontSize="13" fill="var(--ink-soft)" style={{ fontFamily: "var(--font-sans)" }}>Complexity</text>
              <text x="340" y="238" textAnchor="middle" fontSize="13" fill="var(--ink-soft)" style={{ fontFamily: "var(--font-sans)" }}>Structure</text>
              <text x="200" y="384" textAnchor="middle" fontSize="13" fill="var(--ink-soft)" style={{ fontFamily: "var(--font-sans)" }}>Tangible</text>
              <text x="212" y="181" textAnchor="start"  fontSize="13" fill="var(--ink-soft)" style={{ fontFamily: "var(--font-sans)" }}>Design</text>
            </svg>
          </Reveal>

          {/* Right: text */}
          <div className="flex-1 space-y-6 text-[1.05rem] leading-8 text-[var(--ink-soft)]">
            <Reveal delay={120}>
              <p>
                A lot of the problems I work on don&apos;t begin with a clean product brief. They often start with fragmented workflows, technical constraints, disconnected products, or information that people can see but don&apos;t know how to act on.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p>
                I like finding the structure underneath that complexity and making ideas tangible early — through flows, prototypes, information models, or functional experiences that people can actually react to.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p>
                As products evolve beyond traditional screens into automation and AI-assisted interactions, the surface may change, but the core design questions remain the same.
              </p>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Section: Three Principles */}
      <section className="mt-24 ds-section-boundary pt-16">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            A few principles I keep coming back to.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {/* Principle 1 — Understand */}
          <Reveal delay={80}>
            <div className="border-t border-[var(--line)] pt-8">
              {/* Magnifying glass with inner cross — "look deeper" */}
              <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{ overflow: "visible" }}>
                <circle cx="16" cy="16" r="11" fill="none" stroke="var(--accent-deep)" strokeWidth="1.8" />
                <line x1="24" y1="24" x2="33" y2="33" stroke="var(--accent-deep)" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="11" y1="16" x2="21" y2="16" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="16" y1="11" x2="16" y2="21" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <h3 className="display-title mt-5 text-[1.05rem] font-semibold leading-snug text-[var(--ink)]">
                Understand before simplifying.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-7 text-[var(--ink-soft)]">
                Complexity isn&apos;t always something to remove. First, I want to understand why it exists and which parts actually matter.
              </p>
            </div>
          </Reveal>

          {/* Principle 2 — Make tangible */}
          <Reveal delay={160}>
            <div className="border-t border-[var(--line)] pt-8">
              {/* Dashed wireframe with inner layout — "prototype" */}
              <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{ overflow: "visible" }}>
                <rect x="3" y="4" width="34" height="32" rx="3" fill="none" stroke="var(--accent-deep)" strokeWidth="1.6" strokeDasharray="3.5 2" />
                <rect x="7" y="8" width="26" height="11" rx="1.5" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
                <line x1="7" y1="24" x2="22" y2="24" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="7" y1="29" x2="16" y2="29" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <h3 className="display-title mt-5 text-[1.05rem] font-semibold leading-snug text-[var(--ink)]">
                Make ideas tangible early.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-7 text-[var(--ink-soft)]">
                A prototype people can react to usually teaches me more than a long discussion about what might work.
              </p>
            </div>
          </Reveal>

          {/* Principle 3 — Stay close */}
          <Reveal delay={240}>
            <div className="border-t border-[var(--line)] pt-8">
              {/* App screen with checkmark — "what actually ships" */}
              <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" style={{ overflow: "visible" }}>
                <rect x="6" y="4" width="28" height="32" rx="2.5" fill="none" stroke="var(--accent-deep)" strokeWidth="1.7" />
                <line x1="6" y1="11" x2="34" y2="11" stroke="var(--accent-deep)" strokeWidth="1.4" />
                <circle cx="20" cy="8" r="1.5" fill="var(--accent-deep)" />
                <polyline points="13,22 18,27 28,17" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="display-title mt-5 text-[1.05rem] font-semibold leading-snug text-[var(--ink)]">
                Stay close to what ships.
              </h3>
              <p className="mt-3 text-[0.9rem] leading-7 text-[var(--ink-soft)]">
                The experience people eventually use matters more than the design file that preceded it.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* CTA Section — dark closing card, matching the same treatment used
          to close /work and the homepage. "A little more" used to be its
          own section right above this — folded in here instead, since it
          was really the same closing moment split across two consecutive
          blocks rather than a distinct part of the page. */}
      <section className="mt-24">
        <Reveal>
          <div className="ds-env-dark rounded-sm p-12 md:p-16">
            <h2 className="display-title display-section max-w-[30ch]">
              Have a complicated product problem?
            </h2>
            <div className="mt-8">
              <Link href="mailto:mithraj14@gmail.com" className="button button-primary">
                Say hi →
              </Link>
            </div>

            <div
              className="mt-14 grid gap-8 pt-10 sm:grid-cols-3"
              style={{ borderTop: "1px solid rgba(234, 243, 245, 0.14)" }}
            >
              <div>
                <p className="eyebrow" style={{ color: "var(--ds-mint)" }}>
                  Based in
                </p>
                <p className="mt-2 text-lg" style={{ color: "var(--ds-dark-ink)" }}>
                  Bengaluru, India
                </p>
              </div>

              <div>
                <p className="eyebrow" style={{ color: "var(--ds-mint)" }}>
                  Currently
                </p>
                <p className="mt-2 text-lg" style={{ color: "var(--ds-dark-ink)" }}>
                  Senior UX Designer · Walmart Global Tech
                </p>
              </div>

              <div>
                <p className="eyebrow" style={{ color: "var(--ds-mint)" }}>
                  Elsewhere
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {/* TODO: Add résumé URL when ready */}
                  {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold transition hover:translate-x-1" style={{ color: "var(--ds-mint)" }}>Résumé</a> */}
                  <a
                    href="https://linkedin.com/in/mithunrajuk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition hover:translate-x-1"
                    style={{ color: "var(--ds-mint)" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:mithraj14@gmail.com"
                    className="font-semibold transition hover:translate-x-1"
                    style={{ color: "var(--ds-mint)" }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
