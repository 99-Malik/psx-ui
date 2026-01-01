"use client";

import React from "react";
import { Circle } from "lucide-react";
import { BotCardData } from "./types";
import FeatureBadge from "./FeatureBadge";

interface BotCardProps {
  bot: BotCardData;
}

export default function BotCard({ bot }: BotCardProps) {
  const { title, badgeLabel, badgeColor, description, bulletPoints, SvgComponent } = bot;

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

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 flex-1">{description}</p>

        {/* Bullet Points */}
        <ul className="space-y-2 mb-6">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start">
              <Circle className="mr-3 mt-1.5 shrink-0 w-1.5 h-1.5 fill-[#010409]" />
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>

        {/* Deploy Button */}
        <button className="mt-auto w-full bg-white border border-gray-300 rounded-full px-4 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <span>Deploy Bot (Preview)</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4305 18.8201C14.6205 18.8201 14.8105 18.7501 14.9605 18.6001L21.0305 12.5301C21.3205 12.2401 21.3205 11.7601 21.0305 11.4701L14.9605 5.40012C14.6705 5.11012 14.1905 5.11012 13.9005 5.40012C13.6105 5.69012 13.6105 6.17012 13.9005 6.46012L19.4405 12.0001L13.9005 17.5401C13.6105 17.8301 13.6105 18.3101 13.9005 18.6001C14.0405 18.7501 14.2405 18.8201 14.4305 18.8201Z" fill="#010409" />
            <path d="M3.50008 12.75H20.3301C20.7401 12.75 21.0801 12.41 21.0801 12C21.0801 11.59 20.7401 11.25 20.3301 11.25H3.50008C3.09008 11.25 2.75008 11.59 2.75008 12C2.75008 12.41 3.09008 12.75 3.50008 12.75Z" fill="#010409" />
          </svg>

        </button>
      </div>
    </div>
  );
}

