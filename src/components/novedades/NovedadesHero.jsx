function NovedadesHero({ hero }) {

  if (!hero) return null;

  return (
    <div className="relative h-[250px] rounded-xl overflow-hidden">

      <img
        src={hero.bannerImage}
        alt={hero.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-end p-6 bg-black/40">
        <h2 className="text-white text-lg font-semibold">
          • {hero.title}
        </h2>
      </div>

    </div>
  );
}

export default NovedadesHero;