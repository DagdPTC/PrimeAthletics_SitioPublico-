import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [cartCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimeout = useRef(null);

  const handleMouseEnter = (menu) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const isActiveRoute = (path) => location.pathname.startsWith(path);

  // 🔥 Estilos reutilizables
  const linkUnderline =
    "absolute bottom-[2px] left-0 h-0.5 bg-[#b9d9ff] transition-all duration-300";

  const navLinkBase =
    "relative py-2 text-sm font-medium transition-colors group";

  const navLinkActive = "text-gray-200";
  const navLinkInactive = "text-gray-500 hover:text-gray-200";

  const { totalItems, toggleDrawer } = useCart();

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

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {/* INICIO */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
              }
            >
              {({ isActive }) => (
                <>
                  Inicio
                  <span
                    className={`${linkUnderline} ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            {/* HOMBRES */}
            <div
              onMouseEnter={() => handleMouseEnter("hombres")}
              onMouseLeave={handleMouseLeave}
              className="relative h-full flex items-center group"
            >
              <button
                onClick={() => navigate("/hombres")}
                className={`${navLinkBase} ${
                  isActiveRoute("/hombres") ? navLinkActive : navLinkInactive
                } cursor-pointer`}
              >
                Hombres
                <span
                  className={`${linkUnderline} ${
                    isActiveRoute("/hombres")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </div>

            {/* MUJERES */}
            <div
              onMouseEnter={() => handleMouseEnter("mujeres")}
              onMouseLeave={handleMouseLeave}
              className="relative h-full flex items-center group"
            >
              <button
                onClick={() => navigate("/mujeres")}
                className={`${navLinkBase} ${
                  isActiveRoute("/mujeres") ? navLinkActive : navLinkInactive
                } cursor-pointer`}
              >
                Mujeres
                <span
                  className={`${linkUnderline} ${
                    isActiveRoute("/mujeres")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </div>

            {/* NIÑOS */}
            <div
              onMouseEnter={() => handleMouseEnter("ninos")}
              onMouseLeave={handleMouseLeave}
              className="relative h-full flex items-center group"
            >
              <button
                onClick={() => navigate("/ninos")}
                className={`${navLinkBase} ${
                  isActiveRoute("/ninos") ? navLinkActive : navLinkInactive
                } cursor-pointer`}
              >
                Niños
                <span
                  className={`${linkUnderline} ${
                    isActiveRoute("/ninos")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </div>

            {/* NOVEDADES */}
            <NavLink
              to="/novedades"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
              }
            >
              {({ isActive }) => (
                <>
                  Novedades
                  <span
                    className={`${linkUnderline} ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            {/* NOSOTROS */}
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
              }
            >
              {({ isActive }) => (
                <>
                  Nosotros
                  <span
                    className={`${linkUnderline} ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </nav>

          {/* CARRITO */}
          <button
            onClick={toggleDrawer}
            className="relative cursor-pointer group p-2 text-gray-400 hover:text-[#b9d9ff] transition-colors duration-200"
            aria-label="Abrir carrito"
          >
            {/* Icono SVG carrito */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            {/* Badge */}
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-0.5
  bg-[#b9d9ff] text-[#0f1117] text-[9px] font-black rounded-full
  flex items-center justify-center animate-pop"
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MEGAMENU */}
      <MegaMenu
        type={activeMenu}
        isOpen={!!activeMenu}
        onMouseEnter={() => handleMouseEnter(activeMenu)}
        onMouseLeave={handleMouseLeave}
        onCategoryClick={(slug) => {
          navigate(`/${activeMenu}/${slug}`);
          setActiveMenu(null);
        }}
      />
    </header>
  );
};

export default Navbar;
