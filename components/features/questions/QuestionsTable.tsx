import { cn } from '@/lib/utils/cn'
import { QuestionsCard, QuestionsCardList } from './QuestionsCard'

interface QuestionItem {
  id: string
  setName: string
  subject: string
  year: string
  course: string
  affiliation: string
}

interface QuestionsTableProps {
  data: QuestionItem[]
  onView?: (id: string) => void
}

export function QuestionsTable({ data, onView }: QuestionsTableProps) {
  return (
    <>
      {/* Desktop Table View - Hidden on mobile/tablet */}
      <div className="hidden lg:block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-200">
                  Set Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-200">
                  Subject
                </th>
                <th className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-200 text-center">
                  Year
                </th>
                <th className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-200">
                  Course
                </th>
                <th className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-gray-200">
                  Affiliation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  onClick={() => onView?.(item.id)}
                  className={cn(
                    'transition-colors hover:bg-brand-blue/5 cursor-pointer',
                    index % 2 === 1 && 'bg-gray-50'
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-400 shrink-0">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">{item.setName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{item.year}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                        item.course === 'BCA' && 'bg-blue-100 text-blue-800',
                        item.course === 'CSIT' && 'bg-indigo-100 text-indigo-800',
                        item.course === 'BIT' && 'bg-purple-100 text-purple-800'
                      )}
                    >
                      {item.course}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                      {item.affiliation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{data.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{data.length}</span> elements
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Card View - Hidden on desktop */}
      <div className="lg:hidden">
        <QuestionsCardList>
          {data.map((item) => (
            <QuestionsCard key={item.id} item={item} onView={onView} />
          ))}
        </QuestionsCardList>
      </div>
    </>
  )
}
