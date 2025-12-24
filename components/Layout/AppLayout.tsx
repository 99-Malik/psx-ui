"use client";

import NavBar from "@components/NavBar/NavBar";
import SideBar from "@components/SideBar/SideBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen flex bg-white">
      {/* Sidebar - Full height from top */}
      <SideBar />
      
      {/* Right side - NavBar + Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <NavBar />
        
        {/* Page Content */}
        <main className="flex-1 flex overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
