interface CollegesSearchProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function CollegesSearch({ searchQuery, onSearchChange }: CollegesSearchProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-5 text-gray-400 group-focus-within:text-brand-blue transition-colors"
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
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full md:w-64 pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue sm:text-sm transition-shadow shadow-sm"
          placeholder="Search institutes..."
        />
      </div>
    </div>
  )
}
