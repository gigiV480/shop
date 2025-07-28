import React from 'react';
import './AutoScrollImages.css';

type VerticalAutoScrollProps = {
  images: string[];
};

const VerticalAutoScroll: React.FC<VerticalAutoScrollProps> = ({ images }) => {
  const allImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <div className="vertical-scroll-box">
      <div className="vertical-scroll-track">
        {allImages.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="scroll-image" />
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoScroll;
