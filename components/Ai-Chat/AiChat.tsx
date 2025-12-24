"use client";

import { useState, useRef, useEffect } from "react";
import {
  SphereIcon,
  TrendIcon,
  StrategyIcon,
  EconomicIcon,
  PortfolioReviewIcon,
  SendIcon,
} from "@components/Svgs/Ai-Svg/AiChatIcons";
import { Plus } from "lucide-react";

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  attachment?: {
    name: string;
    size: string;
  };
  timestamp: string;
}

const ActionCard = ({ icon, title, description }: ActionCardProps) => (
  <button className="flex flex-col items-start p-4 bg-[#f8f9fa] rounded-xl hover:bg-gray-50 transition-colors text-left">
    {icon}
    <h3 className="font-semibold text-gray-900 mt-3 text-sm">{title}</h3>
    <p className="text-xs text-[#575757] mt-1 line-clamp-2">{description}</p>
  </button>
);

// Document Icon
const DocumentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="16" fill="#F2E9FD"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.25V9.25C19.7283 9.25 22.75 12.2717 22.75 16V16C22.75 19.7283 19.7283 22.75 16 22.75V22.75C12.2717 22.75 9.25 19.7283 9.25 16V16C9.25 12.2717 12.2717 9.25 16 9.25Z" stroke="#010409" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 16.375V12.625" stroke="#010409" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9993 19C15.8958 19 15.8118 19.084 15.8125 19.1875C15.8125 19.291 15.8965 19.375 16 19.375C16.1035 19.375 16.1875 19.291 16.1875 19.1875C16.1875 19.084 16.1035 19 15.9993 19" stroke="#010409" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
);

// Check Icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#22C55E"/>
    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Edit Icon
const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z" fill="#010409"/>
<path d="M17.3404 10.9498C17.3204 10.9498 17.2904 10.9498 17.2704 10.9498C14.1504 10.6398 11.6404 8.26985 11.1604 5.16985C11.1004 4.75985 11.3804 4.37985 11.7904 4.30985C12.2004 4.24985 12.5804 4.52985 12.6504 4.93985C13.0304 7.35985 14.9904 9.21985 17.4304 9.45985C17.8404 9.49985 18.1404 9.86985 18.1004 10.2798C18.0504 10.6598 17.7204 10.9498 17.3404 10.9498Z" fill="#010409"/>
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#010409"/>
</svg>

);

// Copy Icon
const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z" fill="#010409"/>
  <path d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z" fill="#010409"/>
  </svg>
  
);

// Chevron Down Icon
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.66602 8.3335L9.99935 11.6668L13.3327 8.3335" stroke="#010409" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
);

export default function AiChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const actionCards = [
    {
      icon: <TrendIcon />,
      title: "Track Market Trends",
      description: "Utilize data analytics for insightful reports",
    },
    {
      icon: <StrategyIcon />,
      title: "Evaluate Investment Strate...",
      description: "Explore various approaches for maximizing returns",
    },
    {
      icon: <EconomicIcon />,
      title: "Monitor Economic Indicators",
      description: "Keep tabs on key factors influencing market",
    },
    {
      icon: <PortfolioReviewIcon />,
      title: "Review Portfolio Performan...",
      description: "Assess and optimize your investment allocations",
    },
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: message,
      attachment: {
        name: "MarketAnalysis_Q3_2024.pdf",
        size: "180 KB - 100% uploaded",
      },
      timestamp: "Just now",
    };

    const aiResponse: Message = {
      id: Date.now() + 1,
      type: "ai",
      content: `Here's a summary of the Market Analysis Q3 2024 document:\nThis report assesses the performance of various sectors, noting significant growth in renewable energy and a decline in traditional automotive industries. Consumer behavior indicates a preference for online retail, impacting brick-and-mortar stores. The analysis suggests strategic shifts to leverage emerging technologies and adapt to changing consumer demands.`,
      timestamp: "Just now",
    };

    setMessages([...messages, userMessage, aiResponse]);
    setMessage("");
    setShowWelcome(false);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {showWelcome ? (
          /* Welcome Screen */
          <div className="flex flex-col items-center justify-center min-h-full px-4 md:px-6 py-16">
            {/* Greeting */}
            <div className="flex flex-col items-center text-center mb-12">
              <SphereIcon />
              <h1 className="text-xl text-gray-600 mt-8">
                Good Morning, Jackie 👋
              </h1>
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                How can I assist you today?
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                Welcome back! What symbol or news should we unpack today
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-auto">
              {actionCards.map((card, index) => (
                <ActionCard key={index} {...card} />
              ))}
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="flex flex-col px-6 py-6 w-full">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-6 ${msg.type === "user" ? "flex flex-col items-end" : ""}`}>
                {msg.type === "user" ? (
                  /* User Message */
                  <div className="max-w-md">
                    <div className="bg-gray-100 rounded-2xl px-5 py-4">
                      <p className="text-gray-900 text-sm">{msg.content}</p>
                      {msg.attachment && (
                        <div className="mt-3 flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-200">
                          <DocumentIcon />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{msg.attachment.name}</p>
                            <p className="text-xs text-gray-500">{msg.attachment.size}</p>
                          </div>
                          <CheckIcon />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                      <div className="flex items-center gap-3">
                        <button className="hover:opacity-70"><EditIcon /></button>
                        <button className="hover:opacity-70"><CopyIcon /></button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* AI Message */
                  <div className="max-w-lg">
                    <div className="bg-[#F2E9FD] rounded-2xl px-5 py-4">
                      <p className="text-gray-900 text-sm whitespace-pre-line">{msg.content}</p>
                      <button className="flex items-center gap-2 mt-4 text-gray-500 text-xs hover:text-gray-700">
                        <span>Show More</span>
                        <ChevronDownIcon />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                      <button className="hover:opacity-70 ml-auto"><CopyIcon /></button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Fixed Input Area at Bottom */}
      <div className="shrink-0 px-4 md:px-6 py-4 md:py-6 bg-white border-t border-gray-100">
        <div className="w-full">
          <div className="flex items-start gap-1 p-4 bg-gray-50 rounded-2xl border border-gray-200">
            <button className="mt-1 shrink-0">
              <Plus size={20} color="black" />
            </button>
            <div className="flex-1">
              <textarea
                placeholder="Ask Bazaar AI"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-transparent outline-none resize-none text-gray-700 placeholder:text-black min-h-[60px]"
                rows={3}
              />
            </div>
            <button 
              onClick={handleSend}
              className="w-15 h-10 text-white text-xs font-semibold bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors mt-auto shrink-0"
            >
           send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
