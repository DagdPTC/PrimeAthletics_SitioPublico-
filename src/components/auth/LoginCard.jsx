function LoginCard() {
  return (
    <div className="bg-white w-[400px] rounded-3xl p-8 shadow-xl text-center">

      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">PRIME</h1>
        <p className="text-xs tracking-widest text-gray-500">ATHLETICS</p>
      </div>

      {/* Título */}
      <h2 className="text-lg font-semibold mb-6">
        Iniciar sesión:
      </h2>

      {/* Formulario */}
      <form className="space-y-4">

        <div className="text-left">
          <label className="text-sm">Correo electronico:</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
          />
        </div>

        <div className="text-left">
          <label className="text-sm">Contraseña:</label>
          <input
            type="password"
            className="w-full mt-1 p-2 rounded-lg bg-gray-200 outline-none"
          />
        </div>

        {/* Links */}
        <div className="flex justify-between text-xs text-gray-600">
          <span className="cursor-pointer hover:underline">
            ¿Has olvidado la contraseña?
          </span>
          <span className="cursor-pointer hover:underline">
            Crear una cuenta
          </span>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Aceptar
        </button>

      </form>
    </div>
  );
}

export default LoginCard;