import { useState } from "react";

import Navbar from "../components/Navbar";

import ProfileCard from "../components/dashboard/ProfileCard";
import DailyBonusCard from "../components/dashboard/DailyBonusCard";
import ActionPanel from "../components/dashboard/ActionPanel";
import DepositBanner from "../components/dashboard/DepositBanner";

import Sidebar from "../components/sidebar/Sidebar";

import GameGrid from "../components/games/GameGrid";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080014] text-white">

      <Navbar setSidebarOpen={setSidebarOpen} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Top Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          <ProfileCard />

          <DailyBonusCard />

          <ActionPanel />

        </div>

        {/* Games */}

        <GameGrid />

        {/* Deposit Banner */}

        <DepositBanner />

      </div>

    </div>
  );
}