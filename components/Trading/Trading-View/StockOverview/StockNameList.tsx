"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import { Check } from "lucide-react";
import { CNERGYIcon, BOPIcon, WTLIcon, HASCOLIcon, PRLIcon, PAELIcon, ABCDIcon, EFGHIcon } from "@components/Svgs/StockName/StockName";

// Search Icon (same as NavBar)
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.35742 0C6.78758 7.25504e-05 8.13391 0.557034 9.14453 1.56934C10.1552 2.58184 10.7139 3.92528 10.7139 5.35742C10.7138 6.55364 10.3249 7.69086 9.60547 8.62109L14.2432 13.2588C14.2567 13.2724 14.2671 13.2889 14.2744 13.3066C14.2817 13.3243 14.2861 13.3432 14.2861 13.3623C14.2861 13.3815 14.2818 13.4012 14.2744 13.4189C14.2671 13.4364 14.2565 13.4524 14.2432 13.4658L13.4639 14.2432C13.4504 14.2565 13.4345 14.2671 13.417 14.2744C13.3992 14.2818 13.3796 14.2861 13.3604 14.2861C13.3412 14.2861 13.3223 14.2817 13.3047 14.2744C13.2869 14.2671 13.2704 14.2568 13.2568 14.2432L8.62012 9.60742C7.68983 10.3252 6.55375 10.7138 5.35742 10.7139C3.92528 10.7139 2.58005 10.157 1.56934 9.14453C0.558819 8.13391 7.27828e-05 6.78758 0 5.35742C0 3.92528 0.556836 2.58005 1.56934 1.56934C2.58005 0.558622 3.92706 0 5.35742 0ZM5.35742 1.35742C4.28957 1.35742 3.28546 1.77296 2.52832 2.52832C1.77296 3.28368 1.35742 4.28957 1.35742 5.35742C1.35749 6.42508 1.77316 7.42849 2.52832 8.18555C3.28546 8.9409 4.28957 9.35742 5.35742 9.35742C6.42517 9.35735 7.42847 8.94084 8.18555 8.18555C8.94084 7.43026 9.35735 6.42518 9.35742 5.35742C9.35742 4.28957 8.9409 3.28546 8.18555 2.52832C7.43028 1.77138 6.42508 1.35749 5.35742 1.35742Z" fill="#010409" />
  </svg>
);

interface Stock {
  id: string;
  name: string;
  icon: string | React.ReactNode; // Can be text or SVG component
  isSelected?: boolean;
}



const stocks: Stock[] = [
  { id: "CNERGY", name: "CNERGY", icon: <CNERGYIcon />, isSelected: true },
  { id: "BOP", name: "BOP", icon: <BOPIcon /> },
  { id: "WTL", name: "WTL", icon: <WTLIcon /> },
  { id: "HASCOL", name: "HASCOL", icon: <HASCOLIcon /> },
  { id: "PRL", name: "PRL", icon: <PRLIcon /> },
  { id: "PAEL", name: "PAEL", icon: <PAELIcon /> },
  { id: "ABCD", name: "ABCD", icon: <ABCDIcon /> },
  { id: "EFGH", name: "EFGH", icon: <EFGHIcon /> },
];

interface StockNameListProps {
  selectedStockId?: string;
  onSelectStock?: (stockId: string) => void;
}

export default function StockNameList({ selectedStockId = "CNERGY", onSelectStock }: StockNameListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStockColor = (stockId: string) => {
    const colors: { [key: string]: string } = {
      CNERGY: "bg-black text-white",
      BOP: "bg-orange-500 text-white",
      WTL: "bg-yellow-400 text-white",
      HASCOL: "bg-black text-white",
      PRL: "bg-blue-600 text-white",
      PAEL: "bg-purple-600 text-white",
      ABCD: "bg-blue-500 text-white",
      EFGH: "bg-purple-500 text-white",
    };
    return colors[stockId] || "bg-gray-500 text-white";
  };

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col">
      {/* Header */}
      <div className="px-3 pt-4">
        <h3 className="text-base font-semibold text-gray-900">Stock Name</h3>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <div className="flex items-center bg-white border border-[#dadce0] rounded-full px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none py-1 text-sm bg-transparent text-[#80868B] placeholder:text-black"
          />
          <div className="self-stretch w-px bg-gray-200 mx-3" />
          <SearchIcon />
        </div>
      </div>

      {/* Stock List */}
      <div className="flex-1 px-2 overflow-y-auto">
        {filteredStocks.map((stock, index) => {
          const isSelected = stock.id === selectedStockId;
          const isLast = index === filteredStocks.length - 1;
          return (
            <div
              key={stock.id}
              onClick={() => onSelectStock?.(stock.id)}
              className={`px-4 ${isLast ? 'pt-3 pb-3' : 'py-3'} flex items-center rounded-2xl gap-3 cursor-pointer  ${isSelected ? "bg-[#F2E9FD]" : "hover:bg-gray-50"
                }`}
            >
              {/* Stock Icon */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                {typeof stock.icon === 'string' ? (
                  <div className={`w-full h-full ${getStockColor(stock.id)} flex items-center justify-center text-xs font-semibold`}>
                    {stock.icon}
                  </div>
                ) : (
                  stock.icon
                )}
              </div>

              {/* Stock Name */}
              <span className={`flex-1 text-sm font-medium ${isSelected ? "text-purple-600" : "text-gray-900"}`}>
                {stock.name}
              </span>

              {/* Checkmark for selected */}
              {isSelected && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#010409" />
                  <path d="M10.5795 15.5796C10.3795 15.5796 10.1895 15.4996 10.0495 15.3596L7.21945 12.5296C6.92945 12.2396 6.92945 11.7596 7.21945 11.4696C7.50945 11.1796 7.98945 11.1796 8.27945 11.4696L10.5795 13.7696L15.7195 8.62961C16.0095 8.33961 16.4895 8.33961 16.7795 8.62961C17.0695 8.91961 17.0695 9.39961 16.7795 9.68961L11.1095 15.3596C10.9695 15.4996 10.7795 15.5796 10.5795 15.5796Z" fill="#010409" />
                </svg>

              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

