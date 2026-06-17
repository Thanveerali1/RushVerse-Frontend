import { useState, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function SignupModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useContext(AuthContext);

  if (!isOpen) return null;

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      await api.post("/signup", {
        username,
        email,
        password,
      });

      const loginResponse = await api.post("/login", {
        username,
        password,
      });

      login(loginResponse.data);

      alert("Account created successfully!");

      onClose();
    } catch (error) {
      alert(error.response?.data?.detail || "Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

      <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-slate-800 p-6">

        <div className="flex items-center justify-between mb-8">

          <h1 className="text-3xl font-bold text-yellow-400">Create Account</h1>

          <button onClick={onClose} className="text-2xl text-slate-400 hover:text-white">
            ✕
          </button>

        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="text"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-6"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-purple-500 hover:bg-purple-600 py-4 rounded-full font-bold"
        >
          CREATE ACCOUNT
        </button>

        <p className="text-center text-slate-400 mt-6">New users receive ₹100,000 demo balance</p>

      </div>

    </div>
  );
}
