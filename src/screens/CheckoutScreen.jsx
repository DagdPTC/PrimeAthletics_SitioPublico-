import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderService";

import CheckoutContact from "../components/Checkout/CheckoutContact";
import CheckoutAddress from "../components/Checkout/CheckoutAddress";
import CheckoutShipping from "../components/Checkout/CheckoutShipping";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import ConfirmModal from "../components/Checkout/ConfirmModal";

const CheckoutScreen = () => {
  const { cartItems, cartId, subtotal, resetCartAfterOrder } = useCart();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderCompleted, setOrderCompleted] = useState(false);

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

  // Redirige solo si el carrito llegó vacío desde el principio,
  // no si se vació porque acabamos de completar la orden
  useEffect(() => {
    if (cartItems.length === 0 && !orderCompleted) {
      navigate("/");
    }
  }, [cartItems.length, orderCompleted, navigate]);

  if (cartItems.length === 0) {
    return null;
  }

  const handleContactChange = (key, val) =>
    setContact((p) => ({ ...p, [key]: val }));
  const handleAddressChange = (key, val) =>
    setAddress((p) => ({ ...p, [key]: val }));
  const handleCardChange = (key, val) =>
    setCardData((p) => ({ ...p, [key]: val }));

  const handleConfirm = async () => {
    if (!cartId) {
      toast.error(
        "Tu carrito se está guardando, esperá un momento e intenta de nuevo",
      );
      setShowModal(false);
      return;
    }

    setIsProcessing(true);

    try {
      const fullAddress = `${address.address}${address.address2 ? ", " + address.address2 : ""}, ${address.city}, ${address.country}`;

      const result = await createOrder({
        shopping_cart_id: cartId,
        payment_method: paymentMethod,
        payment_status: true,
        order_status: false,
        delivery_address: fullAddress,
        total_amount: subtotal,
        shipment: 0,
      });

      setOrderCompleted(true);
      resetCartAfterOrder();
      setShowModal(false);
      navigate("/checkout/confirmacion", {
        state: { orderId: result.order?._id },
      });
    } catch (error) {
      toast.error(error.message || "No se pudo procesar el pago");
      setShowModal(false);
    } finally {
      setIsProcessing(false);
    }
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

          <button
            onClick={() => setShowModal(true)}
            disabled={!cartId}
            className="cursor-pointer w-full bg-[#0f1117] text-white font-black py-4 text-sm
              tracking-wide transition-all duration-200
              hover:bg-[#1a3a5c] hover:shadow-[0_0_24px_rgba(74,127,165,0.3)]
              active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            {cartId ? "Pagar ahora" : "Preparando tu carrito..."}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Al pagar aceptas nuestros{" "}
            <span className="underline cursor-pointer hover:text-gray-600">
              términos y condiciones
            </span>
          </p>
        </div>

        <CheckoutSummary />
      </div>
    </>
  );
};

export default CheckoutScreen;
