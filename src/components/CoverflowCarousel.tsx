import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CoverflowItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface Props {
  items: CoverflowItem[];
}

export function CoverflowCarousel({ items }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false, dragFree: false },
    [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [styles, setStyles] = useState<React.CSSProperties[]>([]);

  const apply = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const scrollSnaps = emblaApi.scrollSnapList();
    const slidesInView = emblaApi.slidesInView();
    const next: React.CSSProperties[] = items.map(() => ({
      opacity: 0,
      transform: "scale(0.6) translateX(0)",
    }));

    scrollSnaps.forEach((snap, snapIdx) => {
      let diff = snap - scrollProgress;
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((lp) => {
          const target = lp.target();
          if (snapIdx === lp.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diff = snap - (1 + scrollProgress);
            if (sign === 1) diff = snap + (1 - scrollProgress);
          }
        });
      }
      const abs = Math.abs(diff);
      const clamp = Math.min(abs, 1.5);
      const scale = 1 - clamp * 0.22;
      const translate = diff * 55; // % of slide
      const rotate = diff * -18;
      const opacity = abs > 1.4 ? 0 : 1 - clamp * 0.45;
      const z = Math.round(100 - abs * 20);
      next[snapIdx] = {
        transform: `translateX(${translate}%) scale(${scale}) rotateY(${rotate}deg)`,
        opacity,
        zIndex: z,
        filter: abs > 0.05 ? `blur(${Math.min(abs * 1.2, 2)}px)` : "none",
        pointerEvents: abs < 0.5 ? "auto" : "none",
      };
    });
    // Ensure off-screen slides hide
    items.forEach((_, i) => {
      if (!slidesInView.includes(i) && !next[i].transform) {
        next[i] = { ...next[i], opacity: 0 };
      }
    });
    setStyles(next);
  }, [emblaApi, items]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    apply();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", apply);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
      apply();
    });
  }, [emblaApi, apply]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden py-12"
        style={{ perspective: "1400px" }}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative min-w-0 shrink-0 grow-0 basis-[70%] px-4 sm:basis-[55%] lg:basis-[42%]"
                style={{
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease, filter 500ms ease",
                  willChange: "transform, opacity",
                  ...styles[i],
                }}
              >
                <article className="card-surface group relative h-full overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--electric)]/60 to-transparent" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--electric)]/10 text-[var(--electric)]">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--electric)]">
                    Learn more
                    <ChevronRight size={16} />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-6">
        <button
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur transition hover:border-[var(--electric)] hover:text-[var(--electric)]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur transition hover:border-[var(--electric)] hover:text-[var(--electric)]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-[var(--electric)]"
                : "w-2 bg-border hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
