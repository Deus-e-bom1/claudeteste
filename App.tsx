import { Check } from "lucide-react";
import CreditCard from "./CreditCard";
import Reveal from "./Reveal";

const features = [
  "Acabamento em titânio escovado",
  "Gravação a laser, sem relevo nem números na frente",
  "Pagamento por aproximação",
  "Cartão virtual no aplicativo",
  "Atendimento por chat (exemplo)",
];

export default function CardFeature() {
  return (
    <section
      id="cartao"
      className="scroll-mt-14 overflow-hidden bg-gradient-to-b from-haze to-white py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-mute">Argenta Titânio</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight">
            Feito de titânio. Feito para você.
          </h2>
          <p className="mt-4 max-w-md text-lg text-mute">
            Um cartão físico fictício, criado para mostrar materiais, luz e profundidade.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-lg leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 mx-auto w-full max-w-[min(90vw,600px)] lg:order-2">
          <CreditCard holder="SEU NOME AQUI" />
        </Reveal>
      </div>
    </section>
  );
}
