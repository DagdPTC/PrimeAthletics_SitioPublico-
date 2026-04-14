import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// Importas tus pantallas (Screens)
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import NewsScreen from "./screens/NewsScreen";
import AboutScreen from "./screens/AboutScreen";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto p-8">
          <Routes>
            {/* Ahora usas los componentes en lugar de HTML directo */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/productos/:categoria" element={<ProductsScreen />} />
            <Route path="/novedades" element={<NewsScreen />} />
            <Route path="/nosotros" element={<AboutScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
