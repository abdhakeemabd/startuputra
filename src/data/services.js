import { 
  Smartphone, 
  Globe, 
  Search, 
  Share2, 
  Award, 
  TrendingUp, 
  Briefcase
} from "lucide-react";

export const servicesData = [
  {
    title: "ISO Certification",
    slug: "iso-certification",
    description: "Expert guidance to help you achieve ISO certification quickly, efficiently, and hassle-free.",
    fullDescription: "Achieving ISO certification is a powerful way to demonstrate your commitment to quality, security, and continuous improvement. Our experts provide end-to-end consulting, from gap analysis to final audit, ensuring a smooth and hassle-free certification process for standards like ISO 9001, ISO 27001, and more.",
    features: ["Comprehensive Gap Analysis", "Documentation Support", "Internal Audit Preparation", "Post-Certification Maintenance"],
    icon: Award,
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-50",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "Lean Consulting",
    slug: "lean-consulting",
    description: "Optimize your processes, reduce waste, and skyrocket efficiency with our Lean consulting.",
    fullDescription: "Transform your operations with Lean methodologies. We help organizations identify inefficiencies, eliminate waste, and optimize workflows to drive productivity and profitability. Our tailored approach ensures sustainable process improvements that empower your workforce.",
    features: ["Value Stream Mapping", "5S Implementation", "Kaizen Events", "Continuous Improvement Culture Building"],
    icon: TrendingUp,
    color: "from-rose-500 to-red-400",
    bgLight: "bg-rose-50",
    shadow: "shadow-rose-500/20"
  },
  {
    title: "Project Management",
    slug: "project-management",
    description: "Professional management of your critical business projects from ideation to successful launch.",
    fullDescription: "Ensure your critical projects are delivered on time, within scope, and on budget. Our certified project managers employ Agile, Scrum, and Waterfall methodologies to meticulously plan, execute, and monitor projects, minimizing risks and maximizing ROI.",
    features: ["Agile & Scrum Methodologies", "Risk Management & Mitigation", "Resource Allocation", "Stakeholder Communication"],
    icon: Briefcase,
    color: "from-slate-600 to-slate-400",
    bgLight: "bg-slate-50",
    shadow: "shadow-slate-500/20"
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Create stunning, high-performance iOS and Android applications tailored to your business needs.",
    fullDescription: "Engage your users on the go with custom, high-performance mobile applications. We build seamless, intuitive, and secure native and cross-platform apps for iOS and Android that perfectly align with your brand and business objectives.",
    features: ["Native iOS & Android Apps", "Cross-Platform (React Native/Flutter)", "UI/UX Mobile Design", "App Store Optimization"],
    icon: Smartphone,
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Web App Development",
    slug: "web-app-development",
    description: "Build scalable, secure, and blazing fast web applications using cutting-edge technologies.",
    fullDescription: "Deliver exceptional digital experiences with robust, scalable, and lightning-fast web applications. Using the latest web technologies, we engineer secure platforms that can handle high traffic and complex business logic effortlessly.",
    features: ["Single Page Applications (SPAs)", "Progressive Web Apps (PWAs)", "Enterprise Portals", "Secure Backend Architecture"],
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Dominate search rankings and drive organic, high-converting traffic to your website.",
    fullDescription: "Stop being invisible online. Our data-driven SEO strategies push your website to the top of search engine results. We combine technical SEO, on-page optimization, and authoritative link building to drive sustained, high-converting organic traffic.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page & Off-Page Optimization", "Local SEO & Google Business"],
    icon: Search,
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Engage your audience and build a loyal community with data-driven social media strategies.",
    fullDescription: "Amplify your brand's voice across all major social platforms. We create compelling content, manage your community, and run targeted ad campaigns to build brand loyalty, increase engagement, and drive meaningful conversions.",
    features: ["Content Creation & Curation", "Community Engagement", "Paid Social Ad Campaigns", "Performance Analytics & Reporting"],
    icon: Share2,
    color: "from-orange-500 to-amber-400",
    bgLight: "bg-orange-50",
    shadow: "shadow-orange-500/20"
  }
];
