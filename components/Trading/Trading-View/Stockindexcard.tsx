"use client";

import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

interface StockIndexCardProps {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  chartData: number[];
  isPositive?: boolean;
}

export default function StockIndexCard({
  name,
  value,
  change,
  changePercent,
  chartData,
  isPositive = true,
}: StockIndexCardProps) {
  const chartRef = useRef<ChartJS<"line">>(null);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Format percentage
  const formatPercent = (num: number) => {
    const prefix = num >= 0 ? "+" : "";
    return `${prefix}${num.toFixed(2)}%`;
  };

  // Chart colors based on positive/negative
  const lineColor = isPositive ? "#22C55E" : "#EF4444";
  const gradientColorStart = isPositive
    ? "rgba(34, 197, 94, 0.3)"
    : "rgba(239, 68, 68, 0.3)";
  const gradientColorEnd = isPositive
    ? "rgba(34, 197, 94, 0)"
    : "rgba(239, 68, 68, 0)";

  // Generate labels (empty for clean look)
  const labels = chartData.map(() => "");

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        fill: true,
        borderColor: lineColor,
        borderWidth: 1.5,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return gradientColorStart;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, gradientColorStart);
          gradient.addColorStop(1, gradientColorEnd);
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  return (
    <div className="flex-shrink-0 min-w-[240px] w-[280px] rounded-md bg-[#F8F9FA] p-4 flex flex-col gap-1">
      {/* Header Row - Name and Percentage */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
          }`}
        >
          {formatPercent(changePercent)}
        </span>
      </div>

      {/* Value and Chart Row */}
      <div className="flex items-end justify-between gap-4">
        {/* Left side - Values */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{formatNumber(value)}</span>
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
            }`}
          >
            {formatNumber(Math.abs(change))}
          </span>
        </div>

        {/* Right side - Chart */}
        <div className="w-[100px] h-[40px]">
          <Line ref={chartRef} data={data} options={options as any} />
        </div>
      </div>
    </div>
  );
}