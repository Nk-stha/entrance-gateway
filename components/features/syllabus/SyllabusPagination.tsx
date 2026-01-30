import { cn } from '@/lib/utils/cn'

interface SyllabusPaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export function SyllabusPagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: SyllabusPaginationProps) {
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
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6 rounded-b-xl">
      {/* Mobile Pagination */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* Desktop Pagination */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-bold text-brand-navy">{itemsPerPage}</span> of{' '}
            <span className="font-bold text-brand-navy">{totalItems}</span>{' '}
            elements
          </p>
        </div>
        
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Page 1 */}
            <button
              onClick={() => onPageChange(1)}
              aria-current={currentPage === 1 ? 'page' : undefined}
              className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20',
                currentPage === 1
                  ? 'z-10 bg-brand-navy text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
              )}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              onClick={() => onPageChange(2)}
              className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20',
                currentPage === 2
                  ? 'z-10 bg-brand-navy text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
              )}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              onClick={() => onPageChange(3)}
              className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20',
                currentPage === 3
                  ? 'z-10 bg-brand-navy text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
              )}
            >
              3
            </button>

            {/* Ellipsis */}
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>

            {/* Last Page */}
            <button
              onClick={() => onPageChange(totalPages)}
              className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20',
                currentPage === totalPages
                  ? 'z-10 bg-brand-navy text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
              )}
            >
              {totalPages}
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
