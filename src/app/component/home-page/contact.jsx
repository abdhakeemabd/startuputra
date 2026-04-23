import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Let's Collaborate
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to Accelerate Your <span className="text-blue-500">Business Growth?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            From ISO certification to strategic business consulting, we provide the expertise you need to scale effectively and sustainably.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20">
                Get Free Consultation
              </button>
            </Link>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Call us directly</p>
                <p className="font-bold text-lg">86060 65001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}