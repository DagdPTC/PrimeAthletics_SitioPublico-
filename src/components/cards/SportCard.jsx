import { Link } from "react-router-dom";

const SportCard = ({ label, image, to }) => {
  return (
    <Link to={to} className="group relative h-[65vh] overflow-hidden">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25" />

      <h3 className="absolute bottom-6 left-6 text-white text-xl font-extrabold uppercase tracking-wider">
        {label}
      </h3>
    </Link>
  );
};

export default SportCard;
