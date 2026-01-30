import { DetailPageSkeleton } from '@/components/shared/Loading'

export default function SyllabusDetailLoading() {
  return (
    <main className="flex-grow">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        {/* Page Heading Skeleton */}
        <div className="mb-6 sm:mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="flex items-center gap-3">
            <div className="h-5 bg-gray-200 rounded w-20"></div>
            <div className="h-5 bg-gray-200 rounded w-48"></div>
          </div>
        </div>

        <DetailPageSkeleton />
      </div>
    </main>
  )
}
