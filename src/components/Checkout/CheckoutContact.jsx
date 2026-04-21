const CheckoutContact = ({ data, onChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 font-bold text-base mb-4">Contacto</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="w-full border border-gray-300 px-4 py-3 text-sm bg-white
          focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-400"
      />
    </div>
  );
};

export default CheckoutContact;
