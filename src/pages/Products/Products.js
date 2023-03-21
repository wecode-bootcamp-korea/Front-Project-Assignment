import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Products.scss';

const Products = () => {
  const location = useLocation();
  const queryString = location.search;
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const filterProducts = e => {};

  const getFetchData = async () => {
    await fetch(`https://dummyjson.com/products${queryString}`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => setProductsList(data.products));
  };
  useEffect(() => {
    getFetchData();
  }, []);
  console.log(productsList);
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
        {productsList &&
          productsList.map(list => {
            return (
              <div key={list.id} className="cardContainer">
                <img
                  alt={list.title}
                  src={list.thumbnail}
                  className="cardImage"
                />
                <div className="contentBox">
                  <span>상품명 : {list.title}</span>
                  <span>가격 : {list.price}$</span>
                  <span>별점 : {list.rating}</span>
                  <span>할인율 : {list.discountPercentage}%</span>
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
