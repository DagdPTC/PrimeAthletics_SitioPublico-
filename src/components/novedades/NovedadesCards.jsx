import { useNavigate } from "react-router-dom";

function NovedadesCards({ cards }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card) => (
        <div
          key={card._id}
          onClick={() => navigate("/hombres/ropa")}
          className="relative h-[450px] rounded-xl overflow-hidden cursor-pointer group"
        >
          <img
            src={card.cardImage}
            alt={card.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NovedadesCards;