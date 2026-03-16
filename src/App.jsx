import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import Potions from "./pages/Potions";
import SortingHat from "./pages/SortingHat";
import Creatures from "./pages/Creatures";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#021516] flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Spells" element={<Spells />} />
            <Route path="/Houses" element={<Houses />} />
            <Route path="/Potions" element={<Potions />} />
            <Route path="/Creatures" element={<Creatures />} />
            <Route path="/SortingHat" element={<SortingHat />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <Analytics />
    </Router>
  );
}

export default App;