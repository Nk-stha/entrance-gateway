import { cn } from '@/lib/utils/cn'
import Link from 'next/link'

interface CollegeItem {
  id: string
  name: string
  category: string
  location: string
  affiliation: string
  image: string
  website?: string
}

interface CollegesCardProps {
  item: CollegeItem
  onVisit?: (id: string) => void
  onFavorite?: (id: string) => void
}

export function CollegesCard({ item, onVisit, onFavorite }: CollegesCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <Link href={`/colleges/${item.id}`} className="relative h-48 overflow-hidden block">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Affiliation Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-brand-blue shadow-sm flex items-center gap-1">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          </svg>
          {item.affiliation}
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Category */}
        <div className="mb-1 text-xs font-bold text-brand-blue uppercase tracking-wide">
          {item.category}
        </div>

        {/* College Name */}
        <Link href={`/colleges/${item.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-blue transition-colors cursor-pointer">
            {item.name}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 mt-0.5 shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span>{item.location}</span>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault()
              onVisit?.(item.id)
            }}
            className="text-sm font-semibold text-gray-900 flex items-center gap-1 group/link hover:text-brand-blue transition-colors"
          >
            Visit Website
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 group-hover/link:translate-x-1 transition-transform text-gray-400 group-hover/link:text-brand-blue">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              onFavorite?.(item.id)
            }}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-brand-gold transition-colors"
            aria-label="Add to favorites"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Card Grid Container
export function CollegesCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {children}
    </div>
  )
}
