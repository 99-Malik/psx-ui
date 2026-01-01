"use client";

import React from "react";

interface BotCardProps {
    title: string;
    badgeLabel: string;
    badgeColor: string;
    SvgComponent: React.ComponentType<{ className?: string }>;
}

const FeatureBadge = ({ label, color }: { label: string; color: string }) => {
    // Parse color string to extract background and text colors
    const colorMap: { [key: string]: { bg: string; text: string } } = {
        "bg-[#ffe8ea] text-[#f23645]": { bg: "#ffe8ea", text: "#f23645" },
        "bg-[#e6fffa] text-[#04a085]": { bg: "#e6fffa", text: "#04a085" },
        "bg-[#f1f3f4] text-[#1f2937]": { bg: "#f1f3f4", text: "#1f2937" },
        "bg-[#f3e8ff] text-[#8025ec]": { bg: "#f3e8ff", text: "#8025ec" },
    };
    
    const colors = colorMap[color] || { bg: "#f1f3f4", text: "#1f2937" };
    
    return (
        <span 
            className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap"
            style={{
                backgroundColor: colors.bg,
                color: colors.text,
            }}
        >
            {label}
        </span>
    );
};

export default function BotCard({ title, badgeLabel, badgeColor, SvgComponent }: BotCardProps) {
    return (
        <div className="relative overflow-hidden group hover:shadow-md transition-shadow h-full bg-white">
            <div className="absolute inset-0 z-0">
                <SvgComponent className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between min-h-[120px] sm:min-h-[140px] md:min-h-[150px]">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-tight">{title}</h4>
                <div className="mt-auto">
                    <FeatureBadge label={badgeLabel} color={badgeColor} />
                </div>
            </div>
        </div>
    );
}

