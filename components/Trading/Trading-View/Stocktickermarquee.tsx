"use client";

import React from "react";

interface StockItem {
  symbol: string;
  price: number;
  change: number;
}

interface StockTickerMarqueeProps {
  stocks: StockItem[];
  speed?: number;
  pauseOnHover?: boolean;
}

export default function StockTickerMarquee({
  stocks,
  speed = 30,
  pauseOnHover = true,
}: StockTickerMarqueeProps) {
  const formatChange = (change: number) => {
    const prefix = change >= 0 ? "▲" : "▼";
    return `${prefix}${Math.abs(change).toFixed(2)}%`;
  };

  // Duplicate for seamless loop
  const duplicatedStocks = [...stocks, ...stocks];

  return (
    <div className="w-full overflow-hidden bg-[#f2e9fd] rounded-sm">
      <div
        className={`flex whitespace-nowrap py-2.5 px-4 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {duplicatedStocks.map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="inline-flex items-center gap-1 mr-4"
          >
            {/* Stock Symbol */}
            <span className="text-xs font-medium text-[#80868B]">
              {stock.symbol}
            </span>

            {/* Price */}
                <span className="text-xs font-medium text-black">
              {stock.price.toFixed(2)}
            </span>

            {/* Change Percentage */}
            <span
              className={`text-xs font-medium ${
                stock.change >= 0 ? "text-[#00B056]" : "text-[#ED2940]"
              }`}
            >
              {formatChange(stock.change)}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}