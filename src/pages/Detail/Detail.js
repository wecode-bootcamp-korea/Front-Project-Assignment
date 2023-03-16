import React, { useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const calculateQuantity = e => {};

  const addCart = () => {};

  return (
    <div className="detail">
      <div className="imageContainer">
        <img src="" alt="" />
      </div>
      <div className="productContent">
        <span className="title">타이틀</span>
        <span className="category">카테고리</span>
        <span className="description">설명</span>
        <span className="price">가격 : $</span>
        <span className="subInfo">평점 : </span>
        <div className="handleBox">
          <span className="quantity"> 수량 : {quantity}개</span>
          <button
            className="quantityBtn"
            name="plus"
            onClick={calculateQuantity}
          >
            +
          </button>
          <button
            className="quantityBtn"
            name="minus"
            onClick={calculateQuantity}
          >
            -
          </button>
        </div>
        <button className="addCartBtn" onClick={addCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default Detail;
