import { DetailPageSkeleton } from '@/components/shared/Loading'

export default function CollegeDetailLoading() {
  return (
    <main className="flex-grow w-full">
      {/* Hero Skeleton */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-xl hidden md:block"></div>
            <div className="flex-grow space-y-3">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-12 w-96 bg-gray-300 rounded"></div>
              <div className="h-4 w-full max-w-2xl bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DetailPageSkeleton />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
