import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../stylesheets/PhotoCarousel.css";

const PhotoCarousel = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    { "src": "/images/IMG_1405.jpeg", "alt": "Image 1" },
    { "src": "/images/IMG_1711.JPG", "alt": "Image 2" },
    { "src": "/images/IMG_5251.jpg", "alt": "Image 3" },
    { "src": "/images/IMG_3436.jpeg", "alt": "Image 4" },
    { "src": "/images/IMG_3456.jpeg", "alt": "Image 5" },
    { "src": "/images/IMG_1451.jpeg", "alt": "Image 6" }
  ];

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-container" id="Past Events">
      <h2 className="carousel-heading">← past hackathons →</h2> 
      <div className="carousel">
        <button className="arrow arrow-left" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <div className="slide-container">
          {slides.map((item, idx) => (
            <img 
              src={process.env.PUBLIC_URL + item.src} 
              alt={item.alt} 
              key={idx} 
              className={slide === idx ? "slide active" : "slide"} 
            />
          ))}
        </div>
        <button className="arrow arrow-right" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? "indicator active" : "indicator"}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;