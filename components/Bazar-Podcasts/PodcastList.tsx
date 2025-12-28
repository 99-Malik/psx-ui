"use client";

import { useState } from "react";
import PodcastCard from "./PodcastCard";

// Search Icon (same as NavBar)
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.35742 0C6.78758 7.25504e-05 8.13391 0.557034 9.14453 1.56934C10.1552 2.58184 10.7139 3.92528 10.7139 5.35742C10.7138 6.55364 10.3249 7.69086 9.60547 8.62109L14.2432 13.2588C14.2567 13.2724 14.2671 13.2889 14.2744 13.3066C14.2817 13.3243 14.2861 13.3432 14.2861 13.3623C14.2861 13.3815 14.2818 13.4012 14.2744 13.4189C14.2671 13.4364 14.2565 13.4524 14.2432 13.4658L13.4639 14.2432C13.4504 14.2565 13.4345 14.2671 13.417 14.2744C13.3992 14.2818 13.3796 14.2861 13.3604 14.2861C13.3412 14.2861 13.3223 14.2817 13.3047 14.2744C13.2869 14.2671 13.2704 14.2568 13.2568 14.2432L8.62012 9.60742C7.68983 10.3252 6.55375 10.7138 5.35742 10.7139C3.92528 10.7139 2.58005 10.157 1.56934 9.14453C0.558819 8.13391 7.27828e-05 6.78758 0 5.35742C0 3.92528 0.556836 2.58005 1.56934 1.56934C2.58005 0.558622 3.92706 0 5.35742 0ZM5.35742 1.35742C4.28957 1.35742 3.28546 1.77296 2.52832 2.52832C1.77296 3.28368 1.35742 4.28957 1.35742 5.35742C1.35749 6.42508 1.77316 7.42849 2.52832 8.18555C3.28546 8.9409 4.28957 9.35742 5.35742 9.35742C6.42517 9.35735 7.42847 8.94084 8.18555 8.18555C8.94084 7.43026 9.35735 6.42518 9.35742 5.35742C9.35742 4.28957 8.9409 3.28546 8.18555 2.52832C7.43028 1.77138 6.42508 1.35749 5.35742 1.35742Z" fill="#010409"/>
  </svg>
);

interface Podcast {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  duration: string;
  audioUrl: string;
}

interface PodcastListProps {
  podcasts: Podcast[];
  selectedPodcastId?: string;
  onSelectPodcast: (podcast: Podcast) => void;
}

export default function PodcastList({ podcasts, selectedPodcastId, onSelectPodcast }: PodcastListProps) {
  const [activeTab, setActiveTab] = useState<"explore" | "saved">("explore");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    podcast.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {/* Header */}
      <div className="shrink-0 pb-2">
       
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Podcast List</h2>

        {/* Tabs */}
        <div className="flex gap-6 mb-4">
          <button
            onClick={() => setActiveTab("explore")}
            className={`text-sm font-medium pb-2 relative ${
              activeTab === "explore"
                ? "text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Explore
            {activeTab === "explore" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`text-sm font-medium pb-2 relative ${
              activeTab === "saved"
                ? "text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Saved
            {activeTab === "saved" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white border border-[#dadce0] rounded-full px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none py-2 text-sm w-full bg-transparent text-[#80868B] placeholder:text-black"
          />
          <div className="self-stretch w-px bg-gray-200 mx-3" />
          <SearchIcon />
        </div>
      </div>

      {/* Podcast List */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide min-h-0">
        <div className="space-y-3">
          {filteredPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              thumbnail={podcast.thumbnail}
              title={podcast.title}
              author={podcast.author}
              date={podcast.date}
              duration={podcast.duration}
              isActive={podcast.id === selectedPodcastId}
              onClick={() => onSelectPodcast(podcast)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

