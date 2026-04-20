import { useState } from "react";

const ProductCard = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <div className="group cursor-pointer">
      {/* IMAGEN */}
      <div className="bg-gray-100 w-full aspect-square overflow-hidden">
        <img
          src={activeColor.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
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

        {/* COLORES */}
        <div className="flex gap-2 mt-2">
          {product.colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveColor(c)}
              className={`w-4 h-4 rounded-full border ${
                activeColor.name === c.name ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: c.name }}
            />
          ))}
        </div>

        {/* PRECIO */}
        <p className="text-sm font-semibold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
