import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Conheça o produto",
    text: "Navegue pela demonstração e veja como o cartão e o aplicativo seriam apresentados.",
  },
  {
    n: "2",
    title: "Personalize o cartão",
    text: "Veja o nome de exemplo no cartão. Nada é enviado nem armazenado.",
  },
  {
    n: "3",
    title: "Imagine a experiência",
    text: "Esta é uma maquete: não há análise de crédito, cadastro ou emissão de cartão.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-14 bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-mute">Como funciona</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight">
            Simples como deve ser.
          </h2>
          <p className="mt-4 text-lg text-mute">Três etapas para entender a proposta.</p>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.12} className="text-center md:text-left">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-2xl font-semibold text-white shadow-soft">
                  {s.n}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
