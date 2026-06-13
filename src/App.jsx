import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ColorPrediction from "./pages/ColorPrediction";
import TowerRush from "./pages/TowerRush";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/color"
          element={<ColorPrediction />}
        />

        <Route
          path="/tower"
          element={<TowerRush />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;