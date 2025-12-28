"use client";

import { useState } from "react";
import PodcastList from "./PodcastList";
import NowPlaying from "./NowPlaying";

interface Podcast {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  duration: string;
  audioUrl: string;
}

interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
}

// Sample data - replace with actual data source
// Sample audio URLs - using free sample audio files
const samplePodcasts: Podcast[] = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    title: "Market Insights Weekly 12",
    author: "InvestSmart",
    date: "Nov 5, 2025 at 4:00 am",
    duration: "15 mins",
    audioUrl: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
    title: "Tech Stocks Review 8",
    author: "TechBulls",
    date: "Nov 15, 2025 at 1:00 pm",
    duration: "50 mins",
    audioUrl: "https://actions.google.com/sounds/v1/water/stream_water_flowing.ogg",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
    title: "Global Economic Perspectives 6",
    author: "GlobalInvest",
    date: "Nov 20, 2025 at 3:00 pm",
    duration: "60 mins",
    audioUrl: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    title: "Dividend Growth Strategies 3",
    author: "WealthBuilders",
    date: "Nov 25, 2025 at 11:00 am",
    duration: "40 mins",
    audioUrl: "https://actions.google.com/sounds/v1/emergency/siren_short_burst_climax.ogg",
  },
  {
    id: "5",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
    title: "Options Trading Explained 2",
    author: "TradeSmart",
    date: "Nov 30, 2025 at 2:00 pm",
    duration: "35 mins",
    audioUrl: "https://actions.google.com/sounds/v1/transportation/car_horn.ogg",
  },
];

const sampleTranscript: TranscriptEntry[] = [
  {
    timestamp: "00:00:00",
    speaker: "John",
    text: "I'm currently developing a new mobile application aimed at simplifying personal finance management.",
  },
  {
    timestamp: "00:00:30",
    speaker: "Emily",
    text: "That sounds interesting! How are you planning to address user privacy?",
  },
  {
    timestamp: "00:01:00",
    speaker: "Michael",
    text: "We're implementing robust encryption methods and giving users full control over their data.",
  },
  {
    timestamp: "00:01:30",
    speaker: "Alice",
    text: "Have you conducted any user research yet to validate your concept?",
  },
  {
    timestamp: "00:02:00",
    speaker: "David",
    text: "Yes, we've held several focus groups and gathered valuable feedback that is shaping our design.",
  },
  {
    timestamp: "00:02:30",
    speaker: "Sarah",
    text: "That's great to hear! What features are you most excited about?",
  },
  {
    timestamp: "00:03:00",
    speaker: "John",
    text: "I'm particularly excited about our AI-powered budgeting assistant that learns from user spending patterns.",
  },
  {
    timestamp: "00:03:30",
    speaker: "Emily",
    text: "That's innovative! How does the AI component work exactly?",
  },
  {
    timestamp: "00:04:00",
    speaker: "Michael",
    text: "We're using machine learning algorithms to analyze transaction history and provide personalized financial insights.",
  },
  {
    timestamp: "00:04:30",
    speaker: "Alice",
    text: "What about security concerns with AI processing financial data?",
  },
  {
    timestamp: "00:05:00",
    speaker: "David",
    text: "All processing happens on-device with end-to-end encryption. We never store sensitive data on our servers.",
  },
  {
    timestamp: "00:05:30",
    speaker: "Sarah",
    text: "That's reassuring. When do you plan to launch the beta version?",
  },
  {
    timestamp: "00:06:00",
    speaker: "John",
    text: "We're targeting a beta release in Q2 next year, with a full public launch by Q4.",
  },
  {
    timestamp: "00:06:30",
    speaker: "Emily",
    text: "What platforms will you support initially?",
  },
  {
    timestamp: "00:07:00",
    speaker: "Michael",
    text: "We're starting with iOS and Android, with plans for a web version in the following year.",
  },
  {
    timestamp: "00:07:30",
    speaker: "Alice",
    text: "How do you plan to monetize the application?",
  },
  {
    timestamp: "00:08:00",
    speaker: "David",
    text: "We're offering a freemium model with basic features free, and premium subscriptions for advanced analytics.",
  },
  {
    timestamp: "00:08:30",
    speaker: "Sarah",
    text: "That sounds like a solid business model. What's your target user base?",
  },
  {
    timestamp: "00:09:00",
    speaker: "John",
    text: "We're focusing on millennials and Gen Z who are tech-savvy and looking for better financial management tools.",
  },
  {
    timestamp: "00:09:30",
    speaker: "Emily",
    text: "Have you considered partnerships with financial institutions?",
  },
  {
    timestamp: "00:10:00",
    speaker: "Michael",
    text: "Yes, we're in talks with several banks to integrate their APIs for real-time transaction data.",
  },
  {
    timestamp: "00:10:30",
    speaker: "Alice",
    text: "What about regulatory compliance? Financial apps face strict regulations.",
  },
  {
    timestamp: "00:11:00",
    speaker: "David",
    text: "We're working closely with legal experts to ensure full compliance with GDPR, CCPA, and financial regulations.",
  },
  {
    timestamp: "00:11:30",
    speaker: "Sarah",
    text: "That's comprehensive planning. What's been your biggest challenge so far?",
  },
  {
    timestamp: "00:12:00",
    speaker: "John",
    text: "Balancing user experience with security has been challenging, but we believe we've found the right balance.",
  },
  {
    timestamp: "00:12:30",
    speaker: "Emily",
    text: "How do you handle data synchronization across devices?",
  },
  {
    timestamp: "00:13:00",
    speaker: "Michael",
    text: "We use encrypted cloud sync with optional local-only mode for users who prefer maximum privacy.",
  },
  {
    timestamp: "00:13:30",
    speaker: "Alice",
    text: "What about offline functionality?",
  },
  {
    timestamp: "00:14:00",
    speaker: "David",
    text: "The app works fully offline, with sync happening when the user is back online.",
  },
  {
    timestamp: "00:14:30",
    speaker: "Sarah",
    text: "That's impressive. I'm looking forward to trying it out when it launches!",
  },
];

export default function BazaarPodcasts() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

  const handleSelectPodcast = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4 shrink-0">Bazaar Podcasts</h1>

      {/* Two Sections */}
      <div className="flex flex-col lg:flex-row gap-4 lg:flex-1 lg:overflow-hidden lg:min-h-0">
        {/* Left Panel - Podcast List */}
        <div className="w-full lg:w-1/2 pt-4 pr-4 border border-[#dadce0] pl-4 rounded-2xl lg:rounded-t-2xl lg:rounded-b-none lg:border-b-0 bg-white lg:overflow-y-auto lg:custom-scrollbar flex flex-col shrink-0 h-[500px] lg:h-full lg:min-h-0">
          <PodcastList
            podcasts={samplePodcasts}
            selectedPodcastId={selectedPodcast?.id}
            onSelectPodcast={handleSelectPodcast}
          />
        </div>

        {/* Right Panel - Now Playing */}
        <div className="w-full lg:w-1/2 mb-2 border border-[#dadce0] rounded-2xl bg-white lg:overflow-hidden lg:flex lg:flex-col lg:min-h-0">
          <NowPlaying podcast={selectedPodcast} transcript={sampleTranscript} />
        </div>
      </div>
    </div>
  );
}

