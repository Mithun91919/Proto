import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[46rem] flex-col px-5 py-24 md:px-8">
      <p className="eyebrow">404</p>
      <h1 className="display-title display-hero mt-4 text-[var(--ink)]">
        Page not found
      </h1>
      <p className="mt-5 text-lg text-[var(--ink-soft)]">
        That route does not exist. Head back to the selected work.
      </p>
      <Link href="/work" className="button button-primary mt-8 w-fit">
        View work
      </Link>
    </div>
  );
}
