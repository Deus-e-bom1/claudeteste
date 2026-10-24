import { motion, useReducedMotion } from "framer-motion";
import { EyeOff, Smartphone, Wallet, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Wallet,
    title: "Gestão em um lugar",
    text: "Acompanhe gastos e categorias em uma visão simples e organizada.",
  },
  {
    icon: ShieldCheck,
    title: "Foco em segurança",
    text: "Controles de bloqueio e desbloqueio pelo aplicativo, a qualquer momento.",
  },
  {
    icon: Smartphone,
    title: "Carteira digital",
    text: "Cartão virtual para pagamentos online e por aproximação no celular.",
  },
  {
    icon: EyeOff,
    title: "Design discreto",
    text: "Cartão físico sem informações impressas na frente, pensado para privacidade.",
  },
];

export default function Benefits() {
  const reduce = useReducedMotion();
  return (
    <section id="beneficios" className="scroll-mt-14 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-mute">Benefícios</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight">
            Projetado para você.
          </h2>
          <p className="mt-4 text-lg text-mute">
            Cada detalhe desenhado para uma experiência clara e sem ruído.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="h-full rounded-3xl border border-black/5 bg-haze p-7 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <Icon className="h-6 w-6 text-ink" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
