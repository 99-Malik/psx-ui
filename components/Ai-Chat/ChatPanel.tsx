"use client";

import { useState } from "react";

// New Chat Icon (pencil/edit icon)
const NewChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0007 15.1668H6.00065C2.38065 15.1668 0.833984 13.6202 0.833984 10.0002V6.00016C0.833984 2.38016 2.38065 0.833496 6.00065 0.833496H7.33398C7.60732 0.833496 7.83398 1.06016 7.83398 1.3335C7.83398 1.60683 7.60732 1.8335 7.33398 1.8335H6.00065C2.92732 1.8335 1.83398 2.92683 1.83398 6.00016V10.0002C1.83398 13.0735 2.92732 14.1668 6.00065 14.1668H10.0007C13.074 14.1668 14.1673 13.0735 14.1673 10.0002V8.66683C14.1673 8.3935 14.394 8.16683 14.6673 8.16683C14.9407 8.16683 15.1673 8.3935 15.1673 8.66683V10.0002C15.1673 13.6202 13.6207 15.1668 10.0007 15.1668Z" fill="#010409" />
    <path d="M5.66688 11.7934C5.26022 11.7934 4.88688 11.6467 4.61355 11.38C4.28688 11.0534 4.14688 10.58 4.22022 10.08L4.50688 8.07337C4.56022 7.68671 4.81355 7.18671 5.08688 6.91337L10.3402 1.66004C11.6669 0.333372 13.0135 0.333372 14.3402 1.66004C15.0669 2.38671 15.3935 3.12671 15.3269 3.86671C15.2669 4.46671 14.9469 5.05337 14.3402 5.65337L9.08688 10.9067C8.81355 11.18 8.31355 11.4334 7.92688 11.4867L5.92022 11.7734C5.83355 11.7934 5.74688 11.7934 5.66688 11.7934ZM11.0469 2.36671L5.79355 7.62004C5.66688 7.74671 5.52022 8.04004 5.49355 8.21337L5.20688 10.22C5.18022 10.4134 5.22022 10.5734 5.32022 10.6734C5.42022 10.7734 5.58022 10.8134 5.77355 10.7867L7.78022 10.5C7.95355 10.4734 8.25355 10.3267 8.37355 10.2L13.6269 4.94671C14.0602 4.51337 14.2869 4.12671 14.3202 3.76671C14.3602 3.33337 14.1335 2.87337 13.6269 2.36004C12.5602 1.29337 11.8269 1.59337 11.0469 2.36671Z" fill="#010409" />
    <path d="M13.233 6.55319C13.1864 6.55319 13.1397 6.54652 13.0997 6.53319C11.3464 6.03986 9.95305 4.64652 9.45971 2.89319C9.38638 2.62652 9.53971 2.35319 9.80638 2.27319C10.073 2.19986 10.3464 2.35319 10.4197 2.61986C10.8197 4.03986 11.9464 5.16652 13.3664 5.56652C13.633 5.63986 13.7864 5.91985 13.713 6.18652C13.653 6.41319 13.453 6.55319 13.233 6.55319Z" fill="#010409" />
  </svg>

);

// Search Icon
const SearchChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z" fill="#010409" />
    <path d="M14.6676 15.1666C14.5409 15.1666 14.4143 15.12 14.3143 15.02L12.9809 13.6866C12.7876 13.4933 12.7876 13.1733 12.9809 12.98C13.1743 12.7866 13.4943 12.7866 13.6876 12.98L15.0209 14.3133C15.2143 14.5066 15.2143 14.8266 15.0209 15.02C14.9209 15.12 14.7943 15.1666 14.6676 15.1666Z" fill="#010409" />
  </svg>

);

// More Icon (three dots horizontal)
const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66667 7.99984C4.66667 8.73622 4.06971 9.33317 3.33333 9.33317C2.59695 9.33317 2 8.73622 2 7.99984C2 7.26346 2.59695 6.6665 3.33333 6.6665C4.06971 6.6665 4.66667 7.26346 4.66667 7.99984Z" fill="#80868B"/>
<path d="M9.33333 7.99984C9.33333 8.73622 8.73638 9.33317 8 9.33317C7.26362 9.33317 6.66667 8.73622 6.66667 7.99984C6.66667 7.26346 7.26362 6.6665 8 6.6665C8.73638 6.6665 9.33333 7.26346 9.33333 7.99984Z" fill="#80868B"/>
<path d="M14 7.99984C14 8.73622 13.403 9.33317 12.6667 9.33317C11.9303 9.33317 11.3333 8.73622 11.3333 7.99984C11.3333 7.26346 11.9303 6.6665 12.6667 6.6665C13.403 6.6665 14 7.26346 14 7.99984Z" fill="#80868B"/>
</svg>

);

const recentChats = [
  "Today's stock news...",
  "Market highlights: Te...",
  "Consumer trends: Inc...",
  "Economic outlook: In...",
  "Industry news: Major...",
  "Market highlights: Te...",
  "Economic outlook: An...",
  "Company earnings...",
  "Investor sentiment: Bulli...",
];

export default function ChatPanel() {
  const [activeChat, setActiveChat] = useState(0);

  return (
    <div className="w-72 flex flex-col h-full pt-4 pb-4 pl-4">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">Bazaar AI Chat</h2>

      {/* Panel with rounded corners */}
      <div className="flex-1 bg-[#F9FAFB] rounded-2xl flex flex-col overflow-hidden">
        {/* Quick Actions */}
        <div className="px-5 pt-5 pb-5">
          <h3 className="text-sm text-[#5F6368] mb-4">Quick Actions</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/60 transition-colors">
              <NewChatIcon />
              <span className="text-sm font-medium text-[#1A1A1A]">New Chat</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/60 transition-colors">
              <SearchChatIcon />
              <span className="text-sm font-medium text-[#1A1A1A]">Search Chats</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-[#E5E7EB]" />

        {/* Recent Chats */}
        <div className="flex-1 overflow-y-auto px-5 pt-5 custom-scrollbar">
          <h3 className="text-sm text-[#5F6368] mb-4">Recent Chats</h3>
          <div className="space-y-1">
            {recentChats.map((chat, index) => (
              <button
                key={index}
                onClick={() => setActiveChat(index)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${activeChat === index
                    ? "bg-white border border-[#DADCE0]"
                    : "hover:bg-white/60"
                  }`}
              >
                <span className="text-sm text-[#1A1A1A] truncate pr-2 font-medium">{chat}</span>
                <span className="shrink-0">
                  <MoreIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
