import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Erba Solutions" },
      { name: "description", content: "Built on expertise, innovation, and trusted partnerships — Erba Solutions powers people and technology since 2022." },
      { property: "og:title", content: "About Erba Solutions" },
      { property: "og:description", content: "A company that powers people and technology." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { label: "Our Commitment", body: "We are committed to connecting businesses with the right talent by combining industry expertise, efficient recruitment practices, and a people-first approach that drives long-term success." },
  { label: "Our Vision", body: "To be a trusted global IT staffing and consulting partner, recognized for delivering exceptional talent solutions that empower businesses to scale efficiently, innovate continuously, and achieve sustainable growth through the power of people and technology." },
  { label: "Our Mission", body: "Our mission is to deliver trusted IT staffing and consulting solutions that help organizations build strong, capable teams while enabling technology professionals to find the right opportunities to grow, contribute, and succeed in a rapidly evolving digital world." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Erba"
        title={<>A company that powers <span className="text-[var(--electric-glow)]">people and technology</span>.</>}
        intro="At Erba Solutions, we believe technology is most impactful when driven by people. We are a technology and consulting company built on expertise, innovation, and trusted partnerships that businesses can rely on through every challenge and opportunity."
      />

      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="eyebrow text-[var(--electric)]">Our story</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Founded in 2022 with a clear purpose.
            </h2>
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground" stagger={0.12}>
            <p>
              Established in 2022, Erba Solutions was founded with a simple purpose—to make IT
              hiring faster, smarter, and more reliable for businesses navigating digital
              transformation.
            </p>
            <p>
              We started as a focused staffing partner, helping organizations find skilled
              technology professionals who could contribute from day one. As we grew, so did our
              capabilities, expanding into broader IT consulting and workforce solutions that
              support end-to-end project needs.
            </p>
            <p>
              Today, we work with clients across multiple industries, including banking,
              healthcare, retail, telecommunications, and enterprise IT. Our approach is centered
              on understanding business challenges and delivering the right talent with speed,
              quality, and consistency.
            </p>
            <p>
              At Erba Solutions, we believe success is built through strong relationships,
              dependable service, and a commitment to continuous improvement. We continue to
              evolve with the same founding principle—to connect the right people with the right
              opportunities and help organizations achieve their goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="container-x">
          <Reveal className="grid gap-6 lg:grid-cols-3" stagger={0.0}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="card-surface flex h-full flex-col"
              >
                <div className="font-display text-sm font-semibold text-[var(--electric)]">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
