function HomeReviews() {
  const reviews = [
    {
      text: "Sus productos son buena calidad precio",
      date: "01/02/2026",
    },
    {
      text: "La calidad es increíble para un deportista",
      date: "20/02/2026",
    },
    {
      text: "Soy atleta y me parecen fantasticos las prendas deportivas, muy comodas",
      date: "03/01/2026",
    },
  ];

  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-semibold mb-10 tracking-wide">
        RESEÑAS
      </h2>

      <div className="grid grid-cols-3 gap-10 px-20">
        {reviews.map((r, i) => (
          <div key={i} className="flex flex-col items-center gap-3">

            <p className="text-sm italic max-w-[250px]">
              "{r.text}"
            </p>

            <span className="text-xs text-gray-500">
              {r.date}
            </span>

            {/* estrellas */}
            <div className="flex gap-1 text-gray-600">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>☆</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>

  );
}

export default HomeReviews;