import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden h-[550px] md:h-[700px] w-full flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-linear hover:scale-105"
        style={{ backgroundImage: `url('/banner/hero.webp')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 drop-shadow-2xl animate-fade-in-up">
          Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Excellence</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your trusted partner in innovation, growth, and success. We provide expert consulting and development services tailored to your unique needs.
        </p>
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/contact">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Get Free Consultation
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-transparent border-2 border-white/80 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-xl backdrop-blur-sm">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
