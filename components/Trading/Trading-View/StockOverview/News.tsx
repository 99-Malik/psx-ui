"use client";

import React from "react";

const newsArticles = [
    {
        id: 1,
        category: "News Article",
        topic: "Technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
    {
        id: 2,
        category: "News Article",
        topic: "Technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
    {
        id: 3,
        category: "News Article",
        topic: "Technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
];

const topicCards = [
    {
        id: 1,
        name: "AltcoinAnalysis",
        posts: "1K Posts",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
    {
        id: 2,
        name: "BlockchainTech",
        posts: "100K Posts",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
    {
        id: 3,
        name: "DeFiExplained",
        posts: "18K Posts",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop",
        title: "Curious about the potential stocks stars of 2024? Here's a look at five....",
    },
];

export default function News() {
    return (
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg p-4">
            {/* Header */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">News</h2>

            {/* News Articles Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {newsArticles.map((article) => (
                    <div
                        key={article.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col"
                    >
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26" r="26" fill="#F8F9FA" />
                                    <path d="M22.668 34.988L23.964 30.128H19.44L20.076 27.74H24.612L25.44 24.584H20.916L21.564 22.22H26.076L27.288 17.72H29.748L28.536 22.22H31.836L33.048 17.72H35.508L34.296 22.22H38.82L38.196 24.584H33.66L32.808 27.74H37.332L36.708 30.128H32.172L30.876 34.988H28.428L29.712 30.128H26.412L25.116 34.988H22.668ZM27.06 27.74H30.348L31.2 24.584H27.9L27.06 27.74Z" fill="#8025EC" />
                                </svg>

                                <div>
                                    <p className="text-sm font-bold text-gray-900">#{article.category}</p>
                                    <p className="text-sm text-[#80868B]">{article.topic}</p>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#010409" />
                                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#010409" />
                                    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#010409" />
                                </svg>

                            </button>
                        </div>

                        {/* Article Content */}
                        <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-700 flex-1 line-clamp-3">{article.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Topic Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topicCards.map((topic) => (
                    <div
                        key={topic.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col"
                    >
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                                    <span className="text-purple-700 font-bold text-sm">#</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">#{topic.name}</p>
                                    <p className="text-xs text-gray-500">{topic.posts}</p>
                                </div>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z" fill="#010409" />
                                    <path d="M10 5.83333C10.4602 5.83333 10.8333 5.46024 10.8333 5C10.8333 4.53976 10.4602 4.16667 10 4.16667C9.53976 4.16667 9.16667 4.53976 9.16667 5C9.16667 5.46024 9.53976 5.83333 10 5.83333Z" fill="#010409" />
                                    <path d="M10 15.8333C10.4602 15.8333 10.8333 15.4602 10.8333 15C10.8333 14.5398 10.4602 14.1667 10 14.1667C9.53976 14.1667 9.16667 14.5398 9.16667 15C9.16667 15.4602 9.53976 15.8333 10 15.8333Z" fill="#010409" />
                                </svg>
                            </button>
                        </div>

                        {/* Article Content */}
                        <div className="flex gap-3">
                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={topic.image}
                                    alt={topic.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-700 flex-1 line-clamp-3">{topic.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}