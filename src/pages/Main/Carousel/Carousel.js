import React, { useState, useRef } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageBox = useRef();
  const imageWidthSize = 50;
  const isFirstImage = currentIndex !== 0;
  const isLastImage = currentIndex !== IMAGE_LIST.length - 1;

  const handleImageCarousel = value => {
    imageBox.current.style.transform = `translateX(-${
      value * imageWidthSize
    }vw)`;
    setCurrentIndex(value);
  };

  return (
    <div className="carousel">
      <h2>위코드 커리큘럼</h2>
      <div className="imageContainer">
        {isFirstImage && (
          <button
            name="left"
            className="left carouselBtn"
            onClick={() => handleImageCarousel(currentIndex - 1)}
          >{`<`}</button>
        )}
        <div className="imageBox" ref={imageBox}>
          {IMAGE_LIST.map(number => {
            return (
              <div key={number} className="content">
                <img
                  src={`/images/0${number}.png`}
                  alt={number}
                  className="contentImage"
                />
              </div>
            );
          })}
        </div>
        {isLastImage && (
          <button
            name="right"
            className="right carouselBtn"
            onClick={() => handleImageCarousel(currentIndex + 1)}
          >{`>`}</button>
        )}
      </div>
      <div className="dotContainer">
        {IMAGE_LIST.map(list => {
          return (
            <div
              key={list}
              className={`dot ${currentIndex === list - 1 && 'current'}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const IMAGE_LIST = [1, 2, 3, 4, 5];
