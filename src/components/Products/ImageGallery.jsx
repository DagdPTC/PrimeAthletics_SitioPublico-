import ImageZoom from "./ImageZoom";

const ImageGallery = ({ activeImage, setActiveImage, activeVariant }) => {
  return (
    <div className="flex gap-4 sticky top-20 self-start">
      {/* THUMBNAILS */}
      <div className="flex flex-col gap-3">
        {activeVariant?.images?.map((img, i) => (
          <button
            key={img.public_id || i}
            onClick={() => setActiveImage(img)}
            className={`w-20 aspect-square bg-white transition-all duration-150 ${
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

      {/* Le enviamos al componente de Zoom únicamente la URL en formato texto */}
      <ImageZoom src={activeImage?.url} />
    </div>
  );
};

export default ImageGallery;
