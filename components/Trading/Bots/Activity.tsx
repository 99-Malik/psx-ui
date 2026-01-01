"use client";

import React, { useState } from "react";

interface ActivityItem {
  id: number;
  type: "SELL" | "BUY";
  bot: string;
  time: string;
  amount: string;
  shares: string;
  price: string;
}

const activityData: ActivityItem[] = [
  {
    id: 1,
    type: "SELL",
    bot: "Bot: Aggressive Bot",
    time: "8:28:17 PM",
    amount: "RS 3,155.068",
    shares: "48 Shares",
    price: "@65.75",
  },
  {
    id: 2,
    type: "BUY",
    bot: "Market Maker",
    time: "8:30:45 PM",
    amount: "RS 2,980.500",
    shares: "50 Shares",
    price: "@59.61",
  },
  {
    id: 3,
    type: "SELL",
    bot: "Swing Trader",
    time: "8:32:30 PM",
    amount: "RS 3,200.150",
    shares: "100 Shares",
    price: "@32.00",
  },
  {
    id: 4,
    type: "BUY",
    bot: "Long Investor",
    time: "8:35:10 PM",
    amount: "RS 5,000.000",
    shares: "75 Shares",
    price: "@66.67",
  },
];

export default function Activity() {
  const [activeBotTab, setActiveBotTab] = useState<"Bot 1" | "Bot 2" | "Bot 3">("Bot 1");

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-6">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-900 mb-4">Activity</h2>

      {/* Bot Tabs */}
      <div className="flex gap-3 mb-6">
        {(["Bot 1", "Bot 2", "Bot 3"] as const).map((bot) => (
          <button
            key={bot}
            onClick={() => setActiveBotTab(bot)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeBotTab === bot
                ? "bg-[#8025EC] text-white"
                : "bg-[#F8F9FA] border border-gray-300 text-gray-900 hover:bg-gray-50"
            }`}
          >
            {bot}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {activityData.map((activity) => (
          <div key={activity.id} className="bg-[#F8F9FA]  rounded-lg p-4 flex items-center justify-between">
            {/* Left Side - Icon and Type */}
            <div className="flex items-center gap-3">
              {activity.type === "SELL" ? (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="18" fill="#FF383C" fillOpacity="0.15" />
                  <path d="M22.9111 19.8779C22.9901 19.7993 23.1262 19.7992 23.2051 19.8779C23.2839 19.9568 23.2838 20.0929 23.2051 20.1719L18.1465 25.2305C18.1038 25.2731 18.0536 25.2919 18 25.292C17.9462 25.292 17.8953 25.2732 17.8525 25.2305L12.7939 20.1719C12.7154 20.0929 12.7151 19.9568 12.7939 19.8779C12.8728 19.7991 13.0089 19.7993 13.0879 19.8779L17.7051 24.4951L18 24.7891L22.9111 19.8779Z" fill="#292D32" stroke="#FF383C" strokeWidth="0.833333" />
                  <path d="M18 10.709C18.1115 10.709 18.208 10.8054 18.208 10.917V24.9424C18.2078 25.0538 18.1114 25.1504 18 25.1504C17.8886 25.1504 17.7922 25.0538 17.792 24.9424V10.917C17.792 10.8054 17.8885 10.709 18 10.709Z" fill="#292D32" stroke="#FF383C" strokeWidth="0.833333" />
                </svg>

              ) : (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="18" transform="matrix(1 0 0 -1 0 36)" fill="#34C759" fillOpacity="0.15" />
                  <path d="M22.9111 16.1221C22.9901 16.2007 23.1262 16.2008 23.2051 16.1221C23.2839 16.0432 23.2838 15.9071 23.2051 15.8281L18.1465 10.7695C18.1038 10.7269 18.0536 10.7081 18 10.708C17.9462 10.708 17.8953 10.7268 17.8525 10.7695L12.7939 15.8281C12.7154 15.9071 12.7151 16.0432 12.7939 16.1221C12.8728 16.2009 13.0089 16.2007 13.0879 16.1221L17.7051 11.5049L18 11.2109L22.9111 16.1221Z" fill="#292D32" stroke="#34C759" strokeWidth="0.833333" />
                  <path d="M18 25.291C18.1115 25.291 18.208 25.1946 18.208 25.083V11.0576C18.2078 10.9462 18.1114 10.8496 18 10.8496C17.8886 10.8496 17.7922 10.9462 17.792 11.0576V25.083C17.792 25.1946 17.8885 25.291 18 25.291Z" fill="#292D32" stroke="#34C759" strokeWidth="0.833333" />
                </svg>

              )}
              <div>
                <p className={`text-sm font-bold ${activity.type === "SELL" ? "text-[#FF383C]" : "text-[#34C759]"}`}>
                  {activity.type}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span>{activity.bot}</span>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                  </svg>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Amount and Shares */}
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{activity.amount}</p>
              <div className="flex items-center gap-1.5 justify-end text-xs text-gray-500">
                <span>{activity.shares}</span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                </svg>
                <span>{activity.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

