import type { Metadata } from "next";
import Link from "next/link";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career story, working approach, and capabilities for Mithun Raju — senior product designer and creative technologist.",
};

const capabilities = [
  "Enterprise product strategy and UX",
  "Complex workflow and information-architecture design",
  "Agentic and conversational product experiences",
  "Developer tools and technical-product UX",
  "User research and usability studies",
  "Experimentation and evidence-led decisions",
  "Scalable design systems and interaction patterns",
  "Rapid functional prototyping and AI-assisted development",
  "Cross-functional collaboration with product and engineering",
];

const principles = [
  {
    title: "Understand the system, not only the screen",
    body: "Complex products are shaped by roles, permissions, data, handoffs, legacy tools, and organisational constraints. I map those relationships before simplifying the interface.",
  },
  {
    title: "Make the important decisions visible",
    body: "A useful product story is not a gallery of final screens. I focus on the evidence, alternatives, trade-offs, and decisions that changed the direction of the product.",
  },
  {
    title: "Prototype behaviour early",
    body: "I use high-fidelity and functional prototypes to explore realistic states, edge cases, and implementation questions before they become expensive to change.",
  },
  {
    title: "Design for adoption, not just completion",
    body: "For enterprise products, a good workflow also has to fit how teams operate, support legitimate exceptions, and help people move from familiar tools to a new standard.",
  },
];

const career = [
  {
    org: "Walmart Global Tech",
    body: "Designing enterprise-scale products in close collaboration with product, engineering, data science, operations, and design partners. Project areas include agentic workflows, enterprise portfolio management, API management, developer platforms, frontline-associate tools, experimentation, and internal conversational products.",
  },
  {
    org: "bigbasket",
    body: "Designed end-to-end experiences for a subscription-based daily-delivery product, including customer and delivery workflows, research, usability studies, and product features such as ratings and reviews for FMCG products.",
  },
  {
    org: "Hike and CREO",
    body: "Worked across mobile products and interface systems, including communication experiences, bus booking, a job portal, and a bilingual mobile operating-system experience.",
  },
  {
    org: "Early visual-design work",
    body: "Created visual solutions for presentations, reports, print material, icons, and illustrations. This foundation continues to influence the clarity and craft of my product work.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[70rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <div className="about-hero hero-in">
        <HeroPortrait
          className="about-hero-backdrop"
          aspect={1}
          pitch={9}
          zoom={1.2}
          hoverScope=".about-hero"
          label="Portrait of Mithun Raju as a halftone of falling dots; hover to see the photograph"
        />
        <p className="eyebrow">About</p>
        <h1 className="display-title display-hero mt-4 max-w-[26ch] text-[var(--ink)]">
          Senior product designer and creative technologist based in Bengaluru
        </h1>
        <div className="mt-10">
          <div className="max-w-[62ch] space-y-6 text-lg leading-8 text-[var(--ink-soft)]">
            <p>
              I design complex enterprise products, developer tools, and emerging agentic
              experiences, with a focus on turning fragmented systems into clearer, more
              unified workflows.
            </p>
            <p>
              My career began in visual and UI design, where I learned the value of craft,
              hierarchy, and clarity. I then moved into mobile product design at CREO and
              Hike, worked on end-to-end consumer and subscription experiences at bigbasket,
              and now design enterprise platforms at Walmart Global Tech.
            </p>
            <p>
              Across these roles, the products have changed, but the underlying challenge has
              often been similar: users are asked to work across disconnected tools,
              inconsistent processes, and dense information. I enjoy finding the system behind
              that complexity and shaping it into an experience that is easier to understand,
              act on, and scale.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-[var(--line)] pt-12">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            Career progression
          </h2>
        </Reveal>
        <div className="mt-10 space-y-8">
          {career.map((item, index) => (
            <Reveal key={item.org} delay={index * 70}>
              <article className="grid gap-3 transition duration-300 hover:translate-x-1 md:grid-cols-[14rem_1fr]">
                <h3 className="eyebrow">{item.org}</h3>
                <p className="text-[1.05rem] leading-8 text-[var(--ink-soft)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--line)] pt-12">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            How I approach product design
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80} variant="scale">
              <article className="glass-panel glass-card p-6 hover:-translate-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--ink-soft)]">{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--line)] pt-12">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">
            Selected capabilities
          </h2>
        </Reveal>
        <ul className="mt-8 columns-1 gap-x-12 space-y-3 md:columns-2">
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 40}>
              <li className="break-inside-avoid border-b border-[var(--line)] pb-3 text-[var(--ink-soft)] transition hover:text-[var(--ink)]">
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-20 border-t border-[var(--line)] pt-12">
        <Reveal>
          <h2 className="display-title display-section text-[var(--ink)]">Contact</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
            I am open to conversations about senior product-design roles involving enterprise
            platforms, AI products, developer tools, and design technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-[var(--ink)]">
            <span>Bengaluru, India</span>
            <a
              href="mailto:mithraj14@gmail.com"
              className="font-semibold text-[var(--accent-deep)] transition hover:translate-x-1"
            >
              mithraj14@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/mithunrajuk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--accent-deep)] transition hover:translate-x-1"
            >
              linkedin.com/in/mithunrajuk
            </a>
            <Link
              href="/work"
              className="mt-4 inline-flex font-semibold text-[var(--accent-deep)] transition hover:translate-x-1"
            >
              View selected work →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
