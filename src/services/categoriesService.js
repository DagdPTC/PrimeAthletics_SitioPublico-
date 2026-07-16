const API_URL = "http://localhost:4000/api/categories";

export const getMenuCategories = async () => {
  const response = await fetch(`${API_URL}/menu`);

  if (!response.ok) {
    throw new Error("Error al obtener las categorías");
  }

  return response.json();
};
