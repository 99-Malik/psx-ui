"use client";

import React from "react";
import Image from "next/image";

// Simple play icon for the mini player
const PlayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="white" stroke="#E8EAED" />
    <path d="M26.5 19.134C27.1667 19.5189 27.1667 20.4811 26.5 20.866L16.75 26.4952C16.0833 26.8801 15.25 26.3989 15.25 25.6292L15.25 14.3708C15.25 13.6011 16.0833 13.1199 16.75 13.5048L26.5 19.134Z" fill="#8025EC" />
  </svg>
);

export default function PodcastSection() {
  return (
    <div className="w-full bg-white pb-4 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-8">
        <div className="bg-[#f8f9fa] border border-[#e8eaed] rounded-[20px] p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Illustration */}
            <div className="lg:w-1/2 flex justify-center">
              {/* Placeholder for illustration - generic podcast/talking illustration */}
              <div className="relative w-full max-w-md aspect-video md:aspect-[4/3] flex items-center justify-center">
                {/* Using a generic illustration from unDraw style or similar if available, otherwise styling a placeholder nicely */}
                {/* Since we don't have the exact vector, we'll try to use a clean image or SVG structure */}
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/podcast-interview-illustration-download-in-svg-png-gif-file-formats--host-logo-mic-business-activities-pack-illustrations-3766938.png"
                  alt="Podcast Illustration"
                  className="w-full h-auto object-contain mix-blend-multiply opacity-90"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 flex flex-col items-start w-full">
              <span className="px-4 py-1.5 mb-6 rounded-full border border-gray-300 text-xs font-semibold bg-white text-gray-700 flex items-center gap-1">
                New
              </span>

              <h3 className="text-xl md:text-2xl font-bold mb-3">
                <span className="text-[#8025EC]">Bazaar Podcast</span>
                <br />
                <span className="text-gray-900">Your Daily Dose of Market Wisdom</span>
              </h3>

              <p className="text-[#5F6368] text-sm leading-relaxed mb-8 max-w-lg">
                Stay updated with sharp insights, expert opinions, and real-time market
                stories. The Bazaar Podcast helps you understand trends and make
                smarter trading decisions effortlessly.
              </p>

              {/* Mini Player Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center gap-4 w-full max-w-md">
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 relative bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1478737270239-2f52b27fa34e?auto=format&fit=crop&q=80&w=200"
                    alt="Episode Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">Tech Stocks Review 8</h4>
                  <p className="text-xs text-[#8025EC] font-medium">60 mins</p>
                </div>

                {/* Play Button */}
                <button className="shrink-0 hover:scale-105 transition-transform">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
