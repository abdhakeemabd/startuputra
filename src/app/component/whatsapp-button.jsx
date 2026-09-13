"use client";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918606065001?text=Hello%20Startup%20Sutra,%20I%20would%20like%20to%20inquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group focus:outline-none border-2 border-white/20"
    >
      {/* Official WhatsApp Full Vector Icon */}
      <svg 
        className="w-7 h-7 fill-white transition-transform duration-300 group-hover:rotate-12 drop-shadow-md" 
        viewBox="0 0 24 24"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.163 5.283-1.385a9.92 9.92 0 004.786 1.226h.004c5.506 0 9.99-4.478 9.99-9.984s-4.483-9.986-9.99-9.986zm5.83 14.474c-.247.692-1.22 1.319-2.008 1.487-.54.115-1.246.207-3.621-.775-3.04-1.256-4.996-4.34-5.147-4.542-.152-.202-1.233-1.64-1.233-3.13 0-1.488.777-2.222 1.056-2.525.279-.303.608-.379.81-.379.202 0 .405.002.582.01.19.008.443-.072.694.53.253.606.86 2.102.936 2.254.076.152.127.329.025.53-.101.202-.152.328-.304.505-.152.177-.32.395-.456.53-.152.152-.311.317-.134.62.177.303.787 1.294 1.688 2.097 1.16 2.138.835 2.441 1.138.303.303.48.253.657.05.177-.202.759-.885.961-1.188.202-.303.405-.253.683-.152.278.101 1.77.834 2.073.986.303.152.506.228.582.354.076.126.076.733-.171 1.425z" />
      </svg>
      <span className="hidden sm:inline font-bold text-sm tracking-wide">
        Chat on WhatsApp
      </span>
      {/* Glowing Pulse Ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none -z-10" />
    </a>
  );
}
