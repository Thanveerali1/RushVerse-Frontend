import { useNavigate } from "react-router-dom";

import predictionGame from "../../assets/games/game_prediction.png";
import towerGame from "../../assets/games/game_tower.png";
import comingSoonGame from "../../assets/games/game_coming_soon.png";

export default function GameGrid() {
  const navigate = useNavigate();

  return (
    <div className="flex items-start gap-2">

      {/* Prediction */}

      <img
        src={predictionGame}
        alt="Prediction"
        onClick={() => navigate("/prediction")}
        className="
          w-[210px]
          object-contain
          cursor-pointer
          transition-all
          duration-300
          hover:scale-105
        "
      />

      {/* Tower */}

      <img
        src={towerGame}
        alt="Tower"
        onClick={() => navigate("/tower")}
        className="
          w-[225px]
          object-contain
          cursor-pointer
          transition-all
          duration-300
          hover:scale-105
        "
      />

      {/* Coming Soon */}

      <img
        src={comingSoonGame}
        alt="Coming Soon"
        onClick={() => alert("More Games Coming Soon")}
        className="
          w-[219px]
          object-contain
          cursor-pointer
          transition-all
          duration-300
          hover:scale-105
        "
      />

    </div>
  );
}