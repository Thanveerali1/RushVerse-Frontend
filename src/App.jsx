import { HashRouter, Routes, Route } from "react-router-dom";

import History from "./pages/History";
import Tower from "./pages/Tower";

import Home from "./pages/Home";
import ColorPrediction from "./pages/ColorPrediction";

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/prediction"
          element={<ColorPrediction />}
        />
        <Route
  path="/tower"
  element={<Tower />}
/>
<Route
  path="/history"
  element={<History />}
/>


      </Routes>
      

    </HashRouter>
  );
}

export default App;