import { CardGridSkeleton } from '@/components/shared/Loading'

export default function SyllabusLoading() {
  return (
    <main className="flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="animate-pulse">
            <div className="h-9 bg-gray-200 rounded w-64 mb-2"></div>
            <div className="h-5 bg-gray-200 rounded w-96"></div>
          </div>
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-pulse">
            <div className="md:col-span-6">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-3">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-3">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Cards Skeleton */}
        <CardGridSkeleton count={6} />
      </div>
    </main>
  )
}
