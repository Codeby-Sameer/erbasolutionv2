import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { careerPrograms } from "@/lib/content";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Erba Solutions" },
      { name: "description", content: "Eight unique career programs at Erba Solutions — from emerging talent to leadership development. Grow with us." },
      { property: "og:title", content: "Careers at Erba Solutions" },
      { property: "og:description", content: "Unique career programs designed to grow your future." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Unique career programs we offer."
        intro="Eight structured programs designed to meet you where you are — whether you're a recent grad, a seasoned engineer, or a future leader."
      />

      <section className="section">
        <div className="container-x">
          <Reveal className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {careerPrograms.map((p, i) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="card-surface group flex h-full flex-col hover:shadow-[0_24px_60px_-24px_rgba(11,20,48,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <div className="font-display text-3xl font-bold text-[var(--electric)]">
                    0{i + 1}
                  </div>
                  <ArrowRight className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-[var(--electric)]" size={20} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="eyebrow text-foreground/60">Benefits</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.benefits.map((b) => (
                      <span key={b} className="rounded-full bg-[var(--ink)]/5 px-3 py-1.5 text-xs font-medium text-foreground/80">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
