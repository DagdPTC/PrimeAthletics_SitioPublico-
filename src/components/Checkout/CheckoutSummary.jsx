import { useCart } from "../../context/CartContext";

const CheckoutSummary = () => {
  const { cartItems, subtotal } = useCart();

  const totalDiscount = cartItems.reduce((acc, i) => {
    if (i.discount > 0) return acc + (i.originalPrice - i.price) * i.quantity;
    return acc;
  }, 0);

  return (
    <div
      className="bg-[#f3f4f6] border-l border-gray-200 px-10 py-12
      sticky top-0 self-start h-screen overflow-y-auto"
    >
      {/* Productos */}
      <div className="flex flex-col gap-5 mb-8">
        {cartItems.map((item) => (
          <div key={item.itemId} className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div
                className="w-14 h-14 bg-white border border-gray-200 overflow-hidden rounded-md
                shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="absolute -top-2 -right-2 w-5 h-5 bg-[#1a3a5c] text-white
                text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-sm font-semibold truncate">
                {item.name}
              </p>
              <p className="text-gray-500 text-xs capitalize mt-0.5">
                {item.color} / {item.size}
              </p>
            </div>
            <p className="text-gray-900 text-sm font-bold flex-shrink-0">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mb-5" />

      {/* Totales */}
      <div className="flex flex-col gap-2.5 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>
            Subtotal · {cartItems.reduce((a, i) => a + i.quantity, 0)} artículos
          </span>
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
          <span className="text-emerald-600 font-medium">Gratis</span>
        </div>
      </div>

      <div
        className="border-t border-gray-200 mt-4 pt-4 flex justify-between
        font-black text-gray-900"
      >
        <span className="text-base">Total</span>
        <div className="text-right">
          <span className="text-xs text-gray-400 font-normal mr-1">USD</span>
          <span className="text-xl">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
