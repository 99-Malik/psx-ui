"use client";

export default function CompetitionsSection() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 relative">
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#8025EC] text-white text-xs font-semibold rounded-full">New</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-2">
            Bazaar Competitions - Where Traders Become Champions.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Bazaar Competitions are designed to help you learn, grow, and trade smarter through every challenge you take on. Each competition gives you the chance to analyze markets, refine strategies, and compete with confidence.
          </p>
        </div>

        {/* Right Side - Competition Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 overflow-hidden">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-4">Published 2 days ago</p>
            
            {/* Competition Header */}
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#8025EC" strokeWidth="2"/>
                <path d="M10 4V10L14 12" stroke="#8025EC" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4 className="font-semibold text-gray-900">September 2025 Monthly Challenge</h4>
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-700 font-semibold text-sm">Close in 05:00:03:02</p>
            </div>

            {/* Status and Info */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">O Ongoing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="6" r="3" stroke="#8025EC" strokeWidth="1.5"/>
                  <path d="M4 13C4 10 6 9 8 9C10 9 12 10 12 13" stroke="#8025EC" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-sm text-gray-700">Match Trader</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2C6.9 2 6 2.9 6 4C6 5.1 6.9 6 8 6C9.1 6 10 5.1 10 4C10 2.9 9.1 2 8 2ZM3 12C3 10 4.5 9 8 9C11.5 9 13 10 13 12V14H3V12Z" fill="#8025EC"/>
                </svg>
                <span className="text-sm text-gray-700">50,000 Members</span>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Start</p>
                <p className="text-sm font-medium text-gray-900">Sep 01,2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">End</p>
                <p className="text-sm font-medium text-gray-900">Sep 30,2025</p>
              </div>
            </div>

            {/* Prize Pool */}
            <div className="mb-4">
              <p className="text-[#8025EC] font-semibold">Rs200 / Prize Pool</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                More Info
              </button>
              <button className="flex-1 px-4 py-2 bg-[#8025EC] text-white rounded-lg font-medium hover:bg-[#6b1fc4] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

