const API_URL = "http://localhost:4000/api/orders";

export const createOrder = async (orderData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(orderData),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Error al crear la orden");
    error.status = response.status;
    throw error;
  }

  return data;
};

export const getMyOrders = async () => {
  const response = await fetch(`${API_URL}/me`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json().catch(() => []);

  if (!response.ok) {
    const error = new Error(data.message || "Error al obtener tus pedidos");
    error.status = response.status;
    throw error;
  }

  return data;
};
