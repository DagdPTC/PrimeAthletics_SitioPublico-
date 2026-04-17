import React from "react";
import { categories, featuredProducts } from "../data/categoriesData";

const MegaMenu = ({
  type,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onCategoryClick,
}) => {
  // 👇 Puedes personalizar por género después
  const genderLabel = {
    hombres: "Hombres",
    mujeres: "Mujeres",
    ninos: "Niños",
  };

  return (
    <div
      className={`fixed left-0 right-0 bg-[#0f1117] border-b border-white/8 z-50
  transform transition-all duration-200 ease-out
  ${
    isOpen
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 -translate-y-6 scale-95 pointer-events-none"
  }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 text-left">
        {/* 👇 Título opcional */}
        <p className="text-xs text-gray-600 mb-6 uppercase tracking-widest">
          {genderLabel[type]}
        </p>

        <div className="grid grid-cols-4 gap-10">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="flex flex-col items-start">
              <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-4">
                {category.label}
              </p>

              <ul className="space-y-0.5 w-full">
                {category.items.map(({ label, slug }) => (
                  <li key={slug}>
                    <button
                      onClick={() => onCategoryClick(slug)}
                      className="block w-full text-left text-[15px] text-gray-400 py-1.5 hover:text-white transition-colors cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* DESTACADOS */}
          <div className="border-l border-white/8 pl-10 flex flex-col items-start">
            <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-600 uppercase mb-4">
              Destacados
            </p>

            <ul className="space-y-1 w-full">
              {featuredProducts.map(({ label, slug, tag }) => (
                <li key={slug}>
                  <button
                    onClick={() => onCategoryClick(slug)}
                    className="group flex items-center justify-between w-full py-2 border-b border-white/5 last:border-none cursor-pointer"
                  >
                    <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors">
                      {label}
                    </span>

                    {tag && (
                      <span className="ml-3 text-[10px] text-[#b9d9ff] border border-[#b9d9ff]/30 px-2 py-0.5 rounded-sm">
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
  );
};

export default MegaMenu;
