import { Skeleton } from '@/components/shared/Loading'

export default function HomeLoading() {
  return (
    <main className="flex-grow">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-pulse">
            <div className="h-16 bg-gray-200 rounded-lg mb-8 mx-auto w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-4 mx-auto w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-10 mx-auto w-1/2"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-14 bg-gray-200 rounded-lg w-48"></div>
              <div className="h-14 bg-gray-200 rounded-lg w-48"></div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3 h-80 bg-gray-200 rounded-3xl animate-pulse"></div>
            <div className="md:col-span-3 h-80 bg-gray-200 rounded-3xl animate-pulse"></div>
            <div className="md:col-span-6 h-80 bg-gray-200 rounded-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-10 bg-gray-200 rounded-lg mb-4 mx-auto w-96"></div>
            <div className="h-6 bg-gray-200 rounded-lg mx-auto w-2/3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl animate-pulse">
                <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
