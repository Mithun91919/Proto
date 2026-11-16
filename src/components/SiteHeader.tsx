"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { ConfidentialPill } from "@/components/ConfidentialPill";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { SayHiDialog } from "@/components/SayHiDialog";
import { setCaseStudyView, useCaseStudyView } from "@/components/caseStudyView";
import { caseStudySlug, shortTitle } from "@/content/case-study-nav";
import { readTime } from "@/content/read-time";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/work", label: "Work", exact: false },
  { href: "/about", label: "About", exact: false },
];

const views = [
  { value: "full", label: "Case study" },
  { value: "summary", label: "Summary" },
] as const;

/**
 * Three floating pieces in place of a full-width bar.
 *
 * On most pages: the name at the left, Home, Work and About in a switcher in
 * the middle, and Say Hi at the right.
 *
 * Inside a case study the same three places change to suit it: a back pill
 * with the project's short name and how long the current view takes to read, a switch between the full case study and its
 * summary, and the confidentiality note beside Say Hi. The highlight in the
 * switcher is the primary-button accent and slides to the current choice.
 *
 * The wrapper keeps the height the old bar had, so every page's top spacing is
 * unchanged, and the dock hides on scroll down and returns on scroll up.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const slug = caseStudySlug(pathname);
  const view = useCaseStudyView();
  const [sayHiOpen, setSayHiOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");

  const activeIndex = slug
    ? views.findIndex((item) => item.value === view)
    : links.findIndex((link) =>
        link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(`${link.href}/`),
      );
  const count = slug ? views.length : links.length;

  // Out of the way while reading down, back on the first scroll up. Always
  // there near the top of a page, and whenever focus moves into it. Over a dark
  // band, such as a case study's hero or a pull statement, the glass takes the
  // dark tone, then goes back to light once the band has scrolled behind it.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < 120) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      if (Math.abs(y - last) > 6) last = y;
      // What the dock is floating over: sampled in the empty gutter beside it.
      const under = document.elementsFromPoint(8, 40).find((el) => el.closest(".ds-pull, .ds-env-dark"));
      setTone(under ? "dark" : "light");
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header className="site-spacer relative z-50 h-[4.5rem]">
      <div
        data-tone={tone}
        className={`site-dock pointer-events-none fixed inset-x-0 top-3 z-50${hidden ? " is-hidden" : ""}`}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="mx-auto grid w-full max-w-[80rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-8">
          {slug ? (
            <GlassPanel variant="lift" className="nav-dock nav-brand pointer-events-auto justify-self-start">
              <Link href="/work" className="nav-back" aria-label="Back to Work">
                <span aria-hidden>←</span> Work
              </Link>
              <span className="nav-title">{shortTitle(slug)}</span>
              {readTime(slug, view) ? <span className="nav-meta">{readTime(slug, view)}</span> : null}
            </GlassPanel>
          ) : (
            <GlassPanel variant="lift" className="nav-dock nav-brand pointer-events-auto justify-self-start">
              <Link href="/" className="flex items-center gap-2.5 no-underline">
                <span
                  aria-hidden
                  className="mark-pulse inline-block h-2.5 w-2.5 rounded-sm bg-[var(--accent)] shadow-[var(--shadow-mark)]"
                />
                <span className="display-title text-[1.05rem] text-[var(--dock-ink)]">Mithun.</span>
              </Link>
            </GlassPanel>
          )}

          <GlassPanel variant="lift" as="nav" aria-label="Primary" className="nav-dock pointer-events-auto">
            <div
              className="nav-switch"
              style={{ "--i": Math.max(activeIndex, 0), "--n": count } as CSSProperties}
            >
              <span className="nav-switch-thumb" aria-hidden data-on={activeIndex >= 0 ? "true" : "false"} />
              {slug
                ? views.map((item, index) => (
                    <button
                      key={item.value}
                      type="button"
                      aria-pressed={index === activeIndex}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className="nav-switch-link"
                      onClick={() => setCaseStudyView(item.value)}
                    >
                      {item.label}
                    </button>
                  ))
                : links.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={index === activeIndex ? "page" : undefined}
                      className="nav-switch-link"
                    >
                      {link.label}
                    </Link>
                  ))}
            </div>
          </GlassPanel>

          <div className="pointer-events-none flex items-center gap-3 justify-self-end">
            {slug ? <ConfidentialPill /> : null}
            <button
              type="button"
              className="button button-primary button-sm pointer-events-auto"
              aria-haspopup="dialog"
              onClick={() => setSayHiOpen(true)}
            >
              Say Hi
            </button>
          </div>
        </div>
      </div>
      <SayHiDialog open={sayHiOpen} onClose={() => setSayHiOpen(false)} />
    </header>
  );
}
