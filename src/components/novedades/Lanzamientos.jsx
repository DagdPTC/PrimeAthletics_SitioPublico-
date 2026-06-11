import { useNavigate } from "react-router-dom";

function Lanzamientos({ products }) {
  const navigate = useNavigate();

  const routes = [
    "/hombres",
    "/mujeres/zapatos",
    "/hombres/ropa",
    "/hombres/zapatos",
  ];

  return (
    <div className="bg-gray-100 py-8 rounded-xl">
      <h2 className="text-center text-lg font-semibold mb-6">
        Próximos lanzamientos
      </h2>

      <div className="grid grid-cols-4 gap-6 px-10">
        {products.map((p, index) => (
          <div
            key={p._id}
            onClick={() => navigate(routes[index])}
            className="text-center cursor-pointer"
          >
            <div className="bg-black rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={p.cardImage}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <p className="text-xs mt-3">{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lanzamientos;