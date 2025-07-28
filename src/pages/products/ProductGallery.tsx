import { useState, useRef, useEffect } from "react";
import styles from "./ProductGallery.module.css";

type ProductGalleryProps = {
  images: string[];
};

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const ref = thumbnailRefs.current[currentIndex];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [currentIndex]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImageWrapper}>
        <button className={styles.arrowLeft} onClick={goPrev}>◀</button>

        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className={styles.mainImage}
        />

        <button className={styles.arrowRight} onClick={goNext}>▶</button>
      </div>

      <div className={styles.thumbnailRow}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setCurrentIndex(index)}
            ref={(el) => {
              thumbnailRefs.current[index] = el;
            }}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.activeThumbnail : ""
            }`}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
