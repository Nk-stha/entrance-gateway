import { cn } from '@/lib/utils/cn'

interface Course {
  id: string
  name: string
  fullName: string
  level: 'Undergraduate' | 'Postgraduate' | 'High School'
  duration: string
  seats?: number
  admissionCriteria: string
}

interface CollegeCoursesProps {
  courses: Course[]
}

export function CollegeCourses({ courses }: CollegeCoursesProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Undergraduate':
        return 'bg-brand-blue/10 text-brand-blue'
      case 'Postgraduate':
        return 'bg-purple-100 text-purple-700'
      case 'High School':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2 font-heading">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
        Courses Offered
      </h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-brand-blue/50 transition-colors"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.fullName}</p>
                </div>
                <span
                  className={cn(
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getLevelColor(course.level)
                  )}
                >
                  {course.level}
                </span>
              </div>

              {/* Course Details */}
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-gold">
                    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                  </svg>
                  <span>Duration: {course.duration}</span>
                </div>
                {course.seats && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-gold">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h22V7h-2v4h-2z" />
                    </svg>
                    <span>Seats: {course.seats}</span>
                  </div>
                )}
              </div>

              {/* Admission Criteria */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  Admission Criteria
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {course.admissionCriteria}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
