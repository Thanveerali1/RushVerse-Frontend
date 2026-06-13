import { useState } from "react";

import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";
import SideDrawer from "./SideDrawer";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">

        <div className="flex items-center justify-between p-4">

          {/* Menu Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-2xl text-white"
          >
            ☰
          </button>

          {/* Logo */}
          <h1 className="font-bold text-2xl text-yellow-400">
            RushVerse
          </h1>

          {/* Auth Buttons */}
          <div className="flex gap-2">

            <button
              onClick={() => setLoginOpen(true)}
              className="
                bg-green-500
                hover:bg-green-600
                px-3
                py-2
                rounded-full
                text-sm
                font-semibold
                transition
              "
            >
              Login
            </button>

            <button
              onClick={() => setSignupOpen(true)}
              className="
                bg-purple-500
                hover:bg-purple-600
                px-3
                py-2
                rounded-full
                text-sm
                font-semibold
                transition
              "
            >
              Sign Up
            </button>

          </div>

        </div>

      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
      />

      {/* Side Drawer */}
      <SideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}