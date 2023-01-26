import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageBox = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex !== IMAGE_LIST.length - 1) {
        imageBox.current.style.transform = `translateX(-${
          (currentIndex + 1) * 100
        }vw)`;
        setCurrentIndex(prev => prev + 1);
      }
      if (currentIndex >= IMAGE_LIST.length - 1) {
        imageBox.current.style.transform = `translateX(${0})`;
        setCurrentIndex(0);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const handleClickDot = num => {
    imageBox.current.style.transform = `translateX(-${num * 100}vw)`;
    setCurrentIndex(num);
  };

  return (
    <div className="carousel">
      <h2>캐러셀 구현하기</h2>
      <div className="imageContainer">
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
      </div>
      <div className="dotContainer">
        {IMAGE_LIST.map(list => {
          return (
            <div
              key={list}
              className={`dot ${currentIndex === list - 1 && 'current'}`}
              onClick={() => {
                handleClickDot(list - 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const IMAGE_LIST = [1, 2, 3, 4, 5];
