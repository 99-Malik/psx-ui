"use client";

import React, { useState } from "react";
import StockNameList from "./StockNameList";
import StockDetails from "./StockDetails";
import MarketOverview from "./MarketOverview";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import MyPortfolio from "./MyPortfolio";
import TopVolumeTrade from "./TopVolumeTrade";
import WatchList from "./WatchList";
import News from "./News";

export default function StockOverview() {
  const [selectedStockId, setSelectedStockId] = useState<string>("CNERGY");

  return (
    <div className="w-full h-full">
      {/* Desktop Layout: 3 columns side by side (lg and above = 1024px+) */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 lg:mb-4 lg:h-[calc(50%-8px)]">
        {/* Left - Stock Name List */}
        <div className="col-span-3 h-full">
          <StockNameList
            selectedStockId={selectedStockId}
            onSelectStock={setSelectedStockId}
          />
        </div>

        {/* Middle - Stock Details with Chart */}
        <div className="col-span-6 h-full">
          <StockDetails />
        </div>

        {/* Right - Market Overview */}
        <div className="col-span-3 h-full">
          <MarketOverview />
        </div>
      </div>

      {/* Mobile/Tablet Layout: Components in separate rows (below lg = below 1024px) */}
      <div className="lg:hidden space-y-4">
        {/* Stock Name List */}
        <div className="w-full">
          <StockNameList
            selectedStockId={selectedStockId}
            onSelectStock={setSelectedStockId}
          />
        </div>

        {/* Stock Details */}
        <div className="w-full">
          <StockDetails />
        </div>

        {/* Top Gainers and Top Losers - Side by Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <TopGainers />
          </div>
          <div className="w-full">
            <TopLosers />
          </div>
        </div>
      </div>

      {/* Bottom Row - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-4 lg:mt-0 lg:h-[calc(50%-8px)]">
        {/* Left - My Portfolio (contains Portfolio 1 and Trading Bot) - 70% */}
        <div className="col-span-1 lg:col-span-7 h-full min-h-0">
          <MyPortfolio />
        </div>

        {/* Right - Top Volume Trade - 30% */}
        <div className="col-span-1 lg:col-span-3 h-full min-h-0">
          <TopVolumeTrade />
        </div>
      </div>

      {/* Watchlist Section */}
      <div className="mt-4 h-full min-h-0">
        <WatchList />
      </div>

      {/* News Section */}
      <div className="mt-4 h-full min-h-0">
        <News />
      </div>
    </div>
  );
}
