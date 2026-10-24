import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import CreditCard from "../components/CreditCard";
import Logo from "../components/Logo";

export default function Demo() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen bg-gradient-to-b from-haze to-white">
      <header className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#" aria-label="Voltar ao início">
          <Logo />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </a>
      </header>

      <main className="mx-auto flex max-w-xl flex-col items-center px-5 pb-24 pt-12 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm"
        >
          <CreditCard />
        </motion.div>

        <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1 text-xs font-medium text-mute">
          <Info className="h-3.5 w-3.5" /> Página de demonstração
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
          Esta é uma maquete.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          Argenta é uma marca fictícia. Não existe formulário, login ou pedido de cartão: nenhum
          dado pessoal, senha, CPF ou informação bancária é solicitado ou armazenado.
        </p>

        <a
          href="#"
          className="btn-press mt-9 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-black"
        >
          Voltar para a página inicial
        </a>
      </main>
    </div>
  );
}
