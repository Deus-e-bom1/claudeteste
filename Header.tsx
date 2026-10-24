import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/**
 * Indicators describe the demo itself — no approval rates, ratings or user counts.
 */
const stats = [
  { value: 3, suffix: "", label: "Etapas na\njornada demo" },
  { value: 0, suffix: "", label: "Dados pessoais\ncoletados" },
  { value: 100, suffix: "%", label: "Conteúdo\ndemonstrativo" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Indicators() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 text-center sm:grid-cols-3 sm:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <p className="text-[clamp(3.5rem,8vw,5.5rem)] font-semibold leading-none tracking-tight tabular-nums">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 whitespace-pre-line text-base leading-snug text-mute">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
