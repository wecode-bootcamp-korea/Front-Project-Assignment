import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const searchProdut = e => {
    setSearchText(e.target.value);
  };

  const goToDetail = id => {
    navigate(`/detail/${id}`);
  };
  const clear = () => {
    localStorage.clear();
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(res => setSearchList(res.products));
  }, []);

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
          {searchText === '' ? (
            ''
          ) : (
            <div className="searchBox">
              {searchList
                .filter(title => title.title.includes(searchText))
                .map(list => {
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
        <Link className="loginBtn" to="/login" onClick={clear}>
          {localStorage.getItem('yjkl92') ? '로그아웃' : '로그인'}
        </Link>
      </div>
      <div className="menuTab">
        <Link className="productsLink" to="/products">
          상품 리스트
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
