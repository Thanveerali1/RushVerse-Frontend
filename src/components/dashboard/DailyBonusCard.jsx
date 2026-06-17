import giftImage from "../../assets/banners/daily_bonus_gift.png";
export default function DailyBonusCard() {
  return (
    <div
      className="
        relative
        h-32
        rounded-3xl
        overflow-hidden

        bg-gradient-to-r
        from-pink-600
        via-pink-500
        to-orange-500

        border
        border-pink-400/30

        px-6

        flex
        items-center

        shadow-[0_0_25px_rgba(236,72,153,0.25)]
      "
    >
      {/* LEFT CONTENT */}

      <div className="z-10">
        <h2 className="text-2xl font-bold text-white">
          Check In
        </h2>

        <p className="text-white/90 text-lg">
          Daily Free Bonus
        </p>

        <button
          className="
            mt-3

            px-10
            py-2

            rounded-xl

            bg-red-600
            hover:bg-red-700

            text-white
            font-bold

            shadow-lg

            transition
          "
        >
          GO
        </button>
      </div>

      {/* GIFT IMAGE */}

      <img
        src={giftImage}
        alt="Gift Box"
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          h-[110px]

          object-contain
          pointer-events-none

          drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]
        "
      />
    </div>
  );
}