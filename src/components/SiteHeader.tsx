"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { SayHiDialog } from "@/components/SayHiDialog";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/work", label: "Work", exact: false },
  { href: "/about", label: "About", exact: false },
];

/**
 * Three floating pieces in place of a full-width bar: the name at the left on
 * a glass surface, Home, Work and About on another in the middle, with a
 * highlight in the primary-button accent that slides to the page you are on,
 * and Say Hi at the right, which opens the contact dialog. The wrapper keeps
 * the height the old bar had, so every page's top spacing is unchanged.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [sayHiOpen, setSayHiOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const activeIndex = links.findIndex((link) =>
    link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(`${link.href}/`),
  );

  // Out of the way while reading down, back on the first scroll up. Always
  // there near the top of a page, and whenever focus moves into it.
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
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="relative z-50 h-[4.5rem]">
      <div
        className={`site-dock pointer-events-none fixed inset-x-0 top-3 z-50${hidden ? " is-hidden" : ""}`}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="mx-auto grid w-full max-w-[80rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-8">
          <GlassPanel variant="lift" className="nav-dock nav-brand pointer-events-auto justify-self-start">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <span
                aria-hidden
                className="mark-pulse inline-block h-2.5 w-2.5 rounded-sm bg-[var(--accent)] shadow-[var(--shadow-mark)]"
              />
              <span className="display-title text-[1.05rem] text-[var(--ink)]">Mithun.</span>
            </Link>
          </GlassPanel>

          <GlassPanel variant="lift" as="nav" aria-label="Primary" className="nav-dock pointer-events-auto">
            <div className="nav-switch" style={{ "--i": Math.max(activeIndex, 0) } as CSSProperties}>
              <span className="nav-switch-thumb" aria-hidden data-on={activeIndex >= 0 ? "true" : "false"} />
              {links.map((link, index) => (
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

          <button
            type="button"
            className="button button-primary button-sm pointer-events-auto justify-self-end"
            aria-haspopup="dialog"
            onClick={() => setSayHiOpen(true)}
          >
            Say Hi
          </button>
        </div>
      </div>
      <SayHiDialog open={sayHiOpen} onClose={() => setSayHiOpen(false)} />
    </header>
  );
}
