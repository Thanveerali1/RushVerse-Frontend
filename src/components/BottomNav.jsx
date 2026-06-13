import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 flex justify-around py-3">

      <Link to="/">🏠 Home</Link>

      <Link to="/color">🎨 Games</Link>

      <Link to="/profile">🎁 Rewards</Link>

      <Link to="/profile">👤 Profile</Link>

    </div>
  );
}