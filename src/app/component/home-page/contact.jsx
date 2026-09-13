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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md">
                Get Free Consultation
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <a href="tel:+918606065001" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold hover:bg-blue-100 transition shadow-sm text-sm">
                📞 Call +91 86060 65001
              </a>
              <a href="https://wa.me/918606065001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100 transition shadow-sm text-sm">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}