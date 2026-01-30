export function HomeNews() {
  const articles = [
    {
      title: 'Why EntranceGateway is the ultimate learning platform for aspiring professionals.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDo3jSIrwN740pJDmGsRVCurNInFXRq3UEuJjpH1g0tt2hspKSMFxLlDi8p_GHRRvrTC-Q4_QcC3y9PFo6V9Y1Tro0UpgNOivicPRBpyKdT_x5r1uPmTmGaxCcZabeR2-uQr2tCPfLavAubyqi0ixVeKKXHUGge11R3gEzjNc5vkwfAzUIBK_dgbOkHgwJdkgmKPpK43rdomg5yoO7y4wIrybAz9ubF0kTzR7szzQL1qV7Bgt9gRAVATBM1XvLTHhw5hOHjT8YkzSI',
      date: '25 Oct 24',
      category: 'Digital Marketing',
    },
    {
      title: 'Master new skills anywhere, anytime and discover the power of learning.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuALKInAC2hImssDod9f9KMlZe8qOf5VDHUml4hy0y3meb5SNoUmOfmZfDsL2Mkz2ceZ7AEcDyVtZ-NiDt3DGMrhXoAFR41n0rWKjXGB_RGX-RXfmYNQLOIS3VhVZ4Ab389__RUORR-a5oKNi_T_h4ekI5ZRqu4tAVvukVj0C7ebQXr8bggkK06tdAUDXmsWGF1puXPMrHGHXpigwPDbskEMlIWyZu1fVKhE5nTNh16Btz9MMZAZlZG1rc4etQVeC-pA8ScYcUoxslg',
      date: '25 Oct 24',
      category: 'Apps Development',
    },
    {
      title: 'How EntranceGateway is revolutionizing online education for the modern learner.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCOJrdU5EPzpM647pxuZlZz_CSW1ktqb69pgDrovrd10bjK42QXRU7u-XiUsEVmV2bQjHi6RzEjaO3PnDBBEqBS-M_-k-naZM8qpCpS0LhqGKUGn1u5Q9jW3IcAn6PY4Hwo0N14Op0rFQt6gi1xl-q3dbmlhz8wmxO2a4kGc1zP3__Zi-Bo4StGThUaW3Cem_pS9KhtpoPH_2frj4LnaUWF5oMyV1-mgmnoleQuGwIOIoSlm167gFuxjzyqiSXXVh_Qfqi6cNlwH1A',
      date: '25 Oct 24',
      category: 'Web Design',
    },
    {
      title: '10 Reasons why EntranceGateway is the best platform for continuous learning.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ5XNW1Ia2C-gAPM7mVYJQjOVYUTaKHaJB1cHbAcdJ0qPW-pWurIweqfnJ3lI09Drh7xoFHsWkgLUAaM5EpZXq-RNLjddqRCTEPvQ99gJUDLSrs37rcG0gJiAwDZS_hFONDTwHmoXaBT1RHsFzFDWKDLvttfp5zUYaVZBFBqnU6-uRRcsW_tKvH3WujeLKZKIJhUWfoRAXKXN2cyobR_UYp728L2TbVWCtEQTb0ssZxg-3TBixWCFUxi51O5noLUHYXSrS_ArA1AA',
      date: '25 Oct 24',
      category: 'Web Development',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4 font-heading">
            Latest news & articles
          </h2>
          <p className="text-gray-600">
            Stay updated with the latest educational insights and platform updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex p-6 items-center gap-6"
            >
              <div className="w-1/3 flex-shrink-0">
                <img
                  alt={article.title}
                  className="rounded-lg object-cover h-32 w-full"
                  src={article.image}
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-snug hover:text-brand-blue cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 font-medium">
                  <span>{article.date}</span>
                  <span className="mx-3 text-gray-300">|</span>
                  <span className="text-gray-600">{article.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
