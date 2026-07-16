import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js"; // ajustá el path real

function LoginCard() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
    <div className="bg-white w-[400px] rounded-3xl p-8 shadow-xl text-center">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">PRIME</h1>
        <p className="text-xs tracking-widest text-gray-500">ATHLETICS</p>
      </div>

      <h2 className="text-lg font-semibold mb-6">Iniciar sesión:</h2>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="text-left">
          <label className="text-sm">Correo electrónico:</label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
          />
        </div>

        <div className="text-left">
          <label className="text-sm">Contraseña:</label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
          />
        </div>

        <div className="flex justify-between text-xs text-gray-600">
          <span
            onClick={() => navigate("/recuperar")}
            className="cursor-pointer hover:underline"
          >
            ¿Has olvidado la contraseña?
          </span>

          <span
            onClick={() => navigate("/registro")}
            className="cursor-pointer hover:underline"
          >
            Crear una cuenta
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          {loading ? "Iniciando..." : "Aceptar"}
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
