const CheckoutShipping = () => {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 font-bold text-base mb-4">
        Método de envío
      </h2>
      <div className="border border-[#4a7fa5] bg-[#f0f7ff] px-4 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-[#4a7fa5] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#4a7fa5]" />
          </div>
          <span className="text-sm text-gray-800 font-medium">
            Envío estándar
          </span>
        </div>
        <span className="text-sm font-bold text-gray-900">Gratis</span>
      </div>
      <p className="text-xs text-gray-400 mt-2 px-1">
        Entrega estimada entre 5 a 10 días hábiles.
      </p>
    </div>
  );
};

export default CheckoutShipping;
