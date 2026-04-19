function NovedadesHero() {
  return (
    <div className="relative h-[250px] rounded-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-end p-6 bg-black/40">
        <h2 className="text-white text-lg font-semibold">
          • Novedades
        </h2>
      </div>
    </div>
  );
}

export default NovedadesHero;