import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services, technologies } from "@/lib/content";
import { Marquee } from "@/components/ui/marquee";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Erba Solutions" },
      { name: "description", content: "Fourteen IT staffing and consulting services designed to scale your business faster — from staff augmentation to executive search and RPO." },
      { property: "og:title", content: "Our Services — Erba Solutions" },
      { property: "og:description", content: "Flexible, high-quality IT staffing and consulting solutions." },
    ],
  }),
  component: ServicesPage,
});

// ── ServiceCard (extracted component) ──────────────────────────────
const ServiceCard = ({ s }: { s: (typeof services)[0] }) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 250, damping: 20 }}
    className="card-surface group flex flex-col hover:shadow-[0_24px_60px_-24px_rgba(11,20,48,0.25)] mb-4"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] transition group-hover:rotate-6 group-hover:bg-[var(--electric)] group-hover:text-white">
      <s.icon size={22} />
    </div>
    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
    {s.features && (
      <ul className="mt-5 space-y-2 border-t border-border pt-5">
        {s.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
            <Check size={14} className="mt-1 shrink-0 text-[var(--electric)]" />
            {f}
          </li>
        ))}
      </ul>
    )}
  </motion.article>
);

// ── Distribute services across 3 columns ───────────────────────────
const col1 = services.filter((_, i) => i % 3 === 0);
const col2 = services.filter((_, i) => i % 3 === 1);
const col3 = services.filter((_, i) => i % 3 === 2);

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        intro="We provide flexible, high-quality IT staffing and consulting solutions designed to meet your unique business needs, helping you scale faster and deliver with confidence."
      />
      <section className=" overflow-hidden">
        <div className="">


          <div className="relative flex h-[780px] flex-row items-start justify-center gap-4">

            {/* col 1 — scrolls down */}
            <Marquee pauseOnHover vertical className="[--duration:28s] [--gap:1rem]">
              {col1.map((s) => <ServiceCard key={s.title} s={s} />)}
            </Marquee>

            {/* col 2 — scrolls up (reverse) */}
            <Marquee reverse pauseOnHover vertical className="[--duration:22s] [--gap:1rem]">
              {col2.map((s) => <ServiceCard key={s.title} s={s} />)}
            </Marquee>

            {/* col 3 — scrolls down, slightly slower */}
            <Marquee pauseOnHover vertical className="[--duration:32s] [--gap:1rem]">
              {col3.map((s) => <ServiceCard key={s.title} s={s} />)}
            </Marquee>

            {/* top fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--ink)] to-transparent z-10" />
            {/* bottom fade */}
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--ink)] to-transparent z-10" /> */}
          </div>

        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-[var(--electric)]">Technologies we staff for</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight lg:text-5xl">
              Twenty in-demand roles across the modern tech stack.
            </h2>
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-3" stagger={0.02}>
            {technologies.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.05, backgroundColor: "var(--electric)", color: "#fff" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="cursor-default rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium"
              >
                {t}
              </motion.span>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
