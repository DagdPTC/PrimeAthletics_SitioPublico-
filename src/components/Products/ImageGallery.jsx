import ImageZoom from "./ImageZoom";

const ImageGallery = ({ activeImage, setActiveImage, activeVariant }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:sticky lg:top-20 lg:self-start">
      {/* IMAGEN PRINCIPAL — primero en mobile */}
      <div className="order-1 lg:order-2">
        <ImageZoom src={activeImage?.url} />
      </div>

      {/* THUMBNAILS — fila horizontal en mobile, columna en desktop */}
      <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
        {activeVariant?.images?.map((img, i) => (
          <button
            key={img.public_id || i}
            onClick={() => setActiveImage(img)}
            className={`w-16 lg:w-20 aspect-square flex-shrink-0 bg-white transition-all duration-150 ${
              activeImage?.public_id === img.public_id
                ? "border-2 border-black"
                : "border border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={img.url}
              className="w-full h-full object-contain"
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
