"use client";

import Banner from "../Platform/Banner";
import GuideSection from "../Platform/GuideSection";
import FeaturesSection from "../Platform/FeaturesSection";
import BazarPodcast from "../Platform/BazarPodcast";
import BazarCompetitions from "../Platform/BazarCompetitions";

export default function Platform() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full p-4">
        <h1 className="text-lg font-bold text-gray-900">Platform</h1>
      </div>

      <div className="w-full ">
        <div className="w-full mx-auto px-4">
          <Banner />

          <div className="bg-transparent rounded-b-2xl border border-gray-200 pb-20 overflow-hidden">
            <GuideSection />
            <FeaturesSection />
            <BazarPodcast />
            <BazarCompetitions />
          </div>
        </div>
      </div>
    </div>
  );
}

