'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NotesHeader } from './NotesHeader'
import { NotesFilters } from './NotesFilters'
import { NotesCard, NotesCardGrid } from './NotesCard'
import { NotesPagination } from './NotesPagination'

const notesData = [
  {
    id: '1',
    code: 'ANAT101',
    name: 'Introduction to Anatomy',
    course: 'MBBS',
    year: '1st Year',
    semester: '1st Semester',
    university: 'Tribhuvan University',
    description:
      'Comprehensive overview of the human skeletal system, including detailed diagrams of bone structures and muscle attachments focusing on upper limbs.',
  },
  {
    id: '2',
    code: 'CSIT114',
    name: 'C Programming Basics',
    course: 'CSIT',
    year: '1st Year',
    semester: '1st Semester',
    university: 'Tribhuvan University',
    description:
      'Fundamental concepts of C programming language including variables, data types, control structures, and an introduction to pointers.',
  },
  {
    id: '3',
    code: 'PATH201',
    name: 'General Pathology',
    course: 'MBBS',
    year: '2nd Year',
    semester: '3rd Semester',
    university: 'Kathmandu University',
    description:
      'Study of disease mechanisms, cell injury, inflammation, and healing processes. Includes histopathology slide references.',
  },
  {
    id: '4',
    code: 'MGT205',
    name: 'Business Communication',
    course: 'BBA',
    year: '2nd Year',
    semester: '3rd Semester',
    university: 'Pokhara University',
    description:
      'Techniques for effective business writing, oral presentation skills, and professional email etiquette for corporate environments.',
  },
  {
    id: '5',
    code: 'CSIT115',
    name: 'Digital Logic',
    course: 'CSIT',
    year: '1st Year',
    semester: '1st Semester',
    university: 'Tribhuvan University',
    description:
      'Introduction to binary systems, boolean algebra, logic gates, combinational and sequential circuits design.',
  },
  {
    id: '6',
    code: 'PHAR302',
    name: 'Clinical Pharmacology',
    course: 'MBBS',
    year: '2nd Year',
    semester: '4th Semester',
    university: 'Tribhuvan University',
    description:
      'Advanced study of drug interactions, pharmacokinetics, and therapeutic applications for treating common clinical conditions.',
  },
]

export function NotesPageContent() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleFilter = () => {
    console.log('Filtering with:', {
      searchQuery,
      selectedCourse,
      selectedYear,
      selectedSemester,
    })
  }

  const handleView = (id: string) => {
    router.push(`/notes/${id}`)
  }

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NotesHeader />

        <NotesFilters
          searchQuery={searchQuery}
          selectedCourse={selectedCourse}
          selectedYear={selectedYear}
          selectedSemester={selectedSemester}
          onSearchChange={setSearchQuery}
          onCourseChange={setSelectedCourse}
          onYearChange={setSelectedYear}
          onSemesterChange={setSelectedSemester}
          onFilter={handleFilter}
        />

        <NotesCardGrid>
          {notesData.map((note) => (
            <NotesCard
              key={note.id}
              item={note}
              onView={handleView}
            />
          ))}
        </NotesCardGrid>

        <NotesPagination
          currentPage={currentPage}
          totalItems={50}
          itemsPerPage={20}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  )
}
