import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('nav-root')
      if (!el) return
      if (window.scrollY > 8) {
        el.classList.add('backdrop-blur-xl', 'bg-white/0', 'shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]')
      } else {
        el.classList.remove('backdrop-blur-xl', 'bg-white/0', 'shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition"
    >
      {label}
    </a>
  )

  return (
    <header id="nav-root" className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-[#7847ff] to-[#00e5ff]">
              <div className="absolute inset-0 rounded-xl blur-md opacity-60 bg-gradient-to-br from-[#7847ff] to-[#00e5ff]" />
            </div>
            <span className="font-semibold tracking-tight text-white group-hover:text-white/90">Cryptora VPN</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {link('#pricing', 'Pricing')}
            {link('#features', 'Features')}
            {link('#download', 'Download VPN')}
            {link('#contact', 'Contact')}
            <a href="#hero" className="ml-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition shadow-[0_0_30px_-8px_rgba(124,58,237,0.9)]">
              Get Cryptora
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-lg bg-white/5 text-zinc-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-slide-in">
            <div className="flex flex-col gap-2">
              {link('#pricing', 'Pricing')}
              {link('#features', 'Features')}
              {link('#download', 'Download VPN')}
              {link('#contact', 'Contact')}
              <a href="#hero" onClick={() => setOpen(false)} className="px-3 py-2 rounded-full text-sm font-semibold text-white bg-[#7c3aed] text-center shadow-[0_0_30px_-8px_rgba(124,58,237,0.9)]">Get Cryptora</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
