"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import Transcript from "./Transcript";
import { PodcastIcon } from "@components/Svgs/Podcast/page";
import BazaarAIChatModal from "./BazaarAIChatModal";

// Menu Icon (three dots)
const MenuIcon = () => (
  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="#010409" />
    <path d="M11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.89543 11 2Z" fill="#010409" />
    <path d="M18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2C14 0.89543 14.8954 0 16 0C17.1046 0 18 0.89543 18 2Z" fill="#010409" />
  </svg>

);

// Microphone Icon
const MicrophoneIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="25.5" fill="white" stroke="#DADCE0" />
    <path d="M26 30.25C23.38 30.25 21.25 28.12 21.25 25.5V20C21.25 17.38 23.38 15.25 26 15.25C28.62 15.25 30.75 17.38 30.75 20V25.5C30.75 28.12 28.62 30.25 26 30.25ZM26 16.75C24.21 16.75 22.75 18.21 22.75 20V25.5C22.75 27.29 24.21 28.75 26 28.75C27.79 28.75 29.25 27.29 29.25 25.5V20C29.25 18.21 27.79 16.75 26 16.75Z" fill="#8025EC" />
    <path d="M25.9996 33.7504C21.3696 33.7504 17.5996 29.9804 17.5996 25.3504V23.6504C17.5996 23.2404 17.9396 22.9004 18.3496 22.9004C18.7596 22.9004 19.0996 23.2404 19.0996 23.6504V25.3504C19.0996 29.1504 22.1996 32.2504 25.9996 32.2504C29.7996 32.2504 32.8996 29.1504 32.8996 25.3504V23.6504C32.8996 23.2404 33.2396 22.9004 33.6496 22.9004C34.0596 22.9004 34.3996 23.2404 34.3996 23.6504V25.3504C34.3996 29.9804 30.6296 33.7504 25.9996 33.7504Z" fill="#8025EC" />
    <path d="M27.3899 21.1803C27.3099 21.1803 27.2199 21.1703 27.1299 21.1403C26.3999 20.8703 25.5999 20.8703 24.8699 21.1403C24.4799 21.2803 24.0499 21.0803 23.9099 20.6903C23.7699 20.3003 23.9699 19.8703 24.3599 19.7303C25.4199 19.3503 26.5899 19.3503 27.6499 19.7303C28.0399 19.8703 28.2399 20.3003 28.0999 20.6903C27.9799 20.9903 27.6899 21.1803 27.3899 21.1803Z" fill="#8025EC" />
    <path d="M26.8001 23.3003C26.7301 23.3003 26.6701 23.2903 26.6001 23.2703C26.2001 23.1603 25.7901 23.1603 25.3901 23.2703C24.9901 23.3803 24.5801 23.1403 24.4701 22.7403C24.3601 22.3503 24.6001 21.9403 25.0001 21.8303C25.6501 21.6503 26.3501 21.6503 27.0001 21.8303C27.4001 21.9403 27.6401 22.3503 27.5301 22.7503C27.4401 23.0803 27.1301 23.3003 26.8001 23.3003Z" fill="#8025EC" />
    <path d="M26 36.75C25.59 36.75 25.25 36.41 25.25 36V33C25.25 32.59 25.59 32.25 26 32.25C26.41 32.25 26.75 32.59 26.75 33V36C26.75 36.41 26.41 36.75 26 36.75Z" fill="#8025EC" />
  </svg>

);

interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
}

interface Podcast {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  duration: string;
  audioUrl: string;
}

interface NowPlayingProps {
  podcast: Podcast | null;
  transcript: TranscriptEntry[];
}

export default function NowPlaying({ podcast, transcript }: NowPlayingProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (!podcast) {
    return (
      <div className="flex-1 flex flex-col bg-[#f8f9fa] items-center justify-center px-8">
        <div className="max-w-lg text-center">
          {/* Illustration - Two people with microphones */}
          <div className="mx-auto mb-8 flex items-center justify-center">
            <PodcastIcon />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-1 lg:min-h-0 relative">
      <BazaarAIChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        podcast={podcast}
      />

      {/* Play Card Section */}
      <div className="p-2 shrink-0">
        {/* Podcast Artwork and Details */}
        <div className="flex flex-col gap-4 bg-[#f8f9fa] border border-[#dadce0] rounded-lg p-4">
          <div className="flex gap-4 ">
            {/* Left Side - Square Thumbnail */}
            <div className="w-40 h-40 shrink-0 rounded-lg border border-gray-200 overflow-hidden bg-gray-100">
              <img src={podcast.thumbnail} alt={podcast.title} className="w-full h-full object-cover" />
            </div>

            {/* Right Side - Podcast Info Stacked */}
            <div className="flex-1 flex flex-col">
              {/* Top - Now Playing Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-primary">Now Playing ....</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-primary">{podcast.duration}</span>
                  <button className="hover:opacity-70">
                    <MenuIcon />
                  </button>
                </div>
              </div>

              {/* Microphone Icon, Title, and Author/Date */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <MicrophoneIcon />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{podcast.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span>By {podcast.author}</span>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    <span>{podcast.date}</span>
                  </p>
                </div>
              </div>

              {/* Player Controls */}
              <div className="ml-11">
                <AudioPlayer audioUrl={podcast.audioUrl} />
              </div>
            </div>
          </div>

          {/* Action Buttons - Right Aligned */}
          <div className="flex gap-3 mt-6 justify-end">
            <button className="px-4 py-2.5 bg-[#f8f9fa] border border-[#BDC1C6] rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              Save
            </button>
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-4 py-2.5 bg-[#f8f9fa] border border-[#BDC1C6] rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Ask Bazaar AI
            </button>
            <button className="px-4 py-2.5 bg-primary border border-[#BDC1C6] text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Download
            </button>
          </div>
        </div>
      </div>
      {/* Transcript Section */}
      <div className="flex-1 lg:flex-1 px-3 md:px-3 py-4 md:py-6 flex flex-col lg:min-h-0 lg:overflow-hidden">
        <Transcript entries={transcript} />
      </div>
    </div>
  );
}
