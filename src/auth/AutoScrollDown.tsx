import React from 'react';
import './AutoScrollDown.css';

type VerticalAutoScrollDownProps = {
  images: string[];
};

const VerticalAutoScrollDown: React.FC<VerticalAutoScrollDownProps> = ({ images }) => {
  const allImages = [...images, ...images]; // Duplicate for smooth loop

  return (
    <div className="vertical-scroll-box">
      <div className="vertical-scroll-track-down">
        {allImages.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="scroll-image" />
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoScrollDown;
