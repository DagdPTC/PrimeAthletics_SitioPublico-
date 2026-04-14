import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimeout = useRef(null);

  // Detecta si estamos en cualquier ruta de productos
  const isProductsActive = location.pathname.startsWith("/productos");

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 300);
  };

  // Clase para reutilizar el efecto de la línea animada
  const linkUnderline =
    "absolute bottom-[2px] left-0 h-0.5 bg-[#b9d9ff] transition-all duration-300";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1117] border-b border-white/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-white font-black italic tracking-tighter text-xl"
          >
            PRIME<span className="text-[#b9d9ff]">ATHLETICS</span>
          </Link>

          {/* Navegación Principal */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {/* INICIO */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors group ${isActive ? "text-white" : "text-gray-500 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  Inicio
                  <span
                    className={`${linkUnderline} ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>

            {/* PRODUCTOS (Con lógica para mantenerse activo) */}
            <div
              className="relative h-full flex items-center group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigate("/productos")}
                className={`relative py-2 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${isProductsActive ? "text-white" : "text-gray-500 hover:text-white"}`}
              >
                Productos
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {/* Línea animada de Productos */}
                <span
                  className={`${linkUnderline} ${isProductsActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </button>
            </div>

            {/* NOVEDADES */}
            <NavLink
              to="/novedades"
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors group ${isActive ? "text-white" : "text-gray-500 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  Novedades
                  <span
                    className={`${linkUnderline} ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>

            {/* NOSOTROS (Aquí estaba el que faltaba) */}
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors group ${isActive ? "text-white" : "text-gray-500 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  Nosotros
                  <span
                    className={`${linkUnderline} ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          </nav>

          {/* Carrito */}
          <Link
            to="/carrito"
            className="relative text-gray-500 hover:text-white transition-colors p-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b9d9ff] text-[#0f1117] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <MegaMenu
        isOpen={isMegaMenuOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onCategoryClick={(slug) => {
          navigate(`/productos/${slug}`);
          setIsMegaMenuOpen(false);
        }}
      />
    </header>
  );
};

export default Navbar;
