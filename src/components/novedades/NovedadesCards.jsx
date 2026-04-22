import { useNavigate } from "react-router-dom";

function NovedadesCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Colaboracion mas reciente",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", // zapatillas
      slug: "zapatos"
    },
    {
      title: "Colaboracion mas reciente",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/635805/01/mod01/fnd/CHL/w/640/h/640/fmt/png", 
      slug: "ropa"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => navigate(`/productos/${card.slug}`)}
          className="relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            src={card.img}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h3 className="text-white text-sm font-medium">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NovedadesCards;