'use client'

import { useState } from 'react'
import { CollegesHeader } from './CollegesHeader'
import { CollegesSearch } from './CollegesSearch'
import { CollegesFilters } from './CollegesFilters'
import { CollegesCard, CollegesCardGrid } from './CollegesCard'
import { CollegesPagination } from './CollegesPagination'

const collegesData = [
  {
    id: '1',
    name: 'Asian College Of Higher Studies',
    category: 'Management & IT',
    location: 'Jawalakhel, Lalitpur',
    affiliation: 'Tribhuvan University',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChGFHaTg2-8dLr4shytEWEf0mn6D6nIcqmVR0X9_U8QKk7mwPG7pePZ-XkcCyOKbcpKU3wawrPmZXfmPnd9W9NT9CJsmeHeSOPPdsVUqE0Oe4KA-uJTr8KdsyuqE0TaivlFzzptGcdxp5HzHLRORlG7xAILSWvAWCkxskLpR4w7RR6QXHFCTg-ck7ZAXp13nuzo_k8LF9VymJeZnmFIAXyScaTwym3kw4yslUeiGKXBuCMr6d-Uzxyaw9eNp7afu9jTy1oxM37SaY',
    website: 'https://achs.edu.np',
  },
  {
    id: '2',
    name: 'Advance College of Engineering',
    category: 'Engineering',
    location: 'Bhuwaneswari Marga, Kalanki',
    affiliation: 'Tribhuvan University',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbf1Z15APDbTna6qrZALaKx_2FmN5r4Ji1QgD0C0QEMgTkbAzz8xDPwtw588McSbw-vIEtLTEllQr66gA4_g8fPfPdU6kAGCWEg1BjZm2cxr7fANvyqA-8lYG0e4sWTMZfA_UvDCIyGV5_saq7tGVbjHJ1QjWAHCskJyUV2hTvcPUZ0jX8YEFbb3eKIx3LHI2wAgi-gr1LAVXUBkKZtL3L-YHvTLuzOZ07KdaUZs90p0Pi8qsfB_eGfzaZndcZpwQRZVHYWa3Luk',
    website: 'https://ace.edu.np',
  },
  {
    id: '3',
    name: 'Kathmandu Engineering College',
    category: 'Engineering & Architecture',
    location: 'Kalimati, Kathmandu',
    affiliation: 'Pokhara University',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJa8Ha1oPeOvU4SHD_uM5UxZXcXoLNjhsePAZkJIjvi7955i6qGrF14BHB2jmUwrPJGxG6vFJcEzIfJjZJYl02zCo7inUmnCwWh5s6lKYDbG6FRcCgkZ2sHbzwgfYqtVlBu6Kziqmly1EGEbVGOCaCYrnVpKnVslYh6BQ8XJ9yX7JL1Srk6JcyIjv-fdRtTre557MImehNP2oNiF7ThMDIstE1scsUOlgw4awDm7uory7B5Z2MnHEAsmroMAPOOd8xgury78sLdxM',
    website: 'https://kec.edu.np',
  },
  {
    id: '4',
    name: 'Islington College',
    category: 'IT & Business',
    location: 'Kamal Pokhari, Kathmandu',
    affiliation: 'London Met Univ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC64vp1FIQFzptNzN_TViEN1kqv1n2YY1e9uI9LLshs4UYjNdHH3gZy9EcF6b-vFP8RXgyzBCPzC2AVb9W2801Kr0jVS8C-mX3Fz4iBMHhkAT_yTZZD-afWU-lapID_zLHzaFvDmy10LnVXdNbtdzpcxWO8dpdzKbwXMQhhhlHM8VLRiHXhS0JZBEeXujpyBOTCPOadYz3-MtVytiPwY8HGN_a_MrlXU73XchFw0xa1iDf7LKULaYGw0vYTOl9bDF9msTZkqugWbGI',
    website: 'https://islington.edu.np',
  },
  {
    id: '5',
    name: 'Nepal Medical College',
    category: 'Medical Science',
    location: 'Jorpati, Kathmandu',
    affiliation: 'Kathmandu Univ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk0RAuLnWRuP2eXmf8h_6rr1jv904VyknJ_SZdEp1ydzEeCEe41npfS1HmsA8f1vUCsqQ0nVxIiw0ESaa9nWx76jXmscqebJx6WvhnGDyCJw2hP0IqvYq6hLOT3PJckAm8BfH_IR3mD5QQu8BZeoYpI6T4H2nnolFY9YQcyiNacqUfhBfdk82FxLusSU4gSk3T--ZCUFOZ185AiFb3BFZVtrjpguYy-vrEsRL8xKHN8JRIySeBX5k90ycEIRPGEPYBOnWfnlzHKfc',
    website: 'https://nmcth.edu',
  },
  {
    id: '6',
    name: 'Apex College',
    category: 'Business & IT',
    location: 'Old Baneshwor, Kathmandu',
    affiliation: 'Pokhara University',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3oAusVNZ2-RhDjc5KIZGU0WHBnLiCuOjdtHRyR3LIDLw0-MZk-J129SfLwQV6ncD3caHVBkuDtgcbVpgM2Yqif4AN--1JWMO6ikoCIQ_dQsVWMvBm-xtbOLfzuGp_3r4DVhWcQqP90vpxmCOpF-SdG-vOIv2ARXFK58QHHnxkEX-UNAvNyGImPwwvJIoxwuca35n7FLF3LdpvFDILe3osQ2t6CZT4oO95g_vr13986_GMr1Mwd0k0SO0cD6LducEjw2maibOcClA',
    website: 'https://apex.edu.np',
  },
]

export function CollegesPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  const [categories, setCategories] = useState([
    { id: 'all', label: 'All Institutes', checked: true },
    { id: 'engineering', label: 'Engineering', checked: false },
    { id: 'medical', label: 'Medical', checked: false },
    { id: 'management', label: 'Management', checked: false },
    { id: 'it', label: 'IT & Computing', checked: false },
  ])

  const [locations, setLocations] = useState([
    { id: 'kathmandu', label: 'Kathmandu', checked: false },
    { id: 'lalitpur', label: 'Lalitpur', checked: false },
    { id: 'bhaktapur', label: 'Bhaktapur', checked: false },
    { id: 'pokhara', label: 'Pokhara', checked: false },
  ])

  const handleCategoryChange = (id: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat
      )
    )
  }

  const handleLocationChange = (id: string) => {
    setLocations((prev) =>
      prev.map((loc) =>
        loc.id === id ? { ...loc, checked: !loc.checked } : loc
      )
    )
  }

  const handleReset = () => {
    setCategories((prev) =>
      prev.map((cat) => ({ ...cat, checked: cat.id === 'all' }))
    )
    setLocations((prev) => prev.map((loc) => ({ ...loc, checked: false })))
    setSearchQuery('')
  }

  const handleVisit = (id: string) => {
    const college = collegesData.find((c) => c.id === id)
    if (college?.website) {
      window.open(college.website, '_blank')
    }
  }

  const handleFavorite = (id: string) => {
    console.log('Favorite college:', id)
  }

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Header with Search */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <CollegesHeader />
          <CollegesSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Main Content: Filters + Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <CollegesFilters
            categories={categories}
            locations={locations}
            onCategoryChange={handleCategoryChange}
            onLocationChange={handleLocationChange}
            onReset={handleReset}
          />

          {/* Colleges Grid */}
          <div className="flex-grow">
            <CollegesCardGrid>
              {collegesData.map((college) => (
                <CollegesCard
                  key={college.id}
                  item={college}
                  onVisit={handleVisit}
                  onFavorite={handleFavorite}
                />
              ))}
            </CollegesCardGrid>

            {/* Pagination */}
            <CollegesPagination
              currentPage={currentPage}
              totalPages={9}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
