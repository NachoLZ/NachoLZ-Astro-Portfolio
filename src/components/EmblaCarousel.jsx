import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/embla.css";

export const EmblaCarousel = ({ galleries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const openCarousel = useCallback(
    (galleryId) => {
      const gallery = galleries[galleryId];
      if (gallery) {
        setImages(gallery);
        setIsOpen(true);
      }
    },
    [galleries]
  );

  const closeCarousel = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleOpenEvent = (event) => {
      openCarousel(event.detail.galleryId);
    };

    document.addEventListener("open-carousel", handleOpenEvent);
    return () => {
      document.removeEventListener("open-carousel", handleOpenEvent);
    };
  }, [openCarousel]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCarousel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeCarousel]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeCarousel}
    >
      <button
        onClick={closeCarousel}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        &times;
      </button>
      <div
        className="embla"
        ref={emblaRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[80vh] max-w-[80vw]"
              />
            </div>
          ))}
        </div>
        <button
          className="embla__prev absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          &#10094;
        </button>
        <button
          className="embla__next absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl"
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};
