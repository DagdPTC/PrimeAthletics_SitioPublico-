// src/screens/ProductsScreen.jsx
import { useParams } from "react-router-dom";
import CategoryHeroGrid from "../components/CategoryHeroGrid";
import CategoryFilterBar from "../components/CategoryFilterBar";
import { categories, allSubcategories } from "../data/categoriesData";

const ProductsScreen = () => {
  const { categoria } = useParams();

  // Busca si la categoría es una subcategoría o una categoría principal
  const activeSubcat = allSubcategories.find(({ slug }) => slug === categoria);
  const activeMainCat = Object.values(categories).find(
    ({ slug }) => slug === categoria,
  );
  const activeLabel = activeSubcat?.label || activeMainCat?.label || null;

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* ── Header dinámico ── */}
        <div className="mb-10">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
            {activeLabel ? (
              <>
                <span className="text-[#b9d9ff]">/</span> {activeLabel}
              </>
            ) : (
              "Productos"
            )}
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            {activeLabel
              ? `Colección exclusiva · ${activeLabel}`
              : "Explora toda nuestra colección élite"}
          </p>
        </div>

        {/* ── Barra de filtros ── */}
        <div className="mb-10 pb-8 border-b border-white/8">
          <CategoryFilterBar />
        </div>

        {/* ── Contenido principal ── */}
        {!categoria ? (
          // Vista /productos → grid de categorías completo
          <CategoryHeroGrid />
        ) : (
          // Vista /productos/:categoria → placeholder para fase 2
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-64 rounded-sm bg-white/5 border border-white/8 animate-pulse"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsScreen;
