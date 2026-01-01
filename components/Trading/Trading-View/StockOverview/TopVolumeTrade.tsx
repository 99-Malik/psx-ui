"use client";

import React from "react";

const topVolume = [
  { rank: 1, name: "Cnergyico PK Limited", volume: "80,234,567", change: "+4.56%" },
  { rank: 2, name: "BuyCnergio", volume: "2,345,678", change: "+4.56%" },
  { rank: 3, name: "Sandbox", volume: "30,456,70", change: "+4.56%" },
  { rank: 4, name: "WTL", volume: "60,567,52", change: "+4.56%" },
  { rank: 5, name: "PAEL", volume: "45,230,75", change: "+3.25%" },
  { rank: 6, name: "EFGH", volume: "70,128,30", change: "+5.10%" },
];

export default function TopVolumeTrade() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {/* Top Volume Trade for Day */}
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg width="28" height="28" className="sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#2FB551" />
              <path d="M13.7324 23.1254V21.4004" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 23.1248V19.6748" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22.2676 23.1247V17.9414" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22.2658 12.875L21.8824 13.325C19.7574 15.8083 16.9074 17.5667 13.7324 18.3583" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19.8242 12.875H22.2659V15.3083" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.4993 26.3337H20.4993C24.666 26.3337 26.3327 24.667 26.3327 20.5003V15.5003C26.3327 11.3337 24.666 9.66699 20.4993 9.66699H15.4993C11.3327 9.66699 9.66602 11.3337 9.66602 15.5003V20.5003C9.66602 24.667 11.3327 26.3337 15.4993 26.3337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">Top Volume Trade for Day</h3>
          </div>
          <div className="space-y-2">
            {topVolume.map((item) => (
              <div key={item.rank} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 py-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span className="text-xs sm:text-sm text-[#80868B] w-3 sm:w-4 shrink-0">{item.rank}</span>
                  <span className="text-xs sm:text-sm text-[#010409] truncate">{item.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2 ml-5 sm:ml-0 shrink-0">
                  <span className="text-xs sm:text-sm font-medium  text-[#80868B]">{item.volume}</span>
                  <div className="flex items-center gap-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 5.0625C6.43934 5.0625 6.1875 4.81066 6.1875 4.5C6.1875 4.18934 6.43934 3.9375 6.75 3.9375H13.5C13.8107 3.9375 14.0625 4.18934 14.0625 4.5V11.25C14.0625 11.5607 13.8107 11.8125 13.5 11.8125C13.1893 11.8125 12.9375 11.5607 12.9375 11.25V5.85799L4.89775 13.8977C4.67808 14.1174 4.32192 14.1174 4.10225 13.8977C3.88258 13.6781 3.88258 13.3219 4.10225 13.1023L12.142 5.0625H6.75Z" fill="#34C759" />
                    </svg>

                    <span className="text-xs sm:text-sm font-medium text-[#34C759]">{item.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

