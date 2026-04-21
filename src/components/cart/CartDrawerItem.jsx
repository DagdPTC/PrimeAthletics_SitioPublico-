import { useCart } from "../../context/CartContext";

const CartDrawerItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-3 py-4">
      {/* Imagen */}
      <div className="w-[68px] h-[68px] bg-white/4 border border-white/6 flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold leading-tight truncate">
              {item.name}
            </p>
            <p className="text-gray-500 text-[10px] mt-0.5 capitalize">
              {item.color} · Talla {item.size}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.itemId)}
            className="cursor-pointer flex-shrink-0 w-5 h-5 flex items-center justify-center
              text-gray-600 hover:text-red-400 transition-colors duration-200 text-base leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex items-center justify-between mt-2.5">
          {/* Controles cantidad */}
          <div className="flex items-center border border-white/10 hover:border-[#4a7fa5]/50 transition-colors duration-200">
            <button
              onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
              className="cursor-pointer w-6 h-6 text-gray-400 hover:text-[#b9d9ff]
                flex items-center justify-center transition-colors duration-200 text-sm"
            >
              −
            </button>
            <span className="w-6 text-center text-[11px] font-bold text-white">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
              className="cursor-pointer w-6 h-6 text-gray-400 hover:text-[#b9d9ff]
                flex items-center justify-center transition-colors duration-200 text-sm"
            >
              +
            </button>
          </div>

          {/* Precio */}
          <div className="text-right">
            <p className="text-xs font-black text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.discount > 0 && (
              <p className="text-[10px] text-gray-600 line-through">
                ${(item.originalPrice * item.quantity).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
