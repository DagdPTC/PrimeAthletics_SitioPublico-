import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } =
    useCart();
  const navigate = useNavigate();

  const totalDiscount = cartItems.reduce((acc, i) => {
    if (i.discount > 0) return acc + (i.originalPrice - i.price) * i.quantity;
    return acc;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6">
        <span className="text-6xl">🛒</span>
        <h2 className="text-2xl font-bold text-gray-800">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-500 text-sm">
          Agrega productos para verlos aquí
        </p>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer bg-black text-white px-8 py-3 text-sm font-semibold
            hover:bg-gray-800 transition-colors"
        >
          Ir a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-gray-900">
            Mi carrito
            <span className="text-lg font-normal text-gray-400 ml-3">
              ({cartItems.reduce((a, i) => a + i.quantity, 0)} productos)
            </span>
          </h1>
          <button
            onClick={clearCart}
            className="cursor-pointer text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        {/* Grid con altura explícita para que el sticky funcione */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Lista de productos */}
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.itemId}
                className="bg-white p-5 flex gap-5 items-start"
              >
                <div className="w-28 h-28 bg-gray-100 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-1 capitalize">
                        {item.brand}
                      </p>
                      <h3 className="font-bold text-gray-900 text-base leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 capitalize">
                        Color: {item.color} · Talla: {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.itemId)}
                      className="cursor-pointer text-gray-300 hover:text-red-500
                        transition-colors text-xl leading-none flex-shrink-0"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div
                      className="flex items-center border border-gray-200
                      hover:border-gray-400 transition-colors"
                    >
                      <button
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity - 1)
                        }
                        className="cursor-pointer w-9 h-9 text-gray-500 hover:text-black
                          flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="w-9 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity + 1)
                        }
                        className="cursor-pointer w-9 h-9 text-gray-500 hover:text-black
                          flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.discount > 0 && (
                        <p className="text-xs text-gray-400 line-through">
                          ${(item.originalPrice * item.quantity).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen sticky — necesita sticky + top-24 + self-start en el padre con items-start */}
          <div className="bg-white p-6 sticky top-24 self-start">
            <h2 className="font-bold text-gray-900 text-lg mb-6">
              Resumen del pedido
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${(subtotal + totalDiscount).toFixed(2)}</span>
              </div>
              {totalDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Descuentos</span>
                  <span>−${totalDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span className="text-gray-400">Gratis</span>
              </div>
            </div>

            <div
              className="border-t border-gray-100 mt-4 pt-4 flex justify-between
              font-bold text-gray-900 text-base"
            >
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="cursor-pointer w-full bg-[#0f1117] text-white py-4 font-black text-sm mt-6
                tracking-wide transition-all duration-200
                hover:bg-[#1a3a5c] hover:shadow-[0_0_28px_rgba(26,58,92,0.5)]
                active:scale-[0.99]"
            >
              Proceder al pago
            </button>

            <button
              onClick={() => navigate(-1)}
              className="btn-slide cursor-pointer w-full border border-[#b9d9ff]/30
                hover:border-[#4a7fa5] text-[#b9d9ff] py-3.5 text-sm mt-3 font-semibold
                transition-colors duration-300 active:scale-[0.99]"
            >
              Seguir comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
