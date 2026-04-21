import VariantSelector from "./VariantSelector";
import SizeSelector from "./SizeSelector";
import { useCart } from "../../context/CartContext";

const ProductInfo = ({
  product,
  activeVariant,
  setActiveVariant,
  setActiveImage,
  selectedSize,
  setSelectedSize,
}) => {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;

  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="text-gray-500">
        {product.product_type} de {product.sport}
      </p>

      {/* PRECIO */}
      <div>
        {hasDiscount ? (
          <div className="flex gap-3 items-center">
            <span className="text-2xl font-bold text-red-600">
              ${finalPrice}
            </span>
            <span className="line-through text-gray-400">${product.price}</span>
            <span className="text-red-500 text-sm">
              {product.discount}% OFF
            </span>
          </div>
        ) : (
          <p className="text-2xl">${product.price}</p>
        )}
      </div>

      <VariantSelector
        variants={product.variants}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
        setActiveImage={setActiveImage}
        setSelectedSize={setSelectedSize}
      />

      <SizeSelector
        sizes={activeVariant.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <button
        disabled={!selectedSize}
        onClick={() =>
          selectedSize && addToCart(product, activeVariant, selectedSize)
        }
        className={`py-3 font-semibold text-sm tracking-wide transition-colors ${
          selectedSize
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Añadir al carrito
      </button>

      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductInfo;
