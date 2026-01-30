'use client'

import { useState } from 'react'

export function HomeBrowseCategory() {
  const [activeTab, setActiveTab] = useState('syllabus')

  const tabs = [
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'notes', label: 'Notes' },
    { id: 'questions', label: 'Old Questions' },
  ]

  const categories = [
    {
      icon: 'computer',
      title: 'Computer Science',
      count: '12 Syllabuses',
      description:
        'Complete curriculum for CSIT, BCA, and Engineering entrance preparation modules.',
    },
    {
      icon: 'medical_services',
      title: 'Medical Science',
      count: '18 Syllabuses',
      description: 'Detailed subject breakdowns for CEE, MBBS, BDS and Nursing entrance exams.',
    },
    {
      icon: 'engineering',
      title: 'Engineering',
      count: '15 Syllabuses',
      description:
        'IOE and KU engineering entrance exam syllabus covering Mathematics and Physics.',
    },
    {
      icon: 'calculate',
      title: 'Applied Mathematics',
      count: '8 Syllabuses',
      description: 'Advanced mathematical concepts required for technical university entrance exams.',
    },
    {
      icon: 'biotech',
      title: 'Natural Sciences',
      count: '10 Syllabuses',
      description: 'Fundamental and applied science curriculum for various academic paths.',
    },
    {
      icon: 'business_center',
      title: 'Management',
      count: '9 Syllabuses',
      description:
        'Focus on CMAT and GMAT oriented syllabus for business and management studies.',
    },
  ]

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-10 font-heading">
            Browse by Category
          </h2>

          <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-brand-navy shadow-sm'
                    : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-brand-blue hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue/5 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 text-brand-navy">
                    {category.icon === 'computer' && (
                      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                    )}
                    {category.icon === 'medical_services' && (
                      <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" />
                    )}
                    {category.icon === 'engineering' && (
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    )}
                    {category.icon === 'calculate' && (
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z" />
                    )}
                    {category.icon === 'biotech' && (
                      <path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.47-2.57L8.17 9H2v2h4.17l2.3 2.3c-.32.53-.47 1.13-.47 1.7 0 .86.3 1.66.83 2.29L7 19zm6.25-8.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zM22 3H2v2h20V3z" />
                    )}
                    {category.icon === 'business_center' && (
                      <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
                    )}
                  </svg>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                  {category.count}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">{category.title}</h3>
              <p className="text-gray-500 line-clamp-2 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
