export function HomeSimpleSteps() {
  const steps = [
    {
      icon: 'account_circle',
      step: 'Step 01',
      title: 'Create Account',
      description: 'Sign up quickly to access all learning features.',
    },
    {
      icon: 'category',
      step: 'Step 02',
      title: 'Select Course',
      description: 'Browse categories and select a course that fits your interest.',
    },
    {
      icon: 'menu_book',
      step: 'Step 03',
      title: 'Learn Easily',
      description: 'Watch videos, join lessons, and track your progress.',
    },
    {
      icon: 'workspace_premium',
      step: 'Step 04',
      title: 'Earn Certificate',
      description: 'Finish the course and download your certificate.',
    },
  ]

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <h2 className="text-4xl font-extrabold text-brand-navy font-heading">
            Simple steps to learn
          </h2>
          <p className="text-gray-600 max-w-lg lg:text-right">
            Our platform offers a wide range of courses and resources designed to help you acquire
            new competency.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full xl:w-7/12">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-gray-50 p-8 rounded-3xl hover:bg-gray-100 transition-colors flex flex-col items-start h-full"
              >
                <div className="flex justify-between w-full mb-6">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-10 text-brand-navy">
                    {step.icon === 'account_circle' && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    )}
                    {step.icon === 'category' && (
                      <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
                    )}
                    {step.icon === 'menu_book' && (
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                    )}
                    {step.icon === 'workspace_premium' && (
                      <path d="M9.68 13.69L12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
                    )}
                  </svg>
                  <span className="px-3 py-1 bg-white text-brand-navy rounded-full text-xs font-bold shadow-sm self-start">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 pt-4">
              <button className="bg-brand-navy text-white pl-8 pr-6 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all flex items-center gap-4 w-fit group">
                Get Started Today
                <span className="bg-white text-brand-navy rounded-full p-1 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full xl:w-5/12 flex gap-6 h-full min-h-[500px]">
            <div className="flex flex-col gap-6 w-full h-full">
              <div className="bg-brand-navy p-8 rounded-3xl text-white flex flex-col justify-end h-1/2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <h3 className="text-2xl font-bold mb-2 relative z-10">
                  Start Your Learning Journey
                </h3>
                <p className="text-white/70 text-sm relative z-10">
                  Discover courses that match your goals and gain skills for your future.
                </p>
              </div>
              <div className="h-1/2 rounded-3xl overflow-hidden relative">
                <img
                  alt="Students learning"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC36vKsOvlRaUhZHiSGDlBXX_GUfGFtNUbsF7uM_27879p2yILeLcWHWNlAbyNeYpN0WqpIcs8QszZzTWPHIYi9qliO0DmA9T4TZjvy2gCRsBVfvfbPeUI7T7Abl9dvARIA_zDyvEnd4sBV743eXizqBdlnOt1PNZqIqVLwomv60T_QHdAiziWOioWDZIsH4QCBxskBVedt7T-8P4zJ6DWEqrhf8Y4287yzikatR6LGoswcZgqX5_Um1_kLModu7StDXyS4yApgy2k"
                />
              </div>
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden relative hidden md:block">
              <img
                alt="Student smiling"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-T7BBgk6Su7rPNdSK8E29_2rIAw5jF5u7RZHknovejwNNQg5m59Juqt2NSBZfOiWNiqrDFbrNm20rLWbcJbRx4EeC2mIfxovsUeZUdv1IflzuR-Yp7wyTyBJi5foQ0Y1tzJcDAiRIjc5pWh_E2OFhvPQ0wgkKdXQdit0s424CFwmmOfZQCycVFSxak2lArvM15MRNUDUAGNHhcdYzVAAf9MWpwOm9ZzLUVDL2BzqiUnLTCvChH_bO8ZCudMNSsuDNsUvqXRAZ-M"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
