// src/components/cards/HeroCategoryCard.jsx
import { Link } from "react-router-dom";

const HeroCategoryCard = ({
  label,
  description,
  slug,
  image,
  size = "normal",
}) => {
  const heightClass = size === "tall" ? "h-[520px]" : "h-[380px]";

  return (
    <Link
      to={`/productos/${slug}`}
      className={`group relative flex items-end overflow-hidden rounded-sm ${heightClass} w-full`}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Texto inferior */}
      <div className="relative z-10 p-6 w-full">
        {description && (
          <p className="text-[#b9d9ff] text-xs font-semibold tracking-[0.15em] uppercase mb-1">
            {description}
          </p>
        )}
        <h3 className="text-white font-black italic uppercase text-3xl leading-none tracking-tight">
          {label}
        </h3>
        {/* Línea animada al hover */}
        <span className="block mt-3 h-[2px] bg-[#b9d9ff] w-0 group-hover:w-16 transition-all duration-500" />
      </div>
    </Link>
  );
};

export default HeroCategoryCard;
