import React, { useEffect, useState } from 'react';
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Link,
} from 'react-router-dom';
import './Products.scss';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [choiceParams, setChoiceParams] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();

  const skip = searchParams.get('skip');
  const limit = 10;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProductsList(data.products);
        setTotalProduct(Math.floor(data.total / 10));
      });
  }, [skip]);

  const movePage = pageNumber => {
    searchParams.set('skip', (pageNumber - 1) * limit);
    setSearchParams(searchParams);
  };

  const filterProducts = e => {
    setChoiceParams(choiceParams => e.target.value);
    searchParams.set('sort', `${choiceParams}`);
    setSearchParams(searchParams => searchParams);
  };

  return (
    <div className="products">
      <div className="filterContainer">
        <select onChange={filterProducts}>
          <option value="all">옵션을 선택해주세요</option>
          <option value="price">가격 낮은순</option>
          <option value="rating">별점 높은순</option>
          <option value="discountPercentage">할인율 높은순</option>
        </select>
      </div>
      <div className="listWrap">
        {productsList &&
          productsList.map(list => {
            return (
              <Link key={list.id} to={`/detail/${list.id}`}>
                <div key={list.id} className="cardContainer">
                  <img
                    alt={list.title}
                    className="cardImage"
                    src={list.thumbnail}
                  />
                  <div className="contentBox">
                    <span>상품명 : {list.title}</span>
                    <span>가격 : {list.price}$</span>
                    <span>별점 : {list.rating}</span>
                    <span>할인율 : {list.discountPercentage}%</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="buttonWrap">
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
      </div>
    </div>
  );
};

export default Products;
