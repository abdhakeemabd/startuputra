import Link from "next/link";
import { servicesData } from "../../data/services";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="space-y-6 lg:col-span-1">
          <h2 className="text-2xl font-black tracking-tighter">
            Startup <span className="text-blue-500">Sutra</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Empowering businesses through statutory compliance, tax registration, ISO certification, and strategic consulting. Your trusted partner for end-to-end business growth.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/startup_sutra.co.in?utm_source=qr&stkn=MWtwemxsOW1tbHcyMw==" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Follow Startup Sutra on Instagram" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="mailto:startupsutraconsulting@gmail.com" 
              title="Email Us"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            <a 
              href="tel:+918606065001" 
              title="Call Us"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Statutory & Tax Services */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-6 text-blue-400">Statutory & Tax</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services/gst-services" className="text-gray-400 hover:text-white transition-colors block">GST Services</Link>
            </li>
            <li>
              <Link href="/services/shop-and-establishment" className="text-gray-400 hover:text-white transition-colors block">Shop & Establishment</Link>
            </li>
            <li>
              <Link href="/services/professional-tax" className="text-gray-400 hover:text-white transition-colors block">Professional Tax</Link>
            </li>
            <li>
              <Link href="/services/trade-licence" className="text-gray-400 hover:text-white transition-colors block">Trade Licence</Link>
            </li>
            <li>
              <Link href="/services/vendor-payment-management" className="text-gray-400 hover:text-white transition-colors block">Vendor Payment Management</Link>
            </li>
          </ul>
        </div>

        {/* Consulting & Tech Services */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-6 text-blue-400">Consulting & Tech</h3>
          <ul className="space-y-3 text-sm">
            {servicesData.slice(5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-gray-400 hover:text-white transition-colors block">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5 lg:col-span-1">
          <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
          <div className="flex items-start space-x-3 group">
            <div className="mt-1 bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <p className="text-gray-400 leading-relaxed text-xs">
              Smart works, DSR Techno cube, Silver Springs Layout, Munnekolala, Bengaluru, Karnataka 560066
            </p>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <a href="mailto:startupsutraconsulting@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs truncate">
              startupsutraconsulting@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3 group">
            <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <a href="tel:+918606065001" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">
              +91 86060 65001 (Call)
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Startup Sutra. All rights reserved.</p>
      </div>
    </footer>
  );
}