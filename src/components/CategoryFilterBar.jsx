// src/components/CategoryFilterBar.jsx
import { Link, useParams } from "react-router-dom";
import { allSubcategories } from "../data/categoriesData";

const CategoryFilterBar = () => {
  const { categoria } = useParams();

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Link
        to="/productos"
        className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-colors ${
          !categoria
            ? "bg-white text-[#0f1117] border-white"
            : "border-white/20 text-gray-400 hover:text-white hover:border-white/50"
        }`}
      >
        Todo
      </Link>

      {allSubcategories.map(({ label, slug }) => (
        <Link
          key={slug}
          to={`/productos/${slug}`}
          className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-colors ${
            categoria === slug
              ? "bg-[#b9d9ff] text-[#0f1117] border-[#b9d9ff]"
              : "border-white/20 text-gray-400 hover:text-white hover:border-white/50"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilterBar;
