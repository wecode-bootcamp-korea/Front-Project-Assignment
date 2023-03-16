import React, { useState } from 'react';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const filterProducts = e => {};

  return (
    <div className="products">
      <div className="filterContainer">
        <select onChange={filterProducts}>
          <option value="">옵션을 선택해주세요</option>
          <option value="price">가격 낮은순</option>
          <option value="rating">별점 높은순</option>
          <option value="discountPercentage">할인율 높은순</option>
        </select>
      </div>
      <div className="listWrap">
        {productsList.map(list => {
          return (
            <div key={list} className="cardContainer">
              <img alt={list} src={list} className="cardImage" />
              <div className="contentBox">
                <span>상품명 : {}</span>
                <span>가격 : {}$</span>
                <span>별점 : {}</span>
                <span>할인율 : {}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttonWrap" />
    </div>
  );
};

export default Products;
