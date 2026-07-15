import { useState, useEffect } from "react";
import {
  getReviewsByProduct,
  insertReview,
} from "../../services/reviewSerivce.js";

const ReviewsSection = ({ productId }) => {
  const [productReviews, setProductReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Estados para el Formulario ---
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");
  const [hoverRating, setHoverRating] = useState(0); // Para efecto visual de las estrellas
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  // Petición para cargar las reseñas existentes
  const fetchReviews = async () => {
    try {
      const data = await getReviewsByProduct(productId);
      const filteredReviews = data.filter(
        (r) => String(r.product_id) === String(productId),
      );
      setProductReviews(filteredReviews);
      setError(null);
    } catch (err) {
      console.error("Error al cargar reseñas:", err);
      setError("No se pudieron cargar las reseñas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setFormMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormMessage("");

      // Armamos el objeto con la estructura exacta que pide tu Backend
      const newReviewData = {
        product_id: productId,
        customer_id: "6a26612e1a16ec64650498aa", // 💡 Temporal: ID dummy de cliente hasta conectar tu LoginContext
        title: title,
        rating: rating,
        description: description,
        status: true,
      };

      await insertReview(newReviewData);

      // Feedback positivo y limpiar el formulario
      setFormMessage("¡Reseña publicada con éxito!");
      setTitle("");
      setDescription("");
      setRating(5);

      // Recargar la lista de reseñas al instante sin recargar la página entera
      await fetchReviews();
    } catch (err) {
      console.error(err);
      setFormMessage("No se pudo enviar la reseña. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calcular el promedio dinámico
  const average =
    productReviews.length > 0
      ? productReviews.reduce((acc, r) => acc + r.rating, 0) /
        productReviews.length
      : 0;

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">
      {/* ─── COLUMNA IZQUIERDA: FORMULARIO PARA AGREGAR RESEÑA ─── */}
      <div className="bg-white border p-6 rounded-lg shadow-sm h-fit">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Escribir una reseña
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selector de Estrellas Interactivo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tu calificación
            </label>
            <div className="flex gap-1 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-colors duration-100"
                >
                  <span
                    className={
                      (hoverRating || rating) >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Título */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título resumido
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Súper cómodos, excelente calidad"
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-black"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comentario detallado
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Cuéntale a otros qué te pareció el ajuste, el material o el diseño..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:border-black resize-none"
            />
          </div>

          {/* Mensajes de feedback */}
          {formMessage && (
            <p
              className={`text-xs font-medium ${formMessage.includes("éxito") ? "text-green-600" : "text-red-500"}`}
            >
              {formMessage}
            </p>
          )}

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2.5 rounded-md font-medium text-sm hover:bg-zinc-800 transition disabled:bg-gray-400 cursor-pointer"
          >
            {isSubmitting ? "Enviando..." : "Publicar Reseña"}
          </button>
        </form>
      </div>

      {/* ─── COLUMNA DERECHA: PROMEDIO Y LISTADO DESDE MONGO ─── */}
      <div className="w-full">
        <h2 className="text-xl font-bold mb-6">Opiniones de los clientes</h2>

        {loading ? (
          <p className="text-sm text-gray-500 animate-pulse">
            Cargando comentarios...
          </p>
        ) : error || productReviews.length === 0 ? (
          <div className="bg-gray-50 border p-6 rounded-md text-center">
            <p className="text-gray-500 text-sm">
              {error ||
                "Este producto aún no tiene opiniones. ¡Sé el primero en calificarlo!"}
            </p>
          </div>
        ) : (
          <>
            {/* Sección del Promedio Numérico */}
            <div className="flex items-center gap-3 mb-8 bg-gray-50 p-4 rounded-md w-fit">
              <span className="text-4xl font-extrabold text-gray-900">
                {average.toFixed(1)}
              </span>
              <div>
                <div className="flex text-yellow-500 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>{i <= Math.round(average) ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Basado en {productReviews.length} reseñas
                </p>
              </div>
            </div>

            {/* Listado Mapeado */}
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
              {productReviews.map((r) => (
                <div key={r._id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        {r.title || "Sin título"}
                      </h4>
                      <div className="flex text-yellow-500 text-xs mt-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i}>{i <= r.rating ? "★" : "☆"}</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {r.reviewed_at
                        ? new Date(r.reviewed_at).toLocaleDateString()
                        : "Reciente"}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;
