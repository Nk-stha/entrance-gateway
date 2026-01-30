'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SyllabusHeader } from './SyllabusHeader'
import { SyllabusFilters } from './SyllabusFilters'
import { SyllabusTable } from './SyllabusTable'
import { SyllabusPagination } from './SyllabusPagination'

const syllabusData = [
  {
    id: '1',
    code: 'CSC109',
    name: 'Introduction to Information Technology',
    course: 'CSIT',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '2',
    code: 'CSC110',
    name: 'C Programming',
    course: 'CSIT',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '3',
    code: 'CSC111',
    name: 'Digital Logic',
    course: 'CSIT',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '4',
    code: 'MTH112',
    name: 'Mathematics I',
    course: 'CSIT',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '5',
    code: 'PHY113',
    name: 'Physics',
    course: 'CSIT',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '6',
    code: 'CACS101',
    name: 'Computer Fundamentals & Applications',
    course: 'BCA',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 4,
  },
  {
    id: '7',
    code: 'CSO102',
    name: 'Society and Technology',
    course: 'BCA',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '8',
    code: 'CENG103',
    name: 'English I',
    course: 'BCA',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '9',
    code: 'CMTH104',
    name: 'Mathematics I',
    course: 'BCA',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
  {
    id: '10',
    code: 'CDL105',
    name: 'Digital Logic',
    course: 'BCA',
    yearSemester: 'Year 1 / Sem I',
    creditHours: 3,
  },
]

export function SyllabusPageContent() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('BSc. CSIT')
  const [selectedSemester, setSelectedSemester] = useState('All Semesters')
  const [currentPage, setCurrentPage] = useState(1)

  const handleItemClick = (id: string) => {
    router.push(`/syllabus/${id}`)
  }

  return (
    <main className="flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <SyllabusHeader />
        
        <SyllabusFilters
          searchQuery={searchQuery}
          selectedCourse={selectedCourse}
          selectedSemester={selectedSemester}
          onSearchChange={setSearchQuery}
          onCourseChange={setSelectedCourse}
          onSemesterChange={setSelectedSemester}
        />

        <SyllabusTable
          data={syllabusData}
          onItemClick={handleItemClick}
        />

        <SyllabusPagination
          currentPage={currentPage}
          totalItems={121}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  )
}
