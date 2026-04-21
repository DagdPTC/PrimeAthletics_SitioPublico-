// ProductDetailScreen.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

import ImageGallery from "../components/Products/ImageGallery";
import ProductInfo from "../components/Products/ProductInfo";
import ReviewsSection from "../components/Products/ReviewsSection";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [activeVariant, setActiveVariant] = useState(product?.variants?.[0]);
  const [activeImage, setActiveImage] = useState(
    product?.variants?.[0]?.images?.[0],
  );
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-16">
      {/* ─── PARTE SUPERIOR: imagen + info ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12">
        <ImageGallery
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          activeVariant={activeVariant}
        />
        <ProductInfo
          product={product}
          activeVariant={activeVariant}
          setActiveVariant={setActiveVariant}
          setActiveImage={setActiveImage}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>

      {/* ─── RESEÑAS: fila completa debajo ─── */}
      <ReviewsSection productId={product.id} />
    </div>
  );
};

export default ProductDetailScreen;
