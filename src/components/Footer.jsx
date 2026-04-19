import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-[var(--font-title)] uppercase mb-4">
            Prime Athletics
          </h2>
          <p className="text-sm text-white/70">
            Rendimiento, estilo y pasión por el deporte en cada producto.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm uppercase mb-4 text-white/60">Explorar</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/hombres">Hombres</Link>
            </li>
            <li>
              <Link to="/mujeres">Mujeres</Link>
            </li>
            <li>
              <Link to="/deportes">Deportes</Link>
            </li>
            <li>
              <Link to="/ofertas">Ofertas</Link>
            </li>
          </ul>
        </div>

        {/* Ayuda */}
        <div>
          <h3 className="text-sm uppercase mb-4 text-white/60">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            <li>Contacto</li>
            <li>Envíos</li>
            <li>Devoluciones</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm uppercase mb-4 text-white/60">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 text-center text-sm py-6 text-white/50">
        © {new Date().getFullYear()} Prime Athletics. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
