import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileCard() {
  const { user } = useContext(AuthContext);

  const handleDeposit = () => {
    console.log("Open Deposit Modal");
  };

  return (
    <div
      className="
        h-32
        rounded-3xl
        border border-purple-500/30
        bg-[#140028]
        px-6
        flex
        items-center
        justify-between
        shadow-[0_0_25px_rgba(168,85,247,0.15)]
      "
    >
      <div className="flex items-center gap-4">
        <img
          src="/default-avatar.png"
          alt="Profile"
          className="
            w-16
            h-16
            rounded-full
            object-cover
            border-2
            border-fuchsia-500
          "
        />

        <div>
          <h2 className="text-2xl font-bold text-white">
            {user?.username || "Guest"}
          </h2>

          <p className="text-yellow-400 font-semibold text-lg">
            ₹ {user?.balance ?? "------"}
          </p>
        </div>
      </div>

      <button
        onClick={handleDeposit}
        className="
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br
          from-yellow-300
          via-yellow-400
          to-orange-500
          text-black
          text-3xl
          font-bold
        "
      >
        +
      </button>
    </div>
  );
}