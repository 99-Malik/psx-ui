import {
   AggressiveBotCardSvgBackground,
   BalancedBotCardSvgBackground ,
   DefensiveBotCardSvgBackground,
   MarketNormalBotCardSvgBackground,
} from "@components/Svgs/Platform/PlatformSvg";
import { BotCardData } from "./types";

export const botCardsData: BotCardData[] = [
  {
    id: 1,
    title: "Aggressive Bot",
    badgeLabel: "AGRESSIVE",
    badgeColor: "bg-[#ffe8ea] text-[#f23645]",
    description: "High-risk, momentum strategy short term gains on bazaar stocks.",
    bulletPoints: [
      "Short-term momentum & breakout entries.",
      "Higher max positions size & turnover",
      "Tight stop-loss with aggressive profit targets.",
    ],
    SvgComponent: AggressiveBotCardSvgBackground,
  },
  {
    id: 2,
    title: "Growth / Balanced Bot",
    badgeLabel: "BALANCED",
    badgeColor: "bg-[#e6fffa] text-[#04a085]",
    description: "Growth-focused trend follower with position and risk constraints",
    bulletPoints: [
      "Trend-following with capped positions sizes.",
      "Maintains a reasonable cash buffer.",
      "Aims for smoother equity curve.",
    ],
    SvgComponent: BalancedBotCardSvgBackground,
  },
  {
    id: 3,
    title: "Defensive Bot",
    badgeLabel: "DEFENSIVE",
    badgeColor: "bg-[#f1f3f4] text-[#1f2937]",
    description: "Capital preservation bot with lower volatility and higher cash buffers.",
    bulletPoints: [
      "Focuses on capital preservation.",
      "Higher cash levels in volatile markets.",
      "Lower maximum exposure per stock.",  
    ],
    SvgComponent: DefensiveBotCardSvgBackground,
  },
  {
    id: 4,
    title: "Market Normal Bot",
    badgeLabel: "MARKET-NORMAL",
    badgeColor: "bg-[#f3e8ff] text-[#8025ec]",
    description: "Tracks the broader market or maintains market-neutral exposure.",
    bulletPoints: [
      "Seeks to follow overall market behaviour.",
      "Can be configured as market-neutral.",
      "Useful as a core benchmark-style allocation.",
    ],
    SvgComponent: MarketNormalBotCardSvgBackground,
  },
];

