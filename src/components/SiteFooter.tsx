import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="ds-pull mt-auto">
      <div
        className="relative mx-auto flex w-full max-w-[80rem] flex-col gap-3 px-5 py-9 text-sm md:flex-row md:items-center md:justify-between md:px-8"
        style={{ color: "var(--ds-dark-muted)" }}
      >
        <p>© {new Date().getFullYear()} Mithun Raju</p>

        {/* Colophon. The design system is linked plainly, as a page worth
            reading — not as evidence of anything. Framing it as proof the
            site is hand-built would raise a doubt no reader arrived with,
            and the page argues better on its own terms: it is the one
            place on the site where the systems thinking is applied to
            something entirely Mithun's. */}
        <p className="flex flex-wrap items-center gap-x-5 gap-y-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em]">
          <Link
            href="/components"
            className="inline-block py-1 -my-1 underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Design system
          </Link>
          <span>
            Built with{" "}
            <span role="img" aria-label="love" style={{ margin: "0 0.15ch" }}>
              ♥
            </span>{" "}
            using{" "}
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 -my-1 underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              Claude.ai
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
