function Tier({ name, price, desc, cta, highlight = false }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-violet-400/50 bg-violet-500/10' : 'border-white/10 bg-white/5'} p-6` }>
      {highlight && (
        <div className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Popular</div>
      )}
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-xs text-white/60">/month</span>
      </div>
      <a href="#cta" className={`mt-6 inline-block w-full rounded-xl px-4 py-2 text-center text-sm font-semibold text-white ring-1 ring-white/10 transition ${highlight ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-violet-500/30' : 'bg-white/10 hover:bg-white/20'}`}>{cta}</a>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        <li>Unlimited generations</li>
        <li>Priority support</li>
        <li>Team collaboration</li>
      </ul>
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple, founder‑friendly pricing</h2>
        <p className="mt-3 text-white/70">Start free. Scale when you do.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Tier name="Starter" price="$0" desc="Explore capabilities and build your first MVP" cta="Start free" />
        <Tier name="Pro" price="$49" desc="Ship faster with advanced workflows" cta="Upgrade" highlight />
        <Tier name="Scale" price="$149" desc="For teams running multiple products" cta="Talk to sales" />
      </div>
    </section>
  )
}

export default Pricing
