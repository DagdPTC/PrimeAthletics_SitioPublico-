function Lanzamientos() {
  const products = [
  {
    name: "Zapatos air 67 edition",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    name: "Campera freshcold",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhpolhHaEoJwdIcKxlmTW_gYypvkXHnPT6g&s",
  },
  {
    name: "Camisa real madrid X Prime Athletics",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  },
  {
    name: "Zapatos colab Jonatan Santos",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80",
  },
];

  return (
    <div className="bg-gray-100 py-8 rounded-xl">
      <h2 className="text-center text-lg font-semibold mb-6">
        Proximos lanzamientos
      </h2>

      <div className="grid grid-cols-4 gap-6 px-10">
        {products.map((p, i) => (
          <div key={i} className="text-center">
            <div className="bg-black rounded-lg p-3">
              <img
                src={p.img}
                className="w-full h-[120px] object-cover"
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