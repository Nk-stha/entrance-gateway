import { TableSkeleton } from '@/components/shared/Loading'

export default function QuestionsLoading() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-9 bg-gray-200 rounded w-96 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-full max-w-2xl"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-pulse">
            <div className="md:col-span-2">
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
            <div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
            <div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
            <div>
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Table Skeleton */}
        <TableSkeleton rows={3} />
      </div>
    </main>
  )
}
