import { CardGridSkeleton } from '@/components/shared/Loading'

export default function NotesLoading() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-6 sm:mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-80 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-3xl"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-pulse">
            <div className="md:col-span-4">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="md:col-span-2">
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
