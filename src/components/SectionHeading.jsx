export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} space-y-3`}>
      {eyebrow && (
        <div className="inline-block rounded-full bg-rose/30 text-brown-800 px-3 py-1 text-xs font-semibold tracking-wide">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-brown-950 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brown-700 text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
