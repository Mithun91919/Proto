import Link from "next/link";
import { DotText } from "@/components/DotText";
import { FeaturedWorkCard } from "@/components/FeaturedWorkCard";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";
import { SectionAnchor } from "@/components/SectionAnchor";
import { SectionHead } from "@/components/SectionHead";
import { getFeaturedProjects, getRangeProjects } from "@/content/projects";
import { careerStages, earlierWork } from "@/content/work-page";
import { collectFilterOptions } from "@/content/work-filters";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const more = getRangeProjects();
  const totalCaseStudies = featured.length + more.length + earlierWork.length;
  const { domains } = collectFilterOptions(featured, more, earlierWork);
  const yearsActive = new Date().getFullYear() - Number(careerStages[0].year);

  return (
    <>
      <section className="hero-stage">
        <div className="relative z-[1] mx-auto grid w-full max-w-[80rem] gap-12 px-5 pb-16 pt-14 md:grid-cols-[1fr_24rem] md:items-center md:gap-16 md:px-8 md:pb-24 md:pt-20">
          <div className="hero-in">
            <h1 className="display-title display-name mt-6 text-[var(--ink)]">
              Mithun Raju.
              <span className="display-name-sub mt-3 block text-[var(--ink-soft)] md:mt-4">
                Product designer turning complexity into <span className="text-[var(--accent-deep)]">connected products</span>.
              </span>
            </h1>
            <p className="lede mt-8">
              I design across consumer products, enterprise platforms, and AI-assisted workflows — making complex systems easier to understand, use, and scale.
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
        className="mx-auto w-full max-w-[80rem] px-5 py-16 md:px-8 md:py-24"
      >
        <SectionHead
          eyebrow="Case studies"
          title="Selected work"
          lede="Product strategy, interaction, systems thinking, research, and implementation."
        />

        {/* A grid, not a one-per-row stack — the media-forward card (picked
            after comparing six layouts at /work/layout-options) is built
            for scanning several at once, and a single column left most of
            the width empty on anything wider than a phone. */}
        <div className="ds-scope mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70} className="h-full">
              <FeaturedWorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Was a Supply Chain Operations spotlight — a single project singled
          out on the homepage for no reason a visitor could tell, and
          already properly covered on /work. Then briefly a pair of cards
          mirroring the featured-work grid above, which just made this
          section look like more of the same instead of a clear next step.
          A single line of text and two plain links reads as the actual
          fork in the road it is. */}
      <section
        id="more-work"
        className="mx-auto w-full max-w-[70rem] px-5 py-16 md:px-8 md:py-24 ds-section-boundary"
      >
        <SectionHead
          eyebrow="Where to next"
          title="See more, or see how it got here."
          lede={`${totalCaseStudies} case studies across ${domains.length} domains, or the ${yearsActive} years of practice that got me here — whichever you want first.`}
        />

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="button button-primary">
              Explore the work →
            </Link>
            <Link href="/about" className="button button-secondary">
              Read my story →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="ds-section-boundary">
        <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-5 py-20 md:grid-cols-[1fr_30rem] md:items-stretch md:gap-14 md:px-8 md:py-28">
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
