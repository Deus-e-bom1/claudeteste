import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

type Props = {
  holder?: string;
  className?: string;
  /** Enables pointer-driven 3D tilt. */
  interactive?: boolean;
};

/**
 * Original metallic card (titanium finish) drawn with CSS/SVG.
 * Fictional brand, demonstration holder name, no real numbers.
 */
export default function CreditCard({
  holder = "SEU NOME AQUI",
  className = "",
  interactive = true,
}: Props) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 16 });
  const sy = useSpring(my, { stiffness: 120, damping: 16 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const sheenX = useTransform(sx, [-0.5, 0.5], ["-30%", "130%"]);
  const shadowX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const shadow = useTransform(
    shadowX,
    (x) => `${x}px 44px 70px -22px rgba(0,0,0,0.38), 0 14px 26px -14px rgba(0,0,0,0.3)`
  );

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className={`[perspective:1200px] ${className}`}>
      <motion.div
        className="[transform-style:preserve-3d]"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          style={{
            rotateX: reduce ? 0 : rotateX,
            rotateY: reduce ? 0 : rotateY,
            boxShadow: reduce
              ? "0 40px 80px -24px rgba(0,0,0,0.35)"
              : shadow,
          }}
          className="titanium titanium-brushed relative aspect-[1.586/1] w-full overflow-hidden rounded-[6.5%/10.3%] ring-1 ring-white/70"
          role="img"
          aria-label="Cartão metálico Argenta, versão de demonstração"
        >
          {/* moving sheen */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            style={{ left: reduce ? "40%" : sheenX }}
          />
          {/* edge light */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.12)]"
          />

          {/* brand mark */}
          <div className="absolute left-[7%] top-[11%] flex items-center gap-2 text-[#2b2b2f]">
            <svg viewBox="0 0 24 24" className="h-[clamp(14px,2.4vw,26px)] w-[clamp(14px,2.4vw,26px)]" aria-hidden>
              <path d="M12 2 22 20H2L12 2Z" fill="#2b2b2f" />
              <path d="M12 9.5 16.2 17H7.8L12 9.5Z" fill="#e9eaed" />
            </svg>
            <span className="text-[clamp(11px,1.8vw,20px)] font-semibold tracking-tight">Argenta</span>
          </div>

          {/* chip */}
          <div className="absolute left-[7%] top-[38%] aspect-[1.3/1] w-[15%]">
            <svg viewBox="0 0 52 40" className="h-full w-full" aria-hidden>
              <defs>
                <linearGradient id="chip-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f0f0f2" />
                  <stop offset="0.5" stopColor="#a9adb5" />
                  <stop offset="1" stopColor="#e4e5e8" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="50" height="38" rx="7" fill="url(#chip-g)" stroke="#8a8e96" strokeWidth="1" />
              <g stroke="#7d818a" strokeWidth="1" fill="none" opacity="0.8">
                <path d="M1 14h14a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H1" />
                <path d="M51 14H37a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h14" />
                <path d="M19 1v10M33 1v10M19 29v10M33 29v10M19 18h14v4H19z" />
              </g>
            </svg>
          </div>

          {/* contactless */}
          <svg
            viewBox="0 0 24 24"
            className="absolute right-[7%] top-[12%] h-[clamp(14px,2.6vw,28px)] w-[clamp(14px,2.6vw,28px)] text-[#3b3b40]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M8 9a5 5 0 0 1 0 6" />
            <path d="M12 6.5a9 9 0 0 1 0 11" />
            <path d="M16 4a13 13 0 0 1 0 16" />
          </svg>

          {/* holder + label */}
          <div className="absolute bottom-[10%] left-[7%] right-[7%] flex items-end justify-between text-[#2b2b2f]">
            <div>
              <p className="text-[clamp(9px,1.5vw,16px)] font-medium tracking-[0.14em]">{holder}</p>
              <p className="mt-0.5 text-[clamp(7px,1vw,11px)] uppercase tracking-[0.22em] text-[#55565c]">
                Argenta • Titânio • Demo
              </p>
            </div>
            <div className="flex">
              <span className="h-[clamp(14px,2.6vw,30px)] w-[clamp(14px,2.6vw,30px)] rounded-full bg-[#2b2b2f]/80" />
              <span className="-ml-[clamp(6px,1.2vw,13px)] h-[clamp(14px,2.6vw,30px)] w-[clamp(14px,2.6vw,30px)] rounded-full bg-[#8d9099]/80 mix-blend-multiply" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
