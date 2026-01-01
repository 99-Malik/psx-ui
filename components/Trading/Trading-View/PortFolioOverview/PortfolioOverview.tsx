"use client";

import React, { useState } from "react";
import PorfolioDetails from "./PorfolioDetails";
import BazaarAIChat from "@components/Bazar-Podcasts/BazaarAIChatModal";

// Sample stock data matching the image
const stocksData = [
  {
    id: "CNERGY",
    name: "CNERGY",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=CN",
    value: "851,041,032,700",
    change: "+4.56%",
    changePercent: "+4.56%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [10000, 15000, 12000, 25000, 30000, 45000],
    },
  },
  {
    id: "BOP",
    name: "BOP",
    icon: "https://via.placeholder.com/32/FF6B35/FFFFFF?text=BO",
    value: "500,000,000",
    change: "+2.30%",
    changePercent: "+2.30%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [8000, 12000, 10000, 18000, 22000, 28000],
    },
  },
  {
    id: "WTL",
    name: "WTL",
    icon: "https://via.placeholder.com/32/FFD700/FFFFFF?text=WT",
    value: "300,000,000",
    change: "-1.20%",
    changePercent: "-1.20%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [15000, 18000, 16000, 20000, 25000, 22000],
    },
  },
  {
    id: "HASCOL",
    name: "HASCOL",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=HA",
    value: "200,000,000",
    change: "+3.45%",
    changePercent: "+3.45%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [10000, 13000, 11000, 16000, 20000, 24000],
    },
  },
  {
    id: "PRL",
    name: "PRL",
    icon: "https://via.placeholder.com/32/0066CC/FFFFFF?text=PR",
    value: "150,000,000",
    change: "+1.80%",
    changePercent: "+1.80%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [12000, 15000, 14000, 18000, 22000, 26000],
    },
  },
  {
    id: "PAEL",
    name: "PAEL",
    icon: "https://via.placeholder.com/32/8025EC/FFFFFF?text=PA",
    value: "100,000,000",
    change: "+5.20%",
    changePercent: "+5.20%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [9000, 11000, 10000, 14000, 17000, 21000],
    },
  },
  {
    id: "ABCD",
    name: "ABCD",
    icon: "https://via.placeholder.com/32/0066CC/FFFFFF?text=AB",
    value: "80,000,000",
    change: "+2.10%",
    changePercent: "+2.10%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [7000, 9000, 8000, 12000, 15000, 18000],
    },
  },
  {
    id: "EFGH",
    name: "EFGH",
    icon: "https://via.placeholder.com/32/8025EC/FFFFFF?text=EF",
    value: "60,000,000",
    change: "+1.50%",
    changePercent: "+1.50%",
    date: "Oct 03, 2025: 4:50 PM",
    chartData: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
      values: [6000, 8000, 7000, 10000, 13000, 16000],
    },
  },
];

export default function PortfolioOverview() {
  const [selectedStockId, setSelectedStockId] = useState<string>("CNERGY");

  const selectedStock = stocksData.find((stock) => stock.id === selectedStockId) || stocksData[0];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Stock Details */}
        <div className="w-full lg:flex-1 flex flex-col min-h-0">
          <PorfolioDetails stock={selectedStock} />
        </div>

        {/* Bazaar AI Chat */}
        <div className="w-full lg:flex-1 flex flex-col min-h-0">
          <BazaarAIChat
            isOpen={true}
            onClose={() => {}}
            podcast={null}
            inline={true}
            placeholder="Summarize Today's Top Advancers"
            noFooterBackground={true}
          />
        </div>
      </div>
    </div>
  );
}
