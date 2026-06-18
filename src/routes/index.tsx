import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { HeroNetwork } from "@/components/HeroNetwork";
import { MorphingText } from "@/components/ui/morphing-text"
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Marquee as MagicMarquee } from "@/components/ui/marquee";
import { CtaBanner } from "@/components/CtaBanner";
import { services, stats, whyChooseUs, industries, technologies } from "@/lib/content";
import teamGroup from "@/assets/team-group.jpg";
import Marquee3D from "@/components/ui/marquee-3d";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erba Solutions — Connecting Talent. Driving Innovation." },
      { name: "description", content: "IT staffing, recruitment, and technology consulting that helps American businesses scale faster and build high-performing teams." },
      { property: "og:title", content: "Erba Solutions — IT Staffing & Technology Consulting" },
      { property: "og:description", content: "Connecting talent. Driving innovation. Delivering success." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <MorphingText texts={["Hello", "World"]}  />
      <Intro />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <TeamSection />
      <IndustriesStrip />
      <TechMarquee />
      <CtaBanner />
    </>
  );
}

function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = headlineRef.current;
    if (!h) return;
    const words = h.innerText.split(" ");
    h.innerHTML = words
      .map((w) => `<span class="inline-block overflow-hidden align-bottom"><span class="word inline-block">${w}</span></span>`)
      .join(" ");
    const wordEls = h.querySelectorAll(".word");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(wordEls, { yPercent: 110, duration: 0.9, stagger: 0.06 })
      .from(subRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
      .from(ctaRef.current?.children ?? [], { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.4");
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--ink)] text-white">
      <HeroNetwork />
      <div className="container-x relative flex min-h-screen flex-col justify-center pb-16 pt-32 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="eyebrow text-[var(--electric-glow)]"
        >
          IT Staffing · Recruitment · Consulting
        </motion.p>
        <h1
          ref={headlineRef}
          className="mt-6 max-w-5xl text-balance text-5xl font-bold leading-[1.02] lg:text-[5.5rem]"
        >
          Connecting Talent. Driving Innovation. Delivering Success.
        </h1>
        <p ref={subRef} className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl">
          IT staffing, recruitment, and technology consulting solutions that help American
          businesses scale faster and build high-performing teams.
        </p>
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/contact">
            <MagneticButton className="text-base">
              Build Your Team <ArrowRight size={18} />
            </MagneticButton>
          </Link>
          <Link to="/services">
            <MagneticButton variant="ghost" className="text-base text-white">
              Explore Services <ArrowUpRight size={18} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <Reveal>
          <p className="eyebrow text-[var(--electric)]">Who we are</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            A trusted partner for technology and talent.
          </h2>
        </Reveal>
        <Reveal className="text-lg leading-relaxed text-muted-foreground">
          <p>
            We are a trusted IT staffing and consulting partner committed to helping businesses
            build high-performing teams and successfully execute technology initiatives. Our
            expertise spans recruitment, staff augmentation, software development, cloud
            solutions, data analytics, cybersecurity, and digital transformation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[var(--ink)] py-20 text-white">
      <div className="container-x">
        <Reveal
          className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-5"
          stagger={0.1}
        >
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-6">
              <div className="font-display text-5xl font-bold leading-none text-white lg:text-6xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm leading-snug text-white/60">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section bg-[var(--paper)]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow text-[var(--electric)]">What we do</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight lg:text-5xl">
              Staffing and consulting built for speed and quality.
            </h2>
          </Reveal>
          <Link to="/services" className="btn-ghost text-foreground">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
          
      </div>
              <Reveal stagger={0.06}>

          <Marquee3D/>
          </Reveal>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={teamGroup}
              alt="The Erba Solutions team"
              loading="lazy"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl bg-[var(--electric)] lg:block" />
        </Reveal>
        <Reveal>
          <p className="eyebrow text-[var(--electric)]">Meet the team</p>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight lg:text-5xl">
            People who care about your hires as much as you do.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Recruiters, technologists, and advisors working as one extended team —
            obsessed with matching the right person to the right problem, fast.
            We bring deep technical fluency, an active talent network, and a
            customer-first mindset to every engagement.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <div className="font-display text-3xl font-bold text-[var(--ink)]">15+</div>
              <p className="mt-1 text-xs text-muted-foreground">Avg. years of experience</p>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--ink)]">24h</div>
              <p className="mt-1 text-xs text-muted-foreground">Typical first-submit time</p>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-[var(--ink)]">1:1</div>
              <p className="mt-1 text-xs text-muted-foreground">Dedicated account lead</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-[var(--electric)]">Why choose us</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight lg:text-5xl">
            Six reasons leading teams partner with Erba.
          </h2>
        </Reveal>
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {whyChooseUs.map((w, i) => (
            <div
              key={w.title}
              className="group relative bg-background p-8 transition hover:bg-[var(--ink)] hover:text-white"
            >
              <div className="font-display text-sm font-semibold text-[var(--electric)] group-hover:text-[var(--electric-glow)]">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                {w.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  return (
    <section className="border-y bg-[var(--paper)] py-16">
      <div className="container-x mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-[var(--electric)]">Industries we serve</p>
          <h3 className="mt-3 text-2xl font-bold lg:text-3xl">From banking to healthcare to public sector.</h3>
        </div>
        <Link to="/industries" className="hidden text-sm font-medium text-[var(--electric)] hover:underline md:inline-flex">
          Explore industries →
        </Link>
      </div>
      <Marquee speed={60}>
        {industries.map((i) => (
          <Link
            key={i.title}
            to="/industries"
            className="flex items-center gap-3 whitespace-nowrap text-base font-medium text-foreground/80 hover:text-[var(--electric)]"
          >
            <i.icon size={20} className="text-[var(--electric)]" />
            {i.title}
            <span className="ml-12 text-border">/</span>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}

function TechMarquee() {
  return (
    <section className="section bg-[var(--ink)] text-white">
      <div className="container-x mb-12 text-center">
        <p className="eyebrow text-[var(--electric-glow)]">Technologies we staff for</p>
        <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">
          Twenty in-demand roles, ready to deploy.
        </h2>
      </div>
      <Marquee speed={50}>
        {technologies.map((t) => (
          <span
            key={t}
            className="whitespace-nowrap rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition hover:border-[var(--electric)] hover:text-white"
          >
            {t}
          </span>
        ))}
      </Marquee>
      <div className="mt-8">
        <Marquee speed={45}>
          {[...technologies].reverse().map((t) => (
            <span
              key={t + "r"}
              className="whitespace-nowrap rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition hover:border-[var(--amber)] hover:text-white"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
