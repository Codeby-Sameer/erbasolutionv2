import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-24 text-white">
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--electric)] opacity-25 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--amber)] opacity-15 blur-3xl" />
      <div className="container-x relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-[var(--electric-glow)]">Let's Connect</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-3 max-w-2xl text-balance text-3xl font-bold leading-tight lg:text-5xl"
          >
            We're here to understand your hiring needs and deliver the right IT talent.
          </motion.h2>
        </div>
        <Link to="/contact">
          <MagneticButton className="text-base">
            Get In Touch <ArrowRight size={18} />
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}
