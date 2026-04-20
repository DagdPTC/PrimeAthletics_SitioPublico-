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
import CategoryHeader from "../components/Products/CategoryHeader";
import FiltersBar from "../components/products/FilterBar";
import SortDropdown from "../components/products/SortDropDown.jsx";
import ProductCard from "../components/cards/ProductCard.jsx";

const CategoryScreen = () => {
  const { gender, category } = useParams();

  const config = filterConfig[category] || [];

  const [activeFilters, setActiveFilters] = useState({});

  const [sort, setSort] = useState("default");

  // productos base
  const categoryProducts = products.filter(
    (p) => p.category === category && p.gender === gender,
  );

  // opciones dinámicas
  const availableFilters = useMemo(
    () => getAvailableFilters(categoryProducts, config),
    [categoryProducts, config],
  );

  // productos filtrados
  const filteredProducts = useMemo(
    () => applyFilters(categoryProducts, activeFilters),
    [categoryProducts, activeFilters],
  );

  const sortedProducts = useMemo(
    () => applySort(filteredProducts, sort),
    [filteredProducts, sort],
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <BreadCrumb />
      {/* HEADER */}
      <h1 className="text-3xl font-bold uppercase">{category}</h1>

      <p className="text-sm text-gray-500 mt-2">
        {filteredProducts.length} productos
      </p>

      {/* FILTROS */}
      <div className="flex justify-between items-center mt-6">
        <FiltersBar
          config={config}
          availableFilters={availableFilters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />

        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;
