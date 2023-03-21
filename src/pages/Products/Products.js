import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './Products.scss';

const Products = () => {
  const location = useLocation();
  const queryString = location.search;
  const [searchParams, setSearchParams] = useSearchParams();
  const [productsList, setProductsList] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const limit = Number(searchParams.get('limit'));

  const getPageCnt = (totalProduct, limit) => {
    const result = [];
    const loop =
      totalProduct % limit > 0
        ? totalProduct / limit + 1
        : totalProduct / limit;
    for (let i = 1; i <= loop; i++) {
      result.push(
        <Link
          className="pageBtn"
          to={`/products?limit=10&skip=${(i - 1) * 10}`}
        >
          {i}
        </Link>
      );
    }
    return result;
  };

  const filterProducts = e => {
    const { value } = e.target;

    setProductsList([
      ...productsList.sort((a, b) => {
        if (value === 'price') {
          if (a[value] > b[value]) {
            return 1;
          } else if (a[value] < b[value]) {
            return -1;
          } else {
            return 0;
          }
        } else {
          if (a[value] > b[value]) {
            return -1;
          } else if (a[value] < b[value]) {
            return 1;
          } else {
            return 0;
          }
        }
      }),
    ]);
  };

  const getFetchData = async () => {
    await fetch(`https://dummyjson.com/products${queryString}`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        setTotalProduct(data.total);
        setProductsList(data.products);
      });
  };
  useEffect(() => {
    getFetchData();
  }, [queryString]);

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
      <div className="buttonWrap">{getPageCnt(totalProduct, limit)}</div>
    </div>
  );
};

export default Products;
