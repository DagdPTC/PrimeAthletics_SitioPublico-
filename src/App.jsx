import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import AboutScreen from "./screens/AboutScreen";
import MenScreen from "./screens/MenScreen";
import WomenScreen from "./screens/WomenScreen";
import NovedadesScreen from "./screens/NewsScreen";

const App = () => {
  return (
    <Router>
      {/* El Navbar persistente */}
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/hombres" element={<MenScreen />} />
            <Route path="/mujeres" element={<WomenScreen />} />

            <Route path="/novedades" element={<NewsScreen />} />
            <Route path="/nosotros" element={<AboutScreen />} />
            <Route path="/novedades" element={<NovedadesScreen />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
