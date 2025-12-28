"use client";

import { useMemo } from "react";

interface PlaybackControlsProps {
  currentTime: string;
  totalTime: string;
  progress: number; // 0-100
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function PlaybackControls({
  currentTime,
  totalTime,
  progress,
  isPlaying,
  onPlayPause,
}: PlaybackControlsProps) {
  const waveformBars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const baseHeight = 8;
      const variation = Math.sin(i * 0.2) * 12 + Math.cos(i * 0.15) * 8;
      const height = baseHeight + variation;
      return { height, index: i };
    });
  }, []);

  return (
    <div className="w-full">
      {/* Progress Bar with Waveform */}
      <div className="relative w-full h-12 bg-gray-100 rounded-lg mb-3 overflow-hidden">
        {/* Waveform visualization */}
        <div className="absolute inset-0 flex items-center justify-center gap-0.5 px-2">
          {waveformBars.map((bar) => {
            const isActive = bar.index < (progress / 100) * 100;
            return (
              <div
                key={bar.index}
                className={`w-0.5 ${isActive ? "bg-primary" : "bg-gray-300"}`}
                style={{ height: `${bar.height}px` }}
              />
            );
          })}
        </div>
      </div>

      {/* Time and Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{currentTime}</span>
        <button
          onClick={onPlayPause}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0"
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="2" width="2" height="8" fill="white" />
              <rect x="7" y="2" width="2" height="8" fill="white" />
            </svg>
          ) : (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V14L12 7L0 0Z" fill="white" />
            </svg>
          )}
        </button>
        <span className="text-xs text-gray-500">{totalTime}</span>
      </div>
    </div>
  );
}
