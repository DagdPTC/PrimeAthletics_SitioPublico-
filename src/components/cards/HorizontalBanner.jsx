import { Link } from "react-router-dom";

const HorizontalBanner = ({ image, title, to }) => {
  return (
    <Link
      to={to}
      className="group relative w-full h-[390px] md:h-[480px] overflow-hidden block"
    >
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />

      {/* Overlay oscuro suave */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Título */}
        <h2
          className="text-white text-3xl md:text-5xl 
                       font-[var(--font-title)] 
                       font-bold 
                       uppercase 
                       tracking-[0.02em] 
                       leading-none mb-4"
        >
          {title}
        </h2>

        {/* Botón outline */}
      </div>
    </Link>
  );
};

export default HorizontalBanner;
