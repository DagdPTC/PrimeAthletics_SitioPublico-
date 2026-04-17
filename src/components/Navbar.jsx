import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";

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
          <Link
            to="/carrito"
            className="relative text-gray-500 hover:text-gray-200 transition-colors p-1"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b9d9ff] text-[#0f1117] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
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
