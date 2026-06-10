import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../services/productService";
import ImageGallery from "../components/Products/ImageGallery";
import ProductInfo from "../components/Products/ProductInfo";
import ReviewsSection from "../components/Products/ReviewsSection";

const ProductDetailScreen = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeVariant, setActiveVariant] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);

        if (data?.variants?.length > 0) {
          setActiveVariant(data.variants[0]);
          setActiveImage(data.variants[0].images?.[0] || null);
        }
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <p className="text-center py-20 text-red-500 font-medium">
        {error || "Producto no encontrado"}
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-16">
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

      {/* 🔥 AQUÍ SE RENDERIZA PASANDO EL ID DE MONGO */}
      <ReviewsSection productId={product._id} />
    </div>
  );
};

export default ProductDetailScreen;
