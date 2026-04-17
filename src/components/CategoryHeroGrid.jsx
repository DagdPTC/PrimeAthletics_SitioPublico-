// src/components/CategoryHeroGrid.jsx
import HeroCategoryCard from "./cards/HeroCategoryCard";
import WideCategoryCard from "./cards/WideCategoryCard";
import { categories } from "../data/categoriesData";

// Imágenes placeholder por subcategoría
const subImages = {
  running:
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
  caminar:
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
  yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  pilates:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  montana:
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80",
  balones:
    "https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=600&q=80",
  pesas:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  cintas:
    "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&q=80",
  camisetas:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  pants:
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
  shorts:
    "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80",
};

const categoriesArray = Object.values(categories);

const CategoryHeroGrid = () => (
  <section className="space-y-16">
    {/* ── BLOQUE 1: Categoría principal izquierda grande + subcategorías derecha ── */}
    {categoriesArray.map(({ label, slug, description, image, items }, idx) => {
      const isReversed = idx % 2 !== 0;

      return (
        <div key={slug}>
          
          <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-500 uppercase mb-4">
            {label}
          </p>

          <div
            className={`grid gap-3 ${isReversed ? "grid-cols-[1fr_1.6fr]" : "grid-cols-[1.6fr_1fr]"} items-start`}
          >
            {/* Tarjeta hero de la categoría */}
            {!isReversed && (
              <HeroCategoryCard
                label={label}
                description={description}
                slug={slug}
                image={image}
                size="tall"
              />
            )}

            {/* Grid de subcategorías */}
            <div className="grid grid-cols-1 gap-3">
              {items.map(({ label: subLabel, slug: subSlug }) => (
                <WideCategoryCard
                  key={subSlug}
                  label={subLabel}
                  slug={subSlug}
                  image={subImages[subSlug] || image}
                />
              ))}
            </div>

            {/* Tarjeta hero en posición derecha (reversed) */}
            {isReversed && (
              <HeroCategoryCard
                label={label}
                description={description}
                slug={slug}
                image={image}
                size="tall"
              />
            )}
          </div>
        </div>
      );
    })}
  </section>
);

export default CategoryHeroGrid;
