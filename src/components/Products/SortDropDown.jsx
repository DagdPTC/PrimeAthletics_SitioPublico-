import { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { label: "Recomendados", value: "default" },
  { label: "Precio: menor a mayor", value: "price_asc" },
  { label: "Precio: mayor a menor", value: "price_desc" },
  { label: "Más nuevos", value: "newest" },
];

const SortDropdown = ({ sort, setSort }) => {
  const [open, setOpen] = useState(false);

  const current = options.find((o) => o.value === sort);

  return (
    <div className="relative">
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-sm 
                   border border-gray-300 rounded-full 
                   bg-white hover:bg-gray-100 transition"
      >
        {current?.label}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute right-0 mt-2 w-full min-w-full 
        bg-white border border-gray-200 rounded-lg shadow-md
        transition-all duration-200 origin-top z-50
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={() => {
              setSort(opt.value);
              setOpen(false);
            }}
            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
              ${sort === opt.value ? "font-semibold" : ""}
            `}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
