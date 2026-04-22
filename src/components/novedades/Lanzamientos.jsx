import { useNavigate } from "react-router-dom";

function Lanzamientos() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Zapatos air 67 edition",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      slug: "zapatos"
    },
    {
      name: "Campera freshcold",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhpolhHaEoJwdIcKxlmTW_gYypvkXHnPT6g&s",
      slug: "ropa"
    },
    {
      name: "Camisa real madrid X Prime Athletics",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      slug: "ropa"
    },
    {
      name: "Zapatos colab Jonatan Santos",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80",
      slug: "zapatos"
    },
  ];

  return (
    <div className="bg-gray-100 py-8 rounded-xl">
      <h2 className="text-center text-lg font-semibold mb-6">
        Proximos lanzamientos
      </h2>

      <div className="grid grid-cols-4 gap-6 px-10">
        {products.map((p, i) => (
          <div
            key={i}
            onClick={() => navigate(`/productos/${p.slug}`)}
            className="text-center cursor-pointer"
          >
            <div className="bg-black rounded-lg p-3 overflow-hidden">
              <img
                src={p.img}
                className="w-full h-[235px] object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <p className="text-xs mt-2">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lanzamientos;