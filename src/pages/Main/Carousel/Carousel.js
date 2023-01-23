import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageBox = useRef();

  // 다음으로 가는 버튼
  const displayNextImage = () => {
    if (currentIndex !== IMAGE_LIST.length - 1) {
      imageBox.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }vw)`;
      setCurrentIndex(prev => prev + 1);
    } // 끝까지 이동했을때, 처음으로 다시 이동
    else if (currentIndex === IMAGE_LIST.length - 1) {
      imageBox.current.style.transform = 'translateX(0)';
      setCurrentIndex(prev => prev === IMAGE_LIST[0]);
    }
  };
  // 이전으로 가는 버튼
  const displayPrevImage = e => {
    if (currentIndex !== 0) {
      imageBox.current.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }vw)`;
      setCurrentIndex(prev => prev - 1);
    }
  };
  // 무한슬라이드 구현
  useEffect(() => {
    const next = setInterval(() => {
      if (currentIndex !== IMAGE_LIST.length - 1) {
        imageBox.current.style.transform = `translateX(-${
          (currentIndex + 1) * 100
        }vw)`;
        setCurrentIndex(prev => prev + 1);
      } else if (currentIndex === IMAGE_LIST.length - 1) {
        imageBox.current.style.transform = 'translateX(0)';
        setCurrentIndex(prev => prev === IMAGE_LIST[0]);
      }
    }, 3000);
    return () => clearInterval(next);
  }, [currentIndex, imageBox]);

  // dot 버튼구현
  const handleClick = list => {
    imageBox.current.style.transform = `translateX(-${list * 100}vw)`;
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
                  src={`/images/0${number}.png`}
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
              key={list}
              className={`dot ${currentIndex === list - 1 && 'current'}`}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const IMAGE_LIST = [1, 2, 3, 4, 5];
