'use client'

import { useState } from 'react'

interface CollegesFiltersProps {
  categories: {
    id: string
    label: string
    checked: boolean
  }[]
  locations: {
    id: string
    label: string
    checked: boolean
  }[]
  onCategoryChange: (id: string) => void
  onLocationChange: (id: string) => void
  onReset: () => void
}

export function CollegesFilters({
  categories,
  locations,
  onCategoryChange,
  onLocationChange,
  onReset,
}: CollegesFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* Mobile/Tablet Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-brand-blue">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </svg>
          <span className="text-lg font-semibold text-gray-900">Filters</span>
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>

      {/* Filter Content */}
      <div
        className={`bg-white rounded-xl shadow-sm border border-gray-200 p-5 lg:sticky lg:top-24 ${
          isOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* Header - Desktop Only */}
        <div className="hidden lg:flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={onReset}
            className="text-xs font-medium text-brand-blue hover:text-brand-navy transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Filter Options</h3>
          <button
            onClick={onReset}
            className="text-xs font-medium text-brand-blue hover:text-brand-navy transition-colors"
          >
            Reset All
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">
              Categories
            </h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={category.checked}
                    onChange={() => onCategoryChange(category.id)}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-brand-blue transition-colors">
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">
              Location
            </h4>
            <div className="space-y-2">
              {locations.map((location) => (
                <label
                  key={location.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={location.checked}
                    onChange={() => onLocationChange(location.id)}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-brand-blue transition-colors">
                    {location.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button - Mobile Only */}
        <div className="lg:hidden mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold py-2.5 px-4 rounded-lg transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  )
}
