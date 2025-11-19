import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-violet-500/25 ring-1 ring-white/10">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold tracking-tight text-white">Aura Cofounder</p>
            <p className="text-[10px] font-medium tracking-wider text-white/60">AI that builds with you</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition">Features</a>
          <a href="#how" className="text-sm font-medium text-white/80 hover:text-white transition">How it works</a>
          <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-white/80 hover:text-white transition">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/5 md:inline-block">Log in</a>
          <a href="#cta" className="rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/10 transition hover:brightness-110">Get started</a>
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5 md:hidden" aria-label="menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
