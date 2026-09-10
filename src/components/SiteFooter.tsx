export function SiteFooter() {
  return (
    <footer className="ds-pull mt-auto">
      <div
        className="relative mx-auto flex w-full max-w-[80rem] flex-col gap-3 px-5 py-9 text-sm md:flex-row md:items-center md:justify-between md:px-8"
        style={{ color: "var(--ds-dark-muted)" }}
      >
        <p>© {new Date().getFullYear()} Mithun Raju</p>
        <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em]">
          Built with{" "}
          <span role="img" aria-label="love" style={{ margin: "0 0.15ch" }}>
            ♥
          </span>{" "}
          with{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Claude.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
