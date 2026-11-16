"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SayHiDialog } from "@/components/SayHiDialog";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sayHiOpen, setSayHiOpen] = useState(false);
  const activeIndex = links.findIndex(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_72%,transparent)] shadow-[var(--shadow-header)] backdrop-blur-2xl"
          : "border-transparent bg-[color-mix(in_oklab,var(--paper)_40%,transparent)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-8">
        <Link
          href="/"
          className="display-title group flex items-center gap-2 text-[1.15rem] text-[var(--ink)]"
        >
          <span
            aria-hidden
            className="mark-pulse inline-block h-2.5 w-2.5 rounded-sm bg-[var(--accent)] shadow-[var(--shadow-mark)] transition-transform duration-300 group-hover:scale-125"
          />
          Mithun.
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <div className="nav-switch" style={{ "--i": Math.max(activeIndex, 0) } as React.CSSProperties}>
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
          <button
            type="button"
            className="button button-primary button-sm"
            aria-haspopup="dialog"
            onClick={() => setSayHiOpen(true)}
          >
            Say Hi
          </button>
        </nav>
        <SayHiDialog open={sayHiOpen} onClose={() => setSayHiOpen(false)} />
      </div>
    </header>
  );
}
