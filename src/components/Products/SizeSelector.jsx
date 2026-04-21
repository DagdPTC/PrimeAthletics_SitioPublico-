const SizeSelector = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div>
      <p className="mb-2 font-medium">Selecciona talla</p>

      <div className="grid grid-cols-3 gap-3">
        {sizes.map((s, i) => (
          <button
            key={i}
            disabled={s.stock === 0}
            onClick={() => setSelectedSize(s.size)}
            className={`border py-3 text-sm ${
              s.stock === 0
                ? "bg-gray-100 text-gray-400"
                : selectedSize === s.size
                  ? "bg-black text-white border-black"
                  : "hover:border-black"
            }`}
          >
            {s.size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
