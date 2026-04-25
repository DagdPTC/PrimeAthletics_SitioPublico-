function AboutScreen() {
  return (
    <div className="bg-[#0f1117] text-white">

      {/* HERO */}
      <section className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center px-10">
          <div>
            <h1 className="text-4xl font-bold mb-2">Nosotros</h1>
            <p className="text-gray-300">
              Rendimiento, estilo y pasión por el deporte
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80"
          className="rounded-2xl"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra historia</h2>
          <p className="text-gray-300 leading-relaxed">
            Prime Athletics nació en 2020 con una visión clara: crear una marca 
            que combinara alto rendimiento con diseño moderno. Todo comenzó en un pequeño 
            gimnasio local, donde un grupo de atletas y diseñadores decidió reinventar 
            la forma en la que las personas viven el deporte.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Desde nuestros primeros productos, buscamos ofrecer calidad, comodidad y estilo, 
            inspirando a cada persona a superar sus límites y alcanzar su mejor versión.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[#151823] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-10">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-[#0f1117] rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Disciplina</h3>
              <p className="text-gray-400">
                Creemos en el esfuerzo constante como base del éxito.
              </p>
            </div>

            <div className="p-6 bg-[#0f1117] rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Innovación</h3>
              <p className="text-gray-400">
                Diseñamos productos modernos con tecnología avanzada.
              </p>
            </div>

            <div className="p-6 bg-[#0f1117] rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Pasión</h3>
              <p className="text-gray-400">
                Vivimos el deporte como un estilo de vida.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="py-16 text-center px-6">
        <h2 className="text-xl italic text-gray-300 max-w-3xl mx-auto">
          "No vendemos productos deportivos, creamos herramientas para que superes tus propios límites."
        </h2>
      </section>

    </div>
  );
}

export default AboutScreen;