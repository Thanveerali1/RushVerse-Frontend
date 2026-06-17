import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import greenChip from "../assets/colors/green_chip.png";
import redChip from "../assets/colors/red_chip.png";
import yellowChip from "../assets/colors/yellow_chip.png";
import violetChip from "../assets/colors/violet_chip.png";

export default function ColorPrediction() {
  const {
  user,
  updateBalance,
} = useContext(AuthContext);

  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState(null);

  const [period, setPeriod] = useState("Loading...");
  const [previousPeriod, setPreviousPeriod] =
  useState(null);
  const [remaining, setRemaining] = useState(60);
  const [history, setHistory] = useState([]);
  const [myBets, setMyBets] = useState([]);
  const [message, setMessage] = useState("");
  
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [betSuccess, setBetSuccess] = useState(false);

const [lastBet, setLastBet] = useState(null);

const [currentBet, setCurrentBet] = useState(null);
const [lastResult, setLastResult] = useState(null);
const [mode, setMode] = useState("BET_COUNT");
const [showResultPopup, setShowResultPopup] =
  useState(false);
  useEffect(() => {
    const fetchRound = async () => {
      try {
        const response = await api.get("/game/current");

        setPeriod(response.data.period);
        setRemaining(response.data.remaining);
        const historyResponse =await api.get("/game/history");

setHistory(historyResponse.data);
const betsResponse =
  await api.get("/game/my-bets");

setMyBets(
  betsResponse.data
);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRound();
    loadMode();

const interval = setInterval(() => {
  fetchRound();
}, 1000);

return () => clearInterval(interval);
  }, []);
  useEffect(() => {
  if (
    currentBet &&
    currentBet.period !== period
  ) {
    setCurrentBet(null);
  }
}, [period, currentBet]);
const [lastHistoryPeriod, setLastHistoryPeriod] =
  useState(null);

useEffect(() => {

  const handleRoundResult = async () => {

    if (
      history.length > 0 &&
      history[0].period !== lastHistoryPeriod
    ) {
      console.log(
  "RESULT EFFECT",
  history[0]?.period,
  lastHistoryPeriod
);

      setLastHistoryPeriod(
        history[0].period
      );

      setLastResult(
  history[0].result
);

setShowResultPopup(true);

setTimeout(() => {
  setShowResultPopup(false);
}, 3000);

    }

  };

  handleRoundResult();

}, [history]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins
      .toString()
      .padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const bettingClosed = remaining <= 5;

  const canBet =
    selectedColor &&
    amount &&
    !bettingClosed;

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  
  const handlePlaceBet = async () => {
  if (!selectedColor) {
    showMessage("Please select a color");
    return;
  }

  if (!amount) {
    showMessage("Please select an amount");
    return;
  }

  try {
    const response = await api.post("/game/bet", {
      period,
      color: selectedColor,
      amount,
    });
    updateBalance(
  response.data.balance
);

    setCurrentBet({
  period,
  color: selectedColor,
  amount,
});

setLastBet({
  color: selectedColor,
  amount,
});

setSelectedColor("");
setAmount(null);

    setBetSuccess(true);

    setTimeout(() => {
      setBetSuccess(false);
    }, 2500);

    

    console.log(response.data);

  } catch (error) {
    showMessage(
      error.response?.data?.detail ||
      "Failed to place bet"
    );
  }
};
const cancelBet = async (period) => {
  try {

    const response = await api.delete(
      `/game/cancel-bet/${period}`
    );

    updateBalance(
      response.data.balance
    );

    const betsResponse =
      await api.get("/game/my-bets");

    setMyBets(
      betsResponse.data
    );
    setCurrentBet(null);
    showMessage(
      "Bet cancelled successfully"
    );

  } catch (error) {

    showMessage(
      error.response?.data?.detail ||
      "Failed to cancel bet"
    );

  }
};
const loadMode = async () => {

  try {

    const response =
      await api.get("/game/mode");

    setMode(
      response.data.mode
    );

  } catch (error) {

    console.error(error);

  }

};

const changeMode = async (
  selectedMode
) => {

  try {

    await api.post(
      `/game/mode?mode=${selectedMode}`
    );

    setMode(
      selectedMode
    );

  } catch (error) {

    console.error(error);

  }

};
const refreshUser = async () => {

  try {

    const response =
      await api.get("/me");

    console.log(
      "NEW BALANCE:",
      response.data.balance
    );

    updateBalance(
      response.data.balance
    );

  } catch (error) {

    console.error(
      "REFRESH FAILED:",
      error
    );

  }

};
useEffect(() => {

  if (
    previousPeriod &&
    previousPeriod !== period
  ) {

    setTimeout(() => {
  refreshUser();
}, 1500);

  }

  setPreviousPeriod(period);

}, [period]);
  return (
    <div className="min-h-screen bg-[#080014] text-white p-6">
<div className="max-w-xl mx-auto flex justify-between items-center mb-8">

  <h1
  className="
    text-7xl
    font-black
    text-center
    bg-gradient-to-r
    from-fuchsia-400
    via-purple-300
    to-pink-500
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]
  "
>
  COLOR
  <br />
  PREDICTION
</h1>

  <div className="flex gap-3 ml-12">

  <button
    onClick={() =>
      setShowHowToPlay(true)
    }
    className="
      px-5
      py-2
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      font-bold
      whitespace-nowrap
    "
  >
    ❓ How To Play
  </button>

  <button
    onClick={() =>
      window.location.href = "/history"
    }
    className="
      px-5
      py-2
      rounded-xl
      bg-purple-600
      hover:bg-purple-700
      font-bold
    "
  >
    History
  </button>

</div>

</div>
      {showResultPopup && (
  <div
    className="
      fixed
      inset-0
      z-[60]
      flex
      items-center
      justify-center
      bg-black/50
    "
  >
    <div
      className="
        bg-[#140028]
        rounded-3xl
        border
        border-yellow-500
        p-10
        text-center
      "
    >
      <div className="text-7xl mb-4">
        🎉
      </div>

      <h2 className="text-3xl font-bold text-yellow-400">
        ROUND RESULT
      </h2>

      <p
  className={`
    text-6xl
    font-black
    mt-4

    ${
      lastResult === "GREEN"
        ? "text-green-400"
        : lastResult === "RED"
        ? "text-red-400"
        : lastResult === "YELLOW"
        ? "text-yellow-400"
        : "text-purple-400"
    }
  `}
>
  {lastResult}
</p>

<p className="text-xl mt-3 text-gray-300">
  Winning Color
</p>
    </div>
  </div>
)}
      {betSuccess && (
  <div
    className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/40
    "
  >
    <div
      className="
        bg-[#140028]
        border
        border-green-500
        rounded-3xl
        p-8
        text-center
        shadow-[0_0_40px_rgba(34,197,94,0.5)]
      "
    >
      <div className="text-7xl mb-3 animate-bounce">
  🎉
</div>

      <h2 className="text-3xl font-extrabold text-green-400">
  BET PLACED
</h2>

      <p className="mt-2 text-2xl font-black">

  ₹{lastBet?.amount} on

  <span
    className={
      lastBet?.color === "GREEN"
        ? "text-green-400"
        : lastBet?.color === "RED"
        ? "text-red-400"
        : lastBet?.color === "YELLOW"
        ? "text-yellow-400"
        : "text-purple-400"
    }
  >
    {" "}{lastBet?.color}
  </span>

</p>
    </div>
  </div>
)}

      {message && (
        <div
          className="
            max-w-xl
            mx-auto
            mb-4
            p-3
            rounded-2xl
            bg-green-500/20
            border
            border-green-500
            text-center
            text-green-300
            font-semibold
          "
        >
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Balance */}

        <div
  className="
    relative
    overflow-hidden

    bg-gradient-to-br
    from-[#130022]
    to-[#22003d]

    rounded-3xl
    p-6

    border
    border-fuchsia-500/30

    shadow-[0_0_25px_rgba(168,85,247,0.2)]

    mb-6
  "
>

          <h2 className="text-xl font-semibold">
            Balance
          </h2>
          <div
  className="
    absolute
    right-6
    top-6
    text-5xl
    opacity-20
  "
>
  💰
</div>

          <p
  className="
    text-5xl
    font-black
    text-yellow-400
    mt-3

    drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]
  "
>
            ₹ {user?.balance || 100000}
          </p>

        </div>

        {/* Live Round */}

        <div
  className="
    relative
    overflow-hidden

    bg-gradient-to-br
    from-[#130022]
    to-[#22003d]

    rounded-3xl
    p-6

    border
    border-fuchsia-500/30

    shadow-[0_0_25px_rgba(168,85,247,0.2)]

    mb-6
    text-center
  "
>

          <p className="text-fuchsia-300 font-bold tracking-widest">
  CURRENT PERIOD
</p>

          <h2
  className="
    text-4xl
    font-black
    mb-4

    text-white

    drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
  "
>
  {period}
</h2>

          <div
  className="
    absolute
    w-64
    h-64

    rounded-full

    bg-fuchsia-500/10

    blur-3xl

    top-1/2
    left-1/2

    -translate-x-1/2
    -translate-y-1/2

    pointer-events-none
  "
></div>

          <h1
  className="
    text-8xl
    font-black

    text-yellow-400

    mt-4

    drop-shadow-[0_0_25px_rgba(251,191,36,0.8)]
  "
>
            {formatTime(remaining)}
          </h1>
{bettingClosed && (
  <p className="text-red-500 font-bold mt-3">
    Betting Closed
  </p>
)}

</div>   {/* Timer card */}

</div>   {/* Grid wrapper */}
        
        <div className="bg-[#140028] rounded-3xl p-6 border border-purple-500/30 mb-6">

  <h2 className="text-xl font-semibold mb-4">
    Recent Results
  </h2>

  <div className="flex gap-2 flex-wrap">

    {history.map((item, index) => (
  <div
    key={index}
    className={`
      w-16
      h-16
      rounded-full

      flex
      items-center
      justify-center

      font-black
      text-xl

      ${
        item.result === "GREEN"
  ? "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          : item.result === "RED"
? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
          : item.result === "YELLOW"
? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.8)]"
          : "bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
      }
    `}
  >
    {
  item.result === "GREEN"
    ? "G"
    : item.result === "RED"
    ? "R"
    : item.result === "YELLOW"
    ? "Y"
    : "V"
}
  </div>
))}
  </div>

</div>
<div className="grid md:grid-cols-2 gap-6 mb-6">
  
<div className="bg-[#140028] rounded-3xl p-6 border border-purple-500/30 mb-6">

  <h2 className="text-xl font-semibold mb-4">
    My Bets
  </h2>

  {myBets.length === 0 ? (
    <p className="text-gray-400">
      No bets placed yet
    </p>
  ) : (
    <div className="space-y-3">

      {myBets.slice(0, 5).map(
        (bet, index) => (
          <div
            key={index}
            className="
              flex
              justify-between
              items-center
              bg-black/20
              rounded-xl
              p-3
            "
          >
            <div>

              <p className="font-bold">
                {bet.color}
              </p>

              <p className="text-sm text-gray-400">
                {bet.period}
              </p>

            </div>

            <div className="text-right">

  <p className="text-yellow-400 font-bold">
    ₹{bet.amount}
  </p>

  <p className="text-sm">
    {bet.status}
  </p>

  {bet.status === "PENDING" && (
    <button
      onClick={() =>
        cancelBet(bet.period)
      }
      className="
        mt-2
        px-3
        py-1
        bg-red-600
        rounded-lg
        text-xs
        font-bold
      "
    >
      Cancel
    </button>
  )}

</div>


          </div>
        )
      )}

    </div>
  )}

</div>
<div>

        {/* Color Selection */}
        {currentBet && (
  <div
    className="
      bg-[#140028]
      rounded-3xl
      p-6
      border
      border-fuchsia-500/30
      mb-6
    "
  >
    <h2 className="text-xl font-bold mb-3">
      Current Bet
    </h2>

    <div className="space-y-2">

      <p>
        Period:
        <span className="ml-2 text-white">
          {currentBet.period}
        </span>
      </p>

      <p>
        Color:
        <span className="ml-2 text-yellow-400">
          {currentBet.color}
        </span>
      </p>

      <p>
        Amount:
        <span className="ml-2 text-green-400">
          ₹{currentBet.amount}
        </span>
      </p>

      <p>
        Status:
        <span className="ml-2 text-orange-400">
          Waiting For Round Result...
        </span>
      </p>

    </div>
  </div>
)}

        <div className="bg-[#140028] rounded-3xl p-6 border border-purple-500/30 mb-6">

          <h2 className="text-xl font-semibold mb-4">
            Select Color
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <button
  disabled={bettingClosed}
  onClick={() =>
    setSelectedColor(
      selectedColor === "GREEN"
        ? ""
        : "GREEN"
    )
  }
  className={`
    h-48
    rounded-3xl
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-105
    overflow-hidden
    bg-transparent
    ${
  selectedColor === "GREEN"
    ? "ring-4 ring-white"
    : ""
}
  `}
>
  <img
    src={greenChip}
    alt="Green"
    className="
  w-full
  h-full
  object-cover
  rounded-3xl
"
  />

  
</button>

            <button
  disabled={bettingClosed}
  onClick={() =>
    setSelectedColor(
      selectedColor === "RED"
        ? ""
        : "RED"
    )
  }
  className={`
    h-48
    rounded-3xl
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-105
    overflow-hidden
    bg-transparent
    ${
  selectedColor === "RED"
    ? "ring-4 ring-white"
    : ""
}
  `}
>
  <img
    src={redChip}
    alt="Red"
    className="
  w-full
  h-full
  object-cover
  rounded-3xl
"
  />

  
</button>
            <button
  disabled={bettingClosed}
  onClick={() =>
    setSelectedColor(
      selectedColor === "YELLOW"
        ? ""
        : "YELLOW"
    )
  }
  className={`
    h-48
    rounded-3xl
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-105
    overflow-hidden
    bg-transparent
    ${
  selectedColor === "YELLOW"
    ? "ring-4 ring-white"
    : ""
}
  `}
>
  <img
    src={yellowChip}
    alt="Yellow"
    className="
  w-full
  h-full
  object-cover
  rounded-3xl
"
  />

  
</button>

            <button
  disabled={bettingClosed}
  onClick={() =>
    setSelectedColor(
      selectedColor === "VIOLET"
        ? ""
        : "VIOLET"
    )
  }
  className={`
    h-48
    rounded-3xl
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-105
    overflow-hidden
    bg-transparent
    ${
  selectedColor === "VIOLET"
    ? "ring-4 ring-white"
    : ""
}
  `}
>
  <img
    src={violetChip}
    alt="Violet"
    className="
  w-full
  h-full
  object-cover
  rounded-3xl
"
  />

  
</button>

          </div>

        </div>
  </div>

  </div>

        {/* Amount */}

        <div
  className="
    bg-gradient-to-br
    from-[#130022]
    to-[#22003d]

    rounded-3xl
    p-6

    border
    border-fuchsia-500/30

    shadow-[0_0_25px_rgba(168,85,247,0.15)]

    mb-6
  "
>
          <div className="flex gap-3">

            {[100, 500, 1000].map((value) => (
              <button
                key={value}
                disabled={bettingClosed}
                onClick={() =>
                  setAmount(
                    amount === value
                      ? null
                      : value
                  )
                }
                className={`
  w-32
  h-16

  rounded-2xl

  text-xl
  font-black

  transition-all
  duration-300

  hover:scale-105

  
                  ${
                    amount === value
  ? `
      bg-gradient-to-r
      from-yellow-400
      to-orange-500

      text-black

      shadow-[0_0_25px_rgba(251,191,36,0.8)]
    `
  : `
      bg-slate-800
      hover:bg-slate-700
    `
                  }
                `}
              >
                ₹{value}
              </button>
            ))}

          </div>

        </div>

        {/* Place Bet */}

        <button
          disabled={!canBet}
          onClick={handlePlaceBet}
          className="
  w-full
  h-24

  rounded-3xl

  bg-gradient-to-r
  from-yellow-400
  via-orange-500
  to-red-500

  text-black
  text-4xl
  font-extrabold

  shadow-[0_0_40px_rgba(251,191,36,0.9)]

  hover:scale-[1.02]
  active:scale-95

  transition-all
  duration-150

  disabled:opacity-40
"
        >
          {!selectedColor
            ? "Select Color"
            : !amount
            ? "Select Amount"
            : "Place Bet"}
        </button>

      </div>
      {showHowToPlay && (

  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    "
  >

    <div
      className="
        bg-[#140028]
        border
        border-purple-500
        rounded-3xl
        p-8
        max-w-md
        text-white
      "
    >

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        📖 HOW TO PLAY
      </h2>

      <div className="space-y-2 text-sm">

        <p>• Each round lasts 60 seconds</p>

        <p>• Choose a color and place a bet</p>

        <p>• Only 1 bet is allowed per round</p>

        <p>
          • Bets can be cancelled until
          the last 5 seconds
        </p>

        

        <p>
          • Correct prediction pays 2x
        </p>

        <div className="mt-4 border-t border-purple-500 pt-4">

          <p className="font-bold">
            Example:
          </p>

          <p>
            Bet ₹500 on GREEN
          </p>

          <br />

          <p>
            If GREEN wins:
          </p>

          <p className="text-green-400">
            You receive ₹1000
          </p>

          <br />

          <p>
            If GREEN loses:
          </p>

          <p className="text-red-400">
            You lose ₹500
          </p>

        </div>

      </div>

      <button
        onClick={() =>
          setShowHowToPlay(false)
        }
        className="
          mt-6
          w-full
          bg-purple-600
          hover:bg-purple-700
          py-2
          rounded-xl
          font-bold
        "
      >
        Close
      </button>

    </div>

  </div>

)}
      {user?.username === "Thanveer" && (

  <div
    className="
      fixed
      bottom-4
      right-4
      bg-[#140028]
      border
      border-purple-500
      rounded-xl
      px-4
      py-3
      z-50
      flex
      items-center
      gap-3
    "
  >

    <span className="text-sm font-bold">
      Random Mode
    </span>

    <input
      type="checkbox"
      checked={mode === "RANDOM"}
      onChange={(e) =>
        changeMode(
          e.target.checked
            ? "RANDOM"
            : "BET_COUNT"
        )
      }
      className="
        w-5
        h-5
      "
    />

  </div>

)}

    </div>
  );
}