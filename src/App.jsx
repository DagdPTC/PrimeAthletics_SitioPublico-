import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/Cart/CartDrawer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenScreen from "./screens/MenScreen";
import WomenScreen from "./screens/WomenScreen";
import KidsScreen from "./screens/KidsScreen";
import NovedadesScreen from "./screens/NewsScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartSreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import CodeVerificationScreen from "./screens/CodeVerificationScreen";
import RegisterScreen from "./screens/RegisterScreen";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <CartDrawer />

        <div className="min-h-screen bg-gray-50">
          <main>
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/hombres" element={<MenScreen />} />
              <Route path="/mujeres" element={<WomenScreen />} />
              <Route path="/ninos" element={<KidsScreen />} />
              <Route path="/:gender/:category" element={<CategoryScreen />} />
              <Route
                path="/:gender/deporte/:sport"
                element={<CategoryScreen />}
              />
              <Route
                path="/:gender/tipo/:productType"
                element={<CategoryScreen />}
              />
              <Route path="/product/:id" element={<ProductDetailScreen />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route
                path="/checkout/confirmacion"
                element={<OrderConfirmationScreen />}
              />
              <Route path="/nosotros" element={<AboutScreen />} />
              <Route path="/novedades" element={<NovedadesScreen />} />
              <Route path="/carrito" element={<CartScreen />} />
              <Route path="/recuperar" element={<ForgotPasswordScreen />} />
              <Route path="/verificacion" element={<CodeVerificationScreen />} />
              <Route path="/registro" element={<RegisterScreen />} />

            </Routes>
          </main>
        </div>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
