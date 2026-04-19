import { Link } from "react-router-dom";

const SportCard = ({ label, image, to }) => {
  return (
    <Link to={to} className="group relative h-[520px] overflow-hidden">
      {/* Imagen */}
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Overlay tipo editorial */}
      <div
        className="absolute inset-0 bg-gradient-to-t 
                      from-black/60 
                      via-black/10 
                      to-transparent 
                      transition-all duration-500"
      />

      {/* Título */}
      <h3
        className="absolute bottom-6 left-6 right-6 
               text-white 
               text-3xl 
               font-[var(--font-title)] 
               font-bold 
               uppercase 
               tracking-[0.02em] 
               leading-none"
      >
        {label}
      </h3>
    </Link>
  );
};

export default SportCard;
