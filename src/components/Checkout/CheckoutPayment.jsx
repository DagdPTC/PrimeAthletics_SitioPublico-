const CheckoutPayment = ({ method, setMethod, cardData, onCardChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 font-bold text-base mb-1">Pago</h2>
      <p className="text-xs text-gray-400 mb-4">
        Todas las transacciones son seguras y están encriptadas.
      </p>

      {/* Tarjeta de crédito */}
      <div
        className={`border transition-colors duration-200
        ${method === "card" ? "border-[#4a7fa5] bg-[#f0f7ff]" : "border-gray-200 bg-white"}`}
      >
        <button
          onClick={() => setMethod("card")}
          className="cursor-pointer w-full flex items-center justify-between px-4 py-3.5"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
              ${method === "card" ? "border-[#4a7fa5]" : "border-gray-400"}`}
            >
              {method === "card" && (
                <div className="w-2 h-2 rounded-full bg-[#4a7fa5]" />
              )}
            </div>
            <span className="text-sm text-gray-800 font-medium">
              Tarjeta de crédito
            </span>
          </div>
          {/* Card logos */}
          <div className="flex gap-1.5 items-center">
            {["VISA", "MC", "AMEX"].map((c) => (
              <span
                key={c}
                className="text-[9px] font-black border border-gray-300
                px-1.5 py-0.5 rounded text-gray-500 bg-white"
              >
                {c}
              </span>
            ))}
          </div>
        </button>

        {method === "card" && (
          <div className="px-4 pb-4 flex flex-col gap-3 border-t border-[#4a7fa5]/20">
            <input
              type="text"
              placeholder="Número de tarjeta"
              value={cardData.number}
              onChange={(e) => onCardChange("number", e.target.value)}
              maxLength={19}
              className="w-full border border-gray-300 px-4 py-3 text-sm bg-white
                focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-400 mt-3"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM / AA"
                value={cardData.expiry}
                onChange={(e) => onCardChange("expiry", e.target.value)}
                maxLength={7}
                className="flex-1 border border-gray-300 px-4 py-3 text-sm bg-white
                  focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={(e) => onCardChange("cvc", e.target.value)}
                maxLength={4}
                className="flex-1 border border-gray-300 px-4 py-3 text-sm bg-white
                  focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Nombre en la tarjeta"
              value={cardData.name}
              onChange={(e) => onCardChange("name", e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm bg-white
                focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
            />
          </div>
        )}
      </div>

      {/* PayPal */}
      <div
        className={`border mt-2 transition-colors duration-200
        ${method === "paypal" ? "border-[#4a7fa5] bg-[#f0f7ff]" : "border-gray-200 bg-white"}`}
      >
        <button
          onClick={() => setMethod("paypal")}
          className="cursor-pointer w-full flex items-center gap-3 px-4 py-3.5"
        >
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
            ${method === "paypal" ? "border-[#4a7fa5]" : "border-gray-400"}`}
          >
            {method === "paypal" && (
              <div className="w-2 h-2 rounded-full bg-[#4a7fa5]" />
            )}
          </div>
          <span className="text-sm text-gray-800 font-medium">PayPal</span>
          <span className="ml-auto text-xs font-black text-[#003087]">
            Pay<span className="text-[#009cde]">Pal</span>
          </span>
        </button>
        {method === "paypal" && (
          <p className="px-4 pb-4 text-xs text-gray-500 border-t border-[#4a7fa5]/20 pt-3">
            Serás redirigido a PayPal para completar tu pago de forma segura.
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPayment;
