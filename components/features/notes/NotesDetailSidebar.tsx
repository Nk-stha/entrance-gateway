interface NoteInfo {
  id: string
  subject: string
  examYear: string
  course: string
  university: string
  verified?: boolean
}

interface NotesDetailSidebarProps {
  info: NoteInfo
}

export function NotesDetailSidebar({ info }: NotesDetailSidebarProps) {
  return (
    <aside className="w-full space-y-4 sm:space-y-6 lg:sticky lg:top-24">
      {/* Main Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Top Accent Bar */}
        <div className="h-1.5 bg-brand-navy w-full"></div>

        <div className="p-5 sm:p-6">
          {/* University Header */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-brand-navy">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Affiliation
              </span>
              <h3 className="text-sm font-bold text-brand-navy truncate">
                {info.university}
              </h3>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy mb-2">
            Question set {info.examYear}
          </h1>
          <p className="text-gray-500 text-sm mb-6 sm:mb-8">
            Official entrance examination document for prospective students.
          </p>

          {/* Details */}
          <div className="space-y-4">
            {/* Subject */}
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-blue">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-0.5">
                  Subject
                </p>
                <p className="font-medium text-gray-900">{info.subject}</p>
              </div>
            </div>

            {/* Exam Year */}
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-blue">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-0.5">
                  Exam Year
                </p>
                <p className="font-medium text-gray-900">{info.examYear}</p>
              </div>
            </div>

            {/* Course */}
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-blue">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-0.5">
                  Course
                </p>
                <p className="font-medium text-gray-900">{info.course}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with ID and Status */}
        <div className="bg-gray-50 px-5 sm:px-6 py-4 border-t border-gray-100">
          <div className="flex justify-between items-center gap-3">
            <span className="text-xs font-mono text-gray-400 truncate">
              ID: {info.id}
            </span>
            {info.verified && (
              <div className="flex items-center gap-1.5 text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded text-xs font-medium shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                Verified
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
