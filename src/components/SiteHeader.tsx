"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { SayHiDialog } from "@/components/SayHiDialog";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/work", label: "Work", exact: false },
  { href: "/about", label: "About", exact: false },
];

/**
 * A glass dock floating at the top of the page, in place of a full-width bar:
 * Home, Work and About in one switcher whose highlight slides to the page you
 * are on, then Say Hi, which opens the contact dialog. The wrapper keeps the
 * height the old bar had, so every page's top spacing is unchanged.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sayHiOpen, setSayHiOpen] = useState(false);
  const activeIndex = links.findIndex((link) =>
    link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(`${link.href}/`),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-50 h-[4.5rem]">
      <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center">
        <nav
          aria-label="Primary"
          className={`nav-dock pointer-events-auto${scrolled ? " is-scrolled" : ""}`}
        >
          <div className="nav-switch" style={{ "--i": Math.max(activeIndex, 0) } as CSSProperties}>
            <span className="nav-switch-thumb" aria-hidden data-on={activeIndex >= 0 ? "true" : "false"} />
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={index === activeIndex ? "page" : undefined}
                className="nav-switch-link"
              >
                {index === 0 ? (
                  <span
                    aria-hidden
                    className="mark-pulse mr-2 inline-block h-2 w-2 rounded-sm bg-[var(--accent)] align-middle"
                  />
                ) : null}
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="button button-primary button-sm"
            aria-haspopup="dialog"
            onClick={() => setSayHiOpen(true)}
          >
            Say Hi
          </button>
        </nav>
      </div>
      <SayHiDialog open={sayHiOpen} onClose={() => setSayHiOpen(false)} />
    </header>
  );
}
