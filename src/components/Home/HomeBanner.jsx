function HomeBanner() {
  return (
    <div className="relative h-[200px]">
      <img
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h2 className="text-white text-sm tracking-widest">
          SECCION DE FRASE MOTIVADORA O ESLOGAN
        </h2>
      </div>
    </div>
  );
}

export default HomeBanner;