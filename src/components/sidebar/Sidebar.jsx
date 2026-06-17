import homeIcon from "../../assets/icons/icon_home.png";
import predictionIcon from "../../assets/icons/icon_prediction.png";
import towerIcon from "../../assets/icons/icon_tower.png";
import rewardsIcon from "../../assets/icons/icon_rewards.png";
import popularIcon from "../../assets/icons/icon_popular.png";
import historyIcon from "../../assets/icons/icon_history.png";
import rushverseLogo from "../../assets/logo/rushverse_logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
  {
    name: "Home",
    icon: homeIcon,
    path: "/",
  },

  {
    name: "Prediction",
    icon: predictionIcon,
    path: "/prediction",
  },

  {
    name: "Tower",
    icon: towerIcon,
    path: "/tower",
  },

  {
    name: "Rewards",
    icon: rewardsIcon,
    path: "/rewards",
  },

  {
    name: "Popular",
    icon: popularIcon,
    path: "/popular",
  },

  {
    name: "History",
    icon: historyIcon,
    path: "/history",
  },
];

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-black/50
          transition-all duration-300

          ${
            sidebarOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}

      <div
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[280px]
          z-50

          bg-[#120021]
          border-r
          border-purple-500/20

          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div className="flex justify-between items-center p-5 border-b border-purple-500/20">

  <img
    src={rushverseLogo}
    alt="RushVerse"
    className="
      h-25
      object-contain
    "
  />

  <button
    onClick={() => setSidebarOpen(false)}
    className="
      text-2xl
      hover:text-fuchsia-400
      transition
    "
  >
    ✕
  </button>

</div>

        {/* Menu */}

        <div className="p-4 flex flex-col gap-3">

          {items.map((item, index) => (
            <button
  key={item.name}

  onClick={() => {
    navigate(item.path);
    setSidebarOpen(false);
  }}
              className={`
                flex items-center gap-4
                px-4 py-3
                rounded-2xl
                transition

                ${
  location.pathname === item.path
    ? "bg-gradient-to-r from-fuchsia-600 to-pink-500"
    : "hover:bg-fuchsia-500/10"
}
              `}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />

              <span className="text-lg font-semibold">
                {item.name}
              </span>

            </button>
          ))}

        </div>

      </div>
    </>
  );
}