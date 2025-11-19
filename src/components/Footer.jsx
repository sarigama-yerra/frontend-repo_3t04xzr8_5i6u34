function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Aura Cofounder. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
