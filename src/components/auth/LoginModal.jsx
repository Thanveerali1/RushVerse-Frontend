import { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("password");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

      <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-slate-800 p-6">

        {/* Header */}
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

        {/* Tabs */}
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

        {/* PASSWORD LOGIN */}

        {tab === "password" && (
          <>

            <input
              type="text"
              placeholder="Email or Phone Number"
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                mb-4
                focus:outline-none
                focus:border-red-500
              "
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                mb-4
                focus:outline-none
                focus:border-red-500
              "
            />

            <p className="text-center text-red-400 mb-6 cursor-pointer">
              Forgot Password?
            </p>

          </>
        )}

        {/* OTP LOGIN */}

        {tab === "otp" && (
          <>

            <input
              type="text"
              placeholder="Email or Phone Number"
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                mb-4
                focus:outline-none
                focus:border-red-500
              "
            />

            <div className="flex gap-2 mb-6">

              <input
                type="text"
                placeholder="Enter OTP"
                className="
                  flex-1
                  p-4
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-red-500
                "
              />

              <button
                className="
                  bg-white
                  text-black
                  px-4
                  rounded-xl
                  font-semibold
                "
              >
                Get OTP
              </button>

            </div>

          </>
        )}

        {/* LOGIN BUTTON */}

        <button
          className="
            w-full
            bg-red-500
            hover:bg-red-600
            py-4
            rounded-full
            font-bold
            text-lg
            transition
          "
        >
          LOGIN
        </button>

        {/* Footer */}

        <p className="text-center text-slate-400 mt-6">
          Need an account?{" "}
          <span className="text-red-500 font-bold cursor-pointer">
            SIGN UP
          </span>
        </p>

      </div>

    </div>
  );
}