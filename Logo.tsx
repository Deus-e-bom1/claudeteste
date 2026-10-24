import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#" aria-label="Argenta — início">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mute md:flex" aria-label="Seções">
          <a className="transition-colors hover:text-ink" href="#beneficios">Benefícios</a>
          <a className="transition-colors hover:text-ink" href="#como-funciona">Como funciona</a>
          <a className="transition-colors hover:text-ink" href="#cartao">Cartão</a>
        </nav>
        <a
          href="#/demo"
          className="btn-press rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Ver demo
        </a>
      </div>
    </header>
  );
}
