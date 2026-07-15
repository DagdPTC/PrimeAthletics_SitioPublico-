import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterScreen() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/registerCustomer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Limpiar formulario
        setForm({
          name: "",
          lastName: "",
          email: "",
          password: "",
        });

        // Ir a la pantalla de verificación
        navigate("/verificacion", {
          state: {
            type: "register",
          },
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("No fue posible conectar con el servidor.");
    }
  };

  return (
    <div className="h-screen w-full relative">
      {/* Fondo */}
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
        alt="Fondo"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white w-[420px] rounded-3xl p-8 text-center shadow-xl">

          {/* Logo */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">PRIME</h1>
            <p className="text-xs tracking-widest text-gray-500">
              ATHLETICS
            </p>
          </div>

          {/* Título */}
          <h2 className="text-lg font-semibold mb-6">
            Crear una cuenta
          </h2>

          {/* Formulario */}
          <form className="space-y-4" onSubmit={register}>

            {/* Nombre */}
            <div className="text-left">
              <label className="text-sm">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Apellido */}
            <div className="text-left">
              <label className="text-sm">Apellido</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Correo */}
            <div className="text-left">
              <label className="text-sm">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Contraseña */}
            <div className="text-left">
              <label className="text-sm">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Crear cuenta
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;