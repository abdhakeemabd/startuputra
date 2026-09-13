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
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md inline-block"
            >
              Get Free Consultation
            </Link>
            <div className="flex items-center gap-3">
              <a href="tel:+918606065001" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold hover:bg-blue-100 transition shadow-sm text-sm">
                📞 Call +91 86060 65001
              </a>
              <a 
                href="https://wa.me/918606065001?text=Hello%20Startup%20Sutra,%20I%20would%20like%20to%20inquire%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold transition shadow-md text-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.163 5.283-1.385a9.92 9.92 0 004.786 1.226h.004c5.506 0 9.99-4.478 9.99-9.984s-4.483-9.986-9.99-9.986zm5.83 14.474c-.247.692-1.22 1.319-2.008 1.487-.54.115-1.246.207-3.621-.775-3.04-1.256-4.996-4.34-5.147-4.542-.152-.202-1.233-1.64-1.233-3.13 0-1.488.777-2.222 1.056-2.525.279-.303.608-.379.81-.379.202 0 .405.002.582.01.19.008.443-.072.694.53.253.606.86 2.102.936 2.254.076.152.127.329.025.53-.101.202-.152.328-.304.505-.152.177-.32.395-.456.53-.152.152-.311.317-.134.62.177.303.787 1.294 1.688 2.097 1.16 2.138.835 2.441 1.138.303.303.48.253.657.05.177-.202.759-.885.961-1.188.202-.303.405-.253.683-.152.278.101 1.77.834 2.073.986.303.152.506.228.582.354.076.126.076.733-.171 1.425z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}