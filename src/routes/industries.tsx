import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Erba Solutions" },
      { name: "description", content: "From banking and healthcare to public sector and education — IT staffing and technology solutions tailored to nine industries." },
      { property: "og:title", content: "Industries We Serve — Erba Solutions" },
      { property: "og:description", content: "Industry-specific IT staffing and consulting solutions." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Industries We Serve"
        intro="Specialized IT staffing and technology solutions tailored to the unique demands of nine industries — from highly regulated finance and healthcare to fast-moving retail and e-commerce."
      />

      <section className="section">
        <div className="container-x">
          <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {industries.map((ind, i) => (
              <motion.article
                key={ind.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`card-surface group flex h-full flex-col hover:shadow-[0_24px_60px_-24px_rgba(11,20,48,0.25)] ${
                  i % 4 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--electric)] to-[var(--electric-glow)] text-white shadow-[0_10px_30px_-10px_var(--electric)] transition group-hover:rotate-6">
                  <ind.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold leading-snug">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </motion.article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
