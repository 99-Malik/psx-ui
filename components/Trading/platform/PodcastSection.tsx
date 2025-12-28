"use client";

export default function PodcastSection() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Podcast Illustration */}
        <div className="flex flex-col gap-4">
          {/* Main Illustration */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex items-center justify-center h-64 relative">
            <div className="flex items-center gap-4 relative">
              {/* Purple figure */}
              <div className="w-24 h-32 bg-[#8025EC] rounded-2xl flex items-center justify-center relative z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="15" r="5" fill="white"/>
                  <path d="M10 35C10 28 15 25 20 25C25 25 30 28 30 35" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Black figure */}
              <div className="w-24 h-32 bg-gray-900 rounded-2xl flex items-center justify-center relative z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="15" r="5" fill="white"/>
                  <path d="M10 35C10 28 15 25 20 25C25 25 30 28 30 35" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Microphones - positioned between figures */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 8V28M25 28C28.314 28 31 25.314 31 22C31 18.686 28.314 16 25 16C21.686 16 19 18.686 19 22C19 25.314 21.686 28 25 28ZM25 28V35M25 35H20M25 35H30" stroke="#8025EC" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Podcast Card */}
          <div className="bg-[#F3E8FF] rounded-2xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8025EC] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21ZM19 13C20.1 13 21 13.9 21 15V19C21 20.1 20.1 21 19 21C17.9 21 17 20.1 17 19V15C17 13.9 17.9 13 19 13Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">Tech Stocks Review 8</h4>
              <p className="text-xs text-gray-600">50 mins</p>
            </div>
            <button className="w-10 h-10 bg-[#8025EC] rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L12 8L6 12V4Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 relative">
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#8025EC] text-white text-xs font-semibold rounded-full">New</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-2">
            Bazaar Podcast Your Daily Dose of Market Wisdom.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Stay updated with sharp insights, expert opinions, and real-time market stories. The Bazaar Podcast helps you understand trends and make smarter trading decisions effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

