export default function GameTabs() {
  return (
    <div className="px-4 py-3">

      <div className="flex gap-2 overflow-x-auto">

        <button className="bg-red-500 px-4 py-2 rounded-full">
          All
        </button>

        <button className="bg-slate-800 px-4 py-2 rounded-full">
          Prediction
        </button>

        <button className="bg-slate-800 px-4 py-2 rounded-full">
          Tower
        </button>

        <button className="bg-slate-800 px-4 py-2 rounded-full">
          Rewards
        </button>

      </div>

    </div>
  );
}