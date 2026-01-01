"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TrendingUp, ChevronDown } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface PorfolioDetailsProps {
  stock?: {
    id: string;
    name: string;
    value: string;
    change: string;
    changePercent: string;
    chartData?: {
      labels: string[];
      values: number[];
    };
  };
}

export default function PorfolioDetails({ stock }: PorfolioDetailsProps) {
  const chartRef = useRef<ChartJS<"line">>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sample data matching the image - portfolio value over 12 months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Data points matching the image description
  const portfolioData = [
    35000,  // Jan - starts around 35k
    18000,  // Feb - dips to below 20k
    25000,  // Mar
    42000,  // Apr - rises to over 40k
    28000,  // May - dips
    38000,  // Jun - rises
    22515,  // Jul - highlighted point (22,515.8)
    32000,  // Aug - rises
    35000,  // Sep
    28000,  // Oct - notable dip
    42000,  // Nov - upward trend
    52000,  // Dec - reaches above 50k
  ];

  const currentValue = 231238.21;
  const changePercent = 12.3;

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Format Y-axis labels (0, 10k, 20k, 40k, 80k, 100k, 200k)
  const formatYAxisLabel = (value: number) => {
    if (value === 0) return "0";
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value.toString();
  };

  const data = {
    labels: months,
    datasets: [
      {
        data: portfolioData,
        borderColor: "#8025EC", // Purple color matching the theme
        borderWidth: 2,
        borderDash: [], // Solid line (empty array = no dashes)
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#8025EC",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#FFFFFF",
        titleColor: "#8025EC",
        bodyColor: "#000000",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: () => "",
          label: (context: any) => {
            return `Value : ${formatNumber(context.parsed.y)}`;
          },
        },
        titleFont: {
          size: 12,
          weight: "600" as const,
        },
        bodyFont: {
          size: 14,
          weight: "500" as const,
        },
        boxPadding: 6,
        usePointStyle: true,
        boxWidth: 12,
        boxHeight: 12,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          drawBorder: false,
          color: "#E5E7EB",
          lineWidth: 1,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5], // Dotted lines
        },
        ticks: {
          color: (context: any) => {
            // Change color to primary when hovering over this index
            if (hoveredIndex !== null && context.index === hoveredIndex) {
              return "#8025EC";
            }
            return "#6B7280";
          },
          font: {
            size: 12,
            weight: "400" as const,
          },
          padding: 12, // Increased padding to separate from y-axis
        },
      },
      y: {
        display: true,
        position: "left" as const,
        grid: {
          display: true,
          drawBorder: false,
          color: "#E5E7EB",
          lineWidth: 1,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5], // Dotted lines
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
            weight: "400" as const,
          },
          padding: 12, // Increased padding to separate from x-axis
          callback: function (value: any) {
            // Show more y-axis values: 0, 10k, 20k, 30k, 40k, 50k, 60k, 70k, 80k, 90k, 100k, 200k
            const allowedValues = [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 200000];
            if (allowedValues.includes(value)) {
              return formatYAxisLabel(value);
            }
            return "";
          },
          max: 200000,
          stepSize: 10000,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    onHover: (event: any, activeElements: any[]) => {
      if (activeElements && activeElements.length > 0) {
        const index = activeElements[0].index;
        if (hoveredIndex !== index) {
          setHoveredIndex(index);
        }
      } else {
        if (hoveredIndex !== null) {
          setHoveredIndex(null);
        }
      }
    },
  }), [hoveredIndex, formatNumber, formatYAxisLabel]);

  // Update chart when hoveredIndex changes
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update('none');
    }
  }, [hoveredIndex]);

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg px-4 py-6 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#8025EC" />
            <path d="M15.4759 26.3337H20.4759C24.6426 26.3337 26.3092 24.667 26.3092 20.5003V15.5003C26.3092 11.3337 24.6426 9.66699 20.4759 9.66699H15.4759C11.3092 9.66699 9.64258 11.3337 9.64258 15.5003V20.5003C9.64258 24.667 11.3092 26.3337 15.4759 26.3337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.64258 18.5831L14.6426 18.5664C15.2676 18.5664 15.9676 19.0414 16.2009 19.6248L17.1509 22.0248C17.3676 22.5664 17.7092 22.5664 17.9259 22.0248L19.8342 17.1831C20.0176 16.7164 20.3592 16.6998 20.5926 17.1414L21.4592 18.7831C21.7176 19.2748 22.3842 19.6748 22.9342 19.6748H26.3176" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 className="text-xl font-semibold text-gray-900">Portfolio Overview</h2>
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
          <span className="text-sm font-medium text-gray-700">This Year</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#010409" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
      </div>

      {/* Current Value Section */}
      <div className="flex flex-col gap-1">
        <span className="text-sm text-black">Current Value</span>
        <span className="text-xl font-bold text-gray-900">
          {formatNumber(currentValue)}
        </span>
        <div className="flex items-center gap-1 text-[#34C759]">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.8125 1.125C2.50184 1.125 2.25 0.87316 2.25 0.5625C2.25 0.25184 2.50184 0 2.8125 0H9.5625C9.87316 0 10.125 0.25184 10.125 0.5625V7.3125C10.125 7.62316 9.87316 7.875 9.5625 7.875C9.25184 7.875 9 7.62316 9 7.3125V1.92049L0.960248 9.96025C0.740578 10.1799 0.384422 10.1799 0.164752 9.96025C-0.0549175 9.74058 -0.0549175 9.38442 0.164752 9.16475L8.20451 1.125H2.8125Z" fill="#34C759" />
          </svg>
          <span className="text-sm font-medium">+{changePercent}%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[300px]">
        <Line
          ref={chartRef}
          data={data}
          options={options as any}
        />
      </div>
    </div>
  );
}

