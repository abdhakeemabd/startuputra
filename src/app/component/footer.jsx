import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter">
            Startup <span className="text-blue-500">Sutra</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses through innovation, ISO certification, and strategic consulting. Your partner in sustainable growth.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-8">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-8">Services</h3>
          <ul className="space-y-4">
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">ISO Certification</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Lean Consulting</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Business Strategy</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Growth Advisory</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold mb-8">Get In Touch</h3>
          <div className="flex items-start space-x-4 group">
            <div className="mt-1 bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Smart works, DSR Techno cube, Silver Springs Layout, Munnekolala, Bengaluru, Karnataka 560066
            </p>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <p className="text-gray-400 text-sm">nisamudheenkp91@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <p className="text-gray-400 text-sm">86060 65001</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Startup Sutra. All rights reserved. Developed by <a className="text-blue-400 hover:text-blue-300 underline" href="https://kppcs.in">Kppcs</a></p>
      </div>
    </footer>
  );
}