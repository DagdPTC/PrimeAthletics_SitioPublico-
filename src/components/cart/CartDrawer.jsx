import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const CartDrawer = () => {
  const {
    cartItems,
    isDrawerOpen,
    closeDrawer,
    subtotal,
    totalItems,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  const handleViewCart = () => {
    closeDrawer();
    navigate("/carrito");
  };
  const handleCheckout = () => {
    closeDrawer();
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-x-0 bottom-0 top-16 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer — ancho fijo explícito con style inline para garantizar */}
      <div
        style={{ width: "380px" }}
        className={`fixed top-16 right-0 bottom-0 z-50
          flex flex-col bg-[#0a0d14] border-l border-[#b9d9ff]/10 shadow-2xl
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b9d9ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h2 className="text-white font-bold text-sm tracking-tight">
              Mi carrito
            </h2>
            {totalItems > 0 && (
              <span
                className="bg-[#b9d9ff]/10 text-[#b9d9ff] text-[10px] font-bold px-2 py-0.5
                rounded-full border border-[#b9d9ff]/20"
              >
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="cursor-pointer text-xs text-gray-600 hover:text-red-400 transition-colors duration-200"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={closeDrawer}
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-full
                text-gray-500 hover:text-white hover:bg-white/8 transition-all duration-200 text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center pb-10">
              <div
                className="w-16 h-16 rounded-full bg-[#b9d9ff]/5 border border-[#b9d9ff]/10
                flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b9d9ff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.35"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div>
                <p className="text-white/60 font-semibold text-sm">
                  Tu carrito está vacío
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Agrega productos para verlos aquí
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="cursor-pointer text-xs text-[#b9d9ff] border border-[#b9d9ff]/30
                  hover:border-[#b9d9ff]/60 px-4 py-2 transition-all duration-200 hover:bg-[#b9d9ff]/5"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {cartItems.map((item) => (
                <CartDrawerItem key={item.itemId} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-5 py-5 border-t border-white/6 flex flex-col gap-3 flex-shrink-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-400 text-sm">Subtotal</span>
              <span className="text-white font-black text-xl tracking-tight">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-700 -mt-2 mb-1">
              Envío e impuestos calculados al finalizar
            </p>

            <button
              onClick={handleCheckout}
              className="cursor-pointer w-full bg-[#b9d9ff] text-[#0f1117] font-black py-3.5 text-sm
                tracking-wide transition-all duration-200
                hover:bg-white hover:shadow-[0_0_20px_rgba(185,217,255,0.25)]
                active:scale-[0.98]"
            >
              Comprar ahora
            </button>

            <button
              onClick={handleViewCart}
              className="btn-slide cursor-pointer w-full border border-[#b9d9ff]/40 hover:border-[#4a7fa5]
                text-[#b9d9ff] font-semibold py-3.5 text-sm tracking-wide
                transition-colors duration-300 active:scale-[0.98]"
            >
              Ver carrito completo
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
