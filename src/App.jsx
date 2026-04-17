import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import AboutScreen from "./screens/AboutScreen";
import MenScreen from "./screens/MenScreen";

const App = () => {
  return (
    <Router>
      {/* El Navbar persistente */}
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <main >
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            
           
            <Route path="/hombres" element={<MenScreen />} />

            <Route path="/novedades" element={<NewsScreen />} />
            <Route path="/nosotros" element={<AboutScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
