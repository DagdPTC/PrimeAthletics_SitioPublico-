import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";
import HorizontalBanner from "../components/cards/HorizontalBanner";
import CategoryGridCard from "../components/cards/CategoryGridCard";
//IMAGENES
import kidsTennis from "/img/kidsImages/tenis-kids.png";
import kidsClothing from "/img/kidsImages/ropa-kids.png";
import footballClothes from "/img/kidsImages/futbol-kids.png";
import basketClothes from "/img/kidsImages/basket-kids.png";
import volleyClothes from "/img/kidsImages/volley-kids.png";
import newBasketShoes from "/img/kidsImages/lanzamientos-kids.png";
import offers from "/img/kidsImages/ofertas-kids.png";
import tshirt from "/img/kidsImages/camiseta-kids.png";
import shorts from "/img/kidsImages/shorts-kids.png";
import pants from "/img/kidsImages/pants-kids.png";
import socks from "/img/kidsImages/socks-kids.png";

const KidsScreen = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* SUBMENU */}
      <SubMenu title="Kids" base="/ninos" />

      <div className="mb-20">
        <HorizontalBanner image={offers} to="/ninos/ofertas" />
      </div>

      {/* BANNER DESTACADO */}
      <div className="mb-20">
        <HorizontalBanner
          image={newBasketShoes}
          title="Últimos lanzamientos"
          to="/ninos/novedades"
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
            label="Tenis para Niños"
            to="/ninos/zapatos"
            image={kidsTennis}
          />

          <LargeCategoryCard
            label="Ropa para Niños"
            to="/ninos/ropa"
            image={kidsClothing}
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
            to="/ninos/deporte/football"
            image={footballClothes}
          />
          <SportCard
            label="Basketball"
            to="/ninos/deporte/basketball"
            image={basketClothes}
          />
          <SportCard
            label="Volleyball"
            to="/ninos/deporte/volleyball"
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
            to="/ninos/tipo/pants"
          />
          <CategoryGridCard
            image={socks}
            label="Calcetas"
            to="/ninos/tipo/calcetas"
          />
          <CategoryGridCard
            image={tshirt}
            label="Camisetas"
            to="/ninos/tipo/camiseta"
          />
          <CategoryGridCard
            image={shorts}
            label="Shorts"
            to="/ninos/tipo/short"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsScreen;
