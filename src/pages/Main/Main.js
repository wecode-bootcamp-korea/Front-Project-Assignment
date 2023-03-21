import React from 'react';
import Carousel from './Carousel/Carousel';
import './Main.scss';

const Main = () => {
  return (
    <section className="main">
      <div className="carousel">
        <Carousel />
      </div>
    </section>
  );
};

export default Main;
