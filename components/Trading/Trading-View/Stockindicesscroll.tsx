"use client";

import React, { useRef, useState } from "react";
import StockIndexCard from "./Stockindexcard";

// Sample data matching the design
const stockIndices = [
  {
    name: "KSE 100",
    value: 158813.95,
    change: 313.14,
    changePercent: 0.20,
    isPositive: true,
    chartData: [20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 48, 50, 55, 52, 58, 60, 55, 62, 65],
  },
  {
    name: "S&P 500",
    value: 4567.18,
    change: 12.45,
    changePercent: 0.27,
    isPositive: true,
    chartData: [30, 32, 28, 35, 33, 38, 36, 40, 38, 42, 40, 45, 43, 48, 45, 50, 48, 52, 50, 55],
  },
  {
    name: "FTSE 100",
    value: 7297.10,
    change: 18.67,
    changePercent: 0.26,
    isPositive: true,
    chartData: [25, 28, 26, 30, 28, 32, 30, 35, 33, 38, 36, 40, 38, 42, 40, 45, 43, 47, 45, 50],
  },
  {
    name: "Nikkei 225",
    value: 29169.24,
    change: 75.32,
    changePercent: 0.26,
    isPositive: true,
    chartData: [35, 38, 36, 40, 38, 42, 40, 45, 43, 48, 46, 50, 48, 52, 50, 55, 53, 58, 55, 60],
  },
  {
    name: "DAX 30",
    value: 15240.50,
    change: 50.89,
    changePercent: 0.33,
    isPositive: true,
    chartData: [40, 42, 38, 45, 43, 48, 45, 50, 48, 52, 50, 55, 53, 58, 55, 60, 58, 62, 60, 65],
  },
  {
    name: "Hang Seng",
    value: 18432.12,
    change: -125.45,
    changePercent: -0.68,
    isPositive: false,
    chartData: [60, 58, 62, 55, 58, 52, 55, 50, 52, 48, 50, 45, 48, 42, 45, 40, 42, 38, 40, 35],
  },
];

interface StockIndicesScrollProps {
  indices?: typeof stockIndices;
}

export default function StockIndicesScroll({
  indices = stockIndices,
}: StockIndicesScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full bg-white">
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {indices.map((index, i) => (
          <React.Fragment key={index.name}>
            <StockIndexCard
              name={index.name}
              value={index.value}
              change={index.change}
              changePercent={index.changePercent}
              chartData={index.chartData}
              isPositive={index.isPositive}
            />
            {/* Divider between cards */}
            {i < indices.length - 1 && (
              <div className="w-px bg-gray-200 self-stretch my-3" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}