function NovedadesCards() {
  const cards = [
    {
      title: "Colaboracion mas reciente",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    },
    {
      title: "Colaboracion mas reciente",
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div key={i} className="relative h-[200px] rounded-xl overflow-hidden">
          <img
            src={card.img}
            className="w-full h-full object-cover"
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