import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const skip = searchParams.get('skip');

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setProductsList(data.products);
        setTotalProduct(Math.floor(data.total / 10));
      });
  }, [skip]);

  const filterProducts = e => {
    if (e.target.value === 'price') {
      productsList.sort((a, b) => a.price - b.price);
      const sortedDesc = [...productsList];
      setProductsList(sortedDesc);
    } else {
      productsList.sort((a, b) => b[e.target.value] - a[e.target.value]);
      const sortedAsc = [...productsList];
      setProductsList(sortedAsc);
    }
  };

  const handleClickBtn = num => {
    searchParams.set('skip', (num - 1) * 10);
    setSearchParams(searchParams);
  };

  const handleClickItem = id => {
    navigate(`/detail/${id}`);
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
        {productsList &&
          productsList.map(
            ({ id, title, price, rating, discountPercentage, thumbnail }) => {
              return (
                <div
                  key={id}
                  className="cardContainer"
                  onClick={handleClickItem}
                >
                  <img src={thumbnail} alt={title} className="cardImage" />
                  <div className="contentBox">
                    <span>상품명 : {title}</span>
                    <span>가격 : ${price}</span>
                    <span>별점 : {rating}</span>
                    <span>할인율 : {discountPercentage}%</span>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <div className="buttonWrap">
        {BUTTON_LIST.map(num => (
          <button
            key={num}
            onClick={() => {
              handleClickBtn(num);
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;

const BUTTON_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
