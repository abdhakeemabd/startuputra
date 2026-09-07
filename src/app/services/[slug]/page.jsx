import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Smartphone, 
  Globe, 
  Search, 
  Share2, 
  Award, 
  TrendingUp, 
  Briefcase,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

// Shared data source for services to ensure consistency
import { servicesData } from "../../../data/services";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Our Services`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className={`min-h-screen bg-slate-50 selection:bg-blue-500/30 pb-24`}>
      {/* Hero Section */}
      <div className={`relative pt-32 pb-20 overflow-hidden ${service.bgLight}`}>
        <div className="absolute inset-0 z-0 opacity-40">
          <div className={`absolute top-0 left-1/2 w-full -translate-x-1/2 h-[500px] bg-gradient-to-b ${service.color} blur-[100px] rounded-full opacity-30`}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className={`w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br ${service.color} p-[3px] shadow-2xl`}>
              <div className="w-full h-full bg-white rounded-[21px] flex items-center justify-center">
                <Icon className="w-10 h-10 text-slate-800" />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Need help with {service.title}?</h3>
              <p className="text-slate-600 mb-8">
                Schedule a free consultation with our experts to discuss your specific requirements.
              </p>
              <Link href="/contact">
                <button className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity shadow-lg active:scale-95 transform`}>
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
