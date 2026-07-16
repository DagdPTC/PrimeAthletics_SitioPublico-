import { useState, useRef } from "react";

const ImageZoom = ({ src }) => {
  const [showZoom, setShowZoom] = useState(false);

  const imgRef = useRef();
  const lensRef = useRef();
  const zoomRef = useRef();

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    if (lensRef.current) {
      lensRef.current.style.left = `${x - 88}px`;
      lensRef.current.style.top = `${y - 88}px`;
    }

    if (zoomRef.current) {
      zoomRef.current.style.backgroundPosition = `${percentX}% ${percentY}%`;
    }
  };

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
      {/* IMAGEN */}
      <div
        ref={imgRef}
        className="relative w-full aspect-square bg-gray-100 overflow-hidden"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          className="w-full h-full object-contain"
          draggable={false}
        />

        {/* LENTE — solo visible en pantallas grandes, donde sí hay hover real */}
        <div
          ref={lensRef}
          className={`hidden lg:block absolute w-44 h-44 border border-black bg-white/20 pointer-events-none
          transition-opacity duration-150
          ${showZoom ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* ZOOM PANEL — solo en pantallas grandes que tienen espacio para mostrarlo al costado */}
      <div
        ref={zoomRef}
        className={`hidden xl:block absolute top-0 left-full ml-6 w-[420px] aspect-square border bg-no-repeat bg-white shadow-xl z-50
        transition-all duration-200 ease-out
        ${showZoom ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "250%",
        }}
      />
    </div>
  );
};

export default ImageZoom;
