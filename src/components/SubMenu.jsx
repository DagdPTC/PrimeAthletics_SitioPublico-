import { Link } from "react-router-dom";

const SubMenu = ({
  title = "Hombres",
  base = "/hombres",
  items = [
    { label: "Todos", slug: "" },
    { label: "Tennis", slug: "zapatos" },
    { label: "Ropa", slug: "ropa" },
  ],
}) => {
  return (
    <div className="w-full border-b border-black/10 bg-white">
      <div className="w-full px-6 py-4 flex items-center gap-8">
        {/* Título dinámico */}
        <span className="text-lg font-semibold">{title}</span>

        {/* Links dinámicos */}
        <div className="flex gap-6 text-sm">
          {items.map(({ label, slug }) => (
            <Link
              key={label}
              to={`${base}/${slug}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
