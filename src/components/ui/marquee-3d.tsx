"use client";

import { services } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import type { LucideIcon } from "lucide-react";

const firstRow = services.slice(0, Math.ceil(services.length / 4));
const secondRow = services.slice(
  Math.ceil(services.length / 4),
  Math.ceil(services.length / 2)
);
const thirdRow = services.slice(
  Math.ceil(services.length / 2),
  Math.ceil((services.length * 3) / 4)
);
const fourthRow = services.slice(Math.ceil((services.length * 3) / 4));

type ServiceCardProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
  features?: string[];
};

const ServiceCard = ({
  title,
  desc,
  icon: Icon,
  features,
}: ServiceCardProps) => {
  return (
    <figure
      className={cn(
        "group relative w-[320px] overflow-hidden rounded-3xl",
        "border border-white/18",
        "bg-white/[0.08]",
        "backdrop-blur-2xl backdrop-saturate-150",
        "p-6",
        "shadow-[0_20px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18)]",
        "transition-all duration-500 hover:scale-[1.03]",
        "hover:border-white/35 hover:bg-white/[0.12]"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-white/[0.03] to-cyan-300/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-4">
          <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/20">
            <Icon className="h-6 w-6 text-[var(--electric-glow)]" />
          </div>

          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <p className="mb-4 line-clamp-5 text-sm leading-6 text-white/72">
          {desc}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-white/58"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric-glow)]" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(47,137,255,0.18),transparent_34%)]" />

      <div className="relative flex h-[700px] w-full items-center justify-center overflow-hidden [perspective:1000px]">
        <div
          className="flex flex-row gap-6"
          style={{
            transform:
              "translateX(-120px) translateY(-30px) translateZ(-120px) rotateX(18deg) rotateY(-12deg) rotateZ(10deg)",
          }}
        >
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:12s] gap-6"
          >
            {firstRow.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Marquee>

          <Marquee
            reverse
            vertical
            pauseOnHover
            className="[--duration:40s] gap-6"
          >
            {secondRow.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            className="[--duration:45s] gap-6"
          >
            {thirdRow.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Marquee>

          <Marquee
            reverse
            vertical
            pauseOnHover
            className="[--duration:50s] gap-6"
          >
            {fourthRow.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Marquee>
        </div>

        {/* Top Fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--ink)] to-transparent" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent" />

        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--ink)] to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--ink)] to-transparent" />
      </div>
    </section>
  );
}

export default Marquee3D;
