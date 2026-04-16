function HomeHero() {
  return (
    <div className="relative h-[350px] w-full">
      <img
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-white text-sm tracking-widest text-center">
          CARRUSEL ACERCA DE PRODUCTOS EN DESCUENTO
        </h1>
      </div>
    </div>
  );
}

export default HomeHero;