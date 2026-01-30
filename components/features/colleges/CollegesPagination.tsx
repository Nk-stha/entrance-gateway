interface CollegesPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CollegesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CollegesPaginationProps) {
  const pages = []
  
  // Always show first page
  pages.push(1)
  
  // Show pages around current page
  if (currentPage > 3) {
    pages.push('...')
  }
  
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i)
  }
  
  // Show last page
  if (currentPage < totalPages - 2) {
    pages.push('...')
  }
  if (totalPages > 1) {
    pages.push(totalPages)
  }

  return (
    <div className="mt-10 flex justify-center">
      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <span className="sr-only">Previous</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
              >
                ...
              </span>
            )
          }

          const pageNum = page as number
          const isActive = pageNum === currentPage

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              aria-current={isActive ? 'page' : undefined}
              className={
                isActive
                  ? 'z-10 bg-brand-blue/10 border-brand-blue text-brand-blue relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors'
              }
            >
              {pageNum}
            </button>
          )
        })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <span className="sr-only">Next</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </nav>
    </div>
  )
}
