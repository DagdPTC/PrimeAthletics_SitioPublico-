import { useState } from "react";

const ProductCard = ({ product }) => {
  const [activeVariant, setActiveVariant] = useState(
    product.variants?.[0] || null,
  );

  if (!activeVariant) return null;

  // 🔥 DESCUENTO DINÁMICO
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;

  // 🔥 NUEVO
  const isNewProduct = (date) => {
    const created = new Date(date);
    const now = new Date();

    const diffDays = (now - created) / (1000 * 60 * 60 * 24);

    return diffDays <= 60;
  };

  const isNew = isNewProduct(product.createdAt);

  return (
    <div className="group cursor-pointer">
      {/* IMAGEN */}
      <div className="relative bg-gray-100 w-full aspect-square overflow-hidden">
        <img
          src={activeVariant.images?.[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* DESCUENTO */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}

        {/* NUEVO */}
        {isNew && !hasDiscount && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Nuevo
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1">
        {/* NOMBRE */}
        <p className="text-sm font-medium">{product.name}</p>

        {/* CATEGORÍA */}
        <p className="text-xs text-gray-500 capitalize">
          {product.product_type} de {product.sport || "entrenamiento"} para{" "}
          {product.gender}
        </p>

        {/* 🔥 TEXTO OFF (OPCIONAL PRO) */}
        {hasDiscount && (
          <p className="text-xs text-red-500 font-medium">
            {product.discount}% OFF
          </p>
        )}

        {/* COLORES */}
        <div className="flex gap-2 mt-2">
          {product.variants.map((variant, i) => (
            <button
              key={i}
              onClick={() => setActiveVariant(variant)}
              className={`w-4 h-4 rounded-full border-2 transition ${
                activeVariant.color === variant.color
                  ? "border-black scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: variant.color }}
            />
          ))}
        </div>

        {/* 💰 PRECIO */}
        <div className="mt-2">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              {/* PRECIO FINAL */}
              <span className="text-sm font-semibold text-red-600">
                ${finalPrice}
              </span>

              {/* PRECIO ORIGINAL */}
              <span className="text-xs text-gray-400 line-through">
                ${product.price}
              </span>
            </div>
          ) : (
            <p className="text-sm font-semibold">${product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
