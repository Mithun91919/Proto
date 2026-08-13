import Link from "next/link";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { getFeaturedProjects, getRangeProjects } from "@/content/projects";

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
  const more = getRangeProjects();

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
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-6">
            <h2 className="display-title display-section text-[var(--ink)]">
              Selected work
            </h2>
            <p className="eyebrow">Four projects · Walmart Global Tech</p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 md:gap-8">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70} variant="scale">
              <FeaturedWorkCard project={project} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 ? (
          <div className="mt-20">
            <Reveal>
              <h3 className="display-title display-sub border-b border-[var(--line)] pb-5 text-[var(--ink)]">
                More work
              </h3>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6">
              {more.map((project, index) => (
                <Reveal key={project.slug} delay={index * 90}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group grid gap-6 border-b border-[var(--line)] pb-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12"
                  >
                    <div>
                      <p className="eyebrow">{project.shortTitle}</p>
                      <h4 className="display-title display-sub mt-3 text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]">
                        {project.title}
                      </h4>
                      <p className="body-text mt-4">{project.summary}</p>
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                      <dl className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <dt className="metric-value">{metric.value}</dt>
                            <dd className="metric-label">{metric.label}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="text-sm font-semibold text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
                        View project →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section
        id="approach"
        className="border-y border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_82%,var(--cyan-50))]"
      >
        <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-28">
          <Reveal>
            <div className="md:sticky md:top-28">
              <p className="eyebrow">Approach</p>
              <h2 className="display-title display-section mt-4 text-[var(--ink)]">
                The kind of problems I work on
              </h2>
              <p className="lede mt-6">
                Most of my work starts with something that has grown harder to understand
                than it should be.
              </p>
            </div>
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
            <div>
              <p className="eyebrow">About</p>
              <h2 className="display-title display-section mt-4 max-w-[24ch] text-[var(--ink)]">
                I started by designing interfaces. Over time, I became more interested in
                the systems behind them.
              </h2>
            </div>
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
        <div className="mx-auto grid w-full max-w-[70rem] gap-12 px-5 py-20 md:grid-cols-[1fr_16rem] md:items-center md:gap-16 md:px-8 md:py-28">
          <div>
            <Reveal>
              <p className="eyebrow">Say Hi</p>
              <h2 className="display-title display-section mt-4 max-w-[26ch] text-[var(--ink)]">
                Working on a product with a lot of moving parts?
              </h2>
              <p className="lede mt-6">
                I&apos;m always interested in thoughtful conversations about platform
                design, developer experience, and products that need to work at scale.
              </p>
            </Reveal>

            <Reveal delay={80}>
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
            </Reveal>
          </div>

          <Reveal variant="scale" delay={120}>
            <HeroPortrait
              className="contact-portrait"
              aspect={1}
              pitch={6}
              zoom={1.5}
              label="Portrait of Mithun Raju as a halftone of falling dots; hover to see the photograph"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
