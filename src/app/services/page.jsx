import { 
  Smartphone, 
  Globe, 
  Search, 
  Share2, 
  Award, 
  TrendingUp, 
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Transform Your Business",
  description: "Explore our expert services including Mobile & Web Development, SEO, Social Media Management, ISO certification and Lean consulting.",
};

import { servicesData as services } from "../../data/services";
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl rounded-full opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm mb-4 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Premium Solutions for Your Business</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Digital Presence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From cutting-edge development to strategic consulting, we provide end-to-end solutions to accelerate your growth and dominate your industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[2px] mb-6 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link href={`/services/${service.slug}`} className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer w-fit inline-flex">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-32 relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to transform your vision into reality?
            </h2>
            <p className="text-slate-300 text-lg">
              Let's discuss how our expertise can help you achieve your business goals faster.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
