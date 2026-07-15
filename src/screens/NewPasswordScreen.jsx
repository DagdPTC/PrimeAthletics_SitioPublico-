import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPasswordScreen() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const changePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/recoveryPasswordCustomer/newPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            newPassword,
            confirmNewPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        navigate("/login");
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

          <h1 className="text-2xl font-bold">PRIME</h1>

          <p className="text-xs tracking-widest text-gray-500 mb-6">
            ATHLETICS
          </p>

          <h2 className="text-lg font-semibold mb-2">
            Nueva contraseña
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Ingresa tu nueva contraseña y confírmala para finalizar la recuperación.
          </p>

          <form onSubmit={changePassword}>

            {/* Nueva contraseña */}
            <div className="text-left mb-4">
              <label className="text-sm">
                Nueva contraseña
              </label>

              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Confirmar contraseña */}
            <div className="text-left mb-6">
              <label className="text-sm">
                Confirmar contraseña
              </label>

              <input
                type="password"
                required
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cambiar contraseña
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default NewPasswordScreen;