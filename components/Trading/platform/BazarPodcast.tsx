"use client";

import React from "react";
import { PodcastSvg } from "../../Svgs/Platform/PlatformSvg";
import PodcastCard from "../../Bazar-Podcasts/PodcastCard";




export default function BazarPodcast() {
  return (
    <div className="w-full bg-white pb-4 h-full rounded-b-2xl">
      <div className="w-full flex flex-col px-4 h-auto mx-auto pt-8">
      

        {/* Main Content - Single Card Container with Gray Background */}
        <div className="rounded-[16px] sm:rounded-2xl bg-[#f8f9fa] border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8">
            
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
        
            <div className="w-full bg-white p-2 rounded-2xl lg:w-1/2 relative overflow-hidden h-auto border border-gray-200 flex flex-col">
              {/* SVG as background */}
              <div className="flex items-center justify-center">
                <PodcastSvg className="w-full h-full object-contain" />
              </div>
              
              {/* Podcast Card in container */}
              <div className=" w-full mt-8">
                <PodcastCard
                  thumbnail="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop"
                  title="Tech Stocks Review 8"
                  author="Bazaar Team"
                  date="2024-01-15"
                  duration="50 mins"
                  isActive={false}
                  onClick={() => {}}
                  bg="bg-[#f8f9fa] border-gray-200"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 md:p-6 lg:p-8 relative flex flex-col">
              {/* New Badge */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full border border-gray-400 bg-white text-gray-700 text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">
                  New
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-left">
                  <span className="text-primary text-lg font-bold">Bazaar Podcast</span> 
                  <br />
                  <span className="text-gray-900 text-lg font-bold">Your Daily Dose of Market Wisdom.</span>
                </h3>
                <p className="text-[#80868B] text-xs sm:text-sm md:text-base leading-relaxed text-left">
                  Bazaar AI gives you instant, intelligent insights to guide your trading
                  decisions, helping you analyze trends effortlessly. Your smart companion
                  inside the dashboard, always ready with real-time answers and analysis.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
