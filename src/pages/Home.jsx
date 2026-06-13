import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import DailyRewardCard from "../components/DailyRewardCard";
import LuckySpinCard from "../components/LuckySpinCard";
import GameCard from "../components/GameCard";
import BottomNav from "../components/BottomNav";
import WalletCard from "../components/WalletCard";
import GameTabs from "../components/GameTabs";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pb-24 flex justify-center">
    <div className="w-full max-w-md">

      <Navbar />
      <WalletCard />

      <BannerSlider />

      <div className="grid grid-cols-2 gap-4 p-4">

        <DailyRewardCard />

        <LuckySpinCard />

      </div>

      <div className="px-4">
        <GameTabs />
        <h2 className="text-xl font-bold mb-4">
          Popular Games
        </h2>

        <div className="space-y-4">

          <GameCard
            title="🎨 Color Prediction"
            subtitle="Predict colors and numbers"
            color="bg-green-600"
            link="/color"
          />

          <GameCard
            title="🏗️ Tower Rush"
            subtitle="Stack blocks and earn rewards"
            color="bg-purple-600"
            link="/tower"
          />

        </div>

      </div>

      <BottomNav />
      </div>

    </div>
  );
}