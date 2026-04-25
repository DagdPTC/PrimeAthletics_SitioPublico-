import { useNavigate } from "react-router-dom";
import { megaMenuData } from "../data/categoriesData";

const MegaMenu = ({ type, isOpen, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate();
  const data = megaMenuData[type];

  if (!data) return null;

  const handleClick = (path) => {
    navigate(path);
  };

  const sectionOrder = ["novedades", "categorias", "ropa", "zapatos"];

  return (
    <div
      className={`fixed left-0 right-0 bg-[#0f1117] border-b border-white/8 z-40
        transform transition-all duration-200 ease-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Género label */}
        <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-600 uppercase mb-6">
          {{ hombres: "Hombres", mujeres: "Mujeres", ninos: "Niños" }[type]}
        </p>

        <div className="grid grid-cols-4 gap-10">
          {sectionOrder.map((key) => {
            const section = data[key];
            if (!section) return null;

            return (
              <div key={key} className="flex flex-col">
                {/* Encabezado de sección */}
                <p
                  className="text-[11px] font-semibold tracking-[0.15em] text-gray-500
                  uppercase mb-4 pb-2 border-b border-white/6"
                >
                  {section.label}
                </p>

                {/* Links */}
                <ul className="space-y-0.5">
                  {section.links.map(({ label, path }) => (
                    <li key={path}>
                      <button
                        onClick={() => handleClick(path)}
                        className="cursor-pointer group flex items-center gap-2 w-full text-left
                          py-1.5 text-[14px] text-gray-400 hover:text-white
                          transition-colors duration-150"
                      >
                        {/* Acento azul al hover */}
                        <span
                          className="w-0 h-px bg-[#b9d9ff] group-hover:w-3
                          transition-all duration-200 flex-shrink-0"
                        />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
