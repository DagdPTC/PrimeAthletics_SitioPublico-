import { Link, useParams } from "react-router-dom";

const BreadCrumb = () => {
  const { gender, category } = useParams();

  return (
    <div className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>

      <span className="mx-2">/</span>

      <Link to={`/${gender}`} className="hover:underline capitalize">
        {gender}
      </Link>

      <span className="mx-2">/</span>

      <span className="text-black capitalize">{category}</span>
    </div>
  );
};

export default BreadCrumb;
