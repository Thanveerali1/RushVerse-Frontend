import { useState, useContext } from "react";
import rushverseLogo from "../assets/logo/rushverse_logo.png";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";

import { AuthContext } from "../context/AuthContext";

export default function Navbar({ setSidebarOpen }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="h-14 bg-[#0b1630] border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-3xl text-white hover:text-fuchsia-400 transition"
          >
            ☰
          </button>

          <img
  src={rushverseLogo}
  alt="RushVerse"
  className="
    h-15
    object-contain
    drop-shadow-lg
  "
/>

          {!user ? (
            <div className="flex gap-2">

              <button
                onClick={() => setShowLogin(true)}
                className="
                  px-5 py-2
                  rounded-full
                  bg-red-500
                  hover:bg-red-600
                  font-semibold
                "
              >
                Login
              </button>

              <button
                onClick={() => setShowSignup(true)}
                className="
                  px-5 py-2
                  rounded-full
                  bg-white
                  text-red-500
                  hover:bg-gray-200
                  font-semibold
                "
              >
                Sign Up
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-3">

              <span className="text-fuchsia-300 font-semibold">
                {user.username}
              </span>

              <button
                onClick={logout}
                className="
                  px-4 py-2
                  rounded-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  font-semibold
                "
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </nav>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />

      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
      />
    </>
  );
}