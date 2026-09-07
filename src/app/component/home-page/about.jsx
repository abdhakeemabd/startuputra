import Link from "next/link";
import { CheckCircle2, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-purple-500/10 relative group">
              <img src="/about.webp" alt="About Startuptra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-4xl font-black text-white">500+</div>
                  <div className="text-orange-400 font-medium">Happy Clients</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-orange-400 uppercase bg-orange-400/10 rounded-full border border-orange-400/20">
              Discover Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Transforming Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Innovation & Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Startup Sutra, we don't just consult; we partner with you to engineer success. From securing crucial ISO certifications to building cutting-edge digital platforms, our multidisciplinary team empowers your business to thrive in a competitive landscape.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">ISO & Compliance Experts</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Streamlined certification processes with guaranteed approval to elevate your operational standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Strategic Growth & Digital Solutions</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Data-driven business strategies combined with high-performance web and mobile app development.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 font-medium">Client-Centric Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 font-medium">End-to-End Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 font-medium">Industry Best Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
            
            <div>
              <Link href="/about">
                <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25 flex items-center gap-3">
                  Read Our Full Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}