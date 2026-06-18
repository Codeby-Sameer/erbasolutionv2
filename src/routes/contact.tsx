import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Mail, MapPin, Phone, Linkedin, Twitter, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Erba Solutions" },
      { name: "description", content: "Let's connect. Share your hiring needs and our team will respond with the right IT talent solution." },
      { property: "og:title", content: "Contact Erba Solutions" },
      { property: "og:description", content: "Let's connect — share your hiring needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let's <span className="text-[var(--electric-glow)]">connect</span>.</>}
        intro="We're here to understand your hiring needs, explore collaboration opportunities, and provide the right IT talent solutions to support your business growth."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow text-[var(--electric)]">Get support</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
              Share your requirement and our team will connect you with the right expert.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Have a question or need assistance? Whether it's about our services, staffing
              solutions, partnerships, or general information, we're listening.
            </p>

            <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
              <Field label="First Name" id="firstName" />
              <Field label="Last Name" id="lastName" />
              <Field label="Email" id="email" type="email" className="sm:col-span-2" />
              <Field label="Phone" id="phone" type="tel" className="sm:col-span-2" />
              <Field label="Message / Details" id="message" textarea className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sent" ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 rounded-full bg-[var(--electric)]/10 px-6 py-3 text-sm font-semibold text-[var(--electric)]"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="grid h-6 w-6 place-items-center rounded-full bg-[var(--electric)] text-white"
                      >
                        <Check size={14} />
                      </motion.span>
                      Message sent — we'll be in touch shortly.
                    </motion.div>
                  ) : (
                    <motion.button
                      key="btn"
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary"
                      whileTap={{ scale: 0.97 }}
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>

          <Reveal className="space-y-6" stagger={0.00}>
            <div className="card-surface bg-[var(--ink)] text-white">
              <p className="eyebrow text-[var(--electric-glow)]">Direct contact</p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-[var(--electric-glow)]" />
                  <div>
                    <p className="font-semibold text-white">Headquarters</p>
                    <p className="text-white/70">United States · Address coming soon</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-[var(--electric-glow)]" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-white/70">+1 (000) 000-0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-[var(--electric-glow)]" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/70">hello@erbasolutions.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-surface">
              <p className="eyebrow text-[var(--electric)]">Follow us</p>
              <div className="mt-4 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border transition hover:border-[var(--electric)] hover:text-[var(--electric)]">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="grid h-12 w-12 place-items-center rounded-full border transition hover:border-[var(--electric)] hover:text-[var(--electric)]">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, id, type = "text", textarea, className = "",
}: {
  label: string; id: string; type?: string; textarea?: boolean; className?: string;
}) {
  const base =
    "peer w-full rounded-xl border border-border bg-background px-4 pb-2.5 pt-6 text-sm outline-none transition focus:border-[var(--electric)] focus:ring-2 focus:ring-[var(--electric)]/20";
  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea id={id} name={id} rows={5} placeholder=" " className={base} required />
      ) : (
        <input id={id} name={id} type={type} placeholder=" " className={base} required />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--electric)]"
      >
        {label}
      </label>
    </div>
  );
}
