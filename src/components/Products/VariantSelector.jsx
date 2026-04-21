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
            setActiveImage(variant.images[0]);
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
              src={variant.images[0]}
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;
