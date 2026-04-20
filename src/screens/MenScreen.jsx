import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";
import HorizontalBanner from "../components/cards/HorizontalBanner";
import CategoryGridCard from "../components/cards/CategoryGridCard";

// IMAGENES
import menTennis from "../assets/images/menImages/tenis-hombre.png";
import menClothing from "../assets/images/menImages/ropa-hombre.png";
import futballClothes from "../assets/images/menImages/ropa-futbol.png";
import basketClothes from "../assets/images/menImages/ropa-basquet.png";
import volleyClothes from "../assets/images/menImages/ropa-volley.png";
import newBasketShoes from "../assets/images/menImages/lanzamientos-hombre.png";
import offers from "../assets/images/menImages/ofertas.png";
import tshirt from "../assets/images/menImages/camiseta-hombre.png";
import shorts from "../assets/images/menImages/shorts-hombre.png";
import pants from "../assets/images/menImages/pants-hombre.png";
import socks from "../assets/images/menImages/socks-hombre.png";

const MenScreen = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* SUBMENU */}
      <SubMenu title="Hombres" base="/hombres" />

      <div className="mb-20">
        <HorizontalBanner image={offers} to="/hombres/ofertas" />
      </div>

      {/* BANNER DESTACADO */}
      <div className="mb-20">
        <HorizontalBanner
          image={newBasketShoes}
          title="Últimos lanzamientos"
          to="/hombres/novedades"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ───── BLOQUE 1 ───── */}
        <div className="mb-12">
          <p
            className="text-2xl md:text-2xl 
              font-[var(--font-title)] 
              font-bold 
              uppercase 
              tracking-[0.02em] 
              leading-none"
          >
            Explora
          </p>
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
          <p
            className="text-2xl md:text-2xl 
              font-[var(--font-title)] 
              font-bold 
              uppercase 
              tracking-[0.02em] 
              leading-none"
          >
            Todo lo que necesitas para ser el mejor en tu deporte
          </p>
        </div>

        {/* SECCIÓN DEPORTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SportCard
            label="Fútbol"
            to="/hombres/futbol"
            image={futballClothes}
          />
          <SportCard
            label="Basketball"
            to="/hombres/basketball"
            image={basketClothes}
          />
          <SportCard
            label="Volleyball"
            to="/hombres/volleyball"
            image={volleyClothes}
          />
        </div>

        <p
          className="text-2xl md:text-2xl 
              font-[var(--font-title)] 
              font-bold 
              uppercase 
              tracking-[0.02em] 
              leading-none mt-20"
        >
          Compra por categoría
        </p>

        {/* GRID CATEGORÍAS FULL SCREEN */}
        <div className="w-full h-screen grid grid-cols-2 grid-rows-2 gap-2 mt-20">
          <CategoryGridCard image={pants} label="Pants" to="/hombres/pants" />
          <CategoryGridCard
            image={socks}
            label="Calcetas"
            to="/hombres/calcetas"
          />
          <CategoryGridCard
            image={tshirt}
            label="Camisetas"
            to="/hombres/camisetas"
          />
          <CategoryGridCard
            image={shorts}
            label="Shorts"
            to="/hombres/shorts"
          />
        </div>
      </div>
    </div>
  );
};

export default MenScreen;
