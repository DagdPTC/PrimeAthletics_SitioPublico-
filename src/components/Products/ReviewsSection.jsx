import { useState, useEffect } from "react";
import { getReviewsByProduct } from "../../services/reviewSerivce.js";

const ReviewsSection = ({ productId }) => {
  const [productReviews, setProductReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviewsByProduct(productId);

        // 🔥 CORREGIDO: Filtramos usando r.product_id que es como viene de tu BD
        const filteredReviews = data.filter(
          (r) => String(r.product_id) === String(productId),
        );

        setProductReviews(filteredReviews);
        setError(null);
      } catch (err) {
        console.error("Error al cargar reseñas de la base de datos:", err);
        setError("No se pudieron cargar las reseñas.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="mt-10 text-center text-sm text-gray-500">
        <p className="animate-pulse">Cargando comentarios reales...</p>
      </div>
    );
  }

  if (error || productReviews.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold mb-2">Reseñas</h2>
        <p className="text-gray-500">
          Este producto aún no tiene reseñas en la base de datos.
        </p>
      </div>
    );
  }

  const average =
    productReviews.reduce((acc, r) => acc + r.rating, 0) /
    productReviews.length;

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto">
      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Reseñas del Producto
      </h2>

      {/* PROMEDIO */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <span className="text-4xl font-bold">{average.toFixed(1)}</span>
        <div className="flex text-yellow-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i}>{i <= Math.round(average) ? "★" : "☆"}</span>
          ))}
        </div>
        <span className="text-gray-500">({productReviews.length})</span>
      </div>

      {/* LISTA DE RESEÑAS */}
      <div className="space-y-6">
        {productReviews.map((r) => (
          <div key={r._id} className="border-b pb-6">
            <div className="flex justify-between">
              {/* Usamos el título o el ID del cliente según lo que tengas guardado */}
              <p className="font-medium text-gray-800">
                {r.title || `Usuario (${r.customer_id})`}
              </p>
              <p className="text-sm text-gray-400">
                {r.reviewed_at ? r.reviewed_at.split("T")[0] : "Reciente"}
              </p>
            </div>

            <div className="flex text-yellow-500 mt-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>{i <= r.rating ? "★" : "☆"}</span>
              ))}
            </div>

            {/* 🔥 CORREGIDO: Tu controlador maneja .description, no .comment */}
            <p className="text-gray-600 mt-2 text-sm">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
