"use client";

import React from "react";

const botStrategies = [
  "Aggressive Bot",
  "Growth/Balanced",
  "Defensive",
  "Market Neutral",
];

export default function TradingBot() {
  return (
    <div className="w-full h-full  border border-gray-200 rounded-lg flex flex-col min-h-0">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Trading Bot</h3>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#010409" />
            <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#010409" />
            <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#010409" />
          </svg>
        </button>
      </div>

      {/* Bot Strategies List */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto min-h-0">
        <div className="space-y-3">
          {botStrategies.map((strategy, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-[#F8F9FA]  rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-900">{strategy}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0258 15.6829C12.1841 15.6829 12.3424 15.6246 12.4674 15.4996L17.5258 10.4413C17.7674 10.1996 17.7674 9.79961 17.5258 9.55794L12.4674 4.49961C12.2258 4.25794 11.8258 4.25794 11.5841 4.49961C11.3424 4.74128 11.3424 5.14128 11.5841 5.38294L16.2008 9.99961L11.5841 14.6163C11.3424 14.8579 11.3424 15.2579 11.5841 15.4996C11.7008 15.6246 11.8674 15.6829 12.0258 15.6829Z" fill="#010409" />
                <path d="M2.91641 10.625H16.9414C17.2831 10.625 17.5664 10.3417 17.5664 10C17.5664 9.65833 17.2831 9.375 16.9414 9.375H2.91641C2.57474 9.375 2.29141 9.65833 2.29141 10C2.29141 10.3417 2.57474 10.625 2.91641 10.625Z" fill="#010409" />
              </svg>

            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-4 flex gap-3 shrink-0">
        <button className="flex-1 bg-[#8025EC] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6b1fc4] transition-colors">
          Deploy Bot
        </button>
        <button className="flex-1 border border-[#BDC1C6] text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          View Progress
        </button>
      </div>
    </div>
  );
}

