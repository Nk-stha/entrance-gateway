interface QuestionsFiltersProps {
  searchQuery: string
  selectedCourse: string
  selectedYear: string
  onSearchChange: (value: string) => void
  onCourseChange: (value: string) => void
  onYearChange: (value: string) => void
  onReset: () => void
}

export function QuestionsFilters({
  searchQuery,
  selectedCourse,
  selectedYear,
  onSearchChange,
  onCourseChange,
  onYearChange,
  onReset,
}: QuestionsFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        <div className="md:col-span-2 relative">
          <label htmlFor="search" className="sr-only">
            Search questions
          </label>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <path
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none"
            placeholder="Search by set name or subject..."
          />
        </div>

        {/* Course Select */}
        <div>
          <label htmlFor="course" className="sr-only">
            Course
          </label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => onCourseChange(e.target.value)}
            className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none cursor-pointer"
          >
            <option value="">Course (All)</option>
            <option value="BCA">BCA</option>
            <option value="CSIT">BSc. CSIT</option>
            <option value="BIT">BIT</option>
          </select>
        </div>

        {/* Year Select */}
        <div>
          <label htmlFor="year" className="sr-only">
            Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none cursor-pointer"
          >
            <option value="">Year (All)</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={onReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium w-full transition-colors flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
            </svg>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
