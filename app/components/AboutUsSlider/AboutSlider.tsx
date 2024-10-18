'use client';

import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.americanholdingintl.com/businesswoman-talking-on-smart-phone-at-corporate-2022-12-16-21-54-27-utc.jpg',
    'https://www.americanholdingintl.com/businesswomen-walking-in-corporate-building-2021-10-20-18-04-38-utc.jpg',
    'https://www.americanholdingintl.com/creative-business-people-working-on-business-proje-2022-02-02-03-56-34-utc.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    borderRadius: '50%',
    height: '43px',
    width: '43px',
    transition: 'background-color 0.3s ease-in-out',
    border: 'none',
  };

  return (
    <div className="h-full w-full relative">
      <div className="overflow-hidden h-full w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover" 
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-5 space-x-4">
        <button
          style={buttonStyle}
          onClick={handlePrev}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#3740b0';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'gray';
          }}
        >
          {'<'}
        </button>
        <button
          style={buttonStyle}
          onClick={handleNext}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#3740b0';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'gray';
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
