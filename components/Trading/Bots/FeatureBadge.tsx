"use client";

import React from "react";

interface FeatureBadgeProps {
  label: string;
  color: string;
}

export default function FeatureBadge({ label, color }: FeatureBadgeProps) {
  const colorMap: { [key: string]: { bg: string; text: string } } = {
    "bg-[#ffe8ea] text-[#f23645]": { bg: "#ffe8ea", text: "#f23645" },
    "bg-[#e6fffa] text-[#04a085]": { bg: "#e6fffa", text: "#04a085" },
    "bg-[#f1f3f4] text-[#1f2937]": { bg: "#f1f3f4", text: "#1f2937" },
    "bg-[#f3e8ff] text-[#8025ec]": { bg: "#f3e8ff", text: "#8025ec" },
  };

  const colors = colorMap[color] || { bg: "#f1f3f4", text: "#1f2937" };

  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      {label}
    </span>
  );
}

