"use client";

import { useEffect, useRef, useState } from "react";
import { SphereIcon } from "@components/Svgs/Ai-Svg/AiChatIcons";

interface Podcast {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  duration: string;
  audioUrl: string;
}

interface Message {
  id: string;
  type: "user" | "ai";
  text?: string;
  podcast?: Podcast;
  timestamp: string;
}

interface BazaarAIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  podcast: Podcast | null;
}

export default function BazaarAIChatModal({ isOpen, onClose, podcast }: BazaarAIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize chat when opened with a new podcast
  useEffect(() => {
    if (isOpen && podcast) {
      setMessages([
        {
          id: "init",
          type: "user",
          text: "Tell me about this podcast please.",
          podcast: podcast,
          timestamp: "Just now",
        },
      ]);
    }
  }, [isOpen, podcast]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        text: "This podcast covers the latest trends in the market, focusing on strategic insights and expert analysis to help you make informed decisions.",
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen || !podcast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-3xl w-full max-w-[400px] h-[550px] flex flex-col shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 p-6 bg-[#f1f3f4] border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2">
          <SphereIcon width={40} height={40} />
          <span className="font-semibold text-gray-900">Bazaar AI</span>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
        >
          {/* Three Dots Icon */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#F8F9FA" />
            <path d="M16 20C16 21.1046 15.1046 22 14 22C12.8954 22 12 21.1046 12 20C12 18.8954 12.8954 18 14 18C15.1046 18 16 18.8954 16 20Z" fill="#010409" />
            <path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" fill="#010409" />
            <path d="M28 20C28 21.1046 27.1046 22 26 22C24.8954 22 24 21.1046 24 20C24 18.8954 24.8954 18 26 18C27.1046 18 28 18.8954 28 20Z" fill="#010409" />
          </svg>

        </button>
      </div>

      {/* Chat Body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-[#f8f9fa] p-4 flex flex-col gap-6 custom-scrollbar"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}>
            <div
              className={`px-5 py-4 max-w-[90%] ${msg.type === "user"
                ? "bg-white rounded-2xl  text-gray-900"
                : "bg-[#8025EC] text-white rounded-2xl"
                }`}
            >
              {msg.text && <p className={`text-sm ${msg.type === "user" ? "font-medium" : ""}`}>{msg.text}</p>}

              {/* Embedded Podcast Card (only for user messages that have it) */}
              {msg.podcast && (
                <div className="flex items-center gap-3 bg-[#F3E8FF] p-3 rounded-2xl w-full mt-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/50">
                    <img src={msg.podcast.thumbnail} alt={msg.podcast.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="font-semibold text-sm text-gray-900 truncate">{msg.podcast.title}</h4>
                    <p className="text-xs text-gray-500">By {msg.podcast.author}</p>
                  </div>
                </div>
              )}
            </div>
            <span className="text-[10px] text-gray-400 mt-1.5 px-2">{msg.timestamp}</span>
          </div>
        ))}

        {isTyping && (
          <div className="flex flex-col items-start animate-pulse">
            <div className="bg-gray-200 px-4 py-3 rounded-[20px] rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Input */}
      <div className="px-4 pt-2 pb-4 bg-[#f8f9fa] shrink-0">
      <div className="bg-[#f3f4f6] rounded-md rounded-r-2xl pl-4 pr-0 flex items-center gap-2">
      <input
            type="text"
            placeholder="Tell me about this podcast"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent border-none outline-none text-xs placeholder:text-gray-400 text-gray-900 h-8"
          />
          <button
            onClick={handleSend}
            className="px-5 h-8 bg-[#8025EC] text-white rounded-[20px] flex items-center justify-center text-xs font-medium hover:bg-[#6b1fc4] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
