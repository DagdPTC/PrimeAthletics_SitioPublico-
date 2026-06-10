const VariantSelector = ({
  variants,
  activeVariant,
  setActiveVariant,
  setActiveImage,
  setSelectedSize,
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {variants.map((variant, i) => (
        <button
          key={i}
          onClick={() => {
            setActiveVariant(variant);
            setActiveImage(variant.images[0]); // Mantiene el objeto actual en la pantalla principal
            setSelectedSize(null);
          }}
          className={`border-2 p-1 ${
            activeVariant.color === variant.color
              ? "border-black"
              : "border-gray-300"
          }`}
        >
          <div className="w-16 aspect-square flex items-center justify-center">
            <img
              src={variant.images[0]?.url}
              className="w-full h-full object-contain"
              alt={variant.color}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;
