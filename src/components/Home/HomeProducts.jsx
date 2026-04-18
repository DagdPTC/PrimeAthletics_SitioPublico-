function HomeProducts() {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-3 gap-6">

        <div className="h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default HomeProducts;