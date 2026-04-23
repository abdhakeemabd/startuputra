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
              <p className="text-gray-600">nisamudheenkp91@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">86060 65001</p>
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
