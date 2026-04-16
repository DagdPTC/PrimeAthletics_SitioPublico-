import { useNavigate } from "react-router-dom";

function HomeCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "ZAPATOS DEPORTIVOS",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      slug: "zapatos"
    },
    {
      title: "ROPA DEPORTIVA",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      slug: "ropa"
    },
    {
      title: "UTENSILIOS DEPORTIVOS",
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
      slug: "utensilios"
    },
    {
      title: "CREATINA",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80",
      slug: "suplementos"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {categories.map((item, i) => (
        <div
          key={i}
          onClick={() => navigate(`/productos/${item.slug}`)}
          className="relative rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            src={item.img}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />

          <div className="absolute bottom-0 w-full bg-black/60 p-2 text-center">
            <h3 className="text-white text-sm">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCategories;