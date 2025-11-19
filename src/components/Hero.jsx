import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[84vh] max-w-7xl place-items-center px-6 pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(168,85,247,0.25),rgba(14,165,233,0.15)_40%,transparent_70%)]" />

        <div className="relative max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" />
            Introducing your AI cofounder
          </div>

          <h1 className="text-balance bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-5xl font-semibold leading-[1.05] text-transparent drop-shadow sm:text-6xl md:text-7xl">
            Build, launch, and grow with an AI cofounder
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
            Strategy, code, copy, research, and customer support — unified in one tireless partner that ships alongside you 24/7.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/10 transition hover:brightness-110">
              Try Aura free
            </a>
            <a href="#how" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              See how it works
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">10x</p>
              <p className="text-xs text-white/70">faster from idea to MVP</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-white/70">always-on execution</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">$0</p>
              <p className="text-xs text-white/70">until you’re ready to scale</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">∞</p>
              <p className="text-xs text-white/70">skills: code, ops, growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
