export default function DailyRewardCard() {
  return (
    <div className="bg-orange-500 rounded-3xl p-4">

      <h2 className="font-bold text-lg">
        Daily Check-In
      </h2>

      <p className="mt-1">
        Today's Reward
      </p>

      <h1 className="text-2xl font-bold mt-2">
        ₹500
      </h1>

      <button className="mt-3 bg-white text-black px-4 py-2 rounded-xl">
        Claim
      </button>

    </div>
  );
}