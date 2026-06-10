// 🔥 Cambiado para coincidir exactamente con tu app.use("/api/productsReview")
const API_URL = "http://localhost:4000/api/productsReview";

// Obtener las reseñas filtradas por el ID de MongoDB del producto
export const getReviewsByProduct = async (productId) => {
  const response = await fetch(`${API_URL}?productId=${productId}`);

  if (!response.ok) {
    throw new Error("Error al obtener las reseñas desde la base de datos");
  }
  return response.json();
};
