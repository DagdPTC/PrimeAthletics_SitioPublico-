import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { products } from "../data/products.js";
import { filterConfig } from "../data/filterConfig.js";
import {
  getAvailableFilters,
  applyFilters,
  applySort,
} from "../utils/filtersUtils.js";

import BreadCrumb from "../components/Products/BreadCrumb";
import FiltersBar from "../components/products/FilterBar";
import SortDropdown from "../components/products/SortDropDown.jsx";
import ProductCard from "../components/cards/ProductCard.jsx";

const CategoryScreen = () => {
  const { gender, category, sport, productType } = useParams();

  const [activeFilters, setActiveFilters] = useState({});
  const [sort, setSort] = useState("default");

  // 🔥 FILTRO BASE (NIVEL PRO)
  const categoryProducts = products.filter((p) => {
    const matchGender = p.gender === gender || p.gender === "unisex";

    const matchCategory =
      category && category !== "ofertas" && category !== "novedades"
        ? p.category === category
        : true;

    const matchSport = sport ? p.sport === sport : true;

    const matchType = productType ? p.product_type === productType : true;

    const matchOffers = category === "ofertas" ? p.discount > 0 : true;

    const isNewProduct = (date) => {
      const created = new Date(date);
      const now = new Date();

      const diffDays = (now - created) / (1000 * 60 * 60 * 24);

      return diffDays <= 60; // últimos 30 días
    };

    const matchNew =
      category === "novedades" ? isNewProduct(p.createdAt) : true;

    return (
      matchGender &&
      matchCategory &&
      matchSport &&
      matchType &&
      matchOffers &&
      matchNew
    );
  });

  // 🔥 CATEGORY DINÁMICA
  const isSpecialCategory = category === "ofertas" || category === "novedades";

  const currentCategory = isSpecialCategory
    ? categoryProducts[0]?.category || "zapatos"
    : category;

  // 🔥 CONFIG BASE
  const config = filterConfig[currentCategory] || [];

  // 🔥 FILTROS INTELIGENTES (OCULTAR SEGÚN CONTEXTO)
  const finalConfig = config.filter((f) => {
    if (sport && f.key === "sport") return false;
    if (productType && f.key === "product_type") return false;
    if (category === "ofertas" && f.key === "discount") return false;
    return true;
  });

  // 🔥 OPCIONES DINÁMICAS
  const availableFilters = useMemo(
    () => getAvailableFilters(categoryProducts, currentCategory, gender),
    [categoryProducts, currentCategory, gender],
  );

  // 🔥 FILTROS APLICADOS
  const filteredProducts = useMemo(
    () => applyFilters(categoryProducts, activeFilters),
    [categoryProducts, activeFilters],
  );

  // 🔥 SORT
  const sortedProducts = useMemo(
    () => applySort(filteredProducts, sort),
    [filteredProducts, sort],
  );

  // 🔥 TÍTULO DINÁMICO
  const getTitle = () => {
    if (category === "ofertas") return "Ofertas";
    if (category === "novedades") return "Novedades";

    if (sport) {
      return `Deporte: ${sport.charAt(0).toUpperCase() + sport.slice(1)}`;
    }

    if (productType) {
      return productType.charAt(0).toUpperCase() + productType.slice(1);
    }

    if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }

    return "";
  };

  const isOffers = category === "ofertas";
  const isNew = category === "novedades";

  console.log({ gender, category, sport, productType });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <BreadCrumb />

      {/* HEADER */}
      <h1 className="text-3xl font-bold uppercase">{getTitle()}</h1>

      <p className="text-sm text-gray-500 mt-2">
        {filteredProducts.length} productos
      </p>

      {/* 🔥 TAG CONTEXTUAL (TIPO NIKE) */}
      {(sport || productType || category === "ofertas") && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {sport && (
            <span className="bg-black text-white px-3 py-1 text-xs rounded-full">
              {sport}
            </span>
          )}

          {productType && (
            <span className="bg-black text-white px-3 py-1 text-xs rounded-full">
              {productType}
            </span>
          )}

          {category === "ofertas" && (
            <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-full">
              Ofertas
            </span>
          )}

          {category === "novedades" && (
            <span className="bg-green-500 text-white px-3 py-1 text-xs rounded-full">
              Nuevo
            </span>
          )}
        </div>
      )}

      {/* FILTROS + SORT */}
      <div className="flex justify-between items-center mt-6">
        <FiltersBar
          config={finalConfig}
          availableFilters={availableFilters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />

        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;
