"use client";

import React from "react";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";

export default function MarketOverview() {
  return (
    <div className="w-full h-full rounded-lg flex flex-col gap-4 lg:gap-6 overflow-y-auto">
      {/* Top Gainers */}
      <div className="shrink-0">
        <TopGainers />
      </div>

      {/* Top Losers */}
      <div className="shrink-0">
        <TopLosers />
      </div>
    </div>
  );
}

