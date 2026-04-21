const ConfirmModal = ({ isOpen, onConfirm, onCancel, isProcessing }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-[#0a0d14] border border-[#b9d9ff]/15 w-full max-w-sm p-8 shadow-2xl">
        <div
          className="w-12 h-12 rounded-full bg-[#b9d9ff]/10 border border-[#b9d9ff]/20
          flex items-center justify-center mx-auto mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b9d9ff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h2 className="text-white font-black text-lg text-center tracking-tight mb-2">
          ¿Confirmar pedido?
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          Al confirmar se procesará tu pago y recibirás un correo de
          confirmación.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="cursor-pointer w-full bg-[#b9d9ff] text-[#0f1117] font-black py-3.5 text-sm
              tracking-wide transition-all duration-200 hover:bg-white active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Procesando..." : "Sí, confirmar pedido"}
          </button>
          <button
            onClick={onCancel}
            disabled={isProcessing}
            className="btn-slide cursor-pointer w-full border border-[#b9d9ff]/30 hover:border-[#b9d9ff]/60
              text-[#b9d9ff] font-semibold py-3.5 text-sm tracking-wide
              transition-colors duration-300 active:scale-[0.98]"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
