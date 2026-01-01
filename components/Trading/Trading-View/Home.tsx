"use client";

import React from "react";
import StockTickerMarquee from "./Stocktickermarquee";
import StockIndicesScroll from "./Stockindicesscroll";
import PortfolioOverview from "./PortFolioOverview/PortfolioOverview";
import StockOverview from "./StockOverview/StockOverview";
// Sample stock data - replace with your actual data source
const stockData = [
  { symbol: "BNL", price: 1.29, change: 10.03 },
  { symbol: "KOSM", price: 0.47, change: 6.90 },
  { symbol: "PTC", price: 2.06, change: 4.57 },
  { symbol: "KEL", price: 0.16, change: 2.95 },
  { symbol: "FNEL", price: 0.65, change: 3.10 },
  { symbol: "SEARL", price: 3.32, change: 3.13 },
  { symbol: "WTL", price: 0.00, change: 0.54 },
  { symbol: "TELE", price: -0.03, change: -0.25 },
  { symbol: "PIAHCLA", price: 0.85, change: 1.97 },
  { symbol: "CNERGY", price: 0.13, change: 1.65 },
];

interface TradingHeaderProps {
  title?: string;
  stocks?: typeof stockData;
}

export default function TradingViewHome({
  title = "Trading",
  stocks = stockData,
}: TradingHeaderProps) {
  return (
    <div className="w-full h-full flex flex-col ">
      {/* Heading Section */}
      <div className="px-4 py-4 shrink-0">
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
      </div>
      
      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Stock Ticker Marquee */}
        <div className="shrink-0">
          <StockTickerMarquee
            stocks={stocks}
            speed={25}
            pauseOnHover={true}
          />
        </div>
        
        <div className="w-full mt-4 shrink-0">
          <StockIndicesScroll />
        </div>
        
        {/* Portfolio Overview - Takes available height */}
        <div className="w-full mt-4 flex-1">
          <PortfolioOverview />
        </div>
        
        {/* Stock Overview */}
        <div className="w-full mt-4 shrink-0">
          <StockOverview />
        </div>
      </div>
    </div>
  );
}
