import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          isActive ? 'bg-wine text-cream' : 'text-brown-700 hover:bg-rose/30 hover:text-brown-900'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose to-wine shadow-inner" />
            <span className="font-semibold text-brown-900 tracking-tight">Cryptora VPN</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/devices', 'Devices')}
            {navItem('/support', 'Support')}
            <a href="#pricing" className="px-3 py-2 rounded-full text-sm font-medium text-cream bg-wine hover:opacity-90">Get Cryptora</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg bg-rose/20" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-5 w-5 text-brown-800" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-slide-in">
            <div className="flex flex-col gap-2">
              {navItem('/', 'Home')}
              {navItem('/devices', 'Devices')}
              {navItem('/support', 'Support')}
              <a href="#pricing" onClick={() => setOpen(false)} className="px-3 py-2 rounded-full text-sm font-semibold text-cream bg-wine text-center">Get Cryptora</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
