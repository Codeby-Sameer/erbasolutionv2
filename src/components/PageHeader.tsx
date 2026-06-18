import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-40 text-white lg:pb-28 lg:pt-48">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--electric)] opacity-20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[var(--amber)] opacity-10 blur-3xl" />
      <div className="container-x relative">
        {eyebrow && <p className="eyebrow text-[var(--electric-glow)]">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-bold leading-[1.05] lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
