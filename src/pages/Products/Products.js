import React, { useState, useEffect } from 'react';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const filterProducts = e => {};

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => setProductsList(data.products));
  }, []);

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
        {productsList.map(
          ({ id, title, thumbnail, price, discountPercentage, rating }) => {
            return (
              <div key={id} className="cardContainer">
                <img alt={title} src={thumbnail} className="cardImage" />
                <div className="contentBox">
                  <span>상품명 : {title}</span>
                  <span>가격 : {price}$</span>
                  <span>별점 : {rating}</span>
                  <span>할인율 : {discountPercentage}%</span>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="buttonWrap" />
    </div>
  );
};

export default Products;
