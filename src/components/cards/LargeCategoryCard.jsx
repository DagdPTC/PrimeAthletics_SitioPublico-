import { Link } from "react-router-dom";

const LargeCategoryCard = ({ label, image, to }) => {
  return (
    <Link
      to={to}
      className="group relative h-[720px] w-full overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <h2 className="absolute bottom-6 left-6 text-white text-3xl font-black uppercase tracking-tight">
        {label}
      </h2>
    </Link>
  );
};

export default LargeCategoryCard;
