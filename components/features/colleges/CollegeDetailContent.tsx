'use client'

import { CollegeDetailHero } from './CollegeDetailHero'
import { CollegeAbout } from './CollegeAbout'
import { CollegeCourses } from './CollegeCourses'
import { CollegeSidebar } from './CollegeSidebar'
import { CollegeContactMobile } from './CollegeContactMobile'

interface CollegeDetailContentProps {
  collegeId: string
}

export function CollegeDetailContent({ collegeId }: CollegeDetailContentProps) {
  // Mock data - replace with actual data fetching
  const collegeData = {
    name: 'Asian College Of Higher Studies',
    location: 'Jawalakhel, Lalitpur',
    affiliation: 'Tribhuvan University',
    established: '2003',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChGFHaTg2-8dLr4shytEWEf0mn6D6nIcqmVR0X9_U8QKk7mwPG7pePZ-XkcCyOKbcpKU3wawrPmZXfmPnd9W9NT9CJsmeHeSOPPdsVUqE0Oe4KA-uJTr8KdsyuqE0TaivlFzzptGcdxp5HzHLRORlG7xAILSWvAWCkxskLpR4w7RR6QXHFCTg-ck7ZAXp13nuzo_k8LF9VymJeZnmFIAXyScaTwym3kw4yslUeiGKXBuCMr6d-Uzxyaw9eNp7afu9jTy1oxM37SaY',
    logoText: 'ACHS',
    isFeatured: true,
    isVerified: true,
    description: `Asian College of Higher Studies (ACHS) is a premier IT college located in the heart of Lalitpur. Established in 2003, it has been a pioneer in providing high-quality education in the fields of Computer Science and Information Technology.

ACHS is affiliated with Tribhuvan University and offers undergraduate programs like B.Sc. CSIT and BCA. With state-of-the-art labs, experienced faculty, and a strong focus on practical learning, ACHS prepares students to excel in the global tech industry. The college environment fosters creativity, innovation, and holistic development.`,
    courses: [
      {
        id: '1',
        name: 'B.Sc. CSIT',
        fullName: 'Bachelor of Science in Computer Science and Information Technology',
        level: 'Undergraduate' as const,
        duration: '4 Years (8 Semesters)',
        seats: 48,
        admissionCriteria:
          'Must have completed +2/ISc or equivalent with Physics and Mathematics, securing minimum C grade in all subjects. Must pass the IOST entrance examination conducted by Tribhuvan University.',
      },
      {
        id: '2',
        name: 'BCA',
        fullName: 'Bachelor of Computer Application',
        level: 'Undergraduate' as const,
        duration: '4 Years (8 Semesters)',
        seats: 35,
        admissionCriteria:
          'Completion of +2 or equivalent in any discipline with minimum D+ grade in all subjects or 45% marks. Must pass the entrance exam conducted by Faculty of Humanities and Social Sciences, TU.',
      },
      {
        id: '3',
        name: '+2 Management',
        fullName: 'Higher Secondary Education Board',
        level: 'High School' as const,
        duration: '2 Years',
        admissionCriteria:
          'SEE Passed with minimum 1.6 GPA overall. C Grade in Math and English is preferred.',
      },
    ],
    contactInfo: {
      website: 'www.achs.edu.np',
      phone: '+977-01-5524367',
      email: 'info@achs.edu.np',
    },
    admissionsOpen: true,
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCE5ttJ9LLFDh9Wlz9J66LRUrvUqbMeb7K9RUGK8l6UV7F_NG0aVPOLfRk-ZXFysLHiT4wwEm6HqZ9zaH3EadgBu8MFR6-rYlBhafeDyvOJ0RTrwiZc8lf3YcHK48Vz39STyhi3MX3pMg96noNw6NSijZCGa_dXn1lfhwAWEbPE19H1UhcIujTyi-whu2WbiLudGRYIypwk980FT_9VGs7iZ5YbXA1AXnL4Q97LQjtEdUp7oIM0eudELhFkEhZBqkDCUbv-ZnCAkMs',
  }

  return (
    <main className="flex-grow w-full">
      {/* Hero Section */}
      <CollegeDetailHero
        name={collegeData.name}
        location={collegeData.location}
        affiliation={collegeData.affiliation}
        established={collegeData.established}
        coverImage={collegeData.coverImage}
        logoText={collegeData.logoText}
        isFeatured={collegeData.isFeatured}
        isVerified={collegeData.isVerified}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <CollegeAbout description={collegeData.description} />

            {/* Courses Section */}
            <CollegeCourses courses={collegeData.courses} />

            {/* Contact Info - Mobile Only */}
            <CollegeContactMobile contactInfo={collegeData.contactInfo} />
          </div>

          {/* Right Column - Sidebar */}
          <CollegeSidebar
            contactInfo={collegeData.contactInfo}
            admissionsOpen={collegeData.admissionsOpen}
            mapImage={collegeData.mapImage}
          />
        </div>
      </div>
    </main>
  )
}
