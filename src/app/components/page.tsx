import type { Metadata } from "next";
import { HeroPortrait } from "@/components/HeroPortrait";
import { DotText } from "@/components/DotText";
import { SectionHeader, SubLabel } from "@/components/design-system/primitives/SectionHeader";
import { Divider } from "@/components/design-system/primitives/Divider";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { DotGrid } from "@/components/design-system/primitives/DotGrid";
import { PrincipleCard } from "@/components/design-system/PrincipleCard";
import { ColorSwatch } from "@/components/design-system/ColorSwatch";
import { TitleEmphasis } from "@/components/design-system/TitleEmphasis";
import { DotMeaning } from "@/components/design-system/DotMeaning";
import {
  ConvergeShape,
  ConnectShape,
  TranslateShape,
  ResolveShape,
  OrganiseShape,
} from "@/components/design-system/DotSystemDiagram";
import { ProjectFingerprint } from "@/components/design-system/ProjectFingerprint";
import { DotColourStates } from "@/components/design-system/DotColourStates";
import { ReframeBlock } from "@/components/design-system/ReframeBlock";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { DecisionRecord } from "@/components/design-system/DecisionRecord";
import { ReflectionBlock } from "@/components/design-system/ReflectionBlock";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { MetricGlyph } from "@/components/design-system/MetricGlyph";
import { MediaFrameChrome } from "@/components/design-system/MediaFrameChrome";
import { ChapterTransition } from "@/components/design-system/ChapterTransition";
import { FullWidthStatement } from "@/components/design-system/FullWidthStatement";
import { DeepDiveGate } from "@/components/design-system/DeepDiveGate";
import { MediaPair } from "@/components/design-system/MediaPair";
import { MobileSequence } from "@/components/design-system/MobileSequence";
import { AnnotatedInterface } from "@/components/design-system/AnnotatedInterface";
import { DecisionComparison } from "@/components/design-system/DecisionComparison";
import { SystemBridge } from "@/components/design-system/SystemBridge";
import { DotAnnotationLegend } from "@/components/design-system/DotAnnotationLegend";
import { PrivacySystem, CONFIDENTIALITY_LINE } from "@/components/design-system/PrivacySystem";
import { EvidenceChain } from "@/components/design-system/EvidenceChain";
import { EvidenceLadder } from "@/components/design-system/EvidenceLadder";
import { CompositionRecipe } from "@/components/design-system/CompositionRecipe";
import { AntiPatternCard } from "@/components/design-system/AntiPatternCard";
import { LayoutRhythm } from "@/components/design-system/LayoutRhythm";
import { ResponsiveBehaviour } from "@/components/design-system/ResponsiveBehaviour";
import { AmbientGlassDemo } from "@/components/design-system/AmbientGlassDemo";
import { AccessibilityChecklist } from "@/components/design-system/AccessibilityChecklist";
import { ColourSemantics } from "@/components/design-system/ColourSemantics";
import { TypeHierarchy } from "@/components/design-system/TypeHierarchy";
import { ProductMotionPlaceholder } from "@/components/design-system/ProductMotionPlaceholder";
import { DotToInterfaceTransition } from "@/components/design-system/DotToInterfaceTransition";
import { BeforeAfterMetric } from "@/components/design-system/BeforeAfterMetric";
import { DottedRule } from "@/components/design-system/DottedRule";
import { HoverLanguageDemo, ChapterProgressDemo, MotionTimingGrid, ReducedMotionFocusGrid } from "@/components/design-system/Interaction";
import { StickyTitleNarrative } from "@/components/design-system/StickyTitleNarrative";
import { EditorialNumberedRows } from "@/components/design-system/EditorialNumberedRow";
import { SpecList } from "@/components/design-system/SpecList";
import { NextProjectNav } from "@/components/design-system/NextProjectNav";
import { ClosingCTA } from "@/components/design-system/ClosingCTA";
import { FullBleedHero } from "@/components/design-system/FullBleedHero";
import { AlternatingTextMedia } from "@/components/design-system/AlternatingTextMedia";
import { FullBleedMediaAnchor } from "@/components/design-system/FullBleedMediaAnchor";
import { METRIC_MARK_MEANINGS, type MetricMarkName } from "@/components/design-system/dotPatterns";

export const metadata: Metadata = {
  title: "Components",
  description: "Reference page for the v6 design system — glass surfaces, dot language, and case-study components.",
};

const NAV = [
  { label: "Principles", href: "#principles" },
  { label: "Foundations", href: "#foundations" },
  { label: "Dots", href: "#dots" },
  { label: "Type + colour", href: "#typography" },
  { label: "Narrative", href: "#narrative" },
  { label: "Media", href: "#media" },
  { label: "Evidence", href: "#evidence" },
  { label: "Navigation", href: "#navigation" },
  { label: "Recipes", href: "#recipes" },
  { label: "Interaction", href: "#interaction" },
  { label: "Copy", href: "#copy" },
  { label: "Anti-patterns", href: "#anti-patterns" },
];

const SWATCHES = [
  { name: "Paper", hex: "#F7FBFC" },
  { name: "Paper deep", hex: "#F1F7F9" },
  { name: "Ink", hex: "#0C171C" },
  { name: "Ink soft", hex: "#243942" },
  { name: "Muted", hex: "#3D5660" },
  { name: "Accent", hex: "#0891B2" },
  { name: "Accent deep", hex: "#155E75" },
  { name: "Dark ground", hex: "#0C1F26" },
];

const OWNERSHIP = [
  { verb: "I led", when: "You set the direction and were accountable for the outcome." },
  { verb: "I own the UX for", when: "Ongoing, current accountability rather than a finished engagement." },
  { verb: "I co-led", when: "Shared accountability with a named peer. Say so — it is not a weaker claim." },
  { verb: "I helped shape", when: "You influenced the direction without owning it end to end." },
  { verb: "I designed", when: "A specific, bounded surface or flow you made yourself." },
  { verb: "We", when: "Genuine team decisions. Use it for the decision, not for your own work." },
];

const SWAPS = [
  {
    good: "Portfolio planning was split across separate systems for people, products, initiatives, approvals, and strategic work.",
    bad: "Users were facing significant pain points due to a fragmented and disjointed tooling landscape.",
  },
  { good: "~500 services onboarded.", bad: "Massive adoption across the engineering organisation." },
  {
    good: "I co-led the redesign of the information architecture with another designer.",
    bad: "Spearheaded a complete end-to-end transformation of the platform experience.",
  },
  {
    good: "One pilot surfaced details that polished mockups had hidden.",
    bad: "Through rigorous user-centred research, we uncovered key insights that informed our design decisions.",
  },
];

const MECHANICS = [
  { label: "Spelling", rule: "British — organised, prioritised, fulfilment, localisation, behaviour." },
  { label: "Person", rule: "First person singular for your work. “We” only for genuine team decisions." },
  { label: "Tense", rule: "Past for shipped work. Present for products you still own." },
  { label: "Numbers", rule: "~ for approximations. K and M above a thousand." },
  { label: "Arrows", rule: "→ for transformation and hierarchy. Never -> in rendered copy." },
  { label: "Product names", rule: "Public label only. Internal names never appear as a primary title." },
  { label: "Headings", rule: "Make an argument. Never The Problem, The Process, The Solution." },
];

const ANTI_PATTERNS = [
  { title: "Stack glass inside glass.", note: "Use one depth level per composition. Inner content becomes flat or solid." },
  { title: "Highlight several words.", note: "One title gets one accent idea. Colour should make the hierarchy clearer, not louder." },
  { title: "Use dots as confetti.", note: "Every dot must communicate quantity, grouping, connection, state, or change." },
  { title: "Put every screen in browser chrome.", note: "Choose frame, crop, sequence, annotation, or one full-width interface anchor based on the argument." },
  { title: "Show a metric without its base.", note: "Include unit, time window, denominator, or enough context for the claim to stand alone." },
  { title: "Use dark blocks for variety.", note: "Dark surfaces mark thesis, reframe, or conclusion. One or two per case study is usually enough." },
];

export default function ComponentsPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <div className="ds-section-rule flex flex-wrap gap-8 pb-5 font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
          <span>Pattern library</span>
          <span>Cool Lab</span>
          <span className="ml-auto" style={{ color: "var(--ds-accent)" }}>
            v6
          </span>
        </div>
        <h1 className="display-title mt-10 max-w-[18ch]" style={{ fontSize: "3rem", lineHeight: 1.05 }}>
          A storytelling system for <span className="ds-accent-text">complex product work</span>.
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          Typography tells the story. Colour directs attention. Dots explain the system. Glass creates depth.
          Everything else exists to make those four roles work together.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md border px-3.5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors"
              style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      {/* A — Principles */}
      <section id="principles" className="mx-auto max-w-[70rem] px-5 pt-20 md:px-8">
        <SectionHeader letter="A" title="Principles" subtitle="One job per visual layer" />
        <div className="ds-rule py-11">
          <h3 className="display-title max-w-[25ch]" style={{ fontSize: "1.9rem", lineHeight: 1.2 }}>
            A portfolio system should explain the work before it decorates the page.
          </h3>
          <p className="mt-4 max-w-[68ch] text-base leading-7" style={{ color: "var(--ink-soft)" }}>
            The visual language is deliberately split into four responsibilities. When two layers try to perform the
            same job, the composition gets noisy.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PrincipleCard icon={<span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Aa</span>} role="Typography" title="Tells the story" note="Carries the argument, hierarchy, voice, and reading rhythm. It should remain readable without any styling trick." />
            <PrincipleCard
              icon={<span className="block h-full w-full rounded-lg" style={{ background: "radial-gradient(circle at 40% 35%, var(--ds-mint) 0 18%, var(--ds-accent) 19% 48%, #d8f3f5 49% 100%)" }} />}
              role="Colour"
              title="Directs attention"
              note="Highlights the outcome, active idea, link, or selected state. One emphasis per headline."
            />
            <PrincipleCard icon={<DotGrid cols={3} size={5} gap={3} dots={Array(9).fill(1)} />} role="Dots" title="Explain the system" note="Show quantity, grouping, connection, state, and change. Never use them simply because the site is dot-themed." />
            <PrincipleCard
              icon={<span className="block h-full w-full rounded-lg" style={{ background: "linear-gradient(135deg, rgba(255,255,255,.78), rgba(207,250,254,.2))" }} />}
              role="Glass"
              title="Creates depth"
              note="Groups supporting content and interaction. Product interfaces and reading-heavy surfaces stay solid."
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl p-7" style={{ background: "var(--ds-dark)", color: "var(--ds-dark-ink)" }}>
            <span className="ds-chip" style={{ background: "transparent", color: "#b6d3da", borderColor: "rgba(234,243,245,.16)" }}>Type / story</span>
            <span className="ds-mint" style={{ color: "var(--ds-mint)" }}>+</span>
            <span className="ds-chip" style={{ background: "transparent", color: "#b6d3da", borderColor: "rgba(234,243,245,.16)" }}>Colour / focus</span>
            <span style={{ color: "var(--ds-mint)" }}>+</span>
            <span className="ds-chip" style={{ background: "transparent", color: "#b6d3da", borderColor: "rgba(234,243,245,.16)" }}>Dots / structure</span>
            <span style={{ color: "var(--ds-mint)" }}>+</span>
            <span className="ds-chip" style={{ background: "transparent", color: "#b6d3da", borderColor: "rgba(234,243,245,.16)" }}>Glass / depth</span>
            <span style={{ color: "var(--ds-mint)" }}>=</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>clear case study</span>
          </div>
        </div>
      </section>

      {/* B — Foundations */}
      <section id="foundations" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="B" title="Foundations" />
        <div className="grid grid-cols-1 gap-12 py-11 md:grid-cols-2">
          <div>
            <SubLabel code="B1 · Colour" />
            <div className="flex flex-col">
              {SWATCHES.map((s) => (
                <ColorSwatch key={s.hex} name={s.name} hex={s.hex} />
              ))}
            </div>
          </div>
          <div>
            <SubLabel code="B2 · Type" />
            <div className="flex flex-col gap-5">
              <div className="ds-rule pb-4">
                <p className="display-title" style={{ fontSize: "2.6rem", fontWeight: 600 }}>Sora 600</p>
                <p className="mt-2 font-mono text-[0.65rem]" style={{ color: "var(--muted)" }}>Page titles · 44–76px</p>
              </div>
              <div className="ds-rule pb-4">
                <p className="display-title" style={{ fontSize: "1.85rem" }}>Sora 500</p>
                <p className="mt-2 font-mono text-[0.65rem]" style={{ color: "var(--muted)" }}>Section + card titles · 22–44px</p>
              </div>
              <p className="text-lg leading-8">Instrument Sans 400 — body copy at 16–18px, 1.75 leading, capped at 62 characters.</p>
              <p className="ds-eyebrow">IBM Plex Mono — metadata, eyebrows, labels</p>
            </div>
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B3 · Surface hierarchy" />
          <p className="max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Glass is a depth cue, not the default background. Use it when a card is meant to float above the dot
            field; keep content that demands precision on a solid surface.
          </p>
          <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
            Rule · never glass on glass · one depth level per composition · product UI stays solid
          </p>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <GlassPanel variant="soft" className="rounded-2xl p-7">
              <p className="ds-eyebrow">Glass / soft</p>
              <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>Supporting context</h4>
              <p className="ds-note">Small facts, secondary evidence, chapter notes, passive project fingerprints.</p>
            </GlassPanel>
            <GlassPanel className="rounded-2xl p-7">
              <p className="ds-eyebrow">Glass / base</p>
              <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>Evidence and comparison</h4>
              <p className="ds-note">Default card surface for metrics, decisions, comparison modules.</p>
            </GlassPanel>
            <GlassPanel variant="lift" hoverLift className="rounded-2xl p-7">
              <p className="ds-eyebrow">Glass / lift</p>
              <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>Interactive or featured</h4>
              <p className="ds-note">Clickable project cards, next-project navigation, hoverable transformations.</p>
            </GlassPanel>
            <GlassPanel variant="solid" className="rounded-2xl p-7">
              <p className="ds-eyebrow">Solid / media</p>
              <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>Precision content stays solid</h4>
              <p className="ds-note">Reconstructed interfaces, forms, code, dense tables. Glass here would reduce contrast.</p>
            </GlassPanel>
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B4 · Divider hierarchy" />
          <p className="max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Dots mark the start of a boundary instead of forming a full dotted fence.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <GlassPanel variant="soft" className="rounded-2xl p-[1.625rem]">
              <p className="ds-eyebrow">Major divider</p>
              <p className="ds-note">Five accent dots + a fading hairline. Between top-level chapters.</p>
              <div className="ds-divider-major mt-4" />
            </GlassPanel>
            <GlassPanel variant="soft" className="rounded-2xl p-[1.625rem]">
              <p className="ds-eyebrow">Minor divider</p>
              <p className="ds-note">Three muted dots + a short hairline. Between component examples.</p>
              <div className="ds-divider-minor mt-4" />
            </GlassPanel>
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B5 · Layout rhythm" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            The system uses a small set of widths and gaps. Variation comes from composition, not from inventing a new container for every chapter.
          </p>
          <LayoutRhythm />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B5b · Responsive behaviour" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Mobile is a change in reading order, not a scaled desktop. Preserve the story sequence even when the composition collapses.
          </p>
          <ResponsiveBehaviour />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B6 · Page environments" />
          <p className="max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Change the page ground to create pacing instead of inventing a new card style.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="ds-env-paper min-h-[190px] rounded-2xl p-[1.625rem]">
              <p className="ds-eyebrow">Paper / default</p>
              <h4 className="display-title mt-4" style={{ fontSize: "1.2rem" }}>Narrative and explanation</h4>
              <p className="ds-note">Most of the case study lives here.</p>
            </div>
            <div className="ds-env-tint min-h-[190px] rounded-2xl p-[1.625rem]">
              <p className="ds-eyebrow">Tint / support</p>
              <h4 className="display-title mt-4" style={{ fontSize: "1.2rem" }}>Evidence, research, comparison</h4>
              <p className="ds-note">A quiet change of plane without a dark section.</p>
            </div>
            <div className="ds-env-dark min-h-[190px] rounded-2xl p-[1.625rem]">
              <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>Dark / anchor</p>
              <h4 className="display-title mt-4" style={{ fontSize: "1.2rem" }}>Reframe, thesis, conclusion</h4>
              <p className="ds-note" style={{ color: "var(--ds-dark-muted)" }}>Use one or two times per case study.</p>
            </div>
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="B7 · Ambient glass" />
          <p className="mb-7 max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Glass needs something subtle to refract. A faint ambient cyan field may sit behind a featured card, but it should never become a page-wide gradient.
          </p>
          <AmbientGlassDemo />
        </div>

        <div className="py-11">
          <SubLabel code="B8 · Accessibility" />
          <AccessibilityChecklist />
        </div>
      </section>

      {/* C — Dot language */}
      <section id="dots" className="mx-auto max-w-[70rem] px-5 pt-16 md:px-8">
        <SectionHeader letter="C" title="Dot language" subtitle="Structure, state, and transformation" />

        <div className="ds-rule py-11">
          <SubLabel code="C1 · Dot grammar" />
          <h3 className="display-title max-w-[26ch]" style={{ fontSize: "1.7rem" }}>Every dot has to say something.</h3>
          <p className="mt-3 max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Use the dot only when it communicates <strong style={{ color: "var(--ink)", fontWeight: 500 }}>quantity, grouping, connection, state, or change</strong>. If it does none of those, it is decoration and should disappear.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
            <DotMeaning demo={<DotGrid cols={4} size={6} gap={6} dots={Array(8).fill(1)} />} label="Quantity" note="How much, how many, or how dense." />
            <DotMeaning
              demo={
                <div className="flex gap-4">
                  <DotGrid cols={2} size={6} gap={5} dots={Array(4).fill(1)} />
                  <DotGrid cols={2} size={6} gap={5} dots={Array(4).fill(1)} variant="muted" />
                </div>
              }
              label="Grouping"
              note="Which things belong together."
            />
            <DotMeaning demo={<DotGrid cols={5} size={6} gap={4} dots={[1, 0.14, 0.14, 0.14, 1]} />} label="Connection" note="How elements influence or lead to one another." />
            <DotMeaning
              demo={
                <div className="flex items-center gap-2">
                  <DotGrid cols={1} size={6} gap={0} dots={[1]} variant="muted" />
                  <span className="ds-dot ds-dot-state" style={{ width: 10, height: 10 }} />
                  <DotGrid cols={1} size={6} gap={0} dots={[1]} variant="quiet" />
                </div>
              }
              label="State"
              note="Current, upcoming, active, or resolved."
            />
            <DotMeaning
              demo={
                <div className="flex items-center gap-2.5">
                  <DotGrid cols={2} size={5} gap={4} dots={Array(4).fill(1)} variant="muted" />
                  <span className="ds-arrow text-sm">→</span>
                  <DotGrid cols={2} size={6} gap={4} dots={Array(4).fill(1)} />
                </div>
              }
              label="Change"
              note="The before-to-after transformation."
            />
          </div>
        </div>

        <Divider variant="minor" />
        <div className="py-11"><ConvergeShape /></div>
        <Divider variant="minor" />
        <div className="py-11"><ConnectShape /></div>
        <Divider variant="minor" />
        <div className="py-11"><TranslateShape /></div>
        <Divider variant="minor" />
        <div className="py-11"><ResolveShape /></div>
        <Divider variant="minor" />
        <div className="py-11"><OrganiseShape /></div>

        <div className="py-11">
          <SubLabel code="C6 · Project fingerprints" />
          <p className="max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Each case study gets one tiny transformation diagram derived from its core argument. Hover shows the
            resolved state; it is never used as a decorative logo.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-5">
            <ProjectFingerprint
              shapeName="Converge"
              projectLabel="Portfolio management"
              before={<DotGrid cols={2} size={6} gap={4} dots={Array(6).fill(1)} variant="muted" />}
              after={<DotGrid cols={4} size={6} gap={5} dots={Array(11).fill(1)} />}
            />
            <ProjectFingerprint
              shapeName="Connect"
              projectLabel="API lifecycle"
              before={<DotGrid cols={3} size={5} gap={4} dots={Array(9).fill(1)} variant="muted" />}
              after={<DotGrid cols={2} size={5} gap={4} dots={Array(4).fill(1)} />}
            />
            <ProjectFingerprint
              shapeName="Translate"
              projectLabel="Dependency health"
              before={<div style={{ width: 90, height: 62, backgroundImage: "radial-gradient(var(--ds-dot-muted) 2.2px, transparent 2.2px)", backgroundSize: "12px 12px", opacity: 0.82 }} />}
              after={<DotGrid cols={3} size={6} gap={4} dots={Array(7).fill(1)} />}
            />
            <ProjectFingerprint
              shapeName="Resolve"
              projectLabel="Store support"
              before={<DotGrid cols={7} size={6} gap={4} dots={[0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 1]} />}
              after={<DotGrid cols={6} size={6} gap={4} dots={Array(6).fill(1)} />}
            />
            <ProjectFingerprint
              shapeName="Organise"
              projectLabel="Supply chain operations"
              before={<div style={{ width: 90, height: 62, backgroundImage: "radial-gradient(var(--ds-dot-muted) 2.2px, transparent 2.2px)", backgroundSize: "10px 10px" }} />}
              after={
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ width: 28, height: 38, border: "1px solid color-mix(in oklab, var(--ds-accent) 25%, transparent)", backgroundImage: "radial-gradient(var(--ds-accent) 2px, transparent 2px)", backgroundSize: "8px 8px" }} />
                  ))}
                </div>
              }
            />
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="C7 · Dot colour states" />
          <p className="mb-7 max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Dots use colour to show state change, not to create a palette.
          </p>
          <DotColourStates />
        </div>

        <div className="pb-11">
          <SubLabel code="C8 · Halftone portrait & lettering (DotBoard)" />
          <p className="max-w-[68ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            The site&apos;s one working piece of dot animation, not a reference-guide illustration — <code className="font-mono text-[0.85em]">DotBoard</code> already
            renders the home hero portrait, the About page portrait, and the &quot;Say Hi&quot; contact wordmark. Dots pour in
            from above, settle into the image or lettering, hold, then drain and loop. A photograph additionally
            cross-fades in on hover — lettering has nothing to reveal, so it stays a halftone. Two thin wrappers pick
            the mode: <code className="font-mono text-[0.85em]">HeroPortrait</code> (always renders <code className="font-mono text-[0.85em]">/mithun-raju.jpg</code>) and{" "}
            <code className="font-mono text-[0.85em]">DotText</code> (renders a short string of lettering instead).
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <div className="mx-auto w-[9.5rem]">
                <HeroPortrait pitch={9} />
              </div>
              <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.08em]" style={{ color: "var(--ds-accent-deep)" }}>
                {"<HeroPortrait pitch={9} />"}
              </p>
              <p className="ds-note">Hover or focus resolves the halftone into the photograph.</p>
            </div>
            <div>
              <div className="mx-auto w-[13rem]">
                <DotText text="Say Hi" aspect={2.4} pitch={4} />
              </div>
              <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.08em]" style={{ color: "var(--ds-accent-deep)" }}>
                {'<DotText text="Say Hi" aspect={2.4} pitch={4} />'}
              </p>
              <p className="ds-note">Lettering has no photograph behind it, so hover has no reveal to trigger.</p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <dl className="grid min-w-[520px] grid-cols-[140px_1fr] gap-x-6 gap-y-0">
              {[
                { prop: "aspect", detail: "Width ÷ height of the board. Default 4/5 for a portrait; DotText wrappers pass their own." },
                { prop: "pitch", detail: "Cell size in CSS px — larger reads coarser. Text needs roughly 10 cells per character to stay legible; lower this before shrinking a DotText box." },
                { prop: "src / text", detail: "Mutually exclusive. A photo path resolves on hover; a string of lettering (newlines break lines) never does." },
                { prop: "zoom, focusY", detail: "Photo-only — crop tightness and vertical focus point into the source image." },
                { prop: "revealOnHover, maxPhotoAlpha, hoverScope", detail: "Photo-only — whether hover reveals at all, how far the cross-fade goes, and an ancestor selector to hover when the canvas itself can't receive the pointer (e.g. it sits behind other content)." },
                { prop: "decorative", detail: "Hides the board from assistive tech and drops it out of tab order — set when the text or image already appears elsewhere on the page in an accessible form." },
                { prop: "speed", detail: "Multiplies the fall/stagger/hold pace — 2 runs the whole entry-hold-exit cycle twice as fast. Defaults to 1; scope any change to one instance rather than the shared constants." },
                { prop: "label", detail: "Accessible name for the canvas (role=\"img\"). Both wrappers generate a sensible default; override for context the alt text can't infer." },
              ].map((row, index) => (
                <div key={row.prop} className={`col-span-2 grid grid-cols-subgrid items-baseline gap-x-6 ${index > 0 ? "ds-rule" : ""}`} style={{ paddingTop: index > 0 ? "0.9rem" : 0, paddingBottom: "0.9rem" }}>
                  <dt className="ds-eyebrow">{row.prop}</dt>
                  <dd className="text-sm leading-6" style={{ color: "var(--ink-soft)" }}>{row.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-7 max-w-[68ch] text-sm leading-6" style={{ color: "var(--muted)" }}>
            <strong className="font-medium" style={{ color: "var(--ink)" }}>Use it for:</strong> a page&apos;s opening portrait
            (home, About) and the one closing wordmark in Contact — moments the system treats as a signature, not
            general-purpose decoration. Respects <code className="font-mono text-[0.85em]">prefers-reduced-motion</code> automatically
            by freezing on the settled frame.
          </p>
        </div>
      </section>

      {/* D — Typography & emphasis */}
      <section id="typography" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="D" title="Typography & emphasis" subtitle="Colour highlights the idea; dots stay out of the letters" />
        <div className="ds-rule py-11">
          <SubLabel code="D1 · Colour semantics" />
          <p className="mb-7 max-w-[68ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Colour is a reading cue, not a second illustration layer. Use accent on the idea that changes, resolves, or matters most; keep everything else in ink.
          </p>
          <ColourSemantics />
        </div>
        <div className="ds-rule py-11">
          <SubLabel code="D2 · Approved title emphasis" />
          <p className="max-w-[68ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Use only one of these patterns in a title. The highlighted words should be the consequence or core idea.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            <TitleEmphasis pattern="single-word" note="Best for outcome-led chapter headings.">
              Turning dependency data into clear <span className="ds-accent-text">actions</span>.
            </TitleEmphasis>
            <TitleEmphasis pattern="short-phrase" note="Two to four words. Best for transformation headlines.">
              Replacing five tools with <span className="ds-accent-text">one connected platform</span>.
            </TitleEmphasis>
            <TitleEmphasis pattern="before-after" note="Use when the title itself contains a clear change.">
              <span className="ds-muted-text">From fragmented tools</span> to <span className="ds-accent-text">one connected platform</span>.
            </TitleEmphasis>
          </div>
        </div>

        <div className="py-11">
          <SubLabel code="D3 · Hierarchy" />
          <TypeHierarchy />
        </div>
      </section>

      {/* E — Narrative components */}
      <section id="narrative" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="E" title="Narrative components" subtitle="Tension, decisions, chapters, and reflection" />

        <div className="ds-rule py-11">
          <SubLabel code="E1 · Tension / reframe" />
          <ReframeBlock heading="Navigation was not the real problem." body="People knew tools existed. The harder question was which tool matched the task in front of them." />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="E2 · Before / after model" />
          <BeforeAfterModel
            before={{ heading: "Find a module", body: "Search a flat catalogue and remember internal names.", lineWidths: [86, 68, 92, 57] }}
            after={{ heading: "Start from the job", body: "Navigate through a hierarchy aligned to operational tasks.", lineWidths: [86, 52, 70] }}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="E3 · Decision record" />
          <DecisionRecord
            optionA={{ title: "Top navigation", body: "Familiar, but degraded as categories and module count increased." }}
            chosen={{ title: "Left navigation", body: "Supported deeper grouping, persistent context, and faster scanning." }}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="E4 · Reflection" />
          <ReflectionBlock
            statement="The new structure solved discovery, but it also exposed how much migration itself shapes the experience."
            whatHeld="Task-oriented grouping tested clearly across different user groups."
            unresolved="Adoption and migration need as much design attention as the destination state."
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S1 · Numbered section header" />
          <SectionHeader letter="01" title="The section title sits on a baseline with its number." />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S1b · Dotted rule" />
          <p className="mb-7 max-w-[56ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Every section divider is a single row of dots on the same 22px pitch as the page grid, so rules and background are the same system.
          </p>
          <DottedRule />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S2 · Proof strip" />
          <ProofStrip
            items={[
              { value: "6K+", label: "monthly users", glyph: "field" },
              { value: "5 → 1", label: "platform consolidation", glyph: "funnel" },
              { value: "6", label: "connected modules", glyph: "modules" },
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S2b · Dot marks" />
          <p className="mb-7 max-w-[60ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Eight 5×5 glyphs on the same dot unit. One per metric, chosen for what the number measures.
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {(Object.keys(METRIC_MARK_MEANINGS) as MetricMarkName[]).map((name) => (
              <MetricGlyph key={name} name={name} labelled />
            ))}
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S3 · Media frame" />
          <MediaFrameChrome caption={CONFIDENTIALITY_LINE} />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S4 · Sticky-title narrative" />
          <StickyTitleNarrative
            title="Why the hierarchy changed"
            paragraphs={[
              "The flat catalogue worked while there were a dozen modules. Past that, people stopped browsing and started asking colleagues where things lived.",
              "Grouping by task instead of by team meant the structure could grow without every addition becoming another item in an already-long list.",
              "It also meant the navigation could explain itself — the grouping was the argument for why a module belonged where it did.",
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S5 · Dark anchor block" />
          <ChapterTransition chapterLabel="Chapter 03 / Reframe" heading="The problem was not navigation. It was the model underneath it." body="One short setup sentence is enough. The next section should immediately show the consequence of this reframe." />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S6 · Editorial numbered rows" />
          <EditorialNumberedRows
            rows={[
              { number: "01", title: "Audit the catalogue", detail: "Group every existing module by the task it supports, not by the team that built it." },
              { number: "02", title: "Model the hierarchy", detail: "Test two and three-level structures against real search logs before committing to depth." },
              { number: "03", title: "Migrate without a cliff", detail: "Keep old entry points redirecting for a full quarter while usage shifts to the new structure." },
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S7 · Pull statement" />
          <FullWidthStatement>The architecture mattered more than any single module.</FullWidthStatement>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S8 · Spec list" />
          <SpecList
            facts={[
              { label: "Role", value: "Product designer, systems lead" },
              { label: "Team", value: "2 designers, 4 engineers, 1 PM" },
              { label: "Timeline", value: "5 months, discovery to rollout" },
              { label: "Scope", value: "Navigation, information architecture, migration" },
            ]}
          />
        </div>

        <div className="py-11">
          <SubLabel code="H3 · Deep-dive gate" />
          <DeepDiveGate heading="See the decisions behind the final system" body="Includes research artefacts, rejected directions, interaction detail, and reconstructed internal screens." href="/work" />
        </div>
      </section>

      {/* F — Product media */}
      <section id="media" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="F" title="Product media" subtitle="Frame the design argument, not a gallery" />

        <div className="ds-rule py-11">
          <SubLabel code="F1 · Media pair" />
          <MediaPair
            a={{ label: "Earlier structure", caption: "01 / What was difficult" }}
            b={{ label: "Reframed structure", caption: "02 / What changed", tone: "accent" }}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F2 · Mobile sequence" />
          <MobileSequence steps={[{ label: "Find" }, { label: "Compare" }, { label: "Act" }, { label: "Confirm" }]} />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F3 · Product motion" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Use motion only when timing, state change, or interaction is part of the argument. The poster frame should still explain what the viewer is about to see.
          </p>
          <ProductMotionPlaceholder />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F4 · Annotated interface" />
          <AnnotatedInterface
            callouts={[
              { number: 1, note: "Navigation mirrors the task model rather than the underlying organisation structure.", top: "76px", left: "132px" },
              { number: 2, note: "Primary status stays visible before the reader opens a detail view.", top: "126px", right: "80px" },
              { number: 3, note: "Contextual actions appear where the decision is made, not in a separate utility area.", top: "196px", right: "196px" },
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F5 · Decision comparison" />
          <DecisionComparison
            explored={{ title: "Expose every module up front", body: "Fast for experts, but the density made orientation harder for people entering through unfamiliar tasks." }}
            chosen={{ title: "Group around the work people came to do", body: "the structure gave new and returning users the same stable entry points without hiding expert paths." }}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F6 · System bridge" />
          <SystemBridge />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F7 · Dot annotation language" />
          <DotAnnotationLegend />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="F8 · Dot to interface transition" />
          <p className="mb-7 max-w-[68ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Use once when the story moves from an abstract system problem into the product response. Dots begin as the model; the interface resolves underneath. Hover the example to reveal it.
          </p>
          <DotToInterfaceTransition />
        </div>

        <div className="py-11">
          <SubLabel code="F9 · Privacy as a visual system" />
          <PrivacySystem />
        </div>
      </section>

      {/* G — Evidence */}
      <section id="evidence" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="G" title="Evidence" subtitle="Connect scale, change, and outcome" />
        <div className="ds-rule py-11">
          <SubLabel code="G1 · Scale to outcome" />
          <EvidenceChain
            scale={{ value: "139", label: "Modules in the field" }}
            intervention={{ title: "Reorganised around user tasks", body: "Hierarchy, navigation, pinning, and clearer entry points." }}
            outcome={{ value: "-62%", label: "Time on landing page" }}
          />
        </div>
        <div className="ds-rule py-11">
          <SubLabel code="G2 · Before / after metric" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Use one paired metric when the delta is the story. Keep the base, unit, and time window visible so the claim stands on its own.
          </p>
          <BeforeAfterMetric />
        </div>

        <div className="py-11">
          <SubLabel code="G3 · Evidence ladder" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            When there is no single headline metric, stack different kinds of proof instead of pretending they are
            equivalent.
          </p>
          <EvidenceLadder />
        </div>
      </section>

      {/* H — Navigation & closing */}
      <section id="navigation" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="H" title="Navigation & closing" subtitle="Case-study openers, chapter transitions, and the exit" />

        <div className="ds-rule py-11">
          <SubLabel code="S11 · Full-bleed hero" />
          <FullBleedHero
            number="02"
            label="API Lifecycle Platform"
            headline="One platform for engineers to discover, design, test, and govern APIs."
            meta={[
              { label: "Role", value: "Product designer" },
              { label: "Timeline", value: "8 months" },
              { label: "Outcome", value: "~500 services onboarded" },
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S12 · Alternating text / preview" />
          <AlternatingTextMedia
            rows={[
              { eyebrow: "Marketplace", title: "Finding an API took longer than building against one", body: "Engineers searched three separate tools before finding the right contract. The marketplace put discovery, ownership, and status in one list.", route: "/work/api-lifecycle" },
              { eyebrow: "Design Studio", title: "Contracts drifted from what shipped", body: "A shared design surface meant the spec engineers tested against was the same one that generated the documentation.", route: "/work/api-lifecycle" },
            ]}
          />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S13 · Full-bleed media anchor" />
          <FullBleedMediaAnchor caption="The Testing workspace, mid-run: a live contract check against the Design Studio spec." confidentialityLine={CONFIDENTIALITY_LINE} />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="S9 · Next-project nav" />
          <NextProjectNav href="/work/dependency-health" number="03" label="Dependency Health" title="Making cross-team dependency risk visible before it becomes an incident." />
        </div>

        <div className="py-11">
          <SubLabel code="S10 · Closing CTA" />
          <ClosingCTA
            heading="Interested in how this was built?"
            primary={{ label: "See more work", href: "/work" }}
            secondary={{ label: "Get in touch", href: "/about" }}
          />
        </div>
      </section>

      {/* I — Composition recipes */}
      <section id="recipes" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="I" title="Composition recipes" subtitle="Preserve rhythm, not a fixed template" />
        <div className="py-11">
          <p className="mb-7 max-w-[68ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Components are ingredients. Each chapter should choose a sequence that matches the argument, and
            consecutive chapters should not repeat the exact same composition.
          </p>
          <CompositionRecipe />
        </div>
      </section>

      {/* J — Motion & interaction */}
      <section id="interaction" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="J" title="Motion & interaction" subtitle="Movement explains change" />

        <div className="ds-rule py-11">
          <SubLabel code="J1 · Hover language" />
          <HoverLanguageDemo />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="J2 · Chapter progress" />
          <p className="mb-7 max-w-[65ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Dots earn a UI role here: a subtle fixed rail can show chapter progress. Hover or focus reveals the chapter label; mobile collapses it into a compact top indicator.
          </p>
          <ChapterProgressDemo />
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="J3 · Motion timing" />
          <MotionTimingGrid />
        </div>

        <div className="py-11">
          <SubLabel code="J4 · Reduced motion + focus" />
          <ReducedMotionFocusGrid />
        </div>
      </section>

      {/* K — Copy guide */}
      <section id="copy" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="K" title="Copy guide" subtitle="Plain language, precise ownership, credible claims" />

        <div className="ds-rule py-11">
          <SubLabel code="Ownership ladder" />
          <p className="mb-7 max-w-[62ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            Pick the verb that is true. A precise smaller claim reads as more credible than a vague large one.
          </p>
          <div className="grid grid-cols-1 gap-x-14 gap-y-1 sm:grid-cols-2">
            {OWNERSHIP.map((o) => (
              <div key={o.verb} className="ds-rule py-5">
                <p className="display-title" style={{ fontSize: "1.05rem", color: "var(--ds-accent-deep)" }}>{o.verb}</p>
                <p className="mt-2 max-w-[42ch] text-sm leading-6" style={{ color: "var(--ink-soft)" }}>{o.when}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-rule py-11">
          <SubLabel code="Write this, not that" />
          <div className="flex flex-col">
            {SWAPS.map((s) => (
              <div key={s.good} className="ds-rule grid grid-cols-1 gap-8 py-6 sm:grid-cols-2">
                <div>
                  <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>Write</p>
                  <p className="mt-2 max-w-[44ch] leading-7">{s.good}</p>
                </div>
                <div>
                  <p className="ds-eyebrow" style={{ color: "var(--ds-dot-muted)" }}>Not</p>
                  <p className="mt-2 max-w-[44ch] leading-7" style={{ color: "var(--ds-dot-muted)" }}>{s.bad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-11">
          <SubLabel code="Mechanics" />
          <dl className="grid grid-cols-1 gap-x-14 sm:grid-cols-2">
            {MECHANICS.map((m) => (
              <div key={m.label} className="ds-rule grid grid-cols-[130px_1fr] items-baseline gap-6 py-[1.125rem]">
                <dt className="ds-eyebrow">{m.label}</dt>
                <dd className="text-sm leading-6" style={{ color: "var(--ink-soft)" }}>{m.rule}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* L — Anti-patterns */}
      <section id="anti-patterns" className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
        <SectionHeader letter="L" title="Anti-patterns" subtitle="What keeps the system from becoming a theme" />
        <div className="py-11">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ANTI_PATTERNS.map((a) => (
              <AntiPatternCard key={a.title} title={a.title} note={a.note} />
            ))}
          </div>
          <div className="mt-6 border-l-2 py-1 pl-6" style={{ borderColor: "var(--ds-accent)" }}>
            <p className="text-lg leading-7">
              <strong className="font-medium">Final test:</strong> if removing a visual treatment does not remove
              meaning, hierarchy, or useful depth, remove the treatment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
