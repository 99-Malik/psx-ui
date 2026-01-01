"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

const topGainers = [
  { sector: "Healthcare", change: "+5%" },
  { sector: "Technology", change: "+5%" },
  { sector: "Finance", change: "+5%" },
  { sector: "Retail", change: "+5%" },
  { sector: "Education", change: "+5%" },
  { sector: "Education", change: "+5%" },
];

export default function TopGainers() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#2FB551" />
              <path d="M13.7324 23.1254V21.4004" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M18 23.1248V19.6748" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M22.2676 23.1247V17.9414" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M22.2658 12.875L21.8824 13.325C19.7574 15.8083 16.9074 17.5667 13.7324 18.3583" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M19.8242 12.875H22.2659V15.3083" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.4993 26.3337H20.4993C24.666 26.3337 26.3327 24.667 26.3327 20.5003V15.5003C26.3327 11.3337 24.666 9.66699 20.4993 9.66699H15.4993C11.3327 9.66699 9.66602 11.3337 9.66602 15.5003V20.5003C9.66602 24.667 11.3327 26.3337 15.4993 26.3337Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="text-base font-semibold text-gray-900">Top Gainers</h3>
          </div>
          <div className="space-y-2">
            {topGainers.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between py-2">
                <span className="text-sm text-[#010409]">{item.sector}</span>
                <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-x-1/2 shrink-0">
                  <path d="M0.000781298 1.25969V-0.000312686H6.00078V1.25969H0.000781298Z" fill="#80868B" />
                </svg>
                <span className="text-sm font-medium text-[#34C759]">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

