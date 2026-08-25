import Link from "next/link";
import type { DeepDiveCTASection } from "@/content/case-study-v2/types";

type DeepDiveCTAProps = { section: DeepDiveCTASection };

/** Flagship-only: points to a protected companion page. Never rendered when a project has none. */
export function DeepDiveCTA({ section }: DeepDiveCTAProps) {
  const { heading, body, href, cta } = section;

  return (
    <div className="glass-panel p-8 text-center md:p-10">
      <h2 className="display-title display-sub text-[var(--ink)]">{heading}</h2>
      {body ? <p className="mx-auto mt-3 max-w-[52ch] body-sm">{body}</p> : null}
      <Link href={href} className="button button-primary mt-6">
        {cta} 🔒
      </Link>
    </div>
  );
}
