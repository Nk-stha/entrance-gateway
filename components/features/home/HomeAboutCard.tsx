export function HomeAboutCard() {
  return (
    <div className="bg-teal-100 rounded-3xl p-8 flex flex-col justify-between items-start h-full min-h-[340px] relative overflow-hidden">
      {/* Illustration background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <circle cx="200" cy="150" r="80" fill="#2D5F5D" />
        </svg>
      </div>
      
      <div className="relative z-10 w-full">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-brand-gold">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          </svg>
        </div>
        <h3 className="font-bold text-brand-navy text-xl leading-snug mb-4">
          Road to learning for a successful career and profession
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Discover diverse courses on our platform.
        </p>
      </div>
      
      <a
        href="#"
        className="font-bold text-brand-navy underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors relative z-10"
      >
        More About Us
      </a>
    </div>
  )
}
