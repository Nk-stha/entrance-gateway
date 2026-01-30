import { CardGridSkeleton } from '@/components/shared/Loading'

export default function CollegesLoading() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-10">
          <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-6 w-96 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-5 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid Skeleton */}
          <div className="flex-grow">
            <CardGridSkeleton count={6} />
          </div>
        </div>
      </div>
    </main>
  )
}
