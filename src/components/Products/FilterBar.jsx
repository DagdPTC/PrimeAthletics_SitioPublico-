import { useState } from "react";
import FilterDropdown from "./FilterDropDown";

const FiltersBar = ({
  config,
  availableFilters,
  activeFilters,
  setActiveFilters,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleChange = (key, values) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: values,
    }));
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {config.map(({ key, label }) => (
        <FilterDropdown
          key={key}
          label={label}
          options={availableFilters[key] || []}
          selected={activeFilters[key] || []}
          onChange={(values) => handleChange(key, values)}
          isOpen={openDropdown === key}
          onToggle={() => setOpenDropdown(openDropdown === key ? null : key)}
        />
      ))}
    </div>
  );
};

export default FiltersBar;
