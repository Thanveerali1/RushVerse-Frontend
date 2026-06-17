import { useState, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function LoginModal({ isOpen, onClose }) {
const [tab, setTab] = useState("password");

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const { login } = useContext(AuthContext);

if (!isOpen) return null;

const handleLogin = async () => {
  try {
    const response = await api.post("/login", {
      username,
      password
    });
    console.log(response.data);
    login(response.data);

    alert("Login successful!");

    onClose();
  } catch (error) {
    alert(
      error.response?.data?.detail ||
      "Login failed"
    );
  }
};
return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

    <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-slate-800 p-6">

    <div className="flex items-center justify-between mb-8">

      <h1 className="text-3xl font-bold text-yellow-400">
        RushVerse
      </h1>

      <button
        onClick={onClose}
        className="text-2xl text-slate-400 hover:text-white"
      >
        ✕
      </button>

    </div>

    <div className="flex mb-8 border-b border-slate-700">

      <button
        onClick={() => setTab("password")}
        className={`flex-1 py-3 font-semibold ${
          tab === "password"
            ? "border-b-2 border-red-500 text-white"
            : "text-slate-500"
        }`}
      >
        Password Login
      </button>

      <button
        onClick={() => setTab("otp")}
        className={`flex-1 py-3 font-semibold ${
          tab === "otp"
            ? "border-b-2 border-red-500 text-white"
            : "text-slate-500"
        }`}
      >
        OTP Login
      </button>

    </div>

    {tab === "password" && (
      <>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            mb-4
          "
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            mb-4
          "
        />
      </>
    )}

    {tab === "otp" && (
      <div className="text-center text-slate-400 mb-6">
        OTP Login Coming Soon
      </div>
    )}

    <button
      onClick={handleLogin}
      className="
        w-full
        bg-red-500
        hover:bg-red-600
        py-4
        rounded-full
        font-bold
        text-lg
      "
    >
      LOGIN
    </button>

  </div>
      </div>
   
  );
}
