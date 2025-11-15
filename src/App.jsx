import { useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { Shield, Gauge, Globe, Server, Zap, Laptop2, Lock, Layers, ListChecks } from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import FeatureCard from './components/FeatureCard'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const colors = {
  wine: '#6C1A2F', // Deep Wine Red
  brown: '#3a2a29', // Charcoal Brown
  rose: '#E6B7C8', // Soft Rose Pink
  cream: '#F7F1E8', // Warm Cream
  grey: '#EAE8E4', // Light Grey
}

const featureStrip = [
  { title: 'Secure global servers', icon: Globe },
  { title: 'RAM-only technology', icon: Layers },
  { title: 'Zero logs', icon: Lock },
  { title: 'Ultra-fast performance', icon: Zap },
  { title: 'Multi-device support', icon: Laptop2 },
  { title: 'Threat blocker', icon: Shield },
]

export default function App(){
  useEffect(() => {
    document.documentElement.style.setProperty('--wine', colors.wine)
    document.documentElement.style.setProperty('--brown', colors.brown)
    document.documentElement.style.setProperty('--rose', colors.rose)
    document.documentElement.style.setProperty('--cream', colors.cream)
    document.documentElement.style.setProperty('--grey', colors.grey)
  }, [])

  return (
    <div className="font-sans bg-cream text-brown-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 bg-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose/60 to-cream/60 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-wine/40 to-rose/40 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grey text-brown-800 text-xs font-semibold mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-wine inline-block" /> 30-Day Risk-Free Guarantee
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-brown-950">
                The VPN Designed for Absolute Privacy & Freedom.
              </h1>
              <p className="mt-4 text-brown-800 text-lg max-w-xl">
                Secure, elegant, ultra-fast protection built for a safer internet.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#pricing" className="px-5 py-3 rounded-xl bg-wine text-cream font-bold hover:opacity-90">
                  Get Cryptora VPN
                </a>
                <a href="#learn" className="px-5 py-3 rounded-xl bg-rose/60 text-brown-900 font-bold hover:bg-rose/70">
                  Learn More
                </a>
              </div>
            </div>
            <div className="h-[420px] rounded-3xl bg-gradient-to-br from-rose/30 to-cream/50 shadow-inner overflow-hidden">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="py-10 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureStrip.map(f => (
              <div key={f.title} className="rounded-2xl p-5 bg-grey border border-brown/10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-cream shadow-inner">
                  <f.icon className="h-5 w-5 text-wine" />
                </div>
                <p className="text-brown-900 font-medium">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a VPN */}
      <section id="learn" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What is a VPN?"
            title="Your private, encrypted tunnel to the internet"
            subtitle="A VPN creates a secure connection between your device and the web, hiding your IP and encrypting your traffic so no one can track you."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl bg-rose/30 h-72 shadow-inner" />
            <div className="space-y-4 text-brown-800">
              <p>
                Cryptora routes your connection through secure servers, wrapping your data in cutting-edge encryption. Internet providers, trackers, and snoops are kept out.
              </p>
              <p>
                Enjoy streaming, gaming, and browsing with privacy and freedom — anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose Cryptora"
            title="Luxury-grade security, engineered for speed"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Shield} title="Next-gen encryption" description="State-of-the-art protocols keep your identity sealed and safe." />
            <FeatureCard icon={Server} title="RAM-only servers" description="Nothing is written to disk. Your data never leaves a trace." />
            <FeatureCard icon={ListChecks} title="Zero-logs policy" description="We never collect, store, or sell your activity. Period." />
            <FeatureCard icon={Zap} title="Ultra-fast speeds" description="Optimized network delivers smooth streaming and gaming." />
            <FeatureCard icon={Laptop2} title="Multi-device" description="Use Cryptora on phones, laptops, TVs, and routers." />
            <FeatureCard icon={Globe} title="Global coverage" description="Access content worldwide with 100+ premium locations." />
          </div>
        </div>
      </section>

      {/* Global servers */}
      <section className="py-20 bg-rose/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Global Server Network"
            title="Premium locations across the world"
            subtitle="Choose from 100+ cities for the best performance and privacy."
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {['US','UK','DE','FR','JP','SG','CA','AU','NL','SE','BR','IN'].map(flag => (
              <div key={flag} className="rounded-xl bg-grey h-16 flex items-center justify-center text-brown-900 font-semibold">
                {flag}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="px-5 py-3 rounded-xl bg-wine text-cream font-bold hover:opacity-90">View All 100+ Locations</button>
          </div>
        </div>
      </section>

      {/* Teams - dark section */}
      <section className="py-20 bg-brown text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cryptora for Teams"
            title="Enterprise privacy with elegant control"
            subtitle="Dedicated IPs, admin dashboard, SSO, and 24/7 priority support for your organization."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: 'Dedicated IP', desc: 'Unique addresses for locked-down access.'},
              {title: 'Admin dashboard', desc: 'Assign seats, view usage, manage policies.'},
              {title: '24/7 support', desc: 'Always-on assistance from security experts.'},
            ].map((it) => (
              <div key={it.title} className="rounded-2xl bg-cream/5 border border-cream/10 p-6">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-cream/80 text-sm mt-2">{it.desc}</p>
                <button className="mt-4 px-4 py-2 rounded-xl bg-wine text-cream font-bold hover:opacity-90">Talk to sales</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* Devices page preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Works on All Your Devices" subtitle="macOS, Windows, iOS, Android, Linux, TVs, Routers" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['macOS','Windows','iOS','Android','Linux','TVs','Routers'].map((d) => (
              <div key={d} className="rounded-2xl bg-grey p-5 text-brown-900 font-medium">{d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="We’re here 24/7" subtitle="Live chat, guides, and FAQs to keep you protected." />
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              {t:'Live chat', d:'Connect with a specialist in minutes.'},
              {t:'Guides', d:'Setup tutorials for every device.'},
              {t:'FAQs', d:'Quick answers to common questions.'},
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-grey p-6">
                <h3 className="font-semibold text-brown-950">{x.t}</h3>
                <p className="text-brown-800 text-sm mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
