import React, { useState } from 'react';  

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='bg-black'>
      <div className='container'>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} />
            <div className="carousel-content">
              <h2 className="carousel-heading fw-light">Welcome <br></br>to the Louvre</h2>
              <button className="carousel-button btn btn-warning">Discover the Louvre</button>
            </div>
          </div>

          <div className="carousel-box">
            <div className="carousel-indicator">
              <div>{currentIndex + 1} / {slides.length}</div>
              <div className="carousel-squares">
                {slides.map((_, index) => (
                  <div 
                    key={index} 
                    className={`carousel-square ${currentIndex === index ? 'active' : ''}`}
                  ></div>
                ))}
              </div>
              <div className="carousel-arrows">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
