import Link from "next/link";

export default function OurServices() {
  const services = [
    {
      title: "ISO Certification",
      description:
        "Streamlined ISO certification process with guaranteed approval. We make compliance simple and efficient for your business.",
      link: "/services/iso-certification",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Startup Registration",
      description:
        "Register your startup quickly with expert guidance and minimal paperwork.",
      link: "/services/startup-registration",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "GST Registration",
      description:
        "Hassle-free GST registration with complete support and documentation.",
      link: "/services/gst-registration",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-orange-500 uppercase  border border-orange-500/20">Our Services</div>
          <h2 className="text-2xl md:text-4xl font-black text-[#323232] mb-6 leading-tight">Comprehensive Solutions for Your Business</h2>
          <p className="text-[#323232] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Explore our range of professional services designed to help your business grow and succeed in today's competitive market.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F8F8F8] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110">
                {service.icon({ className: "w-8 h-8 text-orange-400 group-hover:text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-[#323232] mb-4">{service.title}</h3>
              <p className="text-[#343434] text-md leading-relaxed mb-6">{service.description}</p>
              <Link href={service.link}>
                <button className="text-orange-400 font-bold hover:text-orange-300 transition-all flex items-center gap-2 group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}