"use client";

interface TutorialCard {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const tutorials: TutorialCard[] = [
  {
    id: 1,
    title: "ChatBot Help",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks ad get profits in your pocket.",
    thumbnail: "chart"
  },
  {
    id: 2,
    title: "Trading Bot",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks ad get profits in your pocket.",
    thumbnail: "cards"
  },
  {
    id: 3,
    title: "News Summary",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks ad get profits in your pocket.",
    thumbnail: "person"
  }
];

export default function GuideSection() {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#8025EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 2H17.5L20 6V17H6.5C5.83696 17 5.20107 17.2634 4.73223 17.7322C4.26339 18.2011 4 18.837 4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22C7.16304 22 7.79893 21.7366 8.26777 21.2678C8.73661 20.7989 9 20.163 9 19.5" stroke="#8025EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 2L4 6H17.5" stroke="#8025EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          <span className="text-[#8025EC]">Share Bazaar</span> Guide
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          You can view all the videos to learn how this platform works
        </p>
      </div>

      {/* Tutorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="p-4 flex items-center gap-3 border-b border-gray-50">
              <div className="w-10 h-10 rounded-full bg-[#f3e8ff] flex items-center justify-center text-[#8025EC]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm">{tutorial.title}</h3>
                <p className="text-xs text-gray-500 capitalize">{tutorial.description.split(" ").slice(0, 2).join(" ")}</p>
              </div>
              <div className="text-gray-400">•••</div>
            </div>

            {/* Thumbnail Mockup */}
            <div className="h-48 bg-gray-50 relative p-4 flex items-center justify-center overflow-hidden">
              {/* Card Content Mockup */}
              <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col gap-2 relative z-10">
                <div className="flex gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-20 bg-gray-200 rounded mt-3"></div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg"></div>
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <div className="w-12 h-12 bg-[#8025EC] rounded-full flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>

              {/* Decorative Background Blobs specific to type */}
              {tutorial.thumbnail === 'chart' && <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>}
              {tutorial.thumbnail === 'cards' && <div className="absolute -left-4 -top-4 w-32 h-32 bg-purple-100 rounded-full blur-2xl"></div>}
              {tutorial.thumbnail === 'person' && <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-100 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>}
            </div>

            {/* Description */}
            <div className="p-5">
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                {tutorial.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center">
        <button className="px-10 py-3 bg-[#8025EC] text-white rounded-full font-bold shadow-lg shadow-purple-200 hover:bg-[#6b1fce] hover:scale-105 transition-all">
          See All
        </button>
      </div>
    </div>
  );
}

