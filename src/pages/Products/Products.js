import React, { useEffect, useState } from 'react';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductsList(data.products);
        setTotalProduct(Math.floor(data.total / 10));
      });
  }, []);

  console.log(productsList);

  const filterProducts = e => {
    if (e.target.value === 'price') {
      productsList.sort((a, b) => a.price - b.price);
      const sorted = [...productsList];
      setProductsList(sorted);
    }
    if (e.target.value === 'rating') {
      productsList.sort((a, b) => b.rating - a.rating);
      const sorted = [...productsList];
      setProductsList(sorted);
    }
    if (e.target.value === 'discountPercentage') {
      productsList.sort((a, b) => b.discountPercentage - a.discountPercentage);
      const sorted = [...productsList];
      setProductsList(sorted);
    }
  };

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
            <div key={list.id} className="cardContainer">
              <img
                src={list.thumbnail}
                alt={list.title}
                className="cardImage"
              />
              <div className="contentBox">
                <span>상품명 : {list.title}</span>
                <span>가격 : $ {list.price}</span>
                <span>별점 : {list.rating}</span>
                <span>할인율 : {list.discountPercentage}% </span>
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
