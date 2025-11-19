import { Workflow, ClipboardEdit, Cpu, Ship } from 'lucide-react'

function Step({ icon: Icon, title, desc, index }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Step {index}</p>
      <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { icon: ClipboardEdit, title: 'Describe your vision', desc: 'Share goals, constraints, and brand voice. Your AI cofounder translates it into a roadmap.' },
    { icon: Cpu, title: 'It builds in public', desc: 'Code, content, research, and ops run automatically. You review checkpoints and adjust.' },
    { icon: Workflow, title: 'Ship continuously', desc: 'Preview links, CI/CD, analytics, and CRM plug‑ins included from day one.' },
    { icon: Ship, title: 'Grow with momentum', desc: 'Experiments roll out, insights stream in, and compounding improvements never stop.' }
  ]

  return (
    <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-white/70">From first message to first customers in record time.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Step key={s.title} index={i + 1} {...s} />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
