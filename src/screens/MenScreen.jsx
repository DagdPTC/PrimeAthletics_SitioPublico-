import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";
import HorizontalBanner from "../components/cards/HorizontalBanner";
import CategoryGridCard from "../components/cards/CategoryGridCard";

// IMAGENES
import menTennis from "/img/menImages/tenis-hombre.png";
import menClothing from "/img/menImages/ropa-hombre.png";
import futballClothes from "/img/menImages/ropa-futbol.png";
import basketClothes from "/img/menImages/ropa-basquet.png";
import volleyClothes from "/img/menImages/ropa-volley.png";
import newBasketShoes from "/img/menImages/lanzamientos-hombre.png";
import offers from "/img/menImages/ofertas.png";
import tshirt from "/img/menImages/camiseta-hombre.png";
import shorts from "/img/menImages/shorts-hombre.png";
import pants from "/img/menImages/pants-hombre.png";
import socks from "/img/menImages/socks-hombre.png";

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
            to="/hombres/deporte/football"
            image={futballClothes}
          />

          <SportCard
            label="Basketball"
            to="/hombres/deporte/basketball"
            image={basketClothes}
          />

          <SportCard
            label="Volleyball"
            to="/hombres/deporte/volleyball"
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
          <CategoryGridCard
            label="Shorts"
            to="/hombres/tipo/short"
            image={shorts}
          />
          <CategoryGridCard
            label="Pants"
            to="/hombres/tipo/pants"
            image={pants}
          />
          <CategoryGridCard
            label="Camisetas"
            to="/hombres/tipo/camiseta"
            image={tshirt}
          />
          <CategoryGridCard
            label="Calcetas"
            to="/hombres/tipo/calcetas"
            image={socks}
          />
        </div>
      </div>
    </div>
  );
};

export default MenScreen;
