"use client";

import React, { useState } from "react";

interface TutorialCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

// Icons
const BookIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="26" cy="26" r="25.5" fill="#F8F9FA" stroke="#DADCE0"/>
  <path d="M26 36.0795C25.7 36.0795 25.4 36.0095 25.15 35.8695C23.28 34.8495 19.99 33.7695 17.93 33.4995L17.64 33.4595C16.33 33.2995 15.25 32.0695 15.25 30.7395V18.6595C15.25 17.8695 15.56 17.1495 16.13 16.6295C16.7 16.1095 17.44 15.8595 18.22 15.9295C20.42 16.0995 23.74 17.1995 25.62 18.3795L25.86 18.5195C25.93 18.5595 26.08 18.5595 26.14 18.5295L26.3 18.4295C28.18 17.2495 31.5 16.1295 33.71 15.9395C33.73 15.9395 33.81 15.9395 33.83 15.9395C34.56 15.8695 35.31 16.1295 35.87 16.6495C36.44 17.1695 36.75 17.8895 36.75 18.6795V30.7495C36.75 32.0895 35.67 33.3095 34.35 33.4695L34.02 33.5095C31.96 33.7795 28.66 34.8695 26.83 35.8795C26.59 36.0195 26.3 36.0795 26 36.0795ZM17.98 17.4195C17.66 17.4195 17.37 17.5295 17.14 17.7395C16.89 17.9695 16.75 18.2995 16.75 18.6595V30.7395C16.75 31.3295 17.26 31.8995 17.83 31.9795L18.13 32.0195C20.38 32.3195 23.83 33.4495 25.83 34.5395C25.92 34.5795 26.05 34.5895 26.1 34.5695C28.1 33.4595 31.57 32.3195 33.83 32.0195L34.17 31.9795C34.74 31.9095 35.25 31.3295 35.25 30.7395V18.6695C35.25 18.2995 35.11 17.9795 34.86 17.7395C34.6 17.5095 34.27 17.3995 33.9 17.4195C33.88 17.4195 33.8 17.4195 33.78 17.4195C31.87 17.5895 28.79 18.6195 27.11 19.6695L26.95 19.7795C26.4 20.1195 25.62 20.1195 25.09 19.7895L24.85 19.6495C23.14 18.5995 20.06 17.5795 18.1 17.4195C18.06 17.4195 18.02 17.4195 17.98 17.4195Z" fill="#8025EC"/>
  <path d="M26 35.2402C25.59 35.2402 25.25 34.9002 25.25 34.4902V19.4902C25.25 19.0802 25.59 18.7402 26 18.7402C26.41 18.7402 26.75 19.0802 26.75 19.4902V34.4902C26.75 34.9102 26.41 35.2402 26 35.2402Z" fill="#8025EC"/>
  <path d="M21.75 23.2402H19.5C19.09 23.2402 18.75 22.9002 18.75 22.4902C18.75 22.0802 19.09 21.7402 19.5 21.7402H21.75C22.16 21.7402 22.5 22.0802 22.5 22.4902C22.5 22.9002 22.16 23.2402 21.75 23.2402Z" fill="#8025EC"/>
  <path d="M22.5 26.2402H19.5C19.09 26.2402 18.75 25.9002 18.75 25.4902C18.75 25.0802 19.09 24.7402 19.5 24.7402H22.5C22.91 24.7402 23.25 25.0802 23.25 25.4902C23.25 25.9002 22.91 26.2402 22.5 26.2402Z" fill="#8025EC"/>
  </svg>
  
);

const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="12" r="1.5" fill="#1A1A1A" />
    <circle cx="12" cy="12" r="1.5" fill="#1A1A1A" />
    <circle cx="19" cy="12" r="1.5" fill="#1A1A1A" />
  </svg>
);

const PlayIcon = () => (
  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.1141" y="0.1141" width="42.7718" height="42.7718" rx="21.3859" fill="#8025EC"/>
    <path d="M23.7332 29.7939H19.0402C14.7931 29.7939 12.9785 27.9793 12.9785 23.7322V19.0393C12.9785 14.7921 14.7931 12.9775 19.0402 12.9775H23.7332C27.9803 12.9775 29.7949 14.7921 29.7949 19.0393V23.7322C29.7949 27.9793 27.9803 29.7939 23.7332 29.7939ZM19.0402 14.1508C15.4345 14.1508 14.1518 15.4335 14.1518 19.0393V23.7322C14.1518 27.338 15.4345 28.6207 19.0402 28.6207H23.7332C27.3389 28.6207 28.6217 27.338 28.6217 23.7322V19.0393C28.6217 15.4335 27.3389 14.1508 23.7332 14.1508H19.0402Z" fill="white"/>
    <path d="M20.4163 24.8044C20.0878 24.8044 19.7827 24.7262 19.509 24.5697C18.8832 24.2099 18.5234 23.4747 18.5234 22.5439V20.2287C18.5234 19.3058 18.8832 18.5627 19.509 18.203C20.1347 17.8432 20.9481 17.8979 21.7537 18.3672L23.7639 19.5248C24.5617 19.9863 25.0232 20.6668 25.0232 21.3863C25.0232 22.1059 24.5617 22.7864 23.7639 23.2479L21.7537 24.4055C21.3001 24.6714 20.8386 24.8044 20.4163 24.8044ZM20.4241 19.1415C20.2989 19.1415 20.1894 19.165 20.1034 19.2198C19.8531 19.3684 19.7045 19.736 19.7045 20.2287V22.5439C19.7045 23.0367 19.8453 23.4043 20.1034 23.5529C20.3537 23.7015 20.7448 23.639 21.175 23.3887L23.1851 22.2311C23.6153 21.9808 23.8578 21.6757 23.8578 21.3863C23.8578 21.0969 23.6153 20.7841 23.1851 20.5416L21.175 19.384C20.8934 19.2198 20.6353 19.1415 20.4241 19.1415Z" fill="white"/>
  </svg>
);

export default function TutorialCard({ title, subtitle, description, imageSrc }: TutorialCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
            <BookIcon />
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 text-base leading-tight">{title}</h3>
            <p className="text-gray-500 text-xs">{subtitle}</p>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-gray-50 p-1.5 rounded-lg transition-colors shrink-0">
          <MoreIcon />
        </button>
      </div>

      {/* Main Image Content */}
      <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-3 group cursor-pointer">
        {!imageError ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        )}

        {/* Black Overlay - Darkens the image */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Play Button Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="shadow-lg transform transition-transform duration-300 group-hover:scale-110 pointer-events-auto">
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* Footer Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}