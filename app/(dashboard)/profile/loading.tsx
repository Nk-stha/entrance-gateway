export default function ProfileLoading() {
  return (
    <main className="flex-grow bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Sidebar Skeleton */}
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 animate-pulse">
            <nav className="space-y-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded-lg" />
              ))}
            </nav>
          </aside>

          {/* Main Content Skeleton */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 animate-pulse">
            {/* Header Skeleton */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 bg-gray-200 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-6 w-48 bg-gray-200 rounded" />
                  <div className="h-4 w-64 bg-gray-200 rounded" />
                </div>
                <div className="h-10 w-32 bg-gray-200 rounded-lg" />
              </div>
            </div>

            {/* Form Skeleton */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="h-6 w-48 bg-gray-200 rounded mb-6" />
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                  <div className="h-10 w-full bg-gray-200 rounded-lg" />
                </div>
                <div className="col-span-6 sm:col-span-3 space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                  <div className="h-10 w-full bg-gray-200 rounded-lg" />
                </div>
                <div className="col-span-6 sm:col-span-3 space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-10 w-full bg-gray-200 rounded-lg" />
                </div>
                <div className="col-span-6 sm:col-span-3 space-y-2">
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-10 w-full bg-gray-200 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex justify-end gap-3">
              <div className="h-10 w-24 bg-gray-200 rounded-lg" />
              <div className="h-10 w-32 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
