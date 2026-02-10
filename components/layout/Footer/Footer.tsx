import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Image src="/eg-logo.jpg" alt="EntranceGateway" width={180} height={50} className="h-12 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              At EntranceGateway, we provide top-tier E-learning to the services to meet all your
              educational needs. Whether you're a student.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17A4.86 4.86 0 0 0 15.11 4c-2.69 0-4.87 2.18-4.87 4.87 0 .38.04.75.13 1.1-4.05-.2-7.64-2.14-10.05-5.09A4.83 4.83 0 0 0 0 7.23c0 1.69.86 3.18 2.17 4.05a4.82 4.82 0 0 1-2.21-.61v.06c0 2.36 1.68 4.33 3.91 4.78a4.9 4.9 0 0 1-2.2.08c.62 1.94 2.42 3.35 4.55 3.39A9.76 9.76 0 0 1 0 20.29a13.76 13.76 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z" />
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <Link href="/instructors" className="hover:text-white transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Utility Pages</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <Link href="/changelog" className="hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-white transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="/404" className="hover:text-white transition-colors">
                  404 Not Found
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40">© Copyright 2024. All Rights Reserved.</p>
          <p className="text-sm text-white/40 mt-4 md:mt-0">Powered by EntranceGateway Team</p>
        </div>
      </div>
    </footer>
  )
}
