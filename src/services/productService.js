const API_URL = "http://localhost:4000/api/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error getting products");
  }

  return response.json();
};
