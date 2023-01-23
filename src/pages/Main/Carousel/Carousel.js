import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageBox = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === 4) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const displayNextImage = () => {
    if (currentIndex !== IMAGE_LIST.length - 1) {
      imageBox.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }vw)`;
      setCurrentIndex(prev => prev + 1);
    } else {
      imageBox.current.style.transform = `translateX(-${
        (currentIndex - 4) * 100
      }vw)`;
      setCurrentIndex(0);
    }
  };

  const displayPrevImage = e => {
    if (currentIndex !== 0) {
      imageBox.current.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }vw)`;
      setCurrentIndex(prev => prev - 1);
    }
  };

  const moveIndex = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <h2>캐러셀 구현하기</h2>
      <div className="imageContainer">
        <button
          name="left"
          className="left carouselBtn"
          onClick={displayPrevImage}
        >{`<`}</button>
        <div className="imageBox" ref={imageBox}>
          {IMAGE_LIST.map(number => {
            return (
              <div key={number} className="content">
                <img
                  src={`/images/0${currentIndex + 1}.png`}
                  alt={number}
                  className="contentImage"
                />
              </div>
            );
          })}
        </div>
        <button
          name="right"
          className="right carouselBtn"
          onClick={displayNextImage}
        >{`>`}</button>
      </div>
      <div className="dotContainer">
        {IMAGE_LIST.map((list, index) => {
          return (
            <div
              key={index}
              className={`dot ${currentIndex === list - 1 && 'current'}`}
              onClick={() => moveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const IMAGE_LIST = [1, 2, 3, 4, 5];
