import { reviews } from "../../data/reviews.js";

const ReviewsSection = ({ productId }) => {
  const productReviews = reviews.filter((r) => r.productId === productId);

  if (productReviews.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold mb-2">Reseñas</h2>
        <p className="text-gray-500">Este producto aún no tiene reseñas.</p>
      </div>
    );
  }

  const average =
    productReviews.reduce((acc, r) => acc + r.rating, 0) /
    productReviews.length;

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto">
      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-6 text-center">Reseñas</h2>

      {/* PROMEDIO */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <span className="text-4xl font-bold">{average.toFixed(1)}</span>

        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i}>{i <= Math.round(average) ? "⭐" : "☆"}</span>
          ))}
        </div>

        <span className="text-gray-500">({productReviews.length})</span>
      </div>

      {/* LISTA */}
      <div className="space-y-6">
        {productReviews.map((r) => (
          <div key={r.id} className="border-b pb-6">
            <div className="flex justify-between">
              <p className="font-medium">{r.user}</p>
              <p className="text-sm text-gray-400">{r.date}</p>
            </div>

            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>{i <= r.rating ? "⭐" : "☆"}</span>
              ))}
            </div>

            <p className="text-gray-600 mt-2">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
