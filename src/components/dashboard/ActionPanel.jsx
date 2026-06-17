export default function ActionPanel() {
  return (
    <div
      className="
        h-32
        rounded-3xl
        border border-fuchsia-500/30
        bg-[#140028]
        p-4
        flex flex-col
        justify-between
        shadow-[0_0_25px_rgba(217,70,239,0.15)]
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Wallet Actions
          </h2>

          <p className="text-gray-400 text-sm">
            Fast deposits & withdrawals
          </p>
        </div>

        <div
          className="
            w-10 h-10
            rounded-full
            flex items-center justify-center
            bg-gradient-to-br
            from-yellow-400
            to-orange-500
            text-black
            font-bold
            shadow-lg
          "
        >
          ₹
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">

        <button
          className="
            h-12
            rounded-2xl
            font-bold
            text-black

            bg-gradient-to-r
            from-yellow-300
            via-yellow-400
            to-orange-500

            hover:scale-105
            transition-all
            duration-200

            shadow-[0_0_20px_rgba(251,191,36,0.4)]
          "
        >
          💰 Deposit
        </button>

        <button
          className="
            h-12
            rounded-2xl
            font-bold
            text-white

            bg-gradient-to-r
            from-purple-600
            via-fuchsia-500
            to-pink-500

            hover:scale-105
            transition-all
            duration-200

            shadow-[0_0_20px_rgba(217,70,239,0.4)]
          "
        >
          💸 Withdraw
        </button>

      </div>
    </div>
  );
}