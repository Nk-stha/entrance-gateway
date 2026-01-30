import { cn } from '@/lib/utils/cn'

interface SkeletonProps {
  className?: string
}

/**
 * Base Skeleton Component
 * 
 * Used for data loading states to show placeholder content.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
      role="status"
      aria-label="Loading content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

/**
 * Card Skeleton
 * 
 * Skeleton for card-based layouts (Notes, Syllabus cards).
 */
export function CardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <div className="flex gap-2 mb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-16 w-full mb-6" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

/**
 * Table Row Skeleton
 * 
 * Skeleton for table rows.
 */
export function TableRowSkeleton() {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-4 w-48" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-5 w-16" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-4 w-24" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-4 w-16" />
      </td>
    </tr>
  )
}

/**
 * Card Grid Skeleton
 * 
 * Multiple card skeletons in a grid layout.
 */
export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

/**
 * Table Skeleton
 * 
 * Complete table skeleton with header and rows.
 */
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand-navy text-white">
            <tr>
              <th className="px-6 py-4">
                <Skeleton className="h-4 w-24 bg-white/20" />
              </th>
              <th className="px-6 py-4">
                <Skeleton className="h-4 w-32 bg-white/20" />
              </th>
              <th className="px-6 py-4">
                <Skeleton className="h-4 w-20 bg-white/20" />
              </th>
              <th className="px-6 py-4">
                <Skeleton className="h-4 w-28 bg-white/20" />
              </th>
              <th className="px-6 py-4">
                <Skeleton className="h-4 w-24 bg-white/20" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {Array.from({ length: rows }).map((_, i) => (
              <TableRowSkeleton key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * Detail Page Skeleton
 * 
 * Skeleton for detail pages with sidebar.
 */
export function DetailPageSkeleton() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Main Content Skeleton */}
      <div className="w-full lg:col-span-8 order-1 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
          <div className="bg-brand-navy px-4 py-3 flex items-center justify-between">
            <Skeleton className="h-4 w-48 bg-white/20" />
            <Skeleton className="h-8 w-32 bg-white/20" />
          </div>
          <div className="flex-1 bg-gray-100 p-8 flex justify-center">
            <Skeleton className="w-full max-w-[700px] h-full" />
          </div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="w-full lg:col-span-4 order-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-1.5 bg-brand-navy w-full"></div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-3 w-20 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
