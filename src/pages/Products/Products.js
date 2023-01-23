import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [btnActive, setBtnActive] = useState('');
  const [totalProduct, setTotalProduct] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams(0);
  const navigate = useNavigate();
  const skip = searchParams.get('skip');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${
        limit === null ? 10 : limit
      }&skip=${skip === null ? 0 : skip}`
    )
      .then(res => res.json())
      .then(data => {
        setProductsList(data.products);
        setTotalProduct(Math.floor(data.total / 10));
      });
  }, [limit, skip]);

  const goToSearchParams = pageNumber => {
    setBtnActive(pageNumber);
    searchParams.set('limit', totalProduct);
    searchParams.set('skip', (pageNumber - 1) * totalProduct);
    setSearchParams(searchParams);
  };

  const filterProducts = e => {
    const filter = [...productsList];
    if (e.target.value === 'price') {
      filter.sort((a, b) => a.price - b.price);
      setProductsList(filter);
    } else if (e.target.value === 'rating') {
      filter.sort((a, b) => Math.floor(b.rating - a.rating));
      setProductsList(filter);
    } else if (e.target.value === 'discountPercentage') {
      filter.sort((a, b) =>
        Math.floor(b.discountPercentage - a.discountPercentage)
      );
      setProductsList(filter);
    }
    console.log(e.target.value);
  };
  const goToDetail = id => {
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
        {productsList.map(list => {
          return (
            <div key={list.id} className="cardContainer">
              <img
                alt={list.title}
                className="cardImage"
                src={list.thumbnail}
                onClick={() => goToDetail(list.id)}
              />
              <div className="contentBox">
                <span>상품명 : {list.title}</span>
                <span>가격 : ${list.price}</span>
                <span>별점 : {list.rating}</span>
                <span>할인율 : {list.discountPercentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttonWrap">
        {BUTTON_LIST.map(index => {
          return (
            <button
              className={index === btnActive ? 'clicked pageBtn' : 'pageBtn'}
              onClick={() => goToSearchParams(index)}
              key={index}
            >
              {index}
            </button>
          );
        })}
      </div>
    </div>
  );
};
const BUTTON_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default Products;
