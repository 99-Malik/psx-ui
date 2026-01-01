"use client";

import React from "react";
import { CNERGYIcon, BOPIcon, HASCOLIcon, PRLIcon } from "@components/Svgs/StockName/StockName";

const watchlistData = [
    { name: "CNERGY", icon: <CNERGYIcon />, ldcp: "6.39", open: "6.39", high: "6.39", current: "6.39", volume: "+10.15%" },
    { name: "BOP", icon: <BOPIcon />, ldcp: "6.39", open: "6.39", high: "6.39", current: "6.39", volume: "+10.15%" },
    { name: "HASCOL", icon: <HASCOLIcon />, ldcp: "6.39", open: "6.39", high: "6.39", current: "6.39", volume: "+10.15%" },
    { name: "PRL", icon: <PRLIcon />, ldcp: "6.39", open: "6.39", high: "6.39", current: "6.39", volume: "+10.15%" },
];

export default function WatchList() {
    return (
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 flex items-center justify-between  shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Watchlist</h3>
                <button className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-[#010409] hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <span>Watchlist name</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#010409" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto px-2">
                <table className="w-full">
                    {/* Table Header */}
                    <thead className="  border-t-2 border-b-2 border-gray-200">
                        <tr>
                            <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">
                                <div className="flex items-center gap-2">
                                    <span>Stock Name</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.81039 6.75H13.1894C13.3377 6.75003 13.4827 6.79404 13.606 6.87645C13.7293 6.95886 13.8254 7.07598 13.8821 7.21301C13.9389 7.35003 13.9538 7.50081 13.9248 7.64627C13.8959 7.79174 13.8245 7.92536 13.7196 8.03025L9.53014 12.2197C9.38949 12.3603 9.19876 12.4393 8.99989 12.4393C8.80101 12.4393 8.61028 12.3603 8.46964 12.2197L4.28014 8.03025C4.17528 7.92536 4.10388 7.79174 4.07495 7.64627C4.04602 7.50081 4.06088 7.35003 4.11763 7.21301C4.17438 7.07598 4.27049 6.95886 4.39379 6.87645C4.5171 6.79404 4.66207 6.75003 4.81039 6.75Z" fill="#8E95A6" />
                                    </svg>

                                </div>
                            </th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">LDCP</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">OPEN</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">HIGH</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">Current</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-[#8E95A6]">Volume</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200">
                        {watchlistData.map((stock, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
                                <td className="px-4 sm:px-6 py-3">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
                                            {stock.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">{stock.name}</span>
                                    </div>
                                </td>
                                <td className="px-4 sm:px-6 py-3 text-sm text-gray-900">{stock.ldcp}</td>
                                <td className="px-4 sm:px-6 py-3 text-sm text-gray-900">{stock.open}</td>
                                <td className="px-4 sm:px-6 py-3 text-sm text-gray-900">{stock.high}</td>
                                <td className="px-4 sm:px-6 py-3 text-sm text-gray-900">{stock.current}</td>
                                <td className="px-4 sm:px-6 py-3">
                                    <div className="flex items-center gap-1">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.75 5.0625C6.43934 5.0625 6.1875 4.81066 6.1875 4.5C6.1875 4.18934 6.43934 3.9375 6.75 3.9375H13.5C13.8107 3.9375 14.0625 4.18934 14.0625 4.5V11.25C14.0625 11.5607 13.8107 11.8125 13.5 11.8125C13.1893 11.8125 12.9375 11.5607 12.9375 11.25V5.85799L4.89775 13.8977C4.67808 14.1174 4.32192 14.1174 4.10225 13.8977C3.88258 13.6781 3.88258 13.3219 4.10225 13.1023L12.142 5.0625H6.75Z" fill="#34C759" />
                                        </svg>
                                        <span className="text-sm font-medium text-[#34C759]">{stock.volume}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

