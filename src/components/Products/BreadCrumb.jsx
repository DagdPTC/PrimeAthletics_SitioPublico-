import { Link, useParams } from "react-router-dom";

const labels = {
  hombres: "Hombres",
  mujeres: "Mujeres",
  ninos: "Niños",
  ofertas: "Ofertas",
  novedades: "Novedades",
};

const BreadCrumb = () => {
  const { gender, category, sport, productType } = useParams();

  const format = (value) => labels[value] || value;

  return (
    <div className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
      {/* HOME */}
      <Link to="/" className="hover:underline">
        Home
      </Link>

      <span>/</span>

      {/* GENDER */}
      <Link to={`/${gender}`} className="hover:underline">
        {format(gender)}
      </Link>

      {/* CATEGORY (incluye ofertas y novedades) */}
      {category && (
        <>
          <span>/</span>
          {sport || productType ? (
            <Link to={`/${gender}/${category}`} className="hover:underline">
              {format(category)}
            </Link>
          ) : (
            <span className="text-black font-medium">{format(category)}</span>
          )}
        </>
      )}

      {/* SPORT */}
      {sport && (
        <>
          <span>/</span>
          <span className="text-black font-medium capitalize">{sport}</span>
        </>
      )}

      {/* PRODUCT TYPE */}
      {productType && (
        <>
          <span>/</span>
          <span className="text-black font-medium capitalize">
            {productType}
          </span>
        </>
      )}
    </div>
  );
};

export default BreadCrumb;
