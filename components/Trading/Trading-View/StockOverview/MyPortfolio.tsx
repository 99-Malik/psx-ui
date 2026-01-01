"use client";

import React from "react";
import TradingBot from "./TradingBot";
import { BOPIcon, WTLIcon, HASCOLIcon, PRLIcon } from "@components/Svgs/StockName/StockName";

const portfolioData = {
  holdings: "2511.00",
  realizedProfit: "+10%",
  stocks: [
    { name: "BOP", icon: <BOPIcon />, profit: "+0.902", isPositive: true },
    { name: "WTL", icon: <WTLIcon />, profit: "-0.902", isPositive: false },
    { name: "HASCOL", icon: <HASCOLIcon />, profit: "+0.902", isPositive: true },
    { name: "PRL", icon: <PRLIcon />, profit: "-0.902", isPositive: false },
  ],
};

export default function MyPortfolio() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col">
      {/* Header */}
      <div className="px-6 pt-4">
        <h3 className="text-lg font-semibold text-gray-900">My Portfolio</h3>
      </div>

      {/* Portfolio Card - Two sections side by side */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-row gap-4 p-4 sm:p-6 min-h-0">
          {/* Left - Portfolio 1 Section */}
          <div className="flex-1 bg-white rounded-lg p-4 border border-gray-300 flex flex-col min-h-0">
            {/* Portfolio 1 Header */}
            <div className="flex items-center justify-between mb-4 shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Portfolio 1</h3>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#010409" />
                  <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#010409" />
                  <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#010409" />
                </svg>

              </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 shrink-0">
              {/* Holdings Card */}
              <div className="bg-[#F8F9FA] rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-900 mb-1">Holdings</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{portfolioData.holdings}</p>
              </div>

              {/* Realized Profit Card */}
              <div className="bg-[#F8F9FA] rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-900 mb-1">Realized Profit</p>
                <p className="text-lg sm:text-xl font-bold text-[#34C759]">{portfolioData.realizedProfit}</p>
              </div>
            </div>

            {/* Stock List */}
            <div className="space-y-3 flex-1 overflow-y-auto">
              {portfolioData.stocks.map((stock, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
                      {stock.icon}
                    </div>
                    <span className="text-sm font-medium text-[#010409]">{stock.name}</span>
                  </div>
                  <span className={`text-sm font-medium ${stock.isPositive ? "text-[#34C759]" : "text-[#FF383C]"}`}>
                    {stock.profit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Trading Bot Section */}
          <div className="flex-1 min-h-0">
            <TradingBot />
          </div>
        </div>
      </div>
    </div>
  );
}

