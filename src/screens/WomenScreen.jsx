import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";
import HorizontalBanner from "../components/cards/HorizontalBanner";
import CategoryGridCard from "../components/cards/CategoryGridCard";
//IMAGENES
import womenTennis from "/img/womenImages/tenis-mujer.png";
import womenClothing from "/img/womenImages/ropa-mujer.png";
import footballClothes from "/img/womenImages/futbol-mujer.png";
import basketClothes from "/img/womenImages/basquet-mujer.png";
import volleyClothes from "/img/womenImages/volley-mujer.png";
import newBasketShoes from "/img/womenImages/lanzamientos-mujer.png";
import offers from "/img/womenImages/ofertas-mujer.png";
import tshirt from "/img/womenImages/camiseta-mujer.png";
import shorts from "/img/womenImages/shorts-mujer.png";
import pants from "/img/womenImages/pants-mujer.png";
import socks from "/img/womenImages/socks-mujer.png";

const WomenScreen = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* SUBMENU */}
      <SubMenu title="Mujeres" base="/mujeres" />

      <div className="mb-20">
        <HorizontalBanner image={offers} to="/mujeres/ofertas" />
      </div>

      {/* BANNER DESTACADO */}
      <div className="mb-20">
        <HorizontalBanner
          image={newBasketShoes}
          title="Últimos lanzamientos"
          to="/mujeres/novedades"
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
            label="Tenis para Mujer"
            to="/mujeres/zapatos"
            image={womenTennis}
          />

          <LargeCategoryCard
            label="Ropa para Mujer"
            to="/mujeres/ropa"
            image={womenClothing}
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
            to="/mujeres/deporte/football"
            image={footballClothes}
          />
          <SportCard
            label="Basketball"
            to="/mujeres/deporte/basketball"
            image={basketClothes}
          />
          <SportCard
            label="Volleyball"
            to="/mujeres/deporte/volleyball"
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
            image={pants}
            label="Pants"
            to="/mujeres/tipo/pants"
          />
          <CategoryGridCard
            image={socks}
            label="Calcetas"
            to="/mujeres/tipo/calcetas"
          />
          <CategoryGridCard
            image={tshirt}
            label="Camisetas"
            to="/mujeres/tipo/camiseta"
          />
          <CategoryGridCard
            image={shorts}
            label="Shorts"
            to="/mujeres/tipo/short"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenScreen;
