import React from "react";
import { useParams } from "react-router-dom";

const ProductsScreen = () => {
  const { categoria } = useParams(); // Obtiene "running", "pants", etc. de la URL

  return (
    <div className="animate-fadeIn">
      <h2 className="text-4xl font-black italic text-gray-900 uppercase">
        {categoria ? `Categoría: ${categoria}` : "Todos los Productos"} [cite:
        15]
      </h2>
      <p className="text-gray-500 mt-2">
        Explora nuestra selección élite de {categoria || "deportes"}.
      </p>

      {/* Aquí iría tu grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm italic text-gray-400">
          Próximamente productos de {categoria || "todas las áreas"}... [cite:
          9]
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
