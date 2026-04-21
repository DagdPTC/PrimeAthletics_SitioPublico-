import { useNavigate } from "react-router-dom";

const OrderConfirmationScreen = () => {
  const navigate = useNavigate();
  const orderNumber = `PA-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white border border-gray-100 shadow-sm w-full max-w-md px-10 py-14 text-center">
        {/* Check animado */}
        <div
          className="w-16 h-16 rounded-full bg-green-50 border border-green-200
          flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
          Pedido confirmado
        </p>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-3">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-gray-500 text-sm mb-2">Tu número de pedido es:</p>
        <p className="text-[#4a7fa5] font-black text-lg tracking-wider mb-6">
          {orderNumber}
        </p>
        <p className="text-gray-400 text-xs mb-10">
          Recibirás un correo de confirmación con los detalles de tu pedido y la
          información de seguimiento cuando sea despachado.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer w-full bg-[#0f1117] text-white font-bold py-3.5 text-sm
              tracking-wide hover:bg-[#1a3a5c] transition-colors duration-200"
          >
            Seguir comprando
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn-slide cursor-pointer w-full border border-[#4a7fa5]/40 hover:border-[#4a7fa5]
              text-[#4a7fa5] font-semibold py-3.5 text-sm tracking-wide
              transition-colors duration-300"
          >
            Ver mis pedidos
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;
