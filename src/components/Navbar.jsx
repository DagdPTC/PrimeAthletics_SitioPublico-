import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/useAuth"; // ajustá el path real
import { useMegaMenu } from "../hooks/useMegaMenu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimeout = useRef(null);

  const { menuData } = useMegaMenu();

  if (location.pathname === "/login") return null;

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

  const { totalItems, toggleDrawer } = useCart();
  const auth = useAuth();
  const user = auth?.user ?? null;
  const logout = auth?.logout;

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileSubmenu(null);
  };

  const handleMobileNavigate = (path) => {
    closeMobileMenu();
    navigate(path);
  };

  const handleLogout = () => {
    closeMobileMenu();
    logout?.();
  };

  // estilos
  const linkUnderline =
    "absolute bottom-[2px] left-0 h-0.5 bg-[#b9d9ff] transition-all duration-300";

  const navLinkBase =
    "relative py-2 text-sm font-medium transition-colors group";

  const navLinkActive = "text-gray-200";
  const navLinkInactive = "text-gray-500 hover:text-gray-200";

  const mobileGenderLinks = [
    { key: "hombres", label: "Hombres", path: "/hombres" },
    { key: "mujeres", label: "Mujeres", path: "/mujeres" },
    { key: "ninos", label: "Niños", path: "/ninos" },
  ];

  const sectionOrder = ["novedades", "categorias", "ropa", "zapatos"];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1117] border-b border-white/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="shrink-0 text-white font-black italic tracking-tighter text-xl"
          >
            PRIME<span className="text-[#b9d9ff]">ATHLETICS</span>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 h-full">
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

          {/* ACCIONES */}
          <div className="flex items-center gap-3 md:gap-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="hidden md:inline-flex px-4 py-1.5 text-sm font-medium border border-white/15 text-gray-300 rounded-lg hover:border-red-400/50 hover:text-red-400 transition duration-200"
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden md:inline-flex px-4 py-1.5 text-sm font-medium border border-[#b9d9ff] text-[#b9d9ff] rounded-lg hover:bg-[#b9d9ff] hover:text-[#0f1117] transition duration-200"
              >
                Iniciar sesión
              </button>
            )}

            <button
              onClick={toggleDrawer}
              className="relative cursor-pointer group p-2 text-gray-400 hover:text-[#b9d9ff] transition-colors duration-200"
              aria-label="Abrir carrito"
            >
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

              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-0.5 bg-[#b9d9ff] text-[#0f1117] text-[9px] font-black rounded-full flex items-center justify-center animate-pop">
                  {totalItems}
                </span>
              )}
            </button>

            {/* MIS PEDIDOS — solo si hay sesión */}
            {user && (
              <button
                onClick={() => navigate("/mis-pedidos")}
                className="cursor-pointer p-2 text-gray-400 hover:text-[#b9d9ff] transition-colors duration-200"
                aria-label="Mis pedidos"
                title="Mis pedidos"
              >
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
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </button>
            )}

            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="md:hidden relative cursor-pointer p-2 text-gray-300 hover:text-[#b9d9ff] transition-colors duration-200"
              aria-label="Abrir menú"
              aria-expanded={isMobileOpen}
            >
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
              >
                {isMobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MEGAMENU — desktop */}
      <MegaMenu
        type={activeMenu}
        isOpen={!!activeMenu}
        onMouseEnter={() => handleMouseEnter(activeMenu)}
        onMouseLeave={handleMouseLeave}
        menuData={menuData}
      />

      {/* OVERLAY MOBILE */}
      <div
        onClick={closeMobileMenu}
        className={`md:hidden fixed inset-x-0 bottom-0 top-16 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-50 bg-[#0f1117] border-b border-white/8
          overflow-y-auto max-h-[calc(100vh-4rem)]
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isMobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <nav className="flex flex-col px-6 py-4">
          <button
            onClick={() => handleMobileNavigate("/")}
            className={`text-left py-3 text-sm font-medium border-b border-white/6 ${
              location.pathname === "/" ? "text-white" : "text-gray-400"
            }`}
          >
            Inicio
          </button>

          {/* Géneros con submenu desplegable */}
          {mobileGenderLinks.map(({ key, label, path }) => {
            const data = menuData?.[key];
            const isExpanded = mobileSubmenu === key;

            return (
              <div key={key} className="border-b border-white/6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleMobileNavigate(path)}
                    className={`flex-1 text-left py-3 text-sm font-medium ${
                      isActiveRoute(path) ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </button>
                  {data && (
                    <button
                      onClick={() =>
                        setMobileSubmenu((prev) => (prev === key ? null : key))
                      }
                      aria-label={`Ver categorías de ${label}`}
                      aria-expanded={isExpanded}
                      className="p-3 text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Panel de categorías desplegado */}
                {data && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isExpanded ? "max-h-[1000px] pb-4" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-5 pl-3 border-l border-white/8 ml-1">
                      {sectionOrder.map((sectionKey) => {
                        const section = data[sectionKey];
                        if (!section) return null;

                        return (
                          <div key={sectionKey} className="flex flex-col">
                            <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-2 pl-3">
                              {section.label}
                            </p>
                            <ul className="flex flex-col">
                              {section.links.map(
                                ({ label: linkLabel, path: linkPath }) => (
                                  <li key={linkPath}>
                                    <button
                                      onClick={() =>
                                        handleMobileNavigate(linkPath)
                                      }
                                      className="w-full text-left pl-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-150"
                                    >
                                      {linkLabel}
                                    </button>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={() => handleMobileNavigate("/novedades")}
            className={`text-left py-3 text-sm font-medium border-b border-white/6 ${
              location.pathname === "/novedades"
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            Novedades
          </button>

          <button
            onClick={() => handleMobileNavigate("/nosotros")}
            className={`text-left py-3 text-sm font-medium border-b border-white/6 ${
              location.pathname === "/nosotros" ? "text-white" : "text-gray-400"
            }`}
          >
            Nosotros
          </button>

          <div className="pt-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full py-3 text-sm font-medium border border-white/15 text-gray-300 rounded-lg hover:border-red-400/50 hover:text-red-400 transition duration-200"
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                onClick={() => handleMobileNavigate("/login")}
                className="w-full py-3 text-sm font-medium border border-[#b9d9ff] text-[#b9d9ff] rounded-lg hover:bg-[#b9d9ff] hover:text-[#0f1117] transition duration-200"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
