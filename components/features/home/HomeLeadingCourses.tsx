export function HomeLeadingCourses() {
  const courses = [
    {
      title: 'Comprehensive BSc CSIT Preparation: From Core Concepts to Mock Tests',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQ4DUX-srzz6et53Bt1ftoOoCtS43rHb6HaCPHMz25-wd0qVC8RXOPwCn9AYlsCBSUty7lA-tseGWdnLtIaIwWRCBrmaIjZclhN9RAwNguQwleIg20buvWfHnvCrSm2pNgJwRnpa2UfVHECptd6OZVCErDr1-RhuAOjbBGpXrhnLYDPXu8ifHe_Bip6lsKonUazzhRWQUqMnotoMZRccqjHI7KS5N6heFDHvBzXbjvd4oxqktCVZM9nmavucEfZmQfjBpFn-6AQo',
      rating: 5.0,
      price: 'Rs. 4,500',
      duration: '120 hrs',
    },
    {
      title: 'MBBS Masterclass: Advanced Biology and Chemistry Focused Prep',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBkRyAr9Fr5xmiQdeC1G6jQzYwQWCVo7ktSOzfP7jiOfaWqS6lzRWxCz2oKQgAFVkwe_9pnly1ZN8z2aleK8O8QGWbXDdFWEAxOT_uAd1ZZH8J9rqT3jaag6Be9sIrEeR0olanHgKyvpYDhcTGwp-sVKX4L9wkxKhrg_oQkWNaX740vqCZYj7zEuNM-zobL3oMqUiLdEMfCBtZO6jFMVn0g4q6jljL9yHZyd9zjCIinHj33B2-88_vVj3XALs2sp_zQ_OU1t18r3BM',
      rating: 4.9,
      price: 'Rs. 8,999',
      duration: '240 hrs',
    },
    {
      title: 'BCA Gateway: Mathematics and Digital Logic for Aspiring Developers',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCXCJwp8wrgxmblLvmmHBNvmFmvU2LWGVX1OGH_9A6rZ_--pKM1jLIFMfWKBCskQhwy0E77V77fS_CiC1iopuI7VnjJkUqFejc7tTZjOzvG6VEtfFfrkD5hm7TcMT7VQABPhx4_EhCbaw7oljhJUWhhX9DwSW5nn06I76vZCxYnBktppWwedxJjpLNlVljLW4acKScawPIAf5eAXkzyk0RZbxNRmHjNm_DBXVxcoAOCGhigeSz244XaD0Rvaa-pkA6CJMLZlz4fCYg',
      rating: 5.0,
      price: 'Rs. 3,500',
      duration: '90 hrs',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-navy font-heading">
              Our leading courses
            </h2>
            <p className="text-gray-600 mt-2">
              Prepared by industry experts for maximum clarity and cognitive ease.
            </p>
          </div>
          <button className="bg-brand-navy text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all hidden md:block">
            Explore All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  src={course.image}
                />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-brand-gold"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1 font-medium">({course.rating})</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-4 h-14 leading-snug">
                  {course.title}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xl font-extrabold text-brand-navy">{course.price}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-1">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="bg-brand-navy text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  )
}
