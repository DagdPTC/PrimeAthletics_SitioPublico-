import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function CodeVerificationScreen() {
  const [verificationCode, setVerificationCode] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Saber si viene del registro o de recuperación
  const type = location.state?.type || "register";

  const verifyCode = async (e) => {
    e.preventDefault();

    const url =
      type === "register"
        ? "http://localhost:4000/api/registerCustomer/verifyCodeEmail"
        : "http://localhost:4000/api/recoveryPasswordCustomer/verifyCode";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          code: verificationCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        if (type === "register") {
          navigate("/login");
        } else {
          navigate("/nuevaContraseña");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="h-screen w-full relative">

      {/* Fondo */}
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white w-[420px] rounded-3xl p-8 text-center shadow-xl">

          {/* Logo */}
          <h1 className="text-2xl font-bold">
            PRIME
          </h1>

          <p className="text-xs tracking-widest text-gray-500 mb-6">
            ATHLETICS
          </p>

          {/* Título */}
          <h2 className="text-lg font-semibold mb-2">
            Código de verificación
          </h2>

          {/* Descripción */}
          <p className="text-sm text-gray-600 mb-6">
            Ingresa el código que fue enviado a tu correo electrónico.
          </p>

          <form onSubmit={verifyCode}>

            <div className="text-left mb-6">
              <label className="text-sm">
                Código
              </label>

              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Ingresa el código"
                required
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Verificar
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default CodeVerificationScreen;