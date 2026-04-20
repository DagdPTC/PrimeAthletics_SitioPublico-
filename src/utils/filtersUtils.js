// src/utils/filterUtils.js

// 🔹 Obtener opciones dinámicas
export const getAvailableFilters = (products, config) => {
  const result = {};

  config.forEach(({ key }) => {
    const values = products.map((p) => p[key]).filter(Boolean);

    result[key] = [...new Set(values)];
  });

  return result;
};

// 🔹 Aplicar filtros
export const applyFilters = (products, filters) => {
  return products.filter((product) => {
    return Object.entries(filters).every(([key, values]) => {
      if (!values.length) return true;
      return values.includes(product[key]);
    });
  });
};

// 🔥 🔹 ORDENAMIENTO (esto es lo nuevo)
export const applySort = (products, sort) => {
  switch (sort) {
    case "price_asc":
      return [...products].sort((a, b) => a.price - b.price);

    case "price_desc":
      return [...products].sort((a, b) => b.price - a.price);

    case "newest":
      return [...products].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

    default:
      return products;
  }
};
