import { ArrowRight, Lock, PackageCheck, ShieldOff } from "lucide-react";
import Reveal from "./Reveal";

const notes = [
  { icon: ShieldOff, text: "Nenhum dado é coletado" },
  { icon: Lock, text: "Sem login nem cadastro" },
  { icon: PackageCheck, text: "Nenhum cartão é emitido" },
];

export default function FinalCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight">
          Pronto para explorar?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-mute">
          Abra a página de demonstração e veja o fluxo final desta maquete.
        </p>
        <a
          href="#/demo"
          className="btn-press group mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)]"
        >
          Abrir demonstração
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-mute">
          {notes.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon className="h-4 w-4" strokeWidth={1.7} />
              {text}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
