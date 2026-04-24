import { useNavigate } from "react-router-dom";

function ForgotPasswordScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative">

      {/* Fondo */}
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white w-[420px] rounded-3xl p-8 text-center shadow-xl">

          <h1 className="text-2xl font-bold">PRIME</h1>
          <p className="text-xs tracking-widest text-gray-500 mb-6">
            ATHLETICS
          </p>

          <h2 className="text-lg font-semibold mb-2">
            Recuperar contraseña
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Porfavor, ingresa el correo de la cuenta a la que deseas recuperar la contraseña
          </p>

          <div className="text-left mb-6">
            <label className="text-sm">Correo electronico:</label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
            />
          </div>

          <button
            onClick={() => navigate("/verificacion")}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Aceptar
          </button>

        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordScreen;