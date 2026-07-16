import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrders } from "../services/orderService";

const statusLabel = (order) => {
  if (!order.payment_status)
    return { text: "Pago pendiente", color: "text-amber-600 bg-amber-50" };
  if (!order.order_status)
    return { text: "En preparación", color: "text-blue-600 bg-blue-50" };
  return { text: "Entregado", color: "text-green-600 bg-green-50" };
};

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (err) {
        setError("No se pudieron cargar tus pedidos.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500 font-medium">{error}</p>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="text-5xl">📦</span>
        <h2 className="text-xl font-bold text-gray-800">
          Aún no tienes pedidos
        </h2>
        <p className="text-sm text-gray-500">Tus compras aparecerán aquí.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-2 bg-black text-white px-6 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Ir a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-black text-gray-900 mb-8">Mis pedidos</h1>

      <div className="flex flex-col gap-5">
        {orders.map((order) => {
          const status = statusLabel(order);
          const items = order.shopping_cart_id?.items ?? [];

          return (
            <div
              key={order._id}
              className="border border-gray-200 rounded-lg p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs text-gray-400">Pedido</p>
                  <p className="font-semibold text-sm text-gray-900">
                    #{order._id.slice(-6).toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Fecha</p>
                  <p className="text-sm text-gray-700">
                    {order.ordered_at
                      ? new Date(order.ordered_at).toLocaleDateString()
                      : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="font-semibold text-sm text-gray-900">
                    ${Number(order.total_amount).toFixed(2)}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${status.color}`}
                >
                  {status.text}
                </span>
              </div>

              <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                {items.map((item, i) => {
                  const product = item.product_id;
                  const variant = product?.variants?.find(
                    (v) => v.color === item.color,
                  );
                  const image = variant?.images?.[0]?.url;

                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gray-100 flex-shrink-0 overflow-hidden">
                        {image && (
                          <img
                            src={image}
                            alt={product?.name}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {product?.name ?? "Producto no disponible"}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {item.color} · Talla {item.size} · x{item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        ${Number(item.subtotal).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersScreen;
