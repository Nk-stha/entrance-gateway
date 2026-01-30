import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-brand-gold"
            >
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
            <span className="font-bold text-lg tracking-tight">EntranceGateway</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-sm text-gray-300">Academic Portal</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-300">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            © 2024 EntranceGateway Education Pvt Ltd.
          </p>
          <div className="text-xs text-gray-500">Nepal's Learning Network</div>
        </div>
      </div>
    </footer>
  )
}
