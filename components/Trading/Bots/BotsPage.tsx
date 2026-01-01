"use client";

import React, { useState } from "react";
import BotCard from "./BotCard";
import DeployedBotCard from "./DeployedBotCard";
import Activity from "./Activity";
import { botCardsData } from "./botCardsData";
import {
  AggressiveBotCardSvgBackground,
  BalancedBotCardSvgBackground,
} from "@components/Svgs/Platform/PlatformSvg";

const deployedBotsData = [
  {
    id: 1,
    title: "Agressive Bot",
    badgeLabel: "AGRESSIVE",
    badgeColor: "bg-[#ffe8ea] text-[#f23645]",
    target: "PORTFOLIO",
    performance: "+13.33389585%",
    totalTrades: "49",
    lastAction: {
      type: "SELL" as const,
      stock: "OGDCL",
    },
    SvgComponent: AggressiveBotCardSvgBackground,
  },
  {
    id: 2,
    title: "Growth / Balanced Bot",
    badgeLabel: "BALANCED",
    badgeColor: "bg-[#e6fffa] text-[#04a085]",
    target: "PORTFOLIO",
    performance: "+13.33389585%",
    totalTrades: "49",
    lastAction: {
      type: "SELL" as const,
      stock: "OGDCL",
    },
    SvgComponent: BalancedBotCardSvgBackground,
  },
];

export default function BotsPage() {
  const [activeTab, setActiveTab] = useState<"bot-lab" | "deployed">("bot-lab");

  return (
    <div className="w-full h-full flex flex-col">
      {/* Heading Section */}
      <div className="px-4 py-4 shrink-0 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900">Bots</h1>
        {activeTab === "deployed" && (
          <button className="bg-[#8025EC] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-[#6b1fc4] transition-colors">
            Add New Bot
          </button>
        )}
      </div>

      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => setActiveTab("bot-lab")}
            className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
              activeTab === "bot-lab"
                ? "text-[#8025EC] border-[#8025EC]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Bot Lab
          </button>
          <button
            onClick={() => setActiveTab("deployed")}
            className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
              activeTab === "deployed"
                ? "text-[#8025EC] border-[#8025EC]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Deployed Bots
          </button>
        </div>

        {/* Bot Lab Content */}
        {activeTab === "bot-lab" && (
          <>
            {/* Subtitle and Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Choose your trading Bot to Start</h2>
              <p className="text-sm text-gray-600">
                Deploy a bot on your simulated portfolio or a specific bazaar stock. Each bot has a different risk profile
                and decision logic.
              </p>
            </div>

            {/* Bot Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {botCardsData.map((bot) => (
                <BotCard key={bot.id} bot={bot} />
              ))}
            </div>
          </>
        )}

        {/* Deployed Bots Content */}
        {activeTab === "deployed" && (
          <>
            {/* Deployed Bot Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {deployedBotsData.map((bot) => (
                <DeployedBotCard
                  key={bot.id}
                  title={bot.title}
                  badgeLabel={bot.badgeLabel}
                  badgeColor={bot.badgeColor}
                  target={bot.target}
                  performance={bot.performance}
                  totalTrades={bot.totalTrades}
                  lastAction={bot.lastAction}
                  SvgComponent={bot.SvgComponent}
                />
              ))}
            </div>

            {/* Activity Section */}
            <div className="w-full">
              <Activity />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

