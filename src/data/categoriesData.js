export const categories = {
  zapatos: {
    label: "Zapatos",
    slug: "zapatos",
    description: "Rendimiento al límite",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    items: [
      { label: "Running", slug: "running" },
      { label: "Caminar", slug: "caminar" },
      { label: "Yoga", slug: "yoga" },
      { label: "Pilates", slug: "pilates" },
      { label: "Montaña", slug: "montana" },
    ],
  },
  utencilios: {
    label: "Utensilios",
    slug: "utencilios",
    description: "Equipo profesional",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    items: [
      { label: "Balones", slug: "balones" },
      { label: "Pesas", slug: "pesas" },
      { label: "Cintas elásticas", slug: "cintas" },
    ],
  },
  ropa: {
    label: "Ropa Deportiva",
    slug: "ropa",
    description: "Estilo en movimiento",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
    items: [
      { label: "Camisetas", slug: "camisetas" },
      { label: "Pants", slug: "pants" },
      { label: "Shorts", slug: "shorts" },
    ],
  },
};

export const featuredProducts = [
  {
    label: "Zapatos Jordan última edición",
    slug: "jordan-ultima-edicion",
    tag: "Nuevo",
  },
  { label: "Balón Mikasa", slug: "balon-mikasa", tag: null },
  { label: "Tacos colab Vinicius Jr", slug: "tacos-vinicius-jr", tag: "Colab" },
  { label: "Mancuernas 50 Lbs", slug: "mancuernas-50lbs", tag: null },
  { label: "Calcetines Cr7", slug: "calcetines-cr7", tag: null },
];

// Array plano de TODAS las subcategorías (para el CategoryFilterBar)
export const allSubcategories = Object.values(categories).flatMap(
  ({ items, label: parent }) => items.map((item) => ({ ...item, parent })),
);
