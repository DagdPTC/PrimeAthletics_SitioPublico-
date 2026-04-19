import { Link } from "react-router-dom";

const LargeCategoryCard = ({ label, image, to }) => {
  return (
    <Link
      to={to}
      className="group relative h-[720px] w-full overflow-hidden cursor-pointer"
    >
      {/* Imagen */}
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Overlay tipo Puma */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

      {/* Título */}
      <h2
        className="absolute bottom-6 left-6 text-white 
                     text-4xl 
                     uppercase 
                     tracking-[0.03em] 
                     leading-none 
                     font-[var(--font-title)]
                     transition-all duration-300
                     group-hover:translate-y-[-4px] font-bold"
      >
        {label}
      </h2>
    </Link>
  );
};

export default LargeCategoryCard;
