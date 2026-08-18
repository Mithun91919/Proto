import Link from "next/link";
import { DotText } from "@/components/DotText";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { SectionAnchor } from "@/components/SectionAnchor";
import { getFeaturedProjects } from "@/content/projects";

const problemCadence = [
  "Sometimes that's five tools doing pieces of the same job.",
  "Sometimes it's hundreds of modules competing for attention.",
  "Sometimes the system has plenty of data but doesn't tell people what they should do next.",
  "And sometimes the hardest part isn't designing the new product at all — it's helping people move from the old way of working to the new one.",
];

const principles = [
  {
    title: "Structure before screens.",
    body: "When the underlying model is wrong, polishing the interface only hides the problem. I spend a lot of time on information architecture, workflows, hierarchy, states, and the relationships between parts of a product before deciding how those parts should look.",
  },
  {
    title: "Design for the transition, not only the destination.",
    body: "Large products rarely change overnight. Migrations, coexistence periods, onboarding, adoption, and changing user behaviour are part of the experience too.",
  },
  {
    title: "Launch is another research phase.",
    body: "Some of the most useful design decisions I've made came after a product reached real users. I stay involved long enough to see where assumptions break, where engineering changes the experience, and where the system needs to evolve.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="hero-stage">
        <div className="relative z-[1] mx-auto grid w-full max-w-[70rem] gap-12 px-5 pb-16 pt-14 md:grid-cols-[1fr_24rem] md:items-center md:gap-16 md:px-8 md:pb-24 md:pt-20">
          <div className="hero-in">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1 className="display-title display-name mt-6 text-[var(--ink)]">
              Mithun Raju.
              <span className="display-name-sub mt-3 block text-[var(--ink-soft)] md:mt-4">
                Product designer across digital products, platforms{" "}
                <span className="hero-chip">&amp; AI</span>.
              </span>
            </h1>
            <p className="lede mt-8">
              I turn fragmented tools, data, and workflows into connected products that
              scale — from 0→1 platforms to large-scale transformations. Based in
              Bengaluru.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="button button-primary">
                Selected work ↓
              </a>
              <Link href="/about" className="button button-secondary">
                About me
              </Link>
            </div>
          </div>

          <HeroPortrait />
        </div>
      </section>

      <section
        id="work"
        className="mx-auto w-full max-w-[70rem] px-5 py-16 md:px-8 md:py-24"
      >
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-title display-section text-[var(--ink)]">
              Selected work
            </h2>
            <p className="eyebrow">Four projects · Walmart Global Tech</p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-14 md:gap-20">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <FeaturedWorkCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="dot-rule mt-16 pt-8 md:mt-20">
            <p className="body-text max-w-[46ch]">
              The full body of work, and the path from mobile products into
              platforms and developer tools.
            </p>
            <Link href="/work" className="button button-secondary mt-6">
              All work →
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        id="approach"
        className="border-y border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_82%,var(--cyan-50))]"
      >
        <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-28">
          <Reveal>
            <SectionAnchor
              eyebrow="Approach"
              title="The kind of problems I work on"
              lede="Most of my work starts with something that has grown harder to understand than it should be."
            />
          </Reveal>

          <div>
            <Reveal delay={60}>
              <ul className="editorial-list">
                {problemCadence.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <p className="display-title display-sub mt-10 max-w-[46ch] text-[var(--ink)]">
                My role is to understand the system behind the interface, decide what
                matters, and turn that complexity into a product people can navigate,
                understand, and act on.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[70rem] px-5 pb-20 md:px-8 md:pb-28">
          <div className="grid gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-3 md:gap-12">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 90}>
                <div>
                  <p className="principle-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-title mt-3 text-[1.4rem] leading-snug text-[var(--ink)]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-[70rem] px-5 py-20 md:px-8 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <SectionAnchor
              eyebrow="About"
              title="I started by designing interfaces. Over time, I became more interested in the systems behind them."
              titleClassName="max-w-[24ch]"
            />
          </Reveal>

          <Reveal delay={80}>
            <div>
              <div className="space-y-5">
                <p className="body-text">
                  My background spans visual design, consumer mobile products, enterprise
                  platforms, and developer experiences.
                </p>
                <p className="body-text">
                  Today, I work across product strategy, research, information
                  architecture, interaction design, design systems, and functional
                  prototyping — particularly on products where many users, workflows, and
                  technical constraints have to come together without making the
                  experience feel like the organisation chart behind it.
                </p>
                <p className="body-text">
                  I also increasingly use code and AI-assisted development to move beyond
                  static prototypes and explore how an experience actually behaves.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/about" className="button button-secondary">
                  More about me →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-20 md:grid-cols-[1fr_30rem] md:items-stretch md:gap-14 md:px-8 md:py-28">
          <Reveal>
            <SectionAnchor
              eyebrow="Say Hi"
              title="Working on a product with a lot of moving parts?"
              titleClassName="max-w-[26ch]"
              lede="I'm always interested in thoughtful conversations about platform design, developer experience, and products that need to work at scale."
            >
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="mailto:mithraj14@gmail.com" className="button button-primary">
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/mithunrajuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  LinkedIn
                </a>
                <Link href="/resume" className="button button-secondary">
                  Resume
                </Link>
              </div>
            </SectionAnchor>
          </Reveal>

          <Reveal delay={120} className="contact-wordmark-slot">
            <DotText
              className="contact-wordmark"
              aspect={2.4}
              pitch={4}
              text="Say Hi"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
