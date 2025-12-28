"use client";

export default function Banner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#8b31ff] to-[#6819d9] rounded-[2rem] p-8 md:p-12 overflow-hidden mb-8 shadow-xl shadow-purple-200">
      {/* Abstract shapes background and sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkles/Stars */}
        <div className="absolute top-12 left-12 text-white/30 transform -rotate-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
        </div>
        <div className="absolute top-8 right-1/4 text-white/20 transform rotate-45">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
        </div>
        <div className="absolute bottom-12 right-20 text-white/30">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
        </div>

        {/* Soft Glows */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
          Share Bazaar – Jahan Trading Bhi,<br className="hidden md:block" /> Learning Bhi, Winning Bhi!
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl font-light">
          Dive into podcasts, absorb market wisdom, and engage Bazaar AI for deeper analysis cooperatively simply one click away from our education.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3.5 bg-white text-[#8025EC] rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            Start Trading
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>

          <button className="group px-8 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#8025EC] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            See Video
          </button>
        </div>
      </div>
    </div>
  );
}

