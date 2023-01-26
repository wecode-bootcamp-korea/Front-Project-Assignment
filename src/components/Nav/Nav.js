import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [itemList, setItemList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=')
      .then(res => res.json())
      .then(res => setItemList(res.products));
  }, []);

  const searchProdut = e => {
    setSearchText(e.target.value);
    setSearchList(itemList.filter(item => item.title.includes(searchText)));
  };

  const goToDetail = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <nav className="nav">
      <div className="contentContainer">
        <Link className="logo" to="/">
          Wecode
        </Link>
        <div className="search">
          <input
            className="searchInput"
            placeholder="검색"
            value={searchText}
            onChange={searchProdut}
          />
          {searchText && (
            <div className="searchBox">
              {searchList.map(list => {
                return (
                  <span
                    key={list.id}
                    className="result"
                    onClick={() => goToDetail(list.id)}
                  >
                    {list.title}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <Link className="loginBtn" to="/login">
          로그인
        </Link>
      </div>
      <div className="menuTab">
        <Link className="productsLink" to="/products?skip=0">
          상품 리스트
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
