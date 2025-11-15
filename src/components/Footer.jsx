export default function Footer(){
  return (
    <footer className="bg-brown text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose to-wine" />
              <span className="font-semibold tracking-tight">Cryptora VPN</span>
            </div>
            <p className="text-cream/80 text-sm max-w-xs">
              Luxury-grade privacy. Elegant performance. Built for absolute freedom.
            </p>
          </div>
          {[
            {title:'Product', links:['Features','Pricing','Download','Servers']},
            {title:'Company', links:['About','Careers','Press','Blog']},
            {title:'Support', links:['Help Center','Guides','Status','Contact']},
            {title:'Legal', links:['Privacy','Terms','DPA','Cookies']},
          ].map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-semibold">{col.title}</h4>
              <ul className="space-y-2 text-cream/80 text-sm">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="hover:text-cream transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-cream/10 mt-10 pt-6 text-sm text-cream/70 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Cryptora VPN. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cream">Security</a>
            <a href="#" className="hover:text-cream">Compliance</a>
            <a href="#" className="hover:text-cream">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
