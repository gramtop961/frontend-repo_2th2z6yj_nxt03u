import Navbar from './components/Navbar'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-zinc-300 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative pt-28 sm:pt-32 pb-24 sm:pb-28 overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_60%)] blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.25),transparent_60%)] blur-2xl" />
          <div className="absolute inset-20 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/5" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_2px_rgba(99,102,241,0.8)]" />
                Enterprise‑grade privacy for everyone
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Cryptora VPN
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9b5cff] via-[#7c3aed] to-[#00e5ff]">Future‑proof security</span>
              </h1>
              <p className="mt-4 text-zinc-400 text-lg">
                A modern, high‑performance VPN with zero‑logs, RAM‑only servers, and a design worthy of your home screen.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="px-6 py-3 rounded-full font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition shadow-[0_0_40px_-10px_rgba(124,58,237,0.9)]"
                >
                  Get Cryptora
                </a>
                <a
                  href="#features"
                  className="px-6 py-3 rounded-full font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur"
                >
                  Explore Features
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-500">
                <span>30‑day money‑back guarantee</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>Audited no‑logs policy</span>
              </div>
            </div>

            {/* Glowing orb */}
            <div className="relative h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#8a2be2] to-[#00e5ff]">
                  <div className="absolute -inset-6 rounded-full blur-3xl opacity-60 bg-gradient-to-tr from-[#7c3aed] via-[#8a2be2] to-[#00e5ff]" />
                  <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay" />
                  <div className="absolute inset-0 rounded-full" style={{boxShadow:'inset 0 0 80px rgba(0,0,0,0.35)'}} />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Engineered for speed, privacy, and simplicity</h2>
            <p className="mt-3 text-zinc-400">Minimal, powerful, and private by default.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {t:'Zero‑logs policy', d:'Independently audited. Your data never leaves your device unencrypted.'},
              {t:'RAM‑only servers', d:'Ephemeral infrastructure. Nothing written to disk.'},
              {t:'Next‑gen protocols', d:'WireGuard and modern TLS deliver top‑tier performance.'},
              {t:'One‑tap Connect', d:'A distraction‑free app for every platform.'},
            ].map((f) => (
              <div key={f.t} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="pointer-events-none absolute -inset-px rounded-2xl [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_40px_-10px_rgba(124,58,237,0.6)]" />
                <h3 className="text-white font-medium">{f.t}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 relative">
        <div className="absolute inset-x-0 -z-10 top-0 h-40 bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(0,229,255,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white text-2xl font-semibold">Download Cryptora</h3>
                <p className="mt-2 text-zinc-400">macOS, Windows, iOS, Android, Linux, browsers, and routers.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['macOS','Windows','iOS','Android','Linux'].map((p) => (
                    <button key={p} className="px-4 py-2 rounded-full text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative h-48">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#7c3aed]/30 to-[#00e5ff]/30 blur-2xl" />
                <div className="relative mx-auto h-40 w-full max-w-md rounded-2xl border border-white/10 bg-black/60 shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Simple, transparent pricing</h2>
            <p className="mt-2 text-zinc-400">30‑day risk‑free guarantee. Cancel anytime.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {name:'Monthly', price:'$12', cta:'Start Monthly'},
              {name:'1 Year', price:'$69', cta:'Go Yearly', highlight:true},
              {name:'Family', price:'$99', cta:'Protect 5 devices'},
            ].map((p) => (
              <div key={p.name} className={`relative rounded-2xl p-6 border bg-white/5 backdrop-blur-sm ${p.highlight ? 'border-[#7c3aed]/40 shadow-[0_0_50px_-12px_rgba(124,58,237,0.8)]' : 'border-white/10'}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#7c3aed] px-3 py-1 text-xs text-white shadow-[0_0_24px_-6px_rgba(124,58,237,0.9)]">Best value</div>
                )}
                <div className="text-zinc-400 text-sm">{p.name}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{p.price}<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>Ultra‑fast WireGuard</li>
                  <li>RAM‑only servers</li>
                  <li>No‑logs, audited</li>
                  <li>24/7 support</li>
                </ul>
                <button className={`mt-6 w-full px-4 py-2 rounded-full font-semibold ${p.highlight ? 'text-white bg-[#7c3aed] hover:bg-[#6d28d9]' : 'text-white/90 bg-white/5 hover:bg-white/10 border border-white/10'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl font-semibold">We’re here to help</h3>
              <p className="mt-2 text-zinc-400">Reach our security specialists any time. We usually reply within minutes.</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="px-5 py-2.5 rounded-full font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10">Live chat</a>
                <a href="#" className="px-5 py-2.5 rounded-full font-semibold text-white/90 bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/20">Email support</a>
              </div>
            </div>
            <div className="relative h-56">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-tr from-white/5 to-transparent" />
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(80%_80%_at_0%_0%,rgba(124,58,237,0.25),transparent),radial-gradient(80%_80%_at_100%_100%,rgba(0,229,255,0.18),transparent)] blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-[#7847ff] to-[#00e5ff]">
              <div className="absolute inset-0 rounded-lg blur-md opacity-60 bg-gradient-to-br from-[#7847ff] to-[#00e5ff]" />
            </div>
            <span className="text-white font-medium">Cryptora VPN</span>
          </div>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Cryptora LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
