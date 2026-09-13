"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#0a0a0a] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Get in Touch</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or need expert consulting? Reach out to us and let's start a conversation about your business growth.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart works, DSR Techno cube, Silver Springs Layout, Munnekolala, Bengaluru, Karnataka 560066
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:startupsutraconsulting@gmail.com" className="text-blue-600 hover:underline font-medium break-all">
                startupsutraconsulting@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call & Chat</h3>
              <a href="tel:+918606065001" className="text-gray-900 hover:text-blue-600 font-semibold mb-4 inline-block transition-colors">
                +91 86060 65001
              </a>
              <div className="flex items-center gap-3">
                <a 
                  href="tel:+918606065001" 
                  className="flex-1 text-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-md text-sm flex items-center justify-center gap-2"
                >
                  📞 Call
                </a>
                <a 
                  href="https://wa.me/918606065001?text=Hello%20Startup%20Sutra,%20I%20would%20like%20to%20inquire%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-semibold transition-all shadow-md text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.163 5.283-1.385a9.92 9.92 0 004.786 1.226h.004c5.506 0 9.99-4.478 9.99-9.984s-4.483-9.986-9.99-9.986zm5.83 14.474c-.247.692-1.22 1.319-2.008 1.487-.54.115-1.246.207-3.621-.775-3.04-1.256-4.996-4.34-5.147-4.542-.152-.202-1.233-1.64-1.233-3.13 0-1.488.777-2.222 1.056-2.525.279-.303.608-.379.81-.379.202 0 .405.002.582.01.19.008.443-.072.694.53.253.606.86 2.102.936 2.254.076.152.127.329.025.53-.101.202-.152.328-.304.505-.152.177-.32.395-.456.53-.152.152-.311.317-.134.62.177.303.787 1.294 1.688 2.097 1.16 2.138.835 2.441 1.138.303.303.48.253.657.05.177-.202.759-.885.961-1.188.202-.303.405-.253.683-.152.278.101 1.77.834 2.073.986.303.152.506.228.582.354.076.126.076.733-.171 1.425z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter Email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input type="text" placeholder="Enter Subject"className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows="5" placeholder="Message"className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none" ></textarea>
                </div>
                <button className="w-full bg-[#121212] text-white font-bold py-4 rounded-xl hover:bg-black transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/25">
                  Send Message
                </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
