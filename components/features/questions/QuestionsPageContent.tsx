'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuestionsHeader } from './QuestionsHeader'
import { QuestionsFilters } from './QuestionsFilters'
import { QuestionsTable } from './QuestionsTable'
import { QuestionsPagination } from './QuestionsPagination'

const questionsData = [
  {
    id: '1',
    setName: 'Question set 2023',
    subject: 'Digital Logic',
    year: '2023',
    course: 'BCA',
    affiliation: 'Tribhuvan University',
  },
  {
    id: '2',
    setName: 'Entrance Model Set A',
    subject: 'Computer Science',
    year: '2022',
    course: 'CSIT',
    affiliation: 'Tribhuvan University',
  },
  {
    id: '3',
    setName: 'Question set 2021',
    subject: 'C-Programming',
    year: '2021',
    course: 'BCA',
    affiliation: 'Tribhuvan University',
  },
]

export function QuestionsPageContent() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleReset = () => {
    setSearchQuery('')
    setSelectedCourse('')
    setSelectedYear('')
  }

  const handleView = (id: string) => {
    router.push(`/questions/${id}`)
  }

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QuestionsHeader />

        <QuestionsFilters
          searchQuery={searchQuery}
          selectedCourse={selectedCourse}
          selectedYear={selectedYear}
          onSearchChange={setSearchQuery}
          onCourseChange={setSelectedCourse}
          onYearChange={setSelectedYear}
          onReset={handleReset}
        />

        <QuestionsTable data={questionsData} onView={handleView} />

        <div className="mt-6 flex justify-end">
          <QuestionsPagination
            currentPage={currentPage}
            totalPages={1}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  )
}
