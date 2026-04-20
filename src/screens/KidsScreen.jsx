import SubMenu from "../components/SubMenu";
import LargeCategoryCard from "../components/cards/LargeCategoryCard";
import SportCard from "../components/cards/SportCard";
import HorizontalBanner from "../components/cards/HorizontalBanner";
import CategoryGridCard from "../components/cards/CategoryGridCard";
//IMAGENES
import womenTennis from "../assets/images/womenImages/tenis-mujer.png";
import womenClothing from "../assets/images/womenImages/ropa-mujer.png";
import footballClothes from "../assets/images/womenImages/futbol-mujer.png";
import basketClothes from "../assets/images/womenImages/basquet-mujer.png";
import volleyClothes from "../assets/images/womenImages/volley-mujer.png";
import newBasketShoes from "../assets/images/womenImages/lanzamientos-mujer.png";
import offers from "../assets/images/womenImages/ofertas-mujer.png";
import tshirt from "../assets/images/womenImages/camiseta-mujer.png";
import shorts from "../assets/images/womenImages/shorts-mujer.png";
import pants from "../assets/images/womenImages/pants-mujer.png";
import socks from "../assets/images/womenImages/socks-mujer.png";

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
            label="Tenis para Mujer"
            to="/ninos/zapatos"
            image={womenTennis}
          />

          <LargeCategoryCard
            label="Ropa para Mujer"
            to="/ninos/ropa"
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
            to="/ninos/futbol"
            image={footballClothes}
          />
          <SportCard
            label="Basketball"
            to="/ninos/basketball"
            image={basketClothes}
          />
          <SportCard
            label="Volleyball"
            to="/ninos/volleyball"
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
          <CategoryGridCard image={pants} label="Pants" to="/ninos/pants" />
          <CategoryGridCard
            image={socks}
            label="Calcetas"
            to="/ninos/calcetas"
          />
          <CategoryGridCard
            image={tshirt}
            label="Camisetas"
            to="/mujeres/camisetas"
          />
          <CategoryGridCard
            image={shorts}
            label="Shorts"
            to="/mujeres/shorts"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsScreen;
