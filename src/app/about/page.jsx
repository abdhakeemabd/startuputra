import { Sparkles, Target, Users, ShieldCheck, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Startup Sutra",
  description: "Learn more about Startup Sutra, our mission, vision, and how we empower businesses through expert consulting.",
};

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Expert Consultants" },
  { value: "99%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with innovative strategies, seamless technology, and uncompromising quality standards to achieve their ultimate growth potential.",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    description: "To become the globally trusted partner for digital transformation and business excellence, setting the benchmark for consulting services.",
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    description: "Integrity, excellence, and customer-centricity drive everything we do. We believe in delivering sustainable results and building long-lasting partnerships.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-500/30 pb-24">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-gradient-to-br from-orange-500 to-purple-600 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Discover Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Startup Sutra</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are a leading provider of ISO certification, digital development, and business consulting services. With years of experience, we help businesses achieve excellence through data-driven strategies and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-wrap justify-around gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story & Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Driving Innovation and Excellence</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded on the principles of innovation and integrity, Startup Sutra has grown into a premier consulting firm trusted by hundreds of businesses globally. Our journey started with a simple goal: to make complex business processes—like ISO certification and digital transformation—simple and accessible.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Today, our diverse team of experts spans across IT, quality management, and business strategy, allowing us to provide end-to-end solutions. Whether you're a startup looking to establish a digital footprint or an enterprise aiming for operational excellence, we are here to guide you every step of the way.
            </p>
            <Link href="/services">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25">
                Explore Our Services
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/about.webp" alt="Our Team" className="w-full h-full object-cover" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Award Winning</div>
                <div className="text-sm text-slate-500">Consulting Firm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-orange-500">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/50 opacity-10 mix-blend-overlay"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Accelerate Your Business?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join hundreds of satisfied clients who have transformed their operations and digital presence with our expert guidance.
          </p>
          <Link href="/contact">
            <button className="relative z-10 bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
