import { Link } from "react-router-dom";

const CategoryGridCard = ({ image, label, to }) => {
  return (
    <Link to={to} className="group relative w-full h-full overflow-hidden">
      {/* Imagen */}
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />

      {/* Texto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white text-3xl md:text-5xl 
                       font-[var(--font-title)] 
                       font-bold 
                       uppercase 
                       tracking-[0.02em] 
                       leading-none 
                       text-center"
        >
          {label}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryGridCard;
