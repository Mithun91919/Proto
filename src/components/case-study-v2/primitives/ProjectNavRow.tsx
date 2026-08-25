import Link from "next/link";

type ProjectNavRowProps = {
  previousProject?: { slug: string; label: string };
  nextProject?: { slug: string; label: string };
};

/** Minimal prev/next/back-to-work row — no large preview cards. */
export function ProjectNavRow({ previousProject, nextProject }: ProjectNavRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
      <Link href="/work" className="text-[var(--muted)] transition hover:text-[var(--ink)]">
        ← Back to Work
      </Link>
      <div className="flex flex-wrap items-center gap-6">
        {previousProject ? (
          <Link
            href={`/work-v2/${previousProject.slug}`}
            className="text-[var(--ink)] transition hover:text-[var(--accent-deep)]"
          >
            ← {previousProject.label}
          </Link>
        ) : null}
        {nextProject ? (
          <Link
            href={`/work-v2/${nextProject.slug}`}
            className="text-[var(--ink)] transition hover:text-[var(--accent-deep)]"
          >
            {nextProject.label} →
          </Link>
        ) : null}
      </div>
    </div>
  );
}
