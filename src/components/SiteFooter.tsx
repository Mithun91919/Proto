import Link from "next/link";

/* A global rule resets link underlines and outranks the utility classes, so the
   underline is set inline here rather than relying on `underline`. */
const underlined = { textDecoration: "underline", textUnderlineOffset: "3px" } as const;
const mono =
  "font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em]";

export function SiteFooter() {
  return (
    <footer className="ds-pull mt-auto">
      <div
        className="relative mx-auto grid w-full max-w-[80rem] grid-cols-1 items-center gap-4 px-5 py-9 text-sm md:grid-cols-3 md:px-8"
        style={{ color: "var(--ds-dark-muted)" }}
      >
        <p className="md:justify-self-start">© {new Date().getFullYear()} Mithun Raju</p>

        {/* Colophon, in the middle. The design system is linked plainly, as a
            page worth reading — not as evidence of anything. Framing it as
            proof the site is hand-built would raise a doubt no reader arrived
            with, and the page argues better on its own terms: it is the one
            place on the site where the systems thinking is applied to
            something entirely Mithun's. */}
        <p className={`${mono} md:justify-self-center`}>
          Built with{" "}
          <span role="img" aria-label="love" style={{ margin: "0 0.15ch" }}>
            ♥
          </span>{" "}
          using{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 -my-1 transition-opacity hover:opacity-70"
            style={underlined}
          >
            Claude.ai
          </a>
        </p>

        <p className={`${mono} flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-self-end`}>
          <a
            href="https://www.linkedin.com/in/mithunrajuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 -my-1 transition-opacity hover:opacity-70"
            style={underlined}
          >
            LinkedIn
          </a>
          <Link
            href="/components"
            className="inline-block py-1 -my-1 transition-opacity hover:opacity-70"
            style={underlined}
          >
            Design system
          </Link>
        </p>
      </div>
    </footer>
  );
}
