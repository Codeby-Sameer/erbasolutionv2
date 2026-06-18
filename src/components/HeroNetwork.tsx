import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Lightweight SVG "node network" hero accent — connecting talent visual.
 * Auto-rotates subtly, tilts toward cursor. SSR-safe, no WebGL.
 */
export function HeroNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setTilt({ x: x * 8, y: y * 8 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  // Pre-laid node positions (deterministic, looks designed not random)
  const nodes = [
    { x: 50, y: 120 }, { x: 180, y: 60 }, { x: 320, y: 140 },
    { x: 460, y: 80 }, { x: 600, y: 160 }, { x: 720, y: 100 },
    { x: 120, y: 260 }, { x: 280, y: 320 }, { x: 440, y: 280 },
    { x: 580, y: 340 }, { x: 700, y: 280 }, { x: 200, y: 440 },
    { x: 380, y: 460 }, { x: 540, y: 420 }, { x: 680, y: 480 },
  ];
  const edges: Array<[number, number]> = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[1,7],[2,8],[3,9],[4,10],
    [6,7],[7,8],[8,9],[9,10],[6,11],[7,12],[8,12],[9,13],[10,14],
    [11,12],[12,13],[13,14],[1,6],[3,8],[5,10],
  ];

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Ambient glows */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[var(--electric)] opacity-20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--amber)] opacity-10 blur-3xl" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      >
        <motion.svg
          viewBox="0 0 800 540"
          className="absolute inset-0 h-full w-full"
          animate={reduce ? {} : { rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <radialGradient id="nodeGrad">
              <stop offset="0%" stopColor="#7BA0FF" stopOpacity="1" />
              <stop offset="60%" stopColor="#3D6BFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3D6BFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3D6BFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#7BA0FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3D6BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="url(#edgeGrad)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.04, ease: "easeOut" }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.g
              key={i}
              animate={reduce ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            >
              <circle cx={n.x} cy={n.y} r={18} fill="url(#nodeGrad)" opacity={0.6} />
              <motion.circle
                cx={n.x} cy={n.y} r={3}
                fill="#FFFFFF"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05, type: "spring", stiffness: 200 }}
              />
            </motion.g>
          ))}
        </motion.svg>
      </motion.div>
    </div>
  );
}
