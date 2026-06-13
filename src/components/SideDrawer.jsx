export default function SideDrawer({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-slate-900 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-5 border-b border-slate-800">

          <h2 className="text-2xl font-bold text-yellow-400">
            RushVerse
          </h2>

        </div>

        <div className="p-4 space-y-3">

          <button className="w-full text-left p-3 rounded-xl bg-slate-800">
            🏠 Home
          </button>

          <button className="w-full text-left p-3 rounded-xl bg-slate-800">
            🎮 Games
          </button>

          <button className="w-full text-left p-3 rounded-xl bg-slate-800">
            🎁 Rewards
          </button>

          <button className="w-full text-left p-3 rounded-xl bg-slate-800">
            👤 Profile
          </button>

          <button className="w-full text-left p-3 rounded-xl bg-slate-800">
            📞 Support
          </button>

        </div>
      </div>
    </>
  );
}