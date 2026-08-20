import Link from "next/link";
import { DotText } from "@/components/DotText";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { SectionAnchor } from "@/components/SectionAnchor";
import { getFeaturedProjects } from "@/content/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="hero-stage">
        <div className="relative z-[1] mx-auto grid w-full max-w-[70rem] gap-12 px-5 pb-16 pt-14 md:grid-cols-[1fr_24rem] md:items-center md:gap-16 md:px-8 md:pb-24 md:pt-20">
          <div className="hero-in">
            <h1 className="display-title display-name mt-6 text-[var(--ink)]">
              Mithun Raju.
              <span className="display-name-sub mt-3 block text-[var(--ink-soft)] md:mt-4">
                Product designer across digital products, platforms{" "}
                <span className="hero-chip">&amp; AI</span>.
              </span>
            </h1>
            <p className="lede mt-8">
              I turn fragmented tools, data, and workflows into connected products that scale — from 0-to-1 platforms to large-scale transformations. Based in Bengaluru.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="tag">PRODUCT DESIGN</span>
              <span className="tag">SYSTEMS</span>
              <span className="tag">PROTOTYPING</span>
            </div>
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
          <h2 className="display-title display-section text-[var(--ink)]">
            Selected work
          </h2>
          <p className="lede mt-4 max-w-[60ch]">
            A selection of products where I worked across product strategy, interaction, systems thinking, research, and implementation.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-14 md:gap-20">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <FeaturedWorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="more-work"
        className="mx-auto w-full max-w-[70rem] px-5 py-16 md:px-8 md:py-24 border-t border-[var(--line)]"
      >
        <Reveal>
          <p className="eyebrow">More work</p>
          <h2 className="display-title display-section text-[var(--ink)] mt-3">
            Supply Chain Operations Platform
          </h2>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={60}>
            <h3 className="display-title display-sub max-w-[50ch] text-[var(--ink)]">
              Helping operations teams get to the right tool faster.
            </h3>
            <p className="body-text mt-4 max-w-[60ch]">
              I co-led the redesign of the information architecture, navigation, and landing experience for a global operations platform with 139 modules.
            </p>
            <p className="eyebrow mt-6">Nearly 1M monthly unique visitors · 139 modules · 62% less time spent on the landing page</p>
            <Link href="/work/supply-chain-operations" className="button button-secondary mt-6">
              View case study →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="dot-rule mt-12 pt-8 md:mt-16 md:pt-10">
            <p className="body-text max-w-[46ch]">
              The full body of work, and the path from mobile products into platforms and developer tools.
            </p>
            <Link href="/work" className="button button-secondary mt-6">
              See all work →
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        id="approach"
        className="border-y border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_82%,var(--cyan-50))]"
      >
        <div className="mx-auto w-full max-w-[70rem] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionAnchor
              eyebrow="How I work"
              title="I started with the interface. The questions kept getting bigger."
            />
          </Reveal>

          <div className="mt-12">
            <Reveal delay={60}>
              <p className="body-text max-w-[60ch]">
                My work has moved from visual and consumer product design into commerce, enterprise platforms, developer products, and the systems behind them.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="body-text mt-6 max-w-[60ch]">
                I like finding structure inside complicated workflows, making ideas tangible early, and staying close to what eventually ships.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="display-title display-sub mt-8 max-w-[46ch] text-[var(--ink)]">
                Interface → Product → Workflow → System
              </p>
            </Reveal>

            <Reveal delay={180}>
              <Link href="/about" className="button button-primary mt-8">
                More about me →
              </Link>
            </Reveal>
          </div>
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
