// Estructura del megamenu por género
// Las rutas generadas serán: /:gender/:category, /:gender/deporte/:sport, /:gender/tipo/:productType

export const megaMenuData = {
  hombres: {
    novedades: {
      label: "Novedades",
      links: [
        { label: "Nuevos ingresos", path: "/novedades" },
        { label: "Más vendidos", path: "/hombres/mas-vendidos" },
        { label: "Ofertas", path: "/hombres/ofertas" },
      ],
    },
    categorias: {
      label: "Categorías",
      links: [
        { label: "Ropa", path: "/hombres/ropa" },
        { label: "Zapatos", path: "/hombres/zapatos" },
      ],
    },
    ropa: {
      label: "Ropa",
      links: [
        { label: "Camisetas", path: "/hombres/tipo/camiseta" },
        { label: "Pants", path: "/hombres/tipo/pants" },
        { label: "Shorts", path: "/hombres/tipo/short" },
        { label: "Calcetas", path: "/hombres/tipo/calcetas" },
      ],
    },
    zapatos: {
      label: "Zapatos por deporte",
      links: [
        { label: "Fútbol Turf", path: "/hombres/deporte/football_turf" },
        { label: "Fútbol Indoor", path: "/hombres/deporte/football_indoor" },
        { label: "Basketball", path: "/hombres/deporte/basketball" },
        { label: "Running", path: "/hombres/deporte/running" },
        { label: "Volleyball", path: "/hombres/deporte/volleyball" },
        { label: "Crossfit", path: "/hombres/deporte/crossfit" },
        { label: "Trail Running", path: "/hombres/deporte/trail_running" },
      ],
    },
  },

  mujeres: {
    novedades: {
      label: "Novedades",
      links: [
        { label: "Nuevos ingresos", path: "/novedades" },
        { label: "Más vendidos", path: "/mujeres/mas-vendidos" },
        { label: "Ofertas", path: "/mujeres/ofertas" },
      ],
    },
    categorias: {
      label: "Categorías",
      links: [
        { label: "Ropa", path: "/mujeres/ropa" },
        { label: "Zapatos", path: "/mujeres/zapatos" },
      ],
    },
    ropa: {
      label: "Ropa",
      links: [
        { label: "Camisetas", path: "/mujeres/tipo/camiseta" },
        { label: "Pants", path: "/mujeres/tipo/pants" },
        { label: "Shorts", path: "/mujeres/tipo/short" },
        { label: "Calcetas", path: "/mujeres/tipo/calcetas" },
      ],
    },
    zapatos: {
      label: "Zapatos por deporte",
      links: [
        { label: "Running", path: "/mujeres/deporte/running" },
        { label: "Volleyball", path: "/mujeres/deporte/volleyball" },
        { label: "Crossfit", path: "/mujeres/deporte/crossfit" },
        { label: "Trail Running", path: "/mujeres/deporte/trail_running" },
        { label: "Fútbol Turf", path: "/mujeres/deporte/football_turf" },
        { label: "Basketball", path: "/mujeres/deporte/basketball" },
      ],
    },
  },

  ninos: {
    novedades: {
      label: "Novedades",
      links: [
        { label: "Nuevos ingresos", path: "/novedades" },
        { label: "Más vendidos", path: "/ninos/mas-vendidos" },
        { label: "Ofertas", path: "/ninos/ofertas" },
      ],
    },
    categorias: {
      label: "Categorías",
      links: [
        { label: "Ropa", path: "/ninos/ropa" },
        { label: "Zapatos", path: "/ninos/zapatos" },
      ],
    },
    ropa: {
      label: "Ropa",
      links: [
        { label: "Camisetas", path: "/ninos/tipo/camiseta" },
        { label: "Pants", path: "/ninos/tipo/pants" },
        { label: "Shorts", path: "/ninos/tipo/short" },
        { label: "Calcetas", path: "/ninos/tipo/calcetas" },
      ],
    },
    zapatos: {
      label: "Zapatos por deporte",
      links: [
        { label: "Fútbol Turf", path: "/ninos/deporte/football_turf" },
        { label: "Fútbol Indoor", path: "/ninos/deporte/football_indoor" },
        { label: "Basketball", path: "/ninos/deporte/basketball" },
        { label: "Running", path: "/ninos/deporte/running" },
        { label: "Volleyball", path: "/ninos/deporte/volleyball" },
      ],
    },
  },
};

// — Lo de abajo lo mantienes si algo más lo importa —
export const taxonomy = {
  ropa: {
    productTypes: ["camiseta", "pants", "short", "calcetas"],
    sports: ["training", "gym", "running"],
  },
  zapatos: {
    productTypes: ["tenis", "sandalias"],
    sports: [
      "running",
      "basketball",
      "football_turf",
      "football_indoor",
      "volleyball",
      "crossfit",
      "trail_running",
    ],
  },
};

export const brands = ["nike", "adidas", "puma"];

export const allSubcategories = [];
