function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-orange-400/10 p-10 backdrop-blur">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold text-white">Bring an AI cofounder onto your team</h3>
            <p className="mt-3 text-white/80">Tell us what you’re building and get a live preview in minutes. No credit card required.</p>
          </div>
          <form className="relative">
            <div className="flex rounded-2xl border border-white/10 bg-white/10 p-2">
              <input type="email" placeholder="you@startup.com" className="w-full bg-transparent px-4 text-sm text-white placeholder:text-white/60 focus:outline-none" />
              <button type="submit" className="rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/10 transition hover:brightness-110">Join the waitlist</button>
            </div>
            <p className="mt-2 text-xs text-white/60">By joining you agree to our Terms & Privacy.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
