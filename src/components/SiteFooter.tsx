export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-[70rem] flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Mithun Raju</p>
        <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em]">
          Designed and built by Mithun Raju
        </p>
      </div>
    </footer>
  );
}
