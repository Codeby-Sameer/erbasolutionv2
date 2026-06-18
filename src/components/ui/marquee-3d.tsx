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
        "border border-white/10",
        "bg-gradient-to-br from-slate-900/90 to-slate-800/80",
        "backdrop-blur-xl",
        "p-6",
        "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-500 hover:scale-[1.03]",
        "hover:border-blue-500/30"
      )}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-500/10 p-3 ring-1 ring-blue-500/20">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>

          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <p className="mb-4 text-sm leading-6 text-slate-300 line-clamp-5">
          {desc}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
    </section>
  );
}

export default Marquee3D;