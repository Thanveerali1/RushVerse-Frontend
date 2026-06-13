import { useState } from "react";

export default function SignupModal({ isOpen, onClose }) {
  const [signupType, setSignupType] = useState("email");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

      <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-slate-800 p-6">

        <div className="flex items-center justify-between mb-8">

          <h1 className="text-3xl font-bold text-yellow-400">
            Create Account
          </h1>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-4"
        />

        <input
          type="text"
          placeholder="Referral Code (Optional)"
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-6"
        />

        <button
          className="
            w-full
            bg-purple-500
            hover:bg-purple-600
            py-4
            rounded-full
            font-bold
          "
        >
          CREATE ACCOUNT
        </button>

        <p className="text-center text-slate-400 mt-6">
          New users receive ₹100,000 demo balance
        </p>

      </div>

    </div>
  );
}