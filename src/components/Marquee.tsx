import type { ReactNode } from "react";

export function Marquee({
  children,
  speed = 40,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`group relative flex w-full overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-[marquee_var(--dur)_linear_infinite] gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ ["--dur" as string]: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 animate-[marquee_var(--dur)_linear_infinite] gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ ["--dur" as string]: `${speed}s` }}
        aria-hidden
      >
        {children}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-100%) } }`}</style>
    </div>
  );
}
