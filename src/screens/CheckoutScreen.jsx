import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import CheckoutContact from "../components/Checkout/CheckoutContact";
import CheckoutAddress from "../components/Checkout/CheckoutAddress";
import CheckoutShipping from "../components/Checkout/CheckoutShipping";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import ConfirmModal from "../components/Checkout/ConfirmModal";

const CheckoutScreen = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [contact, setContact] = useState({ email: "" });
  const [address, setAddress] = useState({
    country: "SV",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
    phone: "",
  });
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  if (cartItems.length === 0) {
    navigate("/");
    return null;
  }

  const handleContactChange = (key, val) =>
    setContact((p) => ({ ...p, [key]: val }));
  const handleAddressChange = (key, val) =>
    setAddress((p) => ({ ...p, [key]: val }));
  const handleCardChange = (key, val) =>
    setCardData((p) => ({ ...p, [key]: val }));

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setShowModal(false);
      navigate("/checkout/confirmacion");
    }, 1800);
  };

  return (
    <>
      <ConfirmModal
        isOpen={showModal}
        onConfirm={handleConfirm}
        onCancel={() => setShowModal(false)}
        isProcessing={isProcessing}
      />

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_460px]">
        {/* Formulario */}
        <div className="px-8 md:px-16 py-12 bg-white max-w-2xl w-full mx-auto lg:max-w-none">
          <CheckoutContact data={contact} onChange={handleContactChange} />
          <CheckoutAddress data={address} onChange={handleAddressChange} />
          <CheckoutShipping />
          <CheckoutPayment
            method={paymentMethod}
            setMethod={setPaymentMethod}
            cardData={cardData}
            onCardChange={handleCardChange}
          />

          {/* Botón pagar */}
          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer w-full bg-[#0f1117] text-white font-black py-4 text-sm
              tracking-wide transition-all duration-200
              hover:bg-[#1a3a5c] hover:shadow-[0_0_24px_rgba(74,127,165,0.3)]
              active:scale-[0.99]"
          >
            Pagar ahora
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Al pagar aceptas nuestros{" "}
            <span className="underline cursor-pointer hover:text-gray-600">
              términos y condiciones
            </span>
          </p>
        </div>

        {/* Resumen sticky */}
        <CheckoutSummary />
      </div>
    </>
  );
};

export default CheckoutScreen;
