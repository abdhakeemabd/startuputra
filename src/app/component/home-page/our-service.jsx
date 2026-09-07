import Link from "next/link";
import { servicesData } from "../../../data/services";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#F8F8F8]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-orange-500 uppercase border border-orange-500/20 rounded-full bg-orange-500/5">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#323232] mb-6 leading-tight">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-[#323232] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
            Explore our range of professional services designed to help your business grow and succeed in today's competitive market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 group shadow-sm hover:shadow-xl hover:shadow-orange-500/5 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md ${service.shadow}`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-slate-800" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#323232] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#555] text-md leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link href={`/services/${service.slug}`} className="mt-auto">
                  <button className="text-slate-900 font-bold hover:text-orange-500 transition-all flex items-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/services">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}