import SectionHeading from './SectionHeading'

const plans = [
  {
    name: 'Basic',
    price: '$5',
    period: 'mo',
    features: ['Single device', 'Essential protection', 'Standard speed'],
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$9',
    period: 'mo',
    features: ['Up to 5 devices', 'Faster speeds', 'Threat blocker'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$12',
    period: 'mo',
    features: ['Unlimited devices', 'Ultra-fast', 'Priority support', 'Dedicated IP'],
    highlight: true,
  },
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Premium protection for every need"
          subtitle="Transparent plans. No hidden fees. 30-day risk-free guarantee."
        />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border border-brown/10 shadow-sm ${p.highlight ? 'bg-rose/40' : 'bg-grey'}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-brown-950">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-wine text-cream">Best Value</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-brown-950">{p.price}</span>
                <span className="text-brown-700">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-brown-800 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-wine inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-wine text-cream font-bold py-3 rounded-xl hover:opacity-90">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
