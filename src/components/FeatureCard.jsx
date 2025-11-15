export default function FeatureCard({ icon: Icon, title, description, tone = 'grey' }) {
  const bg = tone === 'rose' ? 'bg-rose/30' : 'bg-grey'
  return (
    <div className={`rounded-2xl ${bg} p-5 sm:p-6 shadow-sm border border-brown/10`}>      
      <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-cream shadow-inner mb-4">
        {Icon && <Icon className="h-5 w-5 text-wine" />}
      </div>
      <h3 className="text-brown-900 font-semibold mb-1">{title}</h3>
      <p className="text-brown-700 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
