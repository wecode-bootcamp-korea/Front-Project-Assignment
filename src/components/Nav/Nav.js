import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const searchProdut = e => {
    setSearchText(e.target.value);
  };

  const goToDetail = id => {};

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=')
      .then(response => response.json())
      .then(result => setSearchList(result.products));
  }, []);

  const searchItem = searchList.filter(keyword =>
    keyword.title.toLowerCase().includes(searchText)
  );

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
          {searchText.length > 0 && (
            <div className="searchBox">
              {searchItem.length > 0 &&
                searchItem.map(list => {
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
