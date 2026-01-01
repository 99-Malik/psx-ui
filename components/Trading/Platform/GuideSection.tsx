"use client";

import React from "react";
import TutorialCard from "./TutorialCard";

const HeaderBookIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#F8F9FA" />
    <circle cx="32" cy="32" r="31.3846" stroke="#DADCE0" strokeWidth="1.23077" />
    <path d="M32.0003 44.5603C31.6311 44.5603 31.2618 44.4742 30.9541 44.3018C28.6526 43.0465 24.6034 41.7172 22.068 41.3849L21.7111 41.3357C20.0988 41.1388 18.7695 39.6249 18.7695 37.988V23.1203C18.7695 22.148 19.1511 21.2618 19.8526 20.6218C20.5541 19.9818 21.4649 19.6742 22.4249 19.7603C25.1326 19.9695 29.2188 21.3234 31.5326 22.7757L31.828 22.948C31.9141 22.9972 32.0988 22.9972 32.1726 22.9603L32.3695 22.8372C34.6834 21.3849 38.7695 20.0065 41.4895 19.7726C41.5141 19.7726 41.6126 19.7726 41.6372 19.7726C42.5357 19.6865 43.4588 20.0065 44.148 20.6465C44.8495 21.2865 45.2311 22.1726 45.2311 23.1449V38.0003C45.2311 39.6495 43.9018 41.1511 42.2772 41.348L41.8711 41.3972C39.3357 41.7295 35.2741 43.0711 33.0218 44.3142C32.7265 44.4865 32.3695 44.5603 32.0003 44.5603ZM22.1295 21.5942C21.7357 21.5942 21.3788 21.7295 21.0957 21.988C20.788 22.2711 20.6157 22.6772 20.6157 23.1203V37.988C20.6157 38.7142 21.2434 39.4157 21.9449 39.5142L22.3141 39.5634C25.0834 39.9326 29.3295 41.3234 31.7911 42.6649C31.9018 42.7142 32.0618 42.7265 32.1234 42.7018C34.5849 41.3357 38.8557 39.9326 41.6372 39.5634L42.0557 39.5142C42.7572 39.428 43.3849 38.7142 43.3849 37.988V23.1326C43.3849 22.6772 43.2126 22.2834 42.9049 21.988C42.5849 21.7049 42.1788 21.5695 41.7234 21.5942C41.6988 21.5942 41.6003 21.5942 41.5757 21.5942C39.2249 21.8034 35.4341 23.0711 33.3665 24.3634L33.1695 24.4988C32.4926 24.9172 31.5326 24.9172 30.8803 24.5111L30.5849 24.3388C28.4803 23.0465 24.6895 21.7911 22.2772 21.5942C22.228 21.5942 22.1788 21.5942 22.1295 21.5942Z" fill="#8025EC" />
    <path d="M31.9992 43.5264C31.4946 43.5264 31.0762 43.108 31.0762 42.6034V24.1418C31.0762 23.6372 31.4946 23.2188 31.9992 23.2188C32.5039 23.2188 32.9223 23.6372 32.9223 24.1418V42.6034C32.9223 43.1203 32.5039 43.5264 31.9992 43.5264Z" fill="#8025EC" />
    <path d="M26.7685 28.7573H23.9992C23.4946 28.7573 23.0762 28.3388 23.0762 27.8342C23.0762 27.3296 23.4946 26.9111 23.9992 26.9111H26.7685C27.2731 26.9111 27.6916 27.3296 27.6916 27.8342C27.6916 28.3388 27.2731 28.7573 26.7685 28.7573Z" fill="#8025EC" />
    <path d="M27.6916 32.4497H23.9992C23.4946 32.4497 23.0762 32.0312 23.0762 31.5266C23.0762 31.022 23.4946 30.6035 23.9992 30.6035H27.6916C28.1962 30.6035 28.6146 31.022 28.6146 31.5266C28.6146 32.0312 28.1962 32.4497 27.6916 32.4497Z" fill="#8025EC" />
  </svg>



);

const tutorials = [
  {
    id: 1,
    title: "Tutorial 1",
    subtitle: "ChatBot Help",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks and get profits in your pocket",
    imageSrc: "/solar-5.jpg",
  },
  {
    id: 2,
    title: "Tutorial 2",
    subtitle: "Trading Bot",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks and get profits in your pocket",
    imageSrc: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Tutorial 3",
    subtitle: "News Summary",
    description: "How to use Share Bazaar as a Software or a gateway to trade stocks and get profits in your pocket",
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
  }
];

export default function GuideSection() {
  return (
    <div className="w-full bg-[#f8f9fa] pb-4 h-full border-gray-200">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-8">
        {/* Section Header Icon */}
        <div className=" rounded-full mt-8 mb-4 flex items-center justify-center">
          <HeaderBookIcon />
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-2">
          <span className="text-primary">Share Bazaar</span> <span className="text-gray-900">Guide</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#80868B] text-base text-center mb-8">
          You can view all the videos to learn how this platform works
        </p>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="flex-1 min-w-[300px] max-w-[calc(33.333%-1rem)]">
              <TutorialCard
                title={tutorial.title}
                subtitle={tutorial.subtitle}
                description={tutorial.description}
                imageSrc={tutorial.imageSrc}
              />
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mb-6">
          <button className="px-8 py-3 mt-8  bg-[#8025EC] text-white rounded-full font-semibold text-sm hover:bg-[#6b1fc4] transition-all shadow-lg hover:shadow-xl">
            See All
          </button>
        </div>
      </div>
    </div>
  );
}