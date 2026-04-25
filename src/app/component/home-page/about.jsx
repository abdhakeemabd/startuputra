import Link from "next/link";
export default function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <img src="/about.jpg" alt="About Startuptra" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"/>
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">About Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Transforming Businesses with <span className="text-orange-500">Innovation and Expertise</span></h2>
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
              At Startuptra, we are passionate about helping businesses achieve their full potential. With a team of experienced consultants and industry experts, we provide tailored solutions that drive measurable results.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">ISO Certification Experts</h4>
                  <p className="text-gray-400 leading-relaxed">Streamlined ISO certification process with guaranteed approval. We make compliance simple and efficient.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Strategic Business Consulting</h4>
                  <p className="text-gray-400 leading-relaxed">Data-driven strategies designed to accelerate your growth and maximize profitability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Wide Industry Experience</h4>
                  <p className="text-gray-400 leading-relaxed">Serving diverse industries including food, healthcare, manufacturing, education, and more.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link href="/about">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/about-banner.jpg')] mix-blend-overlay"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[100%] h-[100%] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-[140px]"></div>
      </div>
    </section>
  )
}