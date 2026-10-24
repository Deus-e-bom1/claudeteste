import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-haze">
      <div className="mx-auto max-w-5xl px-5 py-12 text-center">
        <Logo className="justify-center text-mute" />
        <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-mute">
          Argenta é uma marca fictícia usada exclusivamente em um projeto de interface.
          Esta página não é uma instituição financeira, não oferece crédito e não tem vínculo
          com nenhuma empresa ou emissora de cartões.
        </p>
        <p className="mt-4 text-xs text-mute/80">© {new Date().getFullYear()} Projeto demonstrativo.</p>
      </div>
    </footer>
  );
}
