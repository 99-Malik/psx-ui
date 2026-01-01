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
import { ArrowRight } from "lucide-react";
import { CYNORGYIcon } from "@components/Svgs/StockName/StockName";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface StockDetailsProps {
  stock?: {
    id: string;
    name: string;
    value: string;
    change: string;
    changePercent: string;
    date?: string;
  };
}

export default function StockDetails({ stock }: StockDetailsProps) {
  const chartRef = useRef<ChartJS<"line">>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState<"Price" | "Market Cap">("Price");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("6Y");
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");

  // Chart data matching the image - years 2018-2023, Y-axis: 10K, 20K, 30K, 40K, 50K
  const years = ["2018", "2019", "2020", "2021", "2022", "2023"];

  // Sample data points for CNERGY stock over 6 years
  const stockData = [
    12000,  // 2018
    18000,  // 2019
    15000,  // 2020
    28000,  // 2021
    35000,  // 2022
    45000,  // 2023
  ];

  const currentValue = "851,041,032,700";
  const changePercent = "+4.56%";
  const date = "As of Oct 03, 2025: 4:50 PM";

  // Format Y-axis labels (10K, 20K, 30K, 40K, 50K)
  const formatYAxisLabel = (value: number) => {
    if (value === 0) return "0";
    if (value >= 1000) {
      return `${value / 1000}K`;
    }
    return value.toString();
  };

  const data = {
    labels: years,
    datasets: [
      {
        data: stockData,
        borderColor: "#8025EC", // Purple color
        borderWidth: 2,
        borderDash: [], // Solid line
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
            return `Value : ${formatYAxisLabel(context.parsed.y)}`;
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
          borderDash: [5, 5], // Dotted grid lines
        },
        ticks: {
          color: (context: any) => {
            if (hoveredIndex !== null && context.index === hoveredIndex) {
              return "#8025EC";
            }
            return "#6B7280";
          },
          font: {
            size: 12,
            weight: "400" as const,
          },
          padding: 6,
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
          borderDash: [5, 5], // Dotted grid lines
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
            weight: "400" as const,
          },
          padding: 6,
          callback: function (value: any) {
            // Show only: 10K, 20K, 30K, 40K, 50K
            const allowedValues = [10000, 20000, 30000, 40000, 50000];
            if (allowedValues.includes(value)) {
              return formatYAxisLabel(value);
            }
            return "";
          },
          max: 50000,
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
  }), [hoveredIndex]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update('none');
    }
  }, [hoveredIndex]);

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col">
      {/* Header */}
      <div className="px-3 sm:px-4 md:px-3 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Left: Icon and Heading */}
          <div className="flex items-center gap-2 sm:gap-3">
            <CYNORGYIcon />
            <h2 className="text-xl font-semibold text-gray-900">CNERGY</h2>
          </div>

          {/* Right: Value, Change, and Date */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-md font-bold text-gray-900">{currentValue}</span>
              <p className="text-xs text-[#80868B] mt-1">{date}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.75 5.0625C6.43934 5.0625 6.1875 4.81066 6.1875 4.5C6.1875 4.18934 6.43934 3.9375 6.75 3.9375H13.5C13.8107 3.9375 14.0625 4.18934 14.0625 4.5V11.25C14.0625 11.5607 13.8107 11.8125 13.5 11.8125C13.1893 11.8125 12.9375 11.5607 12.9375 11.25V5.85799L4.89775 13.8977C4.67808 14.1174 4.32192 14.1174 4.10225 13.8977C3.88258 13.6781 3.88258 13.3219 4.10225 13.1023L12.142 5.0625H6.75Z" fill="#34C759" />
              </svg>
              <span className="text-sm font-medium text-[#34C759]">{changePercent}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between">
        {/* Left: Price/Market Cap Switcher */}
        <div className="inline-flex bg-[#F8F9FA] rounded-full p-1 gap-1">
          <button
            onClick={() => setSelectedTab("Price")}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${selectedTab === "Price"
              ? "bg-white text-gray-900"
              : "text-gray-700 hover:text-gray-900"
              }`}
          >
            Price
          </button>
          <button
            onClick={() => setSelectedTab("Market Cap")}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${selectedTab === "Market Cap"
              ? "bg-white text-gray-900"
              : "text-gray-700 hover:text-gray-900"
              }`}
          >
            Market Cap
          </button>
        </div>

        {/* Right: Chart Type Switcher */}
        <div className="inline-flex bg-[#F8F9FA] rounded-full  p-1 gap-1">
          <button
            onClick={() => setChartType("line")}
            className={`py-2 px-4 rounded-full transition-all ${chartType === "line"
              ? "bg-white text-gray-900"
              : "text-gray-700 hover:text-gray-900"
              }`}
          >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 15L6.26962 8.14949C6.69654 7.5945 7.54694 7.63877 7.91391 8.2351L9.37911 10.6161C9.76959 11.2506 10.6919 11.2506 11.0824 10.6161L17 1" stroke="#010409" stroke-width="2" stroke-linecap="round" />
            </svg>

          </button>
          <button
            onClick={() => setChartType("candlestick")}
            className={`py-2 px-4 rounded-full transition-all ${chartType === "candlestick"
              ? "bg-white text-gray-900"
              : "text-gray-700 hover:text-gray-900"
              }`}
          >
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="8.22656" width="6" height="7" rx="1" stroke="#010409" stroke-width="2" />
              <rect x="11" y="6.22656" width="6" height="6" rx="1" stroke="#010409" stroke-width="2" />
              <path d="M4 1.22656V8.22656" stroke="#010409" stroke-width="2" stroke-linecap="round" />
              <path d="M14 1.22656V5.22656" stroke="#010409" stroke-width="2" stroke-linecap="round" />
              <path d="M14 12.2266V18.2266" stroke="#010409" stroke-width="2" stroke-linecap="round" />
              <path d="M4 15.2266V18.2266" stroke="#010409" stroke-width="2" stroke-linecap="round" />
            </svg>

          </button>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between gap-4">
        <div className="flex flex-1 justify-between items-center gap-2">
          {["1D", "7D", "1M", "1Y", "6Y", "ALL"].map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-5 py-2 text-md font-medium rounded-full ${selectedTimeframe === timeframe
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
        <button className="px-2 py-2 rounded-full bg-primary flex items-center justify-center hover:bg-purple-700 transition-colors shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6997 7.41699C16.6997 7.67533 17.9247 9.21699 17.9247 12.592V12.7003C17.9247 16.4253 16.4331 17.917 12.7081 17.917H7.28307C3.55807 17.917 2.06641 16.4253 2.06641 12.7003V12.592C2.06641 9.24199 3.27474 7.70033 6.22474 7.42533" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 1.66699V12.4003" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.7923 10.542L10.0007 13.3337L7.20898 10.542" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[200px] px-2 sm:px-3 md:px-4 pt-2 pb-2">
        <Line ref={chartRef} data={data} options={options as any} />
      </div>

      {/* View Stock Details Button */}
      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-4 border-t border-gray-200">
        <button className="w-full bg-primary text-white px-4 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-medium hover:bg-purple-700">
          View Stock Details
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4305 18.8201C14.6205 18.8201 14.8105 18.7501 14.9605 18.6001L21.0305 12.5301C21.3205 12.2401 21.3205 11.7601 21.0305 11.4701L14.9605 5.40012C14.6705 5.11012 14.1905 5.11012 13.9005 5.40012C13.6105 5.69012 13.6105 6.17012 13.9005 6.46012L19.4405 12.0001L13.9005 17.5401C13.6105 17.8301 13.6105 18.3101 13.9005 18.6001C14.0405 18.7501 14.2405 18.8201 14.4305 18.8201Z" fill="white" />
            <path d="M3.50008 12.75H20.3301C20.7401 12.75 21.0801 12.41 21.0801 12C21.0801 11.59 20.7401 11.25 20.3301 11.25H3.50008C3.09008 11.25 2.75008 11.59 2.75008 12C2.75008 12.41 3.09008 12.75 3.50008 12.75Z" fill="white" />
          </svg>

        </button>
      </div>
    </div>
  );
}
