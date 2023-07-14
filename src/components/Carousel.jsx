import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  const getCardClassName = (index) => {
    const classNames = ['card'];
    if (index === activeIndex) {
      classNames.push('active');
    }
    classNames.push(`day-${index}`);
    return classNames.join(' ');
  };

  return (
    <div className="carousel">
      <div className="cards-container">
        {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day, index) => (
          <div
            key={index}
            className={getCardClassName(index)}
            onMouseOver={() => handleMouseOver(index)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
