const API_URL = "http://localhost:4000/api/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error getting products");
  return response.json();
};

// 🔥 Agrega esta función si no la tenías armada así
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Producto no encontrado");
  return response.json();
};
