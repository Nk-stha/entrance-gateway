export function HomeCTA() {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-heading">
              Join more than 25,000+ students all over the world.
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed">
              Join a global community of over 25,000 students who are transforming their skills and
              knowledge through our comprehensive courses. Whether you're a beginner or an advanced
              learner.
            </p>
            <button className="bg-success text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg">
              Get Started Now
            </button>
          </div>

          <div className="relative">
            <img
              alt="Students Studying"
              className="rounded-3xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrK40-vvaulaRhCnU4ytNeex2wM8LEoiynsbx9-D33rY_7BHGNDrJUZr62OjDN0qp6qxvid1nqUtqBCDNQwZrdRw6Lll3M9X8ofgmGD678w_jvvdNSZiisl_YdG1nYTFg_poiJgUT0pK7ckPsXuIL5C9MMQTXq6ltHM3p-ISBN6XSC4f-e2-d322vvkVdA0r05rOihrHEboKs99ixZjSA800Q5-po2uLadDp0OJDgR6mSWxY5yX5LNXlTRT277HByObwnKW2DQqCU"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
