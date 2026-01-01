import React from "react";

export interface BotCardData {
  id: number;
  title: string;
  badgeLabel: string;
  badgeColor: string;
  description: string;
  bulletPoints: string[];
  SvgComponent: React.ComponentType<{ className?: string }>;
}

