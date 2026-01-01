"use client";

import React from "react";
import { TrendingDown } from "lucide-react";

const topLosers = [
  { sector: "Healthcare", change: "-5%" },
  { sector: "Technology", change: "-5%" },
  { sector: "Finance", change: "-5%" },
  { sector: "Retail", change: "-5%" },
  { sector: "Education", change: "-5%" },
  { sector: "Education", change: "-5%" },
];

export default function TopLosers() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#FF383C" />
              <path d="M13.7324 12.8746V14.5996" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M18 12.8752V16.3252" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M22.2676 12.8753V18.0586" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M22.2658 23.125L21.8824 22.675C19.7574 20.1917 16.9074 18.4333 13.7324 17.6417" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M19.8242 23.125H22.2659V20.6917" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.4993 9.66634H20.4993C24.666 9.66634 26.3327 11.333 26.3327 15.4997V20.4997C26.3327 24.6663 24.666 26.333 20.4993 26.333H15.4993C11.3327 26.333 9.66602 24.6663 9.66602 20.4997V15.4997C9.66602 11.333 11.3327 9.66634 15.4993 9.66634Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="text-base font-semibold text-gray-900">Top Losers</h3>
          </div>
          <div className="space-y-2">
            {topLosers.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between py-2">
                <span className="text-sm text-[#010409]">{item.sector}</span>
                <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-x-1/2 shrink-0">
                  <path d="M0.000781298 1.25969V-0.000312686H6.00078V1.25969H0.000781298Z" fill="#80868B" />
                </svg>
                <span className="text-sm font-medium text-[#FF383C]">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

