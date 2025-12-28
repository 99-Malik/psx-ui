"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface AudioPlayerProps {
  audioUrl: string;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onPlayPause?: (isPlaying: boolean) => void;
}

export default function AudioPlayer({ audioUrl, onTimeUpdate, onPlayPause }: AudioPlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  // Track user intent to play/pause, separate from actual player state
  const shouldPlayRef = useRef(false);

  // Default to paused
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!waveformRef.current) return;

    // Reset state when url changes
    setIsReady(false);
    setCurrentTime(0);
    setDuration(0);

    // Start paused
    setIsPlaying(false);
    shouldPlayRef.current = false;
    onPlayPause?.(false);

    // Initialize WaveSurfer
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#E5E7EB",
      progressColor: "#1F2937",
      cursorColor: "transparent",
      barWidth: 2,
      barRadius: 1,
      barGap: 2,
      height: 30,
      normalize: true,
      backend: "WebAudio",
      interact: true,
      url: audioUrl,
    });

    wavesurfer.on("ready", () => {
      setIsReady(true);
      setDuration(wavesurfer.getDuration());
      onTimeUpdate?.(0, wavesurfer.getDuration());

      // Auto-play ONLY if the user clicked play during loading and set the ref to true
      if (shouldPlayRef.current) {
        wavesurfer.play();
      }
    });

    wavesurfer.on("interaction", () => {
      wavesurfer.play();
      if (!isPlaying) {
        setIsPlaying(true);
        shouldPlayRef.current = true;
        onPlayPause?.(true);
      }
    });

    wavesurfer.on("play", () => {
      setIsPlaying(true);
      shouldPlayRef.current = true;
      onPlayPause?.(true);
    });

    wavesurfer.on("pause", () => {
      setIsPlaying(false);
      shouldPlayRef.current = false;
      onPlayPause?.(false);
    });

    wavesurfer.on("timeupdate", (time) => {
      setCurrentTime(time);
      const dur = wavesurfer.getDuration();
      onTimeUpdate?.(time, dur);
    });

    // Cleanup
    wavesurferRef.current = wavesurfer;

    return () => {
      wavesurfer.destroy();
    };
  }, [audioUrl, onTimeUpdate, onPlayPause]);

  const togglePlayPause = () => {
    // Toggle intent immediately
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    shouldPlayRef.current = nextState;
    onPlayPause?.(nextState);

    // If actual player is ready, sync it
    if (wavesurferRef.current && isReady) {
      wavesurferRef.current.playPause();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-white rounded-lg py-1 px-2 flex items-center gap-4">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0 cursor-pointer"
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="7" width="2" height="6" fill="#010409" rx="1">
              <animate attributeName="height" values="6;12;6" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="y" values="7;4;7" dur="0.8s" repeatCount="indefinite" />
            </rect>
            <rect x="9" y="5" width="2" height="10" fill="#010409" rx="1">
              <animate attributeName="height" values="10;14;10" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
              <animate attributeName="y" values="5;3;5" dur="0.8s" begin="0.1s" repeatCount="indefinite" />
            </rect>
            <rect x="14" y="6" width="2" height="8" fill="#010409" rx="1">
              <animate attributeName="height" values="8;13;8" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="y" values="6;3.5;6" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
            </rect>
          </svg>

        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 10.0004C18.7505 10.2126 18.6961 10.4213 18.5921 10.6063C18.488 10.7912 18.3379 10.9461 18.1562 11.0559L6.9 17.9418C6.71022 18.058 6.49286 18.1214 6.27037 18.1256C6.04788 18.1297 5.82832 18.0743 5.63438 17.9652C5.44227 17.8578 5.28225 17.7012 5.17075 17.5114C5.05926 17.3217 5.00032 17.1056 5 16.8855V3.11523C5.00032 2.89514 5.05926 2.67911 5.17075 2.48935C5.28225 2.29959 5.44227 2.14295 5.63438 2.03555C5.82832 1.92644 6.04788 1.87109 6.27037 1.87521C6.49286 1.87933 6.71022 1.94278 6.9 2.05898L18.1562 8.94492C18.3379 9.05466 18.488 9.20954 18.5921 9.3945C18.6961 9.57945 18.7505 9.78818 18.75 10.0004Z" fill="#010409" />
          </svg>

        )}
      </button>

      {/* Current Time */}
      <span className="text-xs text-gray-400 font-medium shrink-0 w-[35px]">{formatTime(currentTime)}</span>

      {/* Waveform Container */}
      <div className="flex-1 relative h-[30px] flex items-center">
        {/* Loading Skeleton - displayed when not ready */}
        <div
          className={`absolute inset-0 flex items-center justify-between gap-[2px] w-full transition-opacity duration-500 ease-in-out pointer-events-none ${!isReady ? 'opacity-50' : 'opacity-0'}`}
        >
          {/* Generate fake bars */}
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-full w-[2px] h-full"
              style={{
                height: `${Math.max(20, Math.random() * 100)}%`
              }}
            />
          ))}
        </div>

        {/* Actual Waveform - opacity 0 until ready */}
        <div
          ref={waveformRef}
          className={`w-full transition-opacity duration-500 ease-in-out ${isReady ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Duration */}
      <span className="text-xs text-gray-400 font-medium shrink-0 w-[35px] text-right">{formatTime(duration)}</span>
    </div>
  );
}

