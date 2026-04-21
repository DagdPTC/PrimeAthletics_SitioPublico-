const selectClass = `w-full border border-gray-300 px-4 py-3 text-sm bg-white
  focus:outline-none focus:border-[#4a7fa5] focus:ring-1 focus:ring-[#4a7fa5]/20
  transition-colors text-gray-700 cursor-pointer appearance-none
  bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")]
  bg-no-repeat bg-[right_14px_center]`;

const inputClass = `w-full border border-gray-300 px-4 py-3 text-sm bg-white
  focus:outline-none focus:border-[#4a7fa5] focus:ring-1 focus:ring-[#4a7fa5]/20
  transition-colors placeholder-gray-400`;

const CheckoutAddress = ({ data, onChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 font-bold text-base mb-4">
        Dirección de envío
      </h2>
      <div className="flex flex-col gap-3">
        <select
          value={data.country}
          onChange={(e) => onChange("country", e.target.value)}
          className={selectClass}
        >
          <option value="SV">El Salvador</option>
          <option value="GT">Guatemala</option>
          <option value="HN">Honduras</option>
          <option value="MX">México</option>
          <option value="US">Estados Unidos</option>
        </select>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={inputClass + " flex-1"}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={inputClass + " flex-1"}
          />
        </div>

        <input
          type="text"
          placeholder="Dirección"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Apartamento, suite, etc. (opcional)"
          value={data.address2}
          onChange={(e) => onChange("address2", e.target.value)}
          className={inputClass}
        />

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ciudad"
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
            className={inputClass + " flex-1"}
          />
          <input
            type="text"
            placeholder="Código postal"
            value={data.zip}
            onChange={(e) => onChange("zip", e.target.value)}
            className={inputClass + " flex-1"}
          />
        </div>

        <input
          type="tel"
          placeholder="Teléfono"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default CheckoutAddress;
