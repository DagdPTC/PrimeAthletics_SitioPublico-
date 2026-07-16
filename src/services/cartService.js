const API_URL = "http://localhost:4000/api/shoppingCart";

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Error de carrito");
    error.status = response.status;
    throw error;
  }

  return data;
};

export const getMyCart = () => request(`${API_URL}/me`, { method: "GET" });

export const createCart = (items) =>
  request(API_URL, {
    method: "POST",
    body: JSON.stringify({ items, status: true }),
  });

export const updateCart = (id, items) =>
  request(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ items, status: true }),
  });

export const deleteCart = (id) =>
  request(`${API_URL}/${id}`, { method: "DELETE" });
