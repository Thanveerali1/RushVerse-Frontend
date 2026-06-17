import { useEffect, useState } from "react";
import api from "../services/api";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get(
          "/game/history"
        );

        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-[#080014] text-white p-6">

      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        Game History
      </h1>

      <div className="max-w-2xl mx-auto">

        <div
          className="
            bg-[#140028]
            rounded-3xl
            border
            border-purple-500/30
            overflow-hidden
          "
        >

          <div
            className="
              grid
              grid-cols-2
              p-4
              font-bold
              bg-purple-900/50
            "
          >
            <div>Period</div>
            <div>Result</div>
          </div>

          {history.map((item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-2
                p-4
                border-t
                border-purple-500/20
              "
            >
              <div>{item.period}</div>

              <div
                className={
                  item.result === "GREEN"
                    ? "text-green-400 font-bold"
                    : item.result === "RED"
                    ? "text-red-400 font-bold"
                    : item.result === "YELLOW"
                    ? "text-yellow-400 font-bold"
                    : "text-purple-400 font-bold"
                }
              >
                {item.result}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}