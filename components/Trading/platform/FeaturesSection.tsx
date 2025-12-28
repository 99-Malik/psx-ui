"use client";

interface BotCard {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
}

const bots: BotCard[] = [
  {
    id: "aggressive",
    name: "Agressive Bot",
    tag: "AGRESSIVE",
    tagColor: "bg-pink-100 text-pink-700"
  },
  {
    id: "growth",
    name: "Growth / Balanced Bot",
    tag: "BALANCED",
    tagColor: "bg-green-100 text-green-700"
  },
  {
    id: "defensive",
    name: "Defensive Bot",
    tag: "DEFENSIVE",
    tagColor: "bg-gray-800 text-white"
  },
  {
    id: "market",
    name: "Market Normal Bot",
    tag: "MARKET-NORMAL",
    tagColor: "bg-gray-200 text-gray-700"
  }
];

export default function FeaturesSection() {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3" stroke="#8025EC" strokeWidth="2" />
            <circle cx="16" cy="8" r="3" stroke="#8025EC" strokeWidth="2" />
            <circle cx="8" cy="16" r="3" stroke="#8025EC" strokeWidth="2" />
            <circle cx="16" cy="16" r="3" stroke="#8025EC" strokeWidth="2" />
            <path d="M8 8L16 8M8 16L16 16M8 8L8 16M16 8L16 16" stroke="#8025EC" strokeWidth="1.5" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Top Features Of <span className="text-[#8025EC]">Share Bazaar</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          You can view all the videos to learn how this platform works
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Bazaar Tradebot */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 bg-white border border-gray-200 text-gray-900 text-xs font-bold rounded-full flex items-center gap-1">
              New
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
            </span>
          </div>
          <div className="mb-6 mt-2 inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-2xl text-[#8025EC]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 1 10 10v0a10 10 0 0 1-10 10H6a4 4 0 0 1-4-4V12a10 10 0 0 1 10-10z" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            <span className="text-[#8025EC]">Bazaar Tradebot</span> – Instant Answers.<br />Smarter Decisions.
          </h3>
          <p className="text-gray-500 leading-relaxed font-light">
            Bazaar AI gives you instant, intelligent insights to guide your trading decisions, helping you analyze trends effortlessly. Your smart companion inside the dashboard, always ready with real-time answers and analysis.
          </p>
        </div>

        {/* Right Column - Bot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bots.map((bot) => (
            <div key={bot.id} className="bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
              <div className="mb-4">
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${bot.id === 'aggressive' ? 'bg-red-50 text-red-500' : bot.id === 'growth' ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{bot.name}</h4>
              </div>
              <div>
                <span className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full ${bot.tagColor}`}>
                  {bot.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

