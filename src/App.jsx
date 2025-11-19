import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Soft aurora background accents */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-orange-400/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-400/15 to-violet-500/15 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
