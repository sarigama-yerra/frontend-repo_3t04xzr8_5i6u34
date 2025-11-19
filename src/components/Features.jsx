import { Code, Bot, Rocket, LineChart } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Engineering, accelerated',
    desc: 'Full‑stack code generation, refactors, tests, and deployments. From spec to shipping in hours, not weeks.'
  },
  {
    icon: Bot,
    title: 'Autonomous operations',
    desc: 'Research, outreach, support, and analytics. Your AI cofounder handles the busywork and reports results.'
  },
  {
    icon: Rocket,
    title: 'Launch-ready workflows',
    desc: 'Opinionated templates for SaaS, mobile apps, and internal tools with CI/CD baked in.'
  },
  {
    icon: LineChart,
    title: 'Growth built in',
    desc: 'Experiments, content, SEO, and lifecycle messaging — continuously optimized to move the metrics that matter.'
  }
]

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to found faster</h2>
        <p className="mt-3 text-white/70">A single partner that codes, markets, and operates with you — from zero to one and beyond.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 text-white shadow-lg shadow-violet-500/25 ring-1 ring-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/75">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
