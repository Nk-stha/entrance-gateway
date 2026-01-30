interface NotesPaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export function NotesPagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: NotesPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
      {/* Results Info */}
      <div className="text-sm text-gray-500 mb-4 md:mb-0">
        Showing{' '}
        <span className="font-bold text-gray-800">{startItem}</span> to{' '}
        <span className="font-bold text-gray-800">{endItem}</span> of{' '}
        <span className="font-bold text-gray-800">{totalItems}</span> results
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <span className="sr-only">Previous</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Page 1 */}
        <button
          onClick={() => onPageChange(1)}
          aria-current={currentPage === 1 ? 'page' : undefined}
          className={
            currentPage === 1
              ? 'relative z-10 inline-flex items-center bg-brand-navy px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'
              : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
        >
          1
        </button>

        {/* Page 2 */}
        <button
          onClick={() => onPageChange(2)}
          aria-current={currentPage === 2 ? 'page' : undefined}
          className={
            currentPage === 2
              ? 'relative z-10 inline-flex items-center bg-brand-navy px-4 py-2 text-sm font-semibold text-white focus:z-20'
              : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
        >
          2
        </button>

        {/* Page 3 */}
        <button
          onClick={() => onPageChange(3)}
          aria-current={currentPage === 3 ? 'page' : undefined}
          className={
            currentPage === 3
              ? 'relative z-10 inline-flex items-center bg-brand-navy px-4 py-2 text-sm font-semibold text-white focus:z-20'
              : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
        >
          3
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
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
