export function HomePartners() {
  const partners = [
    { name: 'Tribhuvan', icon: 'account_balance' },
    { name: 'Kathmandu', icon: 'school' },
    { name: 'PCL', icon: 'verified' },
    { name: 'Pokhara', icon: 'stadium' },
  ]

  return (
    <section id="partners-section" className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-10 text-gray-700">
                {partner.icon === 'account_balance' && (
                  <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
                )}
                {partner.icon === 'school' && (
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                )}
                {partner.icon === 'verified' && (
                  <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                )}
                {partner.icon === 'stadium' && (
                  <path d="M7 5L3.21 16.89 4.5 17.5 8.29 5.71 7 5zM15 5l-1.29.71 3.79 11.79 1.29-.61L15 5zm-3 0l-1 3h2l-1-3zm0 4.5L10.5 13h3L12 9.5zM12 14l-1.5 4h3l-1.5-4z" />
                )}
              </svg>
              <span className="font-bold text-xl uppercase tracking-widest text-gray-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
