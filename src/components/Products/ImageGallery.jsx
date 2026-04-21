import ImageZoom from "./ImageZoom";

// ImageGallery.jsx
const ImageGallery = ({ activeImage, setActiveImage, activeVariant }) => {
  return (
    <div className="flex gap-4 sticky top-20 self-start">
      {/* THUMBNAILS */}
      <div className="flex flex-col gap-3">
        {activeVariant.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(img)}
            className={`w-20 aspect-square bg-white transition-all duration-150 ${
              activeImage === img
                ? "border-2 border-black"
                : "border border-gray-200 hover:border-gray-400"
            }`}
          >
            <img src={img} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>

      <ImageZoom src={activeImage} />
    </div>
  );
};

export default ImageGallery;
