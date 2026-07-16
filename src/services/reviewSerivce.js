const API_URL = "http://localhost:4000/api/productsReview";

// Obtener las reseñas filtradas por el ID de MongoDB del producto
export const getReviewsByProduct = async (productId) => {
  const response = await fetch(`${API_URL}?productId=${productId}`);

  if (!response.ok) {
    throw new Error("Error al obtener las reseñas desde la base de datos");
  }
  return response.json();
};

export const insertReview = async (reviewData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // la cookie httpOnly viaja sola
    body: JSON.stringify(reviewData),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(
      data.message || "Error al guardar la reseña en el servidor",
    );
    error.status = response.status;
    throw error;
  }

  return data;
};
