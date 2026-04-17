// src/components/cards/WideCategoryCard.jsx
import { Link } from "react-router-dom";

const WideCategoryCard = ({ label, slug, image, tag }) => (
  <Link
    to={`/productos/${slug}`}
    className="group relative flex items-end overflow-hidden rounded-sm h-[180px] w-full"
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

    <div className="relative z-10 p-4 w-full flex items-end justify-between">
      <h3 className="text-white font-black italic uppercase text-xl leading-none">
        {label}
      </h3>
      {tag && (
        <span className="text-[10px] font-semibold tracking-wide text-[#b9d9ff] border border-[#b9d9ff]/30 px-2 py-0.5 rounded-sm shrink-0 ml-3">
          {tag}
        </span>
      )}
    </div>
  </Link>
);

export default WideCategoryCard;
