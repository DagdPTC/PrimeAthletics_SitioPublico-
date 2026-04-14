import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const categories = {
  zapatos: {
    label: "Zapatos",
    items: [
      { label: "Running", slug: "running" },
      { label: "Caminar", slug: "caminar" },
      { label: "Yoga", slug: "yoga" },
      { label: "Pilates", slug: "pilates" },
      { label: "Montaña", slug: "montana" },
    ],
  },
  utencilios: {
    label: "Utencilios",
    items: [
      { label: "Balones", slug: "balones" },
      { label: "Pesas", slug: "pesas" },
      { label: "Cintas elásticas", slug: "cintas" },
    ],
  },
  ropa: {
    label: "Ropa Deportiva",
    items: [
      { label: "Camisetas", slug: "camisetas" },
      { label: "Pants", slug: "pants" },
      { label: "Shorts", slug: "shorts" },
    ],
  },
};

const featuredProducts = [
  {
    label: "Zapatos Jordan última edición",
    slug: "jordan-ultima-edicion",
    tag: "Nuevo",
  },
  { label: "Balón Mikasa", slug: "balon-mikasa", tag: null },
  { label: "Tacos colab Vinicius Jr", slug: "tacos-vinicius-jr", tag: "Colab" },
  { label: "Mancuernas 50 Lbs", slug: "mancuernas-50lbs", tag: null },
  { label: "Calcetines Cr7", slug: "calcetines-cr7", tag: null },
];

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const navigate = useNavigate();
  const closeTimeout = useRef(null);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white text-sm font-medium tracking-wide transition-colors"
      : "text-gray-500 text-sm font-medium tracking-wide hover:text-white transition-colors";

  const handleCategoryClick = (slug) => {
    navigate(`/productos/${slug}`);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Abre inmediatamente
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsMegaMenuOpen(true);
  };

  // Da 150ms de gracia antes de cerrar — tiempo suficiente para mover el mouse al panel
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1117]">
      {/* Barra superior */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-white font-black italic tracking-tighter text-xl leading-none"
          >
            PRIME<span className="text-[#b9d9ff]">ATHLETICS</span>
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkStyles}>
              Inicio
            </NavLink>

            {/* Botón trigger — abre el mega menú */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigate("/productos/running")}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                  isMegaMenuOpen
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Productos
                <svg
                  className={`w-3 h-3 mt-px transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <NavLink to="/novedades" className={navLinkStyles}>
              Novedades
            </NavLink>
            <NavLink to="/nosotros" className={navLinkStyles}>
              Nosotros
            </NavLink>
          </nav>

          {/* Acciones right */}
          <div className="flex items-center gap-4">
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

            {/* Hamburguesa — mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-500 hover:text-white transition-colors p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="h-px bg-white/8" />

      {/* Mega menú — fixed, con su propio handleMouseEnter/Leave para cancelar el timeout */}
      {isMegaMenuOpen && (
        <div
          className="fixed left-0 right-0 bg-[#0f1117] border-b border-white/8 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-10">
              {/* Columnas de categorías */}
              {Object.entries(categories).map(([key, category]) => (
                <div key={key}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-4">
                    {category.label}
                  </p>
                  <ul className="space-y-0.5">
                    {category.items.map(({ label, slug }) => (
                      <li key={slug}>
                        <button
                          onClick={() => handleCategoryClick(slug)}
                          className="block w-full text-left text-[15px] text-gray-400 py-1.5 hover:text-white transition-colors"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Panel destacados */}
              <div className="border-l border-white/8 pl-10">
                <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-4">
                  Destacados
                </p>
                <ul className="space-y-1">
                  {featuredProducts.map(({ label, slug, tag }) => (
                    <li key={slug}>
                      <button
                        onClick={() => handleCategoryClick(slug)}
                        className="group flex items-center justify-between w-full py-2 border-b border-white/5 last:border-none"
                      >
                        <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors text-left">
                          {label}
                        </span>
                        {tag && (
                          <span className="ml-3 shrink-0 text-[10px] font-semibold tracking-wide text-[#b9d9ff] border border-[#b9d9ff]/30 px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menú mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1117] border-b border-white/8">
          <div className="px-6 py-6 space-y-6">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white text-sm font-medium tracking-wide"
            >
              Inicio
            </NavLink>

            {Object.entries(categories).map(([key, category]) => (
              <div key={key}>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-3">
                  {category.label}
                </p>
                <ul className="space-y-2 pl-1">
                  {category.items.map(({ label, slug }) => (
                    <li key={slug}>
                      <button
                        onClick={() => handleCategoryClick(slug)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <NavLink
              to="/novedades"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white text-sm font-medium tracking-wide"
            >
              Novedades
            </NavLink>
            <NavLink
              to="/nosotros"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white text-sm font-medium tracking-wide"
            >
              Nosotros
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
