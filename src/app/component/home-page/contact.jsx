import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">      
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-purple-200/40 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-14 text-center shadow-xl">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Let’s Collaborate
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Business Faster?
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-10">
            From ISO certification to strategic consulting, we help businesses
            scale with clarity, compliance, and confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md">
                Get Free Consultation
              </button>
            </Link>
            <a href="tel:+918606065001" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 transition">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Call us directly</p>
                <p className="text-gray-900 font-semibold">+91 86060 65001</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}