import { taxonomy, brands } from "../data/taxonomy";
import { sizes } from "../data/sizes";

// 🔹 GENERAR OPCIONES
export const getAvailableFilters = (products, category, gender) => {
  const filters = {};

  // 🟢 Tipo
  filters.product_type = taxonomy[category]?.productTypes || [];

  // 🟢 Marca
  filters.brand = brands;

  // 🟢 Deporte
  filters.sport = taxonomy[category]?.sports || [];

  // 🟢 Colores (dinámico)
  const colors = new Set();
  products.forEach((p) => p.variants.forEach((v) => colors.add(v.color)));
  filters.color = Array.from(colors);

  // 🟢 Tallas (base + disponibilidad)
  const baseSizes = sizes[category]?.[gender] || [];

  filters.size = baseSizes.filter((size) =>
    products.some((p) =>
      p.variants.some((v) =>
        v.sizes.some((s) => s.size === size && s.stock > 0),
      ),
    ),
  );

  return filters;
};

// 🔹 APLICAR FILTROS
export const applyFilters = (products, filters) => {
  return products.filter((product) => {
    return Object.entries(filters).every(([key, values]) => {
      if (!values.length) return true;

      if (key === "color") {
        return product.variants.some((v) => values.includes(v.color));
      }

      if (key === "size") {
        return product.variants.some((v) =>
          v.sizes.some((s) => values.includes(s.size) && s.stock > 0),
        );
      }

      return values.includes(product[key]);
    });
  });
};

export const applySort = (products, sort) => {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    case "newest":
      return sorted.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

    default:
      return products; // recomendados
  }
};
