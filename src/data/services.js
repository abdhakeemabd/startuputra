import { 
  Smartphone, 
  Globe, 
  Search, 
  Share2, 
  Award, 
  TrendingUp, 
  Briefcase,
  Receipt,
  Store,
  Calculator,
  FileCheck,
  Wallet
} from "lucide-react";

export const servicesData = [
  {
    title: "GST Services",
    slug: "gst-services",
    description: "Complete GST compliance including registration, return filing, tax payment, and registration cancellation.",
    fullDescription: "Navigating Goods and Services Tax (GST) compliance is vital for modern businesses. Startup Sutra provides end-to-end GST solutions tailored to startups, SMEs, and corporate entities. Our tax experts assist you with new GST Registration, timely return filing (GSTR-1, GSTR-3B, GSTR-9), hassle-free tax payments, and official GST registration cancellation upon business closure or restructuring.",
    features: [
      "GST Registration (New & Modifications)",
      "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)",
      "GST Tax Payment & Challan Generation",
      "GST Cancellation & Surrender Support"
    ],
    icon: Receipt,
    color: "from-blue-600 to-indigo-600",
    bgLight: "bg-blue-50",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Shop & Establishment License",
    slug: "shop-and-establishment",
    description: "Hassle-free Shop & Establishment registration and official license cancellation with government labor departments.",
    fullDescription: "Registration under the State Shop and Establishment Act is mandatory for all commercial establishments, shops, offices, and service centers. We handle your complete registration process, document verification, and government issuance of the certificate. Should you close or restructure your operations, we also handle official Shop and Establishment Cancellation with local authorities.",
    features: [
      "Shop & Establishment Registration",
      "License Renewal & Certificate Issuance",
      "Shop & Establishment Cancellation",
      "Labor Department Compliance"
    ],
    icon: Store,
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Professional Tax Services",
    slug: "professional-tax",
    description: "End-to-end Professional Tax registration, monthly/annual filing, payment assistance, and license cancellation.",
    fullDescription: "Professional Tax (PT) is a state-level tax levied on trades, professions, and employments. Startup Sutra ensures end-to-end PT compliance for business owners and employees. We handle state-wise Professional Tax Registration (PTEC & PTRC), accurate PT return filing, online PT payments, and formal PT Registration Cancellation when winding up business entities.",
    features: [
      "Professional Tax Registration (PTEC & PTRC)",
      "Professional Tax Return Filing",
      "Online PT Payment Management",
      "PT Registration Cancellation"
    ],
    icon: Calculator,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Trade Licence Services",
    slug: "trade-licence",
    description: "Obtain municipal trade licenses for legal business operations and manage official license surrender & cancellation.",
    fullDescription: "A Trade Licence issued by your local municipal authority permits commercial activities in a specific area. We simplify the entire Trade Licence Registration procedure by handling document submission and municipal verification. If your commercial unit closes down, we also manage Trade Licence Cancellation and official NOC processing.",
    features: [
      "Municipal Trade Licence Registration",
      "Annual Licence Renewal",
      "Trade Licence Cancellation & Surrender",
      "NOC & Municipal Compliance Assistance"
    ],
    icon: FileCheck,
    color: "from-purple-600 to-violet-500",
    bgLight: "bg-purple-50",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Vendor Payment Management",
    slug: "vendor-payment-management",
    description: "Streamline accounts payable, vendor payouts, invoice verification, ledger reconciliation, and tax withholding.",
    fullDescription: "Ensure smooth financial operations and strong vendor relationships with our Vendor Payment Management services. We manage invoice verification, payment scheduling, ledger reconciliation, and mandatory tax deduction compliance (TDS & GST withholding). Streamline accounts payable while maintaining full transparency and working capital efficiency.",
    features: [
      "Automated Invoice Verification & Processing",
      "Vendor Payment Scheduling & Processing",
      "TDS & GST-TDS Withholding Compliance",
      "Vendor Onboarding & Ledger Reconciliation"
    ],
    icon: Wallet,
    color: "from-cyan-500 to-blue-600",
    bgLight: "bg-cyan-50",
    shadow: "shadow-cyan-500/20"
  },
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

