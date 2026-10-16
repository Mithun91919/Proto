import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PrintButton } from "@/components/PrintButton";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Mithun Raju’s résumé: Senior UX Designer, Bengaluru.",
};

export default function ResumePage() {
  return (
    <div className="resume-wrap mx-auto w-full max-w-[56rem] px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <div className="no-print mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Résumé · first draft</p>
            <p className="mt-2 max-w-[34rem] text-[0.98rem] leading-7 text-[var(--ink-soft)]">
              One page, for senior UX roles. Print it or save it as a PDF from here.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <a href="mailto:mithraj14@gmail.com" className="button button-secondary">
              Request by email
            </a>
            <Link href="/work" className="button button-secondary">
              View work
            </Link>
          </div>
        </div>
      </Reveal>

      <article className="resume-paper">
        <header className="resume-head">
          <h1 className="resume-name">{resume.name}</h1>
          <p className="resume-title">{resume.headline}</p>
          <p className="resume-contact">
            {resume.contact.map((c, i) => (
              <span key={c.label}>
                {c.href ? <a href={c.href}>{c.label}</a> : c.label}
                {i < resume.contact.length - 1 ? <span aria-hidden> · </span> : null}
              </span>
            ))}
          </p>
        </header>

        <p className="resume-summary">{resume.summary}</p>

        <section>
          <h2 className="resume-h">Experience</h2>
          {resume.roles.map((r) => (
            <div key={r.org} className="resume-role">
              <div className="resume-role-head">
                <p className="resume-org">
                  {r.org}
                  <span className="resume-place">, {r.place}</span>
                </p>
              </div>
              {r.titles.map((t) => (
                <p key={t.title} className="resume-titleline">
                  <span>{t.title}</span>
                  <span className="resume-dates">{t.dates}</span>
                </p>
              ))}
              <ul className="resume-bullets">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="resume-earlier">
            <strong>Earlier.</strong>{" "}
            {resume.earlier.map((e) => `${e.title}, ${e.org} (${e.dates})`).join("; ")}.
          </p>
        </section>

        <div className="resume-cols">
          <section>
            <h2 className="resume-h">Education</h2>
            {resume.education.map((e) => (
              <p key={e.what} className="resume-line">
                <strong>{e.what}</strong>, {e.where} <span className="resume-dates">{e.dates}</span>
              </p>
            ))}
          </section>
          <section>
            <h2 className="resume-h">Skills</h2>
            <ul className="resume-plain">
              {resume.skills.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="resume-h">Certifications</h2>
            <ul className="resume-plain">
              {resume.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h2 className="resume-h">Languages</h2>
            <p className="resume-line">{resume.languages}</p>
          </section>
        </div>

        <p className="resume-foot">{resume.footnote}</p>
      </article>
    </div>
  );
}
