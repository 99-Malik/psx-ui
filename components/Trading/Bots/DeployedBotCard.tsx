"use client";

import React from "react";
import FeatureBadge from "./FeatureBadge";

interface DeployedBotCardProps {
  title: string;
  badgeLabel: string;
  badgeColor: string;
  target: string;
  performance: string;
  totalTrades: string;
  lastAction: {
    type: "SELL" | "BUY";
    stock: string;
  };
  SvgComponent: React.ComponentType<{ className?: string }>;
}

export default function DeployedBotCard({
  title,
  badgeLabel,
  badgeColor,
  target,
  performance,
  totalTrades,
  lastAction,
  SvgComponent,
}: DeployedBotCardProps) {
  return (
    <div className="relative border border-gray-200 rounded-3xl overflow-hidden h-full flex flex-col bg-white">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 w-full h-full rounded-lg overflow-hidden">
        <SvgComponent className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Title and Badge */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
          <FeatureBadge label={badgeLabel} color={badgeColor} />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
          <div>
            <p className="text-xs text-[#010409] mb-1">Target</p>
            <p className="text-sm font-medium text-gray-900">{target}</p>
          </div>
          <div>
            <p className="text-xs text-[#010409] mb-1">Performance</p>
            <p className="text-sm font-bold text-[#34C759]">{performance}</p>
          </div>
          <div>
            <p className="text-xs text-[#010409] mb-1">Total Trades</p>
            <p className="text-sm font-medium text-gray-900">{totalTrades}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Last Action</p>
            <div className="flex items-center gap-2">
              {lastAction.type === "SELL" ? (
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="29" height="29" rx="14.5" fill="#FF383C" fill-opacity="0.15" />
                  <path d="M18.457 16.0127C18.5206 15.9491 18.6298 15.9491 18.6934 16.0127C18.7569 16.0763 18.7569 16.1855 18.6934 16.249L14.6191 20.3242C14.5847 20.3586 14.5433 20.373 14.5 20.373C14.4569 20.373 14.4161 20.3585 14.3818 20.3242L10.3076 16.249C10.244 16.1854 10.244 16.0763 10.3076 16.0127C10.3712 15.9491 10.4803 15.9491 10.5439 16.0127L14.5 19.9688L14.7373 19.7314L18.457 16.0127Z" fill="#292D32" stroke="#FF383C" stroke-width="0.671296" />
                  <path d="M14.502 8.62598C14.5916 8.62623 14.6689 8.70423 14.6689 8.79395V20.0918C14.6687 20.1814 14.5915 20.2585 14.502 20.2588C14.4122 20.2588 14.3342 20.1815 14.334 20.0918V8.79395C14.334 8.70409 14.4121 8.62598 14.502 8.62598Z" fill="#292D32" stroke="#FF383C" stroke-width="0.671296" />
                </svg>

              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.25 5.0625C11.5607 5.0625 11.8125 4.81066 11.8125 4.5C11.8125 4.18934 11.5607 3.9375 11.25 3.9375H4.5C4.18934 3.9375 3.9375 4.18934 3.9375 4.5C3.9375 4.81066 4.18934 5.0625 4.5 5.0625H11.25ZM11.25 12.9375C11.5607 12.9375 11.8125 12.6857 11.8125 12.375C11.8125 12.0643 11.5607 11.8125 11.25 11.8125H4.5C4.18934 11.8125 3.9375 12.0643 3.9375 12.375C3.9375 12.6857 4.18934 12.9375 4.5 12.9375H11.25Z" fill="#34C759" />
                  <path d="M13.1023 4.89775C13.3219 4.67808 13.6781 4.67808 13.8977 4.89775L17.142 8.142C17.3617 8.36167 17.3617 8.71783 17.142 8.9375L13.8977 12.1818C13.6781 12.4014 13.3219 12.4014 13.1023 12.1818C12.8826 11.9621 12.8826 11.606 13.1023 11.3863L15.857 8.53975L13.1023 5.69325C12.8826 5.47358 12.8826 5.11742 13.1023 4.89775Z" fill="#34C759" />
                </svg>
              )}
              <span className="">
                <span className="text-xs font-bold text-[#FF383C]">SELL</span> <span className="text-xs text-[#FF383C]">:</span> <span className="text-sm font-bold text-[#FF383C]">{lastAction.stock}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-3 border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.52 16.3125H14.2425C15.6375 16.3125 16.3125 15.6675 16.3125 14.3325V3.6675C16.3125 2.3325 15.6375 1.6875 14.2425 1.6875H11.52C10.125 1.6875 9.45 2.3325 9.45 3.6675V14.3325C9.45 15.6675 10.125 16.3125 11.52 16.3125ZM14.2425 2.8125C15.0525 2.8125 15.1875 3.015 15.1875 3.6675V14.3325C15.1875 14.985 15.06 15.1875 14.2425 15.1875H11.52C10.71 15.1875 10.575 14.985 10.575 14.3325V3.6675C10.575 3.015 10.7025 2.8125 11.52 2.8125H14.2425Z" fill="#010409" />
              <path d="M3.75828 16.3125H6.48078C7.87578 16.3125 8.55078 15.6675 8.55078 14.3325V3.6675C8.55078 2.3325 7.87578 1.6875 6.48078 1.6875H3.75828C2.36328 1.6875 1.68828 2.3325 1.68828 3.6675V14.3325C1.68828 15.6675 2.36328 16.3125 3.75828 16.3125ZM6.48078 2.8125C7.29078 2.8125 7.42578 3.015 7.42578 3.6675V14.3325C7.42578 14.985 7.29828 15.1875 6.48078 15.1875H3.75828C2.94828 15.1875 2.81328 14.985 2.81328 14.3325V3.6675C2.81328 3.015 2.94078 2.8125 3.75828 2.8125H6.48078Z" fill="#010409" />
            </svg>

            <span>Pause</span>
          </button>
          <button className="flex-1 border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.24927 5.04785C2.26427 5.04785 2.28677 5.04785 2.30927 5.04785C6.27677 4.65035 10.2368 4.50035 14.1593 4.89785L15.6893 5.04785C16.0043 5.07785 16.2818 4.85285 16.3118 4.53785C16.3418 4.22285 16.1168 3.95285 15.8093 3.92285L14.2793 3.77285C10.2893 3.36785 6.24677 3.52535 2.19677 3.92285C1.88927 3.95285 1.66427 4.23035 1.69427 4.53785C1.71677 4.83035 1.96427 5.04785 2.24927 5.04785Z" fill="#FF383C" />
              <path d="M11.6244 4.29C11.6544 4.29 11.6844 4.29 11.7219 4.2825C12.0219 4.23 12.2319 3.9375 12.1794 3.6375L12.0144 2.655C11.8944 1.935 11.7294 0.9375 9.98194 0.9375H8.01694C6.26194 0.9375 6.09694 1.9725 5.98444 2.6625L5.81944 3.6375C5.76694 3.945 5.97694 4.2375 6.27694 4.2825C6.58444 4.335 6.87694 4.125 6.92194 3.825L7.08694 2.85C7.19194 2.1975 7.21444 2.07 8.00944 2.07H9.97444C10.7694 2.07 10.7844 2.175 10.8969 2.8425L11.0694 3.8175C11.1144 4.095 11.3544 4.29 11.6244 4.29Z" fill="#FF383C" />
              <path d="M6.59221 17.0627H11.4072C14.0247 17.0627 14.1297 15.6152 14.2122 14.4452L14.6997 6.89268C14.7222 6.58518 14.4822 6.31518 14.1747 6.29268C13.8597 6.27768 13.5972 6.51018 13.5747 6.81768L13.0872 14.3702C13.0047 15.5102 12.9747 15.9377 11.4072 15.9377H6.59221C5.01721 15.9377 4.98721 15.5102 4.91221 14.3702L4.42471 6.81768C4.40221 6.51018 4.13221 6.27768 3.82471 6.29268C3.51721 6.31518 3.27721 6.57768 3.29971 6.89268L3.78721 14.4452C3.86971 15.6152 3.97471 17.0627 6.59221 17.0627Z" fill="#FF383C" />
              <path d="M7.75445 12.9375H10.252C10.5595 12.9375 10.8145 12.6825 10.8145 12.375C10.8145 12.0675 10.5595 11.8125 10.252 11.8125H7.75445C7.44695 11.8125 7.19195 12.0675 7.19195 12.375C7.19195 12.6825 7.44695 12.9375 7.75445 12.9375Z" fill="#FF383C" />
              <path d="M7.125 9.9375H10.875C11.1825 9.9375 11.4375 9.6825 11.4375 9.375C11.4375 9.0675 11.1825 8.8125 10.875 8.8125H7.125C6.8175 8.8125 6.5625 9.0675 6.5625 9.375C6.5625 9.6825 6.8175 9.9375 7.125 9.9375Z" fill="#FF383C" />
            </svg>


            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

