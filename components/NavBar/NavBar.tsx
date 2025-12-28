"use client";

import { useState, useEffect } from "react";

// Search Icon
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.35742 0C6.78758 7.25504e-05 8.13391 0.557034 9.14453 1.56934C10.1552 2.58184 10.7139 3.92528 10.7139 5.35742C10.7138 6.55364 10.3249 7.69086 9.60547 8.62109L14.2432 13.2588C14.2567 13.2724 14.2671 13.2889 14.2744 13.3066C14.2817 13.3243 14.2861 13.3432 14.2861 13.3623C14.2861 13.3815 14.2818 13.4012 14.2744 13.4189C14.2671 13.4364 14.2565 13.4524 14.2432 13.4658L13.4639 14.2432C13.4504 14.2565 13.4345 14.2671 13.417 14.2744C13.3992 14.2818 13.3796 14.2861 13.3604 14.2861C13.3412 14.2861 13.3223 14.2817 13.3047 14.2744C13.2869 14.2671 13.2704 14.2568 13.2568 14.2432L8.62012 9.60742C7.68983 10.3252 6.55375 10.7138 5.35742 10.7139C3.92528 10.7139 2.58005 10.157 1.56934 9.14453C0.558819 8.13391 7.27828e-05 6.78758 0 5.35742C0 3.92528 0.556836 2.58005 1.56934 1.56934C2.58005 0.558622 3.92706 0 5.35742 0ZM5.35742 1.35742C4.28957 1.35742 3.28546 1.77296 2.52832 2.52832C1.77296 3.28368 1.35742 4.28957 1.35742 5.35742C1.35749 6.42508 1.77316 7.42849 2.52832 8.18555C3.28546 8.9409 4.28957 9.35742 5.35742 9.35742C6.42517 9.35735 7.42847 8.94084 8.18555 8.18555C8.94084 7.43026 9.35735 6.42518 9.35742 5.35742C9.35742 4.28957 8.9409 3.28546 8.18555 2.52832C7.43028 1.77138 6.42508 1.35749 5.35742 1.35742Z" fill="#010409"/>
</svg>

);

// Chevron Down Icon
const ChevronDownIcon = () => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.11133 0C1.17963 0 1.244 0.0339565 1.28418 0.0888672L5.08887 5.33301L8.89355 0.0888672C8.93368 0.0340344 8.99821 9.49279e-05 9.06641 0H10.0713C10.1581 9.62077e-05 10.2089 0.0990054 10.1572 0.169922L5.43457 6.68066C5.26449 6.91633 4.91362 6.91631 4.74219 6.68066L0.0195312 0.169922C-0.0307854 0.0990859 0.0198225 0.000324254 0.106445 0H1.11133Z" fill="#010409"/>
  </svg>
  
);

export default function NavBar() {
  const [language] = useState("English");
  const [dateStr, setDateStr] = useState("");
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      };
      setDateStr(now.toLocaleDateString('en-US', options));
      setTimeStr(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="h-16 bg-white border-b border-[#dadce0] flex items-center justify-between px-4 md:px-6">
      {/* Left - Date & Time */}
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-600 hidden md:block leading-[22px]">
          {dateStr} | {timeStr} WIB
        </span>
      </div>

      {/* Right - Search, Language, Profile */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center bg-white border border-[#dadce0] rounded-full px-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="outline-none py-1 text-sm w-40 lg:w-56 bg-transparent text-[#80868B] placeholder:text-black"
          />
          <div className="self-stretch w-px bg-gray-200 mx-3" />
          <SearchIcon />
        </div>

        {/* Language Selector */}
        <button className="hidden md:flex items-center gap-2 px-4 py-1 border border-[#dadce0] rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <span>{language}</span>
          <ChevronDownIcon />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 px-2 py-2 lg:px-2 lg:py-1 border border-[#dadce0] rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
          {/* Avatar with image */}
          <div className="w-5 h-5 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#F9A8D4"/>
              <circle cx="16" cy="12" r="5" fill="#92400E"/>
              <ellipse cx="16" cy="26" rx="8" ry="6" fill="#92400E"/>
              <circle cx="16" cy="12" r="4" fill="#D4A574"/>
              <path d="M12 10C12 10 13 8 16 8C19 8 20 10 20 10" stroke="#1A1A1A" strokeWidth="0.5"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700 hidden lg:block">Hi, Jackie Brad!</span>
        </div>
      </div>
    </nav>
  );
}
