import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  options,
  selected,
  onChange,
  isOpen,
  onToggle,
}) => {
  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative">
      {/* BOTÓN */}
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 text-sm 
                   border border-gray-300 rounded-full 
                   bg-white hover:bg-gray-100 
                   transition-all duration-200"
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute left-0 mt-2 w-full min-w-full 
            bg-white rounded-lg 
            border border-gray-200 
            shadow-md
            overflow-hidden transition-all duration-200 origin-top
            ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
      >
        <div className="p-3 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="accent-black"
              />
              <span className="text-sm capitalize">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
