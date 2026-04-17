import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";

// IMAGENES
import menTennis from "../assets/images/tennis-Hombre.png";
import menClothing from "../assets/images/ropa-de-hombre.webp";
import futballClothes from "../assets/images/ropa-futbol.avif";
import baketClothes from "../assets/images/ropa-basquet.jpg";
import volleyClothes from "../assets/images/ropa-volley.jpg";

const MenScreen = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* SUBMENU */}
      <SubMenu />

      <div className="w-full px-6 py-12">
        {/* ───── BLOQUE 1 ───── */}
        <div className="mb-12">
          <p className="text-base tracking-[0.25em] uppercase text-black font-semibold mb-3">
            Explora
          </p>

          <h2 className="font-['Oswald'] text-5xl md:text-6xl leading-[0.9] uppercase tracking-tight">
            Elige lo que deseas
          </h2>
        </div>

        {/* CARDS GRANDES */}
        <div className="grid grid-cols-2 gap-5 mb-20">
          <LargeCategoryCard
            label="Tenis para Hombre"
            to="/hombres/zapatos"
            image={menTennis}
          />

          <LargeCategoryCard
            label="Ropa para Hombre"
            to="/hombres/ropa"
            image={menClothing}
          />
        </div>

        {/* ───── BLOQUE 2 ───── */}
        <div className="mb-12">
          <p className="text-base tracking-[0.25em] uppercase text-black font-semibold mb-3">
            Rendimiento
          </p>

          <h2 className="font-['Oswald'] text-5xl md:text-6xl leading-[0.9] uppercase tracking-tight">
            Todo lo que necesitas para ser el mejor
          </h2>
        </div>

        {/* SECCIÓN DEPORTES */}
        <div className="grid grid-cols-3 gap-4">
          <SportCard
            label="Fútbol"
            to="/hombres/futbol"
            image={futballClothes}
          />
          <SportCard
            label="Basketball"
            to="/hombres/basketball"
            image={baketClothes}
          />
          <SportCard
            label="Volleyball"
            to="/hombres/volleyball"
            image={volleyClothes}
          />
        </div>
      </div>
    </div>
  );
};

export default MenScreen;
