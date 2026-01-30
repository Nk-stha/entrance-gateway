interface SyllabusFiltersProps {
  searchQuery: string
  selectedCourse: string
  selectedSemester: string
  onSearchChange: (value: string) => void
  onCourseChange: (value: string) => void
  onSemesterChange: (value: string) => void
}

export function SyllabusFilters({
  searchQuery,
  selectedCourse,
  selectedSemester,
  onSearchChange,
  onCourseChange,
  onSemesterChange,
}: SyllabusFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <label
            htmlFor="search"
            className="block text-xs font-medium text-gray-500 mb-1"
          >
            Subject Search
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5 text-gray-400"
              >
                <path
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              name="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
              placeholder="Search by subject name or code..."
            />
          </div>
        </div>

        {/* Course Program Select */}
        <div className="md:col-span-3">
          <label
            htmlFor="course"
            className="block text-xs font-medium text-gray-500 mb-1"
          >
            Course Program
          </label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => onCourseChange(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
          >
            <option>All Programs</option>
            <option>BSc. CSIT</option>
            <option>BCA</option>
            <option>BIM</option>
            <option>BIT</option>
            <option>B.E. Computer</option>
          </select>
        </div>

        {/* Semester Select */}
        <div className="md:col-span-3">
          <label
            htmlFor="semester"
            className="block text-xs font-medium text-gray-500 mb-1"
          >
            Semester
          </label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => onSemesterChange(e.target.value)}
            className="block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
          >
            <option>All Semesters</option>
            <option>First Semester</option>
            <option>Second Semester</option>
            <option>Third Semester</option>
            <option>Fourth Semester</option>
            <option>Fifth Semester</option>
            <option>Sixth Semester</option>
            <option>Seventh Semester</option>
            <option>Eighth Semester</option>
          </select>
        </div>
      </div>
    </div>
  )
}
